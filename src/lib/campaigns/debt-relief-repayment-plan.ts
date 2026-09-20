import type { CampaignData } from "./types";

/**
 * Oddlženie splátkovým kalendárom — priebeh konania do hĺbky (situačná
 * stránka; všeobecnú prípravu na oddlženie rieši /osobny-bankrot).
 * Overené v knižnici: ZKR 7/2005 v znení od 1. 10. 2025 — § 166 ods. 2 a 3
 * (10 rokov; stačí vedená exekúcia, ročná podmienka platí len pre konkurz),
 * § 166c ods. 1 písm. c), § 166e, § 166f ods. 1 a 4, § 166g ods. 2 písm. i)
 * a ods. 5, § 166i, § 166j ods. 1 a 6, § 166k, § 168 ods. 2 a 3, § 168a
 * (15 dní; 3 roky; preddavok do 7 dní od výzvy správcu), § 168b (odklad
 * exekúcií; odklad dražby obydlia o 6 mesiacov), § 168c (45 dní; min. 30 %;
 * +10 % oproti konkurzu; 5 rokov; ods. 7), § 168d (námietky 90 dní), § 168e,
 * § 168f (6 000 / 1 200 / 100 €), § 170. Zák. 327/2005 v znení od
 * 12. 6. 2026 — § 24h ods. 6. Vyhl. 665/2005 § 7a (preddavok 500 €).
 * ⚖ KONTROLA: „správca majetok nespeňažuje“ plynie zo systematiky tretej
 *   hlavy (neobsahuje speňažovanie), nie z výslovného ustanovenia.
 * ⚖ KONTROLA: odmena advokáta určeného Centrom — § 14d vyhl. 655/2004 je
 *   v knižnici len v znení od 1. 1. 2024 (160 €); suma sa v texte neuvádza.
 * ⚖ KONTROLA: § 24h ods. 6 zák. 327/2005 pripúšťa, aby Centrum určilo
 *   advokáta označeného dlžníkom — text je neutrálny; rozhodnúť, či sa
 *   kancelária chce v tejto úlohe ponúkať.
 * ⚖ KONTROLA: či po určení kalendára možno prejsť do konkurzu (§ 166 ods. 2,
 *   § 167a ods. 1 písm. e) vs. § 168h) — vo viditeľnom texte sa netvrdí nič.
 * ⚖ KONTROLA: cena prípravy podkladov podľa § 168 ods. 2 je zahrnutá pod
 *   „pevná cena vopred“; či ju kryje balík 149 €, musí určiť kancelária.
 */
export const debtReliefRepaymentPlan: CampaignData = {
  id: "debt-relief-repayment-plan",
  pathname: "/debt-relief-repayment-plan",
  group: "situacie",

  meta: {
    title: "Oddlženie splátkovým kalendárom — bez speňaženia majetku | kohút & partners",
    description:
      "Oddlženie splátkovým kalendárom: ochrana pred veriteľmi, návrh kalendára od správcu, najmenej 30 % nezabezpečených pohľadávok počas piatich rokov a majetok, ktorý správca nespeňažuje. Podmienky, priebeh a riziká podľa § 168 a nasl. ZKR. Posúdenie zadarmo.",
  },

  hero: {
    overline: "Oddlženie splátkovým kalendárom · celá SR",
    h1: "Oddlženie splátkovým kalendárom — päť rokov splácate, správca majetok nespeňažuje",
    lead: "Splátkový kalendár je druhá forma oddlženia fyzickej osoby (§ 168 a nasl. zákona o konkurze a reštrukturalizácii). Správca váš majetok nespeňažuje; namiesto toho počas piatich rokov zaplatíte nezabezpečeným veriteľom súdom určenú časť ich pohľadávok — najmenej 30 % — a zvyšku týchto dlhov vás súd zbavuje (§ 166e ods. 1, § 168c ods. 4 ZKR).",
    paragraphs: [
      "Táto cesta predpokladá pravidelný príjem: kalendár musí byť splniteľný a zároveň musí veriteľom priniesť aspoň o 10 % vyššie uspokojenie, než aké by dosiahli v konkurze (§ 168c ods. 5 a 6). Či to vo vašej situácii vychádza, posúdime zadarmo — z údajov o príjme, výdavkoch, majetku a dlhoch.",
      "Pri podaní návrhu vás až do ustanovenia správcu musí zastupovať advokát určený Centrom právnej pomoci (§ 166k ZKR) — cesta k súdu preto vždy vedie cez Centrum a hovoríme to otvorene. Insolvenčnému právu sa kancelária venuje dlhodobo a advokát kancelárie je zapísaný v zozname správcov vedenom Ministerstvom spravodlivosti SR. Všeobecnú prípravu na oddlženie opisujeme na stránke Osobný bankrot.",
    ],
    cta: "Chcem posúdenie zadarmo",
  },

  reasons: {
    overline: "Čo treba vedieť",
    heading: "Štyri pravidlá, na ktorých splátkový kalendár stojí",
    lead: "Splátkový kalendár nie je dohoda s veriteľmi, ale súdne konanie s pevnými pravidlami. Návrh kalendára zostavuje správca, určuje ho súd a plní ho dlžník — päť rokov.",
    items: [
      {
        title: "Ochrana pred veriteľmi",
        desc: "Ak návrh spĺňa podmienky, súd vám najneskôr do 15 dní od jeho doručenia poskytne ochranu pred veriteľmi a ustanoví správcu (§ 168a ods. 1). Exekúcie pre dlhy, ktorých sa kalendár týka, sa tým odkladajú; určenie kalendára je potom dôvodom na ich zastavenie (§ 168b ods. 1). Účinky nastupujú zverejnením uznesenia a zanikajú skončením konania (§ 168b ods. 3).",
      },
      {
        title: "Kalendár zostavuje správca",
        desc: "Správca do 45 dní od zloženia preddavku preskúma vaše pomery a zostaví návrh kalendára (§ 168c ods. 1). Prihliada najmä na pomer záväzkov k majetku, príčiny platobnej neschopnosti, príjmové možnosti a na zdravotné, rodinné a sociálne pomery (§ 168c ods. 2). Splátky nesmú presiahnuť predpokladaný príjem znížený o nevyhnutné výdavky na bývanie a základné potreby, výživné a nedotknuté pohľadávky (§ 168c ods. 3).",
      },
      {
        title: "Najmenej 30 % a o 10 % viac než v konkurze",
        desc: "Uspokojenie nezabezpečených veriteľov sa vyjadruje kvótou — percentom z pohľadávky, ktoré každému z nich zaplatíte počas piatich rokov — a nesmie byť nižšie ako 30 % (§ 168c ods. 4). Zároveň musí byť aspoň o 10 % vyššie než v konkurze (§ 168c ods. 5). Ak pomery dlžníka zostavenie kalendára neumožňujú, konanie sa končí a správca odporučí návrh na vyhlásenie konkurzu (§ 168c ods. 7).",
      },
      {
        title: "Majetok ostáva — a s ním aj zabezpečený veriteľ",
        desc: "Zabezpečená pohľadávka je oddlžením nedotknutá v rozsahu, v ktorom ju kryje hodnota zálohu (§ 166c ods. 1 písm. c)) — hypotéku teda splácate ďalej a záložné právo banky trvá. Po poskytnutí ochrany môžete jedenkrát písomne žiadať dražobníka o odklad dražby obydlia navrhnutej zabezpečeným veriteľom; dražba sa potom môže konať až po šiestich mesiacoch od doručenia žiadosti (§ 168b ods. 2).",
      },
    ],
  },

  scope: {
    overline: "Rozsah",
    heading: "S čím pri splátkovom kalendári pomáhame",
    lead: "Od prepočtu, či je kalendár vo vašej situácii reálny, po šesť rokov po jeho určení. Zastúpenie pri podaní návrhu určuje Centrum právnej pomoci; po ustanovení správcu vás môžeme zastupovať na základe plnomocenstva.",
    items: [
      "Prepočet, či príjem a majetok umožňujú splátkový kalendár, alebo je vhodnejší konkurz",
      "Podklady k návrhu: príjmy a výdavky za päť rokov späť a na päť rokov dopredu, daňové priznania (§ 168 ods. 2)",
      "Postup v Centre právnej pomoci a určenie advokáta na podanie návrhu (§ 166k)",
      "Príprava na preskúmanie pomerov správcom (§ 166i, § 168c)",
      "Vyjadrenia k námietkam veriteľov proti návrhu kalendára (§ 168d, § 168e)",
      "Odklad dražby obydlia navrhnutej zabezpečeným veriteľom (§ 168b ods. 2)",
      "Termíny splátok podľa výšky plnenia jednotlivým veriteľom (§ 168f)",
      "Obrana proti návrhu na zrušenie oddlženia pre nepoctivý zámer (§ 166f, § 166g)",
    ],
  },

  steps: [
    {
      title: "Posúdenie zadarmo",
      desc: "Napíšete nám o príjme, výdavkoch, majetku a dlhoch. Do troch pracovných dní vám odpovieme, či podmienky spĺňate a či vaše pomery kalendár s najmenej 30 % uspokojením umožňujú — alebo je vhodnejší konkurz.",
    },
    {
      title: "Centrum právnej pomoci a návrh",
      desc: "O právnu pomoc žiadate v Centre; to určí advokáta na podanie návrhu a môže určiť aj advokáta, ktorého označíte (§ 24h ods. 6 zákona č. 327/2005 Z. z.). Návrh sa podáva elektronicky a musí byť úplný — súd na jeho doplnenie nevyzýva (§ 168 ods. 2, § 170 ZKR).",
    },
    {
      title: "Ochrana, preddavok a správca",
      desc: "Ak návrh spĺňa podmienky, súd do 15 dní poskytne ochranu pred veriteľmi, ustanoví správcu a uloží vám zložiť preddavok na jeho odmenu a náklady (§ 168a). Správca potom do 45 dní preskúma vaše pomery a zverejní návrh kalendára v insolvenčnom registri (§ 168c ods. 1).",
    },
    {
      title: "Námietky, určenie kalendára a päť rokov plnenia",
      desc: "Veritelia môžu do 90 dní od zverejnenia návrhu podať námietky (§ 168d); kalendár určí súd (§ 168e). Plniť začínate prvým dňom mesiaca nasledujúceho po jeho určení a splátky posielate priamo veriteľom v termínoch podľa § 168f.",
    },
  ],

  deadline: {
    heading: "Sedem dní na preddavok — a ďalší pokus najskôr o tri roky",
    body: "V uznesení o poskytnutí ochrany pred veriteľmi vám súd uloží zložiť na účet správcu preddavok na jeho paušálnu odmenu a náklady — podľa vyhlášky 500 € (§ 168a ods. 3 ZKR, § 7a vyhlášky č. 665/2005 Z. z.). Na rozdiel od konkurzu ho neskladá Centrum právnej pomoci, ale dlžník. Ak ho nezložíte ani do siedmich dní od výzvy správcu, správca to oznámi v insolvenčnom registri a konanie sa tým končí. Ochranu pred veriteľmi pritom súd poskytne, len ak od jej posledného poskytnutia uplynuli aspoň tri roky (§ 168a ods. 1 písm. e)) — po konaní, ktoré sa skončilo bez určenia kalendára, tak ďalší návrh na splátkový kalendár prichádza do úvahy najskôr tri roky od poskytnutia ochrany. Preddavok aj úplné podklady preto treba mať pripravené skôr, než sa návrh podá. Po určení kalendára plynie šesť rokov, počas ktorých môže veriteľ navrhnúť zrušenie oddlženia (§ 166f ods. 1), a desať rokov, počas ktorých sa oddlženia nemožno domáhať znova (§ 166 ods. 2).",
  },

  pricing: {
    heading: "Koľko to stojí",
    lead: "Ceny s DPH, povedané vopred. Popri nich počítajte s nákladmi, ktoré určuje zákon a nie sú naším príjmom — s preddavkom 500 € na odmenu a náklady správcu a s odmenou advokáta určeného Centrom právnej pomoci, ktorú v tomto konaní hradí dlžník (§ 24h ods. 6 zákona č. 327/2005 Z. z.).",
    items: [
      {
        label: "Posúdenie situácie",
        value: "zadarmo",
        desc: "Či podmienky spĺňate a či príjem a majetok umožňujú splátkový kalendár, alebo je vhodnejší konkurz. Do troch pracovných dní, bez záväzku.",
      },
      {
        label: "Konzultácia (30 min)",
        value: "50 € s DPH",
        desc: "Osobne, telefonicky alebo cez videohovor. Prejdeme príjmy, výdavky a majetok a vysvetlíme, z čoho správca pri návrhu kalendára vychádza.",
      },
      {
        label: "Príprava a zastupovanie v konaní",
        value: "pevná cena vopred",
        desc: "Podklady k návrhu, komunikácia so správcom a vyjadrenia k námietkam veriteľov za pevnú cenu dohodnutú vopred — jej výška závisí od rozsahu veci a dozviete sa ju pri posúdení.",
      },
    ],
  },

  form: {
    title: "Napíšte nám o príjme, majetku a dlhoch",
    leads: [
      "Do troch pracovných dní dostanete bezplatné posúdenie: či podmienky oddlženia spĺňate a či vaše pomery splátkový kalendár umožňujú. Všetko, čo nám napíšete, kryje advokátska mlčanlivosť.",
      "Ak splátkový kalendár nevychádza — najmä pri nízkom alebo nepravidelnom príjme — povieme vám to rovno a vysvetlíme oddlženie konkurzom.",
    ],
    fields: [
      { name: "income", label: "Čistý mesačný príjem a jeho zdroj", placeholder: "napr. 1 350 € zo zamestnania" },
      { name: "debts", label: "Približná výška dlhov", placeholder: "napr. 42 000 €, z toho hypotéka 25 000 €" },
      { name: "assets", label: "Majetok, ktorý si chcete zachovať", placeholder: "napr. rodinný dom, podiel 1/2" },
    ],
    messageLabel: "Vaša situácia vlastnými slovami",
    subject: "Oddlženie splátkovým kalendárom — podklady",
    documents: [
      "doklady o príjme za posledné mesiace",
      "prehľad veriteľov a dlhov, hoci neúplný",
      "upovedomenie o začatí exekúcie alebo iný doklad o exekúcii",
      "list vlastníctva a údaje o hypotéke, ak ju máte",
    ],
    submit: "Chcem posúdenie zadarmo",
  },

  faq: [
    {
      q: "Pre koho je splátkový kalendár vhodnejší než konkurz?",
      a: "Pre dlžníka s pravidelným príjmom a majetkom, ktorý si chce zachovať. Na návrh stačí, že sa voči vám vedie exekúcia — ročná doba od poverenia exekútora sa vyžaduje len pri konkurze (§ 166 ods. 3 ZKR). Kalendár však musí byť splniteľný a veriteľom priniesť najmenej 30 % ich nezabezpečených pohľadávok a zároveň aspoň o 10 % viac než konkurz (§ 168c ods. 4 až 6). Ak to vaše pomery neumožňujú, konanie sa končí bez určenia kalendára (§ 168c ods. 7, § 168e ods. 4).",
    },
    {
      q: "Koľko budem splácať a kto to určí?",
      a: "Návrh zostavuje správca a kalendár určuje súd; vychádza pritom z návrhu správcu, zákonných pravidiel a námietok veriteľov (§ 168e ods. 1 ZKR). Horná hranica splátok je váš predpokladaný príjem znížený o nevyhnutné výdavky na bývanie a základné potreby, výživné a nedotknuté pohľadávky (§ 168c ods. 3). Termíny závisia od celkového plnenia jednému veriteľovi: nad 6 000 € sa spláca mesačne, nad 1 200 € polročne, nad 100 € ročne a plnenie do 100 € sa poskytne jednou splátkou najneskôr posledný deň piateho roka (§ 168f ods. 1).",
    },
    {
      q: "Môžu veritelia splátkový kalendár zablokovať?",
      a: "Zákon súhlas veriteľov nevyžaduje — o kalendári rozhoduje súd. Každý dotknutý veriteľ však môže do 90 dní od zverejnenia návrhu podať u správcu námietku; správca sa k nej vyjadrí a návrh môže upraviť v prospech veriteľov (§ 168d ZKR). Súd na včas podané námietky prihliadne a môže nariadiť pojednávanie; ak ho nenariadi, rozhodne do 30 dní (§ 168e ods. 1 a 2).",
    },
    {
      q: "Mám hypotéku. Čo s ňou bude?",
      a: "Pohľadávka zabezpečená záložným právom je oddlžením nedotknutá v rozsahu, v ktorom ju kryje hodnota zálohu (§ 166c ods. 1 písm. c) ZKR), takže hypotéku splácate ďalej. Plnenie nedotknutých pohľadávok sa zohľadňuje pri hornej hranici splátok (§ 168c ods. 3). Ak zabezpečený veriteľ navrhne dražbu obydlia, možno jedenkrát žiadať o jej odklad o šesť mesiacov (§ 168b ods. 2). Ak záložné právo zanikne a časť pohľadávky ostane neuspokojená, platí sa na ňu kvóta určená súdom (§ 168f ods. 3).",
    },
    {
      q: "Čo ak počas piatich rokov prestanem splátky zvládať?",
      a: "Ak kalendár bez vážneho dôvodu riadne a včas neplníte, zákon to radí medzi prejavy nepoctivého zámeru (§ 166g ods. 2 písm. i) ZKR). Dotknutý veriteľ môže do šiestich rokov od určenia kalendára navrhnúť zrušenie oddlženia; ak uspeje, pohľadávkam sa v neuspokojenom rozsahu obnoví pôvodná vymáhateľnosť aj splatnosť (§ 166f ods. 1 a 4). S veriteľom sa možno písomne dohodnúť na inej lehote splatnosti splátok (§ 168f ods. 4). Ak sa vaše pomery zhoršia, ozvite sa skôr, než splátku vynecháte.",
    },
    {
      q: "Kto podáva návrh a s akými nákladmi treba počítať?",
      a: "Pri podaní návrhu vás až do ustanovenia správcu musí zastupovať advokát určený Centrom právnej pomoci; Centrum môže určiť aj advokáta, ktorého označíte (§ 166k ZKR, § 24h ods. 6 zákona č. 327/2005 Z. z.). Odmenu tohto advokáta v konaní o splátkovom kalendári hradí dlžník. Na účet správcu skladáte preddavok 500 € na jeho paušálnu odmenu a náklady (§ 168a ods. 3 ZKR, § 7a vyhlášky č. 665/2005 Z. z.). Naša odmena je popísaná vyššie a poznáte ju vopred.",
    },
  ],

  relatedServiceId: "insolvencie",
  relatedServiceLabel: "Insolvencie a reštrukturalizácie",
};
