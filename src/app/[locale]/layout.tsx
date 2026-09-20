import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { isIntlLocale, routing } from "@/i18n/routing";
import { INTL_CONTENT } from "@/lib/content-intl";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BookingProvider } from "@/components/booking/BookingProvider";
import { CartProvider } from "@/components/shop/CartProvider";
import { CookieConsent } from "@/components/layout/CookieConsent";
import { Analytics } from "@/components/analytics/Analytics";
import { ConsentDefaults } from "@/components/analytics/ConsentDefaults";
import { AttributionCapture } from "@/components/analytics/AttributionCapture";
import { Analytics as VercelAnalytics } from "@vercel/analytics/next";
import { ESHOP_ENABLED } from "@/lib/flags";
import { localeAlternates } from "@/lib/seo";
import "../globals.css";

const OG_LOCALES = ["sk_SK", "en_GB", "pl_PL", "hu_HU", "de_DE", "ru_RU"];

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata(props: PageProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await props.params;
  const sk = locale === "sk";
  // PL/HU/DE/RU nesú vlastný titulok a popis v content-intl (meta).
  const intl = isIntlLocale(locale) ? INTL_CONTENT[locale].meta : undefined;
  const title =
    intl?.title ??
    (sk
      ? "kohút & partners — advokátska kancelária Zvolen"
      : "kohút & partners — Slovak law firm | Zvolen, Slovakia");
  const description =
    intl?.description ??
    (sk
      ? "Insolvencie, obchodné a IT právo, nehnuteľnosti a súdne spory. Poradíme zrozumiteľne, konáme rýchlo a s vopred známou cenou. Zvolen."
      : "Slovak law firm advising international clients in English: real estate, company formation, debt recovery, insolvency and litigation — exclusively under Slovak law.");
  const ogLocale = intl?.ogLocale ?? (sk ? "sk_SK" : "en_GB");

  return {
    metadataBase: new URL("https://www.tkak.sk"),
    title: { default: title, template: "%s · kohút & partners" },
    description,
    alternates: localeAlternates(locale, "/"),
    openGraph: {
      title,
      description,
      siteName: "kohút & partners",
      locale: ogLocale,
      alternateLocale: OG_LOCALES.filter((l) => l !== ogLocale),
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function LocaleLayout(props: LayoutProps<"/[locale]">) {
  const { locale } = await props.params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);

  const shell = (
    <>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </>
  );

  return (
    <html lang={locale}>
      <body>
        {/* Musí zbehnúť skôr než hocijaká meracia značka: nastaví Consent
            Mode v2 na „bez súhlasu". Nič nesťahuje ani neukladá. */}
        <ConsentDefaults />
        <NextIntlClientProvider>
          <BookingProvider>
            {ESHOP_ENABLED ? <CartProvider>{shell}</CartProvider> : shell}
          </BookingProvider>
          <CookieConsent />
          <Analytics />
        </NextIntlClientProvider>
        {/* Vercel Web Analytics je bez cookies a bez identifikátorov naprieč
            webmi (návštevník sa páruje hashom z requestu, ktorý sa denne
            zahadzuje), preto beží ZÁMERNE mimo cookie súhlasu — inak by, tak
            ako GA4, videl len návštevníkov, ktorí klikli na „Prijať všetko".
            Mimo NextIntlClientProvider zámerne: preklady nepotrebuje. */}
        <VercelAnalytics />
        {/* Odloží si vstupnú stránku (UTM, gclid, referrer) hneď pri prvom
            načítaní, aby sa nestratili pri klientskom prekliku na /kontakt.
            Nič neukladá do prehliadača, preto tiež mimo cookie súhlasu. */}
        <AttributionCapture />
      </body>
    </html>
  );
}
