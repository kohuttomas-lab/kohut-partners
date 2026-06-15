import { useLocale, useTranslations } from "next-intl";
import type { Locale } from "@/i18n/routing";
import { getTeam } from "@/lib/content";
import { Container, SectionHead } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Avatar } from "@/components/ui/Avatar";
import { LinkButton } from "@/components/ui/Button";
import { ArrowRight } from "@/components/icons";
import { cx } from "@/lib/cx";
import styles from "./TeamSection.module.css";

function initials(name: string): string {
  return name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function TeamSection({
  withButton = false,
  background = "paper",
}: {
  withButton?: boolean;
  background?: "paper" | "surface";
}) {
  const t = useTranslations("home");
  const tTeam = useTranslations("team");
  const locale = useLocale() as Locale;
  const team = getTeam(locale);
  const lead = team[0];
  const rest = team.slice(1);

  return (
    <section
      className={cx(
        styles.section,
        background === "surface" ? styles.bgSurface : styles.bgPaper
      )}
    >
      <Container>
        <div className={styles.head}>
          <div className={styles.headText}>
            <SectionHead
              overline={t("teamOverline")}
              title={t("teamTitle")}
              lead={t("teamLead")}
              flush
            />
          </div>
          {withButton ? (
            <LinkButton
              href="/about"
              variant="secondary"
              rightIcon={<ArrowRight size={16} />}
              className={styles.headBtn}
            >
              {t("teamCta")}
            </LinkButton>
          ) : null}
        </div>

        {/* Featured managing partner */}
        <Card padding="none" elevation="md" accent className={styles.featured}>
          <div className={styles.photoWrap}>
            {lead.photo ? (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img src={lead.photo} alt={lead.name} className={styles.photo} />
            ) : (
              <>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/logo/mark-white.svg" alt="" className={styles.photoMark} />
                <div className={styles.photoInitials}>{initials(lead.name)}</div>
                <div className={styles.photoSlot}>{tTeam("photoSlot")}</div>
              </>
            )}
          </div>
          <div className={styles.featuredBody}>
            <Badge tone="accent" variant="soft" className={styles.featuredBadge}>
              {lead.role}
            </Badge>
            <div className={styles.featuredName}>{lead.name}</div>
            <div className={styles.featuredSpec}>{lead.specialty}</div>
            <p className={styles.featuredBio}>{lead.bio}</p>
          </div>
        </Card>

        {/* Supporting team — monograms, first names only */}
        <div className={styles.grid}>
          {rest.map((m) => (
            <Card key={m.id} padding="lg" elevation="sm" interactive className={styles.member}>
              <Avatar name={m.name} size="lg" tone={m.tone} />
              <div>
                <div className={styles.memberName}>{m.name}</div>
                <div className={styles.memberRole}>{m.role}</div>
                {m.specialty ? <div className={styles.memberSpec}>{m.specialty}</div> : null}
              </div>
            </Card>
          ))}
        </div>
        <p className={styles.note}>{tTeam("note")}</p>
      </Container>
    </section>
  );
}
