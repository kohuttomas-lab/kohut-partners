import { setRequestLocale } from "next-intl/server";
import { HomeHero } from "@/components/sections/HomeHero";
import { Stats } from "@/components/sections/Stats";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { Process } from "@/components/sections/Process";
import { TeamSection } from "@/components/sections/TeamSection";
import { BlogPreview } from "@/components/sections/BlogPreview";
import { References } from "@/components/shop/References";
import { CTABand } from "@/components/layout/CTABand";
import { LegalServiceSchema } from "@/components/seo/LegalServiceSchema";
import { ESHOP_ENABLED } from "@/lib/flags";

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
      <BlogPreview />
      {ESHOP_ENABLED ? <References /> : null}
      <CTABand />
    </>
  );
}
