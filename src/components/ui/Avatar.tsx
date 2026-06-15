import { cx } from "@/lib/cx";
import styles from "./Avatar.module.css";

type AvatarSize = "xs" | "sm" | "md" | "lg" | "xl";
type AvatarTone = "brand" | "accent" | "neutral";

interface AvatarProps {
  name?: string;
  src?: string | null;
  size?: AvatarSize;
  tone?: AvatarTone;
  square?: boolean;
  className?: string;
}

function initialsOf(name: string): string {
  return (
    name
      .split(" ")
      .filter(Boolean)
      .slice(0, 2)
      .map((w) => w[0]!.toUpperCase())
      .join("") || "—"
  );
}

export function Avatar({
  name = "",
  src = null,
  size = "md",
  tone = "brand",
  square = false,
  className,
}: AvatarProps) {
  return (
    <span
      title={name || undefined}
      className={cx(
        styles.avatar,
        styles[size],
        src ? styles.hasImage : styles[tone],
        square && styles.square,
        className
      )}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      {src ? <img src={src} alt={name} className={styles.img} /> : initialsOf(name)}
    </span>
  );
}
