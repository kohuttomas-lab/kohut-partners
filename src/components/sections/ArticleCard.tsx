import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import type { Article } from "@/lib/content";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Clock, FileText } from "@/components/icons";
import { cx } from "@/lib/cx";
import styles from "./ArticleCard.module.css";

export function ArticleCard({ article }: { article: Article }) {
  const common = useTranslations("common");
  const accent = article.tone === "accent";

  return (
    <Link
      href={{ pathname: "/blog/[id]", params: { id: article.id } }}
      className={styles.cardLink}
    >
      <Card interactive padding="none" elevation="sm" className={styles.card}>
        <div className={cx(styles.thumb, accent ? styles.thumbAccent : styles.thumbBrand)}>
          <FileText size={40} />
          <div className={styles.badge}>
            <Badge tone={accent ? "accent" : "brand"} variant="solid" size="sm">
              {article.category}
            </Badge>
          </div>
        </div>
        <div className={styles.body}>
          <div className={styles.title}>{article.title}</div>
          <p className={styles.excerpt}>{article.excerpt}</p>
          <div className={styles.meta}>
            <span>{article.date}</span>
            <span className={styles.metaTime}>
              <Clock size={14} />
              {article.read} {common("readTime")}
            </span>
          </div>
        </div>
      </Card>
    </Link>
  );
}
