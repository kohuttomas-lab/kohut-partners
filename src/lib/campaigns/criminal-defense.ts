import type { CampaignData } from "./types";

/**
 * Obhajoba v trestnom konaní.
 * Overené proti Trestnému poriadku (301/2005 Z. z., časová verzia od 18. 8. 2026):
 * § 34 ods. 1 — právo odoprieť vypovedať, zvoliť si obhajcu a radiť sa s ním aj
 * počas úkonov (nie o odpovedi na už položenú otázku); § 34 ods. 3 — bezplatná
 * obhajoba; § 36 ods. 1 — obhajcom môže byť len advokát; § 37 ods. 1 — povinná
 * obhajoba; § 39 ods. 2 — obhajcu môžu zvoliť aj príbuzní; § 44 ods. 2 a § 69 —
 * nazeranie do spisu; § 120 ods. 1 — predvedenie; § 121 ods. 2 — poučenie pred
 * výsluchom; § 124 ods. 2 — opravy zápisnice; § 130 ods. 2 — svedok; § 196 ods. 2 —
 * výsluch osoby pred vznesením obvinenia a jej právo na právnu pomoc advokáta;
 * § 206 ods. 3 — náležitosti uznesenia o vznesení obvinenia; § 185 ods. 2 a 6,
 * § 187 ods. 1, § 190 ods. 2 písm. a) — sťažnosť do troch pracovných dní, bez
 * odkladného účinku, rozhoduje prokurátor; § 213 ods. 2 — účasť obhajcu na
 * úkonoch; § 216, § 220, § 232 — podmienečné zastavenie, zmier, dohoda o vine
 * a treste; § 353 až 356 — trestný rozkaz, odpor do ôsmich dní, samosudca nie je
 * viazaný trestom z rozkazu (§ 355 ods. 3); § 85 ods. 4 a 6, § 86 ods. 1,
 * § 87 ods. 2 — zadržanie 48 h (terorizmus 96 h — v texte vynechané),
 * rozhodnutie o väzbe 48/72 h; § 63 ods. 3 a 6,
 * § 64 ods. 1 — počítanie a navrátenie lehôt. Mlčanlivosť: § 23 ods. 1 zák. 586/2003.
 *
 * ⚖ KONTROLA: právo SVEDKA na právnu pomoc advokáta pri výsluchu som v Trestnom
 * poriadku v knižnici výslovne nenašiel — text preto pri svedkovi tvrdí len právo
 * odoprieť výpoveď (§ 130 ods. 2); doplniť, ak má byť na stránke.
 * ⚖ KONTROLA: „odkladný účinok nemá“ pri sťažnosti proti vzneseniu obvinenia je
 * vyvodené z § 185 ods. 6 (v § 206 sa odkladný účinok nepriznáva) — potvrdiť.
 * ⚖ KONTROLA: rozsah balíka „Obhajoba pri výsluchu — 290 €“ pri výsluchoch mimo
 * regiónu (cestovné, strata času) a prísľub reakcie „obratom“ — obchodné rozhodnutie.
 */
export const criminalDefense: CampaignData = {
  id: "criminal-defense",
  pathname: "/criminal-defense",
  group: "situacie",

  meta: {
    title: "Obhajoba v trestnom konaní — obhajca od prvého výsluchu | kohút & partners",
    description:
      "Predvolanie na výsluch, uznesenie o vznesení obvinenia alebo trestný rozkaz? Na sťažnosť sú tri pracovné dni, na odpor osem dní. Advokát pre trestné právo — prvé posúdenie zadarmo, obhajoba pri výsluchu za 290 € s DPH. Celá SR.",
  },

  hero: {
    overline: "Trestné právo · celá SR",
    h1: "Predvolali vás na výsluch alebo vás obvinili?",
    lead: "V trestnom konaní bežia lehoty v dňoch, nie v mesiacoch: na sťažnosť proti uzneseniu o vznesení obvinenia sú tri pracovné dni, na odpor proti trestnému rozkazu osem dní. A to, čo poviete pri prvom výsluchu, zostáva v spise po celé konanie.",
    paragraphs: [
      "Pošlite nám predvolanie, uznesenie alebo trestný rozkaz. Obratom vám napíšeme, v akom postavení v konaní ste, dokedy vám beží lehota a aké kroky prichádzajú do úvahy. Za toto prvé posúdenie nič neplatíte.",
      "Obhajcom môže byť v trestnom konaní len advokát (§ 36 ods. 1 Trestného poriadku). Obhajujeme klientov z celého Slovenska — podklady a porady riešime na diaľku, na výsluchoch a pojednávaniach sme s vami osobne. Na všetko, čo nám poviete, sa vzťahuje advokátska mlčanlivosť.",
    ],
    cta: "Poslať dokument na posúdenie",
  },

  reasons: {
    overline: "Čo zmôže obhajca",
    heading: "Práva, ktoré máte od začiatku konania",
    lead: "Trestný poriadok dáva obvinenému práva, ktoré majú zmysel len vtedy, ak ich využije včas. Orgány činné v trestnom konaní vás o nich musia poučiť (§ 34 ods. 5) — poučenie však nenahradí poradu o tom, ako s nimi naložiť vo vašej veci.",
    items: [
      {
        title: "Právo nevypovedať",
        desc: "Obvinený sa môže vyjadriť ku všetkému, čo sa mu kladie za vinu, má však aj právo odoprieť vypovedať; k výpovedi ani k priznaniu ho nemožno nútiť (§ 34 ods. 1, § 121 ods. 1 Trestného poriadku). Či vypovedať hneď, neskôr alebo vôbec, je rozhodnutie, ktoré sa oplatí urobiť až po porade s obhajcom.",
      },
      {
        title: "Obhajca pri výsluchu",
        desc: "Máte právo žiadať, aby sa obhajca zúčastnil na vašom výsluchu, a bez jeho prítomnosti nevypovedať (§ 121 ods. 2). S obhajcom sa môžete radiť aj počas úkonov — nie však o tom, ako odpovedať na už položenú otázku (§ 34 ods. 1). Porada preto musí prebehnúť pred výsluchom, nie počas neho.",
      },
      {
        title: "Sťažnosť a odpor v lehote",
        desc: "Uznesenie o vznesení obvinenia musí opísať skutok tak, aby nemohol byť zamenený s iným, a uviesť skutočnosti, ktoré obvinenie odôvodňujú (§ 206 ods. 3) — inak ho možno napadnúť sťažnosťou. Proti trestnému rozkazu, ktorý samosudca vydáva bez hlavného pojednávania, je opravným prostriedkom odpor (§ 353, § 355). Obe lehoty sú krátke a obe rozhodnutia treba zvážiť.",
      },
      {
        title: "Skončenie veci bez hlavného pojednávania",
        desc: "Pri prečinoch s hornou hranicou sadzby do piatich rokov môže prokurátor so súhlasom obvineného trestné stíhanie podmienečne zastaviť alebo schváliť zmier — predpokladom je okrem iného vyhlásenie, že obvinený skutok spáchal, a náhrada škody (§ 216, § 220). Pri priznaní prichádza do úvahy aj dohoda o vine a treste (§ 232). Či je niektorá z týchto ciest pre vás vhodná, závisí od dôkaznej situácie.",
      },
    ],
  },

  scope: {
    overline: "Rozsah",
    heading: "V ktorých situáciách obhajujeme",
    lead: "Obhajobu možno prevziať v ktoromkoľvek štádiu — od predvolania na výsluch až po opravné prostriedky. Čím skôr, tým viac procesných možností zostáva otvorených.",
    items: [
      "Predvolanie na výsluch na polícii — ako obvinený, podozrivý alebo svedok",
      "Uznesenie o vznesení obvinenia a sťažnosť proti nemu",
      "Trestný rozkaz a odpor proti nemu",
      "Zadržanie a rozhodovanie o väzbe",
      "Obhajoba v prípravnom konaní a na hlavnom pojednávaní",
      "Podmienečné zastavenie trestného stíhania a zmier",
      "Konanie o dohode o vine a treste",
      "Odvolanie a ďalšie opravné prostriedky",
    ],
  },

  steps: [
    {
      title: "Prvé posúdenie zadarmo",
      desc: "Pošlete predvolanie, uznesenie alebo trestný rozkaz. Obratom vám napíšeme, v akom procesnom postavení ste, dokedy beží lehota a čo odporúčame urobiť ako prvé.",
    },
    {
      title: "Porada pred výsluchom",
      desc: "Prejdeme s vami, z čoho ste podozrivý alebo obvinený, aké máte práva a či je vo vašej veci vhodné vypovedať. Na výsluchu sme s vami a dohliadame na jeho zákonný priebeh aj na znenie zápisnice — máte právo žiadať jej doplnenie a opravy (§ 124 ods. 2).",
    },
    {
      title: "Sťažnosť alebo odpor",
      desc: "Ak je na to dôvod, pripravíme a podáme sťažnosť proti uzneseniu o vznesení obvinenia alebo odpor proti trestnému rozkazu tak, aby bola lehota bezpečne zachovaná.",
    },
    {
      title: "Obhajoba v konaní",
      desc: "Nazeráme do spisu, zúčastňujeme sa na výsluchoch svedkov a ďalších úkonoch (§ 44 ods. 2, § 213 ods. 2), navrhujeme dôkazy vo váš prospech a zastupujeme vás pred súdom. Kde to zákon umožňuje, rokujeme aj o podmienečnom zastavení trestného stíhania, zmieri alebo dohode o vine a treste.",
    },
  ],

  deadline: {
    heading: "Tri pracovné dni a osem dní",
    body: "Sťažnosť proti uzneseniu o vznesení obvinenia sa podáva do troch pracovných dní od jeho oznámenia, a to orgánu, ktorý uznesenie vydal (§ 187 ods. 1 Trestného poriadku). Odkladný účinok nemá (§ 185 ods. 6) — trestné stíhanie medzitým pokračuje. Odpor proti trestnému rozkazu sa podáva do ôsmich dní od jeho doručenia na súde, ktorý rozkaz vydal; ak sa rozkaz doručuje vám aj obhajcovi, lehota plynie od neskoršieho doručenia (§ 355 ods. 1). Ak odpor nepodáte, trestný rozkaz sa stane právoplatným a vykonateľným (§ 356) — a má povahu odsudzujúceho rozsudku (§ 353 ods. 8). Deň oznámenia či doručenia sa do lehoty nezapočítava a lehota je zachovaná, aj keď podanie v posledný deň odovzdáte na pošte (§ 63 ods. 3 a 6). Navrátenie zmeškanej lehoty je možné len z dôležitých dôvodov a treba oň požiadať do troch dní od odpadnutia prekážky (§ 64 ods. 1) — spoliehať sa naň nedá.",
  },

  pricing: {
    heading: "Koľko to stojí",
    lead: "Cenu poznáte skôr, než čokoľvek podpíšete. Pri obhajobe závisí od štádia konania a rozsahu úkonov — dozviete sa ju pri prvom posúdení.",
    items: [
      {
        label: "Prvé posúdenie",
        value: "zadarmo",
        desc: "Preštudujeme predvolanie, uznesenie alebo trestný rozkaz a napíšeme vám, dokedy beží lehota a aké kroky prichádzajú do úvahy. Nezaväzuje vás to k ničomu.",
      },
      {
        label: "Konzultácia (30 min)",
        value: "50 € s DPH",
        desc: "Osobne, telefonicky alebo cez videohovor. Prejdeme vaše práva, priebeh konania a možné spôsoby jeho skončenia.",
      },
      {
        label: "Obhajoba pri výsluchu",
        value: "290 € s DPH",
        desc: "Účasť advokáta na výsluchu a okamžitá právna pomoc. Vhodné, ak ste dostali predvolanie a termín výsluchu je už určený.",
      },
      {
        label: "Obhajoba v konaní",
        value: "pevná cena vopred alebo advokátska tarifa",
        desc: "Rozsah závisí od štádia konania a zložitosti veci. Pevnú cenu alebo odmenu podľa advokátskej tarify s vami dohodneme písomne skôr, než obhajobu prevezmeme.",
      },
    ],
  },

  form: {
    title: "Pošlite nám predvolanie, uznesenie alebo trestný rozkaz",
    leads: [
      "Obratom vám napíšeme, v akom postavení v konaní ste, dokedy vám beží lehota a aké kroky prichádzajú do úvahy. Za prvé posúdenie nič neplatíte.",
      "Na všetko, čo nám napíšete alebo pošlete, sa vzťahuje advokátska mlčanlivosť. Ak máte výsluch v najbližších dňoch alebo vám už beží lehota, uveďte dátum — ozveme sa prednostne.",
    ],
    fields: [
      {
        name: "documentType",
        label: "Čo ste dostali",
        placeholder: "predvolanie / uznesenie o vznesení obvinenia / trestný rozkaz",
      },
      {
        name: "deliveryDate",
        label: "Kedy vám to bolo doručené alebo oznámené",
        placeholder: "napr. 14. 9. 2026",
      },
      {
        name: "hearingDate",
        label: "Termín výsluchu alebo pojednávania",
        placeholder: "ak je už určený",
      },
    ],
    messageLabel: "Stručne opíšte, čoho sa vec týka",
    subject: "Obhajoba v trestnom konaní — podklady",
    documents: [
      "predvolanie na výsluch alebo iný úkon",
      "uznesenie o vznesení obvinenia, ak vám bolo oznámené",
      "trestný rozkaz alebo obžalobu, ak je vec už na súde",
      "obálku alebo doručenku s dátumom doručenia",
    ],
    submit: "Chcem bezplatné posúdenie",
  },

  faq: [
    {
      q: "Predvolali ma na výsluch. Musím ísť a musím vypovedať?",
      a: "Na riadne predvolanie sa treba dostaviť — obvineného, ktorý sa bez dostatočného ospravedlnenia nedostaví, možno predviesť (§ 120 ods. 1 Trestného poriadku). Dostaviť sa však neznamená vypovedať: obvinený má právo odoprieť vypovedať a žiadať, aby bol vypočúvaný za účasti obhajcu (§ 34 ods. 1, § 121 ods. 2). Dôležité je, v akom postavení vás predvolali — pošlite nám predvolanie a prejdeme to ešte pred výsluchom.",
    },
    {
      q: "Predvolali ma ako svedka, nie ako obvineného. Potrebujem advokáta?",
      a: "Závisí od toho, či sa vec môže obrátiť proti vám. Svedok môže odoprieť vypovedať, ak by výpoveďou spôsobil nebezpečenstvo trestného stíhania sebe alebo blízkym osobám (§ 130 ods. 2). Rovnaké právo má osoba, ktorú polícia vypočúva ešte pred vznesením obvinenia k okolnostiam nasvedčujúcim, že mala spáchať trestný čin — a zákon jej výslovne priznáva aj právo na právnu pomoc advokáta (§ 196 ods. 2). Ak si nie ste istý, v akej úlohe vystupujete, poraďte sa pred výsluchom.",
    },
    {
      q: "Oznámili mi uznesenie o vznesení obvinenia. Čo teraz?",
      a: "Poznačte si deň, keď vám bolo uznesenie oznámené — sťažnosť možno podať len do troch pracovných dní (§ 187 ods. 1). Ak jej policajt sám nevyhovie, rozhoduje o nej prokurátor (§ 190). Či ju podať, závisí od obsahu uznesenia a spisu: niekedy má zmysel namietať nedostatočný opis skutku či chýbajúce dôvody (§ 206 ods. 3), inokedy je účelnejšie sústrediť sa na ďalší priebeh vyšetrovania.",
    },
    {
      q: "Prišiel mi trestný rozkaz. Mám podať odpor?",
      a: "Na odpor máte osem dní od doručenia (§ 355 ods. 1). Po včas podanom odpore samosudca nariadi hlavné pojednávanie a trestný rozkaz sa prednesením obžaloby ruší (§ 355 ods. 3 a 10). Počítajte však s tým, že súd potom nie je viazaný právnou kvalifikáciou ani druhom a výmerou trestu z rozkazu — výsledok môže byť miernejší aj prísnejší. Ak odpor nepodáte, rozkaz nadobudne právoplatnosť (§ 356).",
    },
    {
      q: "Kedy musím mať obhajcu povinne a čo ak naň nemám?",
      a: "Po vznesení obvinenia musí mať obvinený obhajcu už v prípravnom konaní okrem iného vtedy, ak je vo väzbe alebo vo výkone trestu, ak ide o obzvlášť závažný zločin alebo o trestný čin s hornou hranicou sadzby najmenej desať rokov, alebo ak je mladistvý (§ 37 ods. 1). V ostatných prípadoch je na vás, či si obhajcu zvolíte. Kto nemá dostatočné prostriedky na úhradu trov obhajoby, má nárok na bezplatnú obhajobu alebo obhajobu za zníženú odmenu; tento nárok musí preukázať (§ 34 ods. 3, § 40 ods. 2).",
    },
    {
      q: "Zadržali môjho blízkeho. Čo sa bude diať a čo môžem urobiť?",
      a: "Zadržanú osobu treba najneskôr do 48 hodín od zadržania odovzdať súdu, inak musí byť prepustená (§ 85 ods. 4, § 86 ods. 1). Sudca pre prípravné konanie potom do 48 hodín, pri obzvlášť závažných zločinoch do 72 hodín, rozhodne o väzbe alebo o prepustení (§ 87 ods. 2). Zadržaný má právo zvoliť si obhajcu a radiť sa s ním bez prítomnosti tretej osoby už počas zadržania (§ 85 ods. 6). Obhajcu mu môže zvoliť aj príbuzný v priamom rade, súrodenec, manžel či druh (§ 39 ods. 2) — preto sa ozvite čo najskôr.",
    },
  ],

  relatedServiceId: "trestne",
  relatedServiceLabel: "Trestné právo",
};
