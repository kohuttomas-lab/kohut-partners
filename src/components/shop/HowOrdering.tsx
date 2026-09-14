import { useTranslations } from "next-intl";
import { Container, SectionHead } from "@/components/layout/Section";
import styles from "./HowOrdering.module.css";

/** Čo sa stane po kliknutí na „Objednať" — tri kroky, bez platby vopred. */
export function HowOrdering() {
  const t = useTranslations("shop.order");
  const steps = t.raw("steps") as string[];

  return (
    <section className={styles.section}>
      <Container>
        <SectionHead overline={t("howOverline")} title={t("howTitle")} lead={t("lead")} />
        <ol className={styles.steps}>
          {steps.map((s, i) => (
            <li key={i} className={styles.step}>
              <span className={styles.num}>{i + 1}</span>
              <p>{s}</p>
            </li>
          ))}
        </ol>
        <p className={styles.note}>{t("noPrepay")}</p>
      </Container>
    </section>
  );
}
