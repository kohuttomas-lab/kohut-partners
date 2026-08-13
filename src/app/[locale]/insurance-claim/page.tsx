import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { SITE_URL, ogImageUrl } from "@/lib/seo";
import { CLAIM_META } from "@/lib/insurance-claim";
import { InsuranceClaimPage } from "@/components/sections/InsuranceClaimPage";

type Props = { params: Promise<{ locale: string }> };

// Slovak-only campaign page — there is no English counterpart, so it carries a
// plain self-canonical instead of hreflang alternates (a single-language page
// must not advertise a translation that doesn't exist).
const CANONICAL = `${SITE_URL}/zamietnute-poistne-plnenie`;

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { locale } = await props.params;
  if (locale !== "sk") return {};
  return {
    title: { absolute: CLAIM_META.title },
    description: CLAIM_META.description,
    alternates: { canonical: CANONICAL },
    openGraph: {
      type: "website",
      title: CLAIM_META.title,
      description: CLAIM_META.description,
      url: CANONICAL,
      images: [{ url: ogImageUrl("sk") }],
    },
  };
}

export default async function Page(props: Props) {
  const { locale } = await props.params;
  if (locale !== "sk") notFound();
  setRequestLocale(locale);
  return <InsuranceClaimPage />;
}
