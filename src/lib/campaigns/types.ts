/** Statické cesty kampaňových stránok (podmnožina routing pathnames). */
export type CampaignPathname =
  | "/insurance-claim"
  | "/employment-termination"
  | "/accident-compensation"
  | "/consumer-credit"
  | "/enforcement-defense"
  | "/state-liability"
  // Produktové landing pages (e-shop katalóg, marketing/eshop-katalog.md)
  | "/company-formation"
  | "/company-liquidation"
  | "/share-transfer"
  | "/company-changes"
  | "/trademark-registration"
  | "/trade-licence"
  | "/gdpr-documentation"
  | "/eshop-documents"
  | "/pre-action-letter"
  | "/debt-recovery"
  | "/last-will"
  | "/property-transfer"
  | "/personal-bankruptcy";

/* ============================================================
   Kampaňové landing pages (celoslovenské, len po slovensky).

   Každá téma spĺňa rovnakých šesť podmienok: klient má v ruke
   jeden dokument, beží lehota, vec sa dá viesť na diaľku,
   protistranou je inštitúcia, hodnota sa dá vyčísliť a tému
   nedržia dedikované stránky advokátov.

   Copy musí obstáť voči § 29b zák. 586/2003 o advokácii: len
   vecné objektívne informácie, žiadne porovnávanie s inými
   advokátmi, žiadne sľuby výsledku. Odmena naviazaná na výsledok
   sa opisuje podľa § 7 ods. 2 a § 8 vyhl. 655/2004 — najviac
   20 % z hodnoty veci, nárok len pri plnom úspechu, pri neúspechu
   len hotové výdavky.
   ============================================================ */

export interface CampaignFaq {
  q: string;
  a: string;
}

export interface CampaignItem {
  title: string;
  desc: string;
}

export interface CampaignPriceItem {
  label: string;
  value: string;
  desc: string;
}

/** Doplnkové pole formulára (nad rámec mena, e-mailu, telefónu a popisu). */
export interface CampaignField {
  name: string;
  label: string;
  placeholder?: string;
}

export interface CampaignData {
  id: string;
  /** Kanonická cesta v routingu; SK-only, /en vracia notFound(). */
  pathname: CampaignPathname;
  /**
   * Skupina pre krížové prelinkovanie v pätičke: situačné stránky (default)
   * odkazujú na seba navzájom, produktové stránky katalógu tiež len na seba.
   */
  group?: "situacie" | "produkt";
  meta: { title: string; description: string };

  hero: {
    overline: string;
    h1: string;
    lead: string;
    paragraphs: string[];
    /** Text tlačidla, ktoré skroluje na formulár. */
    cta: string;
  };

  /** „Čo sa dá namietať“ — jadro dôveryhodnosti stránky. */
  reasons: {
    overline: string;
    heading: string;
    lead: string;
    items: CampaignItem[];
  };

  /** Rozsah — zoznam s odrážkami (druhy poistenia, typy úverov…). */
  scope: {
    overline: string;
    heading: string;
    lead: string;
    items: string[];
  };

  /** Priebeh spolupráce, 3–4 kroky. */
  steps: CampaignItem[];

  /** Lehota — zvýraznený blok. Toto je hlavný dôvod konať hneď. */
  deadline: { heading: string; body: string };

  pricing: {
    heading: string;
    lead: string;
    items: CampaignPriceItem[];
  };

  form: {
    title: string;
    leads: string[];
    /** Doplnkové polia špecifické pre agendu. */
    fields: CampaignField[];
    /** Označenie hlavného textového poľa. */
    messageLabel: string;
    /** Predmet e-mailu, ktorým klient dopĺňa prílohy. */
    subject: string;
    /** Podklady, ktoré od klienta potrebujeme. */
    documents: string[];
    /** Text tlačidla na odoslanie. */
    submit: string;
  };

  faq: CampaignFaq[];

  /** Oblasť služieb, ku ktorej sa téma viaže (krížové prelinkovanie). */
  relatedServiceId: string;
  relatedServiceLabel: string;
}
