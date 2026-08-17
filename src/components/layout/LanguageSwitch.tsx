"use client";

import { useParams } from "next/navigation";
import { useLocale } from "next-intl";
import { usePathname, getPathname } from "@/i18n/navigation";
import { SK_ONLY_PATHNAMES, type AppPathname } from "@/i18n/routing";
import { Globe } from "@/components/icons";
import { cx } from "@/lib/cx";
import styles from "./LanguageSwitch.module.css";

export function LanguageSwitch({ className }: { className?: string }) {
  const pathname = usePathname();
  const params = useParams();
  const locale = useLocale();
  const other = locale === "sk" ? "en" : "sk";

  // Prepínač musí byť skutočný <a href>, nie tlačidlo — inak zo slovenskej
  // vetvy webu nevedie na anglickú ani jeden prehľadateľný odkaz a /en zostáva
  // pre crawlera ostrovom.
  //
  // `usePathname()` vracia interný template (napr. "/services/[id]"), preto
  // doňho treba doplniť `params`. `getPathname` je čistá funkcia — v klientskom
  // komponente nevolá žiadny hook ani serverové API.
  //
  // Zámerne BEZ `forcePrefix` a bez next-intl <Link locale={...}>: ten pri
  // zmene jazyka prefix vynucuje vždy, takže pre slovenčinu by vyrobil
  // /sk/kontakt → redirect na /kontakt. Takto vyjde presne tá istá URL, akú
  // uvádza canonical/hreflang (lib/seo.ts) aj sitemap.
  //
  // Slovenské-only cesty nemajú anglický náprotivok, tak vedú na domovskú
  // stránku v druhom jazyku namiesto do 404.
  const skOnly = SK_ONLY_PATHNAMES.includes(pathname as AppPathname);
  const href = skOnly
    ? getPathname({ locale: other, href: "/" })
    : getPathname({ locale: other, href: { pathname, params } as never });

  return (
    <a
      href={href}
      hrefLang={other}
      className={cx(styles.btn, className)}
      aria-label={`Switch language to ${other.toUpperCase()}`}
    >
      <Globe size={16} />
      {other.toUpperCase()}
    </a>
  );
}
