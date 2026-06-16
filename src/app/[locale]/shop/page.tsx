import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ESHOP_ENABLED } from "@/lib/flags";
import { PageHero } from "@/components/layout/PageHero";
import { FixedPackages } from "@/components/shop/FixedPackages";
import { Templates } from "@/components/shop/Templates";
import { SubscriptionPlans } from "@/components/shop/SubscriptionPlans";
import { References } from "@/components/shop/References";
import { CTABand } from "@/components/layout/CTABand";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { locale } = await props.params;
  const t = await getTranslations({ locale, namespace: "shop" });
  return { title: t("heroTitle"), description: t("heroLead") };
}

export default async function ShopPage(props: Props) {
  if (!ESHOP_ENABLED) notFound();
  const { locale } = await props.params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "shop" });

  return (
    <>
      <PageHero overline={t("overline")} title={t("heroTitle")} lead={t("heroLead")} />
      <FixedPackages />
      <Templates />
      <SubscriptionPlans />
      <References />
      <CTABand />
    </>
  );
}
