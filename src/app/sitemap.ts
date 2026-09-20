import type { MetadataRoute } from "next";
import { getPathname } from "@/i18n/navigation";
import { getArticleSlugPairs, getServiceIds, getArticle } from "@/lib/content";
import { CAMPAIGNS } from "@/lib/campaigns";
import { ESHOP_ENABLED } from "@/lib/flags";
import { localesFor, type AppPathname, type Locale } from "@/i18n/routing";

const BASE = "https://www.tkak.sk";

type Href = Parameters<typeof getPathname>[0]["href"];

/**
 * Cesta po slovensky a „v ostatných jazykoch". Pri článkoch sa slug medzi SK
 * a EN líši; PL/HU/DE/RU používajú rovnaký href ako EN (slugy služieb sú
 * spoločné, články v nich neexistujú).
 */
type HrefPair = { sk: Href; en: Href };
const hrefIn = (pair: HrefPair, locale: Locale): Href => (locale === "sk" ? pair.sk : pair.en);

/** Cesta, ktorá je v oboch jazykoch rovnaká (routing si prefix doplní sám). */
const bothLocales = (href: Href): HrefPair => ({ sk: href, en: href });

// Static routes. The e-shop entry follows the feature flag — the page 404s
// while the flag is off, so it must not appear in the sitemap then.
const STATIC: Href[] = [
  ...(ESHOP_ENABLED ? (["/shop"] as Href[]) : []),
  "/",
  "/services",
  "/about",
  "/blog",
  "/contact",
  "/international",
  "/transport-debt-recovery",
  "/company-formation-residence",
  "/creditor-debt-recovery",
  "/creditor-insolvency-claims",
  "/creditor-enforcement",
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

function priorityFor(href: Href): number {
  if (href === "/") return 1;
  if (typeof href === "string") {
    return ["/privacy", "/terms", "/cookies"].includes(href) ? 0.3 : 0.8;
  }
  return 0.6; // dynamic detail / article
}

export default function sitemap(): MetadataRoute.Sitemap {
  const services: HrefPair[] = getServiceIds().map((id) =>
    bothLocales({ pathname: "/services/[id]", params: { id } })
  );
  // Anglická položka nesie anglický slug — inak by sitemap ohlásil adresu,
  // ktorá po zavedení anglických slugov už len presmerúva (301).
  const articles: HrefPair[] = getArticleSlugPairs().map((p) => ({
    sk: { pathname: "/blog/[id]", params: { id: p.sk } },
    en: { pathname: "/blog/[id]", params: { id: p.en } },
  }));

  // Slovak-only campaign pages — listed on their own so they don't advertise
  // an English alternate that 404s.
  const skOnly: MetadataRoute.Sitemap = CAMPAIGNS.map((c) => ({
    url: BASE + getPathname({ locale: "sk", href: c.pathname }),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  // Každá viacjazyčná cesta dostane položku za každý jazyk, v ktorom existuje
  // (localesFor: blog, e-shop, mestá a právne dokumenty SK/EN, zvyšok 6 jazykov),
  // s rovnakým blokom alternatív. Bez vlastného <loc> Google jazykovú URL nikdy
  // nedostal ako samostatnú stránku na indexáciu; hreflang alternatíva
  // v slovenskej položke na to nestačí. `x-default` mieri na slovenčinu, rovnako
  // ako canonical/hreflang v <head> (lib/seo.ts).
  const localized = [...STATIC.map(bothLocales), ...services, ...articles].flatMap((pair) => {
    const pathname = (typeof pair.sk === "string" ? pair.sk : pair.sk.pathname) as AppPathname;
    const urls = localesFor(pathname).map(
      (l) => [l, BASE + getPathname({ locale: l, href: hrefIn(pair, l) })] as const
    );
    const languages = { ...Object.fromEntries(urls), "x-default": urls[0][1] };
    // Articles carry a real publish date → expose it as lastModified.
    let lastModified: Date | undefined;
    if (typeof pair.sk === "object" && pair.sk.pathname === "/blog/[id]") {
      const article = getArticle("sk", String(pair.sk.params.id));
      if (article) lastModified = new Date(article.iso);
    }
    const common = {
      alternates: { languages },
      changeFrequency: "monthly" as const,
      priority: priorityFor(pair.sk),
      ...(lastModified ? { lastModified } : {}),
    };
    return urls.map(([, url]) => ({ url, ...common }));
  });

  return [...localized, ...skOnly];
}
