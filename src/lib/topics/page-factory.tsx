import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { isAvailableIn } from "@/i18n/routing";
import { absoluteUrl, localeAlternates, ogImageUrl } from "@/lib/seo";
import { getTopic } from "@/lib/topics";
import { TopicPage } from "@/components/sections/TopicPage";

type Props = { params: Promise<{ locale: string }> };

/**
 * Vyrobí generateMetadata + default export pre hĺbkovú stránku z TOPICS.
 * V jazykoch, kde stránka neexistuje (viď localesFor), vracia notFound()
 * a prázdne metadata; hreflang uvádza len existujúce jazykové verzie.
 */
export function createTopicRoute(ns: string) {
  const topic = getTopic(ns);
  if (!topic) throw new Error(`Unknown topic: ${ns}`);

  async function generateMetadata(props: Props): Promise<Metadata> {
    const { locale } = await props.params;
    if (!isAvailableIn(topic!.pathname, locale)) return {};
    const t = await getTranslations({ locale, namespace: topic!.ns });
    const title = t("metaTitle");
    const description = t("metaDescription");
    return {
      title,
      description,
      alternates: localeAlternates(locale, topic!.pathname),
      openGraph: {
        title,
        description,
        type: "website",
        url: absoluteUrl(locale, topic!.pathname),
        images: [{ url: ogImageUrl(locale) }],
      },
    };
  }

  async function Page(props: Props) {
    const { locale } = await props.params;
    if (!isAvailableIn(topic!.pathname, locale)) notFound();
    setRequestLocale(locale);
    return <TopicPage locale={locale} topic={topic!} />;
  }

  return { generateMetadata, Page };
}
