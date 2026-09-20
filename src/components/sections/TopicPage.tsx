import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { isAvailableIn, type Locale } from "@/i18n/routing";
import { absoluteUrl, breadcrumbSchema, faqSchema } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { LegalServiceSchema } from "@/components/seo/LegalServiceSchema";
import { Container, SectionHead, Overline } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import { FaqItem } from "@/components/sections/FaqItem";
import { ContactForm } from "@/components/sections/ContactForm";
import { CONTACT, getService } from "@/lib/content";
import { TOPICS, type TopicDef } from "@/lib/topics";
import { Check, Clock, FileText, Phone } from "@/components/icons";
import styles from "./TopicPage.module.css";

/* Zdieľané telo hĺbkových stránok pre zahraničného veriteľa (lib/topics).
   Rovnaká stavba ako stránky CMR a „firma a pobyt": pre koho → kľúčové
   právne body s citáciou → postup → podklady → cena → formulár → otázky
   a zdroje. Všetky texty sú v messages, menný priestor topic.ns.

   Copy musí obstáť voči § 29b zák. 586/2003 o advokácii — vecné informácie,
   žiadne porovnávanie, žiadne sľuby výsledku. */

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

export async function TopicPage({ locale, topic }: { locale: string; topic: TopicDef }) {
  const t = await getTranslations({ locale, namespace: topic.ns });
  const tNav = await getTranslations({ locale, namespace: "nav" });
  const tServices = await getTranslations({ locale, namespace: "services" });

  const who = t.raw("who") as Item[];
  const key = t.raw("key") as KeyItem[];
  const steps = t.raw("steps") as Item[];
  const docs = t.raw("docs") as string[];
  const price = t.raw("price") as PriceItem[];
  const faq = t.raw("faq") as Faq[];
  const sources = t.raw("sources") as Source[];
  const heroPara = t.raw("heroPara") as string[];

  const relatedService = getService(locale as Locale, topic.relatedServiceId);
  // Ostatné stránky pre veriteľa + CMR, ak v tomto jazyku existujú.
  const siblings = TOPICS.filter(
    (x) => x.ns !== topic.ns && isAvailableIn(x.pathname, locale)
  );

  return (
    <>
      {/* Vec sa spravuje slovenským právom a vedie pred slovenskými orgánmi,
          klient však býva mimo Zvolena aj mimo Slovenska → areaServed na celú
          krajinu namiesto zoznamu okolitých miest. */}
      <LegalServiceSchema locale={locale} nationwide />
      <JsonLd
        data={breadcrumbSchema([
          { name: tNav("home"), url: absoluteUrl(locale, "/") },
          {
            name: t("heroTitle"),
            url: absoluteUrl(locale, topic.pathname),
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

      {/* ---------- Premlčanie a rozhodné právo ---------- */}
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

      {/* ---------- Cena ---------- */}
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
            <ContactForm source={topic.formSource} />
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
              {relatedService ? (
                <Link href={{ pathname: "/services/[id]", params: { id: topic.relatedServiceId } }}>
                  {relatedService.name}
                </Link>
              ) : null}
              {await Promise.all(
                siblings.map(async (x) => {
                  const tx = await getTranslations({ locale, namespace: x.ns });
                  return (
                    <Link key={x.ns} href={x.pathname as never}>
                      {tx("navLabel")}
                    </Link>
                  );
                })
              )}
              <Link href="/transport-debt-recovery">{tServices("deepCmr")}</Link>
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
