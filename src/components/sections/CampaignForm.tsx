"use client";

import { useRef, useState, type FormEvent } from "react";
import { submitLead } from "@/lib/lead";
import { trackLead } from "@/lib/analytics";
import { CONTACT } from "@/lib/content";
import type { CampaignData } from "@/lib/campaigns";
import { Card } from "@/components/ui/Card";
import { Input, Textarea } from "@/components/ui/Input";
import { Checkbox } from "@/components/ui/Checkbox";
import { Button } from "@/components/ui/Button";
import { ArrowRight, CheckCircle, Mail } from "@/components/icons";
import styles from "./CampaignForm.module.css";

type Status = "idle" | "sending" | "sent" | "error";

/**
 * Riadok „štítok + hodnota + kopírovať". Hodnota je vždy vybrateľná ako text,
 * takže ostáva použiteľná aj tam, kde Clipboard API nie je dostupné
 * (staršie prehliadače, stránka bez zabezpečeného kontextu).
 */
function CopyRow({ label, value }: { label: string; value: string }) {
  const [state, setState] = useState<"idle" | "copied" | "selected">("idle");
  const valueRef = useRef<HTMLSpanElement>(null);

  // Ak Clipboard API nie je k dispozícii (nezabezpečený kontext, odopreté
  // povolenie, starší prehliadač), text aspoň označíme — používateľ ho potom
  // skopíruje sám. Tichý neúspech by bol horší než žiadne tlačidlo.
  const selectValue = () => {
    const node = valueRef.current;
    if (!node) return;
    const range = document.createRange();
    range.selectNodeContents(node);
    const sel = window.getSelection();
    sel?.removeAllRanges();
    sel?.addRange(range);
    setState("selected");
  };

  return (
    <div className={styles.copyRow}>
      <span className={styles.copyLabel}>{label}</span>
      <span ref={valueRef} className={styles.copyValue}>
        {value}
      </span>
      <button
        type="button"
        className={styles.copyBtn}
        onClick={async () => {
          try {
            await navigator.clipboard.writeText(value);
            setState("copied");
            setTimeout(() => setState("idle"), 2000);
          } catch {
            selectValue();
          }
        }}
      >
        {state === "copied"
          ? "Skopírované"
          : state === "selected"
            ? "Stlačte Ctrl/Cmd+C"
            : "Kopírovať"}
      </button>
    </div>
  );
}

/**
 * Konverzný formulár kampaňovej stránky — bezplatné posúdenie dokumentu.
 * Prílohy sa cez formulárovú službu neposielajú, preto úspešná obrazovka
 * vedie kopírovateľnou adresou a predmetom; mailto: je len skratka.
 */
export function CampaignForm({ campaign }: { campaign: CampaignData }) {
  const [status, setStatus] = useState<Status>("idle");
  const [name, setName] = useState("");
  const f = campaign.form;

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const who = String(fd.get("name") || "");
    setName(who);

    const fields: Record<string, string> = {
      Meno: who,
      "E-mail": String(fd.get("email") || ""),
      Telefón: String(fd.get("phone") || ""),
    };
    for (const field of f.fields) {
      fields[field.label] = String(fd.get(field.name) || "");
    }
    fields[f.messageLabel] = String(fd.get("message") || "");

    setStatus("sending");
    const r = await submitLead(fields, `${f.subject} — ${who}`);
    // Bez kľúča (configured:false) necháme simulovaný úspech, nech UX drží.
    const sent = r.ok || !r.configured;
    setStatus(sent ? "sent" : "error");
    if (sent) trackLead(campaign.id);
  };

  const subject = `${f.subject} (${name})`;
  const mailto = `mailto:${CONTACT.email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent("Dobrý deň,\n\nv prílohe posielam podklady.\n\nS pozdravom\n")}`;

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
            pošlite nám ešte podklady na tento e-mail:
          </p>

          {/* Adresa a predmet sú primárna cesta — mailto: je len skratka.
              Na desktope bez nastaveného poštového klienta (typicky používatelia
              webmailu) mailto: nespraví nič, takže sa naň nesmie spoliehať. */}
          <div className={styles.handoff}>
            <CopyRow label="E-mail" value={CONTACT.email} />
            <CopyRow label="Predmet" value={subject} />
          </div>

          <ul className={styles.docList}>
            {f.documents.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>

          <a href={mailto} className={styles.mailBtn}>
            <Mail size={18} />
            Otvoriť poštového klienta
          </a>
          <p className={styles.successNote}>
            Ak sa poštový klient neotvorí, skopírujte adresu vyššie a napíšte nám
            z toho e-mailu, ktorý bežne používate.
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
        {/* Doplnkové polia po dvojiciach; nepárne posledné ide na celú šírku. */}
        {Array.from({ length: Math.ceil(f.fields.length / 2) }, (_, i) => {
          const pair = f.fields.slice(i * 2, i * 2 + 2);
          return pair.length === 2 ? (
            <div key={pair[0].name} className={styles.row2}>
              {pair.map((field) => (
                <Input
                  key={field.name}
                  name={field.name}
                  label={field.label}
                  placeholder={field.placeholder}
                />
              ))}
            </div>
          ) : (
            <Input
              key={pair[0].name}
              name={pair[0].name}
              label={pair[0].label}
              placeholder={pair[0].placeholder}
            />
          );
        })}
        <Textarea
          name="message"
          label={f.messageLabel}
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
          {status === "sending" ? "Odosielam…" : f.submit}
        </Button>
        <p className={styles.note}>
          Odoslanie formulára nezakladá poskytnutie právnej služby ani zastúpenie.
          Zmluvný vzťah vzniká až písomnou dohodou.
        </p>
      </form>
    </Card>
  );
}
