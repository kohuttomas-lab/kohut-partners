import type { InputHTMLAttributes, ReactNode } from "react";
import { cx } from "@/lib/cx";
import { Check } from "@/components/icons";
import styles from "./Checkbox.module.css";

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: ReactNode;
  description?: ReactNode;
  className?: string;
}

export function Checkbox({
  label,
  description,
  disabled,
  className,
  ...rest
}: CheckboxProps) {
  return (
    <label
      className={cx(
        styles.wrap,
        !!description && styles.withDesc,
        disabled && styles.disabled,
        className
      )}
    >
      <span className={styles.control}>
        <input
          type="checkbox"
          className={styles.input}
          disabled={disabled}
          {...rest}
        />
        <span className={styles.box} aria-hidden="true">
          <Check className={styles.check} size={13} strokeWidth={3.2} />
        </span>
      </span>
      {label || description ? (
        <span className={styles.text}>
          {label ? <span className={styles.labelText}>{label}</span> : null}
          {description ? <span className={styles.desc}>{description}</span> : null}
        </span>
      ) : null}
    </label>
  );
}
