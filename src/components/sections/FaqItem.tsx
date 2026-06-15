"use client";

import { useState } from "react";
import { ChevronDown } from "@/components/icons";
import { cx } from "@/lib/cx";
import styles from "./FaqItem.module.css";

export function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.item}>
      <button
        type="button"
        className={styles.btn}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span className={styles.q}>{q}</span>
        <span className={cx(styles.chev, open && styles.chevOpen)}>
          <ChevronDown size={20} />
        </span>
      </button>
      {open ? <p className={styles.a}>{a}</p> : null}
    </div>
  );
}
