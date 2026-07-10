import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BookingProvider } from "@/components/booking/BookingProvider";
import { CartProvider } from "@/components/shop/CartProvider";
import { CookieConsent } from "@/components/layout/CookieConsent";
import { Analytics } from "@/components/analytics/Analytics";
import { ESHOP_ENABLED } from "@/lib/flags";
import { localeAlternates } from "@/lib/seo";
import "../globals.css";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata(props: PageProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await props.params;
  const sk = locale === "sk";
  const title = sk
    ? "kohút & partners — advokátska kancelária Zvolen"
    : "kohút & partners — Slovak law firm | Zvolen, Slovakia";
  const description = sk
    ? "Insolvencie, obchodné a IT právo, nehnuteľnosti a súdne spory. Poradíme zrozumiteľne, konáme rýchlo a s vopred známou cenou. Zvolen."
    : "Slovak law firm advising international clients in English: real estate, company formation, debt recovery, insolvency and litigation — exclusively under Slovak law.";

  return {
    metadataBase: new URL("https://www.tkak.sk"),
    title: { default: title, template: "%s · kohút & partners" },
    description,
    alternates: localeAlternates(locale, "/"),
    openGraph: {
      title,
      description,
      siteName: "kohút & partners",
      locale: sk ? "sk_SK" : "en_GB",
      alternateLocale: sk ? "en_GB" : "sk_SK",
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
        <NextIntlClientProvider>
          <BookingProvider>
            {ESHOP_ENABLED ? <CartProvider>{shell}</CartProvider> : shell}
          </BookingProvider>
          <CookieConsent />
          <Analytics />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
