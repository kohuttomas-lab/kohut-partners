import { useLocale, useTranslations } from "next-intl";
import type { Locale } from "@/i18n/routing";
import { getTemplates } from "@/lib/content";
import { formatEur } from "@/lib/format";
import { iconByName } from "@/components/icons";
import { Container, SectionHead } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import { CheckCircle, Download } from "@/components/icons";
import { AddToCartButton } from "./AddToCartButton";
import styles from "./Templates.module.css";

export function Templates() {
  const t = useTranslations("shop");
  const locale = useLocale() as Locale;
  const templates = getTemplates(locale);
  const trust = t.raw("tplTrust") as string[];

  return (
    <section className={styles.section}>
      <Container>
        <SectionHead overline={t("tplOverline")} title={t("tplTitle")} lead={t("tplLead")} />
        <div className={styles.trust}>
          {trust.map((item, i) => (
            <span key={i} className={styles.trustChip}>
              <span className={styles.trustIcon}>
                <CheckCircle size={16} />
              </span>
              {item}
            </span>
          ))}
        </div>
        <div className={styles.grid}>
          {templates.map((tpl) => {
            const Icon = iconByName[tpl.icon] ?? iconByName.FileText;
            return (
              <Card key={tpl.id} padding="lg" elevation="sm" interactive className={styles.card}>
                <div className={styles.cardTop}>
                  <span className={styles.icon}>
                    <Icon size={24} />
                  </span>
                  <span className={styles.format}>
                    <Download size={14} />
                    {t("tplFormat")}
                  </span>
                </div>
                <div className={styles.name}>{tpl.name}</div>
                <div className={styles.cardBottom}>
                  <span className={styles.price}>{formatEur(tpl.price)}</span>
                  <AddToCartButton id={tpl.id} idleIcon="download" idleLabelKey="tplBuy" />
                </div>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
