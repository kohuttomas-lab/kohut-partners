import type {
  InputHTMLAttributes,
  ReactNode,
  TextareaHTMLAttributes,
} from "react";
import { cx } from "@/lib/cx";
import styles from "./Input.module.css";

type FieldSize = "sm" | "md" | "lg";

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: string;
  hint?: string;
  error?: string;
  size?: FieldSize;
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
  className?: string;
}

// Label wraps the control (implicit association) so no client-side useId
// is needed — keeps the primitive a server component.
export function Input({
  label,
  hint,
  error,
  size = "md",
  leadingIcon,
  trailingIcon,
  disabled,
  className,
  ...rest
}: InputProps) {
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
        {leadingIcon ? <span className={styles.adorn}>{leadingIcon}</span> : null}
        <input className={styles.input} disabled={disabled} {...rest} />
        {trailingIcon ? <span className={styles.adorn}>{trailingIcon}</span> : null}
      </span>
      {error || hint ? (
        <span className={cx(styles.help, error && styles.helpError)}>
          {error || hint}
        </span>
      ) : null}
    </label>
  );
}

interface TextareaProps
  extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "size"> {
  label?: string;
  hint?: string;
  error?: string;
  className?: string;
}

export function Textarea({
  label,
  hint,
  error,
  disabled,
  className,
  rows = 3,
  ...rest
}: TextareaProps) {
  return (
    <label className={cx(styles.field, className)}>
      {label ? <span className={styles.label}>{label}</span> : null}
      <span
        className={cx(
          styles.box,
          styles.boxArea,
          styles.md,
          error && styles.error,
          disabled && styles.disabled
        )}
      >
        <textarea
          className={cx(styles.input, styles.textarea)}
          rows={rows}
          disabled={disabled}
          {...rest}
        />
      </span>
      {error || hint ? (
        <span className={cx(styles.help, error && styles.helpError)}>
          {error || hint}
        </span>
      ) : null}
    </label>
  );
}
