import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { localeAlternates } from "@/lib/seo";
import type { Locale } from "@/i18n/routing";
import { getLegalDoc } from "@/lib/legal";
import { LegalDocument } from "@/components/sections/LegalDocument";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { locale } = await props.params;
  return {
    title: getLegalDoc(locale as Locale, "terms").title,
    alternates: localeAlternates(locale, "/terms"),
  };
}

export default async function TermsPage(props: Props) {
  const { locale } = await props.params;
  setRequestLocale(locale);
  return <LegalDocument doc={getLegalDoc(locale as Locale, "terms")} />;
}
