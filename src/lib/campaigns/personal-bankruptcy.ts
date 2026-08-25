import type { CampaignData } from "./types";

/**
 * Osobný bankrot — príprava a ochrana dlžníka (katalóg, samostatný balík).
 * ZKR: § 166k (podanie návrhu len cez CPP / CPP-určeného advokáta — povedané
 * otvorene), § 166 ods. 3 (exekúcia; 1 rok pri konkurze), § 167 ods. 2
 * (obsah návrhu), § 166g poctivý zámer, § 166f zrušenie oddlženia do 6 rokov,
 * § 166d obydlie, § 166c nedotknuté pohľadávky. 149 € príprava · od 290 €
 * zastúpenie počas konkurzu · obrana proti zrušeniu dohodou.
 */
export const personalBankruptcy: CampaignData = {
  id: "personal-bankruptcy",
  pathname: "/personal-bankruptcy",
  group: "produkt",

  meta: {
    title: "Osobný bankrot 2026 — príprava podkladov a ochrana dlžníka za 149 € | kohút & partners",
    description:
      "Osobný bankrot bez chýb: posúdenie podmienok, konkurz vs. splátkový kalendár, kompletné podklady pre Centrum právnej pomoci a poučenie o poctivom zámere. Zastúpenie počas konkurzu aj obrana proti zrušeniu oddlženia. Od 149 €.",
  },

  hero: {
    overline: "Osobný bankrot · celá SR",
    h1: "Osobný bankrot — pripravíme vás naň tak, aby oddlženie vydržalo",
    lead: "Návrh na oddlženie za vás podá Centrum právnej pomoci — tak to určuje zákon. Všetko ostatné je na vás: podmienky, kompletné zoznamy, poctivý zámer a ochrana majetku počas konkurzu aj šesť rokov po ňom. Presne s tým pomáhame my.",
    paragraphs: [
      "Posúdime, či podmienky oddlženia spĺňate, ktorá forma je pre vás správna — konkurz alebo splátkový kalendár — a pripravíme kompletné podklady, ktoré návrh vyžaduje: životopis, zoznamy majetku a veriteľov, spriaznené osoby, doklad o exekúcii. Do Centra právnej pomoci prídete pripravení a bez rizika, že na niečo zabudnete.",
      "Po vyhlásení konkurzu vás zastupujeme voči správcovi: strážime nepostihnuteľnú hodnotu obydlia, kontrolujeme speňažovanie a dbáme, aby vaša súčinnosť bola preukázateľná — lebo oddlženie sa dá do šiestich rokov zrušiť.",
    ],
    cta: "Chcem posúdenie zadarmo",
  },

  reasons: {
    overline: "Čo treba vedieť",
    heading: "Štyri veci, ktoré o oddlžení rozhodujú",
    lead: "Oddlženie nie je formulár — je to konanie s podmienkami na vstupe a skúšobnou dobou na konci. Chyba na začiatku sa vracia aj po rokoch.",
    items: [
      {
        title: "Podmienky vstupu",
        desc: "Návrh možno podať, len ak sa voči vám vedie exekúcia alebo obdobné konanie; pri konkurze musí od poverenia exekútora uplynúť aspoň rok (§ 166 ods. 3 ZKR). Opakované oddlženie má desaťročnú prekážku. Posúdime to skôr, než strávite mesiace čakaním.",
      },
      {
        title: "Konkurz či splátkový kalendár",
        desc: "Konkurz speňažuje majetok, splátkový kalendár chráni majetok výmenou za splácanie časti dlhov z príjmu. Ktorá cesta je vaša, závisí od majetku, príjmu a štruktúry dlhov — prepočítame obe.",
      },
      {
        title: "Čo oddlženie nevyrieši",
        desc: "Výživné na dieťa, škoda na zdraví, úmyselne spôsobená škoda, peňažné tresty či zabezpečené pohľadávky v rozsahu zabezpečenia sa neoddlžujú (§ 166c ZKR). Povieme vám vopred, čo vám po oddlžení ostane — bez ružových okuliarov.",
      },
      {
        title: "Poctivý zámer a 6 rokov po",
        desc: "Veriteľ môže do šiestich rokov navrhnúť zrušenie oddlženia pre nepoctivý zámer — napríklad zatajený majetok či zabudnutý veriteľ — a dlhy sa obnovia v plnej výške (§ 166f, § 166g ZKR). Naša príprava je stavaná presne na to, aby taký návrh nemal o čo oprieť.",
      },
    ],
  },

  scope: {
    overline: "Rozsah",
    heading: "S čím pomáhame",
    lead: "Od prvého posúdenia po ochranu v šesťročnej dobe po oddlžení. Samotné podanie návrhu robí Centrum právnej pomoci — na to zákon advokáta mimo Centra nepripúšťa.",
    items: [
      "Posúdenie podmienok oddlženia a voľba konkurz / splátkový kalendár",
      "Kompletné podklady pre Centrum právnej pomoci podľa § 167 ods. 2 ZKR",
      "Výpočet nepostihnuteľnej hodnoty obydlia (§ 166d)",
      "Poučenie o poctivom zámere — čo robiť a nerobiť pred podaním aj po ňom",
      "Zastúpenie voči správcovi počas konkurzu",
      "Kontrola speňažovania a ochrana obydlia",
      "Obrana proti návrhu na zrušenie oddlženia (§ 166f)",
    ],
  },

  steps: [
    {
      title: "Posúdenie zadarmo",
      desc: "Napíšete nám o dlhoch a exekúciách. Do troch pracovných dní vám povieme, či podmienky spĺňate, ktorá forma sedí a čo vám oddlženie reálne prinesie — vrátane toho, čo sa neoddlží.",
    },
    {
      title: "Príprava podkladov — 149 €",
      desc: "Spracujeme všetko, čo návrh vyžaduje: životopis s opisom situácie, zoznam majetku aj majetku väčšej hodnoty za posledné tri roky, zoznam veriteľov, spriaznené osoby a doklad o exekúcii nie starší ako 30 dní.",
    },
    {
      title: "Centrum právnej pomoci",
      desc: "S pripravenými podkladmi podáte žiadosť v Centre právnej pomoci, ktoré návrh na súd podá za vás (§ 166k ZKR). Ako postupovať v Centre vám presne vysvetlíme — vrátane toho, čo na stretnutí povedať a doložiť.",
    },
    {
      title: "Ochrana počas konkurzu a po ňom",
      desc: "Po ustanovení správcu vás na základe plnomocenstva zastupujeme: komunikácia so správcom, ochrana obydlia, preukázateľná súčinnosť. Ak veriteľ navrhne zrušenie oddlženia, bránime vás.",
    },
  ],

  deadline: {
    heading: "Rok exekúcie pred konkurzom — počítajte správne",
    body: "Oddlženie konkurzom je prístupné, len ak od poverenia exekútora na vykonanie exekúcie uplynul aspoň jeden rok (§ 166 ods. 3 ZKR). Kto podá skôr, návrh neprejde a čaká ďalej. Naopak — každý mesiac navyše v exekúcii znamená zrážky zo mzdy, blokovaný účet a rastúce príslušenstvo. Správne načasovanie je preto prvá vec, ktorú posúdime; a doklad o exekúcii nesmie byť pri podaní starší ako 30 dní, takže podklady treba skladať v správnom poradí, nie na hromadu.",
  },

  pricing: {
    heading: "Koľko to stojí",
    lead: "Ceny s DPH, povedané vopred. Preddavok na odmenu správcu skladá Centrum právnej pomoci — nie je naším príjmom.",
    items: [
      {
        label: "Posúdenie situácie",
        value: "zadarmo",
        desc: "Či podmienky spĺňate, ktorá forma oddlženia sedí a čo sa neoddlží. Do troch pracovných dní, bez záväzku.",
      },
      {
        label: "Príprava na oddlženie",
        value: "149 € s DPH",
        desc: "Voľba cesty, kompletné podklady pre Centrum právnej pomoci podľa § 167 ods. 2 ZKR a poučenie o poctivom zámere.",
      },
      {
        label: "Zastúpenie počas konkurzu",
        value: "od 290 € s DPH",
        desc: "Komunikácia so správcom, ochrana obydlia a kontrola speňažovania. Obrana proti návrhu na zrušenie oddlženia sa dohodne samostatne podľa rozsahu.",
      },
    ],
  },

  form: {
    title: "Napíšte nám o svojich dlhoch",
    leads: [
      "Do troch pracovných dní dostanete posúdenie zadarmo: či máte na oddlženie nárok, ktorou formou a čo presne vám vyrieši. Píšte otvorene — všetko, čo nám napíšete, kryje advokátska mlčanlivosť.",
      "Podanie návrhu na súd vybavuje Centrum právnej pomoci bezplatne — naša práca je to, čo Centrum nerobí: príprava, stratégia a ochrana vašich záujmov počas konkurzu aj po ňom.",
    ],
    fields: [
      { name: "debts", label: "Približná výška dlhov", placeholder: "napr. 35 000 €" },
      { name: "execution", label: "Exekúcie — od kedy", placeholder: "napr. dve, prvá od 2023" },
      { name: "assets", label: "Majetok a príjem", placeholder: "napr. byt v podiele 1/2, mzda 1 100 €" },
    ],
    messageLabel: "Vaša situácia vlastnými slovami",
    subject: "Osobný bankrot — podklady",
    documents: [
      "upovedomenia o exekúciách, ktoré máte",
      "prehľad veriteľov a dlhov, hoci neúplný",
      "doklad o príjme",
    ],
    submit: "Chcem posúdenie zadarmo",
  },

  faq: [
    {
      q: "Prečo nemôžete návrh podať vy, keď ste advokáti?",
      a: "Zákon určuje, že pri podaní návrhu na vyhlásenie konkurzu alebo určenie splátkového kalendára musí byť dlžník zastúpený Centrom právnej pomoci alebo advokátom, ktorého určí Centrum (§ 166k ZKR) — až do ustanovenia správcu. Hovoríme to otvorene: podanie vybaví Centrum. Naša úloha je predtým a potom — príprava bez chýb a ochrana vašich záujmov, keď už konkurz beží.",
    },
    {
      q: "Prídem v konkurze o byt?",
      a: "Nie nutne o celú hodnotu. Zákon chráni nepostihnuteľnú hodnotu obydlia (§ 166d ZKR) — časť hodnoty vášho bývania, ktorá sa dlžníkovi vypláca aj pri speňažení. Či a ako sa obydlie dotkne, závisí od jeho hodnoty, tiarch a spoluvlastníctva; prepočítame to pri posúdení. A pri dostatočnom príjme môže byť cestou splátkový kalendár, ktorý majetok nespeňažuje.",
    },
    {
      q: "Zbavím sa všetkých dlhov?",
      a: "Väčšiny, ale nie všetkých. Nedotknuté ostávajú najmä výživné na dieťa, náhrada škody na zdraví, úmyselne spôsobená škoda, peňažné tresty a zabezpečené pohľadávky v rozsahu zabezpečenia — napríklad hypotéka na založenom byte (§ 166c ZKR). Presný obraz, čo vám po oddlžení ostane, je súčasť bezplatného posúdenia.",
    },
    {
      q: "Čo je poctivý zámer a prečo sa ním strašíte?",
      a: "Nestrašíme — je to os celého oddlženia. Kto zatají majetok, zabudne veriteľa alebo neposkytne súčinnosť, riskuje, že súd na návrh veriteľa oddlženie do šiestich rokov zruší a dlhy sa vrátia v plnej výške (§ 166f, § 166g ZKR). Preto robíme zoznamy poriadne a súčinnosť preukázateľne — nuda dnes je istota o šesť rokov.",
    },
    {
      q: "Mám príjem a nechcem prísť o majetok. Existuje iná cesta než konkurz?",
      a: "Áno, splátkový kalendár: majetok sa nespeňažuje a namiesto toho splácate súdom určenú časť dlhov po dobu piatich rokov. Vyžaduje pravidelný príjem a oplatí sa pri hodnotnejšom majetku. Ktorá cesta vychádza lepšie pre vás, ukáže prepočet pri posúdení — číslami, nie dojmom.",
    },
    {
      q: "Exekútor mi sťahuje zo mzdy. Zastaví to bankrot?",
      a: "Vyhlásením konkurzu sa exekučné konania na majetok podliehajúci konkurzu zastavujú a nové sa nezačínajú — zrážky a blokácie účtov sa končia. To je hlavný okamžitý efekt oddlženia. Dovtedy exekúcia beží; aj preto sa oplatí pripraviť podklady bez prieťahov.",
    },
  ],

  relatedServiceId: "insolvencie",
  relatedServiceLabel: "Insolvencie a reštrukturalizácie",
};
