import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { localeAlternates } from "@/lib/seo";
import { LegalServiceSchema } from "@/components/seo/LegalServiceSchema";
import { PageHero } from "@/components/layout/PageHero";
import { Container, SectionHead, Overline } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import { CTABand } from "@/components/layout/CTABand";
import { ContactForm } from "@/components/sections/ContactForm";
import { CONTACT } from "@/lib/content";
import { Check, Shield } from "@/components/icons";
import styles from "./international.module.css";

type Props = { params: Promise<{ locale: string }> };

interface Item {
  title: string;
  desc: string;
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { locale } = await props.params;
  const t = await getTranslations({ locale, namespace: "intl" });
  return {
    title: t("heroTitle"),
    description: t("heroLead"),
    alternates: localeAlternates(locale, "/international"),
  };
}

export default async function InternationalPage(props: Props) {
  const { locale } = await props.params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "intl" });

  const help = t.raw("help") as Item[];
  const remote = t.raw("remote") as Item[];

  return (
    <>
      {/* Stránka cieli na klientov mimo Slovenska, ktorých vec sa spravuje
          slovenským právom — areaServed preto pokrýva celú krajinu, nie
          zoznam miest v okolí Zvolena. */}
      <LegalServiceSchema locale={locale} nationwide />

      <PageHero overline={t("heroOverline")} title={t("heroTitle")} lead={t("heroLead")} />

      <section className={styles.helpSection}>
        <Container>
          <SectionHead
            overline={t("helpOverline")}
            title={t("helpTitle")}
            lead={t("helpLead")}
          />
          <div className={styles.helpGrid}>
            {help.map((item, i) => (
              <Card key={i} padding="lg" elevation="sm">
                <span className={styles.helpCheck}>
                  <Check size={17} />
                </span>
                <div className={styles.helpTitle}>{item.title}</div>
                <p className={styles.helpDesc}>{item.desc}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className={styles.remoteSection}>
        <Container>
          <SectionHead overline={t("remoteOverline")} title={t("remoteTitle")} />
          <div className={styles.steps}>
            {remote.map((step, i) => (
              <div key={i} className={styles.step}>
                <span className={styles.stepNo}>{i + 1}</span>
                <div>
                  <div className={styles.stepTitle}>{step.title}</div>
                  <p className={styles.stepDesc}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.scope}>
            <span className={styles.scopeIcon}>
              <Shield size={22} />
            </span>
            <div>
              <div className={styles.scopeTitle}>{t("scopeTitle")}</div>
              <p className={styles.scopeText}>{t("scopeText")}</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Formulár priamo na stránke — dovtedy bola jedinou konverznou cestou
          rezervácia videohovoru cez tlačidlo v CTA páse. */}
      <section className={styles.formSection} id="contact-form">
        <Container className={styles.formInner}>
          {/* Bez triedy — .formCopy v CSS module neexistuje, `styles.formCopy`
              by bolo undefined a atribút class by sa aj tak nevypísal. */}
          <div>
            <Overline>{t("formOverline")}</Overline>
            <h2 className={styles.formTitle}>{t("formTitle")}</h2>
            <p className={styles.formLead}>{t("formLead")}</p>
            <div className={styles.formContact}>
              <a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}>{CONTACT.phone}</a>
              <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
            </div>
          </div>
          <div>
            <ContactForm />
          </div>
        </Container>
      </section>

      <CTABand title={t("ctaTitle")} lead={t("ctaLead")} />
    </>
  );
}
