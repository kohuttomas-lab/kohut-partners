import type { CampaignData } from "./types";

/**
 * Právna konzultácia s advokátom — 30 minút, 50 € s DPH (zverejnená cena,
 * Cal.com udalosť „Právna konzultácia | kohút & partners"; platba pri rezervácii).
 * Téma z návrhu č. 74 marketingového modulu: 7 dopytov typu „chcem sa len
 * poradiť" bez vlastnej vstupnej stránky.
 *
 * Overené v knižnici predpisov (20. 9. 2026):
 * - zák. 586/2003 § 23 ods. 1 — mlčanlivosť advokáta o všetkom, čo sa dozvedel
 *   v súvislosti s výkonom advokácie;
 * - zák. 586/2003 § 21 — povinnosť odmietnuť právne služby pri konflikte záujmov;
 * - príklady krátkych lehôt: TP § 355 ods. 1 (odpor proti trestnému rozkazu,
 *   8 dní), CSP § 265 ods. 1 a zák. 307/2016 § 7 ods. 2 (odpor proti platobnému
 *   rozkazu, 15 dní), ZP § 77 (neplatnosť skončenia pracovného pomeru, 2 mesiace).
 *
 * ⚖ KONTROLA (obchodné rozhodnutia, vo viditeľnom texte zámerne NIE SÚ):
 * - čo sa deje s platbou, ak po rezervácii vyjde najavo konflikt záujmov
 *   alebo vec mimo zamerania kancelárie (vrátenie platby?);
 * - či sa cena konzultácie započítava do odmeny pri následnom prevzatí veci;
 * - podmienky zmeny / zrušenia termínu klientom.
 */
export const legalConsultation: CampaignData = {
  id: "legal-consultation",
  pathname: "/legal-consultation",

  meta: {
    title: "Právna konzultácia s advokátom — 30 min za 50 € | kohút & partners",
    description:
      "Právna konzultácia s advokátom online, telefonicky alebo osobne vo Zvolene. 30 minút za 50 € s DPH: zorientujeme vás v situácii, pomenujeme možnosti a riziká a povieme, čo urobiť ako prvé. Termín si vyberiete sami.",
  },

  hero: {
    overline: "Právna konzultácia · online aj osobne",
    h1: "Právna konzultácia s advokátom — 30 minút, po ktorých viete, na čom ste",
    lead: "Nie každá právna otázka je hneď súdny spor. Často stačí polhodina s advokátom, aby ste vedeli, či problém máte, aké máte možnosti a čo vás ktorá z nich bude stáť.",
    paragraphs: [
      "Termín si vyberiete sami v online kalendári — videohovor, telefón alebo osobné stretnutie v kancelárii vo Zvolene. Pri rezervácii opíšete, čo riešite, a môžete priložiť odkaz na podklady; advokát si ich prejde vopred, takže konzultácia nezačína od nuly.",
      "Konzultácia vás k ničomu nezaväzuje. Ak bude treba vo veci pokračovať — výzvou, zmluvou, zastupovaním — dostanete návrh postupu a cenu vopred. Ak netreba, odchádzate s odpoveďou.",
    ],
    cta: "Napísať, čo riešim",
  },

  reasons: {
    overline: "Kedy sa oplatí",
    heading: "Štyri situácie, v ktorých konzultácia ušetrí najviac",
    lead: "Spoločné majú jedno: rozhodnutie, ktoré urobíte v najbližších dňoch, sa neskôr ťažko opravuje.",
    items: [
      {
        title: "Prišla vám listina a beží lehota",
        desc: "Platobný rozkaz, trestný rozkaz, výpoveď, upovedomenie o exekúcii, výzva od advokáta protistrany. Lehoty na reakciu sa počítajú v dňoch a plynú bez ohľadu na to, či ste listine rozumeli. Na konzultácii zistíte, čo listina znamená, dokedy treba reagovať a ako.",
      },
      {
        title: "Máte niečo podpísať",
        desc: "Kúpna či nájomná zmluva, pracovná zmluva, dohoda o skončení pracovného pomeru, uznanie dlhu, ručenie. Po podpise sa vyjednáva ťažko. Prejdeme s vami, čo podpisom preberáte a ktoré ustanovenia sa oplatí otvoriť.",
      },
      {
        title: "Neviete, či sa oplatí ísť do sporu",
        desc: "Niekto vám dlhuje, poškodil vás alebo neplní zmluvu. Zhodnotíme, aké máte dôkazy, aké sú reálne možnosti, koľko konanie trvá a koľko stojí — aby ste sa rozhodli s číslami v ruke, nie v hneve.",
      },
      {
        title: "Chystáte krok v podnikaní",
        desc: "Nový spoločník, prevod podielu, ukončenie firmy, veľká zákazka, prvý zamestnanec. Polhodina vopred býva lacnejšia než náprava potom — ukážeme, na čo si dať pozor a čo má byť v dokumentoch.",
      },
    ],
  },

  scope: {
    overline: "Rozsah",
    heading: "S čím sa môžete prísť poradiť",
    lead: "Konzultujeme v oblastiach, ktorým sa kancelária venuje. Ak vaša vec patrí inam, povieme vám to hneď a odporučíme, na koho sa obrátiť.",
    items: [
      "Dlhy, exekúcie, oddlženie a konkurz — na strane dlžníka aj veriteľa",
      "Zmluvy, obchodné spoločnosti a podnikanie",
      "Kúpa, predaj a nájom nehnuteľností, kataster, vecné bremená",
      "Vymáhanie pohľadávok a súdne spory",
      "Pracovnoprávne a spotrebiteľské spory, náhrada škody",
      "Trestné veci — obvinenie, výsluch, trestné oznámenie, postavenie poškodeného",
      "GDPR, e-shopy a IT zmluvy",
    ],
  },

  steps: [
    {
      title: "Vyberiete si termín",
      desc: "V online kalendári vidíte voľné časy. Zvolíte videohovor, telefón alebo osobné stretnutie v kancelárii na Námestí SNP vo Zvolene. Konzultácia sa platí online pri rezervácii.",
    },
    {
      title: "Opíšete, čo riešite",
      desc: "V rezervačnom formulári stručne opíšete situáciu a môžete vložiť odkaz na podklady. Dokumenty sa dajú poslať aj e-mailom na klienti@tkak.sk. Čím viac vieme vopred, tým viac z tridsiatich minút ostane na riešenie.",
    },
    {
      title: "Konzultácia s advokátom",
      desc: "Prejdeme vašu situáciu, vysvetlíme, čo hovorí zákon, aké máte možnosti, aké riziká a aké lehoty. Pýtajte sa, čo potrebujete — konzultácia je na to.",
    },
    {
      title: "Viete, čo ďalej",
      desc: "Odchádzate s odporúčaným postupom. Ak sa rozhodnete, že vec máme riešiť my, dostanete rozsah práce a cenu vopred. Ak si ju vybavíte sami alebo ďalší krok netreba, tým sa to končí.",
    },
  ],

  deadline: {
    heading: "Lehoty plynú, aj keď sa ešte len rozhodujete",
    body: "Veľa právnych lehôt je kratších, než ľudia čakajú, a ich zmeškanie sa spravidla nedá napraviť. Odpor proti trestnému rozkazu možno podať do 8 dní od doručenia (§ 355 ods. 1 Trestného poriadku), odpor proti platobnému rozkazu do 15 dní (§ 265 ods. 1 Civilného sporového poriadku), neplatnosť výpovede treba uplatniť na súde do dvoch mesiacov odo dňa, keď sa mal pracovný pomer skončiť (§ 77 Zákonníka práce). Ak ste dostali listinu s poučením o lehote, rezervujte si najbližší voľný termín a dátum doručenia uveďte do popisu — pri krátkej lehote nám radšej hneď zavolajte.",
  },

  pricing: {
    heading: "Koľko to stojí",
    lead: "Jedna cena, povedaná vopred. Konzultácia vás nezaväzuje k žiadnej ďalšej službe.",
    items: [
      {
        label: "Konzultácia (30 min)",
        value: "50 € s DPH",
        desc: "Videohovor, telefón alebo osobne vo Zvolene. Platí sa online pri rezervácii termínu; doklad o platbe dostanete e-mailom.",
      },
      {
        label: "Príprava pred konzultáciou",
        value: "v cene",
        desc: "Advokát si vopred prečíta váš popis a podklady, ktoré pošlete. Rozsiahle zmluvy a spisy sa posudzujú ako samostatná služba — povieme vám to vopred.",
      },
      {
        label: "Ďalšie služby",
        value: "pevná cena vopred",
        desc: "Ak bude treba pokračovať, dostanete rozsah práce a cenu skôr, než čokoľvek objednáte. Bežné úkony majú zverejnený cenník v e-shope.",
      },
    ],
  },

  form: {
    title: "Neviete, či je konzultácia pre vás? Napíšte nám",
    leads: [
      "Ak si nie ste istí, či vašu vec riešime alebo či konzultácia stačí, opíšte ju pár vetami. Ozveme sa do jedného pracovného dňa a povieme, ako by sme postupovali.",
      "Všetko, čo nám napíšete alebo poviete, chráni zákonná mlčanlivosť advokáta (§ 23 zákona o advokácii) — aj vtedy, ak sa klientom nestanete.",
    ],
    fields: [
      { name: "topic", label: "Čoho sa vec týka", placeholder: "napr. nájomná zmluva, dlh, výpoveď" },
      { name: "deadline", label: "Beží vám lehota?", placeholder: "napr. listina doručená 12. 9., lehota 15 dní" },
    ],
    messageLabel: "Stručne opíšte situáciu",
    subject: "Právna konzultácia — podklady",
    documents: [
      "listinu, o ktorú ide (zmluva, výzva, rozhodnutie), ak existuje",
      "dátum jej doručenia, ak beží lehota",
      "otázky, na ktoré chcete odpoveď",
    ],
    submit: "Odoslať otázku",
  },

  faq: [
    {
      q: "Čo za 30 minút reálne stihneme?",
      a: "Zorientovať sa vo veci, pomenovať možnosti, riziká a lehoty a dohodnúť prvý krok. Pri bežných situáciách — jedna zmluva, jedna listina, jeden spor — to stačí. Rozhoduje príprava: ak pošlete popis a podklady vopred, konzultácia ide rovno k veci. Pri rozsiahlych veciach vám po konzultácii navrhneme ďalší postup a cenu.",
    },
    {
      q: "Dostanem z konzultácie písomné stanovisko?",
      a: "Konzultácia je ústna. Písomná právna analýza, revízia zmluvy alebo príprava podania sú samostatné služby s cenou dohodnutou vopred — ak o ne budete mať záujem, povieme vám rozsah a cenu na konci konzultácie.",
    },
    {
      q: "Môže konzultácia prebehnúť online?",
      a: "Áno. Pri rezervácii si vyberiete videohovor, telefonát alebo osobné stretnutie v kancelárii vo Zvolene. Online konzultácia má rovnaký obsah aj cenu ako osobná; odkaz na videohovor dostanete v potvrdení rezervácie.",
    },
    {
      q: "Je to, čo poviem, dôverné?",
      a: "Áno. Advokát je povinný zachovávať mlčanlivosť o všetkých skutočnostiach, o ktorých sa dozvedel v súvislosti s výkonom advokácie (§ 23 ods. 1 zákona č. 586/2003 Z. z.). Platí to aj pre informácie z konzultácie, po ktorej spolupráca nepokračuje.",
    },
    {
      q: "Čo ak zastupujete druhú stranu?",
      a: "Pred konzultáciou preverujeme konflikt záujmov. Ak by sme v tej istej alebo súvisiacej veci poskytovali služby niekomu, koho záujmy sú v rozpore s vašimi, zákon nám ukladá právne služby odmietnuť (§ 21 zákona o advokácii). V takom prípade vás bezodkladne kontaktujeme ešte pred termínom.",
    },
    {
      q: "Zaväzuje ma konzultácia k ďalšej spolupráci?",
      a: "Nie. Po konzultácii sa rozhodnete sami — vec si môžete vybaviť svojpomocne, nechať ju na nás alebo nerobiť nič. Ak sa rozhodnete pokračovať s nami, cenu a rozsah poznáte skôr, než čokoľvek podpíšete.",
    },
  ],

  relatedServiceId: "obchod",
  relatedServiceLabel: "Obchodné a občianske právo",
};
