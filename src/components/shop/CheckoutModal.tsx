"use client";

import { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { getCartCatalog } from "@/lib/content";
import { formatEur, withVat } from "@/lib/format";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Checkbox } from "@/components/ui/Checkbox";
import { CheckCircle, Mail, Shield, X } from "@/components/icons";
import { cx } from "@/lib/cx";
import { useCart } from "./CartProvider";
import styles from "./CheckoutModal.module.css";

function makeOrderNumber(): string {
  const year = new Date().getFullYear();
  const n = Math.floor(1000 + Math.random() * 9000);
  return `KP-${year}-${n}`;
}

export function CheckoutModal() {
  const locale = useLocale();
  const t = useTranslations("shop");
  const c = useTranslations("contact");
  const { items, checkoutOpen, closeCheckout, clear } = useCart();

  const [done, setDone] = useState(false);
  const [orderNo, setOrderNo] = useState("");

  useEffect(() => {
    if (checkoutOpen) setDone(false);
  }, [checkoutOpen]);

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

  const subtotal = lines.reduce((s, it) => s + it.price * it.qty, 0);
  const vat = withVat(subtotal);
  const payOpts = t.raw("checkout.payOpts") as string[];

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
          <span className={styles.headTitle}>
            {done ? t("checkout.doneTitle") : t("checkout.title")}
          </span>
          <button className={styles.close} onClick={closeCheckout} aria-label="Close">
            <X size={22} />
          </button>
        </div>

        {done ? (
          <div className={styles.done}>
            <span className={styles.doneIcon}>
              <CheckCircle size={60} />
            </span>
            <h3 className={styles.doneTitle}>{t("checkout.doneTitle")}</h3>
            <p className={styles.doneLead}>{t("checkout.doneLead")}</p>
            <div className={styles.orderBox}>
              <span className={styles.orderLabel}>{t("checkout.orderNo")}</span>
              <span className={styles.orderNo}>{orderNo}</span>
            </div>
            <Button
              variant="primary"
              size="lg"
              block
              onClick={() => {
                clear();
                closeCheckout();
              }}
            >
              {t("checkout.close")}
            </Button>
          </div>
        ) : (
          <div className={styles.grid}>
            <form
              className={styles.form}
              onSubmit={(e) => {
                e.preventDefault();
                setOrderNo(makeOrderNumber());
                setDone(true);
              }}
            >
              <div className={styles.formTitle}>{t("checkout.contact")}</div>
              <Input label={c("fName")} required placeholder={c("namePlaceholder")} autoComplete="name" />
              <div className={styles.row2}>
                <Input
                  label={c("fEmail")}
                  type="email"
                  required
                  leadingIcon={<Mail size={18} />}
                  placeholder={c("emailPlaceholder")}
                  autoComplete="email"
                />
                <Input label={c("fPhone")} placeholder={c("phonePlaceholder")} autoComplete="tel" />
              </div>
              <Input label={t("checkout.company")} placeholder="—" />
              <Select label={t("checkout.pay")} defaultValue="0">
                {payOpts.map((o, i) => (
                  <option key={i} value={i}>
                    {o}
                  </option>
                ))}
              </Select>
              <Checkbox label={c("fConsent")} required />
              <Button variant="accent" size="lg" block type="submit" leftIcon={<Shield size={18} />}>
                {t("checkout.confirm")}
              </Button>
            </form>

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
                <span>{formatEur(subtotal)}</span>
              </div>
              <div className={styles.totalsRow}>
                <span>{t("cart.vat")}</span>
                <span>{formatEur(vat)}</span>
              </div>
              <div className={styles.totalFinal}>
                <span className={styles.totalFinalLabel}>{t("cart.total")}</span>
                <span className={styles.totalFinalValue}>{formatEur(subtotal + vat)}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
