// Auto-generuje SK+EN blog článok cez Claude API a vloží ho do src/lib/content.ts.
// Spúšťa GitHub Action (.github/workflows/auto-article.yml), výstup ide do PR na schválenie.
// Vyžaduje env ANTHROPIC_API_KEY. Lokálny suchý beh: `node scripts/generate-article.mjs --dry-run`.
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { assertPureInsertion, extractIds, assertOnlyPrepended } from "./lib/insert-guard.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const CONTENT = join(ROOT, "src/lib/content.ts");
const TOPICS = join(ROOT, "marketing/article-topics.md");
const DRY = process.argv.includes("--dry-run");

const SK_MONTHS = ["januára", "februára", "marca", "apríla", "mája", "júna",
  "júla", "augusta", "septembra", "októbra", "novembra", "decembra"];
const EN_MONTHS = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];

const DIA = { á: "a", ä: "a", č: "c", ď: "d", é: "e", í: "i", ĺ: "l", ľ: "l",
  ň: "n", ó: "o", ô: "o", ŕ: "r", š: "s", ť: "t", ú: "u", ý: "y", ž: "z" };
function slugify(s) {
  return s.toLowerCase().replace(/./g, (c) => DIA[c] ?? c)
    .replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "").slice(0, 60);
}

// 1) Vyber prvú nezaškrtnutú tému.
const topicsRaw = readFileSync(TOPICS, "utf8");
const topicsLines = topicsRaw.split("\n");
const topicIdx = topicsLines.findIndex((l) => /^- \[ \] /.test(l));
if (topicIdx === -1) { console.log("Žiadne nezaškrtnuté témy — končím bez zmeny."); process.exit(0); }
const topicLine = topicsLines[topicIdx];
const topicText = topicLine.replace(/^- \[ \] /, "").trim();
const [topic, catPart] = topicText.split("|").map((s) => s.trim());
const category = (catPart || "").replace(/^kategória:\s*/i, "").trim() || "Novinky";

// 2) Vygeneruj článok (štruktúrovaný JSON výstup).
const SCHEMA = {
  type: "object", additionalProperties: false,
  properties: {
    category_sk: { type: "string" }, category_en: { type: "string" },
    read: { type: "integer" },
    title_sk: { type: "string" }, excerpt_sk: { type: "string" },
    title_en: { type: "string" }, excerpt_en: { type: "string" },
    body_sk: { type: "array", items: { type: "string" } },
    body_en: { type: "array", items: { type: "string" } },
  },
  required: ["category_sk", "category_en", "read", "title_sk", "excerpt_sk",
    "title_en", "excerpt_en", "body_sk", "body_en"],
};

const prompt = `Si skúsený slovenský advokát a copywriter pre web advokátskej kancelárie kohút & partners (tkak.sk, Zvolen).
Napíš krátky, dôveryhodný SEO blog článok na tému: "${topic}".
Kategória: ${category}.

Požiadavky:
- SK aj EN verzia (en = verný preklad sk).
- title: pútavý, max ~60 znakov, obsahuje kľúčové slovo z témy.
- excerpt: 1–2 vety (max ~160 znakov), zhrnutie + dôvod prečítať.
- body: 4–6 odsekov (každý ako samostatný string v poli), praktické, zrozumiteľné laikovi, bez právnického balastu.
  Posledný odsek = jemná výzva na konzultáciu s kanceláriou (pevná cena, odpoveď do 24 h).
- read: odhad času čítania v minútach (číslo, zvyčajne 3–6).
- category_sk/category_en: preklad kategórie "${category}".
- DÔLEŽITÉ: žiadne konkrétne paragrafy/čísla zákonov ak si nie si istý; píš všeobecne a presne. Toto je návrh na ľudské schválenie.`;

if (DRY && !process.env.ANTHROPIC_API_KEY) {
  console.log("[dry-run] Téma:", topic, "| kategória:", category, "\n[dry-run] Bez ANTHROPIC_API_KEY negenerujem, len overujem výber témy.");
  process.exit(0);
}

const { default: Anthropic } = await import("@anthropic-ai/sdk");
const client = new Anthropic();
const res = await client.messages.create({
  model: "claude-opus-4-8",
  max_tokens: 16000,
  thinking: { type: "adaptive" },
  output_config: { format: { type: "json_schema", schema: SCHEMA } },
  messages: [{ role: "user", content: prompt }],
});
const textBlock = res.content.find((b) => b.type === "text");
if (!textBlock) { console.error("Žiadny textový blok v odpovedi (stop_reason:", res.stop_reason, ")"); process.exit(1); }
const a = JSON.parse(textBlock.text);

// 3) Doplň metadáta (id, dátum, iso, tón).
const now = new Date();
const slug = slugify(a.title_sk);
const dateSk = `${now.getDate()}. ${SK_MONTHS[now.getMonth()]} ${now.getFullYear()}`;
const dateEn = `${now.getDate()} ${EN_MONTHS[now.getMonth()]} ${now.getFullYear()}`;
const iso = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}T09:00:00+02:00`;

const contentSrc = readFileSync(CONTENT, "utf8");
if (contentSrc.includes(`id: "${slug}"`)) {
  console.log(`Článok so slugom "${slug}" už existuje — končím bez zmeny.`); process.exit(0);
}

// 4) Poskladaj RawArticle literál a vlož na začiatok poľa BLOG.
const obj = `  {
    id: ${JSON.stringify(slug)},
    cat: { sk: ${JSON.stringify(a.category_sk)}, en: ${JSON.stringify(a.category_en)} },
    tone: "brand",
    read: ${Number(a.read) || 4},
    date: { sk: ${JSON.stringify(dateSk)}, en: ${JSON.stringify(dateEn)} },
    iso: ${JSON.stringify(iso)},
    sk: [${JSON.stringify(a.title_sk)}, ${JSON.stringify(a.excerpt_sk)}],
    en: [${JSON.stringify(a.title_en)}, ${JSON.stringify(a.excerpt_en)}],
    body: {
      sk: ${JSON.stringify(a.body_sk)},
      en: ${JSON.stringify(a.body_en)},
    },
  },
`;
const anchor = "const BLOG: RawArticle[] = [\n";
const anchorAt = contentSrc.indexOf(anchor);
if (anchorAt === -1) { console.error("Nenašiel som kotvu BLOG poľa v content.ts"); process.exit(1); }
const insertAt = anchorAt + anchor.length; // hneď za kotvu = na začiatok poľa BLOG
const updatedContent = contentSrc.slice(0, insertAt) + obj + contentSrc.slice(insertAt);

// 5) POISTKA (1. vrstva): dokáž, že išlo o čisté vloženie a že žiadny už zverejnený
//    článok nezmizol ani sa nepremenoval. Beží aj v --dry-run a hodí chybu skôr,
//    než sa čokoľvek zapíše — 2. vrstva je git kontrola v auto-article.yml.
//    Id článkov hľadáme len vo VÝREZE poľa BLOG; v content.ts majú pole id aj
//    služby a členovia tímu (a tie sú vnorené hlbšie).
const BLOG_ID_RE = /^ {4}id: "([^"]+)",$/gm;
function blogSlice(src) {
  const from = src.indexOf(anchor) + anchor.length;
  const end = src.indexOf("\n];\n", from); // pole BLOG končí "];" na začiatku riadku
  if (end === -1) { console.error("Nenašiel som koniec poľa BLOG v content.ts"); process.exit(1); }
  return src.slice(from, end);
}
assertPureInsertion({
  original: contentSrc,
  updated: updatedContent,
  inserted: obj,
  at: insertAt,
  label: "src/lib/content.ts",
});
assertOnlyPrepended(
  extractIds(blogSlice(contentSrc), BLOG_ID_RE),
  extractIds(blogSlice(updatedContent), BLOG_ID_RE),
  slug,
  "pole BLOG v src/lib/content.ts",
);

// 6) Zaškrtni tému. Cez index riadku, NIE cez topicsRaw.replace(): String.replace by
//    v náhradnom reťazci expandoval sekvencie $&, $', $` a $1–$9 (téma ich môže
//    obsahovať) a hľadal by prvý výskyt PODREŤAZCA, teda nie nutne ten správny riadok.
const updatedTopics = topicsLines
  .map((l, i) => (i === topicIdx ? l.replace("- [ ] ", "- [x] ") : l))
  .join("\n");

if (DRY) {
  console.log("[dry-run] Vygenerovaný článok:\n", obj);
  process.exit(0);
}
writeFileSync(CONTENT, updatedContent);

// 7) POISTKA (1. vrstva, kontrola PO zápise). Dôkaz v kroku 5 porovnáva reťazce, ktoré
//    sme si sami poskladali v pamäti — je pravdivý z definície slice() a sám o sebe by
//    nezlyhal nikdy. Až toto je dôkaz o súbore, ktorý REÁLNE leží na disku a pôjde na web.
//    Ak zlyhá, article-topics.md sa už nezapíše, takže 2. vrstva uvidí neúplnú zmenu a tiež zastaví.
const zapisane = readFileSync(CONTENT, "utf8");
assertPureInsertion({
  original: contentSrc,
  updated: zapisane,
  inserted: obj,
  at: insertAt,
  label: "src/lib/content.ts (stav po zápise)",
});
assertOnlyPrepended(
  extractIds(blogSlice(contentSrc), BLOG_ID_RE),
  extractIds(blogSlice(zapisane), BLOG_ID_RE),
  slug,
  "pole BLOG v src/lib/content.ts (stav po zápise)",
);

writeFileSync(TOPICS, updatedTopics);
console.log(`Hotovo: pridaný článok "${a.title_sk}" (slug ${slug}).`);
