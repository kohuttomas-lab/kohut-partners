import type { CampaignData } from "./types";

/** Zamietnuté alebo krátené poistné plnenie. Premlčanie: § 104 OZ. */
export const insuranceClaim: CampaignData = {
  id: "insurance-claim",
  pathname: "/insurance-claim",

  meta: {
    title: "Zamietnuté poistné plnenie — čo s tým | kohút & partners",
    description:
      "Poisťovňa zamietla alebo krátila poistné plnenie? Posúdime zamietací list zadarmo a povieme, či má zmysel nárok uplatniť. Advokátska kancelária, celá SR.",
  },

  hero: {
    overline: "Spory s poisťovňami · celá SR",
    h1: "Zamietli vám poistné plnenie?",
    lead: "Zamietnutie ani krátenie plnenia nie je rozhodnutie, proti ktorému sa nedá nič robiť. Je to stanovisko poisťovne — a to sa dá preveriť, rozporovať a v prípade potreby aj zažalovať.",
    paragraphs: [
      "Pošlite nám zamietací list. Do troch pracovných dní vám napíšeme, či nárok podľa nás obstojí, čo by sa dalo namietať a aké sú realistické možnosti. Za toto posúdenie nič neplatíte.",
      "Vec vedieme na diaľku pre klientov z celého Slovenska. Vecne príslušný súd sa určuje podľa sídla poisťovne, takže na tom, kde bývate, nezáleží — komunikujeme e-mailom, telefonicky aj cez videohovor.",
    ],
    cta: "Poslať zamietací list",
  },

  reasons: {
    overline: "Čo sa dá namietať",
    heading: "Dôvody zamietnutia, ktoré sa oplatí preveriť",
    lead: "Nie každé zamietnutie je nesprávne. Toto sú ale odôvodnenia, s ktorými sa v praxi stretávame najčastejšie a ktoré po preskúmaní podkladov často neobstoja.",
    items: [
      {
        title: "Extenzívne vykladaná výluka",
        desc: "Poisťovňa oprie zamietnutie o výluku v poistných podmienkach, ktorá na vašu situáciu v skutočnosti nedopadá. Výluky sa vykladajú reštriktívne — nejasnosť v podmienkach nemôže ísť na ťarchu klienta.",
      },
      {
        title: "Porušenie povinnosti bez príčinnej súvislosti",
        desc: "Tvrdí sa, že ste porušili nejakú povinnosť z poistnej zmluvy. Krátiť plnenie však možno len vtedy, ak to porušenie malo podstatný vplyv na vznik alebo rozsah škody.",
      },
      {
        title: "Nesprávne posúdená príčina škody",
        desc: "Záver o príčine vzniká často z jednej obhliadky bez znalca. Ak sa opiera o odborne slabý podklad, dá sa spochybniť vlastným znaleckým posudkom.",
      },
      {
        title: "Oneskorené nahlásenie",
        desc: "Neskoré hlásenie poistnej udalosti samo osebe nárok neruší. Podstatné je, či tým poisťovni vznikla ujma pri zisťovaní skutkového stavu.",
      },
      {
        title: "Podhodnotená výška škody",
        desc: "Plnenie sa vypláca, ale výrazne nižšie, než škoda reálne predstavuje — typicky nesprávnym odpočtom amortizácie alebo použitím zastaraných cenníkov prác a materiálu.",
      },
      {
        title: "Tvrdené zamlčanie pri uzatváraní zmluvy",
        desc: "Poisťovňa argumentuje, že ste pri uzatváraní zmluvy neuviedli podstatnú skutočnosť. Rozhoduje, na čo sa vás vôbec pýtala a či tú skutočnosť mohla sama zistiť.",
      },
    ],
  },

  scope: {
    overline: "Rozsah",
    heading: "Ktoré poistenia riešime",
    lead: "Rovnako riešime aj krátené plnenie — teda situáciu, keď poisťovňa zaplatí, ale výrazne menej, než škoda reálne predstavuje. V praxi je to častejšie než úplné zamietnutie.",
    items: [
      "Poistenie nehnuteľnosti a domácnosti",
      "Havarijné poistenie",
      "Povinné zmluvné poistenie (PZP)",
      "Poistenie zodpovednosti za škodu",
      "Životné a úrazové poistenie",
      "Poistenie schopnosti splácať úver",
      "Poistenie podnikateľských rizík",
      "Cestovné poistenie",
    ],
  },

  steps: [
    {
      title: "Posúdenie zadarmo",
      desc: "Pošlete zamietací list, poistnú zmluvu a poistné podmienky. Do troch pracovných dní od vás dostanete písomné stanovisko, či má zmysel pokračovať.",
    },
    {
      title: "Výzva poisťovni",
      desc: "Ak nárok obstojí, spíšeme odôvodnenú výzvu s právnou argumentáciou a doplníme chýbajúce podklady. Časť vecí sa uzavrie už v tomto kroku.",
    },
    {
      title: "Rokovanie, prípadne podnet NBS",
      desc: "Vedieme rokovanie o dorovnaní plnenia. Tam, kde je namieste dohľadový zásah, podávame podnet Národnej banke Slovenska.",
    },
    {
      title: "Žaloba a súd",
      desc: "Ak poisťovňa neustúpi, podáme žalobu alebo návrh na vydanie platobného rozkazu a zastupujeme vás až do právoplatného rozhodnutia.",
    },
  ],

  deadline: {
    heading: "Nenechajte nárok premlčať",
    body: "Právo na plnenie z poistenia sa premlčuje v trojročnej lehote, ktorá začína plynúť až rok po vzniku poistnej udalosti (§ 104 Občianskeho zákonníka). Zamietavý list poisťovne túto lehotu nezastaví ani nepredĺži — plynie ďalej aj počas toho, ako sa s poisťovňou dohadujete. Čím skôr sa ozvete, tým viac možností zostáva otvorených.",
  },

  pricing: {
    heading: "Koľko to stojí",
    lead: "Cenu poznáte skôr, než čokoľvek podpíšete. Žiadne hodinové sadzby, pri ktorých neviete, kde sa zastavia.",
    items: [
      {
        label: "Posúdenie zamietacieho listu",
        value: "zadarmo",
        desc: "Preštudujeme zamietací list, zmluvu a poistné podmienky a napíšeme vám, ako to vidíme. Nezaväzuje vás to k ničomu.",
      },
      {
        label: "Konzultácia (30 min)",
        value: "50 € s DPH",
        desc: "Osobne, telefonicky alebo cez videohovor. Prejdeme možnosti, riziká a realistický odhad, čo sa dá dosiahnuť.",
      },
      {
        label: "Zastupovanie vo veci",
        value: "pevná cena alebo podiel na výsledku",
        desc: "Pri vhodných veciach vieme dohodnúť podielovú odmenu — podľa vyhlášky najviac 20 % z hodnoty veci, splatnú pri plnom úspechu. Pri neúspechu sa hradia len hotové výdavky (súdny poplatok, znalec, poštovné).",
      },
    ],
  },

  form: {
    title: "Pošlite nám zamietací list",
    leads: [
      "Do troch pracovných dní vám napíšeme, či nárok podľa nás obstojí a čo by sa dalo namietať. Za posúdenie nič neplatíte a k ničomu vás nezaväzuje.",
      "Ak vec podľa nás nemá šancu, povieme vám to rovno — nemá zmysel, aby ste do sporu išli s falošnými očakávaniami.",
    ],
    fields: [
      { name: "insurer", label: "Poisťovňa", placeholder: "napr. Allianz, Generali…" },
      { name: "eventDate", label: "Kedy sa udalosť stala", placeholder: "napr. marec 2025" },
      { name: "amount", label: "O akú sumu ide (orientačne)", placeholder: "napr. 8 000 €" },
    ],
    messageLabel: "Čo sa stalo a ako to poisťovňa odôvodnila",
    subject: "Zamietnuté poistné plnenie — podklady",
    documents: [
      "zamietací (alebo oznamovací) list poisťovne",
      "poistnú zmluvu a poistné podmienky",
      "hlásenie škody a fotodokumentáciu, ak ich máte",
    ],
    submit: "Chcem bezplatné posúdenie",
  },

  faq: [
    {
      q: "Poisťovňa mi zamietla plnenie. Aká je šanca, že s tým niečo urobíme?",
      a: "Poctivá odpoveď je, že to bez podkladov nevie posúdiť nikto. Preto začíname bezplatným posúdením — preštudujeme zamietací list, poistnú zmluvu a poistné podmienky a napíšeme vám, čo sa dá namietať a čo nie. Ak vec podľa nás nemá šancu, povieme vám to rovno; nemá zmysel, aby ste do sporu išli s falošnými očakávaniami.",
    },
    {
      q: "Čo všetko vám mám poslať?",
      a: "Ideálne zamietací (alebo oznamovací) list poisťovne, poistnú zmluvu a poistné podmienky platné v čase poistnej udalosti, hlásenie škody a fotodokumentáciu, ak ju máte. Ak niečo z toho nemáte, nevadí — pošlite, čo máte po ruke, a zvyšok doriešime.",
    },
    {
      q: "Musím kvôli tomu cestovať do Zvolena?",
      a: "Nie. Vec vedieme na základe plnomocenstva a komunikujeme e-mailom, telefonicky alebo cez videohovor, takže miesto vášho bydliska nehrá rolu. Osobne sa stretneme, len ak si to sami budete priať alebo ak to bude vec vyžadovať.",
    },
    {
      q: "Poisťovňa mi zaplatila, ale výrazne menej, než škoda stála. Rieši sa to rovnako?",
      a: "Áno, aj krátené plnenie je vymáhateľný nárok a v praxi je častejšie než úplné zamietnutie. Najčastejšie ide o nesprávne uplatnenú amortizáciu alebo o rozpočet postavený na zastaraných cenách prác a materiálu. Preveríme, ako poisťovňa k sume dospela, a rozdiel uplatníme.",
    },
    {
      q: "Má zmysel podať sťažnosť na Národnú banku Slovenska?",
      a: "NBS vykonáva dohľad nad poisťovňami a jej podnet vie pomôcť tam, kde poisťovňa nedodržala postup pri likvidácii — napríklad nekonala v lehotách alebo zamietnutie riadne neodôvodnila. NBS ale nerozhoduje o vašom nároku a peniaze vám nepriprisúdi; to vie urobiť len súd. Preto podnet používame ako doplnok, nie ako náhradu uplatnenia nároku.",
    },
    {
      q: "Do kedy sa dá nárok uplatniť?",
      a: "Právo na poistné plnenie sa premlčuje v trojročnej lehote plynúcej rok po vzniku poistnej udalosti (§ 104 Občianskeho zákonníka). Ak sa poistná udalosť stala pred viac ako tromi rokmi, ozvite sa čo najskôr — lehotu treba prepočítať prednostne.",
    },
    {
      q: "Ako je to s odmenou, ak spor nevyjde?",
      a: "Pri vhodných veciach dohodneme podielovú odmenu — podľa § 7 ods. 2 vyhlášky 655/2004 najviac 20 % z hodnoty veci, splatnú pri plnom úspechu vo veci. Ak úspech nenastane, máme podľa § 8 ods. 3 tej istej vyhlášky nárok len na náhradu hotových výdavkov, teda súdneho poplatku, znalečného a podobných nákladov. Presné podmienky si dohodneme písomne vopred.",
    },
  ],

  relatedServiceId: "spory",
  relatedServiceLabel: "Súdne spory a vymáhanie",
};
