import type { CampaignData } from "./types";

/**
 * Založenie živnosti (katalóg A6). 29 € — vstupný produkt, cieľom je vzťah
 * (upsell s.r.o. o 1–2 roky). Voľná živnosť ohlásená elektronicky je bez
 * správneho poplatku; remeselné/viazané podľa sadzobníka.
 */
export const tradeLicence: CampaignData = {
  id: "trade-licence",
  pathname: "/trade-licence",
  group: "produkt",

  meta: {
    title: "Založenie živnosti online 2026 — za 29 € do 3 pracovných dní | kohút & partners",
    description:
      "Založenie aj znovuzaloženie živnosti za 29 €: správne zatriedenie predmetov, elektronické ohlásenie bez poplatku pri voľných živnostiach a registrácia na daňovom úrade. Celá SR.",
  },

  hero: {
    overline: "Založenie živnosti · celá SR",
    h1: "Založenie živnosti za 29 € — správne zatriedená a bez čakania na úrade",
    lead: "Živnosť sa dá ohlásiť aj svojpomocne — ale zle zvolené predmety podnikania, chýbajúca remeselná živnosť či prehliadnutá registrácia na dani sa vlečú roky. Za 29 € to urobíme poriadne a do troch pracovných dní.",
    paragraphs: [
      "Zatriedime činnosti do správnych predmetov — voľných, remeselných alebo viazaných —, ohlásime živnosť elektronicky a zaregistrujeme vás na daň z príjmov. Voľná živnosť ohlásená elektronicky je bez správneho poplatku.",
      "Rovnako vybavíme znovuzaloženie po prerušení alebo ukončení — vrátane kontroly, či medzičasom nepribudli podmienky pre vaše činnosti.",
    ],
    cta: "Chcem založiť živnosť",
  },

  reasons: {
    overline: "Prečo cez nás",
    heading: "Na čom sa pri ohlasovaní najčastejšie pohorí",
    lead: "Formulár je jednoduchý; rozhodnutia v ňom nie sú.",
    items: [
      {
        title: "Zle zvolené predmety",
        desc: "Príliš málo predmetov znamená ohlasovať nanovo pri prvej novej zákazke; nesprávne zatriedenie remeselnej či viazanej činnosti pod voľnú živnosť je podnikanie bez oprávnenia so sankciami.",
      },
      {
        title: "Remeselné a viazané živnosti",
        desc: "Vyžadujú preukázanie odbornej spôsobilosti alebo zodpovedného zástupcu. Posúdime doklady, ktoré máte, a povieme, čo z nich sa dá použiť.",
      },
      {
        title: "Registrácie po ohlásení",
        desc: "Živnosťou to nekončí: registráciu na daň z príjmov vybavíme v cene a upozorníme vás, kedy vzniká povinné poistenie v Sociálnej poisťovni — aby vás prvá faktúra nezaskočila.",
      },
      {
        title: "Znovuzaloženie bez prekvapení",
        desc: "Pri návrate k podnikaniu preveríme pôvodné predmety aj to, či sa medzičasom nezmenili podmienky. Ohlásenie prispôsobíme tomu, čo budete robiť teraz.",
      },
    ],
  },

  scope: {
    overline: "V cene",
    heading: "Čo balík obsahuje",
    lead: "Jedna cena 29 € s DPH. Správne poplatky za remeselné a viazané živnosti sa platia v skutočnej výške; voľné živnosti sú pri elektronickom ohlásení bez poplatku.",
    items: [
      "Konzultácia k výberu a zatriedeniu predmetov podnikania",
      "Elektronické ohlásenie živnosti — bez návštevy úradu",
      "Neobmedzený počet voľných živností",
      "Posúdenie dokladov pri remeselných a viazaných živnostiach",
      "Registrácia na daň z príjmov",
      "Upozornenie na odvodové povinnosti a ich termíny",
    ],
  },

  steps: [
    {
      title: "Krátky dotazník",
      desc: "Napíšete, čomu sa budete venovať. Navrhneme predmety podnikania — vrátane tých, ktoré sa oplatí pridať hneď, aby ste o rok neohlasovali znova.",
    },
    {
      title: "Elektronické ohlásenie",
      desc: "Živnosť ohlásime elektronicky. Voľné živnosti sú bez správneho poplatku; pri remeselných a viazaných vás vopred upozorníme na poplatok a potrebné doklady.",
    },
    {
      title: "Osvedčenie do 3 dní",
      desc: "Živnostenský úrad vydá osvedčenie o živnostenskom oprávnení spravidla do troch pracovných dní od úplného ohlásenia.",
    },
    {
      title: "Daňová registrácia",
      desc: "Zaregistrujeme vás na daň z príjmov a odovzdáme prehľad povinností a termínov, ktoré vás v prvom roku čakajú.",
    },
  ],

  deadline: {
    heading: "Podnikať môžete spravidla už dňom ohlásenia",
    body: "Pri voľných a remeselných živnostiach vzniká oprávnenie podnikať spravidla už dňom ohlásenia — nemusíte čakať na doručenie osvedčenia. Preto sa oplatí ohlásiť živnosť poriadne na prvý raz: činnosť, ktorú v ohlásení nemáte, vykonávať nesmiete, a dopĺňanie predmetov je ďalšie podanie navyše. A ešte jedno praktické: ak plánujete časom s.r.o., živnosť je najlacnejší spôsob, ako začať hneď — firmu vám neskôr založíme so zápočtom skúseností z reálneho podnikania, nie na zelenej lúke.",
  },

  pricing: {
    heading: "Koľko to stojí",
    lead: "Zámerne jednoduché — jedna suma, žiadne balíčky.",
    items: [
      {
        label: "Založenie živnosti",
        value: "29 € s DPH",
        desc: "Ľubovoľný počet voľných živností, elektronické ohlásenie, daňová registrácia a prehľad povinností.",
      },
      {
        label: "Znovuzaloženie / obnovenie",
        value: "29 € s DPH",
        desc: "Rovnaká cena aj pri návrate k podnikaniu po prerušení alebo ukončení živnosti.",
      },
      {
        label: "Správne poplatky",
        value: "0 € pri voľných",
        desc: "Voľná živnosť ohlásená elektronicky je bez poplatku. Remeselné a viazané živnosti podľa sadzobníka správnych poplatkov — v skutočnej výške.",
      },
    ],
  },

  form: {
    title: "Napíšte nám, čomu sa budete venovať",
    leads: [
      "Ozveme sa do jedného pracovného dňa s návrhom predmetov podnikania. Ak by pre vašu situáciu bola vhodnejšia rovno s.r.o., povieme vám to — aj s číslami, nie pocitovo.",
    ],
    fields: [
      { name: "activity", label: "Čo budete robiť", placeholder: "napr. grafika a tvorba webov" },
      { name: "start", label: "Kedy chcete začať", placeholder: "napr. čo najskôr" },
      { name: "renewal", label: "Mali ste už živnosť?", placeholder: "áno – prerušená / nie" },
    ],
    messageLabel: "Doplňujúce informácie",
    subject: "Založenie živnosti — podklady",
    documents: [
      "občiansky preukaz",
      "adresa miesta podnikania, ak je iná ako bydlisko",
      "doklady o vzdelaní alebo praxi pri remeselných a viazaných živnostiach",
    ],
    submit: "Chcem založiť živnosť",
  },

  faq: [
    {
      q: "Odkedy môžem podnikať?",
      a: "Pri voľných a remeselných živnostiach spravidla už dňom ohlásenia; osvedčenie príde do troch pracovných dní. Pri viazaných živnostiach a niektorých osobitných prípadoch vzniká oprávnenie až dňom uvedeným v osvedčení.",
    },
    {
      q: "Koľko predmetov podnikania si mám ohlásiť?",
      a: "Toľko, koľko reálne pokryje vašu činnosť aj blízke plány — počet voľných živností cenu nemení a je bez poplatku. Zbytočne nafúknutý zoznam ale neodporúčame: každý predmet je viditeľný v registri a niektoré ťahajú ďalšie povinnosti.",
    },
    {
      q: "Živnosť alebo rovno s.r.o.?",
      a: "Živnosť je lacnejšia na štart a jednoduchšia na správu; s.r.o. oddeľuje osobný majetok od podnikania a pôsobí inak voči väčším partnerom. Rozhodujú čísla — príjmy, odvody, riziko činnosti. Pri dotazníku sa na to pozrieme a povieme vám to na rovinu; ak s.r.o., založíme ju na kľúč.",
    },
    {
      q: "Aké odvody ma čakajú?",
      a: "Zdravotné poistenie sa platí od začiatku podnikania; povinné sociálne poistenie vzniká až podľa dosiahnutých príjmov — na termín, od ktorého sa vás bude týkať, vás upozorníme. Konkrétne sumy závisia od vymeriavacích základov v danom roku.",
    },
  ],

  relatedServiceId: "obchod",
  relatedServiceLabel: "Obchodné právo a firemná agenda",
};
