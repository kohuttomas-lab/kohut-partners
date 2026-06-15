"use client";

import { useParams } from "next/navigation";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { Globe } from "@/components/icons";
import { cx } from "@/lib/cx";
import styles from "./LanguageSwitch.module.css";

export function LanguageSwitch({ className }: { className?: string }) {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const locale = useLocale();
  const other = locale === "sk" ? "en" : "sk";

  return (
    <button
      type="button"
      className={cx(styles.btn, className)}
      aria-label={`Switch language to ${other.toUpperCase()}`}
      onClick={() => {
        // Re-localize the current route (incl. dynamic segments) to `other`.
        router.replace({ pathname, params } as never, { locale: other });
      }}
    >
      <Globe size={16} />
      {other.toUpperCase()}
    </button>
  );
}
