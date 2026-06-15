import type { CSSProperties, ReactNode } from "react";
import { cx } from "@/lib/cx";
import styles from "./Section.module.css";

export function Container({
  children,
  className,
  style,
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <div className={cx(styles.container, className)} style={style}>
      {children}
    </div>
  );
}

export function Overline({
  children,
  light = false,
  center = false,
}: {
  children: ReactNode;
  light?: boolean;
  center?: boolean;
}) {
  return (
    <div
      className={cx(
        styles.overline,
        light && styles.overlineLight,
        center && styles.overlineCenter
      )}
    >
      <span className={styles.tick} aria-hidden="true" />
      <span className={styles.overlineText}>{children}</span>
    </div>
  );
}

export function SectionHead({
  overline,
  title,
  lead,
  center = false,
  light = false,
  flush = false,
}: {
  overline: ReactNode;
  title: ReactNode;
  lead?: ReactNode;
  center?: boolean;
  light?: boolean;
  flush?: boolean;
}) {
  return (
    <div className={cx(center ? styles.headCenter : styles.head, flush && styles.flush)}>
      <Overline light={light} center={center}>
        {overline}
      </Overline>
      <h2 className={cx(styles.title, light && styles.titleLight)}>{title}</h2>
      {lead ? (
        <p className={cx(styles.lead, light && styles.leadLight)}>{lead}</p>
      ) : null}
    </div>
  );
}
