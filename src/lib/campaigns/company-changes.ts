import type { CampaignData } from "./types";

/**
 * Zmeny v s.r.o. (katalóg A4) + vymenovanie/odvolanie konateľa (A4b).
 * A4: 149 € / ďalšia zmena +49 €, poplatok 50 € na celý návrh.
 * A4b: jednoosobová 199 € (autorizácia advokátom, § 132 ods. 1 posledná veta),
 * viacosobová 149 € + notárska zápisnica (§ 127a ods. 4 písm. c) — advokát
 * nie je alternatívou). Podpisový vzor: § 34 písm. g) zák. 29/2026;
 * autorizovaný netreba osvedčovať (§ 50 ods. 4).
 */
export const companyChanges: CampaignData = {
  id: "company-changes",
  pathname: "/company-changes",
  group: "produkt",

  meta: {
    title: "Zmena konateľa, sídla či názvu s.r.o. 2026 — zápis do OR od 149 € | kohút & partners",
    description:
      "Zapíšeme zmenu v s.r.o.: sídlo, obchodné meno, predmet podnikania od 149 €; vymenovanie alebo odvolanie konateľa od 149 € — pri jednoosobovej s.r.o. bez notára, autorizáciou advokátom. + 50 € súdny poplatok.",
  },

  hero: {
    overline: "Zmeny v s.r.o. · celá SR",
    h1: "Zmena v s.r.o. — od rozhodnutia po zápis v obchodnom registri",
    lead: "Nové sídlo, obchodné meno, predmet podnikania, konateľ. Pripravíme rozhodnutie v zákonom vyžadovanej forme, listiny do zbierky dokumentov a návrh na zápis — jeden súdny poplatok 50 € pokryje všetky zmeny v jednom návrhu.",
    paragraphs: [
      "Pri vymenovaní alebo odvolaní konateľa platí od 17. augusta 2026 prísnejšia forma: pri jednoosobovej s.r.o. notárska zápisnica alebo dokument autorizovaný advokátom, pri viacosobovej výlučne notárska zápisnica o priebehu valného zhromaždenia. Obyčajné rozhodnutie s osvedčeným podpisom už nestačí.",
      "Jednoosobová s.r.o. u nás vybaví zmenu konateľa úplne bez notára — rozhodnutie aj podpisový vzor nového konateľa autorizujeme ako advokáti.",
    ],
    cta: "Chcem zapísať zmenu",
  },

  reasons: {
    overline: "Formy rozhodnutí",
    heading: "Ktorá zmena vyžaduje akú formu",
    lead: "Od 17. augusta 2026 rozlišuje Obchodný zákonník tri režimy — a rozdiel medzi nimi rozhoduje o tom, či súd zmenu zapíše.",
    items: [
      {
        title: "Bežné zmeny — podpis",
        desc: "Zmena sídla, obchodného mena či predmetu podnikania: rozhodnutie stačí podpísať a doplniť súvisiace listiny — súhlas vlastníka nehnuteľnosti so sídlom, ohlásenie živností pri novom predmete.",
      },
      {
        title: "Konateľ v jednoosobovej s.r.o.",
        desc: "Rozhodnutie jediného spoločníka o vymenovaní alebo odvolaní konateľa musí byť notárskou zápisnicou alebo dokumentom autorizovaným advokátom (§ 132 ods. 1 ObchZ). Autorizujeme ho my — k notárovi netreba.",
      },
      {
        title: "Konateľ vo viacosobovej s.r.o.",
        desc: "Priebeh valného zhromaždenia o konateľoch musí osvedčiť notárska zápisnica (§ 127a ods. 4 ObchZ) — tu advokát alternatívou nie je. Pripravíme podklady, zorganizujeme termín u notára a dotiahneme zápis.",
      },
      {
        title: "Podpisový vzor bez notára",
        desc: "Podpisový vzor nového konateľa sa inak podpisuje pred notárom alebo na obci (§ 34 písm. g) zákona o obchodnom registri). Pri dokumente autorizovanom advokátom osvedčenie odpadá (§ 50 ods. 4).",
      },
    ],
  },

  scope: {
    overline: "Rozsah",
    heading: "Ktoré zmeny zapisujeme",
    lead: "Jeden návrh unesie viac zmien naraz — súdny poplatok 50 € sa platí za návrh, nie za každú zmenu.",
    items: [
      "Vymenovanie a odvolanie konateľa vrátane podpisového vzoru a súhlasu s funkciou",
      "Zmena sídla spoločnosti so súhlasom vlastníka nehnuteľnosti",
      "Zmena obchodného mena s preverením kolízie v registri",
      "Rozšírenie alebo zúženie predmetov podnikania vrátane ohlásenia živností",
      "Zmena spôsobu konania za spoločnosť",
      "Zvýšenie základného imania",
      "Úplné znenie spoločenskej zmluvy alebo zakladateľskej listiny po zmene",
    ],
  },

  steps: [
    {
      title: "Podklady",
      desc: "Pošlete IČO a to, čo sa mení. Preveríme spoločenskú zmluvu a pri konateľovi aj register diskvalifikácií a register poverení na vykonanie exekúcie — osoba vedená ako povinný sa konateľom zapísať nedá.",
    },
    {
      title: "Rozhodnutie v správnej forme",
      desc: "Pripravíme rozhodnutie jediného spoločníka alebo zápisnicu z valného zhromaždenia. Kde zákon vyžaduje autorizáciu, autorizujeme; kde notársku zápisnicu, zorganizujeme termín u notára.",
    },
    {
      title: "Listiny a návrh",
      desc: "Doplníme listiny do zbierky dokumentov — súhlas s funkciou, podpisový vzor, úplné znenie zakladateľského dokumentu — a podáme elektronický návrh na zápis so súdnym poplatkom 50 €.",
    },
    {
      title: "Zápis do 2 pracovných dní",
      desc: "Registrový súd zapíše zmenu do dvoch pracovných dní od úplného návrhu (§ 58 ods. 1 zákona o obchodnom registri). Dostanete výpis z registra a kompletnú dokumentáciu.",
    },
  ],

  deadline: {
    heading: "Rozhodnutia od 17. augusta 2026 už len v novej forme",
    body: "Rozhodnutie o vymenovaní alebo odvolaní konateľa prijaté od 17. augusta 2026 už musí mať novú formu, inak registrový súd zápis nevykoná a súdny poplatok prepadne. Ak ste rozhodnutie podpísali ešte v starom režime, ale návrh ste do 16. augusta 2026 nepodali, treba ho prijať nanovo — konanie sa posudzuje podľa predpisov účinných v čase podania návrhu (§ 126 ods. 1 zákona č. 29/2026 Z. z.).",
  },

  pricing: {
    heading: "Koľko to stojí",
    lead: "Ceny sú s DPH, súdny poplatok sa platí v skutočnej výške. Viac zmien v jednom návrhu = jeden poplatok.",
    items: [
      {
        label: "Zmena v s.r.o.",
        value: "149 € s DPH",
        desc: "Sídlo, obchodné meno, predmet podnikania alebo spôsob konania — jedna zmena vrátane úplného znenia dokumentov. Každá ďalšia zmena v tom istom návrhu +49 €.",
      },
      {
        label: "Konateľ — jednoosobová s.r.o.",
        value: "199 € s DPH",
        desc: "Vymenovanie alebo odvolanie konateľa s autorizáciou rozhodnutia aj podpisového vzoru advokátom — úplne bez návštevy notára.",
      },
      {
        label: "Konateľ — viacosobová s.r.o.",
        value: "149 € s DPH + notár",
        desc: "Príprava podkladov na valné zhromaždenie, sprevádzanie u notára a zápis. Odmenu notára za zápisnicu určuje notárska tarifa a účtuje ju notár samostatne.",
      },
    ],
  },

  form: {
    title: "Napíšte nám, čo sa vo firme mení",
    leads: [
      "Ozveme sa do jedného pracovného dňa s potvrdením ceny a zoznamom podkladov. Pri konateľovi hneď preveríme, či zápisu nebráni prekážka v registroch.",
      "Meníte viac vecí naraz? Spojíme ich do jedného návrhu — zaplatíte jeden súdny poplatok.",
    ],
    fields: [
      { name: "ico", label: "IČO spoločnosti", placeholder: "napr. 47 123 456" },
      { name: "change", label: "Čo sa mení", placeholder: "napr. nový konateľ + sídlo" },
      { name: "members", label: "Počet spoločníkov", placeholder: "napr. 1" },
    ],
    messageLabel: "Podrobnosti zmeny",
    subject: "Zmena v s.r.o. — podklady",
    documents: [
      "aktuálna spoločenská zmluva alebo zakladateľská listina",
      "pri novom konateľovi jeho občiansky preukaz",
      "pri zmene sídla súhlas vlastníka alebo list vlastníctva",
    ],
    submit: "Chcem zapísať zmenu",
  },

  faq: [
    {
      q: "Prečo je zmena konateľa drahšia než zmena sídla?",
      a: "Lebo zákon pre ňu vyžaduje osobitnú formu. Pri jednoosobovej s.r.o. rozhodnutie autorizujeme — advokát pri autorizácii zisťuje totožnosť, posudzuje zákonnosť úkonu a dokument v ten istý deň ukladá do registra autorizácií komory. Pri bežných zmenách táto práca odpadá, preto stoja 149 €.",
    },
    {
      q: "Sme dvaja spoločníci. Naozaj musíme kvôli konateľovi k notárovi?",
      a: "Áno — priebeh valného zhromaždenia o vymenovaní alebo odvolaní konateľa musí byť osvedčený notárskou zápisnicou (§ 127a ods. 4 ObchZ) a advokát tu nie je alternatívou. Pripravíme všetko tak, aby ste u notára strávili jediné stretnutie.",
    },
    {
      q: "Nový konateľ podpísal rozhodnutie doma s osvedčeným podpisom. Platí to?",
      a: "Ak bolo rozhodnutie prijaté od 17. augusta 2026, nie — vyžaduje sa notárska zápisnica alebo dokument autorizovaný advokátom a súd zápis nevykoná. Rozhodnutie treba prijať nanovo v správnej forme; existujúci text poslúži ako podklad.",
    },
    {
      q: "Dá sa so zmenou konateľa spojiť aj zmena sídla či mena?",
      a: "Áno, a oplatí sa to: všetky zmeny idú jedným návrhom s jedným súdnym poplatkom 50 €. Každá ďalšia zmena k tej prvej stojí u nás 49 €.",
    },
    {
      q: "Ako rýchlo bude zmena zapísaná?",
      a: "Registrový súd zapíše zmenu do dvoch pracovných dní od doručenia úplného návrhu. S prípravou dokumentov počítajte spolu tri až päť pracovných dní pri jednoosobovej spoločnosti; pri viacosobovej závisí termín od notára.",
    },
  ],

  relatedServiceId: "obchod",
  relatedServiceLabel: "Obchodné právo a firemná agenda",
};
