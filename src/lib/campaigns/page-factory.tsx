import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { getPathname } from "@/i18n/navigation";
import { SITE_URL, ogImageUrl } from "@/lib/seo";
import { getCampaign } from "@/lib/campaigns";
import { CampaignPage } from "@/components/sections/CampaignPage";

type Props = { params: Promise<{ locale: string }> };

/**
 * Vyrobí generateMetadata + default export pre kampaňovú route.
 * Stránky sú len po slovensky: /en vracia notFound(), metadata nesú
 * jednoduchý self-canonical bez hreflang alternatív (jednojazyčná stránka
 * nesmie sľubovať preklad, ktorý neexistuje) a sitemap ich uvádza bez
 * jazykového páru.
 */
export function createCampaignRoute(id: string) {
  const campaign = getCampaign(id);
  if (!campaign) throw new Error(`Unknown campaign: ${id}`);

  const canonical = SITE_URL + getPathname({ locale: "sk", href: campaign.pathname });

  async function generateMetadata(props: Props): Promise<Metadata> {
    const { locale } = await props.params;
    if (locale !== "sk") return {};
    return {
      title: { absolute: campaign!.meta.title },
      description: campaign!.meta.description,
      alternates: { canonical },
      openGraph: {
        type: "website",
        title: campaign!.meta.title,
        description: campaign!.meta.description,
        url: canonical,
        images: [{ url: ogImageUrl("sk") }],
      },
    };
  }

  async function Page(props: Props) {
    const { locale } = await props.params;
    if (locale !== "sk") notFound();
    setRequestLocale(locale);
    return <CampaignPage campaign={campaign!} />;
  }

  return { generateMetadata, Page };
}
