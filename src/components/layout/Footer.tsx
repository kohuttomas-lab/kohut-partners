import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Container } from "./Section";
import { Mail, Phone } from "@/components/icons";
import { CONTACT } from "@/lib/content";
import { cx } from "@/lib/cx";
import styles from "./Footer.module.css";

interface FooterCol {
  head: string;
  items: string[];
}

// Only static destinations are linked; legal pages don't exist yet → null = plain text.
type StaticPathname = "/services" | "/about" | "/blog" | "/contact";

const COL_LINKS: (StaticPathname | null)[][] = [
  ["/services", "/services", "/services", "/services", "/services", "/services"],
  ["/about", "/about", "/blog", "/contact"],
  [null, null, null],
];

const tel = (phone: string) => `tel:${phone.replace(/\s/g, "")}`;

export function Footer() {
  const t = useTranslations("footer");
  const cols = t.raw("cols") as FooterCol[];

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.top}>
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo/logo-white.svg" alt="kohút & partners" className={styles.logoImg} />
            <p className={styles.tag}>{t("tag")}</p>
            <div className={styles.contacts}>
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
