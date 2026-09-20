import type { RawServiceCopy, Office } from "@/lib/content";

/**
 * Preklad doménového obsahu (content.ts) pre jazyky medzinárodnej vetvy —
 * PL, HU, DE, RU. Kľúče sú id služieb, balíkov a členov tímu z content.ts;
 * čo v preklade chýba, číta sa z angličtiny. Ceny, ikony a poradie ostávajú
 * v content.ts — tu je len text.
 *
 * Rovnaké pravidlá ako pri EN verzii: radíme výlučne v práve Slovenskej
 * republiky, žiadne sľuby výsledku, žiadne porovnávanie (§ 29b zák. 586/2003).
 */
export interface IntlContent {
  /** id služby → texty (name, tagline, summary, solve[], faq[[q, a]]). */
  services: Record<string, RawServiceCopy>;
  /** id balíka → [názov, popis]. */
  packages: Record<string, [string, string]>;
  /** id člena tímu → [meno, rola, špecializácia?]. */
  team: Record<number, [string, string, string?]>;
  /** id člena tímu → bio (len tí, ktorí bio majú). */
  teamBio: Record<number, string>;
  office: Office;
  /**
   * <title>, meta description a og:locale domovskej stránky (layout.tsx, JSON-LD)
   * a dva riadky dynamického OG obrázka (opengraph-image.tsx).
   */
  meta: {
    title: string;
    description: string;
    ogLocale: string;
    ogHeadline: string;
    ogTagline: string;
  };
}
