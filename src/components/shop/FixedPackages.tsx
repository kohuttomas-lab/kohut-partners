import { useLocale, useTranslations } from "next-intl";
import { baseLocale } from "@/i18n/routing";
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
  const locale = baseLocale(useLocale());
  const packages = getShopPackages(locale);

  return (
    <section className={styles.section}>
      <Container>
        <SectionHead overline={t("pkgOverline")} title={t("pkgTitle")} lead={t("pkgLead")} />
        <div className={styles.grid}>
          {packages.map((p) => {
            const page = locale === "sk" ? PACKAGE_PAGES[p.id] : undefined;
            const detail = getPackageDetail(p.id, locale);
            // Balíky so stupňami: tabuľka, v ktorej má každý stupeň rovnakú váhu
            // (schválené 14. 9. 2026) — presné sumy, nikdy „od" ani zvýraznená
            // len najnižšia cena. Doplnky ostávajú až v objednávke.
            const variants = getVariants(p.id);
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
                {variants ? (
                  <table className={styles.tierTable}>
                    <thead>
                      <tr>
                        <th scope="col">{variants.label[locale]}</th>
                        <th scope="col">
                          {common("withVat")}
                          {detail?.fees ? "*" : ""}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {variants.options.map((o) => (
                        <tr key={o.id}>
                          <td>{o.short?.[locale] ?? o[locale]}</td>
                          <td className={styles.tierPrice}>{formatEur(o.price)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : null}
                <div className={variants ? styles.cardBottomTiers : styles.cardBottom}>
                  {variants ? (
                    <span />
                  ) : (
                    <div className={styles.priceBlock}>
                      <span>
                        <span className={styles.priceVal}>{formatEur(p.price)}</span>
                        <span className={styles.vat}> {common("withVat")}</span>
                        {detail?.fees ? <span className={styles.feesMark}>*</span> : null}
                      </span>
                    </div>
                  )}
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
