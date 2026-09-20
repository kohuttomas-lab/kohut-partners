import type { CampaignData } from "./types";

/**
 * Alkohol za volantom a zadržaný vodičský preukaz.
 * Trestný zákon (300/2005 Z. z., verzia od 18. 8. 2026): § 289 ods. 1 — „stav
 * vylučujúci spôsobilosť“, až 1 rok; ods. 2 — odmietnutie vyšetrenia rovnako;
 * ods. 3 — až 2 roky (recidíva do 24 mesiacov, ublíženie na zdraví, väčšia škoda);
 * ods. 4 — 2 až 5 rokov (hromadná preprava); § 61 ods. 2, 3, 5 a 8 — zákaz
 * činnosti 1–10 rokov, horná polovica, doživotie, započítanie; § 69 a § 70 —
 * podmienečné upustenie od výkonu zvyšku zákazu činnosti (POZOR: nie § 68);
 * § 348 ods. 1 písm. d) — jazda v zákaze, až 2 roky.
 * Trestný poriadok (301/2005): § 34 ods. 1; § 187 ods. 1; § 204 ods. 1; § 216
 * ods. 1, 2 a 4; § 353 ods. 1 a 2 písm. b); § 355 ods. 1 a 3; § 356; § 437 ods. 4.
 * Zákon o cestnej premávke (8/2009 Z. z., verzia od 1. 9. 2026; v knižnici je
 * v priečinku J_Realitne_Katastralane; novela od 1. 10. 2026 sa citovaných §
 * nedotýka): § 4 ods. 2 písm. a) až d); § 69 ods. 1 písm. d); § 70 ods. 1 písm. a),
 * ods. 3, 4, 6 a 7; § 79 ods. 2; § 91 ods. 4, 6 a 13; § 92 ods. 2 písm. e),
 * ods. 3 písm. b) a ods. 8 písm. b).
 *
 * ⚖ KONTROLA: hranica 1 ‰ / 0,476 mg/l sa v § 289 TZ v knižnici NENACHÁDZA
 * (zákon hovorí len o „stave vylučujúcom spôsobilosť“) — číslo preto v texte nie
 * je; doplniť môže advokát s odkazom na judikatúru.
 * ⚖ KONTROLA: zákon o priestupkoch 372/1990 Zb. v knižnici NIE JE — priestupková
 * rovina je opísaná len všeobecne, bez súm pokút, dĺžky zákazu a paragrafov.
 * ⚖ KONTROLA: započítanie času zadržania vodičského preukazu do zákazu činnosti
 * je výklad § 61 ods. 8 TZ („opatrenie štátneho orgánu“) — potvrdiť formuláciu.
 * ⚖ KONTROLA: povinnosť vodiča podrobiť sa vyšetreniu upravuje zák. 219/1996 Z. z.,
 * ktorý v knižnici nie je — text sa opiera len o § 69 ZoCP a § 289 ods. 2 TZ.
 */
export const drinkDriving: CampaignData = {
  id: "drink-driving",
  pathname: "/drink-driving",
  group: "situacie",

  meta: {
    title: "Alkohol za volantom a zadržaný vodičský preukaz | kohút & partners",
    description:
      "Zadržali vám vodičský preukaz po dychovej skúške alebo vám prišiel trestný rozkaz? Na odpor je osem dní. Vysvetlíme rozdiel medzi priestupkom a trestným činom, zákaz činnosti aj podmienky vrátenia vodičského preukazu. Prvé posúdenie zadarmo, celá SR.",
  },

  hero: {
    overline: "Trestné právo · celá SR",
    h1: "Zadržali vám vodičský preukaz pre alkohol?",
    lead: "Jazda pod vplyvom alkoholu sa rieši buď ako priestupok, alebo ako trestný čin ohrozenia pod vplyvom návykovej látky. Od toho závisí, kto vo veci rozhoduje, aká sankcia hrozí a na ako dlho prídete o možnosť viesť vozidlo. Ak súd vydá trestný rozkaz, na odpor je len osem dní.",
    paragraphs: [
      "Pošlite nám potvrdenie o zadržaní vodičského preukazu, uznesenie o vznesení obvinenia alebo trestný rozkaz. Obratom vám napíšeme, v akom konaní ste, aké lehoty vám bežia a čo sa dá vo vašej situácii urobiť. Za toto prvé posúdenie nič neplatíte.",
      "Vec vedieme pre klientov z celého Slovenska a na všetko, čo nám poviete, sa vzťahuje advokátska mlčanlivosť. Nemoralizujeme a nič nezľahčujeme — vysvetlíme vám, čo hrozí, aké máte možnosti a čo bude treba splniť pred vrátením vodičského preukazu.",
    ],
    cta: "Poslať dokument na posúdenie",
  },

  reasons: {
    overline: "Čo rozhoduje",
    heading: "Na čom v týchto veciach záleží",
    lead: "Výsledok neurčuje len nameraná hodnota. Rozhoduje aj to, ako bol skutok právne kvalifikovaný, či je zadržanie vodičského preukazu stále odôvodnené a ktorý spôsob skončenia veci prichádza do úvahy.",
    items: [
      {
        title: "Priestupok, alebo trestný čin",
        desc: "Trestného činu sa dopustí ten, kto v „stave vylučujúcom spôsobilosť“, ktorý si privodil vplyvom návykovej látky, vykonáva činnosť, pri ktorej by mohol ohroziť život alebo zdravie ľudí — typicky vedie vozidlo; hrozí zaň odňatie slobody až na jeden rok (§ 289 ods. 1 Trestného zákona). Rovnako sa trestá odmietnutie dychovej skúšky alebo odberu krvi (§ 289 ods. 2). Ovplyvnenie, ktoré tento stav nedosahuje, sa rieši ako priestupok. Trestný zákon hranicu nevyjadruje číslom — posudzuje sa podľa výsledku vyšetrenia a okolností prípadu.",
      },
      {
        title: "Zadržanie vodičského preukazu",
        desc: "Policajt môže vodičský preukaz zadržať na mieste, ak za skutok možno uložiť zákaz viesť motorové vozidlo, a to až do právoplatného skončenia veci (§ 70 ods. 1 písm. a) a ods. 3 zákona o cestnej premávke). Orgán, ktorý vo veci koná, však musí v každom štádiu skúmať, či je zadržanie stále odôvodnené; ak dôvody pominuli, preukaz sa musí bezodkladne vrátiť (§ 70 ods. 6).",
      },
      {
        title: "Zákaz činnosti a jeho dĺžka",
        desc: "Za trestný čin môže súd uložiť zákaz viesť motorové vozidlá na jeden rok až desať rokov (§ 61 ods. 2 Trestného zákona). Do zákazu sa započítava čas, počas ktorého ste už pred právoplatnosťou rozhodnutia nesmeli na základe opatrenia štátneho orgánu viesť vozidlo (§ 61 ods. 8) — spravidla teda aj čas zadržania vodičského preukazu. Po výkone polovice zákazu možno žiadať o podmienečné upustenie od jeho zvyšku (§ 69).",
      },
      {
        title: "Spôsob skončenia veci",
        desc: "Ohrozenie pod vplyvom návykovej látky je v základnej skutkovej podstate prečin, pri ktorom zákon pripúšťa podmienečné zastavenie trestného stíhania: so súhlasom obvineného, ak vyhlási, že skutok spáchal, nahradil prípadnú škodu a také rozhodnutie možno považovať za dostačujúce (§ 216 ods. 1 Trestného poriadku). Skúšobná doba je jeden rok až päť rokov a možno v nej uložiť povinnosť zdržať sa činnosti, ktorá k prečinu viedla (§ 216 ods. 2 a 4). Rozhoduje o tom prokurátor a právny nárok naň nie je.",
      },
    ],
  },

  scope: {
    overline: "Rozsah",
    heading: "S čím pomáhame",
    lead: "Pomáhame v trestnej aj priestupkovej rovine — od zadržania vodičského preukazu cez samotné konanie až po kroky, ktoré treba urobiť po uplynutí zákazu. Náhradu škody a odškodnenie zranených po nehode riešime ako samostatnú agendu.",
    items: [
      "Zadržaný vodičský preukaz po dychovej skúške alebo odbere krvi",
      "Obvinenie z ohrozenia pod vplyvom návykovej látky vrátane odmietnutia vyšetrenia (§ 289 Trestného zákona)",
      "Trestný rozkaz a odpor proti nemu",
      "Priestupkové konanie pre alkohol za volantom",
      "Dopravná nehoda pod vplyvom alkoholu — obhajoba vodiča",
      "Jazda počas zákazu činnosti — marenie výkonu úradného rozhodnutia",
      "Podmienečné upustenie od výkonu zvyšku zákazu činnosti",
      "Vrátenie vodičského preukazu — preskúšanie, vyšetrenie a odborné poradenstvo",
    ],
  },

  steps: [
    {
      title: "Prvé posúdenie zadarmo",
      desc: "Pošlete potvrdenie o zadržaní vodičského preukazu, uznesenie alebo trestný rozkaz. Obratom vám napíšeme, či sa vec rieši ako priestupok alebo trestný čin, aké lehoty bežia a čo odporúčame.",
    },
    {
      title: "Porada a obhajoba pri výsluchu",
      desc: "Pred výsluchom prejdeme vaše práva vrátane práva odoprieť vypovedať (§ 34 ods. 1 Trestného poriadku) a postup, ktorý je vo vašej veci rozumný. Na výsluchu sme s vami.",
    },
    {
      title: "Konanie a opravné prostriedky",
      desc: "Podľa situácie podáme sťažnosť proti obvineniu alebo odpor proti trestnému rozkazu, rokujeme s prokurátorom o podmienečnom zastavení trestného stíhania či o dohode o vine a treste a zastupujeme vás pred súdom alebo v priestupkovom konaní.",
    },
    {
      title: "Po rozhodnutí",
      desc: "Sledujeme uplynutie polovice zákazu činnosti, pripravíme návrh na podmienečné upustenie od výkonu jeho zvyšku a prevedieme vás tým, čo treba splniť pred vrátením vodičského preukazu — preskúšanie odbornej spôsobilosti, vyšetrenie u psychiatra a odborné poradenstvo.",
    },
  ],

  deadline: {
    heading: "Osem dní na odpor proti trestnému rozkazu",
    body: "Trestným rozkazom môže samosudca bez hlavného pojednávania uložiť aj trest zákazu činnosti (§ 353 ods. 1 a 2 Trestného poriadku). Odpor sa podáva do ôsmich dní od doručenia na súde, ktorý rozkaz vydal; ak sa doručuje vám aj obhajcovi, lehota plynie od neskoršieho doručenia (§ 355 ods. 1). Ak odpor nepodáte, trestný rozkaz sa stane právoplatným a vykonateľným (§ 356). Po včas podanom odpore súd nariadi hlavné pojednávanie a nie je viazaný druhom ani výmerou trestu z rozkazu (§ 355 ods. 3) — trest teda môže byť miernejší aj prísnejší, a preto treba odpor zvážiť ešte v lehote. Ak vám bolo vznesené obvinenie, na sťažnosť sú len tri pracovné dni od oznámenia uznesenia (§ 187 ods. 1). A pri vodičovi zadržanom priamo pri čine môže vec prebehnúť veľmi rýchlo: prokurátor ho môže do 48 hodín od zadržania odovzdať súdu spolu s obžalobou (§ 204 ods. 1).",
  },

  pricing: {
    heading: "Koľko to stojí",
    lead: "Cenu poznáte skôr, než čokoľvek podpíšete. Závisí od toho, či ide o priestupok alebo trestný čin, a od štádia, v ktorom sa vec nachádza.",
    items: [
      {
        label: "Prvé posúdenie",
        value: "zadarmo",
        desc: "Preštudujeme potvrdenie o zadržaní vodičského preukazu, uznesenie alebo trestný rozkaz a napíšeme vám, v akom konaní ste a aké lehoty bežia. Nezaväzuje vás to k ničomu.",
      },
      {
        label: "Konzultácia (30 min)",
        value: "50 € s DPH",
        desc: "Osobne, telefonicky alebo cez videohovor. Prejdeme hroziace sankcie, možné spôsoby skončenia veci a podmienky vrátenia vodičského preukazu.",
      },
      {
        label: "Obhajoba pri výsluchu",
        value: "290 € s DPH",
        desc: "Účasť advokáta na výsluchu a okamžitá právna pomoc.",
      },
      {
        label: "Obhajoba v konaní",
        value: "pevná cena vopred alebo advokátska tarifa",
        desc: "Zastupovanie v priestupkovom alebo trestnom konaní vrátane opravných prostriedkov. Pevnú cenu alebo odmenu podľa advokátskej tarify dohodneme písomne skôr, než vec prevezmeme.",
      },
    ],
  },

  form: {
    title: "Pošlite nám, čo ste dostali",
    leads: [
      "Obratom vám napíšeme, či sa vec rieši ako priestupok alebo trestný čin, aké lehoty vám bežia a čo odporúčame urobiť ako prvé. Za prvé posúdenie nič neplatíte.",
      "Na všetko, čo nám napíšete, sa vzťahuje advokátska mlčanlivosť. Ak vám už bol doručený trestný rozkaz alebo máte určený termín výsluchu, uveďte dátum — ozveme sa prednostne.",
    ],
    fields: [
      {
        name: "incidentDate",
        label: "Kedy sa to stalo",
        placeholder: "napr. 6. 9. 2026",
      },
      {
        name: "measuredValue",
        label: "Nameraná hodnota (ak ju poznáte)",
        placeholder: "napr. 0,62 mg/l alebo odmietnutie skúšky",
      },
      {
        name: "deliveryDate",
        label: "Dátum doručenia rozkazu alebo uznesenia",
        placeholder: "ak vám už niečo prišlo",
      },
    ],
    messageLabel: "Ako kontrola alebo nehoda prebehla a čo vám odvtedy prišlo",
    subject: "Alkohol za volantom — podklady",
    documents: [
      "potvrdenie o zadržaní vodičského preukazu",
      "rozhodnutie o zadržaní vodičského preukazu, ak už bolo vydané",
      "uznesenie o vznesení obvinenia, trestný rozkaz alebo rozhodnutie o priestupku",
      "zápisnicu alebo záznam o dychovej skúške, ak ich máte",
    ],
    submit: "Chcem bezplatné posúdenie",
  },

  faq: [
    {
      q: "Kedy je alkohol za volantom priestupok a kedy trestný čin?",
      a: "Trestný zákon postihuje vedenie vozidla v „stave vylučujúcom spôsobilosť“, ktorý si vodič privodil vplyvom návykovej látky; sadzba je až jeden rok (§ 289 ods. 1). Až dva roky hrozia tomu, kto bol za taký alebo obdobný čin v predchádzajúcich 24 mesiacoch odsúdený alebo postihnutý, alebo kto spôsobil ublíženie na zdraví či väčšiu škodu (§ 289 ods. 3); vodičovi prostriedku hromadnej prepravy dva roky až päť rokov (§ 289 ods. 4). Trestným činom je aj odmietnutie dychovej skúšky či odberu krvi (§ 289 ods. 2). Ovplyvnenie, ktoré uvedený stav nedosahuje, sa prejednáva ako priestupok — pošlite nám výsledok merania a povieme vám, v ktorej rovine sa vec pohybuje.",
    },
    {
      q: "Zadržali mi vodičský preukaz. Môžem zatiaľ jazdiť a kedy mi ho vrátia?",
      a: "Počas zadržania vodičského preukazu viesť motorové vozidlo nesmiete (§ 4 ods. 2 písm. a) zákona o cestnej premávke); výnimkou je jazda, ktorú policajt povolil v potvrdení o zadržaní, najviac na 15 dní (§ 70 ods. 4). Ak za skutok možno uložiť zákaz viesť motorové vozidlo, preukaz možno zadržať až do právoplatného skončenia veci (§ 70 ods. 3) a orgán Policajného zboru o tom spravidla do 15 dní vydá rozhodnutie (§ 70 ods. 7). Ak dôvody zadržania pominú, preukaz sa musí bezodkladne vrátiť (§ 70 ods. 6).",
    },
    {
      q: "Prišiel mi trestný rozkaz so zákazom činnosti. Oplatí sa podať odpor?",
      a: "Závisí od toho, čo chcete dosiahnuť a aké sú dôkazy. Odpor treba podať do ôsmich dní od doručenia (§ 355 ods. 1 Trestného poriadku); súd potom nariadi hlavné pojednávanie a nie je viazaný druhom ani výmerou trestu z rozkazu (§ 355 ods. 3). Výsledok teda môže byť miernejší, ale aj prísnejší. Pošlite nám rozkaz hneď po doručení — odporúčanie vám dáme ešte v lehote.",
    },
    {
      q: "Na ako dlho môžem prísť o vodičský preukaz?",
      a: "Za trestný čin môže súd uložiť zákaz viesť motorové vozidlá na jeden rok až desať rokov (§ 61 ods. 2 Trestného zákona). Kto už bol za ohrozenie pod vplyvom návykovej látky ako vodič odsúdený, dostane zákaz v hornej polovici sadzby, a kto bol takto odsúdený dvakrát, na doživotie (§ 61 ods. 3 a 5). V priestupkovom konaní ukladá zákaz činnosti správny orgán podľa zákona o priestupkoch. Kto v priebehu piatich rokov dvakrát poruší pravidlá cestnej premávky požitím alkoholu, tomu sa navyše odoberie vodičské oprávnenie (§ 92 ods. 3 písm. b) zákona o cestnej premávke). Jazda počas zákazu je trestným činom marenia výkonu úradného rozhodnutia so sadzbou až dva roky (§ 348 ods. 1 písm. d) Trestného zákona).",
    },
    {
      q: "Dá sa zákaz činnosti skrátiť?",
      a: "Po výkone polovice trestu zákazu činnosti môže súd podmienečne upustiť od výkonu jeho zvyšku, ak ste spôsobom života preukázali, že ďalší výkon trestu nie je potrebný (§ 69 ods. 1 Trestného zákona). Určí pritom skúšobnú dobu až na päť rokov, nie kratšiu ako zvyšok trestu (§ 69 ods. 2). Zákon to vylučuje, ak vám bol zákaz viesť motorové vozidlo za čin spáchaný pod vplyvom návykovej látky uložený už v predchádzajúcich desiatich rokoch, alebo ak ide o zákaz uložený podľa § 61 ods. 3 až 5 (§ 69 ods. 4 a 5). Rozhoduje súd, ktorý vo veci konal v prvom stupni (§ 437 ods. 4 Trestného poriadku).",
    },
    {
      q: "Zákaz mi uplynul. Dostanem vodičský preukaz automaticky späť?",
      a: "Nie. Po uplynutí zákazu činnosti sa musíte podrobiť preskúšaniu odbornej spôsobilosti — teoretickej skúške; ak ste nesmeli viesť vozidlo dva roky a viac, aj preskúmaniu zdravotnej a psychickej spôsobilosti a skúške z vedenia vozidla (§ 91 ods. 6, § 79 ods. 2 zákona o cestnej premávke). Pri alkohole navyše polícia rozhodne o vyšetrení u psychiatra, ktorému sa treba podrobiť do 30 dní od doručenia rozhodnutia, a spravidla aj o odbornom poradenstve u psychológa (§ 91 ods. 4). Kto sa nepodrobí, tomu sa vodičské oprávnenie odoberie (§ 92 ods. 2 písm. e)); náklady znáša vodič (§ 91 ods. 13).",
    },
  ],

  relatedServiceId: "trestne",
  relatedServiceLabel: "Trestné právo",
};
