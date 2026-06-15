import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { getBlog } from "@/lib/content";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/layout/Section";
import { PageHero } from "@/components/layout/PageHero";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ArticleCard } from "@/components/sections/ArticleCard";
import { CTABand } from "@/components/layout/CTABand";
import { ArrowRight, Clock, FileText } from "@/components/icons";
import styles from "./blog.module.css";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { locale } = await props.params;
  const t = await getTranslations({ locale, namespace: "home" });
  return { title: t("blogTitle"), description: t("blogLead") };
}

export default async function BlogPage(props: Props) {
  const { locale } = await props.params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "home" });
  const common = await getTranslations({ locale, namespace: "common" });
  const posts = getBlog(locale as Locale);
  const featured = posts[0];
  const rest = posts.slice(1);

  return (
    <>
      <PageHero overline={t("blogOverline")} title={t("blogTitle")} lead={t("blogLead")} />

      <section className={styles.section}>
        <Container>
          <Link
            href={{ pathname: "/blog/[id]", params: { id: featured.id } }}
            className={styles.featuredLink}
          >
            <Card interactive padding="none" elevation="md" className={styles.featured}>
              <div className={styles.featuredThumb}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/logo/mark-white.svg" alt="" className={styles.featuredMark} />
                <FileText size={56} />
                <div className={styles.featuredBadge}>
                  <Badge tone="accent" variant="solid">
                    {featured.category}
                  </Badge>
                </div>
              </div>
              <div className={styles.featuredBody}>
                <div className={styles.featuredTitle}>{featured.title}</div>
                <p className={styles.featuredExcerpt}>{featured.excerpt}</p>
                <div className={styles.featuredMeta}>
                  <span>{featured.date}</span>
                  <span className={styles.featuredMetaTime}>
                    <Clock size={14} />
                    {featured.read} {common("readTime")}
                  </span>
                  <span className={styles.featuredRead}>
                    {common("readMore")} <ArrowRight size={15} />
                  </span>
                </div>
              </div>
            </Card>
          </Link>

          <div className={styles.grid}>
            {rest.map((p) => (
              <ArticleCard key={p.id} article={p} />
            ))}
          </div>
        </Container>
      </section>

      <CTABand />
    </>
  );
}
