import type { CampaignData } from "./types";

/**
 * Závet spísaný advokátom (katalóg C1). 99 € / 149 € s vydedením.
 * OZ § 476–476f (formy, dátum inak neplatný, svedkovia), § 479 neopomenuteľní
 * dedičia, § 469a vydedenie (taxatívne dôvody). Notársku zápisnicu a NCRza
 * odporúčame cez notára — povedané otvorene.
 */
export const lastWill: CampaignData = {
  id: "last-will",
  pathname: "/last-will",
  group: "produkt",

  meta: {
    title: "Závet spísaný advokátom — 99 €, s vydedením 149 € | kohút & partners",
    description:
      "Závet, ktorý obstojí: správna forma, dátum, svedkovia a podiely neopomenuteľných dedičov podľa § 479 OZ. Spísanie advokátom za 99 €, s listinou o vydedení 149 €. Celá SR.",
  },

  hero: {
    overline: "Závet a vydedenie · celá SR",
    h1: "Závet spísaný advokátom — aby platila vaša vôľa, nie zákonná schéma",
    lead: "Bez závetu dedia dedičia zo zákona v zákonných podieloch — bez ohľadu na to, kto sa o vás staral a komu ste chceli čo nechať. Závet to mení. Musí však byť napísaný presne: chýbajúci dátum alebo zlí svedkovia ho robia neplatným.",
    paragraphs: [
      "Prejdeme s vami majetok a rodinné pomery, vysvetlíme, čo sa závetom určiť dá a čo nie — najmä podiely neopomenuteľných dedičov — a závet spíšeme v správnej forme so všetkými náležitosťami. Ak chcete potomka vydediť, pripravíme aj listinu o vydedení s dôvodom, ktorý pripúšťa zákon.",
      "Konzultácia prebehne osobne alebo videohovorom; závet dostanete pripravený na podpis s presným návodom, ako a s kým ho podpísať.",
    ],
    cta: "Chcem spísať závet",
  },

  reasons: {
    overline: "Prečo s advokátom",
    heading: "Na čom závety padajú",
    lead: "Dedičské konania poznáme z praxe — aj spory, ktoré vznikli z dobre mienených, ale zle napísaných závetov.",
    items: [
      {
        title: "Chýbajúci dátum = neplatnosť",
        desc: "V každom závete musí byť uvedený deň, mesiac a rok podpisu, inak je neplatný (§ 476 ods. 2 OZ). Rovnako je neplatný spoločný závet manželov — každý musí mať vlastný.",
      },
      {
        title: "Nesprávna forma a svedkovia",
        desc: "Závet nepísaný vlastnou rukou vyžaduje dvoch súčasne prítomných svedkov a výslovné vyhlásenie poručiteľa (§ 476b). Svedkom nesmie byť ten, kto má dediť (§ 476e) — častá chyba, ktorá závet zhodí.",
      },
      {
        title: "Neopomenuteľní dedičia",
        desc: "Maloletým potomkom musí zostať celý ich zákonný podiel, plnoletým aspoň polovica (§ 479 OZ). Závet, ktorý to nerešpektuje, je v tej časti neplatný — vypočítame podiely tak, aby vaša vôľa obstála.",
      },
      {
        title: "Vydedenie len zo zákonných dôvodov",
        desc: "Potomka možno vydediť len z dôvodov podľa § 469a OZ — neposkytnutie pomoci, trvalý nezáujem, odsúdenie za úmyselný trestný čin s trestom najmenej rok, trvalo neusporiadaný život. Dôvod treba v listine správne opísať, inak vydedenie neobstojí.",
      },
    ],
  },

  scope: {
    overline: "V cene",
    heading: "Čo spísanie obsahuje",
    lead: "Od konzultácie po podpis. Ak si zvoláte svedkov, celý podpis zvládnete u nás pri jednom stretnutí.",
    items: [
      "Konzultácia k majetku, rodinným pomerom a vašim zámerom",
      "Výpočet podielov neopomenuteľných dedičov",
      "Spísanie závetu v správnej forme so všetkými náležitosťami",
      "Pri vydedení listina o vydedení s opisom zákonného dôvodu",
      "Poučenie o podpise, svedkoch a možnostiach úschovy",
      "Odporúčanie, kedy zvoliť formu notárskej zápisnice",
    ],
  },

  steps: [
    {
      title: "Konzultácia",
      desc: "Osobne alebo videohovorom prejdeme majetok, rodinu a to, čo chcete dosiahnuť. Povieme vám, čo závet dokáže — a kde zákon kladie hranice.",
    },
    {
      title: "Návrh závetu",
      desc: "Pripravíme text závetu, pri vydedení aj listinu o vydedení. Všetko vám vysvetlíme vetu po vete — závetu musíte rozumieť vy, nie len my.",
    },
    {
      title: "Podpis",
      desc: "Závet podpíšete podľa zvolenej formy — vlastnou rukou, alebo pred dvoma svedkami u nás v kancelárii. Postrážime, aby svedkovia spĺňali zákonné podmienky.",
    },
    {
      title: "Úschova",
      desc: "Poradíme, kde závet uložiť, aby sa po smrti našiel — vrátane úschovy u notára so zápisom do centrálneho registra závetov, ak ju zvolíte.",
    },
  ],

  deadline: {
    heading: "Závet sa píše, kým je z čoho vyberať",
    body: "Závet môžete kedykoľvek zmeniť alebo zrušiť — nič vás k nemu navždy neviaže. Opačná chyba sa ale napraviť nedá: závet, ktorý sa nestihol, znamená dedenie zo zákona v zákonných podieloch, a závet spísaný v čase, keď už poručiteľ pre chorobu nebol schopný platne prejaviť vôľu, súd v dedičskom spore neobstojí. Najlepší čas na závet je preto obyčajný pokojný týždeň — nie nemocničná izba. Konzultáciu aj podpis vieme zorganizovať do niekoľkých dní.",
  },

  pricing: {
    heading: "Koľko to stojí",
    lead: "Pevné ceny s DPH. Ak sa ukáže, že vašej situácii viac svedčí notárska zápisnica s registráciou, povieme vám to na konzultácii — aj s dôvodmi.",
    items: [
      {
        label: "Závet",
        value: "99 € s DPH",
        desc: "Konzultácia, výpočet podielov, spísanie závetu v správnej forme a poučenie o podpise a úschove.",
      },
      {
        label: "Závet s vydedením",
        value: "149 € s DPH",
        desc: "Navyše listina o vydedení s opisom zákonného dôvodu podľa § 469a OZ — vrátane posúdenia, či váš dôvod pred súdom obstojí.",
      },
      {
        label: "Súvisiace úkony",
        value: "podľa dohody",
        desc: "Darovanie za života, vecné bremeno doživotného bývania či usporiadanie podielov — niekedy je vhodnejší iný nástroj než závet. Poradíme na konzultácii.",
      },
    ],
  },

  form: {
    title: "Objednajte sa na konzultáciu",
    leads: [
      "Napíšte nám pár slov o rodine a majetku — stačí laicky. Ozveme sa do jedného pracovného dňa s termínom konzultácie, osobne alebo videohovorom.",
      "Diskrétnosť je samozrejmosť: o závete sa od nás nikto nedozvie, ani rodina.",
    ],
    fields: [
      { name: "family", label: "Rodinná situácia", placeholder: "napr. manželka, dve dospelé deti" },
      { name: "assets", label: "Majetok, o ktorý ide", placeholder: "napr. byt, chata, úspory" },
      { name: "wish", label: "Čo chcete dosiahnuť", placeholder: "napr. chatu synovi, ktorý sa stará" },
    ],
    messageLabel: "Doplňujúce informácie",
    subject: "Závet — konzultácia",
    documents: [
      "list vlastníctva alebo označenie nehnuteľností, ak sú",
      "predstava o rozdelení — pokojne vlastnými slovami",
    ],
    submit: "Chcem termín konzultácie",
  },

  faq: [
    {
      q: "Môžem závetom vynechať niektoré z detí?",
      a: "Len obmedzene. Potomkovia sú neopomenuteľní dedičia: maloletí musia dostať celý zákonný podiel, plnoletí aspoň polovicu (§ 479 OZ). Úplne vynechať potomka možno len platným vydedením z dôvodu podľa § 469a — alebo usporiadaním majetku ešte za života, napríklad darovaním. Na konzultácii prejdeme, ktorá cesta sa hodí na vašu situáciu.",
    },
    {
      q: "Manžel a ja chceme spoločný závet. Dá sa?",
      a: "Nie — spoločný závet viacerých poručiteľov je zo zákona neplatný (§ 476 ods. 3 OZ). Spíšeme každému vlastný závet; obsahovo na seba môžu nadväzovať.",
    },
    {
      q: "Čo je lepšie — závet u advokáta alebo u notára?",
      a: "Obe formy sú plnohodnotné. My závet spíšeme, vysvetlíme súvislosti vrátane podielov a vydedenia a pripravíme podpis so svedkami; notár navyše ponúka formu notárskej zápisnice s uložením v centrálnom registri závetov — tú odporučíme napríklad pri riziku, že by sa závet „stratil“. Nie sme v tom v konflikte: ak je pre vás lepší notár, povieme vám to.",
    },
    {
      q: "Môžem závet neskôr zmeniť?",
      a: "Kedykoľvek — novým závetom, odvolaním alebo zničením listiny. Neskorší platný závet ruší skorší v rozsahu, v akom si odporujú. Pri zmene odporúčame starý závet preukázateľne odstrániť, aby po smrti nekolovali dve verzie.",
    },
    {
      q: "Vydedil som syna listom. Platí to?",
      a: "Listina o vydedení má rovnaké formálne náležitosti ako závet a musí obsahovať zákonný dôvod (§ 469a OZ) — všeobecné sklamanie nestačí a súdy dôvody skúmajú prísne. Ak to myslíte vážne, dôvod treba opísať konkrétne a preukázateľne; presne to je rozdiel medzi listom a listinou, ktorá obstojí.",
    },
  ],

  relatedServiceId: "nehnutelnosti",
  relatedServiceLabel: "Právo nehnuteľností a realitný development",
};
