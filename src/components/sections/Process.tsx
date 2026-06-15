import { useTranslations } from "next-intl";
import { Container, SectionHead } from "@/components/layout/Section";
import styles from "./Process.module.css";

interface Step {
  title: string;
  desc: string;
}

export function Process() {
  const t = useTranslations("home");
  const steps = t.raw("why") as Step[];

  return (
    <section className={styles.section}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/logo/mark-white.svg" alt="" className={styles.mark} />
      <Container className={styles.inner}>
        <SectionHead overline={t("whyOverline")} title={t("whyTitle")} center light />
        <div className={styles.grid}>
          {steps.map((step, i) => (
            <div key={i} className={styles.step}>
              <div className={styles.num}>{i + 1}</div>
              <div className={styles.stepTitle}>{step.title}</div>
              <p className={styles.stepDesc}>{step.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
