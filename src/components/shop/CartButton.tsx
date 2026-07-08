"use client";

import { useTranslations } from "next-intl";
import { ShoppingBag } from "@/components/icons";
import { useCart } from "./CartProvider";
import styles from "./CartButton.module.css";

// Header cart icon with an item-count badge. Rendered only when the e-shop
// feature flag is on (must live inside <CartProvider>).
export function CartButton() {
  const t = useTranslations("shop");
  const { count, openCart } = useCart();

  return (
    <button className={styles.btn} onClick={openCart} aria-label={t("cart.open")}>
      <ShoppingBag size={21} />
      {count > 0 ? <span className={styles.badge}>{count}</span> : null}
    </button>
  );
}
