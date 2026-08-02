import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { absoluteUrl, breadcrumbSchema, faqSchema } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { LegalServiceSchema } from "@/components/seo/LegalServiceSchema";
import { CITY_PAGES, type CityPageData, type CityContent } from "@/lib/city-pages";
import { Container } from "@/components/layout/Section";
import { PageHero } from "@/components/layout/PageHero";
import { FaqItem } from "@/components/sections/FaqItem";
import { CTABand } from "@/components/layout/CTABand";
import styles from "./CityPage.module.css";

/** Shared body for the /advokat-{mesto} local-SEO landing pages. */
export async function CityPage({
  locale,
  page,
  content,
}: {
  locale: Locale;
  page: CityPageData;
  content: CityContent;
}) {
  const tNav = await getTranslations({ locale, namespace: "nav" });
  const others = Object.values(CITY_PAGES).filter((c) => c.id !== page.id);
  const sk = locale !== "en";

  return (
    <>
      <LegalServiceSchema locale={locale} areaServedCity={page.name} />
      <JsonLd
        data={breadcrumbSchema([
          { name: tNav("home"), url: absoluteUrl(locale, "/") },
          { name: content.h1, url: absoluteUrl(locale, page.pathname) },
        ])}
      />
      {content.faq.length > 0 && <JsonLd data={faqSchema(content.faq)} />}

      <PageHero
        overline={sk ? "Advokátska kancelária" : "Law firm"}
        title={content.h1}
        lead={content.intro[0]}
      />

      <div className={styles.wrap}>
        <Container>
          <div className={styles.prose}>
            {content.intro.slice(1).map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            {content.sections.map((s) => (
              <section key={s.heading}>
                <h2 className={styles.h2}>{s.heading}</h2>
                {s.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </section>
            ))}
          </div>

          {content.faq.length > 0 && (
            <>
              <h2 className={styles.faqHead}>
                {sk ? "Časté otázky" : "Frequently asked questions"}
              </h2>
              <div className={styles.faqList}>
                {content.faq.map((f) => (
                  <FaqItem key={f.q} q={f.q} a={f.a} />
                ))}
              </div>
            </>
          )}

          <div className={styles.cities}>
            <div className={styles.citiesHead}>
              {sk ? "Pôsobíme aj v okolí" : "We also serve"}
            </div>
            <div className={styles.citiesLinks}>
              {others.map((c) => (
                <Link key={c.id} href={c.pathname}>
                  {sk ? `Advokát ${c.name}` : `Lawyer ${c.name}`}
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </div>

      <CTABand />
    </>
  );
}
