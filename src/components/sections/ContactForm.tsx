"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import type { Locale } from "@/i18n/routing";
import { getServices } from "@/lib/content";
import { Card } from "@/components/ui/Card";
import { Input, Textarea } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Checkbox } from "@/components/ui/Checkbox";
import { Button } from "@/components/ui/Button";
import { ArrowRight, CheckCircle, Mail } from "@/components/icons";
import styles from "./ContactForm.module.css";

export function ContactForm() {
  const t = useTranslations("contact");
  const common = useTranslations("common");
  const locale = useLocale() as Locale;
  const services = getServices(locale);
  const [sent, setSent] = useState(false);

  return (
    <Card padding="lg" elevation="lg" accent>
      {sent ? (
        <div className={styles.success}>
          <span className={styles.successIcon}>
            <CheckCircle size={56} />
          </span>
          <h3 className={styles.successTitle}>{t("sentTitle")}</h3>
          <p className={styles.successLead}>{t("sentLead")}</p>
        </div>
      ) : (
        <form
          className={styles.stack}
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
        >
          <div className={styles.row2}>
            <Input label={t("fName")} required placeholder={t("namePlaceholder")} autoComplete="name" />
            <Input label={t("fPhone")} placeholder={t("phonePlaceholder")} autoComplete="tel" />
          </div>
          <Input
            label={t("fEmail")}
            type="email"
            required
            leadingIcon={<Mail size={18} />}
            placeholder={t("emailPlaceholder")}
            autoComplete="email"
          />
          <Select label={t("fArea")} defaultValue="">
            <option value="" disabled>
              {t("fAreaPlaceholder")}
            </option>
            {services.map((s) => (
              <option key={s.id} value={s.id}>
                {s.name}
              </option>
            ))}
            <option value="ine">{common("areaOther")}</option>
          </Select>
          <Textarea label={t("fMsg")} rows={3} />
          <Checkbox label={t("fConsent")} required />
          <Button variant="accent" size="lg" block type="submit" rightIcon={<ArrowRight size={18} />}>
            {t("fSubmit")}
          </Button>
        </form>
      )}
    </Card>
  );
}
