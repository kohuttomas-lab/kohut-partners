import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { getOffices, CONTACT } from "@/lib/content";
import { Container } from "@/components/layout/Section";
import { PageHero } from "@/components/layout/PageHero";
import { Card } from "@/components/ui/Card";
import { ContactForm } from "@/components/sections/ContactForm";
import { BookingButton } from "@/components/booking/BookingButton";
import { Calendar, Clock, Mail, MapPin, Phone } from "@/components/icons";
import styles from "./contact.module.css";

type Props = { params: Promise<{ locale: string }> };

const tel = (phone: string) => `tel:${phone.replace(/\s/g, "")}`;

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { locale } = await props.params;
  const t = await getTranslations({ locale, namespace: "contact" });
  return { title: t("title"), description: t("lead") };
}

export default async function ContactPage(props: Props) {
  const { locale } = await props.params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "contact" });
  const tBooking = await getTranslations({ locale, namespace: "booking" });
  const common = await getTranslations({ locale, namespace: "common" });
  const offices = getOffices(locale as Locale);

  return (
    <>
      <PageHero overline={t("overline")} title={t("title")} lead={t("lead")} />

      <section className={styles.section}>
        <Container className={styles.grid}>
          <div>
            <div className={styles.infoList}>
              <div className={styles.infoRow}>
                <span className={styles.infoIcon}>
                  <Phone size={20} />
                </span>
                <div>
                  <div className={styles.infoLabel}>{t("phoneLabel")}</div>
                  <div className={styles.infoValue}>
                    <a href={tel(CONTACT.phone)} className={styles.infoLink}>
                      {CONTACT.phone}
                    </a>
                    <a href={tel(CONTACT.phone2)} className={`${styles.infoLink} ${styles.infoSecondary}`}>
                      {CONTACT.phone2}
                    </a>
                  </div>
                </div>
              </div>
              <div className={styles.infoRow}>
                <span className={styles.infoIcon}>
                  <Mail size={20} />
                </span>
                <div>
                  <div className={styles.infoLabel}>{t("emailLabel")}</div>
                  <div className={styles.infoValue}>
                    <a href={`mailto:${CONTACT.email}`} className={styles.infoLink}>
                      {CONTACT.email}
                    </a>
                  </div>
                </div>
              </div>
              <div className={styles.infoRow}>
                <span className={styles.infoIcon}>
                  <Clock size={20} />
                </span>
                <div>
                  <div className={styles.infoLabel}>{t("hoursLabel")}</div>
                  <div className={styles.infoValue}>{t("hours")}</div>
                </div>
              </div>
            </div>

            <div className={styles.officesTitle}>{t("offices")}</div>
            <div className={styles.officesGrid}>
              {offices.map((o, i) => (
                <Card key={i} padding="md" elevation="xs">
                  <span className={styles.officeIcon}>
                    <MapPin size={20} />
                  </span>
                  <div className={styles.officeCity}>{o.city}</div>
                  <div className={styles.officeAddr}>{o.address}</div>
                </Card>
              ))}
            </div>

            <div className={styles.bookCard}>
              <span className={styles.bookCardLabel}>{tBooking("title")}</span>
              <BookingButton variant="accent" size="sm" leftIcon={<Calendar size={15} />}>
                {common("ctaShort")}
              </BookingButton>
            </div>
          </div>

          <ContactForm />
        </Container>
      </section>
    </>
  );
}
