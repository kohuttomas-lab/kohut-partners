"use client";

import { useEffect } from "react";
import { useLocale, useTranslations } from "next-intl";
import { getCartCatalog } from "@/lib/content";
import { formatEur, vatPortion } from "@/lib/format";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Minus, Plus, ShoppingBag, Trash2, X } from "@/components/icons";
import { useCart } from "./CartProvider";
import styles from "./CartDrawer.module.css";

// Slide-in cart panel: review items, change quantities, remove, go to checkout.
export function CartDrawer() {
  const locale = useLocale();
  const t = useTranslations("shop");
  const { items, count, cartOpen, closeCart, increment, decrement, removeItem, startPayment } =
    useCart();

  useEffect(() => {
    if (!cartOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeCart();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [cartOpen, closeCart]);

  if (!cartOpen) return null;

  const catalog = getCartCatalog();
  const lines = Object.entries(items)
    .map(([id, qty]) => {
      const entry = catalog[id];
      if (!entry) return null;
      return {
        id,
        qty,
        type: entry.type,
        name: locale === "sk" ? entry.nameSk : entry.nameEn,
        price: entry.price,
      };
    })
    .filter((x): x is NonNullable<typeof x> => x !== null);

  // Prices are VAT-inclusive; the summary breaks the included VAT out of the total.
  const total = lines.reduce((s, it) => s + it.price * it.qty, 0);
  const vat = vatPortion(total);
  const net = Math.round((total - vat) * 100) / 100;

  return (
    <div className={styles.overlay} role="dialog" aria-modal="true" aria-label={t("cart.title")}>
      <button className={styles.backdrop} aria-label="Close" onClick={closeCart} />
      <aside className={styles.panel}>
        <div className={styles.header}>
          <span className={styles.headTitle}>
            <ShoppingBag size={20} />
            {t("cart.title")}
            {count > 0 ? <span className={styles.headCount}>{count}</span> : null}
          </span>
          <button className={styles.close} onClick={closeCart} aria-label="Close">
            <X size={22} />
          </button>
        </div>

        {lines.length === 0 ? (
          <div className={styles.empty}>
            <ShoppingBag size={44} className={styles.emptyIcon} />
            <p className={styles.emptyText}>{t("cart.empty")}</p>
            <Button variant="secondary" onClick={closeCart}>
              {t("cart.continue")}
            </Button>
          </div>
        ) : (
          <>
            <div className={styles.lines}>
              {lines.map((it) => (
                <div key={it.id} className={styles.line}>
                  <div className={styles.lineInfo}>
                    <span className={styles.lineName}>{it.name}</span>
                    <span className={styles.lineMeta}>
                      {formatEur(it.price)}
                      {it.type === "sub" ? t("checkout.perMonth") : null}
                    </span>
                  </div>
                  <div className={styles.lineControls}>
                    {it.type === "sub" ? (
                      <span className={styles.qtyFixed}>× 1</span>
                    ) : (
                      <span className={styles.qty}>
                        <button
                          className={styles.qtyBtn}
                          onClick={() => decrement(it.id)}
                          aria-label={t("cart.qtyMinus")}
                        >
                          <Minus size={15} />
                        </button>
                        <span className={styles.qtyValue}>{it.qty}</span>
                        <button
                          className={styles.qtyBtn}
                          onClick={() => increment(it.id)}
                          aria-label={t("cart.qtyPlus")}
                        >
                          <Plus size={15} />
                        </button>
                      </span>
                    )}
                    <span className={styles.linePrice}>{formatEur(it.price * it.qty)}</span>
                    <button
                      className={styles.removeBtn}
                      onClick={() => removeItem(it.id)}
                      aria-label={t("cart.remove")}
                    >
                      <Trash2 size={17} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.footer}>
              <div className={styles.totalsRow}>
                <span>{t("cart.subtotal")}</span>
                <span>{formatEur(net)}</span>
              </div>
              <div className={styles.totalsRow}>
                <span>{t("cart.vat")}</span>
                <span>{formatEur(vat)}</span>
              </div>
              <div className={styles.totalFinal}>
                <span>{t("cart.total")}</span>
                <span className={styles.totalFinalValue}>{formatEur(total)}</span>
              </div>
              <Button
                variant="accent"
                size="lg"
                block
                rightIcon={<ArrowRight size={16} />}
                onClick={() => startPayment(locale)}
              >
                {t("cart.checkout")}
              </Button>
              <Button variant="secondary" block onClick={closeCart}>
                {t("cart.continue")}
              </Button>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}
