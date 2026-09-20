#!/usr/bin/env node
/**
 * Kontrola prekladov messages/{pl,hu,de,ru}.json voči messages/en.json.
 *
 *   node scripts/check-intl-messages.mjs            # všetky štyri jazyky
 *   node scripts/check-intl-messages.mjs pl         # jeden jazyk
 *   node scripts/check-intl-messages.mjs pl --same  # + reťazce zhodné s EN
 *
 * Menné priestory, ktoré sa v týchto jazykoch nezobrazujú (e-shop, blog),
 * sa neprekladajú — číta sa angličtina (viď src/i18n/request.ts).
 * Skript hlási: chýbajúce kľúče, kľúče navyše, polia inej dĺžky, stratené
 * ICU zástupné znaky {…} a (s --same) neprelo­žené reťazce.
 */
import { readFileSync } from "node:fs";

const REQUIRED = [
  "nav", "common", "home", "team", "services", "about", "contact",
  "booking", "footer", "intl", "cmr", "cfr", "consent", "notFound",
];
// Kľúče, ktoré sa v PL/HU/DE/RU nerenderujú alebo majú zámerne inú štruktúru.
const SKIP = [
  /^home\.(regions|blog)/, // mestské stránky a blog sú len SK/EN
  /^footer\.cols/, // 3 stĺpce namiesto 4 — kontroluje sa osobitne
];
// Trhy s VLASTNOU vstupnou vrstvou (nie preklad angličtiny): domovská stránka
// má navyše blok `home.topics*` a stránka „Zahraniční klienti" vlastný zoznam
// typických vecí s odkazmi — štruktúra sa preto s angličtinou nezhoduje zámerne.
const OWN_ENTRY = {
  pl: { skip: [/^intl\.help/], extraOk: [/^home\.topics/] },
};
// Hĺbkové stránky pre zahraničného veriteľa (lib/topics) — kontrolujú sa len
// v jazykoch, kde stránka existuje (LOCALE_LIMITED_PATHNAMES v routing.ts).
const TOPIC_NS = { pl: ["xdr", "xin", "xen"] };

const load = (l) => JSON.parse(readFileSync(new URL(`../messages/${l}.json`, import.meta.url), "utf8"));
const en = load("en");
const args = process.argv.slice(2);
const showSame = args.includes("--same");
const locales = args.filter((a) => !a.startsWith("--"));
let failed = false;

const placeholders = (s) => (s.match(/\{[a-zA-Z0-9_]+\}/g) ?? []).sort().join(",");

let own = { skip: [], extraOk: [] };

function walk(a, b, path, out) {
  if (SKIP.some((re) => re.test(path)) || own.skip.some((re) => re.test(path))) return;
  if (typeof a === "string") {
    if (typeof b !== "string") return out.missing.push(path);
    if (placeholders(a) !== placeholders(b)) out.placeholders.push(path);
    if (a === b && /[a-z]{4,}/i.test(a) && !/^https?:|^[\d\s€.,+-]+$/.test(a)) out.same.push(`${path} = ${a.slice(0, 60)}`);
    return;
  }
  if (Array.isArray(a)) {
    if (!Array.isArray(b)) return out.missing.push(path);
    if (a.length !== b.length) out.lengths.push(`${path} (en ${a.length}, preklad ${b.length})`);
    a.forEach((v, i) => i < b.length && walk(v, b[i], `${path}[${i}]`, out));
    return;
  }
  if (a && typeof a === "object") {
    if (!b || typeof b !== "object") return out.missing.push(path);
    for (const k of Object.keys(a)) walk(a[k], b[k], path ? `${path}.${k}` : k, out);
    for (const k of Object.keys(b)) {
      const kp = `${path}.${k}`;
      if (!(k in a) && !own.extraOk.some((re) => re.test(kp))) out.extra.push(kp);
    }
  }
}

// ru je odložené (nepublikuje sa) — skontroluje sa len na výslovné požiadanie.
for (const l of locales.length ? locales : ["pl", "hu", "de"]) {
  const tr = load(l);
  const out = { missing: [], extra: [], lengths: [], placeholders: [], same: [] };
  own = OWN_ENTRY[l] ?? { skip: [], extraOk: [] };
  for (const ns of [...REQUIRED, ...(TOPIC_NS[l] ?? [])]) walk(en[ns], tr[ns], ns, out);
  const cols = tr.footer?.cols;
  if (!Array.isArray(cols) || cols.length !== 3 || cols[0].items.length !== 6 || cols[1].items.length !== 4 || cols[2].items.length !== 3) {
    out.lengths.push("footer.cols musí mať 3 stĺpce s 6 / 4 / 3 položkami (viď Footer.tsx INTL_COL_LINKS)");
  }
  const bad = out.missing.length + out.extra.length + out.lengths.length + out.placeholders.length;
  console.log(`\n== ${l}: ${bad ? "CHYBY" : "OK"}`);
  for (const [k, v] of Object.entries(out)) {
    if (k === "same" && !showSame) continue;
    if (v.length) console.log(`  ${k} (${v.length}):\n    ` + v.slice(0, 80).join("\n    "));
  }
  if (bad) failed = true;
}
process.exit(failed ? 1 : 0);
