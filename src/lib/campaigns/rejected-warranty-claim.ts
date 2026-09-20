import type { CampaignData } from "./types";

/**
 * Neuznaná (zamietnutá) reklamácia — spotrebiteľský spor. Slug /neuznana-reklamacia.
 * Overené proti knižnici KoP_LegalContext (OZ v znení od 31. 7. 2026):
 * - § 52, § 54 ods. 1 OZ — spotrebiteľská zmluva, zákaz odchýlenia v neprospech spotrebiteľa.
 * - § 612 ods. 1 a 3 — spotrebiteľská kúpna zmluva (hnuteľná vec; výnimky napr. živé zviera).
 * - § 615 ods. 2, § 616 písm. a), § 618 ods. 2 — požiadavky na vec, opotrebenie použitej veci.
 * - § 619 ods. 1 a 3 — zodpovednosť 2 roky od dodania, pri použitej veci dohodou min. 1 rok.
 * - § 620 ods. 1 — domnienka, že vada existovala už pri dodaní (počas celej doby zodpovednosti).
 * - § 621 ods. 1, 3, 4 — oprava/výmena, zľava, odstúpenie; vytknutie do 2 mesiacov od zistenia.
 * - § 622 ods. 3 a 4 — písomné potvrdenie, lehota max. 30 dní, písomné dôvody odmietnutia,
 *   opakované vytknutie na základe posudku; § 509 — náklady (uplatniť do 2 mesiacov).
 * - § 623 ods. 1, § 624 ods. 1, 4, 7, 9 — voľba opravy/výmeny, zľava, odstúpenie, cena do 14 dní.
 * - § 508 ods. 1 + § 101 — žaloba v 3-ročnej lehote odo dňa vytknutia vady; § 112.
 * - § 648, § 652 – § 655 — vec na zákazku, oprava a úprava veci. § 879x — zmluvy od 1. 7. 2024.
 * - zák. 108/2024: § 3 ods. 1 písm. d), § 4 ods. 2 písm. d) a e), § 26 (rovnaké aj v znení
 *   od 27. 9. 2026). Zák. 391/2015: § 3 ods. 2 písm. c), § 11, § 12 ods. 1, § 13 ods. 5
 *   písm. a), § 16 ods. 9 a 10, § 17, § 18, § 22 ods. 1. CSP: § 19 písm. d), § 290, § 295.
 *   Zák. 71/1992: § 4 ods. 2 písm. v). Vyhl. 655/2004: § 7 ods. 2, § 8 ods. 1 a 3.
 * Pozor na § 879aa OZ: novela účinná od 31. 7. 2026 (§ 619 ods. 4 — predĺženie o 12 mesiacov
 * po prvej oprave; prečíslovanie § 623) platí len pre zmluvy uzavreté od 31. 7. 2026. Texty
 * preto citujú iba ustanovenia, ktoré znejú rovnako v znení od 1. 7. 2024 aj od 31. 7. 2026
 * (30 dní cez § 622 ods. 3; „akreditovaná osoba“ je v oboch zneniach § 622 ods. 4).
 * ⚖ KONTROLA: oslobodenie spotrebiteľa od súdneho poplatku (§ 4 ods. 2 písm. v) zák. 71/1992)
 *   — poznámka pod čiarou 4aa odkazuje na zrušený zák. 250/2007; potvrdiť, že formulácia
 *   vo FAQ zodpovedá aktuálnej praxi súdov pri žalobách zo zodpovednosti za vady.
 * ⚖ KONTROLA: CSP je v knižnici v znení od 1. 7. 2024 — overiť aktuálnosť § 19 písm. d), § 290, § 295.
 * ⚖ KONTROLA: záver, že doložka „ako stojí a leží“ / „bez záruky“ v spotrebiteľskej zmluve
 *   neobstojí, je vyvodený z § 54 ods. 1 a § 619 ods. 3 (nie je to doslovný text zákona).
 * ⚖ KONTROLA: zmluvy uzavreté do 30. 6. 2024 (starý režim zák. 250/2007) knižnica nepokrýva —
 *   text na ne len odkazuje („skoršie predpisy“), bez konkrétnych pravidiel.
 * ⚖ KONTROLA: prísľub posúdenia „do troch pracovných dní“ je prevzatý zo vzorových stránok.
 */
export const rejectedWarrantyClaim: CampaignData = {
  id: "rejected-warranty-claim",
  pathname: "/rejected-warranty-claim",
  group: "situacie",

  meta: {
    title: "Neuznaná reklamácia — čo ďalej po zamietnutí | kohút & partners",
    description:
      "Predávajúci zamietol reklamáciu auta z autobazáru, elektroniky či nábytku? Pri vade, ktorá sa prejaví počas doby zodpovednosti, zákon predpokladá, že ju vec mala už pri dodaní. Zamietnutie posúdime zadarmo. Advokátska kancelária, celá SR.",
  },

  hero: {
    overline: "Spotrebiteľské spory · celá SR",
    h1: "Zamietli vám reklamáciu?",
    lead: "Zamietnutie reklamácie je stanovisko predávajúceho — nie rozhodnutie, proti ktorému sa nedá nič robiť. Dá sa preveriť, vyvrátiť znaleckým posudkom a v prípade potreby uplatniť v spotrebiteľskom spore na súde.",
    paragraphs: [
      "Pošlite nám zamietnutie reklamácie a doklad o kúpe. Do troch pracovných dní vám napíšeme, či zamietnutie podľa nás obstojí, čo by sa dalo namietať a ktorý postup dáva zmysel — posudok, výzva, alternatívne riešenie sporu alebo žaloba. Za toto posúdenie nič neplatíte.",
      "Najčastejšie ide o ojazdené autá z autobazárov, elektroniku, nábytok a veci zhotovené na zákazku. Vec vedieme na diaľku pre klientov z celého Slovenska — spotrebiteľ môže žalovať aj na súde podľa svojho trvalého pobytu (§ 19 písm. d) Civilného sporového poriadku).",
    ],
    cta: "Poslať zamietnutú reklamáciu",
  },

  reasons: {
    overline: "Čo sa dá namietať",
    heading: "Dôvody zamietnutia, ktoré sa oplatí preveriť",
    lead: "Nie každé zamietnutie je nesprávne. Pri zmluvách uzavretých od 1. júla 2024 však Občiansky zákonník (§ 612 a nasl.) upravuje dôkazné bremeno aj povinnosti predávajúceho pomerne presne — a odôvodnenie zamietnutia sa s ním dá porovnať bod po bode.",
    items: [
      {
        title: "„Vadu ste si spôsobili sami“",
        desc: "Ak sa vada prejaví počas doby zodpovednosti predávajúceho, predpokladá sa, že ju vec mala už v čase dodania (§ 620 ods. 1 OZ). Opak musí preukázať predávajúci — samotné tvrdenie o nesprávnom používaní či mechanickom poškodení túto domnienku nevyvracia.",
      },
      {
        title: "„Bežné opotrebenie“ pri použitej veci",
        desc: "Za vadu použitej veci sa nepovažuje len také opotrebenie, aké možno dôvodne očakávať vzhľadom na mieru jej predchádzajúceho používania (§ 618 ods. 2 OZ). Porucha motora krátko po kúpe, zatajená havária či počet kilometrov, ktorý nezodpovedá opisu v zmluve (§ 616 písm. a) OZ), pod bežné opotrebenie spadať nemusia.",
      },
      {
        title: "„Predané bez záruky“ alebo „ako stojí a leží“",
        desc: "Spotrebiteľská zmluva sa nemôže odchýliť od zákona v neprospech spotrebiteľa a svojich práv sa nemožno vopred vzdať (§ 54 ods. 1 OZ). Pri použitej veci možno dobu zodpovednosti skrátiť najviac na jeden rok od dodania (§ 619 ods. 3 OZ); s konkrétnou odchýlkou od bežných vlastností musí kupujúci súhlasiť výslovne a osobitne (§ 615 ods. 2 OZ).",
      },
      {
        title: "Zamietnutie bez písomných dôvodov alebo po lehote",
        desc: "Predávajúci musí vytknutie vady písomne potvrdiť a uviesť lehotu na jej odstránenie — najviac 30 dní, ak dlhšiu neodôvodňuje objektívny dôvod (§ 622 ods. 3 OZ). Odmietnutie zodpovednosti musí písomne odôvodniť (§ 622 ods. 4 OZ); obchádzať tieto povinnosti zakazuje aj § 4 ods. 2 písm. e) zákona č. 108/2024 Z. z. o ochrane spotrebiteľa. Ak predávajúci vec neopraví ani nevymení, vzniká právo na primeranú zľavu alebo na odstúpenie od zmluvy (§ 624 ods. 1 OZ).",
      },
    ],
  },

  scope: {
    overline: "Rozsah",
    heading: "Ktoré reklamácie a spory riešime",
    lead: "Osobitná ochrana platí pri spotrebiteľskej kúpnej zmluve — predávajúcim je obchodník a kupujúcim fyzická osoba, ktorá nekoná v rámci svojho podnikania (§ 52 a § 612 OZ). Pri kúpe od súkromnej osoby alebo pri nákupe na IČO platia iné pravidlá; aj také veci posúdime.",
    items: [
      "Ojazdené auto z autobazáru — skrytá vada, zatajená havária, nesúlad kilometrov",
      "Elektronika, spotrebiče a veci s digitálnymi prvkami",
      "Nábytok, kuchyne a iné veci zhotovené na zákazku (§ 648 OZ)",
      "Tovar kúpený v e-shope aj v kamennej predajni",
      "Vadne vykonaná oprava alebo úprava veci (§ 652 a nasl. OZ)",
      "Odstúpenie od kúpnej zmluvy a vrátenie kúpnej ceny",
      "Primeraná zľava z kúpnej ceny a náhrada škody spôsobenej vadou (§ 621 ods. 4 OZ)",
      "Náhrada nákladov na znalecký posudok a na uplatnenie práv (§ 509 OZ)",
    ],
  },

  steps: [
    {
      title: "Posúdenie zadarmo",
      desc: "Pošlete zamietnutie reklamácie, doklad o kúpe a korešpondenciu s predávajúcim. Do troch pracovných dní dostanete písomné stanovisko, či má zmysel pokračovať a akým spôsobom.",
    },
    {
      title: "Posudok a opakované vytknutie vady",
      desc: "Ak znalecký posudok alebo odborné stanovisko akreditovanej osoby preukáže zodpovednosť predávajúceho, vadu možno vytknúť opakovane a predávajúci zodpovednosť odmietnuť nemôže (§ 622 ods. 4 OZ). Poradíme, kedy sa posudok oplatí a ako ho zadať.",
    },
    {
      title: "Výzva a alternatívne riešenie sporu",
      desc: "Pripravíme odôvodnenú výzvu, prípadne žiadosť o nápravu. Ak ju predávajúci zamietne alebo do 30 dní neodpovie, možno podať návrh na alternatívne riešenie sporu (§ 11 zákona č. 391/2015 Z. z.).",
    },
    {
      title: "Žaloba v spotrebiteľskom spore",
      desc: "Ak predávajúci neustúpi, podáme žalobu a zastupujeme vás až do právoplatného rozhodnutia. V spotrebiteľskom spore (§ 290 a nasl. CSP) môže súd vykonať aj dôkazy, ktoré spotrebiteľ nenavrhol, ak je to pre rozhodnutie nevyhnutné (§ 295 CSP).",
    },
  ],

  deadline: {
    heading: "Dva mesiace na vytknutie vady, tri roky na žalobu",
    body: "Vadu treba predávajúcemu vytknúť do dvoch mesiacov od jej zistenia, najneskôr do uplynutia doby zodpovednosti za vady (§ 621 ods. 3 OZ). Nárok zo zodpovednosti za vady sa potom na súde uplatňuje vo všeobecnej trojročnej premlčacej lehote, ktorá začína plynúť dňom vytknutia vady (§ 508 ods. 1 a § 101 OZ). Dohadovanie sa s predávajúcim túto lehotu nezastaví — účinky ako žaloba má až začatie alternatívneho riešenia sporu (§ 16 ods. 10 zákona č. 391/2015 Z. z.) alebo podanie na súd. Návrh na alternatívne riešenie sporu navyše možno odmietnuť, ak ho podáte neskôr ako rok po zamietavej odpovedi na žiadosť o nápravu (§ 13 ods. 5 písm. a)). Pri aute je dôležité zabezpečiť dôkazy o vade skôr, než ju dáte opraviť inde.",
  },

  pricing: {
    heading: "Koľko to stojí",
    lead: "Cenu poznáte skôr, než čokoľvek podpíšete. Hodnotou veci je spravidla kúpna cena alebo požadovaná zľava — dá sa vyčísliť vopred.",
    items: [
      {
        label: "Posúdenie zamietnutej reklamácie",
        value: "zadarmo",
        desc: "Preštudujeme zamietnutie, doklad o kúpe a korešpondenciu a napíšeme vám, ako to vidíme. Nezaväzuje vás to k ničomu.",
      },
      {
        label: "Konzultácia (30 min)",
        value: "50 € s DPH",
        desc: "Osobne, telefonicky alebo cez videohovor. Prejdeme možnosti, riziká a to, či sa oplatí znalecký posudok.",
      },
      {
        label: "Predžalobná výzva predávajúcemu",
        value: "89 € / 149 € s DPH",
        desc: "Standard za 89 € — odoslaná do 5 pracovných dní; Premium za 149 € — do 2 pracovných dní.",
      },
      {
        label: "Zastupovanie vo veci",
        value: "pevná cena vopred alebo podiel na výsledku",
        desc: "Pri vhodných veciach vieme dohodnúť podielovú odmenu — podľa vyhlášky najviac 20 % z hodnoty veci, splatnú pri plnom úspechu. Pri neúspechu sa hradia len hotové výdavky (znalec, poštovné, prípadný súdny poplatok).",
      },
    ],
  },

  form: {
    title: "Pošlite nám zamietnutú reklamáciu",
    leads: [
      "Do troch pracovných dní vám napíšeme, či zamietnutie podľa nás obstojí a čo by sa dalo namietať. Za posúdenie nič neplatíte a k ničomu vás nezaväzuje.",
      "Ak vec podľa nás nemá šancu, povieme vám to rovno — nemá zmysel, aby ste do sporu išli s falošnými očakávaniami.",
    ],
    fields: [
      { name: "seller", label: "Kde ste vec kúpili", placeholder: "napr. autobazár, e-shop, predajňa nábytku" },
      { name: "purchaseDate", label: "Kedy ste vec prevzali", placeholder: "napr. 12. 3. 2026" },
      { name: "amount", label: "Kúpna cena (orientačne)", placeholder: "napr. 9 500 €" },
    ],
    messageLabel: "Čo sa pokazilo, kedy ste vadu vytkli a ako predávajúci zamietnutie odôvodnil",
    subject: "Neuznaná reklamácia — podklady",
    documents: [
      "zamietnutie reklamácie alebo iné písomné stanovisko predávajúceho",
      "kúpnu zmluvu, faktúru alebo iný doklad o kúpe",
      "potvrdenie o vytknutí vady (reklamačný protokol) a korešpondenciu s predávajúcim",
      "fotografie, servisné záznamy alebo diagnostiku, ak ich máte",
    ],
    submit: "Chcem bezplatné posúdenie",
  },

  faq: [
    {
      q: "Predávajúci reklamáciu zamietol. Čo ďalej?",
      a: "Zamietnutie nie je konečné. Predávajúci musí dôvody odmietnutia zodpovednosti oznámiť písomne; ak znaleckým posudkom alebo odborným stanoviskom akreditovanej osoby preukážete, že za vadu zodpovedá, môžete vadu vytknúť opakovane a predávajúci už zodpovednosť odmietnuť nemôže (§ 622 ods. 4 OZ). Účelne vynaložené náklady na posudok možno žiadať od predávajúceho — treba ich však uplatniť do dvoch mesiacov od dodania opravenej či náhradnej veci, vyplatenia zľavy alebo vrátenia ceny (§ 509 ods. 1 a 2 OZ). Ďalšou cestou je žiadosť o nápravu, alternatívne riešenie sporu alebo žaloba.",
    },
    {
      q: "Kto musí dokázať, že vada bola na veci už pri kúpe?",
      a: "Predávajúci zodpovedá za vadu, ktorú mala vec v čase dodania a ktorá sa prejaví do dvoch rokov od dodania (§ 619 ods. 1 OZ). Ak sa vada v tejto dobe prejaví, predpokladá sa, že ju vec mala už pri dodaní — neplatí to, len ak sa preukáže opak alebo ak je taký predpoklad nezlučiteľný s povahou veci či vady (§ 620 ods. 1 OZ). Táto úprava sa vzťahuje na zmluvy uzavreté od 1. júla 2024 (§ 879x OZ); staršie kúpy sa posudzujú podľa skorších predpisov.",
    },
    {
      q: "Kúpil som ojazdené auto z autobazáru a krátko po kúpe sa pokazilo. Čo môžem žiadať?",
      a: "Aj pri použitej veci zodpovedá predávajúci za vady; dobu zodpovednosti možno dohodou skrátiť najviac na jeden rok od dodania (§ 619 ods. 3 OZ). Môžete si zvoliť opravu alebo výmenu, ak zvolený spôsob nie je nemožný alebo neprimerane nákladný (§ 623 ods. 1 OZ). Ak je vada takej závažnej povahy, že to odôvodňuje, možno žiadať zľavu alebo odstúpiť od zmluvy hneď (§ 624 ods. 1 písm. e) OZ). Po odstúpení predávajúci nemá právo na odplatu za bežné užívanie auta ani na náhradu za jeho bežné opotrebovanie (§ 624 ods. 9 OZ).",
    },
    {
      q: "Kedy môžem odstúpiť od kúpnej zmluvy a dokedy mi predávajúci vráti peniaze?",
      a: "Právo na primeranú zľavu alebo na odstúpenie vzniká najmä vtedy, ak predávajúci vec neopravil ani nevymenil, odstránenie vady odmietol, vec má rovnakú vadu aj po oprave alebo výmene, alebo je zrejmé, že vadu v primeranej lehote neodstráni (§ 624 ods. 1 OZ). Odstúpiť nemožno pri zanedbateľnej vade alebo ak ste sa na vzniku vady spolupodieľali — dokázať to však musí predávajúci (§ 624 ods. 4 OZ). Kúpnu cenu je predávajúci povinný vrátiť najneskôr do 14 dní od vrátenia veci alebo od preukázania, že ste mu ju zaslali (§ 624 ods. 7 OZ).",
    },
    {
      q: "Musím ísť najprv na obchodnú inšpekciu, alebo môžem rovno na súd?",
      a: "Na súd sa môžete obrátiť priamo — alternatívne riešenie sporu je možnosť, nie podmienka (§ 12 ods. 1 zákona č. 391/2015 Z. z.). Predchádza mu žiadosť o nápravu; ak ju predávajúci zamietne alebo do 30 dní neodpovie, možno podať návrh, pri bežnom tovare Slovenskej obchodnej inšpekcii (§ 3 ods. 2 písm. c) a § 11 ods. 3). Konanie pred ňou je bezodplatné a má sa skončiť do 90 dní (§ 22 ods. 1 a § 16 ods. 9), výsledkom je však len dohoda strán alebo nezáväzné odôvodnené stanovisko (§ 17 a § 18). Záväzne o nároku rozhodne iba súd; spotrebiteľ, ktorý sa domáha ochrany svojho práva, je od súdneho poplatku oslobodený (§ 4 ods. 2 písm. v) zákona o súdnych poplatkoch).",
    },
    {
      q: "Ako je to s odmenou, ak spor nevyjde?",
      a: "Pri vhodných veciach dohodneme podielovú odmenu — podľa § 7 ods. 2 vyhlášky 655/2004 najviac 20 % z hodnoty veci, splatnú pri plnom úspechu vo veci. Ak úspech nenastane, máme podľa § 8 ods. 3 tej istej vyhlášky nárok len na náhradu hotových výdavkov, napríklad znalečného a poštovného. Presné podmienky si dohodneme písomne vopred.",
    },
  ],

  relatedServiceId: "spory",
  relatedServiceLabel: "Súdne spory a vymáhanie",
};
