import type { CampaignData } from "./types";

/**
 * Registrácia ochrannej známky (katalóg A5). 249 € SR / 349 € EÚ + poplatky
 * úradu. Rešerš kolízie v cene (samostatne 79 €). Poplatky ÚPV/EUIPO sa
 * menia — na stránke bez konkrétnych súm, účtované v skutočnej výške.
 */
export const trademarkRegistration: CampaignData = {
  id: "trademark-registration",
  pathname: "/trademark-registration",
  group: "produkt",

  meta: {
    title: "Registrácia ochrannej známky 2026 — SR od 249 €, EÚ od 349 € | kohút & partners",
    description:
      "Ochranná známka na názov, logo alebo slogan: rešerš kolízie, správne triedy tovarov a služieb, podanie na ÚPV SR alebo EUIPO a zastupovanie v konaní. Odmena 249 € (SR) / 349 € (EÚ) + poplatky úradu.",
  },

  hero: {
    overline: "Ochranná známka · SR a EÚ",
    h1: "Registrácia ochrannej známky — názov a logo, ktoré vám nikto nevezme",
    lead: "Obchodné meno v obchodnom registri vás pred napodobňovaním nechráni. Ochranná známka áno — dáva vám výlučné právo na označenie pre tovary a služby, ktoré si zvolíte, na desať rokov s možnosťou obnovy.",
    paragraphs: [
      "Pred podaním preveríme kolízie s existujúcimi známkami v Slovenskej republike aj v Európskej únii a navrhneme správne triedy tovarov a služieb — najčastejšia chyba laických prihlášok, ktorá sa po podaní už nedá opraviť rozšírením.",
      "Prihlášku podáme na Úrad priemyselného vlastníctva SR alebo na EUIPO a zastupujeme vás v celom konaní vrátane odpovede na prípadné výhrady úradu.",
    ],
    cta: "Chcem chrániť značku",
  },

  reasons: {
    overline: "Prečo cez advokáta",
    heading: "Kde laické prihlášky zlyhávajú",
    lead: "Podať prihlášku dokáže hocikto — prežiť konanie a desať rokov používania je iná vec.",
    items: [
      {
        title: "Kolízia s existujúcou známkou",
        desc: "Prihláška podaná bez rešerše naráža na staršie známky — majiteľ môže podať námietky a poplatok úradu prepadne. Rešerš v SR aj EÚ robíme pred podaním a je v cene.",
      },
      {
        title: "Nesprávne triedy tovarov a služieb",
        desc: "Známka chráni len to, čo je v zozname podľa Niceského triedenia. Príliš úzky zoznam nechráni rast firmy, príliš široký zvyšuje poplatky a riziko námietok — a po podaní sa zoznam rozšíriť nedá.",
      },
      {
        title: "Formálne výhrady úradu",
        desc: "Opisné, druhové či zameniteľné označenia úrad odmietne. Posúdime spôsobilosť označenia vopred a na výhrady úradu odpovieme v rámci balíka.",
      },
      {
        title: "SR alebo EÚ — správna voľba",
        desc: "Národná známka je lacnejšia, známka EÚ chráni v celej únii jedným podaním — ale kolízia v ktoromkoľvek členskom štáte môže zhodiť celú prihlášku. Poradíme, čo dáva pre váš trh zmysel.",
      },
    ],
  },

  scope: {
    overline: "V cene",
    heading: "Čo balík obsahuje",
    lead: "Od rešerše po zapísanú známku. Správne poplatky úradu sa platia v skutočnej výške podľa počtu tried.",
    items: [
      "Rešerš kolízie v registroch SR a EÚ s písomným stanoviskom",
      "Posúdenie spôsobilosti označenia na zápis",
      "Návrh zoznamu tovarov a služieb podľa Niceského triedenia",
      "Príprava a podanie prihlášky na ÚPV SR alebo EUIPO",
      "Zastupovanie v konaní a sledovanie lehôt",
      "Odpoveď na výhrady úradu v rozsahu do dvoch hodín práce",
      "Odovzdanie osvedčenia o zápise",
    ],
  },

  steps: [
    {
      title: "Rešerš a stratégia",
      desc: "Pošlete označenie — názov, logo alebo slogan — a čomu sa venujete. Preveríme kolízie, posúdime spôsobilosť a navrhneme triedy aj územie ochrany.",
    },
    {
      title: "Prihláška",
      desc: "Do piatich pracovných dní od odsúhlasenia pripravíme a podáme prihlášku. Dňom podania získavate prioritu pred každým, kto by rovnaké označenie prihlásil neskôr.",
    },
    {
      title: "Konanie na úrade",
      desc: "Úrad prihlášku prieskumá a zverejní; beží lehota na námietky tretích osôb. Konanie trvá spravidla štyri až šesť mesiacov — lehoty strážime my.",
    },
    {
      title: "Zápis známky",
      desc: "Po zápise dostanete osvedčenie. Známka platí desať rokov od podania prihlášky a dá sa neobmedzene obnovovať.",
    },
  ],

  deadline: {
    heading: "Prioritu má ten, kto podá skôr",
    body: "Právo k označeniu sa v známkovom práve počíta odo dňa podania prihlášky. Kto podá skôr, má prednosť — bez ohľadu na to, kto označenie vymyslel alebo dlhšie používa; nezapísané označenie sa bráni oveľa ťažšie a drahšie. Ak značku budujete, každý mesiac bez prihlášky je riziko, že ju prihlási niekto iný — konkurent, bývalý spoločník, ale aj špekulant, ktorý ju potom ponúkne na odkúpenie. Rešerš a podanie zvládneme do piatich pracovných dní od odsúhlasenia.",
  },

  pricing: {
    heading: "Koľko to stojí",
    lead: "Odmena je pevná a s DPH; správne poplatky úradu závisia od počtu tried a platia sa v skutočnej výške priamo úradu.",
    items: [
      {
        label: "Národná známka (SR)",
        value: "249 € s DPH",
        desc: "Rešerš, triedy, prihláška na ÚPV SR a zastupovanie v konaní. Poplatky úradu podľa počtu tried sa platia samostatne.",
      },
      {
        label: "Známka Európskej únie",
        value: "349 € s DPH",
        desc: "Rešerš v celej EÚ, prihláška na EUIPO a zastupovanie v konaní. Poplatky EUIPO podľa počtu tried sa platia samostatne.",
      },
      {
        label: "Samostatná rešerš",
        value: "79 € s DPH",
        desc: "Ak si chcete najprv len overiť, či je označenie voľné. Pri následnej objednávke registrácie sa rešerš do odmeny započíta.",
      },
    ],
  },

  form: {
    title: "Pošlite nám označenie na preverenie",
    leads: [
      "Do troch pracovných dní dostanete výsledok rešerše a odporúčanie: či podať, v akých triedach a či v SR alebo EÚ.",
      "Konanie o námietkach tretích osôb, ak by nastalo, je samostatná vec — jeho podmienky dohodneme vopred, nikdy nie mlčky.",
    ],
    fields: [
      { name: "mark", label: "Označenie, ktoré chcete chrániť", placeholder: "napr. názov / logo / slogan" },
      { name: "business", label: "Pre aké tovary alebo služby", placeholder: "napr. káva a prevádzka kaviarní" },
      { name: "territory", label: "Kde podnikáte alebo plánujete", placeholder: "napr. SR, časom Česko" },
    ],
    messageLabel: "Doplňujúce informácie",
    subject: "Ochranná známka — podklady",
    documents: [
      "logo v krivkách alebo kvalitnom obrázku, ak sa chráni grafika",
      "zoznam tovarov a služieb, ktoré ponúkate alebo plánujete",
    ],
    submit: "Chcem preveriť a podať",
  },

  faq: [
    {
      q: "Nechráni ma už zápis obchodného mena v obchodnom registri?",
      a: "Len veľmi obmedzene — obchodné meno chráni pred totožným menom inej zapísanej firmy, nie pred používaním vášho označenia na tovaroch, v doméne či v reklame. Výlučné právo na označenie pre konkrétne tovary a služby dáva až ochranná známka.",
    },
    {
      q: "Mám podať známku slovenskú alebo európsku?",
      a: "Ak podnikáte len na Slovensku a expanziu neplánujete, národná známka stačí a je lacnejšia. Ak predávate alebo plánujete predávať do zahraničia — hoci len e-shopom — známka EÚ chráni všetkých 27 štátov jedným podaním. Rozhodnutie ovplyvňuje aj výsledok rešerše: niekedy je označenie voľné v SR, ale koliduje v inom štáte EÚ.",
    },
    {
      q: "Koľko sú poplatky úradu?",
      a: "Závisia od úradu a počtu tried tovarov a služieb; platia sa priamo úradu v skutočnej výške. Presnú sumu pre váš prípad vyčíslime pri rešerši — pred podaním budete poznať celkové náklady na cent.",
    },
    {
      q: "Ako dlho známka platí?",
      a: "Desať rokov odo dňa podania prihlášky, s možnosťou obnovy vždy o ďalších desať rokov — v podstate neobmedzene. Termín obnovy vám postrážime.",
    },
    {
      q: "Niekto už moje označenie používa. Má ešte zmysel podávať?",
      a: "Práve vtedy to ponáhľa. Ak označenie nikto neprihlásil, prihláška vám dá prioritu; ak ho už prihlásil niekto iný, treba posúdiť námietky, dohodu alebo úpravu označenia. Situáciu zistí rešerš — až podľa nej sa rozhodnete.",
    },
  ],

  relatedServiceId: "it",
  relatedServiceLabel: "IT a digitálne právo",
};
