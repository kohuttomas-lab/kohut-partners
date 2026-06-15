import type { CSSProperties, ElementType, ReactNode } from "react";
import { cx } from "@/lib/cx";
import styles from "./Card.module.css";

type Elevation = "none" | "xs" | "sm" | "md" | "lg";
type Padding = "none" | "sm" | "md" | "lg";

const elevationClass: Record<Elevation, string> = {
  none: styles.eNone,
  xs: styles.eXs,
  sm: styles.eSm,
  md: styles.eMd,
  lg: styles.eLg,
};

const paddingClass: Record<Padding, string> = {
  none: styles.pNone,
  sm: styles.pSm,
  md: styles.pMd,
  lg: styles.pLg,
};

interface CardProps {
  as?: ElementType;
  elevation?: Elevation;
  padding?: Padding;
  accent?: boolean;
  interactive?: boolean;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}

export function Card({
  as: Tag = "div",
  elevation = "sm",
  padding = "md",
  accent = false,
  interactive = false,
  className,
  style,
  children,
}: CardProps) {
  return (
    <Tag
      className={cx(
        styles.card,
        elevationClass[elevation],
        paddingClass[padding],
        accent && styles.accent,
        interactive && styles.interactive,
        className
      )}
      style={style}
    >
      {children}
    </Tag>
  );
}
