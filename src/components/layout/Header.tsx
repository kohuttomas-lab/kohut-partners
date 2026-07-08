"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { Container } from "./Section";
import { LanguageSwitch } from "./LanguageSwitch";
import { Button } from "@/components/ui/Button";
import { useBooking } from "@/components/booking/BookingProvider";
import { CartButton } from "@/components/shop/CartButton";
import { Calendar, Menu, X } from "@/components/icons";
import { ESHOP_ENABLED } from "@/lib/flags";
import { cx } from "@/lib/cx";
import styles from "./Header.module.css";

const NAV = [
  { key: "home", href: "/" },
  { key: "services", href: "/services" },
  { key: "shop", href: "/shop" },
  { key: "about", href: "/about" },
  { key: "blog", href: "/blog" },
  { key: "contact", href: "/contact" },
] as const;

// E-shop link is hidden until the shop is enabled.
const NAV_ITEMS = ESHOP_ENABLED ? NAV : NAV.filter((item) => item.key !== "shop");

function isActive(href: string, pathname: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const tNav = useTranslations("nav");
  const tCommon = useTranslations("common");
  const pathname = usePathname();
  const { open } = useBooking();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const book = () => {
    setMenuOpen(false);
    open();
  };

  return (
    <header className={cx(styles.header, scrolled && styles.scrolled)}>
      <Container>
        <div className={styles.inner}>
          <Link href="/" className={styles.logo} aria-label="kohút & partners">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo/logo-color.svg"
              alt="kohút & partners"
              width={672}
              height={322}
              className={styles.logoImg}
            />
          </Link>

          <nav className={styles.nav}>
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className={cx(styles.link, isActive(item.href, pathname) && styles.linkActive)}
              >
                {tNav(item.key)}
              </Link>
            ))}
          </nav>

          <div className={cx(styles.actions, styles.desktopActions)}>
            <LanguageSwitch />
            {ESHOP_ENABLED ? <CartButton /> : null}
            <Button variant="accent" size="sm" leftIcon={<Calendar size={16} />} onClick={book}>
              {tCommon("cta")}
            </Button>
          </div>

          <div className={styles.mobileActions}>
            {ESHOP_ENABLED ? <CartButton /> : null}
            <button
              type="button"
              className={styles.menuBtn}
              aria-label="Menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        <div className={cx(styles.mobilePanel, menuOpen && styles.mobilePanelOpen)}>
          <nav className={styles.mobileNav}>
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className={cx(
                  styles.mobileLink,
                  isActive(item.href, pathname) && styles.mobileLinkActive
                )}
                onClick={() => setMenuOpen(false)}
              >
                {tNav(item.key)}
              </Link>
            ))}
          </nav>
          <div className={styles.mobileFooter}>
            <LanguageSwitch />
            <Button variant="accent" size="sm" leftIcon={<Calendar size={16} />} onClick={book}>
              {tCommon("cta")}
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
}
