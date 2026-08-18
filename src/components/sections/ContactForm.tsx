"use client";

import { useState, type FormEvent } from "react";
import { useLocale, useTranslations } from "next-intl";
import type { Locale } from "@/i18n/routing";
import { getServices } from "@/lib/content";
import { submitLead } from "@/lib/lead";
import { collectAttribution } from "@/lib/attribution";
import { trackLead } from "@/lib/analytics";
import { Card } from "@/components/ui/Card";
import { Input, Textarea } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Checkbox } from "@/components/ui/Checkbox";
import { Button } from "@/components/ui/Button";
import { ArrowRight, CheckCircle, Mail } from "@/components/icons";
import styles from "./ContactForm.module.css";

type Status = "idle" | "sending" | "sent" | "error";

/** Hodnota z <option> → prekladový kľúč. Do e-mailu ide preložený text. */
const SOURCE_KEYS: Record<string, string> = {
  search: "fSourceSearch",
  ai: "fSourceAi",
  referral: "fSourceReferral",
  social: "fSourceSocial",
  returning: "fSourceReturning",
  other: "fSourceOther",
};

/**
 * `source` označuje stránku, z ktorej dopyt prišiel. Ide do predmetu e-mailu
 * aj do GA4, takže sa dá zistiť, ktorá stránka klienta priniesla. Referrer,
 * adresu stránky, UTM a gclid dopĺňa collectAttribution() z lib/attribution —
 * tá beží nezávisle od súhlasu s cookies (nič neukladá do prehliadača).
 */
export function ContactForm({ source = "Kontakt" }: { source?: string }) {
  const t = useTranslations("contact");
  const common = useTranslations("common");
  const locale = useLocale() as Locale;
  const services = getServices(locale);
  const [status, setStatus] = useState<Status>("idle");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const areaId = String(fd.get("area") || "");
    const areaName =
      areaId === ""
        ? ""
        : areaId === "ine"
          ? common("areaOther")
          : services.find((s) => s.id === areaId)?.name || areaId;

    // Nepovinné pole "ako ste nás našli" — subjektívny doplnok k strojovej
    // atribúcii nižšie. Zachytí aj to, čo referrer ani UTM nevidia:
    // odporúčanie od známeho alebo odpoveď AI asistenta.
    const sourceId = String(fd.get("source") || "");
    const sourceName = SOURCE_KEYS[sourceId] ? t(SOURCE_KEYS[sourceId]) : "";

    const meno = String(fd.get("name") || "");

    const fields = {
      Meno: meno,
      "E-mail": String(fd.get("email") || ""),
      Telefón: String(fd.get("phone") || ""),
      "Oblasť práva": areaName,
      Správa: String(fd.get("message") || ""),
      "Ako nás našli": sourceName,
      // Atribúcia ide zámerne na koniec — kontaktné údaje musia byť
      // v e-maile prvé, technický blok až pod nimi.
      ...collectAttribution(locale),
    };

    // Predmet nesie stránku aj jazykovú vetvu: "Dopyt z webu (CMR, EN) — Ján Novák".
    const tag = locale === "sk" ? source : `${source}, EN`;

    setStatus("sending");
    const r = await submitLead(fields, `Dopyt z webu (${tag}) — ${meno}`);
    // Without a key (configured:false) keep the simulated success so the UX still works.
    const sent = r.ok || !r.configured;
    setStatus(sent ? "sent" : "error");
    if (sent) trackLead(tag);
  };

  return (
    <Card padding="lg" elevation="lg" accent>
      {status === "sent" ? (
        <div className={styles.success}>
          <span className={styles.successIcon}>
            <CheckCircle size={56} />
          </span>
          <h3 className={styles.successTitle}>{t("sentTitle")}</h3>
          <p className={styles.successLead}>{t("sentLead")}</p>
        </div>
      ) : (
        <form className={styles.stack} onSubmit={onSubmit}>
          <div className={styles.row2}>
            <Input name="name" label={t("fName")} required placeholder={t("namePlaceholder")} autoComplete="name" />
            <Input name="phone" label={t("fPhone")} placeholder={t("phonePlaceholder")} autoComplete="tel" />
          </div>
          <Input
            name="email"
            label={t("fEmail")}
            type="email"
            required
            leadingIcon={<Mail size={18} />}
            placeholder={t("emailPlaceholder")}
            autoComplete="email"
          />
          <Select name="area" label={t("fArea")} defaultValue="">
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
          <Textarea name="message" label={t("fMsg")} rows={3} />
          <Select name="source" label={t("fSource")} defaultValue="">
            <option value="">{t("fSourcePlaceholder")}</option>
            {Object.entries(SOURCE_KEYS).map(([id, key]) => (
              <option key={id} value={id}>
                {t(key)}
              </option>
            ))}
          </Select>
          <Checkbox name="consent" label={t("fConsent")} required />
          {status === "error" ? <p className={styles.error}>{common("formError")}</p> : null}
          <Button
            variant="accent"
            size="lg"
            block
            type="submit"
            disabled={status === "sending"}
            rightIcon={<ArrowRight size={18} />}
          >
            {status === "sending" ? common("sending") : t("fSubmit")}
          </Button>
        </form>
      )}
    </Card>
  );
}
