"use client";

import { useEffect, useMemo, useState, type FormEvent } from "react";
import { useLocale, useTranslations } from "next-intl";
import type { Locale } from "@/i18n/routing";
import { getServices } from "@/lib/content";
import { submitLead } from "@/lib/lead";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Checkbox } from "@/components/ui/Checkbox";
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  Calendar,
  CheckCircle,
  Globe,
  Mail,
  Shield,
  X,
} from "@/components/icons";
import { cx } from "@/lib/cx";
import styles from "./BookingModal.module.css";

// Slots stay inside opening hours (Mon–Fri 9:00–16:00); last one ends by 16:00.
const TIMES = ["09:00", "10:30", "13:00", "14:30", "15:30"];
const FORM_ID = "kp-booking-form";

function nextBusinessDays(count = 8): Date[] {
  const out: Date[] = [];
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  while (out.length < count) {
    d.setDate(d.getDate() + 1);
    const wd = d.getDay();
    if (wd !== 0 && wd !== 6) out.push(new Date(d));
  }
  return out;
}

export function BookingModal({
  open,
  presetArea,
  onClose,
}: {
  open: boolean;
  presetArea?: string;
  onClose: () => void;
}) {
  const locale = useLocale() as Locale;
  const b = useTranslations("booking");
  const c = useTranslations("contact");
  const common = useTranslations("common");
  const services = useMemo(() => getServices(locale), [locale]);
  const weekdays = b.raw("weekdays") as string[];
  const days = useMemo(() => nextBusinessDays(8), []);

  const [step, setStep] = useState(0);
  const [type, setType] = useState<"online" | "osobne">("online");
  const [area, setArea] = useState(presetArea ?? "");
  const [dayIdx, setDayIdx] = useState<number | null>(null);
  const [timeIdx, setTimeIdx] = useState<number | null>(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (open) {
      setStep(0);
      setType("online");
      setArea(presetArea ?? "");
      setDayIdx(null);
      setTimeIdx(null);
      setSubmitting(false);
    }
  }, [open, presetArea]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  const canNext =
    step === 0 ? !!type : step === 1 ? !!area && dayIdx !== null && timeIdx !== null : true;
  const stepTitles = [b("type"), b("date"), b("contact")];

  const confirmedDate =
    dayIdx !== null
      ? new Intl.DateTimeFormat(locale, {
          day: "numeric",
          month: "long",
          year: "numeric",
        }).format(days[dayIdx])
      : "";

  const onSubmitDetails = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const areaName =
      area === ""
        ? ""
        : area === "ine"
          ? common("areaOther")
          : services.find((s) => s.id === area)?.name || area;
    const slot = timeIdx !== null ? `${confirmedDate} · ${TIMES[timeIdx]}` : confirmedDate;
    const fields = {
      Meno: String(fd.get("name") || ""),
      "E-mail": String(fd.get("email") || ""),
      Telefón: String(fd.get("phone") || ""),
      "Typ konzultácie": type === "online" ? b("online") : b("inPerson"),
      "Oblasť práva": areaName,
      Termín: slot,
    };
    setSubmitting(true);
    await submitLead(fields, `Rezervácia konzultácie — ${fields.Meno}`);
    setSubmitting(false);
    setStep(3);
  };

  return (
    <div className={styles.overlay} role="dialog" aria-modal="true" aria-label={b("title")}>
      <button className={styles.backdrop} aria-label="Close" onClick={onClose} />
      <div className={styles.dialog}>
        <div className={styles.header}>
          <div>
            <div className={styles.headTitle}>{b("title")}</div>
            {step < 3 ? (
              <div className={styles.headStep}>
                {b("step")} {step + 1}/3 · {stepTitles[step]}
              </div>
            ) : null}
          </div>
          <button className={styles.close} onClick={onClose} aria-label="Close">
            <X size={22} />
          </button>
        </div>

        <div className={styles.body}>
          {step === 0 && (
            <div className={styles.stackTight}>
              {([
                ["online", Globe, b("online")],
                ["osobne", Building2, b("inPerson")],
              ] as const).map(([val, Icon, label]) => {
                const active = type === val;
                return (
                  <button
                    key={val}
                    type="button"
                    onClick={() => setType(val)}
                    className={cx(styles.typeBtn, active && styles.typeBtnActive)}
                  >
                    <span className={cx(styles.typeIcon, active && styles.typeIconActive)}>
                      <Icon size={22} />
                    </span>
                    <span className={styles.typeLabel}>{label}</span>
                    {active ? (
                      <span className={styles.typeCheck}>
                        <CheckCircle size={22} />
                      </span>
                    ) : null}
                  </button>
                );
              })}
            </div>
          )}

          {step === 1 && (
            <div className={styles.stack}>
              <Select
                label={b("area")}
                value={area}
                onChange={(e) => setArea(e.target.value)}
              >
                <option value="" disabled>
                  {c("fAreaPlaceholder")}
                </option>
                {services.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.name}
                  </option>
                ))}
                <option value="ine">{common("areaOther")}</option>
              </Select>

              <div>
                <div className={styles.fieldLabel}>{b("date")}</div>
                <div className={styles.dayGrid}>
                  {days.map((d, i) => {
                    const active = dayIdx === i;
                    return (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setDayIdx(i)}
                        className={cx(styles.dayBtn, active && styles.dayBtnActive)}
                      >
                        <div className={cx(styles.dayWd, active && styles.dayWdActive)}>
                          {weekdays[d.getDay() - 1]}
                        </div>
                        <div className={cx(styles.dayNum, active && styles.dayNumActive)}>
                          {d.getDate()}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {dayIdx !== null && (
                <div>
                  <div className={styles.fieldLabel}>{b("timeLabel")}</div>
                  <div className={styles.timeRow}>
                    {TIMES.map((tm, i) => {
                      const active = timeIdx === i;
                      return (
                        <button
                          key={tm}
                          type="button"
                          onClick={() => setTimeIdx(i)}
                          className={cx(styles.timeBtn, active && styles.timeBtnActive)}
                        >
                          {tm}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          )}

          {step === 2 && (
            <form id={FORM_ID} onSubmit={onSubmitDetails} className={styles.stackTight}>
              <Input name="name" label={c("fName")} required placeholder={c("namePlaceholder")} autoComplete="name" />
              <div className={styles.row2}>
                <Input
                  name="email"
                  label={c("fEmail")}
                  type="email"
                  required
                  leadingIcon={<Mail size={18} />}
                  placeholder={c("emailPlaceholder")}
                  autoComplete="email"
                />
                <Input name="phone" label={c("fPhone")} placeholder={c("phonePlaceholder")} autoComplete="tel" />
              </div>
              <div className={styles.payNote}>
                <span className={styles.payNoteIcon}>
                  <Shield size={18} />
                </span>
                <span className={styles.payNoteText}>{b("payNote")}</span>
              </div>
              <Checkbox label={c("fConsent")} required />
            </form>
          )}

          {step === 3 && (
            <div className={styles.done}>
              <span className={styles.doneIcon}>
                <CheckCircle size={60} />
              </span>
              <h3 className={styles.doneTitle}>{b("doneTitle")}</h3>
              <p className={styles.doneLead}>{b("doneLead")}</p>
              {dayIdx !== null && timeIdx !== null && (
                <div className={styles.doneChip}>
                  <Calendar size={18} />
                  <span>
                    {confirmedDate} · {TIMES[timeIdx]} ·{" "}
                    {type === "online" ? b("online") : b("inPerson")}
                  </span>
                </div>
              )}
            </div>
          )}
        </div>

        <div className={styles.footer}>
          {step > 0 && step < 3 ? (
            <Button variant="ghost" leftIcon={<ArrowLeft size={16} />} onClick={() => setStep(step - 1)}>
              {b("back")}
            </Button>
          ) : null}
          <div className={styles.spacer} />
          {step < 2 ? (
            <Button
              variant="accent"
              disabled={!canNext}
              rightIcon={<ArrowRight size={16} />}
              onClick={() => setStep(step + 1)}
            >
              {b("next")}
            </Button>
          ) : null}
          {step === 2 ? (
            <Button
              variant="accent"
              type="submit"
              form={FORM_ID}
              disabled={submitting}
              leftIcon={<Shield size={16} />}
            >
              {submitting ? common("sending") : b("confirm")}
            </Button>
          ) : null}
          {step === 3 ? (
            <Button variant="primary" onClick={onClose}>
              {b("doneClose")}
            </Button>
          ) : null}
        </div>
      </div>
    </div>
  );
}
