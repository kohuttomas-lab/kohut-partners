import { useTranslations } from "next-intl";
import { Container } from "./Section";
import { BookingButton } from "@/components/booking/BookingButton";
import { Calendar } from "@/components/icons";
import styles from "./CTABand.module.css";

export function CTABand() {
  const t = useTranslations("home");
  return (
    <section className={styles.band}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/logo/mark-white.svg" alt="" className={styles.mark} />
      <Container className={styles.inner}>
        <div className={styles.copy}>
          <h2 className={styles.title}>{t("ctaBandTitle")}</h2>
          <p className={styles.lead}>{t("ctaBandLead")}</p>
        </div>
        <BookingButton variant="accent" size="lg" leftIcon={<Calendar size={20} />}>
          {t("ctaBandBtn")}
        </BookingButton>
      </Container>
    </section>
  );
}
