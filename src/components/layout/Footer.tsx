import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Container } from "./Section";
import { Mail, MapPin, Phone } from "@/components/icons";
import { CONTACT } from "@/lib/content";
import { cx } from "@/lib/cx";
import styles from "./Footer.module.css";

interface FooterCol {
  head: string;
  items: string[];
}

// Per-column footer link targets (null = render as plain text).
type StaticPathname =
  | "/services"
  | "/about"
  | "/blog"
  | "/contact"
  | "/international"
  | "/privacy"
  | "/terms"
  | "/cookies";

// Deep-link to an individual service detail page.
type ServiceLink = { pathname: "/services/[id]"; params: { id: string } };
type FooterLink = StaticPathname | ServiceLink | null;

const svc = (id: string): ServiceLink => ({ pathname: "/services/[id]", params: { id } });

// Order matches the footer column items in messages.json. The middle column
// differs per locale: SK ends with "Kariéra" (→ contact), EN with
// "International clients" (→ the dedicated page).
const colLinks = (locale: string): FooterLink[][] => [
  [
    svc("insolvencie"),
    svc("obchod"),
    svc("nehnutelnosti"),
    svc("spory"),
    svc("trestne"),
    svc("it"),
  ],
  ["/about", "/about", "/blog", locale === "en" ? "/international" : "/contact"],
  ["/privacy", "/terms", "/cookies"],
];

const tel = (phone: string) => `tel:${phone.replace(/\s/g, "")}`;

export function Footer() {
  const t = useTranslations("footer");
  const locale = useLocale();
  const cols = t.raw("cols") as FooterCol[];
  const COL_LINKS = colLinks(locale);

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.top}>
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo/logo-white.svg"
              alt="kohút & partners"
              width={510}
              height={194}
              className={styles.logoImg}
            />
            <p className={styles.tag}>{t("tag")}</p>
            <div className={styles.contacts}>
              <span className={styles.contact}>
                <MapPin size={15} className={styles.contactIcon} />
                <a
                  href={CONTACT.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contactLink}
                >
                  {CONTACT.address}
                  {locale === "en" ? ", Slovak Republic" : ", Slovenská republika"}
                </a>
              </span>
              <span className={styles.contact}>
                <Phone size={15} className={styles.contactIcon} />
                <a href={tel(CONTACT.phone)} className={styles.contactLink}>
                  {CONTACT.phone}
                </a>
              </span>
              <span className={styles.contact}>
                <Phone size={15} className={styles.contactIcon} />
                <a href={tel(CONTACT.phone2)} className={styles.contactLink}>
                  {CONTACT.phone2}
                </a>
              </span>
              <span className={styles.contact}>
                <Mail size={15} className={styles.contactIcon} />
                <a href={`mailto:${CONTACT.email}`} className={styles.contactLink}>
                  {CONTACT.email}
                </a>
              </span>
            </div>
          </div>

          {cols.map((col, i) => (
            <div key={i}>
              <div className={styles.colHead}>{col.head}</div>
              <div className={styles.colLinks}>
                {col.items.map((item, j) => {
                  const href = COL_LINKS[i]?.[j] ?? null;
                  return href ? (
                    <Link
                      key={j}
                      href={href}
                      className={cx(styles.colItem, styles.colItemLink)}
                    >
                      {item}
                    </Link>
                  ) : (
                    <span key={j} className={styles.colItem}>
                      {item}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.bottom}>
          <span className={styles.rights}>{t("rights")}</span>
          <span className={styles.fine}>{t("fine")}</span>
        </div>
      </Container>
    </footer>
  );
}
