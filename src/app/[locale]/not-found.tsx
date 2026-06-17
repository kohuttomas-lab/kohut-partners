"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/layout/Section";
import { LinkButton } from "@/components/ui/Button";
import { ArrowRight } from "@/components/icons";
import styles from "./not-found.module.css";

export default function NotFound() {
  const t = useTranslations("notFound");
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.code} aria-hidden="true">
          404
        </div>
        <h1 className={styles.title}>{t("title")}</h1>
        <p className={styles.text}>{t("text")}</p>
        <LinkButton href="/" variant="accent" size="lg" rightIcon={<ArrowRight size={18} />}>
          {t("back")}
        </LinkButton>
      </Container>
    </section>
  );
}
