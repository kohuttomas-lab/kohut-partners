import { useTranslations } from "next-intl";
import { Container, Overline } from "@/components/layout/Section";
import { REFERENCES } from "@/lib/content";
import styles from "./References.module.css";

export function References() {
  const t = useTranslations("shop");
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.head}>
          <Overline center>{t("refOverline")}</Overline>
          <p className={styles.sentence}>{t("refSentence")}</p>
        </div>
        <div className={styles.grid}>
          {REFERENCES.map((name) => (
            <div key={name} className={styles.logo} title={name}>
              {name}
            </div>
          ))}
        </div>
        <div className={styles.note}>{t("refNote")}</div>
      </Container>
    </section>
  );
}
