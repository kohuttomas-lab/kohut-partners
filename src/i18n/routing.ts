import { defineRouting } from "next-intl/routing";

/**
 * Slug pre jazyky, v ktorých stránka neexistuje (PL/HU/DE/RU pri blogu,
 * e-shope, mestských, právnych a kampaňových stránkach). Routing vyžaduje
 * hodnotu pre každý jazyk; stránka sama vráti notFound() — viď isAvailableIn.
 */
const same = (slug: string) => ({ pl: slug, hu: slug, de: slug, ru: slug });

// Slovak is primary (no URL prefix); English is served under /en.
// Polish, Hungarian, German and Russian (/pl, /hu, /de, /ru) carry the same
// international-client subset as English minus blog, e-shop, city and legal
// pages — see INTL_LOCALES / isAvailableIn below.
// Localized pathnames keep the file-system routes canonical (English-ish)
// while exposing localized slugs to visitors. Russian slugs are transliterated
// to Latin so the URLs stay readable when copied.
export const routing = defineRouting({
  locales: ["sk", "en", "pl", "hu", "de", "ru"],
  defaultLocale: "sk",
  localePrefix: "as-needed",
  // Serve Slovak URLs as Slovak and English (/en) as English regardless of the
  // browser's Accept-Language. The language switcher controls the locale; we
  // don't auto-redirect (audience is primarily Slovak).
  localeDetection: false,
  pathnames: {
    "/": "/",
    "/services": {
      sk: "/sluzby",
      en: "/services",
      pl: "/uslugi",
      hu: "/szolgaltatasok",
      de: "/leistungen",
      ru: "/uslugi",
    },
    "/services/[id]": {
      sk: "/sluzby/[id]",
      en: "/services/[id]",
      pl: "/uslugi/[id]",
      hu: "/szolgaltatasok/[id]",
      de: "/leistungen/[id]",
      ru: "/uslugi/[id]",
    },
    "/shop": { sk: "/e-shop", en: "/shop", ...same("/shop") },
    // Objednávka služby bez platby vopred (formulár, ?balik=<id> predvyplní službu).
    "/shop/order": { sk: "/e-shop/objednavka", en: "/shop/order", ...same("/shop/order") },
    "/about": {
      sk: "/o-kancelarii",
      en: "/about",
      pl: "/o-kancelarii",
      hu: "/az-irodarol",
      de: "/ueber-uns",
      ru: "/o-nas",
    },
    "/blog": { sk: "/blog", en: "/blog", ...same("/blog") },
    "/blog/[id]": { sk: "/blog/[id]", en: "/blog/[id]", ...same("/blog/[id]") },
    "/contact": {
      sk: "/kontakt",
      en: "/contact",
      pl: "/kontakt",
      hu: "/kapcsolat",
      de: "/kontakt",
      ru: "/kontakty",
    },
    "/international": {
      sk: "/zahranicni-klienti",
      en: "/international-clients",
      pl: "/klienci-zagraniczni",
      hu: "/kulfoldi-ugyfelek",
      de: "/internationale-mandanten",
      ru: "/inostrannym-klientam",
    },
    // Dvojjazyčná téma pre dopravcov a špedície — slovenská verzia cieli na
    // slovenských dopravcov, anglická na zahraničných (najmä poľských).
    "/transport-debt-recovery": {
      sk: "/vymahanie-prepravnych-pohladavok",
      en: "/transport-debt-recovery",
      pl: "/windykacja-naleznosci-transportowych",
      hu: "/fuvardij-kovetelesek-behajtasa",
      de: "/inkasso-transportforderungen",
      ru: "/vzyskanie-dolgov-za-perevozku",
    },
    // Zahraniční zakladatelia s.r.o. a žiadatelia o pobyt — dvojjazyčná
    // téma z rovnakého dôvodu ako CMR: cieľová skupina je prevažne mimo SR.
    "/company-formation-residence": {
      sk: "/zalozenie-firmy-a-pobyt",
      en: "/company-formation-residence",
      pl: "/zalozenie-spolki-i-pobyt",
      hu: "/cegalapitas-es-tartozkodas",
      de: "/firmengruendung-und-aufenthalt",
      ru: "/registraciya-firmy-i-vnzh",
    },
    // Local-SEO city landing pages (target query: "advokát {mesto}").
    "/lawyer-zvolen": { sk: "/advokat-zvolen", en: "/lawyer-zvolen", ...same("/lawyer-zvolen") },
    "/lawyer-detva": { sk: "/advokat-detva", en: "/lawyer-detva", ...same("/lawyer-detva") },
    "/lawyer-krupina": { sk: "/advokat-krupina", en: "/lawyer-krupina", ...same("/lawyer-krupina") },
    "/lawyer-banska-bystrica": { sk: "/advokat-banska-bystrica", en: "/lawyer-banska-bystrica", ...same("/lawyer-banska-bystrica") },
    "/lawyer-ziar-nad-hronom": { sk: "/advokat-ziar-nad-hronom", en: "/lawyer-ziar-nad-hronom", ...same("/lawyer-ziar-nad-hronom") },
    // Nationwide campaign landing pages. Slovak-only by design (they target
    // Slovak clients); the /en routes render notFound().
    "/insurance-claim": { sk: "/zamietnute-poistne-plnenie", en: "/insurance-claim", ...same("/insurance-claim") },
    "/employment-termination": { sk: "/neplatna-vypoved", en: "/employment-termination", ...same("/employment-termination") },
    "/accident-compensation": { sk: "/odskodnenie-dopravna-nehoda", en: "/accident-compensation", ...same("/accident-compensation") },
    "/consumer-credit": { sk: "/bezurocny-uver", en: "/consumer-credit", ...same("/consumer-credit") },
    "/enforcement-defense": { sk: "/zastavenie-exekucie", en: "/enforcement-defense", ...same("/enforcement-defense") },
    "/state-liability": { sk: "/nahrada-skody-od-statu", en: "/state-liability", ...same("/state-liability") },
    // Produktové landing pages e-shop katalógu. Slovak-only (SK klientela);
    // /en renders notFound(). Slugy = presné dopyty z Plánovača.
    "/company-formation": { sk: "/zalozenie-sro", en: "/company-formation", ...same("/company-formation") },
    "/company-liquidation": { sk: "/likvidacia-sro", en: "/company-liquidation", ...same("/company-liquidation") },
    "/share-transfer": { sk: "/prevod-obchodneho-podielu", en: "/share-transfer", ...same("/share-transfer") },
    "/company-changes": { sk: "/zmena-konatela-sidla-sro", en: "/company-changes", ...same("/company-changes") },
    "/trademark-registration": { sk: "/ochranna-znamka", en: "/trademark-registration", ...same("/trademark-registration") },
    "/trade-licence": { sk: "/zalozenie-zivnosti", en: "/trade-licence", ...same("/trade-licence") },
    "/gdpr-documentation": { sk: "/gdpr-dokumentacia", en: "/gdpr-documentation", ...same("/gdpr-documentation") },
    "/eshop-documents": { sk: "/obchodne-podmienky-eshop", en: "/eshop-documents", ...same("/eshop-documents") },
    "/pre-action-letter": { sk: "/predzalobna-vyzva", en: "/pre-action-letter", ...same("/pre-action-letter") },
    "/debt-recovery": { sk: "/vymahanie-pohladavok", en: "/debt-recovery", ...same("/debt-recovery") },
    "/last-will": { sk: "/zavet", en: "/last-will", ...same("/last-will") },
    "/property-transfer": { sk: "/kupna-zmluva-nehnutelnost", en: "/property-transfer", ...same("/property-transfer") },
    "/personal-bankruptcy": { sk: "/osobny-bankrot", en: "/personal-bankruptcy", ...same("/personal-bankruptcy") },
    // Druhá vlna tematických stránok (9/2026) — rovnako len po slovensky.
    "/debt-relief-bankruptcy": { sk: "/oddlzenie-konkurzom", en: "/debt-relief-bankruptcy", ...same("/debt-relief-bankruptcy") },
    "/debt-relief-repayment-plan": { sk: "/oddlzenie-splatkovym-kalendarom", en: "/debt-relief-repayment-plan", ...same("/debt-relief-repayment-plan") },
    "/payment-order-objection": { sk: "/odpor-proti-platobnemu-rozkazu", en: "/payment-order-objection", ...same("/payment-order-objection") },
    "/criminal-defense": { sk: "/obhajoba-v-trestnom-konani", en: "/criminal-defense", ...same("/criminal-defense") },
    "/drink-driving": { sk: "/alkohol-za-volantom", en: "/drink-driving", ...same("/drink-driving") },
    "/rejected-warranty-claim": { sk: "/neuznana-reklamacia", en: "/rejected-warranty-claim", ...same("/rejected-warranty-claim") },
    "/trade-licence-advice": { sk: "/zivnost-alebo-sro", en: "/trade-licence-advice", ...same("/trade-licence-advice") },
    "/legal-consultation": { sk: "/pravna-konzultacia", en: "/legal-consultation", ...same("/legal-consultation") },
    "/payment-order": { sk: "/platobny-rozkaz", en: "/payment-order", ...same("/payment-order") },
    "/privacy": { sk: "/ochrana-udajov", en: "/privacy", ...same("/privacy") },
    "/terms": { sk: "/obchodne-podmienky", en: "/terms", ...same("/terms") },
    "/cookies": { sk: "/cookies", en: "/cookies", ...same("/cookies") },
    // Funkcia na odstúpenie od zmluvy podľa § 20a zák. 108/2024 Z. z. (e-shop, len SK/EN).
    "/withdrawal": { sk: "/odstupenie-od-zmluvy", en: "/withdrawal", ...same("/withdrawal") },
  },
});

export type Locale = (typeof routing.locales)[number];
export type AppPathname = keyof typeof routing.pathnames;

/**
 * Jazyky s plným obsahom (blog, e-shop, mestské a právne stránky). Obsah, ktorý
 * existuje len dvojjazyčne, sa typuje týmto — nie šesťjazyčným `Locale`.
 */
export type BaseLocale = "sk" | "en";

/** Jazyky medzinárodnej vetvy: rovnaký výber stránok ako EN, bez blogu, e-shopu,
    mestských a právnych stránok. */
export const INTL_LOCALES = ["pl", "hu", "de", "ru"] as const satisfies readonly Locale[];
export type IntlLocale = (typeof INTL_LOCALES)[number];

export function isIntlLocale(locale: string): locale is IntlLocale {
  return (INTL_LOCALES as readonly string[]).includes(locale);
}

/** Dvojjazyčný obsah pre akýkoľvek jazyk: slovenčina ostáva, zvyšok číta angličtinu. */
export function baseLocale(locale: string): BaseLocale {
  return locale === "sk" ? "sk" : "en";
}

/** Vlastné meno jazyka — pre prepínač jazykov (vždy v danom jazyku). */
export const LOCALE_NAMES: Record<Locale, string> = {
  sk: "Slovenčina",
  en: "English",
  pl: "Polski",
  hu: "Magyar",
  de: "Deutsch",
  ru: "Русский",
};

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
  "/debt-relief-bankruptcy",
  "/debt-relief-repayment-plan",
  "/payment-order-objection",
  "/criminal-defense",
  "/drink-driving",
  "/rejected-warranty-claim",
  "/trade-licence-advice",
  "/legal-consultation",
  "/payment-order",
];

/**
 * Routes that exist in Slovak and English only — blog, e-shop, city landing
 * pages and the legal documents. In PL/HU/DE/RU they render notFound(); the
 * footer there links to the English legal documents instead.
 */
export const BASE_ONLY_PATHNAMES: AppPathname[] = [
  "/shop",
  "/shop/order",
  "/blog",
  "/blog/[id]",
  "/lawyer-zvolen",
  "/lawyer-detva",
  "/lawyer-krupina",
  "/lawyer-banska-bystrica",
  "/lawyer-ziar-nad-hronom",
  "/privacy",
  "/terms",
  "/cookies",
  "/withdrawal",
];

/** Jazyky, v ktorých daná cesta naozaj existuje (hreflang, sitemap, prepínač). */
export function localesFor(pathname: AppPathname): readonly Locale[] {
  if (SK_ONLY_PATHNAMES.includes(pathname)) return ["sk"];
  if (BASE_ONLY_PATHNAMES.includes(pathname)) return ["sk", "en"];
  return routing.locales;
}

export function isAvailableIn(pathname: AppPathname, locale: string): boolean {
  return (localesFor(pathname) as readonly string[]).includes(locale);
}
