import type { CampaignData } from "./types";

/**
 * Obrana proti exekúcii.
 * § 61k Exekučného poriadku: súd exekúciu zastaví o. i. ak nastali okolnosti
 * spôsobujúce zánik nároku, titul bol zrušený alebo sú tu iné skutočnosti
 * brániace vymáhateľnosti titulu. Návrh na zastavenie možno podať do 15 dní
 * od doručenia upovedomenia o začatí exekúcie a v tejto lehote má odkladný
 * účinok (§ 61k ods. 2); neskôr len k novým skutočnostiam (ods. 3).
 */
export const enforcementDefense: CampaignData = {
  id: "enforcement-defense",
  pathname: "/enforcement-defense",

  meta: {
    title: "Exekúcia — 15 dní na obranu | kohút & partners",
    description:
      "Prišlo vám upovedomenie o začatí exekúcie? Na návrh na zastavenie s odkladným účinkom máte 15 dní. Posúdime exekúciu zadarmo. Advokátska kancelária, celá SR.",
  },

  hero: {
    overline: "Obrana proti exekúcii · celá SR",
    h1: "Prišlo vám upovedomenie o exekúcii?",
    lead: "Prvých 15 dní rozhoduje. Návrh na zastavenie exekúcie podaný v tejto lehote má odkladný účinok — exekútor nemôže speňažovať váš majetok, kým o ňom súd nerozhodne.",
    paragraphs: [
      "Pošlite nám upovedomenie o začatí exekúcie. Do troch pracovných dní — a pri dobiehajúcej lehote skôr — vám napíšeme, či je exekúcia napadnuteľná a čo sa dá robiť. Za toto posúdenie nič neplatíte.",
      "Vec vedieme na diaľku pre klientov z celého Slovenska. Značná časť exekúcií zo starých pohľadávok nebankoviek a postúpených dlhov stojí na titule, ktorý sa dá napadnúť.",
    ],
    cta: "Poslať upovedomenie",
  },

  reasons: {
    overline: "Čo sa dá namietať",
    heading: "Dôvody, pre ktoré súd exekúciu zastaví",
    lead: "Exekúcia je len taká silná, ako titul, na ktorom stojí. Súd ju zastaví, ak nárok zanikol, titul bol zrušený alebo sú tu iné skutočnosti, ktoré bránia jeho vymáhateľnosti (§ 61k Exekučného poriadku).",
    items: [
      {
        title: "Premlčaný nárok",
        desc: "Značná časť vymáhaných pohľadávok — najmä starých dlhov z nebankových úverov — je premlčaná. Premlčanie treba namietnuť; samo od seba sa neuplatní.",
      },
      {
        title: "Rozhodcovský rozsudok ako titul",
        desc: "Exekúcie zo spotrebiteľských zmlúv vedené na podklade rozhodcovských rozsudkov sú opakovane zastavované — rozhodcovské doložky v spotrebiteľských zmluvách sú spravidla neprijateľné.",
      },
      {
        title: "Zaplatený alebo zaniknutý dlh",
        desc: "Ak ste dlh medzičasom zaplatili, bol odpustený alebo zanikol inak, exekúcia sa zastaví. Prekvapivo často sa vymáha aj to, čo už bolo uhradené.",
      },
      {
        title: "Nesprávne doručenie platobného rozkazu",
        desc: "Ak vám platobný rozkaz nikdy nebol riadne doručený, nemohol nadobudnúť právoplatnosť — a exekučný titul potom netvorí. Typické pri doručovaní na starú adresu.",
      },
      {
        title: "Vymáhanie nad rámec titulu",
        desc: "Úroky a trovy narastené nad rámec toho, čo titul priznáva, alebo nesprávne započítavané splátky robia exekúciu čiastočne nedôvodnou — zastaviť sa dá aj len v časti.",
      },
      {
        title: "Majetok nepatriaci povinnému",
        desc: "Ak exekútor siahol na majetok manžela, manželky alebo tretej osoby, ktorý exekúcii nepodlieha, bránia sa aj tieto osoby — nielen samotný dlžník.",
      },
    ],
  },

  scope: {
    overline: "Rozsah",
    heading: "S čím pomáhame",
    lead: "Obrana nekončí návrhom na zastavenie — aj v exekúcii, ktorá beží dôvodne, sa dá chrániť nepostihnuteľné minimum a nastaviť znesiteľné splácanie.",
    items: [
      "Návrh na zastavenie exekúcie v 15-dňovej lehote",
      "Námietka premlčania vymáhaného nároku",
      "Exekúcie z rozhodcovských rozsudkov",
      "Staré dlhy nebankoviek a postúpené pohľadávky",
      "Ochrana účtu, mzdy a nepostihnuteľného minima",
      "Splátkový kalendár a odklad exekúcie",
      "Obrana manžela a tretích osôb, ktorých majetok bol postihnutý",
      "Zastavenie starých exekúcií podľa zákona 233/2019",
    ],
  },

  steps: [
    {
      title: "Posúdenie zadarmo",
      desc: "Pošlete upovedomenie o začatí exekúcie. Obratom vám povieme, dokedy beží lehota, a do troch pracovných dní, či je exekúcia napadnuteľná.",
    },
    {
      title: "Návrh na zastavenie",
      desc: "Ak je tu dôvod, pripravíme a podáme návrh na zastavenie exekúcie v 15-dňovej lehote — s odkladným účinkom, ktorý speňažovanie majetku pozastaví.",
    },
    {
      title: "Konanie pred súdom",
      desc: "O návrhu rozhoduje súd. Zastupujeme vás v celom konaní a reagujeme na vyjadrenia oprávneného aj exekútora.",
    },
    {
      title: "Ochrana popri konaní",
      desc: "Súbežne strážime, aby exekútor nepostihoval to, čo zo zákona postihovať nesmie — nepostihnuteľné minimum na účte, časť mzdy, veci nepodliehajúce exekúcii.",
    },
  ],

  deadline: {
    heading: "15 dní s odkladným účinkom",
    body: "Návrh na zastavenie exekúcie môžete podať do 15 dní od doručenia upovedomenia o začatí exekúcie — a len návrh podaný v tejto lehote má odkladný účinok, teda bráni speňažovaniu majetku, kým súd nerozhodne (§ 61k ods. 2 Exekučného poriadku). Neskôr sa dajú namietať už len skutočnosti, ktoré nastali po uplynutí lehoty, a odkladný účinok návrh nemá. Deň doručenia upovedomenia je preto najdôležitejší dátum celej exekúcie — nečakajte.",
  },

  pricing: {
    heading: "Koľko to stojí",
    lead: "Cenu poznáte skôr, než čokoľvek podpíšete. Pri zastavenej exekúcii má oprávnený spravidla povinnosť nahradiť trovy — o tom vás informujeme pri posúdení.",
    items: [
      {
        label: "Posúdenie exekúcie",
        value: "zadarmo",
        desc: "Preštudujeme upovedomenie a napíšeme vám, či vidíme dôvod na zastavenie a dokedy presne beží lehota. Nezaväzuje vás to k ničomu.",
      },
      {
        label: "Konzultácia (30 min)",
        value: "50 € s DPH",
        desc: "Osobne, telefonicky alebo cez videohovor. Prejdeme možnosti obrany aj ochranu účtu a mzdy počas konania.",
      },
      {
        label: "Zastupovanie vo veci",
        value: "pevná cena vopred",
        desc: "Návrh na zastavenie exekúcie a zastupovanie v konaní za pevnú cenu dohodnutú vopred — jej výška závisí od zložitosti veci a dozviete sa ju pri posúdení.",
      },
    ],
  },

  form: {
    title: "Pošlite nám upovedomenie",
    leads: [
      "Obratom vám napíšeme, dokedy beží 15-dňová lehota, a do troch pracovných dní, či je exekúcia podľa nás napadnuteľná. Za posúdenie nič neplatíte.",
      "Ak sa exekúcia zastaviť nedá, povieme vám to rovno — a poradíme, ako si aspoň ochrániť účet, mzdu a nepostihnuteľné minimum.",
    ],
    fields: [
      { name: "deliveryDate", label: "Kedy vám upovedomenie prišlo", placeholder: "napr. 11. 8. 2026" },
      { name: "creditor", label: "Oprávnený (kto vymáha)", placeholder: "napr. EOS KSI, Intrum…" },
      { name: "amount", label: "Vymáhaná suma", placeholder: "napr. 3 200 €" },
    ],
    messageLabel: "Z čoho dlh pochádza a čo o ňom viete",
    subject: "Obrana proti exekúcii — podklady",
    documents: [
      "upovedomenie o začatí exekúcie",
      "exekučný titul, ak je priložený (platobný rozkaz, rozsudok)",
      "pôvodnú zmluvu alebo doklady o dlhu, ak ich máte",
    ],
    submit: "Chcem bezplatné posúdenie",
  },

  faq: [
    {
      q: "Prišlo mi upovedomenie. Čo mám urobiť ako prvé?",
      a: "Poznačte si deň doručenia — od neho beží 15-dňová lehota na návrh na zastavenie s odkladným účinkom aj lehota na splnenie dlhu so zníženými trovami. A nič nepodpisujte ani neuznávajte skôr, než si necháte exekúciu posúdiť; uznanie dlhu môže oživiť aj premlčaný nárok.",
    },
    {
      q: "Dlh je starý roky. Nie je už premlčaný?",
      a: "Môže byť — ale pozor na rozdiel: premlčať sa mohol nárok predtým, než veriteľ získal titul, alebo ide o starú exekúciu, ktorá beží márne roky. Oboje sa rieši inak. Z upovedomenia a titulu vieme povedať, ktorá situácia je vaša a či má námietka šancu.",
    },
    {
      q: "Exekútor mi zablokoval účet. Môže mi vziať všetko?",
      a: "Nie. Zo zákona vám musí zostať nepostihnuteľné minimum a chránené sú aj niektoré príjmy — časť mzdy, dávky. V praxi sa však blokácie robia širšie, než zákon dovoľuje, a vtedy treba zasiahnuť. Súčasťou obrany je aj kontrola toho, čo exekútor postihol.",
    },
    {
      q: "Pätnásť dní mi už uplynulo. Dá sa ešte niečo robiť?",
      a: "Dá, ale možnosti sa zužujú. V neskoršom návrhu možno namietať len skutočnosti, ktoré nastali po uplynutí lehoty alebo ktoré ste bez vlastnej viny nemohli uplatniť skôr — a návrh už nemá odkladný účinok. Stále ostáva ochrana nepostihnuteľných príjmov, splátkový kalendár či odklad. Napíšte nám, čo presne vám prišlo a kedy.",
    },
    {
      q: "Dlhov mám viac a nestíham ich splácať. Nie je lepšie riešenie osobný bankrot?",
      a: "Pri viacerých exekúciách a dlhoch, ktoré reálne nesplatíte, môže byť oddlženie vhodnejšia cesta než brániť každú exekúciu zvlášť. Je to jedna z našich hlavných špecializácií — pri posúdení vám povieme na rovinu, ktorá cesta vo vašej situácii dáva zmysel.",
    },
    {
      q: "Vymáha ma inkasná spoločnosť, nie pôvodný veriteľ. Mení to niečo?",
      a: "Postúpenie pohľadávky je bežné a samo osebe dlh neruší. Musí však byť preukázané a nárok inkasnej spoločnosti nie je o nič silnejší než nárok pôvodného veriteľa — vrátane premlčania a chýb pôvodnej zmluvy. Práve pri postúpených pohľadávkach býva obrana najúčinnejšia.",
    },
  ],

  relatedServiceId: "insolvencie",
  relatedServiceLabel: "Insolvencie a reštrukturalizácie",
};
