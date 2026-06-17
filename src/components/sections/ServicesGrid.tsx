import { useLocale, useTranslations } from "next-intl";
import type { Locale } from "@/i18n/routing";
import { getServices } from "@/lib/content";
import { Link } from "@/i18n/navigation";
import { Container, SectionHead } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import { ServiceIcon } from "./ServiceIcon";
import { ArrowRight } from "@/components/icons";
import styles from "./ServicesGrid.module.css";

export function ServicesGrid() {
  const t = useTranslations("home");
  const common = useTranslations("common");
  const locale = useLocale() as Locale;
  const services = getServices(locale);

  return (
    <section className={styles.section}>
      <Container>
        <SectionHead overline={t("servOverline")} title={t("servTitle")} lead={t("servLead")} />
        <div className={styles.grid}>
          {services.map((s) => (
            <Link
              key={s.id}
              href={{ pathname: "/services/[id]", params: { id: s.id } }}
              className={styles.cardLink}
            >
              <Card interactive padding="lg" elevation="sm" className={styles.card}>
                <ServiceIcon name={s.icon} />
                <div className={styles.name}>{s.name}</div>
                <p className={styles.tagline}>{s.tagline}</p>
                <span className={styles.more}>
                  {common("servDetailCta")} <ArrowRight size={15} />
                </span>
              </Card>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
