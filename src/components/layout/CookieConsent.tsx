"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/Button";
import { getConsent, setConsent } from "@/lib/consent";
import styles from "./CookieConsent.module.css";

// Lightweight consent banner. Stores "all" | "essential" in localStorage so
// future analytics can gate on it. Shown once until a choice is made.
export function CookieConsent() {
  const t = useTranslations("consent");
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!getConsent()) setShow(true);
  }, []);

  const choose = (value: "all" | "essential") => {
    setConsent(value);
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className={styles.bar} role="dialog" aria-label="Cookies">
      <p className={styles.text}>
        {t("text")}{" "}
        <Link href="/cookies" className={styles.link}>
          {t("more")}
        </Link>
      </p>
      <div className={styles.actions}>
        <Button variant="accent" size="sm" onClick={() => choose("all")}>
          {t("acceptAll")}
        </Button>
        <Button variant="secondary" size="sm" onClick={() => choose("essential")}>
          {t("essential")}
        </Button>
      </div>
    </div>
  );
}
