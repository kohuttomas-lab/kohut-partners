import type { CampaignData } from "./types";

/**
 * Kúpna a darovacia zmluva na nehnuteľnosť + návrh na vklad (katalóg C2).
 * 249 € kúpna + vklad · 149 € samostatný vklad · 99 € darovacia + vklad.
 * KatZ § 42 ods. 3: podpis prevodcu úradne osvedčený, IBAŽE zmluva
 * autorizovaná advokátom; § 42 ods. 2 náležitosti. § 1a/§ 1aa zák. o advokácii
 * (autorizácia, oznámenie poistného krytia pri odplatnom prevode).
 */
export const propertyTransfer: CampaignData = {
  id: "property-transfer",
  pathname: "/property-transfer",
  group: "produkt",

  meta: {
    title: "Kúpna zmluva na byt či dom + návrh na vklad — od advokáta za 249 € | kohút & partners",
    description:
      "Prevod nehnuteľnosti bezpečne: preverenie listu vlastníctva a tiarch, zmluva autorizovaná advokátom bez osvedčovania podpisov, elektronický návrh na vklad. Kúpna 249 €, darovacia 99 €, samostatný vklad 149 €.",
  },

  hero: {
    overline: "Prevod nehnuteľnosti · celá SR",
    h1: "Kúpna zmluva na byt alebo dom — autorizovaná advokátom, s vkladom do katastra",
    lead: "Prevod nehnuteľnosti je najväčšia transakcia, akú väčšina ľudí v živote podpíše. Zmluva autorizovaná advokátom znamená preverené vlastníctvo, žiadne osvedčovanie podpisov a advokátovu zodpovednosť krytú povinným poistením.",
    paragraphs: [
      "Preveríme list vlastníctva, ťarchy a prístup k pozemku, pripravíme zmluvu so všetkými náležitosťami podľa katastrálneho zákona a podáme elektronický návrh na vklad — pri elektronickom podaní je správny poplatok katastra nižší. Konanie sledujeme až po zápis vlastníctva.",
      "Pri zmluve autorizovanej advokátom sa podpis prevodcu úradne neosvedčuje (§ 42 ods. 3 katastrálneho zákona) — celý prevod vybavíte u nás, bez matriky a notára.",
    ],
    cta: "Chcem previesť nehnuteľnosť",
  },

  reasons: {
    overline: "Čo autorizácia znamená",
    heading: "Prečo zmluvu autorizovať, nie len podpísať",
    lead: "Autorizácia nie je pečiatka — je to zákonom definovaný postup advokáta s vlastnou zodpovednosťou (§ 1a zákona o advokácii).",
    items: [
      {
        title: "Preverenie pred podpisom",
        desc: "Advokát zisťuje totožnosť účastníkov a posudzuje, či zmluva neodporuje zákonu a či ňou nevznikne škoda. List vlastníctva, ťarchy, exekúcie a spôsob nadobudnutia preveríme skôr, než čokoľvek podpíšete.",
      },
      {
        title: "Bez osvedčovania podpisov",
        desc: "Podpis prevodcu na zmluve o prevode nehnuteľnosti musí byť úradne osvedčený — to neplatí, ak je zmluva autorizovaná advokátom (§ 42 ods. 3 katastrálneho zákona). Ušetríte cestu aj poplatky za osvedčenie.",
      },
      {
        title: "Zodpovednosť krytá poistením",
        desc: "Pri odplatnom prevode vás advokát upozorní na platobné podmienky a oznámi výšku svojho poistného krytia aj poisťovňu (§ 1aa zákona o advokácii). Za chybu pri autorizácii zodpovedáme my — nie vy.",
      },
      {
        title: "Náležitosti pre kataster",
        desc: "Zmluva musí obsahovať presné označenie účastníkov a nehnuteľností podľa § 42 ods. 2 katastrálneho zákona — parcely, súpisné čísla, podiely, spoločné časti domu. Chyba znamená prerušenie konania a stratené týždne.",
      },
    ],
  },

  scope: {
    overline: "Rozsah",
    heading: "Ktoré prevody pripravujeme",
    lead: "Byty, domy, pozemky aj podiely — kúpa, darovanie aj usporiadanie spoluvlastníctva.",
    items: [
      "Kúpna zmluva na byt, dom alebo pozemok s návrhom na vklad",
      "Darovacia zmluva na nehnuteľnosť — typicky v rodine",
      "Zámena nehnuteľností a prevody spoluvlastníckych podielov",
      "Vecné bremeno doživotného bývania pri darovaní rodičom",
      "Samostatný návrh na vklad k zmluve, ktorú už máte",
      "Advokátska úschova kúpnej ceny",
    ],
  },

  steps: [
    {
      title: "Preverenie nehnuteľnosti",
      desc: "Z listu vlastníctva a katastrálnej mapy preveríme vlastníctvo, ťarchy, záložné práva a prístup. O rizikách sa dozviete pred podpisom, nie po ňom.",
    },
    {
      title: "Zmluva a úschova",
      desc: "Pripravíme zmluvu so všetkými náležitosťami a nastavíme platobné podmienky — pri kúpe odporúčame úschovu: predávajúci dostane peniaze po vklade, kupujúci neplatí za nič, čo ešte nie je jeho.",
    },
    {
      title: "Autorizácia a podanie",
      desc: "Zmluvu autorizujeme — bez osvedčovania podpisov — a podáme elektronický návrh na vklad s nižším správnym poplatkom. Autorizovanú zmluvu ukladáme do registra autorizácií komory.",
    },
    {
      title: "Vklad a odovzdanie",
      desc: "Konanie o vklade sledujeme a na výzvy katastra odpovedáme my. Po povolení vkladu dostanete list vlastníctva so svojím menom — a pri úschove sa uvoľní kúpna cena.",
    },
  ],

  deadline: {
    heading: "Vlastníkom sa stávate až vkladom — nie podpisom",
    body: "Vlastníctvo k nehnuteľnosti neprechádza podpisom zmluvy ani zaplatením ceny, ale až právoplatným rozhodnutím o povolení vkladu do katastra. Medzi podpisom a vkladom je preto najzraniteľnejšie obdobie celej transakcie: na nehnuteľnosť môže pribudnúť ťarcha, exekúcia predávajúceho zablokuje konanie, a zaplatená cena visí vo vzduchu. Presne toto rieši poradie krokov, ktoré nastavujeme — úschova ceny, okamžité podanie návrhu po autorizácii a sledovanie konania. Zmluvu z internetu kataster možno prijme; ochranu medziobdobia vám nedá.",
  },

  pricing: {
    heading: "Koľko to stojí",
    lead: "Pevné ceny s DPH. Správny poplatok katastra sa platí v skutočnej výške — pri elektronickom podaní je nižší než pri listinnom.",
    items: [
      {
        label: "Kúpna zmluva + návrh na vklad",
        value: "249 € s DPH",
        desc: "Preverenie, zmluva, autorizácia, elektronické podanie a sledovanie konania až po zápis. Úschova kúpnej ceny sa dohodne samostatne podľa výšky sumy.",
      },
      {
        label: "Darovacia zmluva + návrh na vklad",
        value: "99 € s DPH",
        desc: "Darovanie v rodine vrátane prípadného vecného bremena doživotného bývania — to sa dohodne vopred ako súčasť zmluvy.",
      },
      {
        label: "Samostatný návrh na vklad",
        value: "149 € s DPH",
        desc: "K hotovej zmluve, ktorú už máte: skontrolujeme náležitosti podľa § 42 katastrálneho zákona a podáme elektronický návrh. Na chyby zmluvy upozorníme pred podaním.",
      },
    ],
  },

  form: {
    title: "Napíšte nám o prevode",
    leads: [
      "Pošlite číslo listu vlastníctva alebo adresu — ozveme sa do jedného pracovného dňa s výsledkom prvého preverenia a potvrdením ceny.",
      "Kupujete na hypotéku? Zmluvu skoordinujeme s bankou a záložným právom — je to bežná súčasť práce, nie príplatok.",
    ],
    fields: [
      { name: "property", label: "Nehnuteľnosť", placeholder: "napr. 3-izbový byt, Zvolen, LV 1234" },
      { name: "type", label: "Kúpa alebo darovanie", placeholder: "napr. kúpa za 145 000 €" },
      { name: "financing", label: "Financovanie", placeholder: "napr. hypotéka + vlastné" },
    ],
    messageLabel: "Okolnosti prevodu",
    subject: "Prevod nehnuteľnosti — podklady",
    documents: [
      "číslo listu vlastníctva alebo adresa nehnuteľnosti",
      "občianske preukazy účastníkov",
      "úverová dokumentácia, ak sa platí hypotékou",
    ],
    submit: "Chcem previesť nehnuteľnosť",
  },

  faq: [
    {
      q: "Naozaj netreba overovať podpisy?",
      a: "Pri zmluve autorizovanej advokátom nie — výnimku dáva priamo § 42 ods. 3 katastrálneho zákona. Advokát pri autorizácii zisťuje totožnosť účastníkov osobne, čo osvedčenie podpisu nahrádza; rovnaká výnimka platí pre notársku zápisnicu.",
    },
    {
      q: "Kedy mám ako predávajúci pýtať peniaze?",
      a: "Ideálne cez úschovu: kupujúci zloží celú cenu pred podpisom, vy ju dostanete automaticky po povolení vkladu. Platba „pri podpise“ vystavuje kupujúceho riziku, platba „po vklade“ bez úschovy zas vás — úschova chráni oboch a jej cena je zlomkom hodnoty transakcie.",
    },
    {
      q: "Ako dlho trvá vklad do katastra?",
      a: "Kataster rozhoduje v zákonných lehotách; pri bezvadnom elektronickom návrhu ide spravidla o týždne. Pri zrýchlenom konaní za vyšší poplatok skôr. Presný odhad pre váš okres vám dáme pri preverení — a konanie strážime, aby výzva katastra neostala ležať.",
    },
    {
      q: "Rodičia mi chcú darovať dom, ale chcú v ňom dožiť. Ako na to?",
      a: "Darovacou zmluvou so zriadením vecného bremena doživotného užívania — rodičia ostávajú chránení zápisom v katastri, nie prísľubom. Pripravujeme oboje v jednej zmluve za cenu darovacej; presné nastavenie prejdeme na konzultácii.",
    },
    {
      q: "Zmluvu už máme, potrebujeme len podať vklad. Pomôžete?",
      a: "Áno — za 149 € skontrolujeme zmluvu podľa náležitostí katastrálneho zákona a podáme elektronický návrh. Ak má zmluva vady, ktoré by konanie zastavili, povieme vám to pred podaním; oprava dodatkom je lacnejšia než prerušené konanie.",
    },
  ],

  relatedServiceId: "nehnutelnosti",
  relatedServiceLabel: "Právo nehnuteľností a realitný development",
};
