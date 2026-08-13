import type { CampaignData } from "./types";

/**
 * Odškodnenie po dopravnej nehode.
 * Zákon 437/2004 Z. z.: § 5 ods. 2 — jeden bod = 2 % priemernej mesačnej mzdy
 * v hospodárstve SR za predchádzajúci kalendárny rok; § 9 ods. 5 — bodové
 * hodnotenie bolesti sa zvýši až o polovicu pri infekcii rany, bolestivejšom
 * liečení či komplikáciách a pri operačnom výkone; § 5 ods. 5 — v prípadoch
 * hodných osobitného zreteľa (napr. invalidita) môže súd náhradu za sťaženie
 * spoločenského uplatnenia zvýšiť najviac o 50 %; § 6 — dohoda o vyrovnaní,
 * pri PZP ju uzatvára poisťovateľ alebo Slovenská kancelária poisťovateľov.
 */
export const accidentCompensation: CampaignData = {
  id: "accident-compensation",
  pathname: "/accident-compensation",

  meta: {
    title: "Odškodnenie po dopravnej nehode | kohút & partners",
    description:
      "Bolestné, sťaženie spoločenského uplatnenia, strata na zárobku. Posúdime lekársky posudok a ponuku poisťovne zadarmo. Advokátska kancelária, celá SR.",
  },

  hero: {
    overline: "Odškodnenie · celá SR",
    h1: "Odškodnenie po dopravnej nehode",
    lead: "Suma, ktorú poisťovňa ponúkne, nie je zákonný nárok — je to jej návrh. Nárok sa počíta z lekárskeho posudku a ten sa dá prepočítať aj napadnúť.",
    paragraphs: [
      "Pošlite nám lekársky posudok a ponuku poisťovne. Do troch pracovných dní vám napíšeme, či je ohodnotenie úplné a čo sa v ňom dá ešte uplatniť. Za toto posúdenie nič neplatíte.",
      "Vec vedieme na diaľku pre klientov z celého Slovenska. Protistranou je poisťovňa vinníka z povinného zmluvného poistenia, prípadne Slovenská kancelária poisťovateľov — na tom, kde bývate, nezáleží.",
    ],
    cta: "Poslať posudok na prepočet",
  },

  reasons: {
    overline: "Čo sa dá uplatniť navyše",
    heading: "Kde odškodnenie najčastejšie zaostáva",
    lead: "Lekár spravidla správne určí diagnózu, ale zákon umožňuje bodové ohodnotenie za istých okolností zvýšiť — a na to sa v praxi zabúda. Rovnako sa zabúda na nároky, ktoré popri bolestnom bežia samostatne.",
    items: [
      {
        title: "Nezohľadnené komplikácie liečby",
        desc: "Bodové hodnotenie bolesti sa zvýši až o polovicu, ak vznikla infekcia rany, ak si poškodenie vyžiadalo bolestivejší spôsob liečenia, ak nastali komplikácie alebo ak bol potrebný operačný výkon (§ 9 ods. 5 zákona 437/2004).",
      },
      {
        title: "Chýbajúce sťaženie spoločenského uplatnenia",
        desc: "Bolestné odškodňuje priebeh liečenia, sťaženie spoločenského uplatnenia trvalé následky. Sú to dva samostatné nároky a druhý sa vyčísľuje až po ustálení zdravotného stavu — často teda po tom, čo poisťovňa vyplatila prvý.",
      },
      {
        title: "Neuplatnená strata na zárobku",
        desc: "Rozdiel medzi príjmom pred nehodou a nemocenským či invalidným dôchodkom je samostatný nárok. Beží počas práceneschopnosti aj po nej, ak ste kvôli následkom zarábali menej.",
      },
      {
        title: "Nepreplatené náklady liečenia",
        desc: "Doplatky za lieky a zdravotnícke pomôcky, rehabilitácie nad rámec úhrady poisťovne, cestovné na vyšetrenia aj náklady na opatrovanie sú vyčísliteľné a uplatniteľné.",
      },
      {
        title: "Neskoré uzavretie dohody o vyrovnaní",
        desc: "Dohodu možno uzavrieť aj nad zákonnú výšku náhrady (§ 6 zákona 437/2004). Podpísaná predčasne — pred ustálením stavu — však spravidla uzavrie aj nároky, ktoré sa prejavia až neskôr.",
      },
      {
        title: "Nezohľadnený osobitný zreteľ",
        desc: "V prípadoch hodných osobitného zreteľa, ako je uznanie invalidity, môže súd náhradu za sťaženie spoločenského uplatnenia zvýšiť najviac o 50 % (§ 5 ods. 5). Poisťovňa toto navýšenie sama neponúkne.",
      },
    ],
  },

  scope: {
    overline: "Rozsah",
    heading: "Ktoré nároky uplatňujeme",
    lead: "Nároky sa navzájom nevylučujú — pri jednej nehode ich spravidla beží niekoľko naraz a každý sa preukazuje inak.",
    items: [
      "Náhrada za bolesť (bolestné)",
      "Náhrada za sťaženie spoločenského uplatnenia",
      "Strata na zárobku počas práceneschopnosti aj po nej",
      "Účelné náklady liečenia a rehabilitácie",
      "Náklady na opatrovanie a pomoc inej osoby",
      "Škoda na vozidle a veciach",
      "Nemajetková ujma pozostalých pri usmrtení",
      "Náhrada nákladov pohrebu",
    ],
  },

  steps: [
    {
      title: "Prepočet zadarmo",
      desc: "Pošlete lekársky posudok a ponuku poisťovne. Do troch pracovných dní vám napíšeme, či je ohodnotenie úplné a o koľko sa dá nárok navýšiť.",
    },
    {
      title: "Doplnenie podkladov",
      desc: "Ak posudok nezohľadňuje komplikácie alebo trvalé následky, zabezpečíme jeho doplnenie či nový posudok a vyčíslime nároky, ktoré v ponuke chýbajú.",
    },
    {
      title: "Rokovanie s poisťovňou",
      desc: "Uplatníme nárok voči poisťovni vinníka a rokujeme o dohode o vyrovnaní. Veľká časť vecí sa uzavrie v tomto kroku bez súdu.",
    },
    {
      title: "Žaloba a súd",
      desc: "Ak poisťovňa neustúpi, podáme žalobu a zastupujeme vás až do právoplatného rozhodnutia vrátane návrhu na zvýšenie podľa § 5 ods. 5.",
    },
  ],

  deadline: {
    heading: "Nepodpisujte dohodu predčasne",
    body: "Sťaženie spoločenského uplatnenia sa dá vyčísliť až po ustálení zdravotného stavu, spravidla najskôr rok po úraze. Dohoda o vyrovnaní podpísaná skôr obvykle vysporiada aj nároky, ktoré sa prejavia neskôr — a späť sa k nim už nedostanete. Ak máte na stole ponuku poisťovne, nechajte si ju najprv prepočítať. Nárok na náhradu škody sa navyše premlčuje, preto s uplatnením neotáľajte.",
  },

  pricing: {
    heading: "Koľko to stojí",
    lead: "Cenu poznáte skôr, než čokoľvek podpíšete. Hodnota veci je pri odškodnení vyčísliteľná, takže sa dá dohodnúť aj odmena naviazaná na výsledok.",
    items: [
      {
        label: "Prepočet posudku a ponuky",
        value: "zadarmo",
        desc: "Preštudujeme lekársky posudok a ponuku poisťovne a napíšeme vám, čo v ohodnotení chýba a o koľko sa dá nárok navýšiť.",
      },
      {
        label: "Konzultácia (30 min)",
        value: "50 € s DPH",
        desc: "Osobne, telefonicky alebo cez videohovor. Prejdeme jednotlivé nároky, dôkazy a realistický odhad výsledku.",
      },
      {
        label: "Zastupovanie vo veci",
        value: "pevná cena alebo podiel na výsledku",
        desc: "Pri vhodných veciach vieme dohodnúť podielovú odmenu — podľa vyhlášky najviac 20 % z hodnoty veci, splatnú pri plnom úspechu. Pri neúspechu sa hradia len hotové výdavky (súdny poplatok, znalec, poštovné).",
      },
    ],
  },

  form: {
    title: "Pošlite nám posudok a ponuku",
    leads: [
      "Do troch pracovných dní vám napíšeme, či je bodové ohodnotenie úplné, ktoré nároky v ponuke chýbajú a o koľko sa dá odškodnenie navýšiť. Za posúdenie nič neplatíte.",
      "Ak je ponuka poisťovne primeraná, povieme vám to rovno — aj to je užitočná informácia, keď sa rozhodujete, či ju podpísať.",
    ],
    fields: [
      { name: "accidentDate", label: "Kedy sa nehoda stala", placeholder: "napr. 12. 3. 2026" },
      { name: "insurer", label: "Poisťovňa vinníka", placeholder: "ak ju poznáte" },
      { name: "offer", label: "Ponúknutá suma (orientačne)", placeholder: "napr. 2 400 €" },
    ],
    messageLabel: "Aké zranenia ste utrpeli a ako prebiehalo liečenie",
    subject: "Odškodnenie po dopravnej nehode — podklady",
    documents: [
      "lekársky posudok o bodovom ohodnotení, ak ho už máte",
      "ponuku alebo oznámenie poisťovne o výške plnenia",
      "lekárske správy, prepúšťaciu správu a doklad o práceneschopnosti",
      "policajný záznam alebo správu o nehode",
    ],
    submit: "Chcem bezplatný prepočet",
  },

  faq: [
    {
      q: "Ako sa vlastne počíta bolestné?",
      a: "Lekár priradí poškodeniu zdravia počet bodov podľa prílohy zákona 437/2004. Jeden bod sa potom prepočíta sumou vo výške 2 % priemernej mesačnej mzdy zamestnanca v hospodárstve SR za kalendárny rok predchádzajúci roku, v ktorom nárok vznikol (§ 5 ods. 2). Preto sa oplatí kontrolovať dve veci: či je počet bodov správny a či bol použitý správny rok.",
    },
    {
      q: "Poisťovňa mi už niečo vyplatila. Má zmysel sa ozvať?",
      a: "Spravidla áno. Prvá výplata býva len bolestné a často bez navýšenia za komplikácie liečby. Sťaženie spoločenského uplatnenia, strata na zárobku a náklady liečenia sú samostatné nároky, ktoré poisťovňa sama od seba nevyčísli. Ak ste ale už podpísali dohodu o vyrovnaní, pošlite nám ju — od jej znenia závisí, čo sa dá ešte uplatniť.",
    },
    {
      q: "Nehodu som nespôsobil ja. Kto mi to zaplatí?",
      a: "Nároky sa uplatňujú voči poisťovni vinníka z povinného zmluvného poistenia. Ak vinník poistený nebol alebo ostal neznámy, plní za istých podmienok Slovenská kancelária poisťovateľov. To, či máte vlastné havarijné poistenie, na tieto nároky nemá vplyv.",
    },
    {
      q: "Čo ak som mal na nehode spoluzavinenie?",
      a: "Spoluzavinenie nárok neruší, len ho pomerne kráti. Poisťovne pritom mieru spoluzavinenia určujú v svoj prospech pomerne často, takže práve tu má zmysel jej záver preveriť.",
    },
    {
      q: "Kedy sa dá uplatniť sťaženie spoločenského uplatnenia?",
      a: "Až po ustálení zdravotného stavu, teda keď je zrejmé, aké následky zostanú trvalé — spravidla najskôr rok po úraze. Práve preto neodporúčame podpisovať dohodu o vyrovnaní skôr; podpísaná predčasne obvykle vysporiada aj tento nárok, hoci ešte nebol vyčíslený.",
    },
    {
      q: "Blízka osoba pri nehode zahynula. Čo sa dá uplatniť?",
      a: "Pozostalým patrí náhrada nemajetkovej ujmy a náhrada nákladov pohrebu, prípadne aj náhrada nákladov na výživu pozostalých. Ide o citlivú agendu, ktorú vedieme diskrétne a bez toho, aby sme vás nútili opakovane prechádzať detaily.",
    },
    {
      q: "Ako je to s odmenou, ak vec nevyjde?",
      a: "Pri vhodných veciach dohodneme podielovú odmenu — podľa § 7 ods. 2 vyhlášky 655/2004 najviac 20 % z hodnoty veci, splatnú pri plnom úspechu vo veci. Ak úspech nenastane, máme podľa § 8 ods. 3 nárok len na náhradu hotových výdavkov. Presné podmienky si dohodneme písomne vopred.",
    },
  ],

  relatedServiceId: "spory",
  relatedServiceLabel: "Súdne spory a vymáhanie",
};
