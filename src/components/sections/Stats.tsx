import { useTranslations } from "next-intl";
import { Container } from "@/components/layout/Section";
import styles from "./Stats.module.css";

interface Stat {
  value: string;
  label: string;
}

export function Stats() {
  const t = useTranslations("home");
  const stats = t.raw("stats") as Stat[];

  return (
    <section className={styles.section}>
      <Container className={styles.inner}>
        <div className={styles.label}>{t("trustLabel")}</div>
        <div className={styles.grid}>
          {stats.map((s, i) => (
            <div key={i} className={styles.item}>
              <div className={styles.value}>{s.value}</div>
              <div className={styles.itemLabel}>{s.label}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
