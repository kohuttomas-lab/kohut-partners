"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "@/i18n/navigation";
import { getCartCatalog } from "@/lib/content";
import { formatEur } from "@/lib/format";
import { Button } from "@/components/ui/Button";
import { ArrowRight, ShoppingBag } from "@/components/icons";
import { useCart } from "./CartProvider";
import styles from "./CartBar.module.css";

// Floating cart bar — shown only on the shop route (handoff parity),
// while the cart contents persist across the whole site.
export function CartBar() {
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations("shop");
  const { items, count, openCart, startPayment } = useCart();

  if (pathname !== "/shop") return null;
  if (count === 0) return null;

  const catalog = getCartCatalog();
  const subtotal = Object.entries(items).reduce((sum, [id, qty]) => {
    const entry = catalog[id];
    return entry ? sum + entry.price * qty : sum;
  }, 0);
  // Catalog prices are VAT-inclusive — the sum IS the final amount.
  const total = subtotal;

  return (
    <div className={styles.wrap}>
      <div className={styles.bar}>
        <button className={styles.iconWrap} onClick={openCart} aria-label={t("cart.open")}>
          <ShoppingBag size={24} />
          <span className={styles.count}>{count}</span>
        </button>
        <button className={styles.meta} onClick={openCart} aria-label={t("cart.open")}>
          <span className={styles.metaSmall}>
            {count} {t("cart.items")} · {t("cart.vat")} {t("cart.vatIncl")}
          </span>
          <span className={styles.metaTotal}>{formatEur(total)}</span>
        </button>
        <Button
          variant="accent"
          rightIcon={<ArrowRight size={16} />}
          onClick={() => startPayment(locale)}
        >
          {t("cart.checkout")}
        </Button>
      </div>
    </div>
  );
}
