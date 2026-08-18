import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { absoluteUrl, breadcrumbSchema, faqSchema, localeAlternates, ogImageUrl } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { LegalServiceSchema } from "@/components/seo/LegalServiceSchema";
import { Container, SectionHead, Overline } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import { FaqItem } from "@/components/sections/FaqItem";
import { ContactForm } from "@/components/sections/ContactForm";
import { CONTACT } from "@/lib/content";
import { Check, Clock, FileText, Phone } from "@/components/icons";
import styles from "./company-formation-residence.module.css";

/* Landing page pre zahraničných zakladateľov s.r.o. a žiadateľov o pobyt
   (podnikanie, modrá karta EÚ, zamestnanie). Cieľová skupina je mimo
   Slovenska v oboch jazykových vetvách — rovnaký dôvod na dvojjazyčnosť
   ako pri transport-debt-recovery.

   Zámerne oddeľuje právne zastupovanie (čo kancelária robí sama a fakturuje)
   od účtovníctva, sídla, sprostredkovania zamestnania a ubytovania — tie sú
   samostatne regulované činnosti a ponúkajú sa len ako odporúčanie na
   menovaného partnera s vlastnou faktúrou, nikdy ako súčasť balíka kancelárie.
   Pozri priceNote a poslednú FAQ položku.

   Copy musí obstáť voči § 29b zák. 586/2003 o advokácii — len vecné
   objektívne informácie, žiadne sľuby výsledku. Financné hranice viazané na
   životné minimum/priemernú mzdu sa menia každoročne — text to zámerne
   neuvádza ako pevné číslo v eurách, len ako násobok (rovnaká konvencia ako
   ECB sadzba na stránke CMR). Všetky texty sú v messages/{sk,en}.json,
   namespace "cfr". */

type Props = { params: Promise<{ locale: string }> };

interface Item {
  title: string;
  desc: string;
}
interface KeyItem extends Item {
  note: string;
}
interface PriceItem {
  label: string;
  value: string;
  desc: string;
}
interface Faq {
  q: string;
  a: string;
}
interface Source {
  label: string;
  url: string;
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { locale } = await props.params;
  const t = await getTranslations({ locale, namespace: "cfr" });
  const title = t("metaTitle");
  const description = t("metaDescription");
  return {
    title,
    description,
    alternates: localeAlternates(locale, "/company-formation-residence"),
    openGraph: {
      title,
      description,
      type: "website",
      url: absoluteUrl(locale, "/company-formation-residence"),
      images: [{ url: ogImageUrl(locale) }],
    },
  };
}

export default async function CompanyFormationResidencePage(props: Props) {
  const { locale } = await props.params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "cfr" });
  const tNav = await getTranslations({ locale, namespace: "nav" });

  const who = t.raw("who") as Item[];
  const key = t.raw("key") as KeyItem[];
  const steps = t.raw("steps") as Item[];
  const docs = t.raw("docs") as string[];
  const price = t.raw("price") as PriceItem[];
  const faq = t.raw("faq") as Faq[];
  const sources = t.raw("sources") as Source[];
  const heroPara = t.raw("heroPara") as string[];

  return (
    <>
      {/* Klient aj konateľ zvyčajne bývajú mimo Slovenska → areaServed na
          celú krajinu, nie zoznam miest v okolí Zvolena. */}
      <LegalServiceSchema locale={locale} nationwide />
      <JsonLd
        data={breadcrumbSchema([
          { name: tNav("home"), url: absoluteUrl(locale, "/") },
          {
            name: t("heroTitle"),
            url: absoluteUrl(locale, "/company-formation-residence"),
          },
        ])}
      />
      {faq.length > 0 && <JsonLd data={faqSchema(faq)} />}

      {/* ---------- Hero ---------- */}
      <section className={styles.hero}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logo/mark-white.svg" alt="" className={styles.heroMark} />
        <Container className={styles.heroInner}>
          <div className={styles.heroCopy}>
            <Overline light>{t("heroOverline")}</Overline>
            <h1 className={styles.h1}>{t("heroTitle")}</h1>
            <p className={styles.heroLead}>{t("heroLead")}</p>
            {heroPara.map((p, i) => (
              <p key={i} className={styles.heroPara}>
                {p}
              </p>
            ))}
            <div className={styles.heroActions}>
              <a href="#posudenie" className={styles.heroCta}>
                {t("heroCta")}
              </a>
              <a
                href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                className={styles.heroPhone}
              >
                <Phone size={17} />
                {CONTACT.phone}
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* ---------- Pre koho ---------- */}
      <section className={styles.section}>
        <Container>
          <SectionHead
            overline={t("whoOverline")}
            title={t("whoTitle")}
            lead={t("whoLead")}
          />
          <div className={styles.whoGrid}>
            {who.map((item) => (
              <Card key={item.title} padding="lg" elevation="sm">
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDesc}>{item.desc}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* ---------- Tri právne cesty ---------- */}
      <section className={styles.sectionAlt}>
        <Container>
          <SectionHead
            overline={t("keyOverline")}
            title={t("keyTitle")}
            lead={t("keyLead")}
          />
          <div className={styles.keyStack}>
            {key.map((item) => (
              <article key={item.title} className={styles.keyItem}>
                <span className={styles.keyIcon}>
                  <Clock size={20} />
                </span>
                <div>
                  <h3 className={styles.keyTitle}>{item.title}</h3>
                  <p className={styles.keyDesc}>{item.desc}</p>
                  <p className={styles.keyNote}>{item.note}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* ---------- Postup ---------- */}
      <section className={styles.steps}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logo/mark-white.svg" alt="" className={styles.stepsMark} />
        <Container className={styles.stepsInner}>
          <SectionHead
            overline={t("stepsOverline")}
            title={t("stepsTitle")}
            center
            light
          />
          <div className={styles.stepGrid}>
            {steps.map((s, i) => (
              <div key={s.title} className={styles.step}>
                <div className={styles.stepNum}>{i + 1}</div>
                <h3 className={styles.stepTitle}>{s.title}</h3>
                <p className={styles.stepDesc}>{s.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ---------- Podklady ---------- */}
      <section className={styles.section}>
        <Container>
          <SectionHead
            overline={t("docsOverline")}
            title={t("docsTitle")}
            lead={t("docsLead")}
          />
          <ul className={styles.docList}>
            {docs.map((d) => (
              <li key={d} className={styles.docItem}>
                <span className={styles.docCheck}>
                  <Check size={15} />
                </span>
                {d}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* ---------- Odmena ---------- */}
      <section className={styles.sectionAlt}>
        <Container>
          <SectionHead
            overline={t("priceOverline")}
            title={t("priceTitle")}
            lead={t("priceLead")}
          />
          <div className={styles.priceGrid}>
            {price.map((p) => (
              <Card key={p.label} padding="lg" elevation="sm" className={styles.priceCard}>
                <h3 className={styles.priceLabel}>{p.label}</h3>
                <div className={styles.priceValue}>{p.value}</div>
                <p className={styles.priceDesc}>{p.desc}</p>
              </Card>
            ))}
          </div>
          <p className={styles.priceNote}>{t("priceNote")}</p>
        </Container>
      </section>

      {/* ---------- Formulár ---------- */}
      <section className={styles.formSection} id="posudenie">
        <Container className={styles.formInner}>
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
            <ContactForm source="Založenie firmy a pobyt" />
          </div>
        </Container>
      </section>

      {/* ---------- FAQ + zdroje ---------- */}
      <section className={styles.section}>
        <Container style={{ maxWidth: 880 }}>
          <SectionHead overline={t("faqOverline")} title={t("faqTitle")} />
          <div>
            {faq.map((f) => (
              <FaqItem key={f.q} q={f.q} a={f.a} />
            ))}
          </div>

          <div className={styles.related}>
            <div className={styles.relatedHead}>{t("relatedTitle")}</div>
            <div className={styles.relatedLinks}>
              <Link href="/international">{tNav("international")}</Link>
            </div>
          </div>

          <div className={styles.sources}>
            <h2 className={styles.sourcesTitle}>
              <FileText size={18} />
              {t("sourcesTitle")}
            </h2>
            <p className={styles.sourcesLead}>{t("sourcesLead")}</p>
            <ul className={styles.sourceList}>
              {sources.map((s) => (
                <li key={s.url}>
                  <a href={s.url} target="_blank" rel="noopener noreferrer">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>
    </>
  );
}
