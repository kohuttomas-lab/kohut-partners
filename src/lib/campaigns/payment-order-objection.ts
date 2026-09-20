import type { CampaignData } from "./types";

/**
 * Odpor proti platobnému rozkazu — situačná stránka pre žalovaného.
 * Ceny: posúdenie zadarmo, konzultácia (30 min) 50 € s DPH, odpor a zastupovanie
 * za pevnú cenu vopred (bez sumy) — zhodne s /obrana-proti-exekucii.
 *
 * Overené v knižnici KoP_LegalContext (9/2026):
 * - zák. 307/2016 (znenie od 1. 11. 2022): § 7 ods. 2 (15 dní: zaplatiť alebo
 *   odpor); § 9 ods. 1 (tlačivo odporu), ods. 2 a 4 (doručovanie do vlastných
 *   rúk, bez fikcie § 111 ods. 3 CSP); § 11 ods. 1 (vecné odôvodnenie, zrušenie
 *   rozkazu, odpor nemožno vziať späť), ods. 2 (elektronický formulár), ods. 3
 *   a 4 (účtovné jednotky, kontrolný výkaz), ods. 6 (účinky právoplatného
 *   rozsudku); § 12 ods. 1, 3 a 5; § 13 (splátky); § 14; § 15 ods. 1 a 7.
 * - CSP (znenie od 1. 7. 2024): § 265 ods. 1; § 266; § 267 ods. 1–4; § 268;
 *   § 121 ods. 2, 4 a 5; § 122; § 125 ods. 2; § 242; § 255 ods. 1.
 * - zák. 305/2013 § 32 ods. 2 a 5 písm. b) bod 1 (úložná lehota 15 dní, fikcia).
 * - OZ § 100 ods. 1, § 101, § 110 ods. 1, § 112, § 558; ObchZ § 388 ods. 1,
 *   § 397, § 402, § 407 ods. 1 a 4.
 * - zák. 71/1992 (znenie od 17. 8. 2026): § 5 ods. 1 a sadzobník neobsahujú
 *   poplatok za odpor; poznámka 2 k položke 1 (procesná obrana bez poplatku).
 *
 * ⚖ KONTROLA: zadanie počítalo so „súdnym poplatkom za odpor“ — v aktuálnom
 *   znení zák. 71/1992 v knižnici taký poplatok NIE JE; stránka preto uvádza,
 *   že sa neplatí. Potvrdiť pred zverejnením.
 * ⚖ KONTROLA: forma listinného odporu v upomínacom konaní — zákon hovorí len,
 *   že súd tlačivo prikladá (§ 9 ods. 1); či je tlačivo pre listinný odpor
 *   povinné, text netvrdí.
 * ⚖ KONTROLA: opravný prostriedok proti odmietnutiu odporu v konaní podľa CSP
 *   (sťažnosť vs. odvolanie podľa toho, kto rozhodol) — text uvádza sťažnosť
 *   len pre upomínacie konanie (§ 12 ods. 5).
 * ⚖ KONTROLA: odpustenie zmeškania lehoty (§ 122 CSP) v upomínacom konaní sa
 *   opiera o subsidiaritu § 15 ods. 1 — overiť prax OS BB.
 */
export const paymentOrderObjection: CampaignData = {
  id: "payment-order-objection",
  pathname: "/payment-order-objection",
  group: "situacie",

  meta: {
    title: "Odpor proti platobnému rozkazu — lehota 15 dní | kohút & partners",
    description:
      "Prišiel vám platobný rozkaz? Na odpor máte 15 dní od doručenia a musí byť vecne odôvodnený, inak ho súd odmietne. Premlčanie treba namietnuť — súd naň sám neprihliadne. Platobný rozkaz posúdime zadarmo. Advokátska kancelária, celá SR.",
  },

  hero: {
    overline: "Odpor proti platobnému rozkazu · celá SR",
    h1: "Prišiel vám platobný rozkaz?",
    lead: "Máte 15 dní od doručenia: zaplatiť, alebo podať odpor. Odpor musí byť vecne odôvodnený — oneskorený odpor alebo odpor bez odôvodnenia súd odmietne a platobný rozkaz ostáva v platnosti. Rozkaz, proti ktorému odpor podaný nebol, má účinky právoplatného rozsudku.",
    paragraphs: [
      "Pošlite nám platobný rozkaz spolu s návrhom a prílohami, ktoré vám súd doručil. Obratom vám napíšeme, dokedy lehota beží, a do troch pracovných dní — pri dobiehajúcej lehote skôr —, či vidíme dôvody na odpor. Za toto posúdenie nič neplatíte.",
      "Platobný rozkaz súd vydáva bez vyjadrenia žalovaného, len na základe tvrdení a listín žalobcu (§ 265 ods. 1 Civilného sporového poriadku, § 3 ods. 3 zákona o upomínacom konaní). Odpor je preto prvá chvíľa, keď súd počuje vašu stranu — a zákon vyžaduje, aby zaznela konkrétne a s dôkazmi.",
    ],
    cta: "Poslať platobný rozkaz",
  },

  reasons: {
    overline: "Čo sa dá namietať",
    heading: "Dôvody, ktoré v odpore obstoja ako vecné odôvodnenie",
    lead: "V odôvodnení odporu žalovaný opíše rozhodujúce skutočnosti, o ktoré opiera svoju obranu, a pripojí listiny alebo označí dôkazy (§ 267 ods. 1 Civilného sporového poriadku). Samotné „nesúhlasím“ vecným odôvodnením nie je. Najčastejšie dôvody:",
    items: [
      {
        title: "Premlčaný nárok",
        desc: "Všeobecná premlčacia doba je trojročná (§ 101 Občianskeho zákonníka), v obchodných vzťahoch štvorročná (§ 397 Obchodného zákonníka). Súd na premlčanie prihliadne len na námietku dlžníka (§ 100 ods. 1 Občianskeho zákonníka) — ak odpor nepodáte, rozkaz nadobudne právoplatnosť aj pri premlčanom dlhu.",
      },
      {
        title: "Dlh je zaplatený alebo v inej výške",
        desc: "Úhrady, ktoré žalobca nezohľadnil, dobropisy, započítanie, nesprávne vyčíslené úroky z omeškania či zmluvné pokuty. K odporu treba pripojiť výpisy z účtu a doklady, na ktoré sa odvolávate.",
      },
      {
        title: "Plnenie nebolo riadne dodané",
        desc: "Reklamované vady, nedodaný tovar či služba, odstúpenie od zmluvy. Ak ste so žalobcom obaja účtovnými jednotkami, v odpore musíte uviesť aj to, či vám bola faktúra doručená, ako ste s ňou naložili a či nárok evidujete v účtovníctve (§ 11 ods. 3 zákona o upomínacom konaní).",
      },
      {
        title: "Spotrebiteľská zmluva",
        desc: "Pri úveroch, pôžičkách a službách pre spotrebiteľov možno namietať neprijateľné zmluvné podmienky, výšku úrokov a poplatkov či nepreukázané postúpenie pohľadávky. Súd posudzuje vecné odôvodnenie odporu miernejšie, ak je žalovaný spotrebiteľom (§ 12 ods. 3 zákona o upomínacom konaní, § 267 ods. 3 Civilného sporového poriadku).",
      },
    ],
  },

  scope: {
    overline: "Rozsah",
    heading: "S čím pomáhame",
    lead: "Platobný rozkaz môže prísť z upomínacieho konania (Okresný súd Banská Bystrica, zákon č. 307/2016 Z. z.) aj z konania podľa Civilného sporového poriadku. Lehota je v oboch prípadoch 15 dní; líši sa forma podania a to, čo nasleduje po odpore.",
    items: [
      "Posúdenie platobného rozkazu, návrhu a príloh — dôvody na odpor a presný koniec lehoty",
      "Vecne odôvodnený odpor s listinnými dôkazmi, podaný v lehote",
      "Námietka premlčania a kontrola vyčíslenia istiny, úrokov a trov",
      "Platobné rozkazy zo spotrebiteľských úverov a postúpených pohľadávok",
      "Odpor medzi podnikateľmi — vyjadrenie k faktúre, účtovníctvu a kontrolnému výkazu (§ 11 ods. 3 a 4)",
      "Žiadosť o povolenie plnenia v splátkach namiesto odporu (§ 13 zákona o upomínacom konaní)",
      "Sťažnosť proti odmietnutiu odporu a návrh na odpustenie zmeškania lehoty",
      "Zastupovanie v spore, ktorý po odpore pokračuje na príslušnom súde",
    ],
  },

  steps: [
    {
      title: "Posúdenie zadarmo",
      desc: "Pošlete platobný rozkaz s prílohami a deň, keď ste ho prevzali. Obratom vám napíšeme, dokedy lehota beží, a do troch pracovných dní, či vidíme dôvody na odpor.",
    },
    {
      title: "Odpor v lehote",
      desc: "Pripravíme vecne odôvodnený odpor s dôkazmi a podáme ho v 15-dňovej lehote vo forme, akú zákon pre daný typ konania vyžaduje — v upomínacom konaní sa elektronický odpor podáva len určeným, autorizovaným formulárom (§ 11 ods. 2).",
    },
    {
      title: "Čo nasleduje po odpore",
      desc: "Včas podaný odôvodnený odpor platobný rozkaz zrušuje (§ 11 ods. 1). V upomínacom konaní má žalobca 15 dní na návrh na pokračovanie na príslušnom súde, inak sa konanie zastaví (§ 14 ods. 1 a 2); v konaní podľa Civilného sporového poriadku súd nariadi pojednávanie (§ 267 ods. 4).",
    },
    {
      title: "Spor alebo dohoda",
      desc: "Ak konanie pokračuje, zastupujeme vás v ňom; ak je dlh sčasti dôvodný, rokujeme o zmieri alebo splátkach. O každom kroku rozhodujete vy — s cenou známou vopred.",
    },
  ],

  deadline: {
    heading: "15 dní od doručenia — a odôvodnenie musí byť v odpore hneď",
    body: "Súd v platobnom rozkaze ukladá žalovanému, aby do 15 dní od doručenia zaplatil uplatnený nárok a trovy konania, alebo aby v tej istej lehote podal odpor (§ 7 ods. 2 zákona o upomínacom konaní, § 265 ods. 1 Civilného sporového poriadku). Deň doručenia sa do lehoty nezapočítava; ak jej koniec pripadne na sobotu alebo deň pracovného pokoja, posledným dňom je najbližší pracovný deň, a lehota je zachovaná, ak odpor v posledný deň odovzdáte na pošte alebo podáte elektronicky (§ 121 ods. 2, 4 a 5 Civilného sporového poriadku). Pozor na elektronickú schránku: rozkaz doručovaný do vlastných rúk sa považuje za doručený aj márnym uplynutím 15-dňovej úložnej lehoty, hoci ste si správu neprečítali (§ 32 ods. 2 a 5 zákona č. 305/2013 Z. z.) — lehota na odpor potom beží bez vášho vedomia. Odpor podaný oneskorene, neoprávnenou osobou alebo bez vecného odôvodnenia súd odmietne (§ 12 ods. 1 zákona o upomínacom konaní, § 267 ods. 2 Civilného sporového poriadku) a na doplnenie odôvodnenia nevyzýva (§ 267 ods. 1). Platobný rozkaz, proti ktorému nebol podaný odpor, má účinky právoplatného rozsudku (§ 11 ods. 6) a je podkladom pre exekúciu. Deň doručenia je preto najdôležitejší dátum — nečakajte na koniec lehoty.",
  },

  pricing: {
    heading: "Koľko to stojí",
    lead: "Cenu poznáte skôr, než čokoľvek podpíšete. O náhrade trov konania súd rozhoduje podľa pomeru úspechu vo veci (§ 255 ods. 1 Civilného sporového poriadku) — aj o tom vás informujeme pri posúdení.",
    items: [
      {
        label: "Posúdenie platobného rozkazu",
        value: "zadarmo",
        desc: "Preštudujeme rozkaz, návrh a prílohy a napíšeme vám, či vidíme dôvody na odpor a dokedy presne beží lehota. Nezaväzuje vás to k ničomu.",
      },
      {
        label: "Konzultácia (30 min)",
        value: "50 € s DPH",
        desc: "Osobne, telefonicky alebo cez videohovor. Prejdeme dôvody obrany, dôkazy aj alternatívy — zaplatenie, splátky, dohodu so žalobcom.",
      },
      {
        label: "Odpor a zastupovanie",
        value: "pevná cena vopred",
        desc: "Odpor a prípadné zastupovanie v spore za pevnú cenu dohodnutú vopred — jej výška závisí od zložitosti veci a dozviete sa ju pri posúdení.",
      },
      {
        label: "Súdny poplatok za odpor",
        value: "neplatí sa",
        desc: "Sadzobník súdnych poplatkov položku za odpor proti platobnému rozkazu neobsahuje; z prejavu žalovaného, ktorý je prostriedkom procesnej obrany, sa poplatok neplatí (poznámka 2 k položke 1 sadzobníka zákona č. 71/1992 Zb.).",
      },
    ],
  },

  form: {
    title: "Pošlite nám platobný rozkaz",
    leads: [
      "Obratom vám napíšeme, dokedy beží 15-dňová lehota, a do troch pracovných dní, či podľa nás existujú dôvody na odpor. Za posúdenie nič neplatíte.",
      "Ak je nárok dôvodný a odpor by spor len predĺžil a predražil, povieme vám to rovno — a prejdeme možnosti splátok alebo dohody so žalobcom.",
    ],
    fields: [
      { name: "deliveryDate", label: "Kedy vám platobný rozkaz prišiel", placeholder: "napr. 11. 9. 2026 (pošta / elektronická schránka)" },
      { name: "claimant", label: "Žalobca (kto žiada zaplatenie)", placeholder: "napr. dodávateľ, banka, inkasná spoločnosť…" },
      { name: "amount", label: "Požadovaná suma", placeholder: "napr. 3 200 €" },
    ],
    messageLabel: "Z čoho má dlh pochádzať a prečo s ním nesúhlasíte",
    subject: "Odpor proti platobnému rozkazu — podklady",
    documents: [
      "platobný rozkaz — všetky strany vrátane poučenia",
      "návrh žalobcu a prílohy, ktoré vám súd doručil spolu s rozkazom",
      "obálka alebo elektronická doručenka — kvôli presnému dňu doručenia",
      "vaše doklady: zmluva, úhrady, reklamácie, komunikácia so žalobcom",
    ],
    submit: "Chcem bezplatné posúdenie",
  },

  faq: [
    {
      q: "Prišiel mi platobný rozkaz. Čo mám urobiť ako prvé?",
      a: "Poznačte si deň doručenia a odložte obálku alebo elektronickú doručenku — od tohto dňa beží 15-dňová lehota na odpor. Nič nepodpisujte a dlh neuznávajte skôr, než si necháte rozkaz posúdiť: písomné uznanie záväzku má účinky aj vtedy, keď bol nárok už premlčaný (§ 407 ods. 4 Obchodného zákonníka; pri občianskych dlhoch § 558 Občianskeho zákonníka, ak ste o premlčaní vedeli). A neodkladajte to na posledný deň — odpor treba odôvodniť a doložiť dôkazmi už v lehote.",
    },
    {
      q: "Existuje vzor odporu? Stačí napísať, že s rozkazom nesúhlasím?",
      a: "K platobnému rozkazu z upomínacieho konania súd prikladá tlačivo na podanie odporu (§ 9 ods. 1) a formuláre zverejňuje ministerstvo spravodlivosti na svojom webovom sídle (§ 15 ods. 7). Tlačivo však nenahradí obsah: treba opísať rozhodujúce skutočnosti a pripojiť listiny alebo označiť dôkazy (§ 267 ods. 1 Civilného sporového poriadku). Odpor bez vecného odôvodnenia súd odmietne (§ 12 ods. 1 písm. d)) a elektronický odpor podaný inak než určeným autorizovaným formulárom tiež (§ 11 ods. 2, § 12 ods. 1 písm. c)) — obyčajný e-mail nestačí.",
    },
    {
      q: "Nárok je podľa mňa premlčaný. Zruší súd rozkaz sám?",
      a: "Nie. Súd na premlčanie prihliadne len na námietku dlžníka (§ 100 ods. 1 Občianskeho zákonníka, § 388 ods. 1 Obchodného zákonníka), preto ju treba výslovne uplatniť — prakticky už v odpore. Premlčacia doba je spravidla trojročná, v obchodných vzťahoch štvorročná (§ 101 Občianskeho zákonníka, § 397 Obchodného zákonníka), no treba preveriť, odkedy plynula a či ju neovplyvnilo skoršie súdne konanie alebo písomné uznanie dlhu (§ 110 ods. 1 a § 112 Občianskeho zákonníka, § 402 a § 407 Obchodného zákonníka). Z rozkazu a príloh to vieme posúdiť.",
    },
    {
      q: "Platí sa za odpor súdny poplatok?",
      a: "Nie. Zákon č. 71/1992 Zb. o súdnych poplatkoch spája poplatkovú povinnosť s podaním žaloby, návrhu či odvolania (§ 5 ods. 1) a sadzobník poplatok za odpor neobsahuje; z prejavu žalovaného, ktorý je prostriedkom procesnej obrany, sa poplatok neplatí (poznámka 2 k položke 1). Počítať však treba s trovami konania: o ich náhrade súd rozhoduje podľa pomeru úspechu vo veci (§ 255 ods. 1 Civilného sporového poriadku).",
    },
    {
      q: "Lehota na odpor mi už uplynula. Dá sa ešte niečo robiť?",
      a: "Možnosti sa zužujú, ale existujú. Ak ste lehotu zmeškali z ospravedlniteľného dôvodu, súd zmeškanie odpustí — návrh treba podať do 15 dní po odpadnutí prekážky a spojiť s ním aj samotný odpor (§ 122 Civilného sporového poriadku). Ak vám rozkaz nebol doručený do vlastných rúk, fikcia doručenia pri vrátenej zásielke sa naň nepoužije (§ 9 ods. 4 zákona o upomínacom konaní, § 266 ods. 2 Civilného sporového poriadku), takže lehota nemusela vôbec začať plynúť; pri doručovaní do elektronickej schránky však fikcia doručenia platí. Proti uzneseniu o odmietnutí odporu v upomínacom konaní je prípustná sťažnosť (§ 12 ods. 5) v lehote 15 dní od doručenia (§ 242 Civilného sporového poriadku). Napíšte nám, čo presne vám prišlo a kedy.",
    },
    {
      q: "Dlh uznávam, ale nemôžem ho zaplatiť naraz. Musím podať odpor?",
      a: "Nie. V upomínacom konaní môže fyzická osoba, ktorá nárok nenamieta a nepodala odpor, v lehote na odpor požiadať o povolenie plnenia v splátkach (§ 13). Priznaný nárok vrátane trov musí presahovať sumu minimálnej mzdy a nepresahovať 2 000 €, splátok môže byť najviac desať mesačných a prvú — najmenej 50 € — treba žalobcovi zaplatiť po doručení rozkazu a doložiť výpisom z účtu alebo jeho potvrdením. Nesplnenie čo i len jednej splátky včas znamená stratu výhody splátok (§ 13 ods. 5). Pri vyšších sumách a pri firmách ostáva dohoda so žalobcom.",
    },
  ],

  relatedServiceId: "spory",
  relatedServiceLabel: "Súdne spory a vymáhanie",
};
