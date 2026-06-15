import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Container, Overline, SectionHead } from "@/components/layout/Section";
import { PageHero } from "@/components/layout/PageHero";
import { Card } from "@/components/ui/Card";
import { TeamSection } from "@/components/sections/TeamSection";
import { CTABand } from "@/components/layout/CTABand";
import styles from "./about.module.css";

type Props = { params: Promise<{ locale: string }> };

interface Value {
  title: string;
  desc: string;
}
interface Stat {
  value: string;
  label: string;
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { locale } = await props.params;
  const t = await getTranslations({ locale, namespace: "about" });
  return { title: t("heroTitle"), description: t("heroLead") };
}

export default async function AboutPage(props: Props) {
  const { locale } = await props.params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "about" });
  const tHome = await getTranslations({ locale, namespace: "home" });

  const values = t.raw("values") as Value[];
  const story = t.raw("story") as string[];
  const stats = tHome.raw("stats") as Stat[];

  return (
    <>
      <PageHero overline={t("heroOverline")} title={t("heroTitle")} lead={t("heroLead")} />

      <section className={styles.values}>
        <Container>
          <SectionHead overline={t("valuesOverline")} title={t("valuesTitle")} center />
          <div className={styles.valuesGrid}>
            {values.map((v, i) => (
              <Card key={i} padding="lg" elevation="sm" accent={i === 0}>
                <div className={styles.valueTitle}>{v.title}</div>
                <p className={styles.valueDesc}>{v.desc}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className={styles.story}>
        <Container className={styles.storyGrid}>
          <div>
            <Overline>{t("storyTitle")}</Overline>
            <h2 className={styles.storyTitle}>{t("storyTitle")}</h2>
            {story.map((p, i) => (
              <p key={i} className={styles.storyPara}>
                {p}
              </p>
            ))}
          </div>
          <div className={styles.statPanel}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo/mark-white.svg" alt="" className={styles.statMark} />
            <div className={styles.statInner}>
              {stats.map((s, i) => (
                <div key={i} className={styles.stat}>
                  <div className={styles.statValue}>{s.value}</div>
                  <div className={styles.statLabel}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <TeamSection background="surface" />

      <CTABand />
    </>
  );
}
