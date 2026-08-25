import type { CampaignData } from "./types";

/**
 * Zrušenie a likvidácia s.r.o. (katalóg A2). Dva stupne: posúdenie 149 €,
 * vedenie likvidácie od 690 €. Rozhodnutie o zrušení: jediný spoločník —
 * autorizácia advokátom (§ 132 ods. 1 ObchZ), viacosobová — notárska
 * zápisnica (§ 127a ods. 4 písm. b?) — pozn.: zrušenie spoločnosti patrí
 * medzi rozhodnutia s úradne osvedčeným podpisom / osobitnou formou; presnú
 * formu určíme pri posúdení, na stránke sa neuvádza paušálne.
 */
export const companyLiquidation: CampaignData = {
  id: "company-liquidation",
  pathname: "/company-liquidation",
  group: "produkt",

  meta: {
    title: "Likvidácia s.r.o. a zrušenie firmy 2026 — posúdenie za 149 € | kohút & partners",
    description:
      "Zrušenie a likvidácia s.r.o. bez rizika: najprv posúdenie stavu firmy za 149 €, potom vedenie celej likvidácie od 690 € — likvidátor, vestník, závierky, výmaz z OR. Celá SR, na diaľku.",
  },

  hero: {
    overline: "Likvidácia s.r.o. · celá SR",
    h1: "Zrušenie a likvidácia s.r.o. — riadne a bez rizika pre konateľa",
    lead: "Firmu, ktorú už nepotrebujete, sa neoplatí nechať „vyhniť“. Ex offo výmaz trvá roky, počas ktorých bežia povinnosti, a konateľovi hrozí diskvalifikácia. Riadna likvidácia má jasný začiatok, priebeh aj koniec.",
    paragraphs: [
      "Začíname posúdením: preveríme záväzky, majetok, daňové nedoplatky a exekúcie a písomne odporučíme cestu — likvidáciu, predaj podielu, zlúčenie, alebo konkurz, ak je firma predlžená. Až potom sa rozhodnete, či likvidáciu zveríte nám.",
      "Likvidácia trvá zo zákona najmenej niekoľko mesiacov — lehota na prihlasovanie pohľadávok beží od zverejnenia v Obchodnom vestníku. Reálne počítajte so šiestimi až deviatimi mesiacmi.",
    ],
    cta: "Chcem posúdenie firmy",
  },

  reasons: {
    overline: "Prečo riadne",
    heading: "Čo hrozí, keď sa firma len opustí",
    lead: "Neaktívna spoločnosť nie je mŕtva spoločnosť. Povinnosti bežia ďalej a nesie ich konateľ.",
    items: [
      {
        title: "Povinnosti nezanikajú",
        desc: "Účtovné závierky, daňové priznania a odpovede úradom treba podávať, kým je firma zapísaná — aj pri nulovej činnosti. Sankcie idú za spoločnosťou a v rade prípadov za konateľom.",
      },
      {
        title: "Riziko diskvalifikácie",
        desc: "Porušovanie povinností pri „spiacej“ firme môže skončiť rozhodnutím o vylúčení — diskvalifikovaný konateľ nesmie pôsobiť v orgánoch žiadnej spoločnosti.",
      },
      {
        title: "Predlžená firma patrí do konkurzu",
        desc: "Ak záväzky prevyšujú majetok, likvidácia nie je prípustná cesta — konateľ má povinnosť podať návrh na konkurz a jej zanedbanie má osobné následky. Pri posúdení to zistíme ako prvé.",
      },
      {
        title: "Čistý koniec",
        desc: "Riadna likvidácia sa končí výmazom z obchodného registra. Žiadne visiace povinnosti, žiadne prekvapenia o tri roky — a preukázateľne poriadok pre banky aj budúce podnikanie.",
      },
    ],
  },

  scope: {
    overline: "Rozsah",
    heading: "Čo vedenie likvidácie obsahuje",
    lead: "Od rozhodnutia o zrušení po výmaz z obchodného registra. Účtovné práce robí váš účtovník, my ho vedieme v tom, čo likvidácia vyžaduje.",
    items: [
      "Rozhodnutie o zrušení spoločnosti a vstupe do likvidácie v zákonom vyžadovanej forme",
      "Ustanovenie likvidátora a zápis likvidácie do obchodného registra",
      "Oznámenie o vstupe do likvidácie v Obchodnom vestníku",
      "Zoznam prihlásených pohľadávok a ich vyporiadanie",
      "Súčinnosť s účtovníkom pri likvidačných účtovných závierkach",
      "Konečná správa likvidátora a návrh na rozdelenie likvidačného zostatku",
      "Návrh na výmaz spoločnosti z obchodného registra",
    ],
  },

  steps: [
    {
      title: "Posúdenie za 149 €",
      desc: "Preveríme záväzky, majetok, nedoplatky a exekúcie firmy a do piatich pracovných dní dostanete písomné stanovisko: ktorá cesta ukončenia je správna, koľko bude stáť a ako dlho potrvá.",
    },
    {
      title: "Vstup do likvidácie",
      desc: "Pripravíme rozhodnutie o zrušení spoločnosti, ustanovíme likvidátora, zapíšeme likvidáciu do obchodného registra a zverejníme oznámenie v Obchodnom vestníku.",
    },
    {
      title: "Priebeh likvidácie",
      desc: "Zhromaždíme prihlásené pohľadávky, vyporiadame záväzky a speňažíme majetok. S účtovníkom pripravíme likvidačné závierky.",
    },
    {
      title: "Výmaz z registra",
      desc: "Po schválení konečnej správy a rozdelení likvidačného zostatku podáme návrh na výmaz. Firma prestáva existovať — s čistým stolom.",
    },
  ],

  deadline: {
    heading: "Čím dlhšie firma spí, tým drahší je koniec",
    body: "Likvidácia trvá zo zákona najmenej niekoľko mesiacov — pohľadávky veriteľov sa prihlasujú v lehote plynúcej od zverejnenia oznámenia v Obchodnom vestníku a skôr sa likvidácia skončiť nedá. Každý mesiac odkladu k tomu pridáva ďalšie účtovné obdobia, ďalšie povinnosti a ďalšie riziko sankcií. Ak je firma predlžená, čas hrá priamo proti konateľovi: povinnosť podať návrh na konkurz má zákonnú lehotu a jej zmeškanie zakladá osobnú zodpovednosť. Posúdenie stavu firmy je preto prvý krok, nie formalita — až z neho vyplynie, či vôbec smiete likvidovať.",
  },

  pricing: {
    heading: "Koľko to stojí",
    lead: "Dva stupne, aby ste neplatili za vedenie likvidácie skôr, než je isté, že je to správna cesta. Posúdenie sa do ceny vedenia započíta.",
    items: [
      {
        label: "Posúdenie a plán ukončenia",
        value: "149 € s DPH",
        desc: "Preverenie záväzkov, majetku, nedoplatkov a exekúcií + písomné odporúčanie cesty s harmonogramom a rozpočtom. Do 5 pracovných dní.",
      },
      {
        label: "Vedenie likvidácie",
        value: "od 690 € s DPH",
        desc: "Pevnú cenu dohodneme po posúdení podľa stavu firmy — počtu veriteľov, majetku a otvorených vecí. Zaplatené posúdenie sa započíta.",
      },
      {
        label: "Poplatky tretích strán",
        value: "v skutočnej výške",
        desc: "Súdne poplatky za zápisy, zverejnenie v Obchodnom vestníku, prípadná odmena notára a účtovné práce sa účtujú samostatne, bez prirážky.",
      },
    ],
  },

  form: {
    title: "Pošlite nám IČO — začneme posúdením",
    leads: [
      "Do piatich pracovných dní od dodania podkladov dostanete písomné stanovisko: či likvidovať, predať, zlúčiť alebo riešiť konkurz — s číslami a harmonogramom.",
      "Ak je firma čistá a jednoduchá, povieme vám to tiež — vedenie likvidácie potom beží bez prieťahov.",
    ],
    fields: [
      { name: "ico", label: "IČO spoločnosti", placeholder: "napr. 47 123 456" },
      { name: "activity", label: "Firma ešte vykonáva činnosť?", placeholder: "áno / nie, od kedy" },
      { name: "debts", label: "Má firma záväzky alebo exekúcie?", placeholder: "napr. úver 12 000 €, žiadne exekúcie" },
    ],
    messageLabel: "Stav firmy vlastnými slovami",
    subject: "Likvidácia s.r.o. — podklady",
    documents: [
      "posledná účtovná závierka",
      "prehľad záväzkov a pohľadávok, ak existujú",
      "spoločenská zmluva alebo zakladateľská listina",
    ],
    submit: "Chcem posúdenie za 149 €",
  },

  faq: [
    {
      q: "Nemôžem firmu jednoducho prestať používať a nechať ju vymazať ex offo?",
      a: "Technicky sa to deje, ale je to najhoršia cesta: trvá roky, celý čas bežia povinnosti a sankcie a konateľovi hrozí diskvalifikácia. Riadna likvidácia je rýchlejšia a končí sa čistým výmazom.",
    },
    {
      q: "Firma má dlhy. Dá sa aj tak zlikvidovať?",
      a: "Záleží na pomere majetku a záväzkov. Ak majetok stačí na uspokojenie veriteľov, likvidácia prebehne — záväzky sa z neho vyporiadajú. Ak je firma predlžená, likvidácia prípustná nie je a konateľ má povinnosť riešiť konkurz. Presne toto rozlíšime pri posúdení za 149 €.",
    },
    {
      q: "Ako dlho likvidácia trvá?",
      a: "Reálne šesť až deväť mesiacov. Zákonné minimum určuje lehota na prihlasovanie pohľadávok od zverejnenia v Obchodnom vestníku; zvyšok závisí od počtu veriteľov, majetku a súčinnosti účtovníka.",
    },
    {
      q: "Kto môže byť likvidátorom?",
      a: "Spravidla konateľ alebo iná osoba zapísaná v registri fyzických osôb, so súhlasom s ustanovením. Likvidátora navrhneme podľa situácie — vrátane praktickej otázky, kto reálne urobí prácu so zoznamom pohľadávok a závierkami.",
    },
    {
      q: "Nebolo by jednoduchšie firmu predať?",
      a: "Niekedy áno — prevod obchodného podielu je rýchlejší a lacnejší než likvidácia. Musí však existovať skutočný nadobúdateľ; „predaj“ firmy s dlhmi nastrčenej osobe problém nerieši a konateľa nezbavuje zodpovednosti. Pri posúdení porovnáme obe cesty číslami.",
    },
  ],

  relatedServiceId: "obchod",
  relatedServiceLabel: "Obchodné právo a firemná agenda",
};
