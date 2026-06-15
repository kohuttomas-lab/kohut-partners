import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageHero } from "@/components/layout/PageHero";
import { ServicesList } from "@/components/sections/ServicesList";
import { CTABand } from "@/components/layout/CTABand";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { locale } = await props.params;
  const t = await getTranslations({ locale, namespace: "services" });
  return { title: t("heroTitle"), description: t("heroLead") };
}

export default async function ServicesPage(props: Props) {
  const { locale } = await props.params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "services" });
  const tHome = await getTranslations({ locale, namespace: "home" });

  return (
    <>
      <PageHero overline={tHome("servOverline")} title={t("heroTitle")} lead={t("heroLead")} />
      <ServicesList />
      <CTABand />
    </>
  );
}
