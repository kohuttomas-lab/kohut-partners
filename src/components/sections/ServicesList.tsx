import { useLocale, useTranslations } from "next-intl";
import type { Locale } from "@/i18n/routing";
import { getServices } from "@/lib/content";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import { ServiceIcon } from "./ServiceIcon";
import { ArrowRight } from "@/components/icons";
import styles from "./ServicesList.module.css";

export function ServicesList() {
  const common = useTranslations("common");
  const locale = useLocale() as Locale;
  const services = getServices(locale);

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.grid}>
          {services.map((s) => (
            <Link
              key={s.id}
              href={{ pathname: "/services/[id]", params: { id: s.id } }}
              className={styles.cardLink}
            >
              <Card interactive padding="lg" elevation="sm" accent className={styles.card}>
                <ServiceIcon name={s.icon} box={58} size={28} />
                <div className={styles.body}>
                  <div className={styles.name}>{s.name}</div>
                  <p className={styles.summary}>{s.summary}</p>
                  <span className={styles.more}>
                    {common("servDetailCta")} <ArrowRight size={15} />
                  </span>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
