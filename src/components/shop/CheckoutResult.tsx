"use client";

import { useEffect } from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/Button";
import { CheckCircle, X } from "@/components/icons";
import styles from "./CheckoutModal.module.css";

const PORTAL_URL = "https://billing.stripe.com/p/login/cNi28keQK9h82UIgregYU00";

/**
 * Post-payment confirmation shown after Stripe Checkout redirects back
 * (?stripe=success / ?stripe=cancel — detected and cleared by CartProvider).
 * Success tells the client what happens next: payment received, conflict
 * check within 1 business day, full refund if the matter can't be taken on.
 */
export function CheckoutResult({
  result,
  onClose,
}: {
  result: "success" | "cancel";
  onClose: () => void;
}) {
  const t = useTranslations("shop");

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const ok = result === "success";
  const steps = ok ? (t.raw("result.steps") as string[]) : null;

  return (
    <div
      className={styles.overlay}
      role="dialog"
      aria-modal="true"
      aria-label={ok ? t("result.successTitle") : t("result.cancelTitle")}
    >
      <button className={styles.backdrop} aria-label="Close" onClick={onClose} />
      <div className={styles.dialog}>
        <div className={styles.header}>
          <span className={styles.headTitle}>
            {ok ? t("result.successTitle") : t("result.cancelTitle")}
          </span>
          <button className={styles.close} onClick={onClose} aria-label="Close">
            <X size={22} />
          </button>
        </div>
        <div className={styles.done}>
          {ok ? (
            <span className={styles.doneIcon}>
              <CheckCircle size={60} />
            </span>
          ) : null}
          <p className={styles.doneLead}>
            {ok ? t("result.successLead") : t("result.cancelLead")}
          </p>
          {steps ? (
            <ol className={styles.resultSteps}>
              {steps.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ol>
          ) : null}
          {ok ? (
            <p className={styles.resultSubs}>
              {t("result.subsNote")}{" "}
              <a href={PORTAL_URL} target="_blank" rel="noopener noreferrer">
                {t("subsManageLink")}
              </a>
            </p>
          ) : null}
          <Button variant="primary" size="lg" block onClick={onClose}>
            {t("result.close")}
          </Button>
        </div>
      </div>
    </div>
  );
}
