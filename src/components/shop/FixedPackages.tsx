import { useLocale, useTranslations } from "next-intl";
import type { Locale } from "@/i18n/routing";
import { getShopPackages } from "@/lib/content";
import { formatEur } from "@/lib/format";
import { Container, SectionHead } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { AddToCartButton } from "./AddToCartButton";
import styles from "./FixedPackages.module.css";

export function FixedPackages() {
  const t = useTranslations("shop");
  const common = useTranslations("common");
  const locale = useLocale() as Locale;
  const packages = getShopPackages(locale);

  return (
    <section className={styles.section}>
      <Container>
        <SectionHead overline={t("pkgOverline")} title={t("pkgTitle")} lead={t("pkgLead")} />
        <div className={styles.grid}>
          {packages.map((p) => (
            <Card key={p.id} padding="lg" elevation="sm" interactive className={styles.card}>
              <Badge tone="brand" variant="soft" size="sm" className={styles.badge}>
                {p.area}
              </Badge>
              <div className={styles.name}>{p.name}</div>
              <p className={styles.desc}>{p.desc}</p>
              <div className={styles.cardBottom}>
                <div>
                  <span className={styles.from}>{common("from")} </span>
                  <span className={styles.priceVal}>{formatEur(p.price)}</span>
                </div>
                <AddToCartButton id={p.id} idleIcon="bag" idleLabelKey="addToCart" />
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
