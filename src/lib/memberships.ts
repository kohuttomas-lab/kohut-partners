/* ---------------- Členstvá v medzinárodných sieťach ----------------
   Jeden zoznam pre pätičku, stránku O kancelárii, službu Insolvencie
   a stránku Zahraniční klienti. Logá sú jednofarebné (tmavomodrá na
   svetlom, biela na tmavom), aby sa nebili s farbami značky.

   Nové členstvo: pridať položku, logá do /public/logo/partners/ a texty
   do menného priestoru `memberships` v messages/*.json. Kým `enabled`
   nie je true, na webe sa nezobrazí.

   INSOL Europe (pripravené, zatiaľ vypnuté): členom je fyzická osoba,
   nie kancelária — texty preto hovoria o Tomášovi Kohútovi. Pred zapnutím
   treba súhlas INSOL Europe s použitím loga a jeho vektorovú verziu.
     { id: "insol", name: "INSOL Europe", href: "https://www.insol-europe.org/",
       logoLight: "/logo/partners/insol-navy.svg", logoDark: "/logo/partners/insol-white.svg",
       width: 548, height: 206, enabled: false } */

export type MembershipId = "irglobal" | "insol";

export interface Membership {
  id: MembershipId;
  name: string;
  /** Profil kancelárie v sieti; kým nie je zverejnený, úvodná stránka siete. */
  href: string;
  /** Logo na svetlé pozadie. */
  logoLight: string;
  /** Logo na tmavé pozadie. */
  logoDark: string;
  /** Pomer strán loga (viewBox) — výška sa nastavuje v CSS. */
  width: number;
  height: number;
  enabled: boolean;
}

export const MEMBERSHIPS: Membership[] = [
  {
    id: "irglobal",
    name: "IR Global",
    href: "https://irglobal.com/",
    logoLight: "/logo/partners/irglobal-navy.svg",
    logoDark: "/logo/partners/irglobal-white.svg",
    width: 1359,
    height: 386,
    enabled: true,
  },
];

export const ACTIVE_MEMBERSHIPS = MEMBERSHIPS.filter((m) => m.enabled);

/** Pre JSON-LD (memberOf) — aby členstvo videli aj vyhľadávače. */
export const MEMBER_OF_SCHEMA = ACTIVE_MEMBERSHIPS.map((m) => ({
  "@type": "Organization",
  name: m.name,
  url: m.href,
}));
