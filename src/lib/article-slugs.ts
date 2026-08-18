/* ============================================================
   Anglické slugy článkov — JEDINÝ zdroj pravdy.

   Zámerne vlastný súbor, nie pole v `lib/content.ts`: mapu potrebuje
   aj klientsky komponent LanguageSwitch a `content.ts` má 100+ kB
   textov článkov, ktoré do prehliadača poslať nechceme. `next.config.ts`
   si odtiaľto ťahá presmerovania, takže sa pri štarte servera nenačíta
   celý obsahový modul.

   PRIDANIE ČLÁNKU: kľúč je slovenský `id` z BLOG v `lib/content.ts`,
   hodnota anglický slug. Článok, ktorý tu nie je, beží v angličtine na
   slovenskom slugu (tak fungujú aj tri pôvodne anglicky písané články
   a články z automatu v scripts/generate-article.mjs).
   ============================================================ */

export const ARTICLE_EN_SLUGS: Record<string, string> = {
  "reklamacie-v-e-shope-prava-a-povinnosti": "e-shop-complaints-rights-and-obligations",
  "vecne-bremena-a-tarchy-odhalte-ich-pred-kupou": "easements-and-encumbrances-before-you-buy",
  "najomna-zmluva-na-byt-7-klucovych-klauzul": "apartment-lease-7-key-protective-clauses",
  "predzalobna-vyzva-preco-ju-nepodcenit": "pre-litigation-notice-why-it-matters",
  "zalozenie-s-r-o-krok-po-kroku": "setting-up-an-sro-step-by-step",
  "zodpovednost-konatela-s-r-o-kedy-rucite-majetkom": "director-liability-in-an-llc-personal-assets",
  "ako-ucinne-vymahat-pohladavku-krok-za-krokom": "how-to-recover-a-debt-step-by-step",
  "osobny-bankrot-2026-podmienky-a-postup": "personal-bankruptcy-2026-terms-and-process",
  "konkurz-vs-restrukturalizacia-ktory-nastroj-kedy": "bankruptcy-vs-restructuring-which-tool-when",
  "restrukturalizacia-2026": "restructuring-a-company-in-2026",
  "gdpr-eshop": "gdpr-for-your-e-shop-7-things-you-must-have",
  "kupa-bytu": "buying-a-flat-how-to-protect-your-money",
  "zmluva-revizia": "why-it-pays-to-have-every-contract-reviewed",
  "vymahanie-pohladavok": "debt-recovery-from-demand-to-enforcement",
  "zalozenie-sro": "forming-an-llc-step-by-step-in-2026",
};

/* Opačný smer (anglický slug → slovenský). Postavený raz pri načítaní modulu. */
const SK_BY_EN: Record<string, string> = Object.fromEntries(
  Object.entries(ARTICLE_EN_SLUGS).map(([sk, en]) => [en, sk]),
);

/** Anglický slug k slovenskému `id`; bez záznamu vracia vstup nezmenený. */
export function enArticleSlug(skId: string): string {
  return ARTICLE_EN_SLUGS[skId] ?? skId;
}

/** Slovenské `id` k anglickému slugu; bez záznamu vracia vstup nezmenený. */
export function skArticleSlug(enSlug: string): string {
  return SK_BY_EN[enSlug] ?? enSlug;
}

/** Preklad slugu článku medzi jazykmi — pre prepínač jazyka. */
export function articleSlugIn(slug: string, from: string, to: string): string {
  if (from === to) return slug;
  return to === "en" ? enArticleSlug(slug) : skArticleSlug(slug);
}

/** Staré anglické adresy (na slovenskom slugu) → nové anglické. Zdroj pre next.config.ts. */
export function getArticleEnRedirects(): { from: string; to: string }[] {
  return Object.entries(ARTICLE_EN_SLUGS).map(([from, to]) => ({ from, to }));
}
