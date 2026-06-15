import { iconByName } from "@/components/icons";
import type { IconName } from "@/lib/content";
import { cx } from "@/lib/cx";
import styles from "./ServiceIcon.module.css";

// Rounded brand tile housing a practice-area icon.
export function ServiceIcon({
  name,
  box = 52,
  size = 26,
  light = false,
}: {
  name: IconName;
  box?: number;
  size?: number;
  light?: boolean;
}) {
  const Icon = iconByName[name] ?? iconByName.Briefcase;
  return (
    <span
      className={cx(styles.tile, light && styles.light)}
      style={{ width: box, height: box, borderRadius: Math.round(box * 0.27) }}
    >
      <Icon size={size} />
    </span>
  );
}
