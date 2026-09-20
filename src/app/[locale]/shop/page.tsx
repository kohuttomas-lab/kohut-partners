import type { Metadata } from "next";
import { isAvailableIn } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { localeAlternates } from "@/lib/seo";
import { ESHOP_ENABLED, TEMPLATES_FOR_SALE } from "@/lib/flags";
import { PageHero } from "@/components/layout/PageHero";
import { Container, SectionHead } from "@/components/layout/Section";
import { FixedPackages } from "@/components/shop/FixedPackages";
import { HowOrdering } from "@/components/shop/HowOrdering";
import { Templates } from "@/components/shop/Templates";
import { SubscriptionPlans } from "@/components/shop/SubscriptionPlans";
import { CTABand } from "@/components/layout/CTABand";
import styles from "@/components/shop/Templates.module.css";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { locale } = await props.params;
  // Stránka existuje len po slovensky a anglicky (viď BASE_ONLY_PATHNAMES).
  if (!isAvailableIn("/shop", locale)) return {};
  const t = await getTranslations({ locale, namespace: "shop" });
  return {
    title: t("heroTitle"),
    description: t("heroLead"),
    alternates: localeAlternates(locale, "/shop"),
  };
}

export default async function ShopPage(props: Props) {
  if (!ESHOP_ENABLED) notFound();
  const { locale } = await props.params;
  if (!isAvailableIn("/shop", locale)) notFound();
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "shop" });

  return (
    <>
      <PageHero overline={t("overline")} title={t("heroTitle")} lead={t("heroLead")} />
      <FixedPackages />
      <HowOrdering />
      {TEMPLATES_FOR_SALE ? (
        <Templates />
      ) : (
        // Teaser until templates pass attorney review and download delivery
        // exists — no purchase buttons before both are in place.
        <section className={styles.section}>
          <Container>
            <SectionHead
              overline={t("tplOverline")}
              title={t("tplSoonTitle")}
              lead={t("tplSoonLead")}
            />
          </Container>
        </section>
      )}
      <SubscriptionPlans />
      {/* <References /> intentionally absent — placeholder logos are fictitious. */}
      <CTABand />
    </>
  );
}
