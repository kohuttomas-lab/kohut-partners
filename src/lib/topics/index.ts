
/* ============================================================
   Hĺbkové stránky pre zahraničného veriteľa (9/2026).

   Vznikli z dát CRM: zahraniční klienti, z ktorých sa stávajú spisy, sú
   firmy (najmä poľské) so slovenským dlžníkom alebo protistranou — nie
   zakladatelia firiem na diaľku. Stránky preto patria do medzinárodnej
   vetvy (EN, PL; neskôr DE, HU), slovenskú verziu nemajú — slovenská
   predloha slúži len na schválenie textu advokátom
   (marketing/predlohy-zahranicny-veritel/*.sk.json).

   Texty sú v messages/<jazyk>.json v mennom priestore `ns`, rovnaká
   štruktúra ako `cmr` a `cfr`. V ktorých jazykoch stránka existuje, určuje
   LOCALE_LIMITED_PATHNAMES v src/i18n/routing.ts.
   ============================================================ */

/** Statické cesty hĺbkových stránok (podmnožina routing pathnames). */
export type TopicPathname =
  | "/creditor-debt-recovery"
  | "/creditor-insolvency-claims"
  | "/creditor-enforcement";

export interface TopicDef {
  /** Menný priestor v messages. */
  ns: "xdr" | "xin" | "xen";
  pathname: TopicPathname;
  /** Súvisiaca služba (krížový odkaz + predvolená oblasť vo formulári). */
  relatedServiceId: "spory" | "insolvencie";
  /** Označenie zdroja dopytu v e-maile z formulára. */
  formSource: string;
}

export const TOPICS: TopicDef[] = [
  {
    ns: "xdr",
    pathname: "/creditor-debt-recovery",
    relatedServiceId: "spory",
    formSource: "Zahraničný veriteľ — vymáhanie",
  },
  {
    ns: "xin",
    pathname: "/creditor-insolvency-claims",
    relatedServiceId: "insolvencie",
    formSource: "Zahraničný veriteľ — konkurz dlžníka",
  },
  {
    ns: "xen",
    pathname: "/creditor-enforcement",
    relatedServiceId: "spory",
    formSource: "Zahraničný veriteľ — exekúcia",
  },
];

export function getTopic(ns: string): TopicDef | undefined {
  return TOPICS.find((t) => t.ns === ns);
}
