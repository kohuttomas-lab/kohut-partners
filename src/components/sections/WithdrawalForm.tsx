"use client";

import { useState, type FormEvent } from "react";
import { useLocale } from "next-intl";
import { CONTACT } from "@/lib/content";
import { submitLead } from "@/lib/lead";
import { Card } from "@/components/ui/Card";
import { Input, Textarea } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { ArrowRight, CheckCircle, Mail } from "@/components/icons";
import styles from "./WithdrawalForm.module.css";

type Status = "idle" | "sending" | "sent" | "error";

const T = {
  sk: {
    cta: "Odstúpiť od zmluvy tu",
    lead: "Vyplňte údaje nižšie a odstúpenie odošlite. Potvrdenie o doručení vám pošleme e-mailom.",
    name: "Meno a priezvisko",
    email: "E-mail",
    contract: "Identifikácia zmluvy",
    contractHint: "Číslo objednávky alebo faktúry, prípadne názov služby a dátum objednávky.",
    note: "Doplňujúce informácie (nepovinné)",
    submit: "Potvrdiť odstúpenie od zmluvy",
    sending: "Odosielam…",
    sentTitle: "Odstúpenie sme prijali",
    sentLead:
      "Oznámenie o odstúpení od zmluvy je odoslané. Potvrdenie o doručení vám pošleme e-mailom; ak ste už za službu zaplatili, platbu vám vrátime najneskôr do 14 dní, zníženú o cenu už poskytnutého plnenia.",
    sentAt: "Dátum a čas odoslania",
    error: `Odstúpenie sa nepodarilo odoslať. Napíšte nám prosím priamo na ${CONTACT.email} — lehota je zachovaná aj pri odoslaní e-mailom.`,
    subject: "Odstúpenie od zmluvy",
  },
  en: {
    cta: "Withdraw from the contract here",
    lead: "Fill in the details below and send the withdrawal. We will e-mail you a confirmation of receipt.",
    name: "Full name",
    email: "E-mail",
    contract: "Contract identification",
    contractHint: "Order or invoice number, or the name of the service and the order date.",
    note: "Additional information (optional)",
    submit: "Confirm withdrawal from the contract",
    sending: "Sending…",
    sentTitle: "Withdrawal received",
    sentLead:
      "Your notice of withdrawal has been sent. We will e-mail you a confirmation of receipt; if you have already paid, we refund the payment within 14 days at the latest, less the value of any service already provided.",
    sentAt: "Date and time sent",
    error: `The withdrawal could not be sent. Please e-mail us directly at ${CONTACT.email} — the deadline is met by sending an e-mail as well.`,
    subject: "Withdrawal from contract",
  },
} as const;

/**
 * Funkcia na odstúpenie od zmluvy podľa § 20a zák. 108/2024 Z. z. (účinné
 * 27. 9. 2026): formulár s údajmi podľa ods. 3 a potvrdzovacie tlačidlo podľa
 * ods. 4. Oznámenie odchádza cez Web3Forms na klienti@tkak.sk; potvrdenie
 * o doručení na trvanlivom médiu (ods. 5) posiela kancelária e-mailom —
 * odoslanie sa preto loguje s dátumom a časom, ktorý vidí aj klient.
 */
export function WithdrawalForm() {
  const locale = useLocale() === "en" ? "en" : "sk";
  const t = T[locale];
  const [status, setStatus] = useState<Status>("idle");
  const [sentAt, setSentAt] = useState("");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const now = new Date();
    const stamp = now.toLocaleString(locale === "en" ? "en-GB" : "sk-SK", {
      timeZone: "Europe/Bratislava",
    });

    const fields: Record<string, string> = {
      "Odstúpenie od zmluvy": "Podané cez funkciu na webe (§ 20a zák. 108/2024 Z. z.)",
      Meno: String(fd.get("name") || ""),
      "E-mail": String(fd.get("email") || ""),
      "Identifikácia zmluvy": String(fd.get("contract") || ""),
      Poznámka: String(fd.get("note") || ""),
      "Odoslané (dátum a čas)": stamp,
    };

    setStatus("sending");
    const r = await submitLead(fields, `${t.subject} — ${fields.Meno}`);
    if (!r.ok && r.configured) {
      setStatus("error");
      return;
    }
    setSentAt(stamp);
    setStatus("sent");
  };

  if (status === "sent") {
    return (
      <Card padding="lg" elevation="lg" accent>
        <div className={styles.sent}>
          <span className={styles.sentIcon}>
            <CheckCircle size={52} />
          </span>
          <h2 className={styles.sentTitle}>{t.sentTitle}</h2>
          <p className={styles.sentLead}>{t.sentLead}</p>
          <p className={styles.stamp}>
            {t.sentAt}: <strong>{sentAt}</strong>
          </p>
        </div>
      </Card>
    );
  }

  return (
    <Card padding="lg" elevation="lg" accent>
      <h2 className={styles.title}>{t.cta}</h2>
      <p className={styles.lead}>{t.lead}</p>
      <form className={styles.stack} onSubmit={onSubmit}>
        <Input name="name" label={t.name} required autoComplete="name" />
        <Input
          name="email"
          label={t.email}
          type="email"
          required
          leadingIcon={<Mail size={18} />}
          autoComplete="email"
        />
        <Input name="contract" label={t.contract} hint={t.contractHint} required />
        <Textarea name="note" label={t.note} rows={3} />
        {status === "error" ? <p className={styles.error}>{t.error}</p> : null}
        <Button
          className={styles.submit}
          variant="accent"
          size="lg"
          block
          type="submit"
          disabled={status === "sending"}
          rightIcon={<ArrowRight size={18} />}
        >
          {status === "sending" ? t.sending : t.submit}
        </Button>
      </form>
    </Card>
  );
}
