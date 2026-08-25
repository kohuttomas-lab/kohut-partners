import { defineRouting } from "next-intl/routing";

// Slovak is primary (no URL prefix); English is served under /en.
// Localized pathnames keep the file-system routes canonical (English-ish)
// while exposing Slovak/English slugs to visitors.
export const routing = defineRouting({
  locales: ["sk", "en"],
  defaultLocale: "sk",
  localePrefix: "as-needed",
  // Serve Slovak URLs as Slovak and English (/en) as English regardless of the
  // browser's Accept-Language. The language switcher controls the locale; we
  // don't auto-redirect (audience is primarily Slovak).
  localeDetection: false,
  pathnames: {
    "/": "/",
    "/services": { sk: "/sluzby", en: "/services" },
    "/services/[id]": { sk: "/sluzby/[id]", en: "/services/[id]" },
    "/shop": { sk: "/e-shop", en: "/shop" },
    "/about": { sk: "/o-kancelarii", en: "/about" },
    "/blog": { sk: "/blog", en: "/blog" },
    "/blog/[id]": { sk: "/blog/[id]", en: "/blog/[id]" },
    "/contact": { sk: "/kontakt", en: "/contact" },
    "/international": { sk: "/zahranicni-klienti", en: "/international-clients" },
    // Dvojjazyčná téma pre dopravcov a špedície — slovenská verzia cieli na
    // slovenských dopravcov, anglická na zahraničných (najmä poľských).
    "/transport-debt-recovery": {
      sk: "/vymahanie-prepravnych-pohladavok",
      en: "/transport-debt-recovery",
    },
    // Zahraniční zakladatelia s.r.o. a žiadatelia o pobyt — dvojjazyčná
    // téma z rovnakého dôvodu ako CMR: cieľová skupina je prevažne mimo SR.
    "/company-formation-residence": {
      sk: "/zalozenie-firmy-a-pobyt",
      en: "/company-formation-residence",
    },
    // Local-SEO city landing pages (target query: "advokát {mesto}").
    "/lawyer-zvolen": { sk: "/advokat-zvolen", en: "/lawyer-zvolen" },
    "/lawyer-detva": { sk: "/advokat-detva", en: "/lawyer-detva" },
    "/lawyer-krupina": { sk: "/advokat-krupina", en: "/lawyer-krupina" },
    "/lawyer-banska-bystrica": { sk: "/advokat-banska-bystrica", en: "/lawyer-banska-bystrica" },
    "/lawyer-ziar-nad-hronom": { sk: "/advokat-ziar-nad-hronom", en: "/lawyer-ziar-nad-hronom" },
    // Nationwide campaign landing pages. Slovak-only by design (they target
    // Slovak clients); the /en routes render notFound().
    "/insurance-claim": { sk: "/zamietnute-poistne-plnenie", en: "/insurance-claim" },
    "/employment-termination": { sk: "/neplatna-vypoved", en: "/employment-termination" },
    "/accident-compensation": { sk: "/odskodnenie-dopravna-nehoda", en: "/accident-compensation" },
    "/consumer-credit": { sk: "/bezurocny-uver", en: "/consumer-credit" },
    "/enforcement-defense": { sk: "/zastavenie-exekucie", en: "/enforcement-defense" },
    "/state-liability": { sk: "/nahrada-skody-od-statu", en: "/state-liability" },
    // Produktové landing pages e-shop katalógu. Slovak-only (SK klientela);
    // /en renders notFound(). Slugy = presné dopyty z Plánovača.
    "/company-formation": { sk: "/zalozenie-sro", en: "/company-formation" },
    "/company-liquidation": { sk: "/likvidacia-sro", en: "/company-liquidation" },
    "/share-transfer": { sk: "/prevod-obchodneho-podielu", en: "/share-transfer" },
    "/company-changes": { sk: "/zmena-konatela-sidla-sro", en: "/company-changes" },
    "/trademark-registration": { sk: "/ochranna-znamka", en: "/trademark-registration" },
    "/trade-licence": { sk: "/zalozenie-zivnosti", en: "/trade-licence" },
    "/gdpr-documentation": { sk: "/gdpr-dokumentacia", en: "/gdpr-documentation" },
    "/eshop-documents": { sk: "/obchodne-podmienky-eshop", en: "/eshop-documents" },
    "/pre-action-letter": { sk: "/predzalobna-vyzva", en: "/pre-action-letter" },
    "/debt-recovery": { sk: "/vymahanie-pohladavok", en: "/debt-recovery" },
    "/last-will": { sk: "/zavet", en: "/last-will" },
    "/property-transfer": { sk: "/kupna-zmluva-nehnutelnost", en: "/property-transfer" },
    "/personal-bankruptcy": { sk: "/osobny-bankrot", en: "/personal-bankruptcy" },
    "/privacy": { sk: "/ochrana-udajov", en: "/privacy" },
    "/terms": { sk: "/obchodne-podmienky", en: "/terms" },
    "/cookies": { sk: "/cookies", en: "/cookies" },
  },
});

export type Locale = (typeof routing.locales)[number];
export type AppPathname = keyof typeof routing.pathnames;

/**
 * Routes that exist in Slovak only — their /en counterpart renders notFound().
 * The language switch falls back to the home page on these so it can't strand
 * a visitor on a 404.
 */
export const SK_ONLY_PATHNAMES: AppPathname[] = [
  "/insurance-claim",
  "/employment-termination",
  "/accident-compensation",
  "/consumer-credit",
  "/enforcement-defense",
  "/state-liability",
  "/company-formation",
  "/company-liquidation",
  "/share-transfer",
  "/company-changes",
  "/trademark-registration",
  "/trade-licence",
  "/gdpr-documentation",
  "/eshop-documents",
  "/pre-action-letter",
  "/debt-recovery",
  "/last-will",
  "/property-transfer",
  "/personal-bankruptcy",
];
