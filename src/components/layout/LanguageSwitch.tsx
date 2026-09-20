"use client";

import { useEffect, useRef } from "react";
import { useParams } from "next/navigation";
import { useLocale } from "next-intl";
import { usePathname, getPathname } from "@/i18n/navigation";
import {
  LOCALE_NAMES,
  isAvailableIn,
  routing,
  type AppPathname,
  type Locale,
} from "@/i18n/routing";
import { articleSlugIn } from "@/lib/article-slugs";
import { ChevronDown, Globe } from "@/components/icons";
import { cx } from "@/lib/cx";
import styles from "./LanguageSwitch.module.css";

export function LanguageSwitch({
  className,
  dropUp = false,
}: {
  className?: string;
  /** Ponuka sa otvára nahor (mobilné menu, kde je prepínač pri spodnom okraji). */
  dropUp?: boolean;
}) {
  const pathname = usePathname();
  const params = useParams();
  const locale = useLocale();
  const root = useRef<HTMLDetailsElement>(null);

  // Zavrieť ponuku pri kliku mimo nej a po Esc — <details> to samo nerobí.
  useEffect(() => {
    const close = (e: Event) => {
      const el = root.current;
      if (!el?.open) return;
      if (e instanceof KeyboardEvent ? e.key === "Escape" : !el.contains(e.target as Node)) {
        el.open = false;
      }
    };
    document.addEventListener("click", close);
    document.addEventListener("keydown", close);
    return () => {
      document.removeEventListener("click", close);
      document.removeEventListener("keydown", close);
    };
  }, []);

  // Položky musia byť skutočné <a href>, nie tlačidlá — inak zo slovenskej
  // vetvy webu nevedie na ostatné jazyky ani jeden prehľadateľný odkaz a /en,
  // /pl… zostávajú pre crawlera ostrovom. <details> drží odkazy v HTML aj
  // v zatvorenom stave a nepotrebuje na otvorenie JavaScript.
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
  // Stránka, ktorá v cieľovom jazyku neexistuje (kampaňové len SK; blog,
  // e-shop, mestá a právne dokumenty len SK/EN), vedie na domovskú stránku
  // v tom jazyku namiesto do 404.
  //
  // Články majú v slovenčine a angličtine iný slug (mapa v lib/article-slugs.ts),
  // takže samotný `params` z aktuálnej adresy nestačí — `id` treba preložiť.
  // Ostatné dynamické cesty (služby) majú slug vo všetkých jazykoch rovnaký.
  const hrefFor = (target: Locale): string => {
    if (!isAvailableIn(pathname as AppPathname, target)) {
      return getPathname({ locale: target, href: "/" });
    }
    const targetParams =
      pathname === "/blog/[id]" && typeof params.id === "string"
        ? { ...params, id: articleSlugIn(params.id, locale, target) }
        : params;
    return getPathname({
      locale: target,
      href: { pathname, params: targetParams } as never,
    });
  };

  return (
    <details ref={root} className={cx(styles.root, className)}>
      <summary className={styles.btn} aria-label="Language / Jazyk">
        <Globe size={16} />
        {locale.toUpperCase()}
        <ChevronDown size={14} className={styles.chevron} />
      </summary>
      <ul className={cx(styles.menu, dropUp && styles.menuUp)}>
        {routing.locales
          .filter((l) => l !== locale)
          .map((l) => (
            <li key={l}>
              <a href={hrefFor(l)} hrefLang={l} lang={l} className={styles.item}>
                <span className={styles.code}>{l.toUpperCase()}</span>
                {LOCALE_NAMES[l]}
              </a>
            </li>
          ))}
      </ul>
    </details>
  );
}
