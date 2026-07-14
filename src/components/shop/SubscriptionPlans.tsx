import { useLocale, useTranslations } from "next-intl";
import type { Locale } from "@/i18n/routing";
import { getSubscriptions } from "@/lib/content";
import { formatEur } from "@/lib/format";
import { Container, SectionHead } from "@/components/layout/Section";
import { Badge } from "@/components/ui/Badge";
import { Check } from "@/components/icons";
import { cx } from "@/lib/cx";
import { SubscribeButton } from "./AddToCartButton";
import styles from "./SubscriptionPlans.module.css";

export function SubscriptionPlans() {
  const t = useTranslations("shop");
  const common = useTranslations("common");
  const locale = useLocale() as Locale;
  const plans = getSubscriptions(locale);

  return (
    <section className={styles.section}>
      <Container>
        <SectionHead
          overline={t("subsOverline")}
          title={t("subsTitle")}
          lead={t("subsLead")}
          center
        />
        <div className={styles.grid}>
          {plans.map((p) => {
            const pop = p.popular;
            return (
              <div key={p.id} className={cx(styles.plan, pop && styles.planPopular)}>
                {pop ? (
                  <div className={styles.popBadge}>
                    <Badge tone="accent" variant="solid">
                      {t("subsPopular")}
                    </Badge>
                  </div>
                ) : null}
                <div className={cx(styles.name, pop && styles.namePop)}>{p.name}</div>
                <p className={cx(styles.desc, pop && styles.descPop)}>{p.desc}</p>
                <div className={styles.priceRow}>
                  <span className={cx(styles.price, pop && styles.pricePop)}>
                    {formatEur(p.price)}
                  </span>
                  <span className={cx(styles.per, pop && styles.perPop)}>
                    {t("subsMonth")} · {common("withVat")}
                  </span>
                </div>
                <div className={cx(styles.hours, pop && styles.hoursPop)}>
                  {p.hours} {t("hoursPerMonth")}
                </div>
                <div className={styles.features}>
                  {p.features.map((f, i) => (
                    <div key={i} className={styles.feature}>
                      <span className={cx(styles.featureIcon, pop && styles.featureIconPop)}>
                        <Check size={17} />
                      </span>
                      <span className={cx(styles.featureText, pop && styles.featureTextPop)}>
                        {f}
                      </span>
                    </div>
                  ))}
                </div>
                <SubscribeButton id={p.id} popular={pop} />
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
