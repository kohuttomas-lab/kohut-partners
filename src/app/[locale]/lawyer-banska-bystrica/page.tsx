import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { localeAlternates, ogImageUrl } from "@/lib/seo";
import { getCityPage } from "@/lib/city-pages";
import { CityPage } from "@/components/sections/CityPage";

const CITY_ID = "banska-bystrica";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { locale } = await props.params;
  const page = getCityPage(locale as Locale, CITY_ID);
  if (!page) return {};
  return {
    title: { absolute: page.content.metaTitle },
    description: page.content.metaDescription,
    alternates: localeAlternates(locale, "/lawyer-banska-bystrica"),
    openGraph: {
      type: "website",
      title: page.content.metaTitle,
      description: page.content.metaDescription,
      images: [{ url: ogImageUrl(locale) }],
    },
  };
}

export default async function Page(props: Props) {
  const { locale } = await props.params;
  setRequestLocale(locale);
  const page = getCityPage(locale as Locale, CITY_ID);
  if (!page) notFound();
  return <CityPage locale={locale as Locale} page={page} content={page.content} />;
}
