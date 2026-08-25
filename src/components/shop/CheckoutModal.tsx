"use client";

import { useEffect } from "react";
import { useLocale, useTranslations } from "next-intl";
import { getCartCatalog, CONTACT } from "@/lib/content";
import { formatEur, vatPortion } from "@/lib/format";
import { Button } from "@/components/ui/Button";
import { Mail, X } from "@/components/icons";
import { cx } from "@/lib/cx";
import { useCart } from "./CartProvider";
import styles from "./CheckoutModal.module.css";

/**
 * Fallback checkout. This modal only ever opens when Stripe checkout is
 * unavailable (no keys / API error) — the live path redirects straight to
 * Stripe. It must never pretend an order happened: no fake order numbers,
 * no "invoice sent" copy. Instead it hands the visitor an honest e-mail
 * order path with the cart summary prefilled (mailto is a shortcut; the
 * visible address is the primary, copyable route — same rule as CampaignForm).
 */
export function CheckoutModal() {
  const locale = useLocale();
  const t = useTranslations("shop");
  const { items, checkoutOpen, closeCheckout } = useCart();

  useEffect(() => {
    if (!checkoutOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeCheckout();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [checkoutOpen, closeCheckout]);

  if (!checkoutOpen) return null;

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

  const orderBody = lines
    .map(
      (it) =>
        `- ${it.name}${it.qty > 1 ? ` × ${it.qty}` : ""}${
          it.type === "sub" ? ` ${t("checkout.perMonth")}` : ""
        } — ${formatEur(it.price * it.qty)}`
    )
    .join("\n");
  const mailto = `mailto:${CONTACT.email}?subject=${encodeURIComponent(
    t("checkout.mailSubject")
  )}&body=${encodeURIComponent(`${t("checkout.mailIntro")}\n\n${orderBody}\n\n${t("checkout.mailOutro")}`)}`;

  return (
    <div
      className={styles.overlay}
      role="dialog"
      aria-modal="true"
      aria-label={t("checkout.title")}
    >
      <button className={styles.backdrop} aria-label="Close" onClick={closeCheckout} />
      <div className={styles.dialog}>
        <div className={styles.header}>
          <span className={styles.headTitle}>{t("checkout.title")}</span>
          <button className={styles.close} onClick={closeCheckout} aria-label="Close">
            <X size={22} />
          </button>
        </div>

        <div className={styles.grid}>
          <div className={styles.form}>
            <div className={styles.formTitle}>{t("checkout.offlineTitle")}</div>
            <p className={styles.offlineLead}>{t("checkout.offlineLead")}</p>
            <p className={styles.offlineContact}>
              <strong>{CONTACT.email}</strong>
              <br />
              {CONTACT.phone}
            </p>
            <Button
              variant="accent"
              size="lg"
              block
              leftIcon={<Mail size={18} />}
              onClick={() => {
                window.location.href = mailto;
              }}
            >
              {t("checkout.offlineBtn")}
            </Button>
          </div>

          <div className={styles.summary}>
            <div className={styles.summaryTitle}>{t("checkout.summary")}</div>
            {lines.map((it) => (
              <div key={it.id} className={styles.line}>
                <span className={styles.lineName}>
                  {it.name}
                  {it.qty > 1 ? <span className={styles.lineMuted}> × {it.qty}</span> : null}
                  {it.type === "sub" ? (
                    <span className={styles.lineMuted}> {t("checkout.perMonth")}</span>
                  ) : null}
                </span>
                <span className={styles.linePrice}>{formatEur(it.price * it.qty)}</span>
              </div>
            ))}
            <div className={cx(styles.totalsRow, styles.totalsRowFirst)}>
              <span>{t("cart.subtotal")}</span>
              <span>{formatEur(net)}</span>
            </div>
            <div className={styles.totalsRow}>
              <span>{t("cart.vat")}</span>
              <span>{formatEur(vat)}</span>
            </div>
            <div className={styles.totalFinal}>
              <span className={styles.totalFinalLabel}>{t("cart.total")}</span>
              <span className={styles.totalFinalValue}>{formatEur(total)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
