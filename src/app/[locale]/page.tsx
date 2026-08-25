import { setRequestLocale } from "next-intl/server";
import { HomeHero } from "@/components/sections/HomeHero";
import { Stats } from "@/components/sections/Stats";
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
      <ServicesGrid />
      <Process />
      <TeamSection withButton />
      <Regions />
      <BlogPreview />
      {/* <References /> stays out until REFERENCES holds real, approved client
          names — the placeholder list is fictitious and must never render. */}
      <CTABand />
    </>
  );
}
