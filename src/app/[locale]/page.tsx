import { setRequestLocale } from "next-intl/server";
import { isIntlLocale } from "@/i18n/routing";
import { HomeHero } from "@/components/sections/HomeHero";
import { Stats } from "@/components/sections/Stats";
import { HomeTopics } from "@/components/sections/HomeTopics";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { Process } from "@/components/sections/Process";
import { TeamSection } from "@/components/sections/TeamSection";
import { Regions } from "@/components/sections/Regions";
import { BlogPreview } from "@/components/sections/BlogPreview";
import { CTABand } from "@/components/layout/CTABand";
import { LegalServiceSchema } from "@/components/seo/LegalServiceSchema";

export default async function HomePage(props: PageProps<"/[locale]">) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  return (
    <>
      <LegalServiceSchema locale={locale} />
      <HomeHero />
      <Stats />
      {/* Vlastná vstupná vrstva trhu (zatiaľ PL) — inde sa nevykreslí. */}
      <HomeTopics />
      <ServicesGrid />
      <Process />
      <TeamSection withButton />
      {/* Mestské stránky a blog existujú len po slovensky a anglicky. */}
      {isIntlLocale(locale) ? null : (
        <>
          <Regions />
          <BlogPreview />
        </>
      )}
      {/* <References /> stays out until REFERENCES holds real, approved client
          names — the placeholder list is fictitious and must never render. */}
      <CTABand />
    </>
  );
}
