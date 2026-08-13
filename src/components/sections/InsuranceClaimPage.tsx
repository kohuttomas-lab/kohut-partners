import { Link } from "@/i18n/navigation";
import { absoluteUrl, breadcrumbSchema, faqSchema } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { LegalServiceSchema } from "@/components/seo/LegalServiceSchema";
import { CONTACT } from "@/lib/content";
import {
  CLAIM_HERO,
  CLAIM_REASONS,
  CLAIM_TYPES,
  CLAIM_STEPS,
  CLAIM_PRICING,
  CLAIM_DEADLINE,
  CLAIM_FAQ,
} from "@/lib/insurance-claim";
import { Container, SectionHead, Overline } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import { FaqItem } from "@/components/sections/FaqItem";
import { ClaimReviewForm } from "@/components/sections/ClaimReviewForm";
import { BookingButton } from "@/components/booking/BookingButton";
import { Calendar, Check, Clock, Phone } from "@/components/icons";
import styles from "./InsuranceClaimPage.module.css";

/** Kampaňová landing page /zamietnute-poistne-plnenie (len SK). */
export function InsuranceClaimPage() {
  return (
    <>
      <LegalServiceSchema locale="sk" nationwide />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Domov", url: absoluteUrl("sk", "/") },
          { name: CLAIM_HERO.h1, url: absoluteUrl("sk", "/insurance-claim") },
        ])}
      />
      <JsonLd data={faqSchema(CLAIM_FAQ)} />

      {/* ---------- Hero ---------- */}
      <section className={styles.hero}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logo/mark-white.svg" alt="" className={styles.heroMark} />
        <Container className={styles.heroInner}>
          <div className={styles.heroCopy}>
            <Overline light>{CLAIM_HERO.overline}</Overline>
            <h1 className={styles.h1}>{CLAIM_HERO.h1}</h1>
            <p className={styles.heroLead}>{CLAIM_HERO.lead}</p>
            {CLAIM_HERO.paragraphs.map((p, i) => (
              <p key={i} className={styles.heroPara}>
                {p}
              </p>
            ))}
            <div className={styles.heroActions}>
              <a href="#posudenie" className={styles.heroCta}>
                Poslať zamietací list
              </a>
              <a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`} className={styles.heroPhone}>
                <Phone size={17} />
                {CONTACT.phone}
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* ---------- Dôvody zamietnutia ---------- */}
      <section className={styles.section}>
        <Container>
          <SectionHead
            overline="Čo sa dá namietať"
            title="Dôvody zamietnutia, ktoré sa oplatí preveriť"
            lead="Nie každé zamietnutie je nesprávne. Toto sú ale odôvodnenia, s ktorými sa v praxi stretávame najčastejšie a ktoré po preskúmaní podkladov často neobstoja."
          />
          <div className={styles.reasonGrid}>
            {CLAIM_REASONS.map((r) => (
              <Card key={r.title} padding="lg" elevation="sm" className={styles.reasonCard}>
                <div className={styles.reasonTitle}>{r.title}</div>
                <p className={styles.reasonDesc}>{r.desc}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* ---------- Druhy poistenia ---------- */}
      <section className={styles.sectionAlt}>
        <Container>
          <SectionHead
            overline="Rozsah"
            title="Ktoré poistenia riešime"
            lead="Rovnako riešime aj krátené plnenie — teda situáciu, keď poisťovňa zaplatí, ale výrazne menej, než škoda reálne predstavuje. V praxi je to častejšie než úplné zamietnutie."
          />
          <ul className={styles.typeList}>
            {CLAIM_TYPES.map((t) => (
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
            {CLAIM_STEPS.map((s, i) => (
              <div key={s.title} className={styles.step}>
                <div className={styles.stepNum}>{i + 1}</div>
                <div className={styles.stepTitle}>{s.title}</div>
                <p className={styles.stepDesc}>{s.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ---------- Lehoty ---------- */}
      <section className={styles.section}>
        <Container>
          <div className={styles.deadline}>
            <span className={styles.deadlineIcon}>
              <Clock size={22} />
            </span>
            <div>
              <div className={styles.deadlineHead}>{CLAIM_DEADLINE.heading}</div>
              <p className={styles.deadlineBody}>{CLAIM_DEADLINE.body}</p>
            </div>
          </div>
        </Container>
      </section>

      {/* ---------- Cena ---------- */}
      <section className={styles.sectionAlt}>
        <Container>
          <SectionHead overline="Cena" title={CLAIM_PRICING.heading} lead={CLAIM_PRICING.lead} />
          <div className={styles.priceGrid}>
            {CLAIM_PRICING.items.map((p) => (
              <Card key={p.label} padding="lg" elevation="sm" className={styles.priceCard}>
                <div className={styles.priceLabel}>{p.label}</div>
                <div className={styles.priceValue}>{p.value}</div>
                <p className={styles.priceDesc}>{p.desc}</p>
              </Card>
            ))}
          </div>
          <div className={styles.priceCta}>
            <BookingButton
              area="spory"
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
            <h2 className={styles.formTitle}>Pošlite nám zamietací list</h2>
            <p className={styles.formLead}>
              Do troch pracovných dní vám napíšeme, či nárok podľa nás obstojí a čo by sa
              dalo namietať. Za posúdenie nič neplatíte a k ničomu vás nezaväzuje.
            </p>
            <p className={styles.formLead}>
              Ak vec podľa nás nemá šancu, povieme vám to rovno — nemá zmysel, aby ste do
              sporu išli s falošnými očakávaniami.
            </p>
            <div className={styles.formContact}>
              <a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}>{CONTACT.phone}</a>
              <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
            </div>
          </div>
          <div className={styles.formCard}>
            <ClaimReviewForm />
          </div>
        </Container>
      </section>

      {/* ---------- FAQ ---------- */}
      <section className={styles.section}>
        <Container style={{ maxWidth: 880 }}>
          <SectionHead overline="Časté otázky" title="Časté otázky" />
          <div>
            {CLAIM_FAQ.map((f) => (
              <FaqItem key={f.q} q={f.q} a={f.a} />
            ))}
          </div>
          <p className={styles.related}>
            Súvisiace: <Link href={{ pathname: "/services/[id]", params: { id: "spory" } }}>
              Súdne spory a vymáhanie
            </Link>
          </p>
        </Container>
      </section>
    </>
  );
}
