import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { getService, getServiceIds } from "@/lib/content";
import { formatEur } from "@/lib/format";
import { Link } from "@/i18n/navigation";
import { Container, SectionHead } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import { ServiceIcon } from "@/components/sections/ServiceIcon";
import { FaqItem } from "@/components/sections/FaqItem";
import { BookingButton } from "@/components/booking/BookingButton";
import { CTABand } from "@/components/layout/CTABand";
import { ArrowLeft, Calendar, Check } from "@/components/icons";
import styles from "./service.module.css";

type Props = { params: Promise<{ locale: string; id: string }> };

export function generateStaticParams() {
  return getServiceIds().map((id) => ({ id }));
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { locale, id } = await props.params;
  const service = getService(locale as Locale, id);
  if (!service) return {};
  return { title: service.name, description: service.summary };
}

export default async function ServiceDetailPage(props: Props) {
  const { locale, id } = await props.params;
  setRequestLocale(locale);

  const service = getService(locale as Locale, id);
  if (!service) notFound();

  const t = await getTranslations({ locale, namespace: "services" });
  const tHome = await getTranslations({ locale, namespace: "home" });
  const common = await getTranslations({ locale, namespace: "common" });

  return (
    <>
      <section className={styles.hero}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logo/mark-white.svg" alt="" className={styles.heroMark} />
        <Container className={styles.heroInner}>
          <Link href="/services" className={styles.back}>
            <ArrowLeft size={16} />
            {common("servAll")}
          </Link>
          <div className={styles.heroBody}>
            <ServiceIcon name={service.icon} box={68} size={34} light />
            <div>
              <h1 className={styles.title}>{service.name}</h1>
              <p className={styles.tagline}>{service.tagline}</p>
              <p className={styles.summary}>{service.summary}</p>
              <BookingButton area={service.id} variant="accent" size="lg" leftIcon={<Calendar size={20} />}>
                {t("bookForThis")}
              </BookingButton>
            </div>
          </div>
        </Container>
      </section>

      <section className={styles.solveSection}>
        <Container>
          <SectionHead overline={tHome("servOverline")} title={t("whatWeSolve")} />
          <div className={styles.solveGrid}>
            {service.solve.map((item, i) => (
              <div key={i} className={styles.solveItem}>
                <span className={styles.solveCheck}>
                  <Check size={16} />
                </span>
                <span className={styles.solveText}>{item}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className={styles.pkgSection}>
        <Container>
          <SectionHead overline={t("packages")} title={t("packages")} lead={t("packagesLead")} />
          <div className={styles.pkgGrid}>
            {service.packages.map((p) => (
              <Card key={p.id} padding="lg" elevation="sm" interactive className={styles.pkgCard}>
                <div className={styles.pkgName}>{p.name}</div>
                <p className={styles.pkgDesc}>{p.desc}</p>
                <div className={styles.pkgPriceRow}>
                  <span className={styles.pkgFrom}>{common("from")}</span>
                  <span className={styles.pkgPrice}>{formatEur(p.price)}</span>
                </div>
                <BookingButton
                  area={service.id}
                  variant="primary"
                  block
                  leftIcon={<Calendar size={16} />}
                >
                  {t("packageCta")}
                </BookingButton>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className={styles.faqSection}>
        <Container style={{ maxWidth: 880 }}>
          <SectionHead overline={t("faqTitle")} title={t("faqTitle")} />
          <div>
            {service.faq.map((f, i) => (
              <FaqItem key={i} q={f.q} a={f.a} />
            ))}
          </div>
        </Container>
      </section>

      <CTABand />
    </>
  );
}
