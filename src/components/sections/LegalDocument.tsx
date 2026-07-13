import type { ReactNode } from "react";
import type { LegalDoc } from "@/lib/legal";
import { Container } from "@/components/layout/Section";
import { PageHero } from "@/components/layout/PageHero";
import { Shield } from "@/components/icons";
import styles from "./LegalDocument.module.css";

export function LegalDocument({ doc, action }: { doc: LegalDoc; action?: ReactNode }) {
  return (
    <>
      <PageHero overline={doc.overline} title={doc.title} />
      <section className={styles.section}>
        <Container style={{ maxWidth: 820 }}>
          <div className={styles.notice}>
            <span className={styles.noticeIcon}>
              <Shield size={18} />
            </span>
            <span className={styles.noticeText}>{doc.notice}</span>
          </div>
          <p className={styles.updated}>{doc.updated}</p>

          {doc.sections.map((s, i) => (
            <div key={i} className={styles.block}>
              <h2 className={styles.heading}>{s.heading}</h2>
              {s.paragraphs?.map((p, j) => (
                <p key={j} className={styles.para}>
                  {p}
                </p>
              ))}
              {s.items ? (
                <ul className={styles.list}>
                  {s.items.map((item, j) => (
                    <li key={j} className={styles.listItem}>
                      <span className={styles.bullet} aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}

          {action ? <div className={styles.action}>{action}</div> : null}
        </Container>
      </section>
    </>
  );
}
