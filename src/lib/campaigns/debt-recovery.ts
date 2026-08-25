import type { CampaignData } from "./types";

/**
 * Vymáhanie pohľadávok — lievik (katalóg B4): výzva 89 € → platobný rozkaz
 * 290 € (upomínacie konanie, zák. 307/2016 — vždy OS BB, polovičný poplatok)
 * → spor dohodou (max 20 % podľa § 7/§ 8 vyhl. 655/2004) → exekúcia 149 €.
 */
export const debtRecovery: CampaignData = {
  id: "debt-recovery",
  pathname: "/debt-recovery",
  group: "produkt",

  meta: {
    title: "Vymáhanie pohľadávok 2026 — od výzvy po exekúciu, pevné ceny | kohút & partners",
    description:
      "Vymáhanie pohľadávok s pevnými cenami vopred: predžalobná výzva 89 €, platobný rozkaz 290 €, návrh na exekúciu 149 €. Preveríme premlčanie skôr, než miniete ďalšie peniaze. Celá SR.",
  },

  hero: {
    overline: "Vymáhanie pohľadávok · celá SR",
    h1: "Vymáhanie pohľadávok — každý krok s pevnou cenou vopred",
    lead: "Neuhradená faktúra nie je strata, kým sa jej vzdáte. Vymáhanie vedieme po krokoch — výzva, platobný rozkaz, exekúcia — a pred každým krokom viete presne, čo stojí a akú má šancu.",
    paragraphs: [
      "Začíname preverením: či nárok nie je premlčaný, či doklady obstoja a či má dlžník z čoho platiť. Až potom odporučíme postup — vrátane úprimného „nevymáhajte, nevráti sa vám to“, ak je to tak.",
      "Väčšina pohľadávok končí skôr, než na súde: po výzve od advokáta alebo platobným rozkazom, proti ktorému dlžník nepodá odpor. Na súd ideme pripravení — a s trovami, ktoré pri úspechu znáša dlžník.",
    ],
    cta: "Chcem preveriť pohľadávku",
  },

  reasons: {
    overline: "Ako postupujeme",
    heading: "Lievik: od najlacnejšieho kroku k najúčinnejšiemu",
    lead: "Nezačíname žalobou, keď stačí výzva — a nestrácame čas výzvami, keď dlžník komunikovať nemieni.",
    items: [
      {
        title: "1 · Predžalobná výzva — 89 €",
        desc: "Výzva s vyčíslením istiny, úrokov a paušálnej náhrady 40 € odchádza do dvoch pracovných dní. Značná časť dlžníkov po nej zaplatí alebo sa dohodne.",
      },
      {
        title: "2 · Platobný rozkaz — 290 €",
        desc: "Upomínacie konanie je elektronické, so súdnym poplatkom polovičným oproti klasickej žalobe. Ak dlžník nepodá odpor, máte exekučný titul spravidla do niekoľkých týždňov.",
      },
      {
        title: "3 · Sporové konanie — dohodou",
        desc: "Ak dlžník podá odpor, vec ide do sporu. Odmenu dohodneme vopred — pevnú alebo podielovú; podielová odmena je zo zákona najviac 20 % z hodnoty veci a patrí nám len pri plnom úspechu.",
      },
      {
        title: "4 · Exekúcia — 149 €",
        desc: "S právoplatným titulom pripravíme návrh na vykonanie exekúcie. Exekútora vec vedie ďalej; my strážime, aby vymáhanie bežalo.",
      },
    ],
  },

  scope: {
    overline: "Rozsah",
    heading: "Aké pohľadávky vymáhame",
    lead: "Pohľadávky s dokladom — faktúra, zmluva, uznanie dlhu, zmenka. Pri sporných nárokoch povieme šance vopred.",
    items: [
      "Neuhradené faktúry z obchodného styku",
      "Pohľadávky zo zmlúv o dielo a dodávok",
      "Pôžičky s dokladom o poskytnutí",
      "Nájomné a služby spojené s nájmom",
      "Pohľadávky zo splátkových dohôd a uznaní dlhu",
      "Prihlásenie pohľadávky do konkurzu alebo reštrukturalizácie dlžníka",
    ],
  },

  steps: [
    {
      title: "Preverenie zadarmo",
      desc: "Pošlete doklady. Posúdime premlčanie, silu dokladov a vymožiteľnosť — a odporučíme krok, ktorým začať. Za posúdenie nič neplatíte.",
    },
    {
      title: "Výzva",
      desc: "Predžalobná výzva za 89 € do dvoch pracovných dní. Platba ide priamo na váš účet; splátková dohoda s uznaním dlhu je v cene jedného kola komunikácie.",
    },
    {
      title: "Platobný rozkaz",
      desc: "Bez reakcie dlžníka podáme návrh v upomínacom konaní za 290 € + polovičný súdny poplatok. O odpore a ďalších krokoch rozhodujete vy — s číslami na stole.",
    },
    {
      title: "Exekúcia",
      desc: "Právoplatný platobný rozkaz alebo rozsudok vymôže exekútor. Návrh na vykonanie exekúcie pripravíme za 149 €.",
    },
  ],

  deadline: {
    heading: "Štyri roky pri faktúrach, tri pri občianskych dlhoch",
    body: "Premlčacia doba je pri obchodných pohľadávkach štvorročná, pri občianskoprávnych spravidla trojročná — a beží od splatnosti. Premlčaný dlh súd na námietku dlžníka neprizná, hoci nepochybne existuje. Prax je neúprosná: čím staršia pohľadávka, tým nižšia vymožiteľnosť — dlžníci menia účty, sídla aj majetok. Pohľadávku, na ktorej vám záleží, preto nenechávajte „ešte mesiac počkať“; preverenie u nás nič nestojí a povieme vám aj to, či sa vymáhanie vôbec oplatí.",
  },

  pricing: {
    heading: "Koľko to stojí",
    lead: "Ceny s DPH, súdne poplatky v skutočnej výške. Pri úspechu na súde spravidla prizná trovy konania proti dlžníkovi.",
    items: [
      {
        label: "Výzva → rozkaz → exekúcia",
        value: "89 € · 290 € · 149 €",
        desc: "Tri pevné ceny za tri kroky. Každý ďalší krok začíname až s vaším pokynom a s vyčíslením súdneho poplatku vopred.",
      },
      {
        label: "Sporové konanie",
        value: "dohodou vopred",
        desc: "Pevná odmena alebo podielová — najviac 20 % z hodnoty veci, len pri plnom úspechu; pri neúspechu hradíte len hotové výdavky. Písomne, pred začatím.",
      },
      {
        label: "Viac pohľadávok",
        value: "podľa počtu",
        desc: "Pri balíku pohľadávok alebo pravidelnom vymáhaní nastavíme proces a cenník podľa objemu — od e-shopov po správcov bytových domov.",
      },
    ],
  },

  form: {
    title: "Pošlite pohľadávku na bezplatné preverenie",
    leads: [
      "Do troch pracovných dní vám povieme: premlčanie, sila dokladov, odporúčaný krok a jeho cena. Ak vymáhanie nedáva ekonomický zmysel, povieme aj to.",
    ],
    fields: [
      { name: "debtor", label: "Dlžník", placeholder: "napr. Beta s. r. o. / fyzická osoba" },
      { name: "amount", label: "Dlžná suma", placeholder: "napr. 7 800 €" },
      { name: "age", label: "Splatnosť pohľadávky", placeholder: "napr. faktúry z januára 2026" },
    ],
    messageLabel: "Z čoho pohľadávka vznikla a čo už prebehlo",
    subject: "Vymáhanie pohľadávky — podklady",
    documents: [
      "faktúry, zmluva alebo objednávka",
      "doklady o dodaní a doterajšia komunikácia",
      "uznanie dlhu alebo splátková dohoda, ak existujú",
    ],
    submit: "Chcem bezplatné preverenie",
  },

  faq: [
    {
      q: "Aká je šanca, že peniaze reálne uvidím?",
      a: "Závisí od troch vecí: veku pohľadávky, dokladov a majetku dlžníka. Preto začíname preverením — je zadarmo a jeho výsledkom je aj odhad vymožiteľnosti. Vymáhať pohľadávku bez šance vám neodporučíme; stálo by vás to ďalšie peniaze.",
    },
    {
      q: "Čo je upomínacie konanie a prečo ním začíname?",
      a: "Elektronické konanie o platobnom rozkaze so súdnym poplatkom polovičným oproti klasickej žalobe. Návrhy vybavuje jediný súd pre celé Slovensko a pri nesporných faktúrach je to najrýchlejšia cesta k exekučnému titulu. Ak dlžník podá odpor, vec pokračuje ako bežný spor — o tom, či doň ísť, rozhodnete s našimi číslami na stole.",
    },
    {
      q: "Dlžník skončil v konkurze. Je koniec?",
      a: "Nie, ale mení sa postup: pohľadávku treba prihlásiť v lehote do konkurzu alebo reštrukturalizácie, inak sa na ňu neprihliada. Prihlášku pripravíme — a insolvencie sú naša hlavná špecializácia, takže vám povieme aj reálne vyhliadky uspokojenia.",
    },
    {
      q: "Môžem vymáhať aj úroky a náklady?",
      a: "Áno. K istine patria úroky z omeškania — zákonné alebo dohodnuté — a medzi podnikateľmi aj paušálna náhrada nákladov 40 € za každú pohľadávku. Pri úspešnom súdnom vymáhaní spravidla aj náhrada trov konania. Všetko vyčíslime už vo výzve.",
    },
    {
      q: "Dlžník mi ponúka polovicu hneď. Mám ju vziať?",
      a: "Niekedy áno — vták v hrsti má svoju hodnotu, najmä pri neistom majetku dlžníka. Pomôžeme vám ponuku posúdiť proti šanci a nákladom vymáhania a dohodu napíšeme tak, aby zvyšok dlhu nezanikol omylom, ak to nechcete.",
    },
  ],

  relatedServiceId: "spory",
  relatedServiceLabel: "Súdne spory a vymáhanie",
};
