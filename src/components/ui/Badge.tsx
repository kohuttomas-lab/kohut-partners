import type { CSSProperties, ReactNode } from "react";
import { cx } from "@/lib/cx";
import styles from "./Badge.module.css";

export type BadgeTone =
  | "neutral"
  | "brand"
  | "accent"
  | "success"
  | "warning"
  | "danger"
  | "info";
export type BadgeVariant = "soft" | "solid" | "outline";

interface BadgeProps {
  children: ReactNode;
  tone?: BadgeTone;
  variant?: BadgeVariant;
  size?: "sm" | "md";
  dot?: boolean;
  className?: string;
  style?: CSSProperties;
}

export function Badge({
  children,
  tone = "neutral",
  variant = "soft",
  size = "md",
  dot = false,
  className,
  style,
}: BadgeProps) {
  return (
    <span
      className={cx(
        styles.badge,
        styles[tone],
        styles[variant],
        styles[size],
        dot && styles.hasDot,
        className
      )}
      style={style}
    >
      {dot ? <span className={styles.dot} aria-hidden="true" /> : null}
      {children}
    </span>
  );
}
