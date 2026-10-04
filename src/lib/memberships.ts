/* ---------------- Členstvá v medzinárodných sieťach ----------------
   Jeden zoznam pre pätičku, stránku O kancelárii, službu Insolvencie
   a stránku Zahraniční klienti. Logá sú jednofarebné (tmavomodrá na
   svetlom, biela na tmavom), aby sa nebili s farbami značky.

   Nové členstvo: pridať položku, logá do /public/logo/partners/ a texty
   do menného priestoru `memberships` v messages/*.json. Kým `enabled`
   nie je true, na webe sa nezobrazí.

   INSOL Europe: členom je fyzická osoba, nie kancelária — texty preto
   hovoria o Tomášovi Kohútovi. Logo je zatiaľ PNG z insol-europe.org;
   po prijatí si vyžiadať vektorovú verziu. */

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
  {
    id: "insol",
    name: "INSOL Europe",
    href: "https://www.insol-europe.org/",
    logoLight: "/logo/partners/insol-navy.png",
    logoDark: "/logo/partners/insol-white.png",
    width: 548,
    height: 206,
    enabled: true,
  },
];

export const ACTIVE_MEMBERSHIPS = MEMBERSHIPS.filter((m) => m.enabled);

/** Súvislé texty (Insolvencie, Zahraniční klienti) majú verziu s INSOL Europe aj bez neho. */
export const TEXT_KEY = ACTIVE_MEMBERSHIPS.some((m) => m.id === "insol") ? "textInsol" : "text";

/** Členstvá kancelárie (nie osobné) — do JSON-LD organizácie patria len tie. */
const FIRM_MEMBERSHIPS = ACTIVE_MEMBERSHIPS.filter((m) => m.id !== "insol");

/** Pre JSON-LD (memberOf) — aby členstvo videli aj vyhľadávače. */
export const MEMBER_OF_SCHEMA = FIRM_MEMBERSHIPS.map((m) => ({
  "@type": "Organization",
  name: m.name,
  url: m.href,
}));
