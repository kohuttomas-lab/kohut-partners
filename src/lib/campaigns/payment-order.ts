import type { CampaignData } from "./types";

/**
 * Návrh na platobný rozkaz — upomínacie konanie (katalóg B4, balík sp-zaloba).
 * Ceny a rozsah doslova podľa shop-variants.ts / shop-details.ts: 290 € do
 * 3 000 €, 490 € nad 3 000 € (s DPH), podanie do 5 pracovných dní od dodania
 * podkladov, súdny poplatok osobitne; spor po odpore dohodou (§ 7 ods. 2 a § 8
 * vyhl. 655/2004). Stránka nedubluje /predzalobna-vyzva ani /vymahanie-pohladavok
 * — ide do hĺbky samotného konania.
 *
 * Overené v knižnici KoP_LegalContext (9/2026):
 * - zák. 307/2016 (znenie od 1. 11. 2022): § 1 ods. 2 alternatíva k CSP; § 2 OS
 *   Banská Bystrica; § 3 ods. 2–4 nárok v eurách, listiny, účtovné jednotky,
 *   kontrolný výkaz; § 3 ods. 5 a 6 neprípustnosť; § 4 ods. 1 a 4 elektronický
 *   formulár, účet; § 6 ods. 3; § 7 ods. 1 (10 pracovných dní) a ods. 2 (15 dní);
 *   § 9 ods. 2–4 doručovanie; § 10; § 11 ods. 1, 4 a 6; § 12 ods. 1; § 14;
 *   § 15 ods. 4 písm. h).
 * - zák. 71/1992 (znenie od 17. 8. 2026): § 11c ods. 1–4; § 6 ods. 3; § 7 ods. 2;
 *   položka 1 písm. a) sadzobníka (6 %, najmenej 25 €, najviac 25 000 €,
 *   v obchodných veciach 50 000 €).
 * - CSP § 265 ods. 1; Exekučný poriadok § 45 ods. 1 a § 48 ods. 4 písm. a);
 *   zák. 305/2013 § 32 ods. 2 a 5; OZ § 101, § 112; ObchZ § 397, § 402, § 405.
 *
 * ⚖ KONTROLA: najnižší poplatok v upomínacom konaní — § 11c ods. 1 polí len
 *   „percentnú sadzbu“; text preto uvádza 25 € len ako minimum položky 1
 *   (katalóg B4 počíta s „3 %, min. 25 €“). Potvrdiť prax OS BB.
 * ⚖ KONTROLA: § 3 ods. 6 písm. b) — aktivovaná schránka žalobcu vs. zástupcu;
 *   viditeľný text sa obmedzuje na „podávame ako váš zástupca elektronicky“.
 * ⚖ KONTROLA: doplatok súdneho poplatku po postúpení veci po odpore — v zák.
 *   71/1992 som osobitné ustanovenie nenašiel, do textu som ho nedal.
 * ⚖ KONTROLA: existujúce stránky píšu „poplatok polovičný oproti klasickej
 *   žalobe“; pri elektronicky podanej žalobe však platí aj zľava § 6 ods. 3
 *   (50 %, najviac 50 €), takže pri nižších sumách je rozdiel menší. Tu je
 *   formulované presne („polovica percentnej sadzby“).
 */
export const paymentOrder: CampaignData = {
  id: "payment-order",
  pathname: "/payment-order",
  group: "produkt",

  meta: {
    title: "Návrh na platobný rozkaz — upomínacie konanie za 290 € / 490 € | kohút & partners",
    description:
      "Nezaplatená faktúra alebo dlh? Návrh na platobný rozkaz v upomínacom konaní podáme elektronicky na Okresný súd Banská Bystrica do 5 pracovných dní od dodania podkladov. 290 € pri pohľadávke do 3 000 €, 490 € nad 3 000 € (s DPH), súdny poplatok osobitne. Celá SR.",
  },

  hero: {
    overline: "Platobný rozkaz · upomínacie konanie · celá SR",
    h1: "Návrh na platobný rozkaz — keď dlžník nezaplatil ani po výzve",
    lead: "Upomínacie konanie je elektronické konanie pred Okresným súdom Banská Bystrica, v ktorom súd o peňažnom nároku rozhoduje platobným rozkazom — na základe návrhu a pripojených listín. Ak dlžník nepodá odpor, rozkaz má účinky právoplatného rozsudku.",
    paragraphs: [
      "Návrh pripravíme a podáme do piatich pracovných dní od dodania podkladov: preveríme nárok, dôkazy a premlčanie, vyčíslime istinu s príslušenstvom a overíme, či je upomínacie konanie pre vašu pohľadávku prípustné — alebo či je namieste žaloba podľa Civilného sporového poriadku.",
      "Cena je pevná a známa vopred: 290 € pri pohľadávke do 3 000 €, 490 € nad 3 000 € (s DPH). Súdny poplatok sa platí osobitne v skutočnej výške; v upomínacom konaní je to polovica percentnej sadzby sadzobníka — 3 % namiesto 6 % z uplatnenej sumy.",
    ],
    cta: "Chcem podať návrh",
  },

  reasons: {
    overline: "Ako konanie prebieha",
    heading: "V čom sa upomínacie konanie líši od žaloby",
    lead: "Zákon č. 307/2016 Z. z. ho upravuje ako alternatívu k postupu podľa Civilného sporového poriadku (§ 1 ods. 2). Rozdiely sú štyri a každý má praktický dôsledok.",
    items: [
      {
        title: "Jeden súd, výlučne elektronicky",
        desc: "Na konanie je kauzálne príslušný Okresný súd Banská Bystrica — bez ohľadu na sídlo strán (§ 2). Návrh sa podáva výlučne určeným elektronickým formulárom do elektronickej schránky súdu, musí byť autorizovaný a listiny sa pripájajú v elektronickej podobe spolu s ním (§ 4 ods. 1). Podávame ho elektronicky ako váš zástupca.",
      },
      {
        title: "Polovica percentnej sadzby poplatku",
        desc: "Súdny poplatok z návrhu je 50 % percentnej sadzby sadzobníka (§ 11c ods. 1 zákona o súdnych poplatkoch) — 3 % namiesto 6 %; úroky uplatnené popri istine sa do základu nezapočítavajú (§ 7 ods. 2). Súd na zaplatenie nevyzýva: ak poplatok nie je uhradený celý do 15 dní od podania, na návrh sa neprihliada (§ 11c ods. 3 a 4).",
      },
      {
        title: "Rozkaz do desiatich pracovných dní",
        desc: "Ak sú splnené procesné podmienky vrátane zaplateného poplatku a nie je dôvod návrh odmietnuť, súd vydá platobný rozkaz najneskôr do desiatich pracovných dní (§ 7 ods. 1). Žalovanému v ňom uloží, aby do 15 dní od doručenia zaplatil nárok a trovy konania, alebo aby v tej istej lehote podal odpor (§ 7 ods. 2).",
      },
      {
        title: "Medzi podnikateľmi stačí faktúra",
        desc: "Nárok musí byť možné odôvodnene predpokladať zo skutočností v návrhu a z pripojených listín. Ak sú obe strany účtovnými jednotkami, postačí faktúra a vyhlásenie, že nárok evidujete v účtovníctve (§ 3 ods. 3). Platiteľ DPH môže navyše vyhlásiť, že faktúru uviedol v kontrolnom výkaze (§ 3 ods. 4) — žalovaný, ktorý ju vo svojom výkaze uviedol tiež, musí odpor osvedčiť listinnými dôkazmi (§ 11 ods. 4).",
      },
    ],
  },

  scope: {
    overline: "Rozsah",
    heading: "Kedy upomínacie konanie a kedy klasická žaloba",
    lead: "Upomínacie konanie je určené pre nároky na zaplatenie peňažnej sumy v eurách, ktoré vyplývajú z listín (§ 3 ods. 2 a 3). Zákon vymenúva aj prípady, keď návrh prípustný nie je (§ 3 ods. 5 a 6) — vtedy prichádza do úvahy žaloba podľa Civilného sporového poriadku, o ktorej môže súd tiež rozhodnúť platobným rozkazom (§ 265); postup a cenu vám navrhneme vopred.",
    items: [
      "Vhodné: neuhradené faktúry medzi podnikateľmi — účtovnými jednotkami",
      "Vhodné: pôžička, nájomné, cena diela alebo služby doložené zmluvou a dokladmi o plnení",
      "Vhodné: nároky z uznania dlhu a nedodržaných splátkových dohôd",
      "Neprípustné: dohodnutý úrok z omeškania, ktorý o viac ako päť percentuálnych bodov presahuje úrok, aký by platil bez dohody (§ 3 ods. 5 písm. a))",
      "Neprípustné: nárok zo spotrebiteľskej zmluvy, ak dlžník nebol v posledných troch mesiacoch pred podaním vyzvaný na zaplatenie, ak tovar či služba ešte neboli dodané alebo ak neprijateľná zmluvná podmienka ovplyvňuje nárok (§ 3 ods. 5 písm. b) až d))",
      "Neprípustné: nárok zo zmenky voči fyzickej osobe (§ 3 ods. 5 písm. e))",
      "Neprípustné: platobný rozkaz by sa mal doručovať žalovanému do cudziny (§ 3 ods. 6 písm. d))",
      "Odmietnutie návrhu nie je prekážkou — nárok možno uplatniť znova alebo žalobou podľa Civilného sporového poriadku (§ 6 ods. 3)",
    ],
  },

  steps: [
    {
      title: "Posúdenie a podklady",
      desc: "Pošlete faktúry či zmluvu, doklad o dodaní a údaje dlžníka. Preveríme nárok, dôkazy, premlčanie a prípustnosť upomínacieho konania; ak ešte neodišla predžalobná výzva, povieme vám, či ju odporúčame poslať skôr.",
    },
    {
      title: "Návrh do 5 pracovných dní",
      desc: "Návrh podáme elektronicky na Okresný súd Banská Bystrica do piatich pracovných dní od dodania podkladov. Platobné údaje k súdnemu poplatku súd oznamuje automatizovane; poplatok treba uhradiť celý do 15 dní od podania (§ 11c ods. 3 a 4 zákona o súdnych poplatkoch).",
    },
    {
      title: "Platobný rozkaz a doručenie",
      desc: "Súd rozkaz vydá do desiatich pracovných dní od splnenia podmienok a žalovanému ho doručuje do vlastných rúk (§ 9 ods. 4). Ak sa doručiť nepodarí, súd vás vyzve, aby ste do 15 dní navrhli pokračovanie na súde príslušnom podľa Civilného sporového poriadku (§ 10 ods. 1).",
    },
    {
      title: "Právoplatnosť alebo odpor",
      desc: "Bez odporu má rozkaz účinky právoplatného rozsudku (§ 11 ods. 6); odovzdáme vám ho s pokynmi, čo ďalej. Ak dlžník podá vecne odôvodnený odpor, máte 15 dní na vyjadrenie a návrh na pokračovanie v konaní (§ 14 ods. 1) — o ďalšom postupe rozhodujete vy, s cenou známou vopred.",
    },
  ],

  deadline: {
    heading: "Tri pätnásťdňové lehoty žalobcu — a premlčanie v pozadí",
    body: "V upomínacom konaní stráži žalobca tri lehoty po 15 dní. Súdny poplatok musí byť uhradený celý do 15 dní od podania návrhu, inak sa na návrh neprihliada — súd na zaplatenie nevyzýva (§ 11c ods. 3 a 4 zákona o súdnych poplatkoch). Ak dlžník podá odpor, do 15 dní od výzvy súdu sa treba vyjadriť a navrhnúť pokračovanie v konaní, inak sa konanie zastaví (§ 14 ods. 1 a 2 zákona o upomínacom konaní). Rovnakú lehotu máte, ak sa rozkaz nepodarilo doručiť do vlastných rúk (§ 10 ods. 1 a 2). Na zastavenom konaní záleží aj pre premlčanie: uplatnením práva na súde premlčacia doba neplynie, resp. prestáva plynúť (§ 112 Občianskeho zákonníka, § 402 Obchodného zákonníka), no pri obchodných pohľadávkach platí, že plynúť neprestala, ak sa v konaní nerozhodlo vo veci samej — zákon ju vtedy len predĺži tak, aby sa neskončila skôr než rok po skončení konania (§ 405 Obchodného zákonníka). Pri pohľadávke blízko konca trojročnej alebo štvorročnej premlčacej doby preto návrh neodkladajte.",
  },

  pricing: {
    heading: "Koľko to stojí",
    lead: "Pevné ceny s DPH, známe vopred. Súdny poplatok sa platí osobitne v skutočnej výške.",
    items: [
      {
        label: "Posúdenie pohľadávky",
        value: "zadarmo",
        desc: "Preveríme nárok, doklady, premlčanie a prípustnosť upomínacieho konania a napíšeme vám, aký postup odporúčame. Nezaväzuje vás to k ničomu.",
      },
      {
        label: "Návrh na platobný rozkaz",
        value: "290 € / 490 € s DPH",
        desc: "290 € pri pohľadávke do 3 000 €, 490 € nad 3 000 €. V cene je preverenie nároku, dôkazov a premlčania, návrh na vydanie platobného rozkazu v upomínacom konaní, elektronické podanie na Okresný súd Banská Bystrica, sledovanie konania a odovzdanie platobného rozkazu s pokynmi, čo ďalej.",
      },
      {
        label: "Súdny poplatok",
        value: "v skutočnej výške",
        desc: "Polovica percentnej sadzby sadzobníka, teda 3 % z uplatnenej sumy bez príslušenstva (§ 11c ods. 1 a § 7 ods. 2 zákona o súdnych poplatkoch) — pri istine 2 000 € je to 60 €. Najnižší poplatok podľa položky 1 sadzobníka je 25 €. Presnú sumu vám vyčíslime pred podaním; v platobnom rozkaze súd žalovanému ukladá nahradiť aj trovy konania (§ 7 ods. 2 zákona o upomínacom konaní).",
      },
      {
        label: "Ak dlžník podá odpor",
        value: "dohodou vopred",
        desc: "Zastupovanie v spore po odpore ani návrh na vykonanie exekúcie nie sú v cene návrhu. Odmenu za spor — pevnú alebo podielovú — dohodneme písomne skôr, než navrhnete pokračovanie v konaní; podielová odmena je najviac 20 % z hodnoty veci a patrí nám len pri plnom úspechu.",
      },
    ],
  },

  form: {
    title: "Pošlite nám podklady k pohľadávke",
    leads: [
      "Do troch pracovných dní vám napíšeme, či je upomínacie konanie pre vašu pohľadávku prípustné, ako je na tom premlčanie a aký bude súdny poplatok. Za posúdenie nič neplatíte.",
      "Návrh podáme do piatich pracovných dní od dodania úplných podkladov. Ak je vhodnejšia najprv predžalobná výzva alebo iný postup, povieme vám to pred podaním — nie po ňom.",
    ],
    fields: [
      { name: "debtor", label: "Dlžník", placeholder: "napr. Alfa s. r. o., IČO… / fyzická osoba" },
      { name: "amount", label: "Dlžná suma (istina)", placeholder: "napr. 2 400 €" },
      { name: "due", label: "Splatnosť a výzva", placeholder: "napr. splatné 15. 5. 2026, výzva odoslaná 1. 8. 2026" },
    ],
    messageLabel: "Z čoho pohľadávka vznikla a ako dlžník reagoval",
    subject: "Návrh na platobný rozkaz — podklady",
    documents: [
      "faktúry alebo zmluva a doklad o dodaní",
      "predžalobná výzva, ak bola odoslaná, a doklad o jej odoslaní",
      "označenie dlžníka (názov a IČO, pri fyzickej osobe meno, adresa a dátum narodenia) a výška dlhu",
      "číslo účtu, na ktorý má dlžník plniť — v návrhu je povinné (§ 4 ods. 4)",
    ],
    submit: "Chcem podať návrh",
  },

  faq: [
    {
      q: "Čím sa upomínacie konanie líši od klasickej žaloby?",
      a: "Je to alternatívny spôsob uplatnenia peňažného nároku (§ 1 ods. 2 zákona č. 307/2016 Z. z.): koná jediný súd — Okresný súd Banská Bystrica (§ 2), návrh sa podáva výlučne elektronickým formulárom (§ 4 ods. 1) a poplatok je polovica percentnej sadzby (§ 11c ods. 1 zákona o súdnych poplatkoch). Platobným rozkazom môže súd rozhodnúť aj o žalobe podľa § 265 Civilného sporového poriadku, tam však koná súd príslušný podľa všeobecných pravidiel a elektronické podanie znižuje poplatok o polovicu, najviac však o 50 € (§ 6 ods. 3 zákona o súdnych poplatkoch). Lehota žalovaného na zaplatenie alebo odpor je v oboch prípadoch 15 dní.",
    },
    {
      q: "Aký je súdny poplatok a kedy ho treba zaplatiť?",
      a: "Položka 1 sadzobníka určuje zo žaloby 6 % z ceny predmetu konania, najmenej 25 € a najviac 25 000 €, v obchodných veciach 50 000 €; v upomínacom konaní sa použije polovica percentnej sadzby (§ 11c ods. 1). Platí sa poštovým poukazom, platobnou kartou alebo prevodom z účtu (§ 11c ods. 2) a musí byť uhradený celý do 15 dní od podania návrhu, inak sa na návrh neprihliada (§ 11c ods. 4). Na návrh na oslobodenie od súdnych poplatkov sa v upomínacom konaní neprihliada (§ 15 ods. 4 písm. h) zákona o upomínacom konaní).",
    },
    {
      q: "Čo sa stane, ak dlžník podá odpor?",
      a: "Odpor musí byť vecne odôvodnený; odpor podaný oneskorene alebo bez vecného odôvodnenia súd odmietne (§ 11 ods. 1, § 12 ods. 1). Odpor, ktorý súd neodmietol, platobný rozkaz zrušuje a súd vás vyzve, aby ste sa k nemu do 15 dní vyjadrili a navrhli pokračovanie v konaní (§ 14 ods. 1). Ak to urobíte, vec do piatich pracovných dní postúpi súdu príslušnému podľa Civilného sporového poriadku (§ 14 ods. 3); ak nie, konanie sa zastaví (§ 14 ods. 2). Či do sporu ísť, rozhodnete vy — s naším posúdením odporu a cenou vopred.",
    },
    {
      q: "Čo ak sa platobný rozkaz nepodarí dlžníkovi doručiť?",
      a: "Rozkaz sa žalovanému doručuje do vlastných rúk a fikcia doručenia pri vrátenej zásielke sa naň nepoužije (§ 9 ods. 4). Súd najprv hľadá inú adresu v dostupných registroch (§ 9 ods. 3); ak doručenie zlyhá, vyzve vás, aby ste do 15 dní navrhli pokračovanie na príslušnom súde, inak sa rozkaz zrušuje a konanie zastavuje bez náhrady trov (§ 10). Inak je to pri dlžníkovi s aktivovanou elektronickou schránkou: tam sa rozkaz považuje za doručený aj márnym uplynutím 15-dňovej úložnej lehoty (§ 9 ods. 2 zákona o upomínacom konaní, § 32 ods. 2 a 5 zákona č. 305/2013 Z. z.).",
    },
    {
      q: "Kedy je platobný rozkaz právoplatný a čo s ním môžem urobiť?",
      a: "Platobný rozkaz, proti ktorému nebol podaný odpor, má účinky právoplatného rozsudku (§ 11 ods. 6). Ak dlžník ani potom nezaplatí, vykonateľné rozhodnutie súdu je exekučným titulom (§ 45 ods. 1 Exekučného poriadku) a platobný rozkaz z upomínacieho konania netreba k návrhu na vykonanie exekúcie ani pripájať (§ 48 ods. 4 písm. a)). Návrh na vykonanie exekúcie pripravujeme ako samostatnú službu.",
    },
    {
      q: "Musím dlžníkovi pred podaním návrhu poslať výzvu?",
      a: "Pri nároku zo spotrebiteľskej zmluvy áno — návrh nie je prípustný, ak žalovaný nebol na zaplatenie vyzvaný v posledných troch mesiacoch pred jeho podaním (§ 3 ods. 5 písm. d)). Pri ostatných nárokoch zákon o upomínacom konaní výzvu ako podmienku neustanovuje, no býva účelná: časť dlžníkov po nej zaplatí a súdu sa vyhnete. Predžalobnú výzvu pripravíme za 89 € (Standard, do 5 pracovných dní) alebo 149 € (Premium, do 2 pracovných dní), s DPH.",
    },
  ],

  relatedServiceId: "spory",
  relatedServiceLabel: "Súdne spory a vymáhanie",
};
