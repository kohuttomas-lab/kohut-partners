import type { CampaignData } from "./types";

/**
 * Bezúročnosť spotrebiteľského úveru.
 * § 11 zák. 129/2010 Z. z.: úver sa považuje za bezúročný a bez poplatkov
 * o. i. ak zmluva nemá písomnú formu, chýbajú náležitosti podľa § 9 ods. 2
 * písm. d), e), g) až i), l) a p), RPMN je uvedená nesprávne v neprospech
 * spotrebiteľa, RPMN prekračuje najvyššiu prípustnú odplatu, úver nebol
 * poskytnutý bezhotovostne predpísaným spôsobom, alebo veriteľ hrubo porušil
 * povinnosť posúdiť schopnosť splácať (§ 11 ods. 2); pri samotnom
 * nedodržaní odbornej starostlivosti nemôže veriteľ žiadať jednorazové splatenie.
 */
export const consumerCredit: CampaignData = {
  id: "consumer-credit",
  pathname: "/consumer-credit",

  meta: {
    title:
      "Bezúročný spotrebiteľský úver — preverenie zmluvy | kohút & partners",
    description:
      "Chyba v úverovej zmluve môže znamenať, že vraciate len požičanú sumu — bez úrokov a poplatkov. Preveríme zmluvu zadarmo. Advokátska kancelária, celá SR.",
  },

  hero: {
    overline: "Spotrebiteľské úvery · celá SR",
    h1: "Váš úver môže byť zo zákona bezúročný",
    lead: "Ak zmluva o spotrebiteľskom úvere nespĺňa zákonné náležitosti, považuje sa za bezúročnú a bez poplatkov. Vraciate potom len to, čo vám bolo požičané — a preplatky sa dajú žiadať späť.",
    paragraphs: [
      "Pošlite nám úverovú zmluvu. Do troch pracovných dní vám napíšeme, či v nej vidíme dôvod bezúročnosti a čo by to pre vás číselne znamenalo. Za toto preverenie nič neplatíte.",
      "Vec vedieme na diaľku pre klientov z celého Slovenska — komunikujeme e-mailom, telefonicky aj cez videohovor. Týka sa to úverov od bánk, splátkových spoločností aj nebankoviek.",
    ],
    cta: "Poslať zmluvu na preverenie",
  },

  reasons: {
    overline: "Čo sa dá namietať",
    heading: "Chyby, ktoré robia úver bezúročným",
    lead: "Dôvody bezúročnosti stanovuje § 11 zákona o spotrebiteľských úveroch taxatívne. Toto sú tie, ktoré sa v zmluvách objavujú najčastejšie.",
    items: [
      {
        title: "Nesprávna RPMN",
        desc: "Ročná percentuálna miera nákladov uvedená nesprávne v neprospech spotrebiteľa robí úver bezúročným. Prepočet RPMN je pritom čisto matematická kontrola, ktorú vieme urobiť z údajov v zmluve.",
      },
      {
        title: "Chýbajúce povinné náležitosti",
        desc: "Zmluva musí obsahovať okrem iného dobu trvania, výšku a termíny splátok či celkovú čiastku, ktorú spotrebiteľ zaplatí. Ak niektorá z náležitostí podľa § 9 ods. 2 chýba, úver je bezúročný.",
      },
      {
        title: "Neprípustne vysoká odplata",
        desc: "Ak RPMN prekračuje najvyššiu prípustnú výšku odplaty podľa predpisov, úver je bezúročný a bez poplatkov. Týka sa najmä starších úverov od nebankových veriteľov.",
      },
      {
        title: "Neposúdená schopnosť splácať",
        desc: "Ak veriteľ poskytol úver bez akýchkoľvek údajov o vašich príjmoch a výdavkoch alebo bez nahliadnutia do úverového registra, ide o hrubé porušenie odbornej starostlivosti a úver je bezúročný a bez poplatkov. Už pri samotnom nedodržaní odbornej starostlivosti navyše veriteľ nie je oprávnený žiadať jednorazové splatenie celého úveru (§ 11 ods. 2).",
      },
      {
        title: "Nesprávny spôsob poskytnutia",
        desc: "Úver musí byť poskytnutý bezhotovostne na účet spotrebiteľa, poštovým poukazom alebo platobným prostriedkom na jeho meno. Hotovostné vyplatenie „na ruku“ robí úver bezúročným.",
      },
      {
        title: "Neprijateľné zmluvné podmienky",
        desc: "Popri bezúročnosti sa dajú napadnúť aj jednotlivé neprijateľné podmienky — sankčné úroky, poplatky za upomienky či rozhodcovské doložky. Tie sú neplatné, aj keď zvyšok zmluvy obstojí.",
      },
    ],
  },

  scope: {
    overline: "Rozsah",
    heading: "Ktoré úvery a situácie riešime",
    lead: "Preverenie má zmysel pri splácaných aj splatených úveroch — plnenie z bezúročného úveru nad požičanú istinu je bezdôvodné obohatenie, ktoré sa dá žiadať späť.",
    items: [
      "Spotrebiteľské úvery od bánk",
      "Úvery od splátkových a lízingových spoločností",
      "Pôžičky od nebankových veriteľov",
      "Kreditné karty a povolené prečerpania",
      "Refinancované a konsolidované úvery",
      "Vrátenie preplatkov zo splatených úverov",
      "Obrana proti žalobám veriteľov a inkasných spoločností",
      "Postúpené pohľadávky vymáhané inkasnými agentúrami",
    ],
  },

  steps: [
    {
      title: "Preverenie zadarmo",
      desc: "Pošlete úverovú zmluvu. Do troch pracovných dní vám napíšeme, či v nej vidíme dôvod bezúročnosti a koľko by to pre vás znamenalo.",
    },
    {
      title: "Prepočet úveru",
      desc: "Prepočítame, čo ste zaplatili a čo ste pri bezúročnom úvere zaplatiť mali. Rozdiel je preplatok, ktorý sa dá žiadať späť.",
    },
    {
      title: "Výzva veriteľovi",
      desc: "Uplatníme bezúročnosť voči veriteľovi — pri splácanom úvere úpravou zostatku, pri splatenom vrátením preplatku.",
    },
    {
      title: "Žaloba a súd",
      desc: "Ak veriteľ neustúpi, podáme žalobu a zastupujeme vás až do právoplatného rozhodnutia. Súd na neprijateľné podmienky prihliada aj z úradnej povinnosti.",
    },
  ],

  deadline: {
    heading: "Preplatky sa premlčujú priebežne",
    body: "Nárok na vrátenie toho, čo ste zaplatili nad rámec bezúročného úveru, je bezdôvodné obohatenie a premlčuje sa. Každou splátkou, ktorá odíde, a každým mesiacom, ktorý uplynie, sa časť nároku môže strácať. Ak úver ešte splácate, preverenie má zmysel hneď — bezúročnosť zníži zostatok dlhu do budúcna bez ohľadu na premlčanie minulých preplatkov.",
  },

  pricing: {
    heading: "Koľko to stojí",
    lead: "Cenu poznáte skôr, než čokoľvek podpíšete. Hodnota veci je rozdiel medzi tým, čo platíte, a tým, čo by ste platili pri bezúročnom úvere — vyčíslime ju pri preverení.",
    items: [
      {
        label: "Preverenie zmluvy",
        value: "zadarmo",
        desc: "Preštudujeme úverovú zmluvu, prepočítame RPMN a napíšeme vám, či vidíme dôvod bezúročnosti. Nezaväzuje vás to k ničomu.",
      },
      {
        label: "Konzultácia (30 min)",
        value: "50 € s DPH",
        desc: "Osobne, telefonicky alebo cez videohovor. Prejdeme prepočet, možnosti a postup voči veriteľovi.",
      },
      {
        label: "Zastupovanie vo veci",
        value: "pevná cena alebo podiel na výsledku",
        desc: "Pri vhodných veciach vieme dohodnúť podielovú odmenu — podľa vyhlášky najviac 20 % z hodnoty veci, splatnú pri plnom úspechu. Pri neúspechu sa hradia len hotové výdavky (súdny poplatok, znalec, poštovné).",
      },
    ],
  },

  form: {
    title: "Pošlite nám úverovú zmluvu",
    leads: [
      "Do troch pracovných dní vám napíšeme, či v zmluve vidíme dôvod bezúročnosti a čo by to pre vás číselne znamenalo. Za preverenie nič neplatíte.",
      "Ak je zmluva v poriadku, povieme vám to rovno — nebudeme vymýšľať spor tam, kde nie je.",
    ],
    fields: [
      {
        name: "creditor",
        label: "Veriteľ",
        placeholder: "banka / splátková spoločnosť / nebankovka",
      },
      {
        name: "signedDate",
        label: "Kedy ste zmluvu podpísali",
        placeholder: "napr. jún 2022",
      },
      { name: "amount", label: "Požičaná suma", placeholder: "napr. 6 000 €" },
    ],
    messageLabel:
      "Stav úveru — splácate, splatili ste, alebo vás niekto vymáha?",
    subject: "Preverenie spotrebiteľského úveru — podklady",
    documents: [
      "úverovú zmluvu vrátane všeobecných obchodných podmienok",
      "splátkový kalendár, ak bol súčasťou",
      "prehľad zaplatených splátok alebo výpisy, ak ich máte",
    ],
    submit: "Chcem bezplatné preverenie",
  },

  faq: [
    {
      q: "Čo presne znamená, že je úver „bezúročný a bez poplatkov“?",
      a: "Znamená to, že veriteľovi vraciate len požičanú istinu — bez úrokov, poplatkov a iných nákladov. Všetko, čo ste nad istinu už zaplatili, je bezdôvodné obohatenie veriteľa. Pri splácanom úvere sa o preplatok zníži zostatok, pri splatenom sa dá žiadať späť.",
    },
    {
      q: "Úver som už dávno splatil. Má preverenie ešte zmysel?",
      a: "Môže mať, ale rozhoduje premlčanie — nároky na vrátenie preplatkov sa premlčujú priebežne. Preto potrebujeme vidieť zmluvu a dátumy platieb; z nich vieme povedať, ktorá časť preplatkov je ešte vymáhateľná.",
    },
    {
      q: "Vymáha ma inkasná spoločnosť. Pomôže mi to?",
      a: "Práve tam býva preverenie najúčinnejšie. Inkasné spoločnosti vymáhajú postúpené pohľadávky vrátane úrokov a sankcií — ak je úver bezúročný, vymáhaná suma sa zásadne zníži a časť nárokov môže byť aj premlčaná. Obrana má zmysel aj po doručení platobného rozkazu, tam ale bežia krátke lehoty, preto sa ozvite hneď.",
    },
    {
      q: "Ako viete, že je RPMN nesprávna?",
      a: "RPMN je matematický údaj vypočítateľný z výšky úveru, splátok a poplatkov. Prepočítame ju z čísel v zmluve — ak vyjde vyššia, než je v zmluve uvedené, je uvedená v neprospech spotrebiteľa a úver je zo zákona bezúročný. Nie je to vec názoru, ale výpočtu.",
    },
    {
      q: "Nezhorší sa mi tým vzťah s bankou alebo úverový register?",
      a: "Uplatnenie zákonného nároku nie je porušením zmluvy a nezapisuje sa do úverového registra. Počas sporu ale odporúčame splátky riadne platiť, kým sa zostatok právne nevyjasní — o tom, ako presne postupovať, sa dohodneme pri preverení.",
    },
    {
      q: "Ako je to s odmenou, ak vec nevyjde?",
      a: "Pri vhodných veciach dohodneme podielovú odmenu — podľa § 7 ods. 2 vyhlášky 655/2004 najviac 20 % z hodnoty veci, splatnú pri plnom úspechu vo veci. Ak úspech nenastane, máme podľa § 8 ods. 3 nárok len na náhradu hotových výdavkov. Presné podmienky si dohodneme písomne vopred.",
    },
  ],

  relatedServiceId: "spory",
  relatedServiceLabel: "Súdne spory a vymáhanie",
};
