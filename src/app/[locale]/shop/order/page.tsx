import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { localeAlternates } from "@/lib/seo";
import { ESHOP_ENABLED } from "@/lib/flags";
import { getShopPackages } from "@/lib/content";
import { PageHero } from "@/components/layout/PageHero";
import { OrderSection } from "@/components/shop/OrderSection";

type Props = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ balik?: string | string[]; stripe?: string | string[] }>;
};

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { locale } = await props.params;
  const t = await getTranslations({ locale, namespace: "shop.order" });
  return {
    title: t("title"),
    description: t("lead"),
    alternates: localeAlternates(locale, "/shop/order"),
    // Formulárová stránka — bez vlastnej hodnoty pre vyhľadávače.
    robots: { index: false, follow: true },
  };
}

/** Objednávka služby s platbou hneď; ?balik=<id> predvyplní balík, ?stripe= je návrat z Checkoutu. */
export default async function ShopOrderPage(props: Props) {
  if (!ESHOP_ENABLED) notFound();
  const { locale } = await props.params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "shop.order" });
  const sp = await props.searchParams;
  const balik = Array.isArray(sp.balik) ? sp.balik[0] : sp.balik;
  const stripeRaw = Array.isArray(sp.stripe) ? sp.stripe[0] : sp.stripe;
  const stripeResult =
    stripeRaw === "success" || stripeRaw === "cancel" ? stripeRaw : undefined;

  const packages = getShopPackages(locale as Locale);
  const initialId = packages.some((p) => p.id === balik) ? balik : undefined;

  return (
    <>
      <PageHero overline={t("overline")} title={t("title")} lead={t("lead")} />
      <OrderSection packages={packages} initialId={initialId} stripeResult={stripeResult} />
    </>
  );
}
