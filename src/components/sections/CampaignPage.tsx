import { Link } from "@/i18n/navigation";
import { absoluteUrl, breadcrumbSchema, faqSchema } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { LegalServiceSchema } from "@/components/seo/LegalServiceSchema";
import { CONTACT } from "@/lib/content";
import { CAMPAIGNS, CAMPAIGN_SHORT_NAMES, type CampaignData } from "@/lib/campaigns";
import { Container, SectionHead, Overline } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import { FaqItem } from "@/components/sections/FaqItem";
import { CampaignForm } from "@/components/sections/CampaignForm";
import { BookingButton } from "@/components/booking/BookingButton";
import { Calendar, Check, Clock, Phone } from "@/components/icons";
import styles from "./CampaignPage.module.css";

/** Zdieľané telo kampaňových landing pages (celoslovenské, len SK). */
export function CampaignPage({ campaign }: { campaign: CampaignData }) {
  const others = CAMPAIGNS.filter((c) => c.id !== campaign.id);

  return (
    <>
      <LegalServiceSchema locale="sk" nationwide />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Domov", url: absoluteUrl("sk", "/") },
          { name: campaign.hero.h1, url: absoluteUrl("sk", campaign.pathname) },
        ])}
      />
      <JsonLd data={faqSchema(campaign.faq)} />

      {/* ---------- Hero ---------- */}
      <section className={styles.hero}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logo/mark-white.svg" alt="" className={styles.heroMark} />
        <Container className={styles.heroInner}>
          <div className={styles.heroCopy}>
            <Overline light>{campaign.hero.overline}</Overline>
            <h1 className={styles.h1}>{campaign.hero.h1}</h1>
            <p className={styles.heroLead}>{campaign.hero.lead}</p>
            {campaign.hero.paragraphs.map((p, i) => (
              <p key={i} className={styles.heroPara}>
                {p}
              </p>
            ))}
            <div className={styles.heroActions}>
              <a href="#posudenie" className={styles.heroCta}>
                {campaign.hero.cta}
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

      {/* ---------- Dôvody ---------- */}
      <section className={styles.section}>
        <Container>
          <SectionHead
            overline={campaign.reasons.overline}
            title={campaign.reasons.heading}
            lead={campaign.reasons.lead}
          />
          <div className={styles.reasonGrid}>
            {campaign.reasons.items.map((r) => (
              <Card key={r.title} padding="lg" elevation="sm" className={styles.reasonCard}>
                <div className={styles.reasonTitle}>{r.title}</div>
                <p className={styles.reasonDesc}>{r.desc}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* ---------- Rozsah ---------- */}
      <section className={styles.sectionAlt}>
        <Container>
          <SectionHead
            overline={campaign.scope.overline}
            title={campaign.scope.heading}
            lead={campaign.scope.lead}
          />
          <ul className={styles.typeList}>
            {campaign.scope.items.map((t) => (
              <li key={t} className={styles.typeItem}>
                <span className={styles.typeCheck}>
                  <Check size={15} />
                </span>
                {t}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* ---------- Priebeh ---------- */}
      <section className={styles.steps}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logo/mark-white.svg" alt="" className={styles.stepsMark} />
        <Container className={styles.stepsInner}>
          <SectionHead overline="Postup" title="Ako to prebieha" center light />
          <div className={styles.stepGrid}>
            {campaign.steps.map((s, i) => (
              <div key={s.title} className={styles.step}>
                <div className={styles.stepNum}>{i + 1}</div>
                <div className={styles.stepTitle}>{s.title}</div>
                <p className={styles.stepDesc}>{s.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ---------- Lehota ---------- */}
      <section className={styles.section}>
        <Container>
          <div className={styles.deadline}>
            <span className={styles.deadlineIcon}>
              <Clock size={22} />
            </span>
            <div>
              <div className={styles.deadlineHead}>{campaign.deadline.heading}</div>
              <p className={styles.deadlineBody}>{campaign.deadline.body}</p>
            </div>
          </div>
        </Container>
      </section>

      {/* ---------- Cena ---------- */}
      <section className={styles.sectionAlt}>
        <Container>
          <SectionHead
            overline="Cena"
            title={campaign.pricing.heading}
            lead={campaign.pricing.lead}
          />
          <div className={styles.priceGrid}>
            {campaign.pricing.items.map((p) => (
              <Card key={p.label} padding="lg" elevation="sm" className={styles.priceCard}>
                <div className={styles.priceLabel}>{p.label}</div>
                <div className={styles.priceValue}>{p.value}</div>
                <p className={styles.priceDesc}>{p.desc}</p>
              </Card>
            ))}
          </div>
          <div className={styles.priceCta}>
            <BookingButton
              area={campaign.relatedServiceId}
              variant="primary"
              size="lg"
              leftIcon={<Calendar size={20} />}
            >
              Rezervovať konzultáciu
            </BookingButton>
          </div>
        </Container>
      </section>

      {/* ---------- Formulár ---------- */}
      <section className={styles.formSection} id="posudenie">
        <Container className={styles.formInner}>
          <div className={styles.formCopy}>
            <Overline>Bez záväzku</Overline>
            <h2 className={styles.formTitle}>{campaign.form.title}</h2>
            {campaign.form.leads.map((p, i) => (
              <p key={i} className={styles.formLead}>
                {p}
              </p>
            ))}
            <div className={styles.formContact}>
              <a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}>{CONTACT.phone}</a>
              <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
            </div>
          </div>
          <div className={styles.formCard}>
            <CampaignForm campaign={campaign} />
          </div>
        </Container>
      </section>

      {/* ---------- FAQ ---------- */}
      <section className={styles.section}>
        <Container style={{ maxWidth: 880 }}>
          <SectionHead overline="Časté otázky" title="Časté otázky" />
          <div>
            {campaign.faq.map((f) => (
              <FaqItem key={f.q} q={f.q} a={f.a} />
            ))}
          </div>
          <p className={styles.related}>
            Súvisiace:{" "}
            <Link href={{ pathname: "/services/[id]", params: { id: campaign.relatedServiceId } }}>
              {campaign.relatedServiceLabel}
            </Link>
          </p>

          {/* Krížové prelinkovanie kampaňových tém. */}
          <div className={styles.moreTopics}>
            <div className={styles.moreTopicsHead}>Pomáhame aj s týmito témami</div>
            <div className={styles.moreTopicsLinks}>
              {others.map((c) => (
                <Link key={c.id} href={c.pathname}>
                  {CAMPAIGN_SHORT_NAMES[c.id] ?? c.hero.h1}
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
