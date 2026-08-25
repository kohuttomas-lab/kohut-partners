import type { CampaignData } from "./types";

/**
 * Dokumenty pre e-shop (katalóg B2, existujúci balík it-eshop 169 €).
 * Právny základ: zák. 108/2024 Z. z. o ochrane spotrebiteľa (novela 310/2025
 * účinná 27. 9. 2026 — § 20a online funkcia odstúpenia), OZ § 619–627,
 * zák. 22/2004 § 4 (povinné údaje), zák. 391/2015 (ARS).
 */
export const eshopDocuments: CampaignData = {
  id: "eshop-documents",
  pathname: "/eshop-documents",
  group: "produkt",

  meta: {
    title: "Obchodné podmienky a reklamačný poriadok pre e-shop — 169 € | kohút & partners",
    description:
      "Dokumenty pre e-shop od advokáta: obchodné podmienky, reklamačný poriadok, poučenie o odstúpení s formulárom a kontrola povinných údajov na webe. Podľa zákona č. 108/2024 vrátane zmien od 27. 9. 2026. 169 € s DPH.",
  },

  hero: {
    overline: "Dokumenty pre e-shop · celá SR",
    h1: "Obchodné podmienky pre e-shop, ktoré obstoja pri kontrole aj v spore",
    lead: "Skopírované VOP od konkurencie sú najdrahšia úspora v e-commerce: nesedia na váš sortiment, nesú chyby originálu a Slovenská obchodná inšpekcia ich číta ako vaše. Pripravíme dokumenty presne pre váš obchod.",
    paragraphs: [
      "Balík pokrýva všetko, čo predaj na diaľku vyžaduje: obchodné podmienky podľa zákona č. 108/2024 Z. z. o ochrane spotrebiteľa, reklamačný poriadok podľa Občianskeho zákonníka, poučenie o práve na odstúpenie s formulárom a kontrolu povinných údajov na webe — identifikáciu predávajúceho, orgán dozoru aj alternatívne riešenie sporov.",
      "Hotovo do piatich pracovných dní. Pri zmene zákona dokumenty aktualizujeme za 49 €.",
    ],
    cta: "Chcem dokumenty pre e-shop",
  },

  reasons: {
    overline: "Čo dokumenty riešia",
    heading: "Štyri veci, na ktorých e-shopy padajú",
    lead: "Nedostatky v dokumentoch sa neprejavia pri predaji — prejavia sa pri prvej reklamácii, vrátení tovaru alebo kontrole.",
    items: [
      {
        title: "Predzmluvné informácie",
        desc: "Zákon č. 108/2024 predpisuje, čo musí spotrebiteľ vedieť pred kúpou — od hlavných vlastností tovaru po podmienky odstúpenia. Chýbajúca informácia sa obracia proti predávajúcemu: napríklad predlžuje lehotu na odstúpenie.",
      },
      {
        title: "Odstúpenie do 14 dní",
        desc: "Poučenie o odstúpení, formulár a správne nastavené výnimky — vrátane digitálneho obsahu, kde sa právo na odstúpenie dá vylúčiť len s výslovným súhlasom spotrebiteľa pred sprístupnením.",
      },
      {
        title: "Reklamácie podľa nových pravidiel",
        desc: "Zodpovednosť za vady sa od roku 2024 podstatne zmenila — lehoty, poradie nárokov aj domnienka existencie vady. Reklamačný poriadok píšeme podľa aktuálneho znenia Občianskeho zákonníka, nie podľa vzorov z roku 2019.",
      },
      {
        title: "Povinné údaje na webe",
        desc: "Identifikácia predávajúceho, orgán dozoru, platforma alternatívneho riešenia sporov, informácie o cene a doručení. Prejdeme celý web — chyby bývajú v pätičke, košíku aj v potvrdení objednávky.",
      },
    ],
  },

  scope: {
    overline: "V cene",
    heading: "Čo balík obsahuje",
    lead: "Kompletná dokumentová výbava e-shopu pripravená na zverejnenie.",
    items: [
      "Obchodné podmienky na mieru sortimentu a procesom",
      "Reklamačný poriadok podľa aktuálneho znenia Občianskeho zákonníka",
      "Poučenie o práve na odstúpenie od zmluvy + formulár",
      "Nastavenie výnimiek z odstúpenia vrátane digitálneho obsahu",
      "Kontrola povinných údajov na webe a v objednávkovom procese",
      "Informácia o alternatívnom riešení sporov",
      "Aktualizácia pri zmene zákona za 49 €",
    ],
  },

  steps: [
    {
      title: "Dotazník o obchode",
      desc: "Čo predávate, komu, ako doručujete a platíte, či ponúkate digitálny obsah alebo služby. Pozrieme si aj samotný web.",
    },
    {
      title: "Dokumenty do 5 dní",
      desc: "Pripravíme obchodné podmienky, reklamačný poriadok a poučenie o odstúpení s formulárom — v jazyku, ktorému zákazník rozumie, a v štruktúre, ktorú vyžaduje zákon.",
    },
    {
      title: "Kontrola webu",
      desc: "Prejdeme povinné údaje na stránke a v košíku a dáme vám presný zoznam, čo kam doplniť — vrátane textov tlačidiel, ktoré majú právny význam.",
    },
    {
      title: "Nasadenie a údržba",
      desc: "Po zverejnení sme k dispozícii na otázky. Pri zmene zákona vás upozorníme a dokumenty aktualizujeme za 49 €.",
    },
  ],

  deadline: {
    heading: "Od 27. septembra 2026 pribúda online funkcia odstúpenia",
    body: "Novela zákona o ochrane spotrebiteľa (zákon č. 310/2025 Z. z.) prináša od 27. septembra 2026 ďalšie povinnosti pri zmluvách uzatváraných online — vrátane § 20a, podľa ktorého musí mať spotrebiteľ pri zmluve uzavretej cez webové rozhranie k dispozícii funkciu na odstúpenie priamo na webe, rovnako dostupnú ako objednanie. E-shopy, ktoré si dokumenty a proces nastavili pred rokom 2026, budú musieť aktualizovať texty aj samotný web. Dokumenty pripravujeme už podľa znenia účinného od 27. septembra 2026 — nebudete ich o pár týždňov robiť druhýkrát.",
  },

  pricing: {
    heading: "Koľko to stojí",
    lead: "Pevné ceny s DPH. V kombinácii s GDPR dokumentáciou je výhodnejší spoločný balík.",
    items: [
      {
        label: "Dokumenty pre e-shop",
        value: "169 € s DPH",
        desc: "Obchodné podmienky, reklamačný poriadok, odstúpenie s formulárom a kontrola povinných údajov na webe. Do 5 pracovných dní.",
      },
      {
        label: "E-shop kompletne",
        value: "299 € s DPH",
        desc: "Tento balík + GDPR dokumentácia (zásady ochrany údajov, záznamy, poverenia, sprostredkovateľské zmluvy) — všetko, čo e-shop právne potrebuje, naraz.",
      },
      {
        label: "Aktualizácia pri zmene zákona",
        value: "49 € s DPH",
        desc: "Keď sa zmení právna úprava, upozorníme vás a dokumenty upravíme. Voliteľné, bez viazanosti.",
      },
    ],
  },

  form: {
    title: "Pošlite nám adresu e-shopu",
    leads: [
      "Pozrieme sa na web a ozveme sa do jedného pracovného dňa s dotazníkom a potvrdením ceny. Ak už dokumenty máte a stačí revízia, povieme vám to — revízia je lacnejšia než nová sada.",
    ],
    fields: [
      { name: "url", label: "Adresa e-shopu", placeholder: "napr. www.mojobchod.sk" },
      { name: "goods", label: "Čo predávate", placeholder: "napr. oblečenie, aj digitálne poukazy" },
      { name: "platform", label: "Na akej platforme", placeholder: "napr. Shoptet / WooCommerce / vlastná" },
    ],
    messageLabel: "Doplňujúce informácie",
    subject: "Dokumenty pre e-shop — podklady",
    documents: [
      "existujúce obchodné podmienky, ak nejaké máte",
      "informácie o spôsoboch doručenia a platby",
    ],
    submit: "Chcem dokumenty pre e-shop",
  },

  faq: [
    {
      q: "Prečo si nemôžem obchodné podmienky skopírovať alebo vygenerovať?",
      a: "Lebo zodpovednosť za ich obsah nesiete vy. Prevzaté VOP nesedia na váš sortiment — iné výnimky z odstúpenia, iné doručenie, iné platby — a chyby predlohy sa stávajú vašimi chybami. Pri cene 169 € je rozdiel oproti generátoru malý; rozdiel pri prvej spornej reklamácii veľký.",
    },
    {
      q: "Predávam digitálne produkty. Platí odstúpenie do 14 dní aj u mňa?",
      a: "Pri digitálnom obsahu dodávanom online sa právo na odstúpenie dá vylúčiť — ale len ak spotrebiteľ pred sprístupnením výslovne súhlasí so začatím plnenia a potvrdí, že o strate práva vie. Bez správne nastaveného procesu právo na odstúpenie trvá. Toto je presne typ detailu, ktorý v balíku nastavujeme.",
    },
    {
      q: "Mám e-shop aj kamennú predajňu. Platia rovnaké pravidlá?",
      a: "Nie — predaj na diaľku má vlastné povinnosti (predzmluvné informácie, odstúpenie do 14 dní), ktoré sa v predajni neuplatnia rovnako. Dokumenty pripravíme tak, aby pokryli oba kanály bez toho, aby ste zákazníkom v predajni priznávali práva, ktoré im zo zákona nepatria.",
    },
    {
      q: "Potrebujem okrem VOP aj GDPR dokumenty?",
      a: "Áno — obchodné podmienky a ochrana osobných údajov sú dve rôzne povinnosti. E-shop potrebuje aj zásady ochrany údajov, informáciu o cookies a zmluvy s dodávateľmi, ktorí údaje spracúvajú. Preto ponúkame spoločný balík E-shop kompletne za 299 €.",
    },
    {
      q: "Ako rýchlo viem mať dokumenty nasadené?",
      a: "Do piatich pracovných dní od vyplnenia dotazníka máte texty; nasadenie na web je otázka hodín. Ak vám beží termín — napríklad spustenie obchodu — napíšte to do správy, vieme sa prispôsobiť.",
    },
  ],

  relatedServiceId: "it",
  relatedServiceLabel: "IT a digitálne právo",
};
