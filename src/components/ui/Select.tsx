import type { ReactNode, SelectHTMLAttributes } from "react";
import { cx } from "@/lib/cx";
import { ChevronDown } from "@/components/icons";
import styles from "./Select.module.css";

type FieldSize = "sm" | "md" | "lg";

interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "size"> {
  label?: string;
  hint?: string;
  error?: string;
  size?: FieldSize;
  className?: string;
  children: ReactNode;
}

export function Select({
  label,
  hint,
  error,
  size = "md",
  disabled,
  className,
  children,
  ...rest
}: SelectProps) {
  return (
    <label className={cx(styles.field, className)}>
      {label ? <span className={styles.label}>{label}</span> : null}
      <span
        className={cx(
          styles.box,
          styles[size],
          error && styles.error,
          disabled && styles.disabled
        )}
      >
        <select className={styles.select} disabled={disabled} {...rest}>
          {children}
        </select>
        <span className={styles.chevron} aria-hidden="true">
          <ChevronDown size={16} strokeWidth={2.2} />
        </span>
      </span>
      {error || hint ? (
        <span className={cx(styles.help, error && styles.helpError)}>
          {error || hint}
        </span>
      ) : null}
    </label>
  );
}
