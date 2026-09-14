"use client";

import { useState, type FormEvent } from "react";
import { useLocale, useTranslations } from "next-intl";
import type { Locale } from "@/i18n/routing";
import { Link } from "@/i18n/navigation";
import type { ShopPackage } from "@/lib/content";
import { CONTACT } from "@/lib/content";
import { getPackageDetail } from "@/lib/shop-details";
import { PACKAGE_PAGES } from "@/lib/shop-pages";
import { getVariants, addonItemId, addonPrice } from "@/lib/shop-variants";
import { formatEur } from "@/lib/format";
import { submitLead } from "@/lib/lead";
import { startCheckout } from "@/lib/checkout-client";
import { collectAttribution } from "@/lib/attribution";
import { trackLead } from "@/lib/analytics";
import { Container, Overline } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import { Input, Textarea } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Checkbox } from "@/components/ui/Checkbox";
import { Button } from "@/components/ui/Button";
import { BookingButton } from "@/components/booking/BookingButton";
import { ArrowRight, Check, CheckCircle, Mail } from "@/components/icons";
import styles from "./OrderSection.module.css";

type Status = "idle" | "sending" | "offline" | "error";

/**
 * Objednávka v jednom kroku: vľavo rozsah zvoleného balíka a postup, vpravo
 * formulár. Balíky so stupňami (shop-variants.ts) majú druhý výber a doplnky;
 * cena na tlačidle je vždy presný súčet. Po odoslaní ide opis veci cez
 * Web3Forms na klienti@tkak.sk a klient pokračuje rovno do Stripe Checkout
 * (platba hneď, garancia vrátenia platby, ak vec nemôžeme prevziať). Návrat zo
 * Stripe (?stripe=success|cancel) rieši táto sekcia sama — modál z CartProvider
 * sa tu neotvára. Balík sa predvyplní z ?balik=<id>. Bez Stripe kľúčov (dev)
 * ostane len e-mailová objednávka.
 */
export function OrderSection({
  packages,
  initialId,
  stripeResult,
}: {
  packages: ShopPackage[];
  initialId?: string;
  stripeResult?: "success" | "cancel";
}) {
  const t = useTranslations("shop.order");
  const common = useTranslations("common");
  const locale = useLocale() as Locale;
  const [selectedId, setSelectedId] = useState(initialId ?? "");
  const [variantId, setVariantId] = useState(
    () => (initialId ? getVariants(initialId)?.options[0]?.id : undefined) ?? ""
  );
  const [addons, setAddons] = useState<string[]>([]);
  const [status, setStatus] = useState<Status>("idle");
  const [who, setWho] = useState("");

  const selected = packages.find((p) => p.id === selectedId);
  const detail = selected ? getPackageDetail(selected.id, locale) : undefined;
  const page = selected && locale === "sk" ? PACKAGE_PAGES[selected.id] : undefined;
  const variants = selected ? getVariants(selected.id) : undefined;
  const option = variants
    ? (variants.options.find((o) => o.id === variantId) ?? variants.options[0])
    : undefined;
  const chosenAddons = (variants?.addons ?? []).filter((a) => addons.includes(a.id));
  const total = selected
    ? (option ? option.price : selected.price) +
      (option ? chosenAddons.reduce((sum, a) => sum + addonPrice(a, option), 0) : 0)
    : 0;
  const steps = t.raw("steps") as string[];

  const choosePackage = (id: string) => {
    setSelectedId(id);
    setVariantId(getVariants(id)?.options[0]?.id ?? "");
    setAddons([]);
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!selected) return;
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") || "");
    const email = String(fd.get("email") || "");
    const phone = String(fd.get("phone") || "");
    setWho(name);

    const fields: Record<string, string> = {
      Služba: `${selected.name} (${selected.id})`,
      ...(option ? { Stupeň: `${option[locale]} (${option.id})` } : {}),
      ...(chosenAddons.length ? { Doplnky: chosenAddons.map((a) => a[locale]).join("; ") } : {}),
      Cena: `${formatEur(total)} ${common("withVat")}`,
      Meno: name,
      Telefón: phone,
      "E-mail": email,
      "Firma / IČO": String(fd.get("company") || ""),
      "Opis veci": String(fd.get("message") || ""),
      "Odkaz na podklady": String(fd.get("docs") || ""),
      Platba: "Stripe Checkout — stav platby overte v Stripe podľa e-mailu klienta",
    };
    Object.assign(fields, collectAttribution(locale));

    setStatus("sending");
    // 1) opis veci do kancelárie — musí odísť skôr, než klient opustí stránku
    const r = await submitLead(fields, `${t("subjectPrefix")} — ${selected.name} — ${name}`);
    if (!r.ok && r.configured) {
      setStatus("error");
      return;
    }
    trackLead("shop-order");

    // 2) platba hneď — Stripe Checkout; návrat späť sem s ?stripe=…
    const items = option
      ? [
          { id: option.id, qty: 1 },
          ...chosenAddons.map((a) => ({ id: addonItemId(a, option), qty: 1 })),
        ]
      : [{ id: selected.id, qty: 1 }];
    const returnUrl = `${window.location.origin}${window.location.pathname}?balik=${encodeURIComponent(
      selected.id
    )}`;
    const res = await startCheckout({
      mode: "payment",
      items,
      locale,
      returnUrl,
      customer: { email, name, phone },
    });
    if ("url" in res && res.url) {
      window.location.assign(res.url);
      return;
    }
    // Bez Stripe kľúčov: objednávka odišla e-mailom, platba príde odkazom.
    setStatus("offline");
  };

  const subject = selected
    ? `${t("subjectPrefix")} — ${selected.name}${who ? ` (${who})` : ""}`
    : t("subjectPrefix");
  const mailto = `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}`;

  return (
    <section className={styles.section}>
      <Container className={styles.inner}>
        {/* ---------- Ľavý stĺpec: rozsah balíka + postup ---------- */}
        <div className={styles.copy}>
          {selected && detail ? (
            <div className={styles.detail}>
              <Overline>{selected.area}</Overline>
              <h2 className={styles.detailTitle}>{selected.name}</h2>
              <p className={styles.detailDesc}>{selected.desc}</p>
              <div className={styles.priceRow}>
                <span className={styles.price}>{formatEur(option ? option.price : selected.price)}</span>
                <span className={styles.vat}>
                  {common("withVat")}
                  {option ? ` · ${option[locale]}` : ""}
                </span>
              </div>
              {variants && variants.options.length > 1 ? (
                <p className={styles.tiers}>
                  {t("tiersLabel")}:{" "}
                  {variants.options.map((o) => `${o[locale]} ${formatEur(o.price)}`).join(" · ")}
                </p>
              ) : null}
              {detail.fees ? <p className={styles.fees}>{detail.fees}</p> : null}

              <h3 className={styles.h3}>{t("includesTitle")}</h3>
              <ul className={styles.list}>
                {detail.includes.map((i) => (
                  <li key={i}>
                    <Check size={16} />
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
              <h3 className={styles.h3}>{t("excludesTitle")}</h3>
              <ul className={styles.listPlain}>
                {detail.excludes.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
              <h3 className={styles.h3}>{t("turnaroundTitle")}</h3>
              <p className={styles.p}>{detail.turnaround}</p>
              <h3 className={styles.h3}>{t("documentsTitle")}</h3>
              <ul className={styles.listPlain}>
                {detail.documents.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
              {page ? (
                <Link href={page} className={styles.more}>
                  {t("moreAbout")} →
                </Link>
              ) : null}
            </div>
          ) : null}

          <div className={styles.how}>
            <Overline>{t("howOverline")}</Overline>
            <h2 className={styles.howTitle}>{t("howTitle")}</h2>
            <ol className={styles.steps}>
              {steps.map((s, i) => (
                <li key={i}>
                  <span className={styles.num}>{i + 1}</span>
                  <p>{s}</p>
                </li>
              ))}
            </ol>
            <p className={styles.noPrepay}>{t("noPrepay")}</p>
            <div className={styles.contact}>
              <a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}>{CONTACT.phone}</a>
              <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
            </div>
          </div>
        </div>

        {/* ---------- Pravý stĺpec: formulár / výsledok ---------- */}
        <div className={styles.formCard}>
          {stripeResult === "success" || status === "offline" ? (
            <Card padding="lg" elevation="lg" accent>
              <div className={styles.success}>
                <span className={styles.successIcon}>
                  <CheckCircle size={56} />
                </span>
                <h3 className={styles.successTitle}>
                  {stripeResult === "success" ? t("successTitle") : t("offlineTitle")}
                </h3>
                <p className={styles.successLead}>
                  {stripeResult === "success" ? t("successLead") : t("offlineLead")}
                </p>
                <p className={styles.successLead}>{t("successDocs")}</p>
                <div className={styles.handoff}>
                  <div className={styles.copyRow}>
                    <span className={styles.copyLabel}>E-mail</span>
                    <span className={styles.copyValue}>{CONTACT.email}</span>
                  </div>
                  <div className={styles.copyRow}>
                    <span className={styles.copyLabel}>{t("subjectLabel")}</span>
                    <span className={styles.copyValue}>{subject}</span>
                  </div>
                </div>
                <a href={mailto} className={styles.mailBtn}>
                  <Mail size={18} />
                  {t("mailBtn")}
                </a>
                <p className={styles.back}>
                  <Link href="/shop">{t("backToShop")}</Link>
                </p>
              </div>
            </Card>
          ) : (
            <Card padding="lg" elevation="lg" accent>
              <form className={styles.stack} onSubmit={onSubmit}>
                {stripeResult === "cancel" ? (
                  <div className={styles.cancelNote} role="status">
                    <strong>{t("cancelTitle")}</strong> {t("cancelLead")}
                  </div>
                ) : null}
                <Select
                  name="package"
                  label={t("pkgLabel")}
                  value={selectedId}
                  onChange={(e) => choosePackage(e.target.value)}
                  required
                >
                  <option value="" disabled>
                    {t("pkgPlaceholder")}
                  </option>
                  {/* Balíky so stupňami majú cenu až vo výbere stupňa nižšie. */}
                  {packages.map((p) => (
                    <option key={p.id} value={p.id}>
                      {getVariants(p.id) ? p.name : `${p.name} — ${formatEur(p.price)}`}
                    </option>
                  ))}
                </Select>
                {variants && selected ? (
                  <>
                    <Select
                      name="variant"
                      label={variants.label[locale]}
                      value={option?.id ?? ""}
                      onChange={(e) => setVariantId(e.target.value)}
                      hint={variants.note?.[locale]}
                    >
                      {variants.options.map((o) => (
                        <option key={o.id} value={o.id}>
                          {o[locale]} — {formatEur(o.price)}
                        </option>
                      ))}
                    </Select>
                    {variants.addons?.length && option ? (
                      <div className={styles.addons}>
                        <span className={styles.addonsLabel}>{t("addonsLabel")}</span>
                        {variants.addons.map((a) => (
                          <Checkbox
                            key={a.id}
                            name={`addon-${a.id}`}
                            label={a[locale]}
                            checked={addons.includes(a.id)}
                            onChange={(e) =>
                              setAddons((prev) =>
                                e.target.checked ? [...prev, a.id] : prev.filter((x) => x !== a.id)
                              )
                            }
                          />
                        ))}
                      </div>
                    ) : null}
                  </>
                ) : null}
                {selected ? (
                  <p className={styles.priceNote}>
                    <strong>
                      {t("totalLabel")}: {formatEur(total)} {common("withVat")}
                    </strong>
                    {detail?.fees ? ` · ${detail.fees}` : ` · ${t("feesNote")}`}
                  </p>
                ) : null}
                <div className={styles.row2}>
                  <Input name="name" label={t("name")} required autoComplete="name" />
                  <Input name="phone" label={t("phone")} placeholder="+421" autoComplete="tel" required />
                </div>
                <Input
                  name="email"
                  label={t("email")}
                  type="email"
                  required
                  leadingIcon={<Mail size={18} />}
                  autoComplete="email"
                />
                <Input name="company" label={t("company")} autoComplete="organization" />
                <Textarea name="message" label={t("message")} rows={5} hint={t("messageHint")} required />
                <Input name="docs" label={t("docs")} type="url" placeholder="https://" hint={t("docsHint")} />
                <Checkbox name="consent" label={t("consent")} required />
                {status === "error" ? (
                  <p className={styles.error}>{t("error", { email: CONTACT.email })}</p>
                ) : null}
                <Button
                  className={styles.submit}
                  variant="accent"
                  size="lg"
                  block
                  type="submit"
                  disabled={status === "sending" || !selected}
                  rightIcon={<ArrowRight size={18} />}
                >
                  {status === "sending"
                    ? t("sending")
                    : selected
                      ? t("submitPay", { price: formatEur(total) })
                      : t("submit")}
                </Button>
                <div className={styles.consult}>
                  <BookingButton variant="link" size="sm">
                    {t("consultFirst")}
                  </BookingButton>
                </div>
                <p className={styles.note}>{t("note")}</p>
              </form>
            </Card>
          )}
        </div>
      </Container>
    </section>
  );
}
