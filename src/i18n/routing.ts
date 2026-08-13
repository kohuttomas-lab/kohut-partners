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
];
