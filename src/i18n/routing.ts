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
    "/privacy": { sk: "/ochrana-udajov", en: "/privacy" },
    "/terms": { sk: "/obchodne-podmienky", en: "/terms" },
    "/cookies": { sk: "/cookies", en: "/cookies" },
  },
});

export type Locale = (typeof routing.locales)[number];
export type AppPathname = keyof typeof routing.pathnames;
