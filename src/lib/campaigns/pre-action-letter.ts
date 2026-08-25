import type { CampaignData } from "./types";

/**
 * Predžalobná výzva (katalóg B3, existujúci balík sp-vyzva 89 €).
 * OZ § 517 (omeškanie), úroky z omeškania podľa nar. vlády, paušálna náhrada
 * nákladov 40 € pri B2B (zák. 21/2013 / ObchZ § 369c). Do 2 pracovných dní.
 */
export const preActionLetter: CampaignData = {
  id: "pre-action-letter",
  pathname: "/pre-action-letter",
  group: "produkt",

  meta: {
    title: "Predžalobná výzva od advokáta za 89 € — do 2 pracovných dní | kohút & partners",
    description:
      "Neuhradená faktúra alebo dlh? Predžalobná výzva od advokáta s vyčíslením istiny, úrokov z omeškania a paušálnej náhrady 40 €. Odoslaná do 2 pracovných dní, 89 € s DPH. Celá SR.",
  },

  hero: {
    overline: "Predžalobná výzva · celá SR",
    h1: "Predžalobná výzva — hlavička advokáta zaberá tam, kde upomienky zlyhali",
    lead: "Vaše vlastné urgencie dlžník odkladá; výzvu od advokátskej kancelárie už nie. Je to najlacnejší krok vymáhania — a často aj posledný potrebný.",
    paragraphs: [
      "Preveríme nárok a premlčanie, vyčíslime istinu, úroky z omeškania a pri podnikateľoch aj paušálnu náhradu nákladov 40 € za každú pohľadávku, a výzvu odošleme doporučene aj e-mailom — do dvoch pracovných dní od dodania podkladov.",
      "Ak dlžník nezaplatí, viete hneď, čo ďalej: výzva je pripravená tak, aby na ňu nadviazal návrh na platobný rozkaz bez ďalšej prípravy.",
    ],
    cta: "Chcem poslať výzvu",
  },

  reasons: {
    overline: "Prečo funguje",
    heading: "Čo výzva od advokáta mení",
    lead: "Dlžník z nej vidí tri veci: že to myslíte vážne, že dlh rastie a že ďalší krok je súd s trovami navyše.",
    items: [
      {
        title: "Vyčíslenie, ktoré obstojí",
        desc: "Istina, úroky z omeškania v zákonnej alebo dohodnutej výške a pri vzťahoch medzi podnikateľmi paušálna náhrada nákladov 40 € — dlžník vidí presnú sumu ku dňu úhrady, nie odhad.",
      },
      {
        title: "Kontrola premlčania",
        desc: "Pred odoslaním preveríme, či nárok nie je premlčaný a či máte doklady, ktoré by na súde obstáli. Ak je s pohľadávkou problém, poviete sa to od nás — nie od protistrany.",
      },
      {
        title: "Upozornenie na následky",
        desc: "Výzva vecne opíše, čo nasleduje pri nezaplatení: súdne konanie, trovy právneho zastúpenia a exekúcia. Bez vyhrážok — presne to, čo zákon umožňuje.",
      },
      {
        title: "Priestor na dohodu",
        desc: "Ak dlžník reaguje návrhom splátok, jedno kolo komunikácie je v cene — dohodnutý splátkový kalendár s uznaním dlhu je často viac než rozsudok o dva roky.",
      },
    ],
  },

  scope: {
    overline: "Rozsah",
    heading: "Na aké pohľadávky sa hodí",
    lead: "Výzvu posielame pri pohľadávkach, ktoré majú doklad — faktúru, zmluvu, objednávku, uznanie.",
    items: [
      "Neuhradené faktúry medzi podnikateľmi",
      "Pôžičky medzi fyzickými osobami so zmluvou alebo dokladom o prevode",
      "Nedoplatky z nájmu a služieb",
      "Nezaplatené dielo, dodávky a služby",
      "Dlhy z uznania dlhu a splátkových dohôd",
      "Regresné nároky a preplatky",
    ],
  },

  steps: [
    {
      title: "Podklady",
      desc: "Pošlete faktúru či zmluvu a údaje dlžníka. Preveríme nárok, premlčanie a správne vyčíslenie príslušenstva.",
    },
    {
      title: "Výzva do 2 dní",
      desc: "Výzvu odošleme doporučene aj e-mailom do dvoch pracovných dní. Kópiu dostanete vy — viete presne, čo dlžník drží v rukách.",
    },
    {
      title: "Reakcia dlžníka",
      desc: "Platbu smerujeme priamo na váš účet. Ak dlžník navrhne splátky, jedno kolo komunikácie je v cene; dohodu odporúčame spojiť s uznaním dlhu.",
    },
    {
      title: "Ak nezaplatí",
      desc: "Navrhneme ďalší krok s pevnou cenou vopred — návrh na platobný rozkaz za 290 € + súdny poplatok. Nič nezačíname bez vášho pokynu.",
    },
  ],

  deadline: {
    heading: "Premlčanie beží — pri faktúrach rýchlejšie, než sa zdá",
    body: "Pohľadávky sa premlčujú a premlčaný nárok súd na námietku dlžníka neprizná, hoci dlh existuje. Pri obchodných vzťahoch je premlčacia doba štyri roky, pri občianskych spravidla tri; pri starších faktúrach preto rozhodujú mesiace. Výzva sama premlčanie nezastaví — ale je najrýchlejší spôsob, ako dlžníka dostať k plateniu alebo k uznaniu dlhu, ktoré beh premlčania obnoví. A ak výzva nezaberie, o premlčaní viete včas na podanie návrhu na súd — nie až keď je neskoro.",
  },

  pricing: {
    heading: "Koľko to stojí",
    lead: "Pevné ceny s DPH, viditeľné vopred. Súdne poplatky pri ďalších krokoch sa platia v skutočnej výške.",
    items: [
      {
        label: "Predžalobná výzva",
        value: "89 € s DPH",
        desc: "Preverenie nároku, vyčíslenie, odoslanie doporučene aj e-mailom a jedno kolo komunikácie s dlžníkom.",
      },
      {
        label: "Návrh na platobný rozkaz",
        value: "290 € s DPH",
        desc: "Ak dlžník nezaplatí. V upomínacom konaní je súdny poplatok polovičný oproti klasickej žalobe; platí sa v skutočnej výške.",
      },
      {
        label: "Ďalšie pohľadávky",
        value: "výhodnejšie",
        desc: "Posielate výzvy viacerým dlžníkom alebo opakovane? Cenu za ďalšie výzvy dohodneme podľa počtu — napíšte nám.",
      },
    ],
  },

  form: {
    title: "Pošlite nám podklady k dlhu",
    leads: [
      "Do dvoch pracovných dní od úplných podkladov výzva odchádza. Ak je nárok premlčaný alebo slabý, povieme vám to pred odoslaním — nie po ňom.",
    ],
    fields: [
      { name: "debtor", label: "Dlžník", placeholder: "napr. Alfa s. r. o., IČO…" },
      { name: "amount", label: "Dlžná suma", placeholder: "napr. 2 400 €" },
      { name: "due", label: "Splatnosť", placeholder: "napr. faktúra splatná 15. 5. 2026" },
    ],
    messageLabel: "Z čoho dlh vznikol",
    subject: "Predžalobná výzva — podklady",
    documents: [
      "faktúra, zmluva alebo objednávka",
      "doklad o dodaní tovaru alebo služby",
      "doterajšia komunikácia s dlžníkom, ak existuje",
    ],
    submit: "Chcem poslať výzvu za 89 €",
  },

  faq: [
    {
      q: "Musím pred žalobou posielať výzvu?",
      a: "Väčšinou to nie je zákonná povinnosť, ale takmer vždy sa oplatí: značná časť dlžníkov po výzve od advokáta zaplatí alebo sa dohodne, čo je rýchlejšie a lacnejšie než súd. A ak sa súdu nevyhnete, výzva dokumentuje, že ste sa pokúsili o zmierlivé riešenie.",
    },
    {
      q: "Čo je paušálna náhrada 40 € a kedy na ňu mám nárok?",
      a: "Pri omeškaní s platbou z obchodného vzťahu medzi podnikateľmi vzniká veriteľovi popri úrokoch nárok na paušálnu náhradu nákladov spojených s uplatnením pohľadávky 40 € — za každú pohľadávku, bez preukazovania skutočných nákladov. Do výzvy ju vyčíslime automaticky, patrí vám.",
    },
    {
      q: "Dlžník tvrdí, že nemá peniaze. Má výzva zmysel?",
      a: "Má — mení pozíciu. Ak dlžník naozaj nevie zaplatiť naraz, výsledkom výzvy býva splátkový kalendár s uznaním dlhu: dlh sa stáva nesporným, premlčanie beží odznova a pri porušení splátok máte priamu cestu na súd. Horšie je nechať dlh mlčky starnúť.",
    },
    {
      q: "Koľko ma bude stáť, ak sa pôjde na súd?",
      a: "Návrh na platobný rozkaz pripravíme za 290 €; súdny poplatok v upomínacom konaní je polovičný oproti klasickej žalobe a platí sa v skutočnej výške. Pri úspechu súd spravidla prizná náhradu trov proti dlžníkovi. Presné čísla pre vašu sumu dostanete pred rozhodnutím — nie po ňom.",
    },
    {
      q: "Pohľadávok mám viac — od rôznych dlžníkov.",
      a: "Pošlite zoznam. Pri viacerých výzvach dohodneme cenu podľa počtu a pri opakovanom vymáhaní — napríklad e-shop či správca nehnuteľností — nastavíme stály proces: vy pošlete faktúru, my vieme, čo s ňou.",
    },
  ],

  relatedServiceId: "spory",
  relatedServiceLabel: "Súdne spory a vymáhanie",
};
