import type { ReactNode } from "react";
import { Container, Overline } from "./Section";
import styles from "./PageHero.module.css";

// Shared navy gradient hero used by Services / Shop / About / Contact / Blog.
export function PageHero({
  overline,
  title,
  lead,
}: {
  overline: ReactNode;
  title: ReactNode;
  lead?: ReactNode;
}) {
  return (
    <section className={styles.hero}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/logo/mark-white.svg" alt="" className={styles.mark} />
      <Container className={styles.inner}>
        <div className={styles.content}>
          <Overline light>{overline}</Overline>
          <h1 className={styles.title}>{title}</h1>
          {lead ? <p className={styles.lead}>{lead}</p> : null}
        </div>
      </Container>
    </section>
  );
}
