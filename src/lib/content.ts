import type { Locale } from "@/i18n/routing";

/* ============================================================
   Domain content — services, team, blog, subscriptions,
   templates, offices, references. Source of truth for copy
   (mirrors the design handoff's site-content.jsx).
   Each getter returns the data already localized.
   ============================================================ */

export type IconName =
  | "TrendingDown"
  | "Briefcase"
  | "Building2"
  | "Scale"
  | "Gavel"
  | "Cpu"
  | "FileText"
  | "Shield";

type LangPair<T> = { sk: T; en: T };

/* ---------------- Services ---------------- */

export interface ServicePackage {
  id: string;
  price: number;
  name: string;
  desc: string;
}

export interface ServiceFaq {
  q: string;
  a: string;
}

export interface Service {
  id: string;
  icon: IconName;
  name: string;
  tagline: string;
  summary: string;
  solve: string[];
  faq: ServiceFaq[];
  packages: ServicePackage[];
}

interface RawServiceCopy {
  name: string;
  tagline: string;
  summary: string;
  solve: string[];
  faq: [string, string][];
}

interface RawServicePackage {
  id: string;
  price: number;
  sk: [string, string];
  en: [string, string];
}

interface RawService {
  id: string;
  icon: IconName;
  sk: RawServiceCopy;
  en: RawServiceCopy;
  packages: RawServicePackage[];
}

const SERVICES: RawService[] = [
  {
    id: "insolvencie",
    icon: "TrendingDown",
    sk: {
      name: "Insolvencie a reštrukturalizácie",
      tagline: "Záchrana firmy aj riadený koniec — bez paniky.",
      summary:
        "Sprevádzame firmy aj veriteľov celým insolvenčným procesom. Hľadáme cestu, ako podnik zachrániť, a keď to nejde, ako z krízy vyjsť s čo najmenšími stratami.",
      solve: [
        "Reštrukturalizácia a ozdravné plány",
        "Konkurz a likvidácia spoločnosti",
        "Prihlasovanie a vymáhanie pohľadávok veriteľov",
        "Oddlženie fyzických osôb a podnikateľov",
        "Rokovania s bankami a veriteľmi",
      ],
      faq: [
        [
          "Kedy je čas riešiť reštrukturalizáciu?",
          "Ideálne hneď, ako firma prestáva zvládať splatné záväzky. Čím skôr, tým viac možností záchrany ostáva na stole.",
        ],
        [
          "Stratím pri konkurze všetko?",
          "Nie nutne. Pri správne vedenom procese sa dá ochrániť časť majetku aj dobré meno. Postup vám vysvetlíme vopred.",
        ],
      ],
    },
    en: {
      name: "Insolvency & restructuring",
      tagline: "Rescue the company — or a controlled wind-down, without panic.",
      summary:
        "We guide companies and creditors through the whole insolvency process. We look for a way to save the business, and when that’s not possible, how to exit the crisis with minimal loss.",
      solve: [
        "Restructuring and recovery plans",
        "Bankruptcy and company liquidation",
        "Filing and recovering creditor claims",
        "Debt relief for individuals and entrepreneurs",
        "Negotiations with banks and creditors",
      ],
      faq: [
        [
          "When should I address restructuring?",
          "Ideally as soon as the company struggles to meet due obligations. The earlier you act, the more rescue options stay on the table.",
        ],
        [
          "Will I lose everything in bankruptcy?",
          "Not necessarily. A well-managed process can protect part of the assets and your reputation. We explain the steps up front.",
        ],
      ],
    },
    packages: [
      {
        id: "ins-analyza",
        price: 290,
        sk: ["Analýza insolvenčného rizika", "Posúdime stav firmy a navrhneme ďalší postup do 5 dní."],
        en: ["Insolvency risk analysis", "We assess the company and propose next steps within 5 days."],
      },
      {
        id: "ins-prihlaska",
        price: 149,
        sk: ["Prihláška pohľadávky", "Spísanie a podanie prihlášky do konkurzu za veriteľa."],
        en: ["Claim filing", "Drafting and filing a claim in bankruptcy on behalf of a creditor."],
      },
    ],
  },
  {
    id: "obchod",
    icon: "Briefcase",
    sk: {
      name: "Obchodné a občianske právo",
      tagline: "Pevné základy pre každý obchod aj vzťah.",
      summary:
        "Od založenia firmy cez zmluvy až po korporátne zmeny. Postavíme vaše podnikanie na zmluvách, ktoré obstoja, aj keď príde spor.",
      solve: [
        "Zakladanie, zmeny a premeny obchodných spoločností a družstiev",
        "Obchodné zmluvy na mieru a ich revízia",
        "Korporátne poradenstvo a vzťahy spoločníkov",
        "Občianske zmluvy, vlastníctvo a záväzky",
        "Due diligence pri kúpe firmy",
      ],
      faq: [
        [
          "Viete založiť firmu kompletne online?",
          "Áno. Pripravíme dokumenty, podáme návrh na registráciu a vybavíme živnosti — vy len podpíšete.",
        ],
        [
          "Oplatí sa dať si skontrolovať zmluvu?",
          "Takmer vždy. Revízia za pár desiatok eur vie ušetriť spory za tisíce.",
        ],
      ],
    },
    en: {
      name: "Commercial & civil law",
      tagline: "Solid foundations for every deal and relationship.",
      summary:
        "From company formation through contracts to corporate changes. We build your business on contracts that hold up — even when a dispute arrives.",
      solve: [
        "Formation, changes and transformations of commercial companies and cooperatives",
        "Tailored commercial contracts and review",
        "Corporate advisory and shareholder relations",
        "Civil contracts, ownership and obligations",
        "Due diligence on company acquisitions",
      ],
      faq: [
        [
          "Can you form a company fully online?",
          "Yes. We prepare the documents, file the registration and arrange trade licences — you just sign.",
        ],
        [
          "Is it worth having a contract reviewed?",
          "Almost always. A review for a few dozen euros can save disputes worth thousands.",
        ],
      ],
    },
    packages: [
      {
        id: "ob-sro",
        price: 299,
        sk: ["Založenie s.r.o. na kľúč", "Kompletné založenie vrátane zápisu do OR a živností."],
        en: ["Turn-key LLC formation", "Full formation including commercial-register and trade-licence filing."],
      },
      {
        id: "ob-revizia",
        price: 79,
        sk: ["Revízia zmluvy", "Posúdime predloženú zmluvu a upozorníme na riziká pred podpisom."],
        en: ["Contract review", "We review a contract and flag the risks before you sign."],
      },
      {
        id: "ob-zmluva",
        price: 129,
        sk: ["Zmluva na mieru", "Akákoľvek obchodná či súkromná zmluva pripravená na váš prípad."],
        en: ["Custom contract", "Any business or private contract drafted for your case."],
      },
    ],
  },
  {
    id: "nehnutelnosti",
    icon: "Building2",
    sk: {
      name: "Právo nehnuteľností a realitný development",
      tagline: "Od bytu po developerský projekt — bezpečne.",
      summary:
        "Kúpne a nájomné zmluvy, kataster aj developerské projekty. Postrážime, aby prevod prebehol hladko a vaše peniaze boli chránené.",
      solve: [
        "Kúpne zmluvy a návrhy na vklad do katastra",
        "Nájomné zmluvy pre prenajímateľov aj nájomcov",
        "Developerské projekty a výstavba",
        "Vecné bremená, záložné práva a spoluvlastníctvo",
        "Riešenie sporov o nehnuteľnosti",
      ],
      faq: [
        [
          "Ako ochránite moje peniaze pri kúpe bytu?",
          "Použijeme notársku alebo advokátsku úschovu — peniaze sa uvoľnia až po zápise vlastníctva v katastri.",
        ],
        ["Pripravíte aj návrh na kataster?", "Áno, vrátane podania a komunikácie s katastrálnym odborom."],
      ],
    },
    en: {
      name: "Real estate & property development",
      tagline: "From a flat to a development project — safely.",
      summary:
        "Purchase and lease agreements, the cadastre and development projects. We make sure the transfer runs smoothly and your money is protected.",
      solve: [
        "Purchase contracts and cadastre registration petitions",
        "Lease agreements for landlords and tenants",
        "Development projects and construction",
        "Easements, liens and co-ownership",
        "Resolving real-estate disputes",
      ],
      faq: [
        [
          "How do you protect my money when buying a flat?",
          "We use a notarial or attorney escrow — funds are released only after ownership is registered in the cadastre.",
        ],
        [
          "Will you prepare the cadastre petition too?",
          "Yes, including the filing and communication with the cadastral office.",
        ],
      ],
    },
    packages: [
      {
        id: "nh-kupna",
        price: 249,
        sk: ["Kúpna zmluva na byt", "Príprava zmluvy a návrh na vklad do katastra nehnuteľností."],
        en: ["Property purchase contract", "Contract drafting and the cadastre registration petition."],
      },
      {
        id: "nh-najom",
        price: 99,
        sk: ["Nájomná zmluva", "Bezpečná nájomná zmluva chrániaca obe strany."],
        en: ["Lease agreement", "A safe lease that protects both parties."],
      },
    ],
  },
  {
    id: "spory",
    icon: "Scale",
    sk: {
      name: "Súdne spory a vymáhanie",
      tagline: "Keď na dohodu nedôjde, postavíme sa za vás.",
      summary:
        "Pripravíme stratégiu, zastúpime vás pred súdom a vymôžeme, čo vám patrí. Vždy najprv zvážime aj rýchlejšiu mimosúdnu cestu.",
      solve: [
        "Zastupovanie v občianskych a obchodných sporoch",
        "Vymáhanie pohľadávok a exekúcie",
        "Mimosúdne urovnania a mediácia",
        "Náhrada škody a bezdôvodné obohatenie",
        "Zastupovanie v rozhodcovskom konaní",
      ],
      faq: [
        [
          "Koľko trvá súdny spor?",
          "Závisí od veci, no veľa sporov vieme uzavrieť mimosúdne za týždne. Reálny odhad dostanete na konzultácii.",
        ],
        [
          "Platím, aj keď spor prehráme?",
          "Cenu poznáte vopred. Pri vybraných veciach vieme dohodnúť aj odmenu naviazanú na výsledok.",
        ],
      ],
    },
    en: {
      name: "Litigation & debt recovery",
      tagline: "When no agreement is reached, we stand up for you.",
      summary:
        "We build the strategy, represent you in court and recover what you’re owed. We always weigh a faster out-of-court route first.",
      solve: [
        "Representation in civil and commercial disputes",
        "Debt recovery and enforcement",
        "Out-of-court settlements and mediation",
        "Damages and unjust enrichment",
        "Representation in arbitration",
      ],
      faq: [
        [
          "How long does a lawsuit take?",
          "It depends, but many disputes we close out of court within weeks. You’ll get a realistic estimate at the consultation.",
        ],
        [
          "Do I pay even if we lose?",
          "You know the price up front. For selected matters we can also agree a success-based fee.",
        ],
      ],
    },
    packages: [
      {
        id: "sp-vyzva",
        price: 89,
        sk: ["Predžalobná výzva", "Spísanie a odoslanie výzvy dlžníkovi — často stačí na zaplatenie."],
        en: ["Pre-action demand", "Drafting and sending a demand to the debtor — often enough to get paid."],
      },
      {
        id: "sp-zaloba",
        price: 390,
        sk: ["Príprava žaloby", "Spísanie žaloby a podanie na príslušný súd."],
        en: ["Lawsuit preparation", "Drafting the lawsuit and filing it with the competent court."],
      },
    ],
  },
  {
    id: "trestne",
    icon: "Gavel",
    sk: {
      name: "Trestné právo",
      tagline: "Obhajoba a ochrana vašich práv v každom štádiu.",
      summary:
        "Zastupujeme obvinených aj poškodených — od prvého výsluchu po hlavné pojednávanie. Konáme rýchlo, diskrétne a bez moralizovania.",
      solve: [
        "Obhajoba v prípravnom konaní a na súde",
        "Zastupovanie poškodených a uplatnenie nárokov",
        "Hospodárska a daňová trestná činnosť",
        "Trestné oznámenia a sťažnosti",
        "Podmienečné prepustenie a opravné prostriedky",
      ],
      faq: [
        [
          "Predvolali ma na výsluch — čo mám robiť?",
          "Pred výsluchom sa poraďte s advokátom. Máte právo na obhajcu od začiatku — zavolajte nám ešte predtým, než začnete vypovedať.",
        ],
        [
          "Zastupujete aj poškodených?",
          "Áno. Pomôžeme vám uplatniť náhradu škody a strážime priebeh konania za vás.",
        ],
      ],
    },
    en: {
      name: "Criminal law",
      tagline: "Defence and protection of your rights at every stage.",
      summary:
        "We represent both the accused and injured parties — from the first questioning to the main hearing. We act fast, discreetly and without judgment.",
      solve: [
        "Defence in pre-trial and court proceedings",
        "Representing injured parties and their claims",
        "Economic and tax crime",
        "Criminal complaints and appeals",
        "Parole and remedies",
      ],
      faq: [
        [
          "I’ve been summoned for questioning — what should I do?",
          "Consult an attorney before questioning. You have the right to a defender from the start — call us before you start testifying.",
        ],
        [
          "Do you represent injured parties too?",
          "Yes. We help you claim damages and track the proceedings on your behalf.",
        ],
      ],
    },
    packages: [
      {
        id: "tr-obhajoba",
        price: 290,
        sk: ["Obhajoba pri výsluchu", "Účasť advokáta na výsluchu a okamžitá právna pomoc."],
        en: ["Defence at questioning", "An attorney present at questioning and immediate legal help."],
      },
      {
        id: "tr-oznamenie",
        price: 149,
        sk: ["Trestné oznámenie", "Spísanie a podanie trestného oznámenia na políciu či prokuratúru."],
        en: ["Criminal complaint", "Drafting and filing a criminal complaint with the police or prosecutor."],
      },
    ],
  },
  {
    id: "it",
    icon: "Cpu",
    sk: {
      name: "IT a digitálne právo",
      tagline: "Právo, ktoré drží krok s technológiami.",
      summary:
        "GDPR, softvérové licencie, e-shopy a SaaS zmluvy. Pomáhame technologickým firmám rásť bez právnych dier.",
      solve: [
        "GDPR a ochrana osobných údajov",
        "Softvérové a licenčné zmluvy, SaaS",
        "Podmienky e-shopov a online služieb",
        "Duševné vlastníctvo a ochranné známky",
        "Zmluvy pre IT dodávateľov a startupy",
      ],
      faq: [
        [
          "Potrebuje môj e-shop právne dokumenty?",
          "Áno — obchodné podmienky, reklamačný poriadok a GDPR sú zo zákona povinné. Pripravíme ich na mieru.",
        ],
        [
          "Riešite aj zmluvy pre startupy a investorov?",
          "Áno, vrátane SAFE/investičných zmlúv, vesting a spoločenských zmlúv.",
        ],
      ],
    },
    en: {
      name: "IT & digital law",
      tagline: "Law that keeps pace with technology.",
      summary:
        "GDPR, software licences, e-shops and SaaS contracts. We help tech companies grow without legal gaps.",
      solve: [
        "GDPR and personal-data protection",
        "Software and licence contracts, SaaS",
        "E-shop and online-service terms",
        "Intellectual property and trademarks",
        "Contracts for IT vendors and startups",
      ],
      faq: [
        [
          "Does my e-shop need legal documents?",
          "Yes — terms, a complaints policy and GDPR are required by law. We prepare them tailored to you.",
        ],
        [
          "Do you handle startup and investor contracts?",
          "Yes, including SAFE/investment agreements, vesting and shareholder agreements.",
        ],
      ],
    },
    packages: [
      {
        id: "it-gdpr",
        price: 199,
        sk: ["GDPR dokumentácia", "Sada smerníc a súhlasov na mieru vášmu podnikaniu."],
        en: ["GDPR documentation", "A tailored set of policies and consents for your business."],
      },
      {
        id: "it-eshop",
        price: 169,
        sk: ["Dokumenty pre e-shop", "Obchodné podmienky, reklamačný poriadok a ochrana údajov."],
        en: ["E-shop documents", "Terms, complaints policy and data-protection notice."],
      },
    ],
  },
];

function localizeService(s: RawService, locale: Locale): Service {
  const c = s[locale];
  return {
    id: s.id,
    icon: s.icon,
    name: c.name,
    tagline: c.tagline,
    summary: c.summary,
    solve: c.solve,
    faq: c.faq.map(([q, a]) => ({ q, a })),
    packages: s.packages.map((p) => ({
      id: p.id,
      price: p.price,
      name: p[locale][0],
      desc: p[locale][1],
    })),
  };
}

export function getServices(locale: Locale): Service[] {
  return SERVICES.map((s) => localizeService(s, locale));
}

export function getServiceIds(): string[] {
  return SERVICES.map((s) => s.id);
}

export function getService(locale: Locale, id: string): Service | undefined {
  const s = SERVICES.find((x) => x.id === id);
  return s ? localizeService(s, locale) : undefined;
}

/* A flat list of every fixed-price package, tagged with its practice area
   (used by the e-shop "fixed packages" grid). */
export interface ShopPackage extends ServicePackage {
  area: string;
  icon: IconName;
}

export function getShopPackages(locale: Locale): ShopPackage[] {
  return getServices(locale).flatMap((s) =>
    s.packages.map((p) => ({ ...p, area: s.name, icon: s.icon }))
  );
}

/* ---------------- Team ---------------- */

export interface TeamMember {
  id: number;
  partner: boolean;
  tone: "brand" | "neutral";
  photo?: string;
  name: string;
  role: string;
  specialty?: string;
  bio?: string;
}

interface RawTeamMember {
  id: number;
  partner?: boolean;
  tone: "brand" | "neutral";
  photo?: string;
  sk: [string, string, string?];
  en: [string, string, string?];
  bio?: LangPair<string>;
}

const TEAM: RawTeamMember[] = [
  {
    id: 1,
    partner: true,
    tone: "brand",
    photo: "/team/tomas-kohut.jpg",
    sk: ["Tomáš Kohút", "riadiaci partner", "Insolvencie · obchodné právo · reality a development"],
    en: ["Tomáš Kohút", "managing partner", "Insolvency · corporate law · real estate & development"],
    bio: {
      sk: "20 rokov právnej praxe (od roku 2006). Osobne vedie najnáročnejšie insolvenčné a korporátne prípady a dohliada na každú väčšiu vec. Zapísaný v Slovenskej advokátskej komore pod č. 3901 a v zozname insolvenčných správcov Ministerstva spravodlivosti SR.",
      en: "20 years of legal practice (since 2006). He personally leads the most demanding insolvency and corporate matters and oversees every major case. Registered with the Slovak Bar Association (no. 3901) and on the Ministry of Justice list of insolvency administrators.",
    },
  },
  {
    id: 2,
    tone: "brand",
    sk: ["Pavol", "advokát", "Insolvenčné právo · správne právo · civilné spory"],
    en: ["Pavol", "attorney", "Insolvency law · administrative law · civil disputes"],
  },
  {
    id: 3,
    tone: "brand",
    sk: ["Jakub", "advokát", "Trestné právo · korporátna agenda · insolvenčné právo"],
    en: ["Jakub", "attorney", "Criminal law · corporate agenda · insolvency law"],
  },
  {
    id: 4,
    tone: "brand",
    sk: ["Dominika", "spolupracujúca advokátka", "Zdravotnícke právo · rodinné právo"],
    en: ["Dominika", "associate attorney", "Healthcare law · family law"],
  },
  { id: 5, tone: "neutral", sk: ["Lucia", "odborná asistentka advokáta"], en: ["Lucia", "paralegal"] },
  { id: 6, tone: "neutral", sk: ["Eva", "účtovníčka"], en: ["Eva", "accountant"] },
  { id: 7, tone: "neutral", sk: ["Katarína", "účtovníčka"], en: ["Katarína", "accountant"] },
  { id: 8, tone: "neutral", sk: ["Ingrid", "sekretariát"], en: ["Ingrid", "office manager"] },
];

export function getTeam(locale: Locale): TeamMember[] {
  return TEAM.map((m) => ({
    id: m.id,
    partner: !!m.partner,
    tone: m.tone,
    photo: m.photo,
    name: m[locale][0],
    role: m[locale][1] as string,
    specialty: m[locale][2],
    bio: m.bio?.[locale],
  }));
}

/* ---------------- Blog ---------------- */

export interface Article {
  id: string;
  category: string;
  tone: "brand" | "accent";
  read: number;
  date: string;
  iso: string;
  title: string;
  excerpt: string;
  body: string[];
}

interface RawArticle {
  id: string;
  cat: LangPair<string>;
  tone: "brand" | "accent";
  read: number;
  date: LangPair<string>;
  iso: string;
  sk: [string, string];
  en: [string, string];
  body?: LangPair<string[]>;
}

const BLOG: RawArticle[] = [
  {
    id: "ako-ucinne-vymahat-pohladavku-krok-za-krokom",
    cat: { sk: "Obchodné právo", en: "Commercial Law" },
    tone: "brand",
    read: 4,
    date: { sk: "6. júla 2026", en: "6 July 2026" },
    iso: "2026-07-06T09:00:00+02:00",
    sk: ["Ako účinne vymáhať pohľadávku krok za krokom", "Praktický návod, ako postupovať pri vymáhaní dlhu od prvej výzvy až po exekúciu, aby ste získali svoje peniaze späť."],
    en: ["How to Effectively Recover a Debt Step by Step", "A practical guide on how to proceed when recovering a debt, from the first notice all the way to enforcement, so you get your money back."],
    body: {
      sk: ["Vymáhanie pohľadávky sa najlepšie začína ešte predtým, než vôbec vznikne problém. Dobre nastavená zmluva, jasné platobné podmienky a doklady o dodaní tovaru alebo služby sú základom úspechu. Ak máte poriadok v dokumentácii, celý neskorší proces je rýchlejší a lacnejší. Preto odporúčame uchovávať objednávky, faktúry, e-mailovú komunikáciu aj potvrdenia o prevzatí.","Prvým praktickým krokom pri omeškaní je predžalobná výzva na úhradu. Ide o písomné vyzvanie dlžníka, aby zaplatil v stanovenej lehote, s upozornením na možné ďalšie právne kroky. Táto výzva často stačí na to, aby dlžník zaplatil dobrovoľne, pretože si uvedomí, že situáciu myslíte vážne. Zároveň predstavuje dôkaz o vašej snahe vyriešiť vec zmierlivo.","Ak výzva nezaberie, nasleduje uplatnenie nároku na súde. Podľa povahy pohľadávky sa dá využiť buď klasické súdne konanie, alebo zrýchlené konanie vhodné najmä pri nesporných peňažných nárokoch. Cieľom je získať vykonateľný titul, teda rozhodnutie, na základe ktorého môžete dlžníka prinútiť zaplatiť aj proti jeho vôli. V tejto fáze je dôležité správne vyčísliť istinu, úroky z omeškania aj náklady konania.","Keď máte vykonateľné rozhodnutie a dlžník stále neplatí, prichádza na rad exekúcia. Exekútor môže siahnuť na bankové účty, mzdu, majetok alebo iné aktíva dlžníka. Úspešnosť exekúcie závisí najmä od toho, či má dlžník z čoho platiť, preto sa oplatí vopred preveriť jeho majetkovú situáciu. Dobrá príprava v predchádzajúcich krokoch tu výrazne zvyšuje šancu, že sa k svojim peniazom skutočne dostanete.","Počas celého procesu je vhodné zvážiť aj možnosť dohody či splátkového kalendára. Niekedy je rýchlejšie a výhodnejšie dostať časť peňazí okamžite než čakať roky na plnú sumu. Skúsený advokát vám pomôže vyhodnotiť, kedy sa oplatí tlačiť na tvrdé riešenie a kedy je rozumné pristúpiť na kompromis. Rozhodnutie by však vždy malo vychádzať z reálnej vymožiteľnosti pohľadávky.","Ak riešite nezaplatenú faktúru alebo dlh a neviete, ako ďalej, radi vám pomôžeme. V kancelárii kohút & partners vo Zvolene vám ponúkame konzultáciu za pevnú cenu a na vašu správu odpovieme do 24 hodín. Ozvite sa nám a spoločne nájdeme najefektívnejšiu cestu k vašim peniazom."],
      en: ["Debt recovery is best started even before a problem arises. A well-drafted contract, clear payment terms and proof of delivery of goods or services are the foundation of success. If your documentation is in order, the whole later process is faster and cheaper. That is why we recommend keeping orders, invoices, e-mail communication and confirmations of receipt.","The first practical step in case of default is a pre-litigation payment notice. This is a written request for the debtor to pay within a set deadline, with a warning about possible further legal steps. This notice is often enough to make the debtor pay voluntarily, as they realize you are serious about the matter. At the same time, it serves as proof of your effort to resolve the issue amicably.","If the notice does not work, the next step is asserting the claim in court. Depending on the nature of the debt, you can use either standard court proceedings or expedited proceedings, which are especially suitable for undisputed monetary claims. The goal is to obtain an enforceable title, meaning a decision on the basis of which you can compel the debtor to pay even against their will. At this stage it is important to correctly calculate the principal, late payment interest and the costs of the proceedings.","Once you have an enforceable decision and the debtor still does not pay, enforcement comes into play. An enforcement officer can seize bank accounts, wages, property or other assets of the debtor. The success of enforcement mainly depends on whether the debtor has anything to pay from, so it is worth checking their financial situation in advance. Good preparation in the previous steps significantly increases the chance that you will actually get your money.","Throughout the whole process it is also worth considering a settlement or an installment plan. Sometimes it is faster and more advantageous to receive part of the money immediately than to wait years for the full amount. An experienced lawyer will help you assess when it pays to push for a firm solution and when a compromise is reasonable. However, the decision should always be based on the real recoverability of the debt.","If you are dealing with an unpaid invoice or debt and do not know how to proceed, we are happy to help. At kohút & partners in Zvolen we offer a consultation at a fixed price and respond to your message within 24 hours. Get in touch and together we will find the most effective path to your money."],
    },
  },
  {
    id: "osobny-bankrot-2026-podmienky-a-postup",
    cat: { sk: "Insolvencie", en: "Insolvency" },
    tone: "brand",
    read: 4,
    date: { sk: "29. júna 2026", en: "29 June 2026" },
    iso: "2026-06-29T09:00:00+02:00",
    sk: ["Osobný bankrot 2026: podmienky a postup", "Trápia vás dlhy, ktoré nedokážete splácať? Prečítajte si, kedy máte na oddlženie nárok a ako celý proces prebieha."],
    en: ["Personal Bankruptcy 2026: Terms and Process", "Struggling with debts you cannot repay? Learn when you qualify for debt relief and how the whole process works."],
    body: {
      sk: ["Oddlženie fyzickej osoby, ľudovo nazývané osobný bankrot, je zákonný spôsob, ako sa dostať z dlhov, ktoré už nedokážete splácať. Je určené pre ľudí, ktorí sa ocitli v platobnej neschopnosti a nevidia reálnu možnosť, ako svoje záväzky vyrovnať bežným spôsobom. Cieľom je dať poctivému dlžníkovi druhú šancu a možnosť začať odznova.","Na to, aby ste mohli o oddlženie požiadať, musíte spravidla spĺňať niekoľko základných podmienok. Patrí medzi ne najmä to, že ste platobne neschopní, máte na Slovensku centrum hlavných záujmov a voči vám už prebehlo alebo prebieha exekučné konanie. Dôležité je tiež, aby ste k celému procesu pristupovali poctivo a transparentne, pretože nepoctivý zámer môže byť dôvodom na zrušenie oddlženia.","V praxi existujú dve hlavné cesty oddlženia – konkurz a splátkový kalendár. Pri konkurze sa speňaží majetok, ktorý máte, a zostávajúce dlhy sú vám odpustené. Pri splátkovom kalendári si naopak majetok ponecháte, ale počas stanoveného obdobia splácate časť dlhov podľa schváleného plánu. Ktorá cesta je pre vás vhodnejšia, závisí od vašej konkrétnej situácie, príjmu a majetku.","Samotný postup sa začína podaním návrhu, ktorému zvyčajne predchádza kontakt s Centrom právnej pomoci. Následne súd rozhodne o vyhlásení konkurzu alebo určení splátkového kalendára a do procesu vstupuje správca. Je dobré vedieť, že oddlženie nie je riešením úplne na všetky druhy záväzkov – niektoré pohľadávky, napríklad výživné alebo niektoré sankcie, môžu z oddlženia zostať vylúčené.","Oddlženie má aj svoje dôsledky, s ktorými treba počítať. Informácia o ňom je verejne dostupná, môže dočasne ovplyvniť vašu úverovú dôveryhodnosť a od dlžníka sa očakáva poctivé správanie aj po jeho ukončení. Práve preto je vhodné celý krok dobre zvážiť a pripraviť, aby ste sa vyhli komplikáciám a zbytočným chybám v návrhu.","Ak zvažujete osobný bankrot a neviete, ktorá cesta je pre vás najlepšia, radi vám pomôžeme. V kancelárii Kohút & Partners vo Zvolene vám situáciu posúdime za pevne dohodnutú cenu a na vašu otázku odpovieme do 24 hodín. Ozvite sa nám a spoločne nájdeme cestu, ako začať odznova."],
      en: ["Debt relief for a natural person, commonly called personal bankruptcy, is a legal way to get out of debts you can no longer repay. It is intended for people who have become insolvent and see no realistic option to settle their obligations the usual way. The goal is to give an honest debtor a second chance and the opportunity to start over.","To be able to apply for debt relief, you generally have to meet several basic conditions. These include in particular being insolvent, having your centre of main interests in Slovakia, and having enforcement proceedings already conducted or ongoing against you. It is also important to approach the entire process honestly and transparently, as a dishonest intention may be grounds for cancelling the debt relief.","In practice there are two main routes to debt relief – bankruptcy and a repayment schedule. In bankruptcy, the property you own is liquidated and the remaining debts are forgiven. With a repayment schedule, on the other hand, you keep your property but repay part of your debts during a set period according to an approved plan. Which route is more suitable for you depends on your specific situation, income and property.","The procedure itself begins with filing a petition, which is usually preceded by contacting the Centre for Legal Aid. The court then decides on declaring bankruptcy or setting a repayment schedule, and an administrator enters the process. It is good to know that debt relief is not a solution for absolutely all types of obligations – some claims, such as maintenance payments or certain penalties, may remain excluded from the relief.","Debt relief also has consequences you need to count on. Information about it is publicly available, it may temporarily affect your creditworthiness, and the debtor is expected to behave honestly even after it ends. That is precisely why it is advisable to consider and prepare this step well, to avoid complications and unnecessary mistakes in the petition.","If you are considering personal bankruptcy and are unsure which route is best for you, we will be glad to help. At Kohút & Partners in Zvolen we will assess your situation for a firmly agreed price and answer your question within 24 hours. Get in touch and together we will find a way to start over."],
    },
  },
  {
    id: "konkurz-vs-restrukturalizacia-ktory-nastroj-kedy",
    cat: { sk: "Insolvencie", en: "Insolvency" },
    tone: "brand",
    read: 4,
    date: { sk: "24. júna 2026", en: "24 June 2026" },
    iso: "2026-06-24T09:00:00+02:00",
    sk: ["Konkurz vs. reštrukturalizácia: ktorý nástroj kedy", "Firma v problémoch? Vysvetľujeme, kedy má zmysel reštrukturalizácia a kedy konkurz. Prečítajte si, ako ochrániť seba aj veriteľov."],
    en: ["Bankruptcy vs. Restructuring: Which Tool, When", "Company in trouble? We explain when restructuring makes sense and when bankruptcy does. Learn how to protect yourself and your creditors."],
    body: {
      sk: ["Keď sa firma dostane do platobných ťažkostí, kľúčové je rozhodnúť sa včas a správne. Slovenské právo ponúka dva základné nástroje – konkurz a reštrukturalizáciu. Hoci oba reagujú na úpadok, ich cieľ je odlišný: reštrukturalizácia sa snaží podnik zachovať a uzdraviť, konkurz vedie k jeho ukončeniu a speňaženiu majetku v prospech veriteľov.","Reštrukturalizácia má zmysel vtedy, keď podnik ešte má životaschopné jadro – funkčné zákazky, zamestnancov a reálnu šancu, že po dohode s veriteľmi a čiastočnom odpustení či odložení dlhov dokáže ďalej fungovať. Veritelia v nej zvyčajne dostanú viac, než by získali pri konkurze, a firma prežije. Tento nástroj však vyžaduje dôveryhodný plán, spoluprácu veriteľov a aktívny prístup vedenia od prvých príznakov problémov.","Konkurz je riešením tam, kde už záchrana nie je reálna – podnik nemá perspektívu pokračovať alebo dlhy výrazne prevyšujú hodnotu majetku. Cieľom je spravodlivo a transparentne speňažiť majetok a rozdeliť výťažok medzi veriteľov. Pre štatutárov je dôležité vedieť, že pri zanedbaní povinnosti podať návrh včas môže hroziť osobná zodpovednosť.","V praxi o voľbe nástroja rozhoduje najmä čas a stav firmy. Čím skôr sa problém rieši, tým viac dverí zostáva otvorených – vrátane reštrukturalizácie. Ak sa konanie odkladá, často už zostáva len konkurz. Preto sa oplatí situáciu vyhodnotiť triezvo a s odstupom, ideálne ešte predtým, než nastane úplná platobná neschopnosť.","Pred rozhodnutím odporúčame posúdiť reálny stav majetku a záväzkov, postoj kľúčových veriteľov a vyhliadky podnikania do budúcnosti. Na základe toho sa dá zodpovedne vybrať cesta, ktorá ochráni hodnotu firmy aj postavenie jej vedenia. Univerzálne riešenie neexistuje – každý prípad je iný.","Ak zvažujete ďalší postup, neváhajte sa nám ozvať. Vašu situáciu posúdime, vysvetlíme možnosti a navrhneme riešenie za vopred dohodnutú pevnú cenu. Na úvodnú otázku vám odpovieme do 24 hodín."],
      en: ["When a company runs into payment difficulties, deciding early and correctly is crucial. Slovak law offers two basic tools – bankruptcy and restructuring. Although both respond to insolvency, their goals differ: restructuring seeks to preserve and heal the business, while bankruptcy leads to its closure and the sale of assets for the benefit of creditors.","Restructuring makes sense when the business still has a viable core – functioning contracts, employees and a realistic chance that, after an agreement with creditors and partial forgiveness or deferral of debts, it can continue operating. Creditors usually recover more than they would in bankruptcy, and the company survives. However, this tool requires a credible plan, cooperation from creditors and proactive management from the first signs of trouble.","Bankruptcy is the solution where rescue is no longer realistic – the business has no prospect of continuing or the debts significantly exceed the value of its assets. The aim is to sell the assets fairly and transparently and distribute the proceeds among creditors. For company directors it is important to know that neglecting the duty to file in time may give rise to personal liability.","In practice, the choice of tool is determined mainly by timing and the state of the company. The sooner the problem is addressed, the more doors remain open – including restructuring. If proceedings are delayed, often only bankruptcy remains. It is therefore worth assessing the situation soberly and with perspective, ideally before full insolvency sets in.","Before deciding, we recommend assessing the real state of assets and liabilities, the attitude of key creditors and the future outlook of the business. On that basis it is possible to responsibly choose a path that protects both the value of the company and the position of its management. There is no universal solution – every case is different.","If you are considering your next steps, do not hesitate to contact us. We will assess your situation, explain the options and propose a solution for an agreed fixed price. We will answer your initial question within 24 hours."],
    },
  },
  {
    id: "restrukturalizacia-2026",
    cat: { sk: "Insolvencie", en: "Insolvency" },
    tone: "accent",
    read: 6,
    date: { sk: "12. jún 2026", en: "12 June 2026" },
    iso: "2026-06-12T09:00:00+02:00",
    sk: [
      "Reštrukturalizácia firmy v roku 2026: kedy konať a ako",
      "Najčastejšia chyba je čakať príliš dlho. Pozrime sa, aké signály značia, že je čas riešiť ozdravenie firmy — a aké možnosti máte.",
    ],
    en: [
      "Restructuring a company in 2026: when to act and how",
      "The most common mistake is waiting too long. Let’s look at the signals that it’s time to address recovery — and what options you have.",
    ],
    body: {
      sk: [
        "Mnoho podnikateľov vníma reštrukturalizáciu ako priznanie zlyhania. V skutočnosti je to nástroj, ktorý vie firmu zachrániť — ak sa použije včas.",
        "Prvým signálom je, keď spoločnosť prestáva zvládať splatné záväzky a peniaze chýbajú skôr, než prídu tržby. V tej chvíli ešte máte na stole takmer všetky možnosti.",
        "Druhým signálom je tlak veriteľov a hroziace exekúcie. Tu sa už priestor zužuje, no riadená reštrukturalizácia stále vie ochrániť jadro podnikania.",
        "Naša rada je jednoduchá: nečakajte na tretí signál. Konzultácia v správnom čase je najlacnejšia investícia do prežitia firmy.",
      ],
      en: [
        "Many entrepreneurs see restructuring as admitting failure. In reality it’s a tool that can save a company — if used in time.",
        "The first signal is when the company struggles to meet due obligations and cash runs short before revenue arrives. At that moment almost all options are still on the table.",
        "The second signal is creditor pressure and looming enforcement. The room narrows here, but a managed restructuring can still protect the core of the business.",
        "Our advice is simple: don’t wait for the third signal. A consultation at the right time is the cheapest investment in your company’s survival.",
      ],
    },
  },
  {
    id: "gdpr-eshop",
    cat: { sk: "IT právo", en: "IT law" },
    tone: "brand",
    read: 4,
    date: { sk: "5. jún 2026", en: "5 June 2026" },
    iso: "2026-06-05T09:00:00+02:00",
    sk: [
      "GDPR pre e-shop: 7 vecí, ktoré musíte mať",
      "Praktický kontrolný zoznam pre každého, kto predáva online. Vyhnite sa pokutám aj zbytočným komplikáciám.",
    ],
    en: [
      "GDPR for your e-shop: 7 things you must have",
      "A practical checklist for anyone selling online. Avoid fines and needless complications.",
    ],
    body: {
      sk: [
        "Predávať online bez právnych dokumentov je ako otvoriť obchod bez dverí — funguje to dovtedy, kým nepríde kontrola alebo nespokojný zákazník. Väčšinu povinností pritom stačí vyriešiť raz a poriadne.",
        "Sedem vecí, ktoré by ste mali mať: (1) obchodné podmienky, (2) reklamačný poriadok, (3) zásady ochrany osobných údajov podľa GDPR, (4) informáciu o cookies a nástroj na získanie súhlasu, (5) jasné poučenie o práve spotrebiteľa odstúpiť od zmluvy, (6) sprostredkovateľské zmluvy s dodávateľmi, ktorí spracúvajú údaje za vás (hosting, platby, e-maily), a (7) primerané zabezpečenie údajov.",
        "Nie je to len byrokracia. Pri kontrole alebo spore rozhoduje, či máte dokumenty v poriadku — a pokuty za porušenie GDPR vedia byť citeľné. Zákazník navyše skôr nakúpi tam, kde vidí, že firma berie ochranu údajov vážne.",
        "Vzory stiahnuté z internetu často nesedia na váš konkrétny e-shop. Radi vám pripravíme dokumenty na mieru — alebo skontrolujeme tie, ktoré už používate.",
      ],
      en: [
        "Selling online without legal documents is like opening a shop without a door — it works until an inspection or an unhappy customer shows up. The good news: most obligations can be handled once and properly.",
        "Seven things you should have: (1) terms and conditions, (2) a complaints policy, (3) a GDPR privacy policy, (4) a cookie notice and a consent tool, (5) clear information on the consumer’s right to withdraw, (6) data-processing agreements with vendors who process data for you (hosting, payments, e-mail), and (7) reasonable data security.",
        "This isn’t just paperwork. In an inspection or a dispute, having your documents in order is what counts — and GDPR fines can hurt. Customers are also more likely to buy where they see a company takes data protection seriously.",
        "Templates pulled off the internet often don’t fit your specific shop. We’re happy to prepare tailored documents — or review the ones you already use.",
      ],
    },
  },
  {
    id: "kupa-bytu",
    cat: { sk: "Nehnuteľnosti", en: "Real estate" },
    tone: "brand",
    read: 5,
    date: { sk: "28. máj 2026", en: "28 May 2026" },
    iso: "2026-05-28T09:00:00+02:00",
    sk: [
      "Kúpa bytu: ako ochrániť peniaze pri prevode",
      "Úschova, kataster a kontrola zmluvy. Tri kroky, ktoré rozhodnú o tom, či bude kúpa bezpečná.",
    ],
    en: [
      "Buying a flat: how to protect your money in the transfer",
      "Escrow, the cadastre and a contract check. Three steps that decide whether the purchase is safe.",
    ],
    body: {
      sk: [
        "Kúpa bytu je často najväčšia transakcia v živote — a zároveň moment, keď sa dá najľahšie prísť o peniaze. Riziko nie je v cene, ale v tom, kedy a komu peniaze pošlete.",
        "Najdôležitejšia ochrana je úschova. Kúpnu cenu neposielajte priamo predávajúcemu, ale do notárskej alebo advokátskej úschovy. Peniaze sa uvoľnia až vtedy, keď je vlastníctvo zapísané na vás v katastri — nie skôr.",
        "Druhým pilierom je správne pripravená kúpna zmluva a návrh na vklad do katastra. Skontrolujte ťarchy (záložné práva, vecné bremená), či je predávajúci skutočne vlastníkom, a presné vymedzenie bytu vrátane podielu na pozemku a spoločných častiach.",
        "Tri kroky — kontrola zmluvy, úschova a vklad do katastra — rozhodnú o tom, či bude kúpa bezpečná. Pri každom z nich vám vieme stáť po boku.",
      ],
      en: [
        "Buying a flat is often the biggest transaction of your life — and the moment it’s easiest to lose money. The risk isn’t the price, but when and to whom you send the money.",
        "The most important protection is escrow. Don’t send the purchase price directly to the seller — use a notarial or attorney escrow. The funds are released only once ownership is registered to you in the cadastre, not before.",
        "The second pillar is a properly drafted purchase contract and a cadastre registration petition. Check for encumbrances (liens, easements), whether the seller is the actual owner, and the exact definition of the flat, including the share of the land and common areas.",
        "Three steps — a contract check, escrow and cadastre registration — decide whether the purchase is safe. We can stand by you at each of them.",
      ],
    },
  },
  {
    id: "zmluva-revizia",
    cat: { sk: "Obchodné právo", en: "Corporate law" },
    tone: "brand",
    read: 3,
    date: { sk: "20. máj 2026", en: "20 May 2026" },
    iso: "2026-05-20T09:00:00+02:00",
    sk: [
      "Prečo sa oplatí dať si skontrolovať každú zmluvu",
      "Revízia za pár desiatok eur vie ušetriť spory za tisíce. Na čo sa pozeráme najčastejšie.",
    ],
    en: [
      "Why it pays to have every contract reviewed",
      "A review for a few dozen euros can save disputes worth thousands. What we look at most often.",
    ],
    body: {
      sk: [
        "Zmluvu väčšina ľudí podpíše až vtedy, keď je rozhodnuté — a prečíta si ju, až keď nastane problém. Vtedy je už neskoro.",
        "Pri revízii sa pozeráme hlavne na to, čo vás môže zabolieť: zmluvné pokuty a sankcie, podmienky a lehoty na ukončenie, zodpovednosť za škodu, splatnosť a platobné podmienky — a na to, čo v zmluve naopak chýba.",
        "Revízia za pár desiatok eur dokáže predísť sporu za tisíce. Najčastejšie nejde o úmyselnú pascu, ale o nevýhodné formulácie, ktoré si bez praxe nevšimnete.",
        "Než niečo podpíšete — obchodnú zmluvu, nájom či zmluvu o dielo — pošlite nám ju. Zrozumiteľne vám povieme, čo podpisujete a kde si dať pozor.",
      ],
      en: [
        "Most people sign a contract once the deal is decided — and only read it when a problem appears. By then it’s too late.",
        "In a review we focus on what can hurt you: penalties and sanctions, termination terms and notice periods, liability for damage, due dates and payment terms — and on what the contract is missing.",
        "A review for a few dozen euros can prevent a dispute worth thousands. Usually it isn’t a deliberate trap, but unfavourable wording you wouldn’t spot without experience.",
        "Before you sign anything — a commercial contract, a lease or a work contract — send it to us. We’ll tell you in plain terms what you’re signing and where to be careful.",
      ],
    },
  },
  {
    id: "vymahanie-pohladavok",
    cat: { sk: "Súdne spory", en: "Litigation" },
    tone: "brand",
    read: 5,
    date: { sk: "14. máj 2026", en: "14 May 2026" },
    iso: "2026-05-14T09:00:00+02:00",
    sk: [
      "Vymáhanie pohľadávok: od výzvy po exekúciu",
      "Ako sa dostať k svojim peniazom rýchlo a bez zbytočných súdov.",
    ],
    en: [
      "Debt recovery: from demand to enforcement",
      "How to get to your money quickly and without unnecessary court battles.",
    ],
    body: {
      sk: [
        "Keď vám niekto nezaplatí, čas hrá proti vám. Čím dlhšie čakáte, tým ťažšie sa peniaze získavajú späť — a tým vyššie je riziko, že dlžník medzitým firmu „vyprázdni“.",
        "Postup má jasné kroky. Najprv predžalobná výzva — tá často stačí, aby dlžník zaplatil. Ak nezaberie, nasleduje žaloba alebo návrh na platobný rozkaz a po právoplatnom rozhodnutí exekúcia.",
        "Oplatí sa konať systematicky: mať poriadok v dokladoch (objednávky, faktúry, dodacie listy), strážiť premlčacie lehoty a pri väčších sumách zvážiť aj zabezpečenie majetku dlžníka. Niekedy je rýchlejšie a lacnejšie dohodnúť sa mimosúdne.",
        "Pomôžeme vám vybrať najrýchlejšiu cestu k vašim peniazom — od výzvy po exekúciu — a celé konanie vybavíme za vás.",
      ],
      en: [
        "When someone doesn’t pay you, time works against you. The longer you wait, the harder it is to get the money back — and the higher the risk the debtor empties the company in the meantime.",
        "The process has clear steps. First a pre-action demand — which is often enough to get the debtor to pay. If it doesn’t work, a lawsuit or a payment-order petition follows, and after a final decision, enforcement.",
        "It pays to act systematically: keep your records in order (orders, invoices, delivery notes), watch the limitation periods, and for larger amounts consider securing the debtor’s assets. Sometimes an out-of-court settlement is faster and cheaper.",
        "We’ll help you choose the fastest route to your money — from demand to enforcement — and handle the whole process for you.",
      ],
    },
  },
  {
    id: "zalozenie-sro",
    cat: { sk: "Obchodné právo", en: "Corporate law" },
    tone: "brand",
    read: 4,
    date: { sk: "7. máj 2026", en: "7 May 2026" },
    iso: "2026-05-07T09:00:00+02:00",
    sk: [
      "Založenie s.r.o. krok po kroku v roku 2026",
      "Čo potrebujete, koľko to stojí a ako celý proces vybaviť online.",
    ],
    en: [
      "Forming an LLC step by step in 2026",
      "What you need, what it costs, and how to handle the whole process online.",
    ],
    body: {
      sk: [
        "Založiť s.r.o. je dnes rýchlejšie než kedysi, no rozhodujú detaily. Dobre nastavená spoločnosť vám ušetrí starosti pri prvom spoločníkovi navyše aj pri prvom spore.",
        "V skratke: zvolíte obchodné meno a predmety podnikania, pripravíte spoločenskú zmluvu (alebo zakladateľskú listinu pri jednom spoločníkovi), vybavíte živnostenské oprávnenia, splatíte základné imanie a podáte návrh na zápis do obchodného registra. Väčšina krokov ide elektronicky.",
        "Pozor na veci, ktoré sa neskôr menia ťažko — vzťahy medzi spoločníkmi, konanie v mene firmy a rozdelenie obchodných podielov. Práve tu sa oplatí premyslieť to dopredu.",
        "Vieme vám firmu založiť na kľúč — pripravíme dokumenty, podáme návrhy a vybavíme živnosti, vy len podpíšete. A nastavíme to tak, aby vám spoločnosť slúžila aj o pár rokov.",
      ],
      en: [
        "Forming an LLC is faster than it used to be, but the details matter. A well-set-up company saves you trouble when the first extra shareholder — or the first dispute — arrives.",
        "In short: you choose a business name and activities, prepare the articles of association (or a founding deed for a single shareholder), arrange trade licences, pay up the registered capital and file for entry in the commercial register. Most steps are done electronically.",
        "Watch the things that are hard to change later — relationships between shareholders, who acts on the company’s behalf, and how ownership shares are split. This is exactly where it pays to think ahead.",
        "We can form your company turn-key — prepare the documents, file the petitions and arrange the trade licences, and you just sign. And we set it up so it still serves you years from now.",
      ],
    },
  },
];

function localizeArticle(a: RawArticle, locale: Locale): Article {
  return {
    id: a.id,
    category: a.cat[locale],
    tone: a.tone,
    read: a.read,
    date: a.date[locale],
    iso: a.iso,
    title: a[locale][0],
    excerpt: a[locale][1],
    body: a.body ? a.body[locale] : [a[locale][1]],
  };
}

export function getBlog(locale: Locale): Article[] {
  return BLOG.map((a) => localizeArticle(a, locale));
}

export function getArticleIds(): string[] {
  return BLOG.map((a) => a.id);
}

export function getArticle(locale: Locale, id: string): Article | undefined {
  const a = BLOG.find((x) => x.id === id);
  return a ? localizeArticle(a, locale) : undefined;
}

/* The blog author byline. (The handoff prototype showed "Martin Kohút" here,
   which conflicts with the verifiable principal — corrected to Tomáš Kohút.) */
export const BLOG_AUTHOR = "Tomáš Kohút";

/* ---------------- Subscriptions ---------------- */

export interface Subscription {
  id: string;
  hours: number;
  price: number;
  popular: boolean;
  name: string;
  desc: string;
  features: string[];
}

interface RawSubscription {
  id: string;
  hours: number;
  price: number;
  popular: boolean;
  sk: [string, string, string[]];
  en: [string, string, string[]];
}

const SUBSCRIPTIONS: RawSubscription[] = [
  {
    id: "sub-start",
    hours: 5,
    price: 450,
    popular: false,
    sk: [
      "Štart",
      "Pre menšie firmy a začínajúcich podnikateľov.",
      [
        "5 hodín právnych služieb mesačne",
        "Odozva do 2 pracovných dní",
        "Revízia zmlúv v cene",
        "Telefonická a e-mailová podpora",
      ],
    ],
    en: [
      "Start",
      "For smaller firms and early-stage entrepreneurs.",
      [
        "5 hours of legal services per month",
        "Reply within 2 business days",
        "Contract reviews included",
        "Phone and e-mail support",
      ],
    ],
  },
  {
    id: "sub-rast",
    hours: 15,
    price: 1190,
    popular: true,
    sk: [
      "Rast",
      "Pre rastúce firmy s pravidelnou agendou.",
      [
        "15 hodín právnych služieb mesačne",
        "Odozva do 2 pracovných dní",
        "Dedikovaný advokát",
        "Tvorba a revízia zmlúv",
        "Štvrťročný právny audit",
      ],
    ],
    en: [
      "Growth",
      "For growing companies with regular legal needs.",
      [
        "15 hours of legal services per month",
        "Reply within 2 business days",
        "A dedicated attorney",
        "Contract drafting and review",
        "Quarterly legal audit",
      ],
    ],
  },
  {
    id: "sub-partner",
    hours: 30,
    price: 2190,
    popular: false,
    sk: [
      "Partner",
      "Pre firmy, ktoré potrebujú právo neustále po ruke.",
      [
        "30 hodín právnych služieb mesačne",
        "Odozva do 1 pracovného dňa",
        "Prenos nevyčerpaných hodín 1× do ďalšieho mesiaca",
        "Dedikovaný tím advokátov",
        "Prednostné zastupovanie v sporoch",
        "Mesačný právny reporting",
      ],
    ],
    en: [
      "Partner",
      "For companies that need law on hand at all times.",
      [
        "30 hours of legal services per month",
        "Reply within 1 business day",
        "Roll over unused hours once to the next month",
        "A dedicated team of attorneys",
        "Priority representation in disputes",
        "Monthly legal reporting",
      ],
    ],
  },
];

export function getSubscriptions(locale: Locale): Subscription[] {
  return SUBSCRIPTIONS.map((s) => ({
    id: s.id,
    hours: s.hours,
    price: s.price,
    popular: s.popular,
    name: s[locale][0],
    desc: s[locale][1],
    features: s[locale][2],
  }));
}

/* ---------------- Templates ---------------- */

export interface Template {
  id: string;
  icon: IconName;
  price: number;
  name: string;
}

interface RawTemplate {
  id: string;
  icon: IconName;
  price: number;
  sk: string;
  en: string;
}

const TEMPLATES: RawTemplate[] = [
  { id: "tpl-praca", icon: "FileText", price: 19, sk: "Pracovná zmluva", en: "Employment contract" },
  { id: "tpl-nda", icon: "Shield", price: 19, sk: "Zmluva o mlčanlivosti (NDA)", en: "Non-disclosure agreement (NDA)" },
  { id: "tpl-vop", icon: "Cpu", price: 39, sk: "Obchodné podmienky pre e-shop", en: "E-shop terms & conditions" },
  { id: "tpl-najom", icon: "Building2", price: 24, sk: "Nájomná zmluva", en: "Lease agreement" },
  { id: "tpl-dielo", icon: "Briefcase", price: 29, sk: "Zmluva o dielo", en: "Work contract" },
  { id: "tpl-gdpr", icon: "Shield", price: 49, sk: "GDPR balík dokumentov", en: "GDPR document pack" },
];

export function getTemplates(locale: Locale): Template[] {
  return TEMPLATES.map((t) => ({ id: t.id, icon: t.icon, price: t.price, name: t[locale] }));
}

/* ---------------- Offices, contact, references ---------------- */

export interface Office {
  city: string;
  address: string;
}

const OFFICES: LangPair<Office>[] = [
  {
    sk: { city: "Zvolen", address: "Námestie SNP 74/28, 960 01 Zvolen" },
    en: { city: "Zvolen", address: "Námestie SNP 74/28, 960 01 Zvolen" },
  },
];

export function getOffices(locale: Locale): Office[] {
  return OFFICES.map((o) => o[locale]);
}

export const CONTACT = {
  phone: "+421 907 823 239",
  phone2: "+421 45 202 89 38",
  email: "klienti@tkak.sk",
  address: "Námestie SNP 74/28, 960 01 Zvolen",
} as const;

// Placeholder company names — replace with real client logos.
export const REFERENCES = [
  "Drevostavby SK",
  "Aurora Retail",
  "Nitra Invest",
  "TechVantage",
  "BeMont Group",
  "Karpaty Capital",
];

/* ---------------- Cart catalog ----------------
   Every purchasable (package, template, subscription) keyed by id, with both
   language names. The cart stores only id→qty and resolves display data here,
   so prices/names stay in sync and survive a language switch. */

export type PurchasableType = "pkg" | "tpl" | "sub";

export interface CartCatalogItem {
  id: string;
  nameSk: string;
  nameEn: string;
  price: number;
  type: PurchasableType;
}

let cartCatalog: Record<string, CartCatalogItem> | null = null;

export function getCartCatalog(): Record<string, CartCatalogItem> {
  if (cartCatalog) return cartCatalog;
  const map: Record<string, CartCatalogItem> = {};
  for (const s of SERVICES) {
    for (const p of s.packages) {
      map[p.id] = { id: p.id, nameSk: p.sk[0], nameEn: p.en[0], price: p.price, type: "pkg" };
    }
  }
  for (const t of TEMPLATES) {
    map[t.id] = { id: t.id, nameSk: t.sk, nameEn: t.en, price: t.price, type: "tpl" };
  }
  for (const s of SUBSCRIPTIONS) {
    map[s.id] = {
      id: s.id,
      nameSk: `Predplatné ${s.sk[0]}`,
      nameEn: `Subscription ${s.en[0]}`,
      price: s.price,
      type: "sub",
    };
  }
  cartCatalog = map;
  return map;
}
