import { useLocale, useTranslations } from "next-intl";
import type { Locale } from "@/i18n/routing";
import { Link } from "@/i18n/navigation";
import { getShopPackages } from "@/lib/content";
import { getPackageDetail } from "@/lib/shop-details";
import { PACKAGE_PAGES } from "@/lib/shop-pages";
import { getVariants } from "@/lib/shop-variants";
import { formatEur } from "@/lib/format";
import { Container, SectionHead } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { LinkButton } from "@/components/ui/Button";
import { ArrowRight, Check } from "@/components/icons";
import styles from "./FixedPackages.module.css";

/**
 * Prehľad balíkov. Karta = presná cena (bez „od"), prvé tri položky rozsahu,
 * odkaz na produktovú stránku (ak existuje; sú len po slovensky) a „Objednať",
 * ktoré vedie na objednávkový formulár s predvyplneným balíkom — bez platby
 * vopred (viď CART_ENABLED vo flags.ts).
 */
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
          {packages.map((p) => {
            const page = locale === "sk" ? PACKAGE_PAGES[p.id] : undefined;
            const detail = getPackageDetail(p.id, locale);
            // Balíky so stupňami: cena = prvý stupeň s jeho označením, ostatné
            // stupne vypísané pod ňou — presné sumy, nikdy „od".
            const variants = getVariants(p.id);
            const first = variants?.options[0];
            const rest = variants?.options.slice(1) ?? [];
            return (
              <Card key={p.id} padding="lg" elevation="sm" interactive className={styles.card}>
                <Badge tone="brand" variant="soft" size="sm" className={styles.badge}>
                  {p.area}
                </Badge>
                <div className={styles.name}>
                  {page ? (
                    <Link href={page} className={styles.nameLink}>
                      {p.name}
                    </Link>
                  ) : (
                    p.name
                  )}
                </div>
                <p className={styles.desc}>{p.desc}</p>
                {detail ? (
                  <ul className={styles.includes}>
                    {detail.includes.slice(0, 3).map((item) => (
                      <li key={item}>
                        <Check size={15} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
                {detail?.turnaround ? (
                  <p className={styles.turnaround}>{detail.turnaround}</p>
                ) : null}
                {page ? (
                  <Link href={page} className={styles.more}>
                    {t("moreAbout")} →
                  </Link>
                ) : null}
                {rest.length ? (
                  <p className={styles.tiers}>
                    {rest.map((o) => `${o.short?.[locale] ?? o[locale]} ${formatEur(o.price)}`).join(" · ")}
                  </p>
                ) : null}
                <div className={styles.cardBottom}>
                  <div className={styles.priceBlock}>
                    <span>
                      <span className={styles.priceVal}>{formatEur(first ? first.price : p.price)}</span>
                      <span className={styles.vat}> {common("withVat")}</span>
                      {detail?.fees ? <span className={styles.feesMark}>*</span> : null}
                    </span>
                    {first ? (
                      <span className={styles.tierLabel}>{first.short?.[locale] ?? first[locale]}</span>
                    ) : null}
                  </div>
                  <LinkButton
                    href={{ pathname: "/shop/order", query: { balik: p.id } }}
                    variant="primary"
                    size="sm"
                    rightIcon={<ArrowRight size={16} />}
                  >
                    {t("orderBtn")}
                  </LinkButton>
                </div>
                {detail?.fees ? <p className={styles.fees}>* {detail.fees}</p> : null}
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
