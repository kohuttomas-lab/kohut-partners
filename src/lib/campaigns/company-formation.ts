import type { CampaignData } from "./types";

/**
 * Založenie s.r.o. na kľúč (katalóg A1).
 * § 57 ods. 1 a 3 ObchZ (zák. 29/2026): spoločenská zmluva / zakladateľská
 * listina = notárska zápisnica alebo dokument autorizovaný advokátom.
 * § 50 ods. 4 zák. 29/2026: pri autorizovanom dokumente sa nevyžaduje úradné
 * osvedčenie podpisov. § 58 ods. 1: zápis do 2 pracovných dní. Poplatok:
 * položka 17 zák. 71/1992 — prvozápis s.r.o. 220 €. Tretia cesta: § 110a ObchZ
 * (zjednodušený formulár s limitmi) — v textoch nikdy „len notár alebo advokát“.
 */
export const companyFormation: CampaignData = {
  id: "company-formation",
  pathname: "/company-formation",
  group: "produkt",

  meta: {
    title: "Založenie s.r.o. 2026 — od advokáta za 519 € s poplatkom | kohút & partners",
    description:
      "Od 17. 8. 2026 musí byť zakladateľská listina notárska zápisnica alebo dokument autorizovaný advokátom. Založíme vám s.r.o. na kľúč: 299 € + súdny poplatok 220 €, spravidla 7 – 10 pracovných dní.",
  },

  hero: {
    overline: "Založenie s.r.o. · celá SR",
    h1: "Založenie s.r.o. na kľúč — 519 € vrátane súdneho poplatku",
    lead: "Od 17. augusta 2026 musí byť spoločenská zmluva aj zakladateľská listina vo forme notárskej zápisnice alebo dokumentu autorizovaného advokátom. Zakladáme ako advokáti — dokumenty autorizujeme sami a podpisy netreba úradne osvedčovať.",
    paragraphs: [
      "V cene je všetko od konzultácie po výpis z obchodného registra: zakladateľské dokumenty, voľné živnosti bez obmedzenia počtu, návrh na zápis aj registrácia na daň z príjmov. Odmena je 299 € s DPH, súdny poplatok 220 € sa platí v skutočnej výške — spolu 519 €, žiadne ďalšie položky.",
      "Registrový súd zapíše spoločnosť do dvoch pracovných dní od úplného návrhu; celý proces trvá spravidla sedem až desať pracovných dní. Vec vedieme na diaľku pre zakladateľov z celého Slovenska.",
    ],
    cta: "Chcem založiť s.r.o.",
  },

  reasons: {
    overline: "Čo sa zmenilo",
    heading: "Prečo sa od augusta 2026 zakladá inak",
    lead: "Zákon č. 29/2026 Z. z. o obchodnom registri zmenil formu zakladateľských dokumentov (§ 57 Obchodného zákonníka). Dokument spísaný doma s úradne osvedčenými podpismi už registrový súd neprijme.",
    items: [
      {
        title: "Povinná forma dokumentov",
        desc: "Spoločenská zmluva aj zakladateľská listina musia byť notárskou zápisnicou alebo dokumentom autorizovaným advokátom (§ 57 ods. 1 a 3 ObchZ). Pri autorizácii advokát zisťuje totožnosť a posudzuje súlad úkonu so zákonom.",
      },
      {
        title: "Bez osvedčovania podpisov",
        desc: "Ak dokument autorizuje advokát, úradné osvedčenie podpisov sa nevyžaduje (§ 50 ods. 4 zákona o obchodnom registri) — vrátane podpisového vzoru konateľa, ktorý by inak musel byť podpísaný pred notárom alebo na obci.",
      },
      {
        title: "Uloženie v registri komory",
        desc: "Autorizovaný dokument sa v deň autorizácie ukladá do registra autorizácií Slovenskej advokátskej komory (§ 1ac zákona o advokácii) — o pravosti zakladateľskej zmluvy niet neskôr sporu.",
      },
      {
        title: "Prekážky preveríme vopred",
        desc: "Súd pred zápisom skúma register diskvalifikácií a register poverení na vykonanie exekúcie; zakladateľ alebo konateľ vedený ako povinný je dôvodom odmietnutia. Preveríme to skôr, než zaplatíte poplatok.",
      },
    ],
  },

  scope: {
    overline: "V cene",
    heading: "Čo balík obsahuje",
    lead: "Jedna pevná cena od dotazníka po výpis z obchodného registra. Súdny poplatok 220 € sa platí samostatne v skutočnej výške.",
    items: [
      "Konzultácia k nastaveniu spoločnosti — predmety, podiely, konanie",
      "Zakladateľská listina alebo spoločenská zmluva autorizovaná advokátom",
      "Vyhlásenie správcu vkladu, podpisový vzor konateľa, čestné vyhlásenia",
      "Ohlásenie voľných živností — bez obmedzenia počtu",
      "Návrh na prvozápis do obchodného registra a jeho podanie",
      "Registrácia na daň z príjmov po vzniku spoločnosti",
      "Odovzdanie: výpis z OR, živnostenské oprávnenie, dokumentácia v PDF",
    ],
  },

  steps: [
    {
      title: "Objednávka a dotazník",
      desc: "Vyplníte krátky dotazník: obchodné meno, sídlo, predmety podnikania, spoločníci a konateľ, výška vkladov. Meno preveríme voči obchodnému registru aj registru rezervovaných mien.",
    },
    {
      title: "Dokumenty do 2 dní",
      desc: "Do dvoch pracovných dní pripravíme návrh všetkých dokumentov na odsúhlasenie. Ak nemôžete prísť osobne, dokument za vás podpíše splnomocnenec na základe plnomocenstva s úradne osvedčeným podpisom (§ 57 ods. 2 ObchZ).",
    },
    {
      title: "Autorizácia a živnosti",
      desc: "Dokumenty autorizujeme, ohlásime živnosti elektronicky a podáme návrh na zápis do obchodného registra so súdnym poplatkom 220 €.",
    },
    {
      title: "Zápis a odovzdanie",
      desc: "Registrový súd zapíše spoločnosť do dvoch pracovných dní od úplného návrhu (§ 58 ods. 1 zákona o obchodnom registri). Po vzniku vybavíme daňovú registráciu a odovzdáme kompletnú dokumentáciu.",
    },
  ],

  deadline: {
    heading: "Nová forma platí od 17. augusta 2026",
    body: "Konania, v ktorých bol návrh na zápis podaný do 16. augusta 2026, sa dokončia podľa starých predpisov (§ 126 ods. 1 zákona č. 29/2026 Z. z.) — všetko podané neskôr už musí spĺňať novú formu. Popri notárovi a advokátovi ostáva aj tretia cesta: založenie zjednodušeným spôsobom cez elektronický formulár ministerstva (§ 110a ObchZ). Má však pevné hranice — najviac päť spoločníkov, výlučne peňažné vklady, iba vybrané voľné živnosti a najviac pätnásť z nich, bez dozornej rady a bez možnosti upraviť si vzťahy medzi spoločníkmi. Kto potrebuje remeselnú či viazanú živnosť alebo vlastné pravidlá v spoločenskej zmluve, formulár nepoužije.",
  },

  pricing: {
    heading: "Koľko to stojí",
    lead: "Jedna suma, ktorú poznáte vopred. Neúčtujeme nič navyše — sídlo, účtovníctvo ani registráciu k DPH balík neobsahuje a povieme vám to rovno.",
    items: [
      {
        label: "Založenie s.r.o. na kľúč",
        value: "299 € s DPH",
        desc: "Kompletná odmena za dokumenty, autorizáciu, živnosti, návrh na zápis a daňovú registráciu. Správne poplatky za remeselné a viazané živnosti sa účtujú v skutočnej výške.",
      },
      {
        label: "Súdny poplatok",
        value: "220 €",
        desc: "Poplatok za prvozápis s.r.o. podľa položky 17 sadzobníka súdnych poplatkov (znenie od 17. 8. 2026). Platí sa v skutočnej výške, nič si k nemu nepripočítavame.",
      },
      {
        label: "Spolu",
        value: "519 €",
        desc: "Konečná suma pri voľných živnostiach. Rezervácia obchodného mena vopred, ak ju chcete, stojí ďalších 50 € (položka 17a).",
      },
    ],
  },

  form: {
    title: "Napíšte nám, akú firmu zakladáte",
    leads: [
      "Ozveme sa do jedného pracovného dňa s dotazníkom a potvrdením ceny. Ak vašej veci pomôže iné riešenie — napríklad živnosť namiesto s.r.o. — povieme vám to rovno.",
      "Zakladáte zo zahraničia alebo potrebujete pre konateľa pobyt? Pozrite si našu stránku o založení firmy a pobyte pre zahraničných zakladateľov.",
    ],
    fields: [
      { name: "companyName", label: "Zamýšľané obchodné meno", placeholder: "napr. Novum Trade s. r. o." },
      { name: "founders", label: "Počet spoločníkov", placeholder: "napr. 1" },
      { name: "activities", label: "Čomu sa bude firma venovať", placeholder: "napr. e-shop s doplnkami" },
    ],
    messageLabel: "Doplňujúce informácie",
    subject: "Založenie s.r.o. — podklady",
    documents: [
      "občiansky preukaz alebo pas zakladateľov a konateľa",
      "adresa sídla a doklad o vlastníctve alebo súhlas vlastníka",
      "zoznam predmetov podnikania",
    ],
    submit: "Chcem založiť s.r.o.",
  },

  faq: [
    {
      q: "Musím kvôli založeniu firmy ísť k notárovi?",
      a: "Nie nevyhnutne. Zákon pripúšťa notársku zápisnicu alebo dokument autorizovaný advokátom (§ 57 ObchZ) — my autorizujeme dokumenty sami a podľa § 50 ods. 4 zákona o obchodnom registri odpadá aj úradné osvedčovanie podpisov. K notárovi teda nemusíte vôbec.",
    },
    {
      q: "Ako dlho celé založenie trvá?",
      a: "Spravidla sedem až desať pracovných dní: do dvoch dní dokumenty, tri dni živnostenské oprávnenie, do dvoch pracovných dní zápis registrovým súdom od úplného návrhu. Lehotu vieme skrátiť, ak máte podklady pripravené.",
    },
    {
      q: "Aké je minimálne základné imanie?",
      a: "Základné imanie s.r.o. je najmenej 5 000 eur a vklad každého spoločníka najmenej 750 eur (§ 108 a § 109 ObchZ). Imanie sa pri založení nemusí skladať na účet v banke — postačuje vyhlásenie správcu vkladu.",
    },
    {
      q: "Môžem firmu založiť na diaľku, bez cesty do kancelárie?",
      a: "Áno. Dokument za vás môže podpísať splnomocnenec na základe plnomocenstva s úradne osvedčeným podpisom (§ 57 ods. 2 ObchZ) — v zahraničí osvedčeným pred notárom alebo na konzuláte, s apostilou, kde ju medzinárodná zmluva vyžaduje. Celú komunikáciu vedieme e-mailom a videohovorom.",
    },
    {
      q: "Čo ak mám exekúciu ja alebo budúci konateľ?",
      a: "Registrový súd pred zápisom preveruje register poverení na vykonanie exekúcie — konateľ vedený ako povinný sa zapísať nedá a zakladateľ v exekúcii je dôvodom odmietnutia návrhu. Preveríme to pred podaním; ak prekážka existuje, poplatok zbytočne nezaplatíte a povieme vám, ako sa dá odstrániť.",
    },
    {
      q: "Nestačí mi lacnejšie založenie cez online portál?",
      a: "Portály bez advokáta môžu od 17. 8. 2026 využiť už len zjednodušený štátny formulár (§ 110a ObchZ) s limitmi — najviac päť spoločníkov, len vybrané voľné živnosti, žiadne vlastné pravidlá medzi spoločníkmi. Ak vám limity vyhovujú, formulár je legitímna cesta; pri čomkoľvek nad ich rámec je potrebný notár alebo advokát.",
    },
  ],

  relatedServiceId: "obchod",
  relatedServiceLabel: "Obchodné právo a firemná agenda",
};
