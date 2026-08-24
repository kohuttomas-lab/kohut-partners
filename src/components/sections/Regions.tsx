import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { CITY_PAGES } from "@/lib/city-pages";
import { Container, SectionHead } from "@/components/layout/Section";
import styles from "./Regions.module.css";

/** Kde pôsobíme — kontextové odkazy z domovskej stránky na mestské landing pages.
 *  Dôvod: /advokat-{mesto} boli dlho mimo indexu ("Objavené, nie je v indexe"),
 *  lebo naň viedol iba odkaz z pätičky, ktorý Google výrazne diskontuje.
 *  Domovská stránka nesie prakticky celú autoritu domény, takže odkaz z jej tela
 *  je najsilnejší interný signál, aký vieme týmto stránkam dať. */
export function Regions() {
  const t = useTranslations("home");
  const locale = useLocale() as Locale;
  const sk = locale !== "en";
  const cities = Object.values(CITY_PAGES);

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.head}>
          <SectionHead
            overline={t("regionsOverline")}
            title={t("regionsTitle")}
            lead={t("regionsLead")}
            flush
          />
        </div>
        <div className={styles.grid}>
          {cities.map((c) => (
            <Link key={c.id} href={c.pathname} className={styles.card}>
              <span className={styles.cardTitle}>
                {sk ? `Advokát ${c.name}` : `Lawyer in ${c.name}`}
              </span>
              <span className={styles.cardText}>
                {t(`regionsCity.${c.id}`)}
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
