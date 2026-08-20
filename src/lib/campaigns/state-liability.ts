import type { CampaignData } from "./types";

/**
 * Náhrada škody spôsobenej štátom (zák. 514/2003 Z. z.).
 * § 15–16: nárok treba vopred predbežne prerokovať písomnou žiadosťou;
 * ak orgán do 6 mesiacov neuspokojí, možno sa domáhať na súde.
 * § 17: uhrádza sa skutočná škoda a ušlý zisk; ak konštatovanie porušenia
 * nestačí, aj nemajetková ujma v peniazoch.
 * § 16 ods. 4: na súde možno požadovať úhradu len v rozsahu nároku a z titulu,
 * ktoré boli predbežne prerokované.
 * § 17 ods. 4: nemajetková ujma nesmie presiahnuť náhradu pre obete násilných
 * trestných činov.
 * § 19: premlčanie 3 roky od vedomosti o škode; ak je podmienkou zrušenie
 * rozhodnutia, od doručenia zrušujúceho rozhodnutia. Ods. 3 — lehota NEPLYNIE
 * počas predbežného prerokovania (najdlhšie 6 mesiacov). Ods. 2 — objektívna
 * hranica 10 rokov okrem škody na zdraví.
 */
export const stateLiability: CampaignData = {
  id: "state-liability",
  pathname: "/state-liability",

  meta: {
    title:
      "Náhrada škody od štátu — prieťahy a nezákonné rozhodnutia | kohút & partners",
    description:
      "Súd či úrad rozhodol nezákonne alebo koná neprimerane dlho? Štát za to zodpovedá. Posúdime nárok podľa zákona 514/2003 zadarmo. Celá SR.",
  },

  hero: {
    overline: "Zodpovednosť štátu · celá SR",
    h1: "Škodu spôsobenú štátom platí štát",
    lead: "Nezákonné rozhodnutie, zrušené obvinenie, neprimerané prieťahy v konaní — za to všetko štát zodpovedá bez ohľadu na zavinenie. Nárok ale treba uplatniť správnym postupom a včas.",
    paragraphs: [
      "Pošlite nám rozhodnutie a opíšte, čo sa stalo. Do troch pracovných dní vám napíšeme, či nárok podľa nás obstojí, voči ktorému orgánu sa uplatňuje a aké má zložky. Za toto posúdenie nič neplatíte.",
      "Vec vedieme na diaľku pre klientov z celého Slovenska. Konanie začína povinnou žiadosťou o predbežné prerokovanie — správne pripravená žiadosť často vyrieši vec bez súdu.",
    ],
    cta: "Poslať vec na posúdenie",
  },

  reasons: {
    overline: "Za čo štát zodpovedá",
    heading: "Typické situácie, v ktorých nárok vzniká",
    lead: "Zákon 514/2003 pokrýva nezákonné rozhodnutia aj nesprávny úradný postup — a zodpovednosť štátu je objektívna, teda bez ohľadu na to, či niekto konkrétny pochybil úmyselne.",
    items: [
      {
        title: "Zrušené alebo zastavené trestné stíhanie",
        desc: "Ak bolo obvinenie zrušené alebo stíhanie skončilo oslobodením či zastavením, máte nárok na náhradu škody vrátane trov obhajoby a ušlého zisku — a spravidla aj nemajetkovej ujmy.",
      },
      {
        title: "Nezákonné rozhodnutie úradu alebo súdu",
        desc: "Rozhodnutie zrušené pre nezákonnosť zakladá nárok na náhradu škody, ktorá jeho výkonom vznikla. Podmienkou je, že ste proti nemu využili dostupné opravné prostriedky.",
      },
      {
        title: "Neprimerané prieťahy v konaní",
        desc: "Konanie, ktoré trvá neprimerane dlho, je nesprávny úradný postup. Popri majetkovej škode sa uhrádza aj nemajetková ujma v peniazoch, ak samotné konštatovanie porušenia nestačí (§ 17 ods. 2).",
      },
      {
        title: "Nečinnosť orgánu",
        desc: "Aj to, že orgán v zákonnej lehote nekoná vôbec — nevydá rozhodnutie, nevykoná úkon — je nesprávny úradný postup so zodpovednosťou štátu.",
      },
      {
        title: "Nezákonná väzba a zadržanie",
        desc: "Za rozhodnutie o väzbe či zadržaní, ktoré neobstálo, patrí náhrada škody aj nemajetkovej ujmy za obmedzenie osobnej slobody.",
      },
      {
        title: "Pochybenia katastra a exekútorov",
        desc: "Nesprávny úradný postup katastra, exekútora či notára ako súdneho komisára tiež zakladá zodpovednosť štátu — typicky pri chybných zápisoch alebo nesprávne vedenej exekúcii.",
      },
    ],
  },

  scope: {
    overline: "Rozsah",
    heading: "Čo sa dá nahradiť",
    lead: "Náhrada nie je len symbolická — uhrádza sa skutočná škoda, ušlý zisk a v odôvodnených prípadoch aj nemajetková ujma v peniazoch (§ 17). Nemajetková ujma má však zákonný strop: nemôže byť vyššia ako náhrada poskytovaná osobám poškodeným násilnými trestnými činmi (§ 17 ods. 4).",
    items: [
      "Skutočná škoda vrátane trov predchádzajúcich konaní",
      "Trovy obhajoby pri zrušenom trestnom stíhaní",
      "Ušlý zisk podnikateľa aj strata na zárobku",
      "Nemajetková ujma v peniazoch",
      "Ujma za neprimeranú dĺžku konania",
      "Ujma za nezákonnú väzbu a obmedzenie slobody",
      "Škoda z chybného zápisu v katastri",
      "Škoda spôsobená exekútorom alebo notárom",
    ],
  },

  steps: [
    {
      title: "Posúdenie zadarmo",
      desc: "Pošlete rozhodnutie a opis situácie. Do troch pracovných dní vám napíšeme, či nárok obstojí, aké má zložky a voči ktorému orgánu sa uplatňuje.",
    },
    {
      title: "Žiadosť o predbežné prerokovanie",
      desc: "Nárok treba najprv písomne uplatniť u príslušného orgánu (§ 15). Žiadosť pripravíme so všetkými náležitosťami vrátane vyčíslenia. Na súde potom možno požadovať úhradu len v rozsahu nároku a z titulu, ktoré boli predbežne prerokované (§ 16 ods. 4) — čo sa v žiadosti podhodnotí, to sa už v žalobe nedohoní.",
    },
    {
      title: "Šesťmesačná lehota orgánu",
      desc: "Orgán má šesť mesiacov na uspokojenie nároku. Počas nej komunikujeme, dopĺňame podklady a rokujeme o výške náhrady.",
    },
    {
      title: "Žaloba a súd",
      desc: "Ak orgán nárok neuspokojí alebo uspokojí len sčasti, podáme žalobu a zastupujeme vás až do právoplatného rozhodnutia.",
    },
  ],

  deadline: {
    heading: "Tri roky — a povinný predkrok",
    body: "Právo na náhradu škody sa premlčuje za tri roky odo dňa, keď ste sa o škode dozvedeli; ak je podmienkou zrušenie rozhodnutia, lehota beží od doručenia zrušujúceho rozhodnutia (§ 19). Pred žalobou je navyše povinné predbežné prerokovanie nároku u príslušného orgánu — bez neho súd žalobu neprejedná. Počas predbežného prerokovania premlčacia lehota neplynie — odo dňa podania žiadosti do skončenia prerokovania, najdlhšie však šesť mesiacov (§ 19 ods. 3). Najneskôr sa právo premlčí za desať rokov odo dňa, keď vám bolo doručené rozhodnutie, ktorým škoda vznikla; to neplatí pri škode na zdraví (§ 19 ods. 2).",
  },

  pricing: {
    heading: "Koľko to stojí",
    lead: "Cenu poznáte skôr, než čokoľvek podpíšete. Súčasťou úspešného nároku je aj náhrada trov uplatnenia.",
    items: [
      {
        label: "Posúdenie nároku",
        value: "zadarmo",
        desc: "Preštudujeme rozhodnutia a opíšeme vám, či nárok obstojí, aké má zložky a čo treba preukázať. Nezaväzuje vás to k ničomu.",
      },
      {
        label: "Konzultácia (30 min)",
        value: "50 € s DPH",
        desc: "Osobne, telefonicky alebo cez videohovor. Prejdeme nároky, dôkazy a realistický odhad výšky náhrady.",
      },
      {
        label: "Zastupovanie vo veci",
        value: "pevná cena alebo podiel na výsledku",
        desc: "Pri vhodných veciach vieme dohodnúť podielovú odmenu — podľa vyhlášky najviac 20 % z hodnoty veci, splatnú pri plnom úspechu. Pri neúspechu sa hradia len hotové výdavky (súdny poplatok, znalec, poštovné).",
      },
    ],
  },

  form: {
    title: "Opíšte nám, čo sa stalo",
    leads: [
      "Do troch pracovných dní vám napíšeme, či nárok podľa nás obstojí, voči ktorému orgánu sa uplatňuje a aké má zložky. Za posúdenie nič neplatíte.",
      "Ak nárok šancu nemá — napríklad preto, že neboli vyčerpané opravné prostriedky — povieme vám to rovno aj s tým, či sa to ešte dá napraviť.",
    ],
    fields: [
      {
        name: "authority",
        label: "Ktorý orgán vo veci konal",
        placeholder: "súd / prokuratúra / úrad / exekútor",
      },
      {
        name: "caseNumber",
        label: "Spisová značka, ak ju máte",
        placeholder: "napr. 12C/45/2021",
      },
      {
        name: "duration",
        label: "Ako dlho konanie trvá / trvalo",
        placeholder: "napr. od roku 2019",
      },
    ],
    messageLabel: "Čo sa stalo a aká škoda vám vznikla",
    subject: "Náhrada škody od štátu — podklady",
    documents: [
      "rozhodnutie, ktoré bolo zrušené, alebo posledné rozhodnutie vo veci",
      "doklady o vzniknutej škode (faktúry za obhajobu, doklady o ušlom zisku)",
      "prehľad priebehu konania, ak namietate prieťahy",
    ],
    submit: "Chcem bezplatné posúdenie",
  },

  faq: [
    {
      q: "Trestné stíhanie proti mne bolo zastavené. Na čo mám nárok?",
      a: "Ustálená rozhodovacia prax vychádza z toho, že vznesené obvinenie, ktoré neskončilo právoplatným odsúdením, sa posudzuje ako nezákonné rozhodnutie. Nahrádzajú sa najmä trovy obhajoby, ušlý zisk či strata na zárobku a spravidla aj nemajetková ujma — jej výška sa určuje podľa zákonných kritérií — osoby poškodeného a prostredia, v ktorom žije a pracuje, závažnosti ujmy a okolností jej vzniku a závažnosti následkov v súkromnom živote aj v spoločenskom uplatnení (§ 17 ods. 3).",
    },
    {
      q: "Moje súdne konanie trvá už mnoho rokov. Je to prieťah?",
      a: "Neprimeranosť dĺžky sa posudzuje podľa zložitosti veci, správania účastníkov a postupu súdu — nie je daná konkrétnym počtom rokov. Užitočné je najprv podať sťažnosť na prieťahy, prípadne sa obrátiť na Ústavný súd; úspešná sťažnosť je silným podkladom pre nárok na náhradu. Pri posúdení vám povieme, ktorý krok má vo vašej veci zmysel ako prvý.",
    },
    {
      q: "Prečo sa nedá žalovať rovno?",
      a: "Zákon vyžaduje predbežné prerokovanie nároku: nárok treba najprv písomne uplatniť u príslušného orgánu, ktorý má šesť mesiacov na jeho uspokojenie (§ 15 a 16). Až potom — alebo po písomnom odmietnutí — je otvorená cesta na súd. Nie je to formalita: kvalitne pripravená žiadosť s vyčíslením vie vec uzavrieť bez súdneho konania.",
    },
    {
      q: "Musel som proti rozhodnutiu podať odvolanie, aby mi nárok vznikol?",
      a: "Pri nezákonnom rozhodnutí zákon spravidla vyžaduje, aby ste využili dostupné opravné prostriedky — kto rozhodnutie nechal právoplatne stáť bez obrany, náhradu spravidla nedostane. Existujú výnimky hodné osobitného zreteľa; či na ne dosiahnete, posúdime z priebehu vašej veci.",
    },
    {
      q: "Dokedy sa dá nárok uplatniť?",
      a: "Premlčacia lehota je tri roky odo dňa, keď ste sa o škode dozvedeli. Ak je podmienkou uplatnenia zrušenie právoplatného rozhodnutia, beží od doručenia zrušujúceho rozhodnutia (§ 19). Počas predbežného prerokovania lehota neplynie, a to odo dňa podania žiadosti do skončenia prerokovania, najdlhšie však šesť mesiacov (§ 19 ods. 3) — o tento čas sa teda lehota reálne predĺži. Nezávisle od toho platí desaťročná hranica odo dňa doručenia rozhodnutia, ktorým škoda vznikla, okrem škody na zdraví (§ 19 ods. 2).",
    },
    {
      q: "Má zmysel ísť do sporu so štátom? Nie je to vopred prehraté?",
      a: "Nie je. Zodpovednosť štátu je objektívna — nedokazuje sa ničie zavinenie, ale nezákonnosť rozhodnutia či nesprávnosť postupu a vzniknutá škoda. O nároku navyše rozhoduje nezávislý súd, nie orgán, ktorý škodu spôsobil. Rozhodujúca je kvalita podkladov a vyčíslenia; presne to je naša práca.",
    },
  ],

  relatedServiceId: "spory",
  relatedServiceLabel: "Súdne spory a vymáhanie",
};
