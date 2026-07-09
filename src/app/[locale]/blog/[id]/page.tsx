import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { localeAlternates, absoluteUrl, articleSchema, breadcrumbSchema, ogImageUrl } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import type { Locale } from "@/i18n/routing";
import { getArticle, getArticleIds, BLOG_AUTHOR } from "@/lib/content";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/layout/Section";
import { Badge } from "@/components/ui/Badge";
import { Avatar } from "@/components/ui/Avatar";
import { BookingButton } from "@/components/booking/BookingButton";
import { ArrowLeft, Calendar, Clock, FileText } from "@/components/icons";
import styles from "./article.module.css";

type Props = { params: Promise<{ locale: string; id: string }> };

export function generateStaticParams() {
  return getArticleIds().map((id) => ({ id }));
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { locale, id } = await props.params;
  const article = getArticle(locale as Locale, id);
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt,
    alternates: localeAlternates(locale, { pathname: "/blog/[id]", params: { id } }),
    openGraph: {
      type: "article",
      title: article.title,
      description: article.excerpt,
      publishedTime: article.iso,
      images: [{ url: ogImageUrl(locale) }],
    },
  };
}

export default async function ArticlePage(props: Props) {
  const { locale, id } = await props.params;
  setRequestLocale(locale);

  const article = getArticle(locale as Locale, id);
  if (!article) notFound();

  const t = await getTranslations({ locale, namespace: "home" });
  const common = await getTranslations({ locale, namespace: "common" });
  const tNav = await getTranslations({ locale, namespace: "nav" });
  const articleUrl = absoluteUrl(locale, { pathname: "/blog/[id]", params: { id } });

  return (
    <>
      <JsonLd
        data={articleSchema({
          locale,
          url: articleUrl,
          headline: article.title,
          description: article.excerpt,
          datePublished: article.iso,
          author: BLOG_AUTHOR,
          authorUrl: absoluteUrl(locale, "/about"),
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: tNav("home"), url: absoluteUrl(locale, "/") },
          { name: tNav("blog"), url: absoluteUrl(locale, "/blog") },
          { name: article.title, url: articleUrl },
        ])}
      />
      <section className={styles.head}>
        <Container style={{ maxWidth: 800 }}>
          <Link href="/blog" className={styles.back}>
            <ArrowLeft size={16} />
            {common("backToBlog")}
          </Link>
          <Badge tone="accent" variant="soft">
            {article.category}
          </Badge>
          <h1 className={styles.title}>{article.title}</h1>
          <div className={styles.meta}>
            <span className={styles.author}>
              <Avatar name={BLOG_AUTHOR} size="xs" />
              {BLOG_AUTHOR}
            </span>
            <span>{article.date}</span>
            <span className={styles.metaTime}>
              <Clock size={14} />
              {article.read} {common("readTime")}
            </span>
          </div>
        </Container>
      </section>

      <section className={styles.body}>
        <Container style={{ maxWidth: 800 }}>
          {locale === "en" ? (
            <p className={styles.lawNote}>
              {(await getTranslations({ locale, namespace: "blog" }))("skLawNote")}
            </p>
          ) : null}
          <div className={styles.cover}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo/mark-white.svg" alt="" className={styles.coverMark} />
            <FileText size={56} />
          </div>
          {article.body.map((para, i) => (
            <p key={i} className={styles.para}>
              {para}
            </p>
          ))}
          <div className={styles.cta}>
            <div>
              <div className={styles.ctaTitle}>{t("ctaBandTitle")}</div>
              <div className={styles.ctaLead}>{t("ctaBandLead")}</div>
            </div>
            <BookingButton variant="accent" leftIcon={<Calendar size={16} />}>
              {common("cta")}
            </BookingButton>
          </div>
        </Container>
      </section>
    </>
  );
}
