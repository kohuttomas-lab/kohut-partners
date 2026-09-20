import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { localeAlternates } from "@/lib/seo";
import { isAvailableIn, type BaseLocale as Locale } from "@/i18n/routing";
import { getLegalDoc } from "@/lib/legal";
import { LegalDocument } from "@/components/sections/LegalDocument";
import { CookieSettings } from "@/components/layout/CookieSettings";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { locale } = await props.params;
  // Stránka existuje len po slovensky a anglicky (viď BASE_ONLY_PATHNAMES).
  if (!isAvailableIn("/cookies", locale)) return {};
  return {
    title: getLegalDoc(locale as Locale, "cookies").title,
    alternates: localeAlternates(locale, "/cookies"),
  };
}

export default async function CookiesPage(props: Props) {
  const { locale } = await props.params;
  if (!isAvailableIn("/cookies", locale)) notFound();
  setRequestLocale(locale);
  return (
    <LegalDocument
      doc={getLegalDoc(locale as Locale, "cookies")}
      action={<CookieSettings />}
    />
  );
}
