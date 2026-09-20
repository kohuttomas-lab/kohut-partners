import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { localeAlternates } from "@/lib/seo";
import { isAvailableIn, type BaseLocale as Locale } from "@/i18n/routing";
import { getLegalDoc } from "@/lib/legal";
import { LegalDocument } from "@/components/sections/LegalDocument";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { locale } = await props.params;
  // Stránka existuje len po slovensky a anglicky (viď BASE_ONLY_PATHNAMES).
  if (!isAvailableIn("/privacy", locale)) return {};
  return {
    title: getLegalDoc(locale as Locale, "privacy").title,
    alternates: localeAlternates(locale, "/privacy"),
  };
}

export default async function PrivacyPage(props: Props) {
  const { locale } = await props.params;
  if (!isAvailableIn("/privacy", locale)) notFound();
  setRequestLocale(locale);
  return <LegalDocument doc={getLegalDoc(locale as Locale, "privacy")} />;
}
