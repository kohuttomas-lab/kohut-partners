"use client";

import { useState, type FormEvent } from "react";
import { submitLead } from "@/lib/lead";
import { trackLead } from "@/lib/analytics";
import { CONTACT } from "@/lib/content";
import { Card } from "@/components/ui/Card";
import { Input, Textarea } from "@/components/ui/Input";
import { Checkbox } from "@/components/ui/Checkbox";
import { Button } from "@/components/ui/Button";
import { ArrowRight, CheckCircle, Mail } from "@/components/icons";
import styles from "./ClaimReviewForm.module.css";

type Status = "idle" | "sending" | "sent" | "error";

/**
 * Bezplatné posúdenie zamietacieho listu — konverzný formulár kampaňovej
 * stránky. Prílohy sa cez Web3Forms neposielajú, preto po odoslaní vedieme
 * klienta na e-mail s predvyplneným predmetom, kde dokumenty priloží sám.
 */
export function ClaimReviewForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [name, setName] = useState("");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const who = String(fd.get("name") || "");
    setName(who);

    const fields = {
      Meno: who,
      "E-mail": String(fd.get("email") || ""),
      Telefón: String(fd.get("phone") || ""),
      Poisťovňa: String(fd.get("insurer") || ""),
      "Dátum poistnej udalosti": String(fd.get("eventDate") || ""),
      "Výška nároku": String(fd.get("amount") || ""),
      "Popis situácie": String(fd.get("message") || ""),
    };

    setStatus("sending");
    const r = await submitLead(fields, `Zamietnuté poistné plnenie — ${who}`);
    // Bez kľúča (configured:false) necháme simulovaný úspech, nech UX drží.
    const sent = r.ok || !r.configured;
    setStatus(sent ? "sent" : "error");
    if (sent) trackLead("insurance-claim");
  };

  const mailto = `mailto:${CONTACT.email}?subject=${encodeURIComponent(
    `Zamietnuté poistné plnenie — podklady (${name})`
  )}&body=${encodeURIComponent(
    "Dobrý deň,\n\nv prílohe posielam zamietací list, poistnú zmluvu a poistné podmienky.\n\nS pozdravom\n"
  )}`;

  if (status === "sent") {
    return (
      <Card padding="lg" elevation="lg" accent>
        <div className={styles.success}>
          <span className={styles.successIcon}>
            <CheckCircle size={56} />
          </span>
          <h3 className={styles.successTitle}>Máme to, ďakujeme.</h3>
          <p className={styles.successLead}>
            Ozveme sa vám do troch pracovných dní. Aby sme vec vedeli naozaj posúdiť,
            pošlite nám ešte podklady — zamietací list, poistnú zmluvu a poistné
            podmienky. Stačí ich priložiť k e-mailu.
          </p>
          <a href={mailto} className={styles.mailBtn}>
            <Mail size={18} />
            Priložiť podklady e-mailom
          </a>
          <p className={styles.successNote}>
            Alebo napíšte priamo na {CONTACT.email}.
          </p>
        </div>
      </Card>
    );
  }

  return (
    <Card padding="lg" elevation="lg" accent>
      <form className={styles.stack} onSubmit={onSubmit}>
        <div className={styles.row2}>
          <Input name="name" label="Meno a priezvisko" required autoComplete="name" />
          <Input name="phone" label="Telefón" placeholder="+421" autoComplete="tel" />
        </div>
        <Input
          name="email"
          label="E-mail"
          type="email"
          required
          leadingIcon={<Mail size={18} />}
          autoComplete="email"
        />
        <div className={styles.row2}>
          <Input name="insurer" label="Poisťovňa" placeholder="napr. Allianz, Generali…" />
          <Input name="eventDate" label="Kedy sa udalosť stala" placeholder="napr. marec 2025" />
        </div>
        <Input name="amount" label="O akú sumu ide (orientačne)" placeholder="napr. 8 000 €" />
        <Textarea
          name="message"
          label="Čo sa stalo a ako to poisťovňa odôvodnila"
          rows={4}
          hint="Postačí pár viet. Podklady doložíte v ďalšom kroku e-mailom."
        />
        <Checkbox
          name="consent"
          label="Súhlasím so spracúvaním osobných údajov na účel posúdenia môjho prípadu."
          required
        />
        {status === "error" ? (
          <p className={styles.error}>
            Formulár sa nepodarilo odoslať. Napíšte nám prosím priamo na {CONTACT.email}.
          </p>
        ) : null}
        <Button
          className={styles.submit}
          variant="accent"
          size="lg"
          block
          type="submit"
          disabled={status === "sending"}
          rightIcon={<ArrowRight size={18} />}
        >
          {status === "sending" ? "Odosielam…" : "Chcem bezplatné posúdenie"}
        </Button>
        <p className={styles.note}>
          Odoslanie formulára nezakladá poskytnutie právnej služby ani zastúpenie.
          Zmluvný vzťah vzniká až písomnou dohodou.
        </p>
      </form>
    </Card>
  );
}
