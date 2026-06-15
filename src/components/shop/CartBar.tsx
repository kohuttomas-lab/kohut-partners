"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "@/i18n/navigation";
import { getCartCatalog } from "@/lib/content";
import { formatEur, withVat } from "@/lib/format";
import { startCheckout } from "@/lib/checkout-client";
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
  const { items, count, openCheckout } = useCart();

  if (pathname !== "/shop") return null;
  if (count === 0) return null;

  const catalog = getCartCatalog();
  const subtotal = Object.entries(items).reduce((sum, [id, qty]) => {
    const entry = catalog[id];
    return entry ? sum + entry.price * qty : sum;
  }, 0);
  const total = subtotal + withVat(subtotal);

  const handleCheckout = async () => {
    const res = await startCheckout({
      mode: "payment",
      items: Object.entries(items).map(([id, qty]) => ({ id, qty })),
      locale,
      returnUrl: window.location.href.split("?")[0],
    });
    if ("url" in res && res.url) {
      window.location.href = res.url;
      return;
    }
    // Stripe not configured (or errored) → simulated checkout.
    openCheckout();
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.bar}>
        <span className={styles.iconWrap}>
          <ShoppingBag size={24} />
          <span className={styles.count}>{count}</span>
        </span>
        <div className={styles.meta}>
          <div className={styles.metaSmall}>
            {count} {t("cart.items")} · {t("cart.vat")} {t("cart.vatIncl")}
          </div>
          <div className={styles.metaTotal}>{formatEur(total)}</div>
        </div>
        <Button variant="accent" rightIcon={<ArrowRight size={16} />} onClick={handleCheckout}>
          {t("cart.checkout")}
        </Button>
      </div>
    </div>
  );
}
