import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { Link } from "@/i18n/navigation";
import { localeAlternates } from "@/lib/seo";
import { CONTACT } from "@/lib/content";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/layout/Section";
import { WithdrawalForm } from "@/components/sections/WithdrawalForm";
import styles from "@/components/sections/WithdrawalPage.module.css";

type Props = { params: Promise<{ locale: string }> };

const COPY = {
  sk: {
    overline: "Právne",
    title: "Odstúpenie od zmluvy",
    lead: "Ak ste spotrebiteľ, môžete od zmluvy uzavretej cez tento web odstúpiť do 14 dní od jej uzavretia, bez udania dôvodu.",
    infoHeading: "Ako to funguje",
    info: [
      "Lehota je 14 dní odo dňa uzavretia zmluvy, teda odo dňa, keď sme vám e-mailom potvrdili prijatie objednávky. Lehota je zachovaná, ak oznámenie odošlete najneskôr v posledný deň lehoty.",
      "Odstúpiť môžete formulárom nižšie, e-mailom na klienti@tkak.sk alebo listom na adresu našej kancelárie. Môžete použiť aj vzorový formulár uvedený pod stránkou.",
      "Ak ste nás požiadali, aby sme službu začali poskytovať ešte pred uplynutím lehoty, zaplatíte cenu za plnenie poskytnuté do dňa doručenia oznámenia. Po úplnom poskytnutí služby právo na odstúpenie zaniká.",
      "Zaplatené platby vám vrátime najneskôr do 14 dní od doručenia oznámenia, rovnakým spôsobom, akým ste platili.",
    ],
    formHeading: "Vzorový formulár na odstúpenie od zmluvy",
    formNote:
      "Znenie podľa prílohy č. 2 zákona č. 108/2024 Z. z. Vyplňte a zašlite tento formulár, len ak si želáte odstúpiť od zmluvy.",
    form: [
      "— Komu: kohút & partners, s.r.o., Námestie SNP 74/28, 960 01 Zvolen, klienti@tkak.sk",
      "— Týmto oznamujem/oznamujeme*, že odstupujem/odstupujeme* od zmluvy o dodaní alebo poskytnutí tohto produktu: ..............",
      "— Dátum objednania/dátum prijatia* ..............",
      "— Meno a priezvisko spotrebiteľa/spotrebiteľov* ..............",
      "— Adresa spotrebiteľa/spotrebiteľov* ..............",
      "— Podpis spotrebiteľa/spotrebiteľov* (ak sa tento formulár podáva v listinnej podobe) ..............",
      "— Dátum ..............",
      "* Nehodiace sa prečiarknite.",
    ],
    termsLink: "Celé znenie práv a povinností nájdete v obchodných podmienkach.",
  },
  en: {
    overline: "Legal",
    title: "Withdrawal from the contract",
    lead: "If you are a consumer, you may withdraw from a contract concluded through this website within 14 days of its conclusion, without giving a reason.",
    infoHeading: "How it works",
    info: [
      "The period is 14 days from the day the contract was concluded, that is the day we confirmed your order by e-mail. The deadline is met if you send the notice on the last day at the latest.",
      "You can withdraw using the form below, by e-mail to klienti@tkak.sk or by letter to our office. The model form below may also be used.",
      "If you asked us to start providing the service before the period expired, you pay for the service provided up to the day the notice is delivered. Once the service has been fully provided, the right of withdrawal ends.",
      "We refund your payments within 14 days of receiving the notice at the latest, by the same means you used.",
    ],
    formHeading: "Model withdrawal form",
    formNote:
      "Wording under Annex 2 to Act No. 108/2024 Coll. Complete and return this form only if you wish to withdraw from the contract.",
    form: [
      "— To: kohút & partners, s.r.o., Námestie SNP 74/28, 960 01 Zvolen, Slovakia, klienti@tkak.sk",
      "— I/We* hereby give notice that I/we* withdraw from the contract for the supply of the following product: ..............",
      "— Ordered on/received on* ..............",
      "— Name of consumer(s)* ..............",
      "— Address of consumer(s)* ..............",
      "— Signature of consumer(s)* (only if this form is submitted on paper) ..............",
      "— Date ..............",
      "* Delete as appropriate.",
    ],
    termsLink: "The full set of rights and obligations is in the terms and conditions.",
  },
} as const;

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { locale } = await props.params;
  const c = COPY[locale === "en" ? "en" : "sk"];
  return {
    title: c.title,
    description: c.lead,
    alternates: localeAlternates(locale, "/withdrawal"),
  };
}

/** Funkcia na odstúpenie od zmluvy podľa § 20a zák. 108/2024 Z. z. */
export default async function WithdrawalPage(props: Props) {
  const { locale } = await props.params;
  setRequestLocale(locale);
  const c = COPY[(locale as Locale) === "en" ? "en" : "sk"];

  return (
    <>
      <PageHero overline={c.overline} title={c.title} lead={c.lead} />
      <section className={styles.section}>
        <Container className={styles.inner}>
          <div>
            <h2 className={styles.heading}>{c.infoHeading}</h2>
            {c.info.map((p) => (
              <p key={p} className={styles.para}>
                {p}
              </p>
            ))}
            <div className={styles.contact}>
              <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
              <a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}>{CONTACT.phone}</a>
            </div>
            <p className={styles.para}>
              <Link href="/terms">{c.termsLink}</Link>
            </p>

            <h2 className={styles.heading}>{c.formHeading}</h2>
            <p className={styles.note}>{c.formNote}</p>
            <div className={styles.formBox}>
              {c.form.map((line) => (
                <p key={line} className={styles.formLine}>
                  {line}
                </p>
              ))}
            </div>
          </div>
          <div className={styles.formCard}>
            <WithdrawalForm />
          </div>
        </Container>
      </section>
    </>
  );
}
