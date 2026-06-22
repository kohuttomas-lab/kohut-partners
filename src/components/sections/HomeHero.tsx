import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import type { Locale } from "@/i18n/routing";
import { getTeam } from "@/lib/content";
import { Container, Overline } from "@/components/layout/Section";
import { Badge } from "@/components/ui/Badge";
import { LinkButton } from "@/components/ui/Button";
import { BookingButton } from "@/components/booking/BookingButton";
import { Calendar, CheckCircle } from "@/components/icons";
import { ESHOP_ENABLED } from "@/lib/flags";
import styles from "./HomeHero.module.css";

interface Stat {
  value: string;
  label: string;
}

export function HomeHero() {
  const t = useTranslations("home");
  const tNav = useTranslations("nav");
  const locale = useLocale() as Locale;
  const lead = getTeam(locale)[0];
  const chips = t.raw("heroChips") as string[];
  const miniStats = (t.raw("stats") as Stat[]).slice(0, 2);

  return (
    <section className={styles.section}>
      <Container className={styles.grid}>
        <div>
          <Overline>{t("overline")}</Overline>
          <h1 className={styles.title}>{t("heroTitle")}</h1>
          <p className={styles.lead}>{t("heroLead")}</p>
          <div className={styles.ctaRow}>
            <BookingButton variant="accent" size="lg" leftIcon={<Calendar size={20} />}>
              {t("heroPrimary")}
            </BookingButton>
            {ESHOP_ENABLED ? (
              <LinkButton href="/shop" variant="secondary" size="lg">
                {t("heroSecondary")}
              </LinkButton>
            ) : (
              <LinkButton href="/services" variant="secondary" size="lg">
                {tNav("services")}
              </LinkButton>
            )}
          </div>
          <div className={styles.chips}>
            {chips.map((chip, i) => (
              <span key={i} className={styles.chip}>
                <CheckCircle size={17} className={styles.chipIcon} />
                {chip}
              </span>
            ))}
          </div>
        </div>

        <div className={styles.panel}>
          <Image
            src="/team/tomas-hero-navy.jpg"
            alt={`${lead.name} — ${lead.role}`}
            fill
            priority
            sizes="(max-width: 900px) 440px, 480px"
            className={styles.panelImg}
          />
          <div className={styles.panelGrad} />
          <div className={styles.panelBadge}>
            <Badge tone="accent" variant="solid">
              {t("heroBadge")}
            </Badge>
          </div>
          <div className={styles.panelBottom}>
            <div className={styles.panelName}>{lead.name}</div>
            <div className={styles.panelRole}>{lead.role}</div>
            <div className={styles.miniGrid}>
              {miniStats.map((s, i) => (
                <div key={i} className={styles.mini}>
                  <div className={styles.miniValue}>{s.value}</div>
                  <div className={styles.miniLabel}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
