import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { isAvailableIn, type AppPathname } from "@/i18n/routing";
import { Container, SectionHead } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import { ArrowRight } from "@/components/icons";
import styles from "./HomeTopics.module.css";

interface Topic {
  title: string;
  desc: string;
  href: string;
}

/** Najčastejšie veci klientov z daného trhu — vlastná vstupná vrstva jazykovej
 *  verzie (zatiaľ PL). Sekcia sa zobrazí len tam, kde má jazyk v messages
 *  kľúč `home.topics`; slovenčina ani angličtina ho nemajú, takže sa im
 *  domovská stránka nemení. Odkazy na stránky, ktoré v jazyku neexistujú,
 *  sa vynechajú. */
export function HomeTopics() {
  const t = useTranslations("home");
  const locale = useLocale();
  if (!t.has("topics")) return null;

  const topics = (t.raw("topics") as Topic[]).filter((x) =>
    isAvailableIn(x.href as AppPathname, locale)
  );
  if (topics.length === 0) return null;

  return (
    <section className={styles.section}>
      <Container>
        <SectionHead
          overline={t("topicsOverline")}
          title={t("topicsTitle")}
          lead={t("topicsLead")}
        />
        <div className={styles.grid}>
          {topics.map((x) => (
            <Link key={x.href} href={x.href as never} className={styles.cardLink}>
              <Card interactive padding="lg" elevation="sm" className={styles.card}>
                <div className={styles.title}>{x.title}</div>
                <p className={styles.desc}>{x.desc}</p>
                <span className={styles.more}>
                  {t("topicsMore")} <ArrowRight size={15} />
                </span>
              </Card>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
