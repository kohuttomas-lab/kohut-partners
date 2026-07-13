"use client";

import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/Button";
import { resetConsent } from "@/lib/consent";

// Lets a visitor re-open the cookie banner to change or withdraw their choice
// (GDPR: withdrawal must be as easy as granting it). Reloading clears any
// tracker already loaded in this page view until a fresh choice is made.
export function CookieSettings() {
  const t = useTranslations("consent");
  return (
    <Button
      variant="secondary"
      size="sm"
      onClick={() => {
        resetConsent();
        window.location.reload();
      }}
    >
      {t("manage")}
    </Button>
  );
}
