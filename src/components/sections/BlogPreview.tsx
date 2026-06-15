import { useLocale, useTranslations } from "next-intl";
import type { Locale } from "@/i18n/routing";
import { getBlog } from "@/lib/content";
import { Container, SectionHead } from "@/components/layout/Section";
import { LinkButton } from "@/components/ui/Button";
import { ArrowRight } from "@/components/icons";
import { ArticleCard } from "./ArticleCard";
import styles from "./BlogPreview.module.css";

export function BlogPreview() {
  const t = useTranslations("home");
  const locale = useLocale() as Locale;
  const posts = getBlog(locale).slice(0, 3);

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.head}>
          <div className={styles.headText}>
            <SectionHead
              overline={t("blogOverline")}
              title={t("blogTitle")}
              lead={t("blogLead")}
              flush
            />
          </div>
          <LinkButton
            href="/blog"
            variant="secondary"
            rightIcon={<ArrowRight size={16} />}
            className={styles.headBtn}
          >
            {t("blogCta")}
          </LinkButton>
        </div>
        <div className={styles.grid}>
          {posts.map((p) => (
            <ArticleCard key={p.id} article={p} />
          ))}
        </div>
      </Container>
    </section>
  );
}
