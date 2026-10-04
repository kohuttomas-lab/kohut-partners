import { useTranslations } from "next-intl";
import { ACTIVE_MEMBERSHIPS, TEXT_KEY, type Membership } from "@/lib/memberships";
import { cx } from "@/lib/cx";
import styles from "./Memberships.module.css";

// Členstvá v medzinárodných sieťach — zámerne striedmo: jednofarebné logá,
// pri každom jedna veta o tom, čo členstvo znamená. Keď nie je aktívne žiadne
// členstvo, komponent nevykreslí nič.

function Logo({ m, dark, className }: { m: Membership; dark?: boolean; className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={dark ? m.logoDark : m.logoLight}
      alt={m.name}
      width={m.width}
      height={m.height}
      loading="lazy"
      className={cx(styles.logo, className)}
    />
  );
}

/** Pás v pätičke (tmavé pozadie, všetky stránky). */
export function FooterMemberships() {
  const t = useTranslations("memberships");
  if (!ACTIVE_MEMBERSHIPS.length) return null;
  return (
    <div className={styles.footer}>
      <span className={styles.footerLabel}>{t("footerLabel")}</span>
      <div className={styles.footerItems}>
        {ACTIVE_MEMBERSHIPS.map((m) => (
          <a
            key={m.id}
            href={m.href}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.footerItem}
          >
            <Logo m={m} dark className={styles.footerLogo} />
            <small className={styles.footerText}>{t(`${m.id}.short`)}</small>
          </a>
        ))}
      </div>
    </div>
  );
}

/** Riadky „Členstvá“ na stránke O kancelárii (svetlé pozadie). */
export function AboutMemberships() {
  const t = useTranslations("memberships");
  if (!ACTIVE_MEMBERSHIPS.length) return null;
  return (
    <div className={styles.about}>
      <div className={styles.aboutLabel}>{t("aboutLabel")}</div>
      {ACTIVE_MEMBERSHIPS.map((m) => (
        <a
          key={m.id}
          href={m.href}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.aboutRow}
        >
          <span className={styles.aboutLogoBox}>
            <Logo m={m} className={styles.aboutLogo} />
          </span>
          <span className={styles.aboutText}>
            <b>{m.name}</b>: {t(`${m.id}.about`)}
          </span>
        </a>
      ))}
    </div>
  );
}

/** Blok „Cezhraničné insolvencie“ na stránke služby Insolvencie. */
export function InsolvencyMemberships() {
  const t = useTranslations("memberships");
  if (!ACTIVE_MEMBERSHIPS.length) return null;
  return (
    <div className={styles.card}>
      <div>
        <div className={styles.kicker}>{t("insolvency.kicker")}</div>
        <h3 className={styles.cardTitle}>{t("insolvency.title")}</h3>
        <p className={styles.cardText}>{t(`insolvency.${TEXT_KEY}`)}</p>
      </div>
      <div className={styles.cardLogos}>
        {ACTIVE_MEMBERSHIPS.map((m) => (
          <a key={m.id} href={m.href} target="_blank" rel="noopener noreferrer">
            <Logo m={m} className={styles.cardLogo} />
          </a>
        ))}
      </div>
    </div>
  );
}

/** Tmavomodrý pás na stránke Zahraniční klienti. */
export function InternationalMemberships() {
  const t = useTranslations("memberships");
  if (!ACTIVE_MEMBERSHIPS.length) return null;
  return (
    <div className={styles.band}>
      <div className={styles.bandLogos}>
        {ACTIVE_MEMBERSHIPS.map((m) => (
          <a key={m.id} href={m.href} target="_blank" rel="noopener noreferrer">
            <Logo m={m} dark className={styles.bandLogo} />
          </a>
        ))}
      </div>
      <div>
        <h3 className={styles.bandTitle}>{t("international.title")}</h3>
        <p className={styles.bandText}>{t(`international.${TEXT_KEY}`)}</p>
      </div>
    </div>
  );
}
