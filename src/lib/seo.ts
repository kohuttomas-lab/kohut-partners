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
