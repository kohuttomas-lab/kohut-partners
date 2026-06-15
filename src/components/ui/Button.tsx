import type { ButtonHTMLAttributes, ComponentProps, ReactNode } from "react";
import { Link } from "@/i18n/navigation";
import { cx } from "@/lib/cx";
import styles from "./Button.module.css";

export type ButtonVariant = "primary" | "accent" | "secondary" | "ghost" | "link";
export type ButtonSize = "sm" | "md" | "lg";

interface VisualProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  block?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

export function buttonClassName({
  variant = "primary",
  size = "md",
  block = false,
  className,
}: VisualProps & { className?: string }): string {
  return cx(
    styles.btn,
    styles[variant],
    variant !== "link" && styles[size],
    block && styles.block,
    className
  );
}

function Content({
  leftIcon,
  rightIcon,
  children,
}: Pick<VisualProps, "leftIcon" | "rightIcon"> & { children: ReactNode }) {
  return (
    <>
      {leftIcon ? <span className={styles.icon}>{leftIcon}</span> : null}
      {children}
      {rightIcon ? <span className={styles.icon}>{rightIcon}</span> : null}
    </>
  );
}

type ButtonProps = VisualProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className"> & {
    className?: string;
  };

export function Button({
  variant = "primary",
  size = "md",
  block = false,
  leftIcon,
  rightIcon,
  className,
  type = "button",
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      type={type}
      className={buttonClassName({ variant, size, block, className })}
      {...rest}
    >
      <Content leftIcon={leftIcon} rightIcon={rightIcon}>
        {children}
      </Content>
    </button>
  );
}

type LinkButtonProps = VisualProps &
  Omit<ComponentProps<typeof Link>, "className"> & {
    className?: string;
  };

/** A locale-aware <Link> styled as a button. */
export function LinkButton({
  variant = "primary",
  size = "md",
  block = false,
  leftIcon,
  rightIcon,
  className,
  children,
  ...rest
}: LinkButtonProps) {
  return (
    <Link className={buttonClassName({ variant, size, block, className })} {...rest}>
      <Content leftIcon={leftIcon} rightIcon={rightIcon}>
        {children}
      </Content>
    </Link>
  );
}
