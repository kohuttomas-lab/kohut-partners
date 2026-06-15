import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BookingProvider } from "@/components/booking/BookingProvider";
import { CartProvider } from "@/components/shop/CartProvider";
import "../globals.css";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata(props: PageProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await props.params;
  const sk = locale === "sk";
  const title = sk
    ? "kohút & partners — advokátska kancelária Zvolen"
    : "kohút & partners — law firm in Zvolen";
  const description = sk
    ? "Insolvencie, obchodné a IT právo, nehnuteľnosti a súdne spory. Poradíme zrozumiteľne, konáme rýchlo a s vopred známou cenou. Zvolen."
    : "Insolvency, commercial and IT law, real estate and litigation. Clear advice, fast action and a price you know up front. Zvolen, Slovakia.";

  return {
    metadataBase: new URL("https://www.tkak.sk"),
    title: { default: title, template: "%s · kohút & partners" },
    description,
    openGraph: {
      title,
      description,
      siteName: "kohút & partners",
      locale: sk ? "sk_SK" : "en_GB",
      type: "website",
    },
  };
}

export default async function LocaleLayout(props: LayoutProps<"/[locale]">) {
  const { locale } = await props.params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider>
          <BookingProvider>
            <CartProvider>
              <Header />
              <main>{props.children}</main>
              <Footer />
            </CartProvider>
          </BookingProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
