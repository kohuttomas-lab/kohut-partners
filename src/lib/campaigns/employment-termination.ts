import type { CampaignData } from "./types";

/**
 * Neplatné skončenie pracovného pomeru.
 * Kľúčové: § 77 ZP — dvojmesačná PREKLUZÍVNA lehota odo dňa, keď sa mal
 * pracovný pomer skončiť (pri ochrannej dobe podľa § 64 ods. 1 písm. a)
 * dva mesiace od uplynutia ochrannej doby, najviac šesť mesiacov).
 * § 79 ZP — náhrada mzdy v sume priemerného zárobku, najviac za 36 mesiacov;
 * nad 12 mesiacov ju súd môže na žiadosť zamestnávateľa znížiť alebo nepriznať.
 * § 79 ods. 4 ZP — ak zamestnanec netrvá na ďalšom zamestnávaní, platí fikcia
 * skončenia dohodou; § 79 ods. 5 — pri neplatnom okamžitom skončení a pri
 * skončení v skúšobnej dobe mu však patrí náhrada mzdy za výpovednú dobu
 * dvoch mesiacov.
 */
export const employmentTermination: CampaignData = {
  id: "employment-termination",
  pathname: "/employment-termination",

  meta: {
    title: "Neplatná výpoveď — máte dva mesiace | kohút & partners",
    description:
      "Dostali ste výpoveď alebo okamžité skončenie? Lehota na žalobu je dva mesiace a je prekluzívna. Posúdime výpoveď zadarmo. Advokátska kancelária, celá SR.",
  },

  hero: {
    overline: "Pracovné právo · celá SR",
    h1: "Dostali ste výpoveď?",
    lead: "Na napadnutie skončenia pracovného pomeru máte dva mesiace. Nie je to premlčacia lehota, ktorú by sa dalo niečím prerušiť — po jej uplynutí je vec definitívne uzavretá, aj keby bola výpoveď zjavne neplatná.",
    paragraphs: [
      "Pošlite nám výpoveď. Do troch pracovných dní vám napíšeme, či podľa nás obstojí, čo by sa dalo namietať a dokedy presne vám beží lehota. Za toto posúdenie nič neplatíte.",
      "Vec vedieme na diaľku pre klientov z celého Slovenska — komunikujeme e-mailom, telefonicky aj cez videohovor. Zastupujeme zamestnancov aj zamestnávateľov.",
    ],
    cta: "Poslať výpoveď na posúdenie",
  },

  reasons: {
    overline: "Čo sa dá namietať",
    heading: "Chyby, na ktorých výpovede padajú",
    lead: "Zákonník práce kladie na skončenie pracovného pomeru prísne formálne aj obsahové požiadavky. Väčšina sporov sa nevyhrá dokazovaním, kto mal pravdu, ale tým, že zamestnávateľ niektorú z nich nesplnil.",
    items: [
      {
        title: "Nedostatočne vymedzený dôvod",
        desc: "Dôvod výpovede musí byť skutkovo vymedzený tak, aby ho nebolo možné zameniť s iným, a dodatočne sa už meniť nesmie. Všeobecná formulácia bez konkrétnych skutočností spravidla neobstojí.",
      },
      {
        title: "Nesplnená ponuková povinnosť",
        desc: "Pri viacerých výpovedných dôvodoch musí zamestnávateľ najprv ponúknuť inú vhodnú prácu, ak ju má. Ak takú prácu mal a neponúkol ju, výpoveď je neplatná.",
      },
      {
        title: "Fiktívna nadbytočnosť",
        desc: "Nadbytočnosť musí vyplývať z reálnej organizačnej zmeny. Ak sa na to isté miesto krátko po výpovedi prijme niekto iný, je to silný argument, že o skutočnú nadbytočnosť nešlo.",
      },
      {
        title: "Chýbajúce prerokovanie so zástupcami zamestnancov",
        desc: "Ak u zamestnávateľa pôsobia zástupcovia zamestnancov, výpoveď aj okamžité skončenie s nimi musí vopred prerokovať. Opomenutie tohto kroku spôsobuje neplatnosť.",
      },
      {
        title: "Skončenie v ochrannej dobe",
        desc: "Počas práceneschopnosti, tehotenstva, materskej a rodičovskej dovolenky či ošetrovania člena rodiny platí zákaz výpovede s úzko vymedzenými výnimkami.",
      },
      {
        title: "Zmeškané lehoty pri okamžitom skončení",
        desc: "Okamžité skončenie možno dať len v úzkych lehotách od chvíle, keď sa zamestnávateľ o dôvode dozvedel. Ich zmeškanie robí skončenie neplatným bez ohľadu na to, čo sa stalo.",
      },
    ],
  },

  scope: {
    overline: "Rozsah",
    heading: "Ktoré situácie riešime",
    lead: "Nejde len o klasickú výpoveď. Rovnaká dvojmesačná lehota platí aj pre okamžité skončenie, skončenie v skúšobnej dobe a dokonca aj pre dohodu, ktorú ste podpísali pod nátlakom.",
    items: [
      "Výpoveď zo strany zamestnávateľa",
      "Okamžité skončenie pracovného pomeru",
      "Skončenie v skúšobnej dobe",
      "Dohoda podpísaná pod nátlakom",
      "Nevyplatené odstupné a odchodné",
      "Nevyplatená mzda, príplatky a nadčasy",
      "Diskriminácia a šikana na pracovisku",
      "Zastupovanie zamestnávateľov v týchto sporoch",
    ],
  },

  steps: [
    {
      title: "Posúdenie zadarmo",
      desc: "Pošlete výpoveď a pracovnú zmluvu. Do troch pracovných dní dostanete stanovisko, či skončenie obstojí — a hlavne presný dátum, dokedy vám beží lehota.",
    },
    {
      title: "Oznámenie zamestnávateľovi",
      desc: "Ak chcete pokračovať v práci, treba to zamestnávateľovi oznámiť. Od tohto oznámenia sa odvíja náhrada mzdy, preto ho pripravíme hneď a preukázateľne doručíme.",
    },
    {
      title: "Rokovanie o urovnaní",
      desc: "Väčšina zamestnávateľov po kvalifikovanej výzve preferuje dohodu pred súdom. Vyjednáme odstupné alebo odškodnenie bez toho, aby sa vec vliekla roky.",
    },
    {
      title: "Žaloba a súd",
      desc: "Ak dohoda nie je možná, podáme žalobu o určenie neplatnosti skončenia pracovného pomeru a zastupujeme vás až do právoplatného rozhodnutia.",
    },
  ],

  deadline: {
    heading: "Dva mesiace — a ani deň navyše",
    body: "Neplatnosť skončenia pracovného pomeru možno uplatniť na súde najneskôr do dvoch mesiacov odo dňa, keď sa mal pracovný pomer skončiť (§ 77 Zákonníka práce). Táto lehota je prekluzívna — po jej márnom uplynutí právo zaniká, nedá sa odpustiť ani obnoviť a súd na to prihliada sám. Rokovanie so zamestnávateľom ju neprerušuje. Ak vám pracovný pomer predĺžila ochranná doba pri práceneschopnosti, lehota beží dva mesiace od jej uplynutia, najviac však šesť mesiacov od pôvodného skončenia.",
  },

  pricing: {
    heading: "Koľko to stojí",
    lead: "Cenu poznáte skôr, než čokoľvek podpíšete. Pri neplatnom skončení ide spravidla o náhradu mzdy za mesiace, počas ktorých spor beží — hodnota veci teda býva vyčísliteľná vopred.",
    items: [
      {
        label: "Posúdenie výpovede",
        value: "zadarmo",
        desc: "Preštudujeme výpoveď a pracovnú zmluvu a napíšeme vám, ako to vidíme — vrátane presného dátumu, dokedy beží lehota.",
      },
      {
        label: "Konzultácia (30 min)",
        value: "50 € s DPH",
        desc: "Osobne, telefonicky alebo cez videohovor. Prejdeme možnosti, riziká a to, či sa oplatí trvať na ďalšom zamestnávaní.",
      },
      {
        label: "Zastupovanie vo veci",
        value: "pevná cena alebo podiel na výsledku",
        desc: "Pri vhodných veciach vieme dohodnúť podielovú odmenu — podľa vyhlášky najviac 20 % z hodnoty veci, splatnú pri plnom úspechu. Pri neúspechu sa hradia len hotové výdavky (súdny poplatok, znalec, poštovné).",
      },
    ],
  },

  form: {
    title: "Pošlite nám výpoveď",
    leads: [
      "Do troch pracovných dní vám napíšeme, či skončenie podľa nás obstojí, čo by sa dalo namietať a dokedy presne vám beží lehota. Za posúdenie nič neplatíte.",
      "Ak vec podľa nás nemá šancu, povieme vám to rovno. A ak vám lehota práve dobieha, ozveme sa skôr.",
    ],
    fields: [
      { name: "employer", label: "Zamestnávateľ", placeholder: "názov firmy" },
      {
        name: "endDate",
        label: "Kedy sa mal pracovný pomer skončiť",
        placeholder: "napr. 30. 6. 2026",
      },
      {
        name: "salary",
        label: "Priemerný mesačný zárobok (orientačne)",
        placeholder: "napr. 1 400 €",
      },
    ],
    messageLabel: "Ako to prebehlo a čo vám zamestnávateľ uviedol ako dôvod",
    subject: "Neplatné skončenie pracovného pomeru — podklady",
    documents: [
      "výpoveď alebo okamžité skončenie pracovného pomeru",
      "pracovnú zmluvu vrátane dodatkov",
      "výplatné pásky za posledné mesiace, ak ich máte",
    ],
    submit: "Chcem bezplatné posúdenie",
  },

  faq: [
    {
      q: "Naozaj mám len dva mesiace?",
      a: "Áno, a je to tá najprísnejšia lehota v pracovnom práve. Neplatnosť skončenia treba uplatniť na súde do dvoch mesiacov odo dňa, keď sa mal pracovný pomer skončiť (§ 77 Zákonníka práce). Lehota je prekluzívna — právo po nej zaniká, nedá sa odpustiť a súd na to prihliada z úradnej povinnosti. Nestačí pritom zamestnávateľovi napísať; v tej lehote musí byť žaloba na súde.",
    },
    {
      q: "Čo znamená „trvať na ďalšom zamestnávaní“ a musím to urobiť?",
      a: "Je to písomné oznámenie zamestnávateľovi, že trváte na tom, aby vás naďalej zamestnával. Má to zásadný finančný dopad: od tohto oznámenia vám patrí náhrada mzdy v sume priemerného zárobku až do času, kým vám umožní pokračovať v práci alebo kým súd rozhodne (§ 79 ods. 1). Ak na ďalšom zamestnávaní netrváte, zákon vychádza z toho, že pracovný pomer sa skončil dohodou (§ 79 ods. 4). Neznamená to však vždy nulu: ak išlo o neplatné okamžité skončenie alebo o neplatné skončenie v skúšobnej dobe, patrí vám náhrada mzdy v sume priemerného zárobku za výpovednú dobu dvoch mesiacov (§ 79 ods. 5).",
    },
    {
      q: "Koľko môžem dostať?",
      a: "Náhrada mzdy sa počíta z vášho priemerného zárobku za obdobie sporu. Ak by presiahla 12 mesiacov, súd ju môže na žiadosť zamestnávateľa za čas nad 12 mesiacov znížiť alebo nepriznať; celkovo ju možno priznať najviac za 36 mesiacov (§ 79 ods. 2). Konkrétny odhad dostanete pri posúdení, keď budeme poznať váš zárobok a dôvod skončenia.",
    },
    {
      q: "Podpísal som dohodu o skončení. Dá sa s tým ešte niečo robiť?",
      a: "Aj neplatnosť dohody o skončení pracovného pomeru možno napadnúť v tej istej dvojmesačnej lehote. Prichádza do úvahy najmä vtedy, ak ste ju podpísali pod nátlakom, v tiesni alebo po tom, čo vám bola predložená ako jediná možnosť namiesto výpovede. Posúdenie závisí od okolností, preto nám napíšte, ako to prebehlo.",
    },
    {
      q: "Bojím sa, že si tým zavriem dvere u ďalších zamestnávateľov.",
      a: "Je to pochopiteľná obava a v praxi sa väčšina vecí uzavrie mimosúdnou dohodou, teda bez pojednávania a bez verejného konania. Rozhodnutie, či ísť do sporu, je vždy vaše — od nás dostanete vecný podklad, nie tlak.",
    },
    {
      q: "Zastupujete aj zamestnávateľov?",
      a: "Áno. Rovnaká dvojmesačná lehota platí aj pre zamestnávateľa, ktorý chce napadnúť neplatné skončenie zo strany zamestnanca. Zamestnávateľom zároveň pripravujeme skončenia tak, aby obstáli, čo je podstatne lacnejšie než spor.",
    },
  ],

  relatedServiceId: "spory",
  relatedServiceLabel: "Súdne spory a vymáhanie",
};
