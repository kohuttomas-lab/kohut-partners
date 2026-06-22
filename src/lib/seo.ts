import type { Metadata } from "next";
import { getPathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

export const SITE_URL = "https://www.tkak.sk";

type Href = Parameters<typeof getPathname>[0]["href"];

/**
 * Build canonical + hreflang alternates for a page so Google knows the SK and
 * EN versions are the same content in different languages. Uses the localized
 * pathnames from routing (e.g. /sluzby ↔ /en/services), so each language gets
 * its real URL. `x-default` points at the Slovak (primary) version.
 */
export function localeAlternates(locale: string, href: Href): Metadata["alternates"] {
  const languages: Record<string, string> = {};
  for (const l of routing.locales) {
    languages[l] = SITE_URL + getPathname({ locale: l, href });
  }
  languages["x-default"] = SITE_URL + getPathname({ locale: routing.defaultLocale, href });

  return {
    canonical: SITE_URL + getPathname({ locale, href }),
    languages,
  };
}

/** Absolute URL for a localized route (used inside JSON-LD). */
export function absoluteUrl(locale: string, href: Href): string {
  return SITE_URL + getPathname({ locale, href });
}

/** The dynamic OG image for a locale (served at a 200 URL — no /sk redirect). */
export function ogImageUrl(locale: string): string {
  return locale === routing.defaultLocale
    ? `${SITE_URL}/opengraph-image`
    : `${SITE_URL}/${locale}/opengraph-image`;
}

// Reused as the publisher / firm entity across schemas.
const ORGANIZATION = {
  "@type": "Organization",
  name: "kohút & partners s.r.o.",
  url: SITE_URL,
  logo: { "@type": "ImageObject", url: `${SITE_URL}/logo/logo-color.svg` },
};

/** BreadcrumbList JSON-LD from an ordered list of crumbs. */
export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.url,
    })),
  };
}

/** BlogPosting (Article) JSON-LD for a blog post. */
export function articleSchema(opts: {
  locale: string;
  url: string;
  headline: string;
  description: string;
  datePublished: string;
  author: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: opts.headline,
    description: opts.description,
    inLanguage: opts.locale,
    datePublished: opts.datePublished,
    dateModified: opts.datePublished,
    image: ogImageUrl(opts.locale),
    author: { "@type": "Person", name: opts.author },
    publisher: ORGANIZATION,
    mainEntityOfPage: { "@type": "WebPage", "@id": opts.url },
  };
}
