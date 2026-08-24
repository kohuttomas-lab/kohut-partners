import type { Locale } from "@/i18n/routing";
import { enArticleSlug } from "@/lib/article-slugs";

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
      name: "Insolvency & restructuring in Slovakia",
      tagline: "Creditor protection and company rescue under Slovak law.",
      summary:
        "We guide companies and foreign creditors through Slovak insolvency proceedings — protecting claims, rescuing viable businesses, and managing an orderly exit when rescue isn’t possible.",
      solve: [
        "Representing foreign creditors in Slovak bankruptcies and restructurings",
        "Filing creditor claims with the Slovak trustee within statutory deadlines",
        "Restructuring and recovery plans under Slovak law",
        "Bankruptcy and liquidation of Slovak companies",
        "Negotiations with Slovak banks and creditors",
      ],
      faq: [
        [
          "My Slovak debtor went bankrupt — what now?",
          "Claims must be filed with the Slovak trustee within strict statutory deadlines, or your rights are severely curtailed. Send us the basics and we file and represent you throughout the proceedings.",
        ],
        [
          "When should I address restructuring?",
          "Ideally as soon as the company struggles to meet due obligations. The earlier you act, the more rescue options Slovak law leaves on the table.",
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
          "Áno. Od 17. augusta 2026 musí byť spoločenská zmluva alebo zakladateľská listina vo forme notárskej zápisnice alebo dokumentu autorizovaného advokátom (§ 57 Obchodného zákonníka). Dokumenty pripravíme a ako advokáti autorizujeme, podáme návrh na zápis a vybavíme živnosti. Ak nemôžete prísť osobne, dokument za vás podpíše splnomocnenec na základe plnomocenstva s úradne osvedčeným podpisom (§ 57 ods. 2).",
        ],
        [
          "Oplatí sa dať si skontrolovať zmluvu?",
          "Takmer vždy. Revízia za pár desiatok eur vie ušetriť spory za tisíce.",
        ],
      ],
    },
    en: {
      name: "Doing business in Slovakia",
      tagline: "Company formation, contracts and corporate — under Slovak law.",
      summary:
        "From forming a Slovak s.r.o. (LLC) for foreign founders through commercial contracts governed by Slovak law to corporate changes and due diligence on Slovak companies.",
      solve: [
        "Forming Slovak companies (s.r.o., a.s.) for foreign founders — fully remote",
        "Commercial contracts governed by Slovak law, drafted or reviewed in English",
        "Corporate advisory and shareholder relations in Slovak entities",
        "Civil contracts, ownership and obligations under Slovak law",
        "Due diligence on Slovak companies and acquisitions",
      ],
      faq: [
        [
          "Can a foreigner own and run a Slovak s.r.o.?",
          "Yes — foreign individuals and companies can own a Slovak s.r.o. For managing directors from outside the EU/OECD, additional residence requirements may apply. We check your setup and handle the whole formation remotely via power of attorney.",
        ],
        [
          "Can you form the company without me travelling to Slovakia?",
          "Yes. Since 17 August 2026 the memorandum of association or founder’s deed must be a notarial deed or a document authorised by an attorney (Section 57 of the Commercial Code). We draft and authorise the documents as attorneys, file the registration and arrange the trade licences. If you cannot attend in person, a representative signs the founding document for you under a power of attorney with an officially certified signature (Section 57(2)) — certified abroad before a notary and apostilled or legalised where required.",
        ],
      ],
    },
    packages: [
      {
        id: "ob-sro",
        price: 299,
        sk: ["Založenie s.r.o. na kľúč", "Zakladateľské dokumenty autorizované advokátom — od 17. 8. 2026 povinná forma —, zápis do OR a živnosti. Súdny poplatok 220 € sa platí samostatne."],
        en: ["Turn-key LLC formation", "Founding documents authorised by an attorney — mandatory form since 17 Aug 2026 —, commercial-register and trade-licence filing. The EUR 220 court fee is paid separately."],
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
      name: "Real estate in Slovakia",
      tagline: "Buying, selling and leasing Slovak property — safely.",
      summary:
        "Purchase and lease agreements, the Slovak land registry (kataster) and development projects. We make sure your money is protected and your ownership properly registered.",
      solve: [
        "Property purchases by foreign buyers — contracts, title checks, escrow",
        "Slovak land-registry (kataster) filings and registration of ownership",
        "Lease agreements for landlords and tenants under Slovak law",
        "Development projects and construction in Slovakia",
        "Easements, liens, co-ownership and real-estate disputes",
      ],
      faq: [
        [
          "Can a foreigner buy property in Slovakia?",
          "Yes — EU and most other foreign nationals and companies can acquire Slovak real estate, with limited exceptions (e.g. certain agricultural and forest land). We verify title in the land registry and structure the purchase safely.",
        ],
        [
          "How do you protect my money when buying?",
          "We use a notarial or attorney escrow — funds are released to the seller only after your ownership is registered in the Slovak land registry.",
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
        "Pripravíme stratégiu, zastúpime vás pred súdom a vymôžeme, čo vám patrí — vrátane sporov s poisťovňami o zamietnuté poistné plnenie. Vždy najprv zvážime aj rýchlejšiu mimosúdnu cestu.",
      solve: [
        "Zamietnuté alebo krátené poistné plnenie — spor s poisťovňou",
        "Zastupovanie v občianskych a obchodných sporoch",
        "Vymáhanie pohľadávok a exekúcie",
        "Mimosúdne urovnania a mediácia",
        "Náhrada škody a bezdôvodné obohatenie",
        "Zastupovanie v rozhodcovskom konaní",
      ],
      faq: [
        [
          "Poisťovňa mi zamietla poistné plnenie. Dá sa s tým ešte niečo robiť?",
          "Vo väčšine prípadov áno. Zamietnutie ani krátenie plnenia nie je konečné rozhodnutie — je to len stanovisko poisťovne. Preveríme poistnú zmluvu a poistné podmienky, dôvod zamietnutia a spis o likvidácii škody, a ak nárok obstojí, uplatníme ho voči poisťovni a v prípade potreby aj súdnou žalobou.",
        ],
        [
          "Ktoré poistné udalosti riešite?",
          "Poistenie majetku a domácnosti, havarijné poistenie a povinné zmluvné poistenie, poistenie zodpovednosti za škodu, životné a úrazové poistenie aj poistenie schopnosti splácať úver. Rovnako riešime krátené plnenie, teda situáciu, keď poisťovňa vyplatí výrazne menej, než škoda reálne predstavuje.",
        ],
        [
          "Do kedy sa dá nárok voči poisťovni uplatniť?",
          "Právo na poistné plnenie sa premlčuje v trojročnej lehote, ktorá začína plynúť rok po vzniku poistnej udalosti (§ 104 Občianskeho zákonníka). Zamietavý list poisťovne túto lehotu nezastaví, preto sa oplatí ozvať sa čo najskôr.",
        ],
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
      name: "Litigation before Slovak courts",
      tagline: "When no agreement is reached, we stand up for you in Slovakia.",
      summary:
        "We represent international clients in civil and commercial disputes before Slovak courts — from pre-action demands and payment orders to enforcement. We always weigh a faster out-of-court route first.",
      solve: [
        "Debt recovery against Slovak debtors — demand, payment order, enforcement",
        "Representation before Slovak courts in civil and commercial disputes",
        "Enforcement of foreign judgments and arbitral awards in Slovakia",
        "Out-of-court settlements, damages and unjust enrichment",
        "Interim measures and asset protection in Slovakia",
      ],
      faq: [
        [
          "Do I have to travel to Slovakia for my court case?",
          "In most civil and commercial matters we act on the basis of a power of attorney and your personal attendance isn’t needed. Where the court requires your testimony, we prepare you and arrange the practicalities.",
        ],
        [
          "How long does recovering a debt in Slovakia take?",
          "An undisputed invoice can end in an enforceable Slovak payment order within weeks; contested cases take longer. You’ll get a realistic estimate and a fixed fee at the consultation.",
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
      name: "Criminal defence in Slovakia",
      tagline: "Defence and protection of your rights in Slovak criminal proceedings.",
      summary:
        "We defend individuals and companies — including foreign nationals — in Slovak criminal proceedings, from the first questioning to the main hearing. We also represent injured parties. Fast, discreet, without judgment.",
      solve: [
        "Defence of foreign nationals in Slovak criminal proceedings",
        "Assistance at police questioning and detention hearings",
        "Economic and tax crime under Slovak law",
        "Representing injured parties and their damage claims",
        "Criminal complaints, appeals and remedies",
      ],
      faq: [
        [
          "I don’t speak Slovak — what are my rights?",
          "You have the right to an interpreter throughout Slovak criminal proceedings and to a defence counsel from the very start. We communicate with you in English and defend you before the Slovak authorities — call us before you testify.",
        ],
        [
          "Do you represent injured parties too?",
          "Yes. We help you claim damages in the Slovak proceedings and track the case on your behalf.",
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
      name: "IT, data & GDPR in Slovakia",
      tagline: "Technology law under Slovak and EU rules.",
      summary:
        "GDPR compliance for Slovak operations, e-commerce terms under Slovak consumer law, software and SaaS contracts. We help tech companies do business in Slovakia without legal gaps.",
      solve: [
        "GDPR compliance for Slovak entities and e-shops",
        "E-commerce terms under Slovak consumer law",
        "Software, licence and SaaS contracts governed by Slovak law",
        "Intellectual property and trademarks in Slovakia",
        "Contracts for IT vendors and startups operating in Slovakia",
      ],
      faq: [
        [
          "We sell online to Slovak customers — what documents do we need?",
          "Slovak consumer law requires terms and conditions, a complaints policy and GDPR documentation adapted to Slovak rules. We prepare them tailored to your shop — in Slovak, with an English working version for you.",
        ],
        [
          "Do you handle startup and investor contracts?",
          "Yes — investment agreements, vesting and shareholder agreements for Slovak entities, drafted under Slovak law.",
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
  /* Slovenský slug. Anglický slug je v `lib/article-slugs.ts` — nie tu, lebo ho
     potrebuje aj klientsky prepínač jazyka a tento modul má 100+ kB textov. */
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
    id: "osobne-udaje-zamestnancov-podla-gdpr",
    cat: { sk: "IT právo", en: "IT Law" },
    tone: "brand",
    read: 4,
    date: { sk: "24. augusta 2026", en: "24 August 2026" },
    iso: "2026-08-24T09:00:00+02:00",
    sk: ["Osobné údaje zamestnancov podľa GDPR", "Ako správne spracúvať osobné údaje zamestnancov podľa GDPR a vyhnúť sa pokutám? Praktický prehľad povinností pre každého zamestnávateľa."],
    en: ["Employee Personal Data Under GDPR", "How to correctly process employee personal data under GDPR and avoid fines? A practical overview of obligations for every employer."],
    body: {
      sk: ["Každý zamestnávateľ pracuje s osobnými údajmi svojich zamestnancov – od mena a adresy cez čísla účtov až po údaje o zdravotnom stave či dochádzke. GDPR stanovuje jasné pravidlá, ako s týmito informáciami zaobchádzať, aby boli chránené a spracúvané len na legitímne účely. Nedodržanie týchto pravidiel môže viesť k vysokým pokutám a strate dôvery zamestnancov.","Základným princípom je, že osobné údaje možno spracúvať len na konkrétny, vopred určený účel a v nevyhnutnom rozsahu. Väčšinu údajov zamestnancov spracúva zamestnávateľ na základe plnenia pracovnej zmluvy alebo zákonných povinností – napríklad pri odvodoch, mzdovej agende či evidencii dochádzky. Súhlas zamestnanca sa v pracovnoprávnom vzťahu vyžaduje len výnimočne, keďže sa nepovažuje za celkom slobodný.","Zamestnávateľ musí zamestnancov transparentne informovať o tom, aké údaje o nich zhromažďuje, na aký účel, ako dlho ich uchováva a komu ich prípadne poskytuje. Táto informačná povinnosť sa najčastejšie plní prostredníctvom interného dokumentu alebo oznámenia, ktoré je zamestnancovi dostupné. Údaje by sa nemali uchovávať dlhšie, než je potrebné.","Osobitnú pozornosť si vyžadujú citlivé údaje, ako sú informácie o zdravotnom stave, ako aj monitorovanie zamestnancov – napríklad kamerovým systémom, sledovaním e-mailov alebo GPS vo firemných vozidlách. Takéto spracúvanie je prípustné len pri splnení prísnejších podmienok a zamestnanci o ňom musia byť vopred informovaní. Neoprávnené monitorovanie patrí medzi najčastejšie pochybenia.","V praxi odporúčame mať nastavené jasné interné pravidlá, poučených zamestnancov aj primerané technické a organizačné opatrenia na ochranu údajov. Dôležité je tiež vedieť správne reagovať na žiadosti zamestnancov o prístup k ich údajom či na prípadný bezpečnostný incident. Dobrá príprava výrazne znižuje riziko sankcií.","Ak si nie ste istí, či vaša firma spracúva osobné údaje zamestnancov v súlade s GDPR, radi vám pomôžeme. V advokátskej kancelárii Kohút & Partners vo Zvolene vám ponúkame konzultáciu za pevnú cenu a s odpoveďou do 24 hodín. Ozvite sa nám a získajte istotu, že máte veci nastavené správne."],
      en: ["Every employer works with the personal data of its employees – from names and addresses through bank account numbers to information about health status or attendance. GDPR sets clear rules on how to handle this information so that it is protected and processed only for legitimate purposes. Failure to follow these rules can lead to high fines and a loss of employee trust.","The basic principle is that personal data may be processed only for a specific, predefined purpose and to the necessary extent. The employer processes most employee data based on the performance of the employment contract or legal obligations – for example, for contributions, payroll administration, or attendance records. Employee consent is required only exceptionally in an employment relationship, as it is not considered fully free.","The employer must transparently inform employees about what data it collects about them, for what purpose, how long it retains it, and to whom it may provide it. This information obligation is most often fulfilled through an internal document or notice available to the employee. Data should not be kept longer than necessary.","Special attention is required for sensitive data, such as information about health status, as well as employee monitoring – for example via a camera system, email monitoring, or GPS in company vehicles. Such processing is permissible only under stricter conditions, and employees must be informed about it in advance. Unauthorized monitoring is among the most common mistakes.","In practice, we recommend having clear internal rules in place, well-informed employees, and adequate technical and organizational measures to protect data. It is also important to know how to correctly respond to employee requests for access to their data or to a potential security incident. Good preparation significantly reduces the risk of sanctions.","If you are not sure whether your company processes employee personal data in compliance with GDPR, we will be happy to help. At the Kohút & Partners law firm in Zvolen, we offer a consultation at a fixed price with a response within 24 hours. Get in touch with us and gain the certainty that you have everything set up correctly."],
    },
  },
  {
    id: "reklamacie-v-e-shope-prava-a-povinnosti",
    cat: { sk: "IT právo", en: "IT Law" },
    tone: "brand",
    read: 4,
    date: { sk: "17. augusta 2026", en: "17 August 2026" },
    iso: "2026-08-17T09:00:00+02:00",
    sk: ["Reklamácie v e-shope: práva a povinnosti", "Ako správne reklamovať tovar z e-shopu a čo musí predajca splniť? Prehľad práv spotrebiteľa a povinností predajcu, ktorý vám ušetrí čas aj nervy."],
    en: ["E-shop Complaints: Rights and Obligations", "How to properly file a complaint about goods from an e-shop and what the seller must do? An overview of consumer rights and seller obligations that saves you time and nerves."],
    body: {
      sk: ["Nakupovanie cez internet je pohodlné, no niekedy tovar nezodpovedá tomu, čo ste si objednali – príde poškodený, nefunkčný alebo sa pokazí krátko po prevzatí. V takých prípadoch máte ako spotrebiteľ jasné práva a predajca má povinnosť vašu reklamáciu riešiť. Kľúčové je vedieť, ako postupovať, aby ste sa domohli nápravy.","Základom je uplatniť reklamáciu čo najskôr po zistení vady a vždy písomne alebo dohľadateľnou formou – napríklad e-mailom. Popíšte, o akú vadu ide, priložte doklad o kúpe a uveďte, čo od reklamácie očakávate: opravu, výmenu, primeranú zľavu alebo vrátenie peňazí. Predajca je povinný prijať reklamáciu a vydať vám potvrdenie o jej uplatnení.","Predajca má zákonom stanovenú lehotu na vybavenie reklamácie a je povinný vás o výsledku informovať. Ak reklamáciu neuzná, mal by vám to zdôvodniť. Dôležité je aj to, že pri nákupe cez internet máte navyše právo odstúpiť od zmluvy v zákonnej lehote aj bez udania dôvodu – to je odlišná situácia od reklamácie vady, no v praxi sa často zamieňajú.","Odporúčame uchovávať si všetku komunikáciu s predajcom, fotografie vadného tovaru aj doklad o kúpe. Tieto podklady sú neoceniteľné, ak sa spor vyostrí a bude potrebné sa obrátiť na dozorné orgány alebo súd. Čím lepšie máte veci zdokumentované, tým silnejšia je vaša pozícia.","Ak predajca reklamáciu neoprávnene odmieta, naťahuje lehoty alebo s vami odmieta komunikovať, nemusíte zostať bezradní. Existujú nástroje mimosúdneho riešenia sporov aj možnosť domáhať sa svojich práv súdnou cestou. Správne zvolený postup vám môže výrazne pomôcť.","Ak si nie ste istí svojimi právami alebo potrebujete pomoc s konkrétnou reklamáciou, obráťte sa na našu kanceláriu. Situáciu posúdime za pevne dohodnutú cenu a ozveme sa vám do 24 hodín – jasne a bez zbytočných komplikácií."],
      en: ["Online shopping is convenient, but sometimes the goods do not match what you ordered – they arrive damaged, non-functional, or break shortly after delivery. In such cases, you as a consumer have clear rights and the seller has an obligation to handle your complaint. The key is knowing how to proceed in order to obtain a remedy.","The basis is to file the complaint as soon as possible after discovering the defect, and always in writing or in a traceable form – for example, by e-mail. Describe the defect, attach proof of purchase, and state what you expect from the complaint: repair, replacement, a reasonable discount, or a refund. The seller is obliged to accept the complaint and issue you a confirmation of its filing.","The seller has a legally set period to handle the complaint and is obliged to inform you of the outcome. If the complaint is rejected, they should justify it. It is also important to note that when shopping online you additionally have the right to withdraw from the contract within the statutory period even without giving a reason – this is a different situation from complaining about a defect, but in practice the two are often confused.","We recommend keeping all communication with the seller, photographs of the defective goods, and proof of purchase. These materials are invaluable if the dispute escalates and it becomes necessary to turn to supervisory authorities or the court. The better you document things, the stronger your position.","If the seller unjustifiably rejects the complaint, drags out deadlines, or refuses to communicate with you, you do not have to feel helpless. There are tools for out-of-court dispute resolution as well as the option to pursue your rights through the courts. Choosing the right approach can help you significantly.","If you are unsure about your rights or need help with a specific complaint, contact our office. We will assess your situation for a fixed agreed price and get back to you within 24 hours – clearly and without unnecessary complications."],
    },
  },
  {
    id: "vecne-bremena-a-tarchy-odhalte-ich-pred-kupou",
    cat: { sk: "Nehnuteľnosti", en: "Real Estate" },
    tone: "brand",
    read: 4,
    date: { sk: "10. augusta 2026", en: "10 August 2026" },
    iso: "2026-08-10T09:00:00+02:00",
    sk: ["Vecné bremená a ťarchy: odhaľte ich pred kúpou", "Skôr než podpíšete kúpnu zmluvu, zistite, čo všetko na nehnuteľnosti viazne. Poradíme, ako odhaliť skryté ťarchy a vyhnúť sa nepríjemným prekvapeniam."],
    en: ["Easements and Encumbrances: Spot Them Before You Buy", "Before you sign the purchase contract, find out what burdens the property. We'll show you how to uncover hidden encumbrances and avoid unpleasant surprises."],
    body: {
      sk: ["Kúpa nehnuteľnosti patrí k najväčším investíciám v živote, no cena a stav domu či pozemku nie sú všetko. K nehnuteľnosti sa často viažu tzv. vecné bremená a ťarchy, ktoré na vás ako nového vlastníka prechádzajú spolu s pozemkom alebo stavbou. Môže ísť napríklad o právo prechodu cez pozemok, doživotné právo bývania inej osoby, či záložné právo banky. Tieto skutočnosti dokážu výrazne obmedziť vaše užívanie nehnuteľnosti aj jej budúcu hodnotu.","Prvým a najdôležitejším krokom je preveriť aktuálny list vlastníctva. Práve v jeho častiach nájdete zapísané ťarchy, záložné práva, vecné bremená aj rôzne poznámky o prebiehajúcich konaniach. Odporúčame nespoliehať sa len na výpis, ktorý vám ukáže predávajúci, ale získať čerstvý výpis priamo z katastra tesne pred podpisom zmluvy. Situácia sa totiž môže medzičasom zmeniť.","Pozor si dajte najmä na vecné bremená, ktoré nemusia byť vždy zjavné na prvý pohľad. Niektoré práva, napríklad právo cesty alebo vedenia inžinierskych sietí cez pozemok, môžu vyplývať aj z okolností mimo listu vlastníctva. Preto je vhodné obhliadnuť nehnuteľnosť aj fyzicky, všímať si prístupové cesty, stĺpy, potrubia či susedské využívanie a prípadne sa pýtať priamo na obci alebo u susedov.","Osobitnú kategóriu tvoria záložné práva a exekučné poznámky. Ak je na nehnuteľnosti zapísaná záloha v prospech banky alebo prebieha exekúcia, kúpa bez správneho ošetrenia v zmluve môže znamenať, že prevezmete cudzí dlh alebo že prevod vôbec neprebehne. V takýchto prípadoch je nevyhnutné presne nastaviť postup výplaty kúpnej ceny a výmaz tiarch, ideálne cez notársku alebo advokátsku úschovu.","Odhalené ťarchy nemusia automaticky znamenať, že od kúpy treba upustiť. Mnohé z nich sa dajú vyriešiť, napríklad dohodou o výmaze, súhlasom oprávnenej osoby alebo úpravou kúpnej ceny. Kľúčové je poznať ich skôr, než sa zaviažete, a mať v zmluve jasne ošetrené, kto a dokedy sa o výmaz postará. Práve tu sa najviac oplatí dôsledná právna kontrola.","Ak zvažujete kúpu nehnuteľnosti a chcete mať istotu, že vás neprekvapia skryté ťarchy, radi vám pomôžeme. V našej kancelárii preveríme list vlastníctva, upozorníme na riziká a navrhneme bezpečné znenie zmluvy — za vopred dohodnutú pevnú cenu a s odpoveďou na vašu otázku do 24 hodín. Neváhajte nás kontaktovať ešte pred podpisom."],
      en: ["Buying a property is one of the biggest investments in life, yet the price and condition of a house or land are not everything. Properties often carry so-called easements and encumbrances, which pass on to you as the new owner together with the land or building. These may include, for example, a right of way across the land, a lifelong right of residence for another person, or a bank's lien. Such facts can significantly limit your use of the property as well as its future value.","The first and most important step is to check the current title deed. It is precisely in its sections that you will find registered encumbrances, liens, easements, and various notes about ongoing proceedings. We recommend not relying solely on the extract shown to you by the seller, but obtaining a fresh extract directly from the land registry just before signing the contract. The situation may have changed in the meantime.","Pay particular attention to easements, which may not always be obvious at first glance. Some rights, such as a right of way or the routing of utility lines across the land, may also arise from circumstances outside the title deed. It is therefore advisable to inspect the property physically, to notice access roads, poles, pipes, or neighbours' use, and possibly to ask directly at the municipality or with the neighbours.","Liens and enforcement notes form a special category. If a lien in favour of a bank is registered on the property or if enforcement proceedings are underway, buying without proper treatment in the contract may mean that you take over someone else's debt or that the transfer does not happen at all. In such cases it is essential to set up precisely the procedure for paying the purchase price and removing the encumbrances, ideally through a notarial or attorney escrow.","Discovered encumbrances do not automatically mean you should abandon the purchase. Many of them can be resolved, for example by an agreement on removal, the consent of the entitled person, or an adjustment of the purchase price. The key is to know about them before you commit and to have it clearly stipulated in the contract who will take care of the removal and by when. This is where thorough legal review pays off the most.","If you are considering buying a property and want to be sure that no hidden encumbrances surprise you, we are happy to help. Our office will review the title deed, point out the risks, and propose a safe wording of the contract — for a pre-agreed fixed price and with an answer to your question within 24 hours. Do not hesitate to contact us before signing."],
    },
  },
  {
    id: "najomna-zmluva-na-byt-7-klucovych-klauzul",
    cat: { sk: "Nehnuteľnosti", en: "Real Estate" },
    tone: "brand",
    read: 4,
    date: { sk: "3. augusta 2026", en: "3 August 2026" },
    iso: "2026-08-03T09:00:00+02:00",
    sk: ["Nájomná zmluva na byt: 7 kľúčových klauzúl", "Dobrá nájomná zmluva chráni prenajímateľa aj nájomcu. Pozrite si 7 klauzúl, ktoré predchádzajú sporom a nedorozumeniam."],
    en: ["Apartment Lease: 7 Key Protective Clauses", "A good lease protects both landlord and tenant. See 7 clauses that prevent disputes and misunderstandings."],
    body: {
      sk: ["Nájomná zmluva na byt je základom pokojného vzťahu medzi prenajímateľom a nájomcom. Väčšina sporov vzniká práve preto, že zmluva je príliš stručná alebo neurčitá. Dobre napísaná zmluva pritom chráni obe strany a šetrí čas aj peniaze. Nižšie prinášame prehľad siedmich klauzúl, na ktoré by ste nemali zabudnúť.","Prvou dôležitou oblasťou je presné určenie zmluvných strán a predmetu nájmu. V zmluve by mal byť jasne popísaný byt, jeho výmera, príslušenstvo a stav pri odovzdaní. Odporúčame vyhotoviť odovzdávací protokol s fotografiami a stavom meračov, aby sa predišlo sporom pri skončení nájmu.","Druhou a treťou klauzulou je výška nájomného a záloh za energie a služby, spolu so spôsobom a termínom ich úhrady. Jasne stanovte, čo je v nájomnom zahrnuté a čo sa platí zvlášť, ako sa vyúčtujú zálohy a za akých podmienok sa môže nájomné meniť. Presnosť tu predchádza nedorozumeniam každý mesiac.","Štvrtou a piatou oblasťou je doba nájmu a podmienky jeho skončenia vrátane výpovede. Uveďte, či je nájom na dobu určitú alebo neurčitú, aké sú výpovedné dôvody a lehoty a ako sa zmluva prípadne predlžuje. Rovnako dôležitá je klauzula o kaucii (depozite) – jej výška, účel a podmienky vrátenia po odovzdaní bytu.","Šiestou a siedmou klauzulou sú pravidlá užívania bytu a rozdelenie zodpovednosti za opravy a údržbu. Vhodné je dohodnúť, kto hradí drobné opravy a kto väčšie investície, či je povolený podnájem, chov zvierat alebo úpravy bytu. Nezabudnite ani na spôsob doručovania a kontaktné údaje oboch strán.","Každý byt aj vzťah je iný, preto vzorové zmluvy z internetu nemusia pokryť vašu situáciu. V kancelárii Kohút & Partners vám pripravíme alebo skontrolujeme nájomnú zmluvu za vopred dohodnutú pevnú cenu, s odpoveďou na vašu otázku do 24 hodín. Ozvite sa nám a nájomný vzťah si nastavte bezpečne od začiatku."],
      en: ["An apartment lease is the foundation of a smooth relationship between landlord and tenant. Most disputes arise precisely because the contract is too brief or vague. A well-drafted lease protects both parties and saves time and money. Below we offer an overview of seven clauses you should not forget.","The first important area is the precise identification of the parties and the subject of the lease. The contract should clearly describe the apartment, its size, fixtures and condition upon handover. We recommend preparing a handover protocol with photographs and meter readings to avoid disputes at the end of the tenancy.","The second and third clauses concern the amount of rent and advance payments for utilities and services, along with the method and deadline for payment. Clearly state what is included in the rent and what is paid separately, how advances are settled and under what conditions the rent may change. Precision here prevents monthly misunderstandings.","The fourth and fifth areas are the lease term and the conditions for its termination, including notice. State whether the lease is for a fixed or indefinite term, what the grounds and periods for notice are, and how the contract may be extended. Equally important is the deposit clause – its amount, purpose and the conditions for its return after handover of the apartment.","The sixth and seventh clauses are the rules for using the apartment and the division of responsibility for repairs and maintenance. It is advisable to agree who covers minor repairs and who pays for larger investments, whether subletting, keeping pets or modifying the apartment is allowed. Do not forget the method of delivery and the contact details of both parties.","Every apartment and relationship is different, so template contracts from the internet may not cover your situation. At Kohút & Partners we will prepare or review your lease for a pre-agreed fixed price, with an answer to your question within 24 hours. Contact us and set up your tenancy safely from the very start."],
    },
  },
  {
    id: "predzalobna-vyzva-preco-ju-nepodcenit",
    cat: { sk: "Súdne spory", en: "Litigation" },
    tone: "brand",
    read: 4,
    date: { sk: "27. júla 2026", en: "27 July 2026" },
    iso: "2026-07-27T09:00:00+02:00",
    sk: ["Predžalobná výzva: prečo ju nepodceniť", "Predžalobná výzva môže vyriešiť spor bez súdu a ušetriť peniaze aj čas. Zistite, čo má obsahovať a prečo ju netreba podceniť."],
    en: ["Pre-litigation Notice: Why It Matters", "A pre-litigation notice can resolve a dispute without court and save money and time. Learn what it should contain and why not to underestimate it."],
    body: {
      sk: ["Predžalobná výzva je posledný krok pred podaním žaloby na súd. Ide o oficiálny list, ktorým vyzvete druhú stranu, aby si splnila svoju povinnosť – najčastejšie zaplatila dlh, vrátila peniaze alebo napravila škodu. Mnoho ľudí tento krok podceňuje, pritom práve dobre napísaná výzva dokáže spor vyriešiť ešte pred súdom.","Prečo je taká dôležitá? V prvom rade dáva druhej strane jasnú a poslednú príležitosť dohodnúť sa. Zároveň dokumentuje, že ste sa snažili vec vyriešiť zmierlivo, čo môže mať vplyv aj na neskoršie rozhodovanie súdu o náhrade trov konania. V praxi sa mnohé spory vyriešia práve po doručení takejto výzvy, pretože protistrana si uvedomí vážnosť situácie.","Dobrá predžalobná výzva by mala jasne označiť, kto ju posiela a komu je určená, o akú pohľadávku alebo nárok ide a z čoho vyplýva. Ďalej by mala obsahovať presnú výšku dlžnej sumy alebo popis požadovaného plnenia, primeranú lehotu na splnenie a upozornenie, že v prípade nesplnenia budete vec riešiť súdnou cestou. Zrozumiteľnosť a vecnosť sú kľúčové – výzva nemá zastrašovať, ale jasne komunikovať.","Dôležitý je aj spôsob doručenia. Odporúča sa posielať výzvu tak, aby ste vedeli preukázať jej odoslanie a doručenie, napríklad doporučene s doručenkou. Ak by totiž spor skončil na súde, budete potrebovať dôkaz, že druhá strana o výzve skutočne vedela. Uschovajte si preto kópiu výzvy aj podacie lístky.","Časté chyby vznikajú vtedy, keď je výzva príliš všeobecná, chýbajú v nej podstatné údaje alebo je formulovaná nejasne. Takáto výzva stráca účinok a protistrana ju môže ignorovať. Preto sa oplatí venovať jej príprave pozornosť alebo ju konzultovať s odborníkom, najmä ak ide o vyššiu sumu či zložitejší prípad.","Ak zvažujete odoslanie predžalobnej výzvy alebo si nie ste istí, ako správne postupovať, radi vám pomôžeme. V kancelárii Kohút & Partners vám pripravíme výzvu za pevnú cenu a na váš dopyt odpovieme do 24 hodín. Ozvite sa nám a vyriešme váš spor rozumne – ideálne ešte pred súdom."],
      en: ["A pre-litigation notice is the final step before filing a lawsuit in court. It is an official letter in which you call on the other party to fulfil their obligation – most often to pay a debt, return money, or remedy damage. Many people underestimate this step, yet a well-written notice can resolve a dispute even before court.","Why is it so important? First of all, it gives the other party a clear and final opportunity to reach an agreement. It also documents that you tried to resolve the matter amicably, which may influence a later court decision on reimbursement of the costs of proceedings. In practice, many disputes are resolved right after such a notice is delivered, because the counterparty realises the seriousness of the situation.","A good pre-litigation notice should clearly state who is sending it and to whom it is addressed, what claim or entitlement is involved and what it arises from. It should further contain the exact amount owed or a description of the required performance, a reasonable deadline for compliance, and a warning that in case of non-compliance you will pursue the matter through the courts. Clarity and substance are key – the notice should not intimidate, but communicate clearly.","The method of delivery also matters. It is recommended to send the notice in a way that lets you prove it was sent and delivered, for example by registered mail with a delivery confirmation. If the dispute ends up in court, you will need evidence that the other party actually knew about the notice. Therefore, keep a copy of the notice as well as the postal receipts.","Common mistakes arise when the notice is too general, lacks essential details, or is worded unclearly. Such a notice loses its effect and the counterparty may ignore it. That is why it pays off to devote attention to its preparation or consult a professional, especially in cases involving a higher amount or a more complex matter.","If you are considering sending a pre-litigation notice or are unsure how to proceed correctly, we are happy to help. At Kohút & Partners we will prepare the notice for a fixed price and respond to your inquiry within 24 hours. Get in touch and let us resolve your dispute sensibly – ideally before it reaches court."],
    },
  },
  {
    id: "zalozenie-s-r-o-krok-po-kroku",
    cat: { sk: "Obchodné právo", en: "Commercial Law" },
    tone: "brand",
    read: 4,
    date: { sk: "20. júla 2026", en: "20 July 2026" },
    iso: "2026-07-20T09:00:00+02:00",
    sk: ["Založenie s.r.o. krok po kroku", "Praktický návod, ako založiť s.r.o. bez zbytočných chýb. Prezradíme, čo podnikatelia pri zakladaní firmy najčastejšie podcenia."],
    en: ["Setting up an s.r.o. step by step", "A practical guide on how to set up an s.r.o. without unnecessary mistakes. We reveal what entrepreneurs most often underestimate."],
    body: {
      sk: ["Založenie spoločnosti s ručením obmedzeným je jedným z najčastejších krokov začínajúcich podnikateľov. Napriek tomu, že celý proces dnes pôsobí administratívne jednoducho, práve v detailoch sa skrývajú chyby, ktoré vás môžu neskôr stáť čas aj peniaze. Poďme si prejsť základné kroky a upozorniť na to, čo sa oplatí premyslieť vopred.","Prvým krokom je príprava zakladateľských dokumentov. Ak zakladá firmu jeden spoločník, hovoríme o zakladateľskej listine, pri viacerých spoločníkoch o spoločenskej zmluve. Dôležité je jasne určiť predmety podnikania, výšku základného imania, podiely spoločníkov a spôsob konania za spoločnosť. Práve nejasné vymedzenie vzťahov medzi spoločníkmi býva neskôr zdrojom vážnych sporov.","Ďalej je potrebné vybaviť živnostenské alebo iné oprávnenia podľa toho, čomu sa chcete venovať. Podnikatelia často podcenia výber správnych predmetov podnikania a zvolia buď príliš málo, alebo naopak činnosti, ktoré reálne nevykonávajú. Rovnako sa oplatí venovať pozornosť ustanoveniu konateľa a jeho oprávneniam, keďže konateľ za spoločnosť právne vystupuje navonok.","Po podaní návrhu na zápis do obchodného registra a jeho úspešnom zápise firma oficiálne vzniká. Tu sa však proces nekončí. Zabúda sa na registráciu na daňovom úrade, správne nastavenie sídla, ochranu obchodného mena či na povinnosti spojené s vedením účtovníctva. Mnohí podnikatelia tiež podcenia riadne uzatvorenie zmlúv so zamestnancami, dodávateľmi alebo obchodnými partnermi.","Najčastejším omylom je snaha ušetriť na začiatku za každú cenu. Chybne nastavené dokumenty, nejasné podiely alebo nesprávne zvolený predmet podnikania sa dajú síce dodatočne opraviť, no takmer vždy to znamená ďalšie náklady a zdržanie. Investícia do správneho nastavenia firmy hneď na začiatku sa dlhodobo vyplatí.","Ak zvažujete založenie s.r.o. a chcete mať istotu, že je všetko nastavené správne a bez zbytočných rizík, radi vám pomôžeme. V kancelárii Kohút & Partners vo Zvolene vám ponúkame konzultáciu za vopred dohodnutú pevnú cenu a na vašu otázku odpovieme do 24 hodín. Ozvite sa nám a založte firmu s pokojom, že máte za sebou skúsených právnikov."],
      en: ["Setting up a limited liability company is one of the most common steps for aspiring entrepreneurs. Even though the whole process seems administratively simple today, it is precisely in the details that mistakes hide, which can later cost you time and money. Let us go through the basic steps and point out what is worth thinking through in advance.","The first step is preparing the founding documents. If one partner establishes the company, we speak of a founding deed, and with several partners of a partnership agreement. It is important to clearly define the business activities, the amount of registered capital, the partners' shares and the way of acting on behalf of the company. It is precisely the unclear definition of relationships between partners that later becomes a source of serious disputes.","Next, it is necessary to arrange trade or other authorisations depending on what you want to do. Entrepreneurs often underestimate the choice of the right business activities and either select too few, or on the contrary activities they do not actually carry out. It is also worth paying attention to the appointment of the managing director and their powers, since the managing director legally represents the company externally.","After filing the application for entry into the commercial register and its successful registration, the company officially comes into existence. However, the process does not end there. People forget about registration with the tax office, the correct setting of the registered seat, protection of the business name, or the obligations connected with keeping accounts. Many entrepreneurs also underestimate the proper conclusion of contracts with employees, suppliers or business partners.","The most common mistake is the effort to save money at the start at any cost. Incorrectly set documents, unclear shares or a wrongly chosen business activity can indeed be corrected later, but this almost always means additional costs and delays. Investing in the correct setup of the company right at the beginning pays off in the long run.","If you are considering setting up an s.r.o. and want to be sure that everything is set up correctly and without unnecessary risks, we will be happy to help you. At Kohút & Partners in Zvolen we offer a consultation for a pre-agreed fixed price and we will answer your question within 24 hours. Get in touch with us and set up your company with the peace of mind that experienced lawyers are behind you."],
    },
  },
  {
    id: "zodpovednost-konatela-s-r-o-kedy-rucite-majetkom",
    cat: { sk: "Obchodné právo", en: "Commercial Law" },
    tone: "brand",
    read: 4,
    date: { sk: "13. júla 2026", en: "13 July 2026" },
    iso: "2026-07-13T09:00:00+02:00",
    sk: ["Zodpovednosť konateľa s.r.o.: kedy ručíte majetkom", "Konateľ s.r.o. nie je automaticky krytý „ručením obmedzeným“. Zistite, kedy môžete zodpovedať aj vlastným majetkom a ako sa chrániť."],
    en: ["Director Liability in an LLC: When Personal Assets Are at Risk", "An LLC director is not automatically shielded by \"limited liability\". Learn when you may be liable with your own assets and how to protect yourself."],
    body: {
      sk: ["Mnohí podnikatelia žijú v presvedčení, že spoločnosť s ručením obmedzeným ich úplne chráni pred osobnou zodpovednosťou. V skutočnosti sa „obmedzené ručenie“ týka najmä spoločníkov a ich vkladu. Konateľ, ktorý spoločnosť riadi, má však samostatné povinnosti a za ich porušenie môže zodpovedať aj svojím súkromným majetkom.","Základom postavenia konateľa je povinnosť konať s odbornou starostlivosťou a v záujme spoločnosti. To v praxi znamená rozhodovať sa informovane, chrániť majetok firmy, viesť riadne účtovníctvo a neuprednostňovať vlastný prospech pred záujmom spoločnosti. Ak konateľ tieto povinnosti poruší a spoločnosti tým vznikne škoda, môže byť povinný ju nahradiť.","Zvýšené riziko osobnej zodpovednosti vzniká najmä v situáciách, keď sa firma dostane do finančných problémov. Ak konateľ včas nereaguje na hroziaci úpadok, uprednostní niektorých veriteľov pred inými alebo pokračuje v podnikaní na úkor veriteľov, môže zodpovedať za vzniknuté škody. Podobne rizikové je zanedbanie daňových a odvodových povinností či nesplnenie zákonných oznamovacích povinností.","Dôležité je vedieť, že zodpovednosť konateľa nezaniká automaticky ukončením funkcie. Za rozhodnutia prijaté počas výkonu funkcie môže niesť zodpovednosť aj po odstúpení či odvolaní. Preto sa oplatí uchovávať dokumentáciu k dôležitým rozhodnutiam a vedieť preukázať, že ste konali zodpovedne a s dostatkom informácií.","Riziku sa dá výrazne predísť prevenciou. Odporúčame priebežne sledovať finančné zdravie spoločnosti, viesť poriadne účtovníctvo, dokumentovať kľúčové rozhodnutia a pri prvých náznakoch problémov konzultovať situáciu s odborníkom. Jasne nastavené interné pravidlá a včasné riešenie sporov znižujú pravdepodobnosť, že sa dostanete do osobnej zodpovednosti.","Ak si nie ste istí, či vaše kroky ako konateľa zodpovedajú zákonu, alebo riešite konkrétnu rizikovú situáciu, radi vám pomôžeme. V kancelárii kohút & partners vo Zvolene posúdime váš prípad za pevne dohodnutú cenu a ozveme sa vám do 24 hodín. Neváhajte nás kontaktovať a získajte istotu skôr, než vznikne problém."],
      en: ["Many entrepreneurs believe that a limited liability company fully protects them from personal liability. In reality, \"limited liability\" applies mainly to shareholders and their contributions. However, a director who manages the company has separate duties, and breaching them can result in liability extending to their private assets.","The foundation of a director's position is the duty to act with professional care and in the company's interest. In practice this means making informed decisions, protecting company assets, keeping proper accounting, and not putting personal gain ahead of the company's interest. If a director breaches these duties and causes the company harm, they may be required to compensate for it.","Increased risk of personal liability arises mainly when the company faces financial difficulties. If a director fails to respond in time to an imminent insolvency, favours some creditors over others, or continues doing business at the expense of creditors, they may be liable for the resulting damage. Neglecting tax and levy obligations or failing to meet statutory reporting duties is equally risky.","It is important to know that a director's liability does not automatically cease when the role ends. You may bear responsibility for decisions made during your term even after resigning or being removed. That is why it pays to keep documentation of important decisions and be able to prove that you acted responsibly and with sufficient information.","Risk can be significantly reduced through prevention. We recommend continuously monitoring the company's financial health, keeping proper accounting, documenting key decisions, and consulting a professional at the first signs of trouble. Clearly defined internal rules and timely dispute resolution reduce the likelihood of ending up personally liable.","If you are unsure whether your actions as a director comply with the law, or you are dealing with a specific risky situation, we are happy to help. At kohút & partners in Zvolen, we will assess your case for a fixed agreed price and get back to you within 24 hours. Do not hesitate to contact us and gain certainty before a problem arises."],
    },
  },
  {
    id: "buying-property-slovakia",
    cat: { sk: "Nehnuteľnosti", en: "Real estate" },
    tone: "accent",
    read: 6,
    date: { sk: "8. júl 2026", en: "8 July 2026" },
    iso: "2026-07-08T09:00:00+02:00",
    sk: [
      "Kúpa nehnuteľnosti na Slovensku zahraničným kupujúcim: ako to prebieha",
      "Môže cudzinec kúpiť byt či dom na Slovensku? Väčšinou áno — dôležité je ustrážiť kataster, úschovu a zopár špecifík.",
    ],
    en: [
      "Buying property in Slovakia as a foreigner: a step-by-step guide",
      "Can a foreign national buy a flat or house in Slovakia? In most cases yes — the key is the land registry, escrow, and a few local specifics.",
    ],
    body: {
      sk: [
        "Zahraniční kupujúci — či už občania EÚ, alebo väčšina osôb z tretích krajín — môžu na Slovensku nadobúdať byty, domy aj pozemky; obmedzenia sa týkajú len výnimiek, ako je časť poľnohospodárskej a lesnej pôdy. Kúpa sa vždy spravuje slovenským právom a vlastníctvo vzniká až vkladom do slovenského katastra nehnuteľností.",
        "Prvým krokom je previerka právneho stavu: list vlastníctva, ťarchy (záložné práva, vecné bremená), prístup k pozemku a súlad skutočného stavu so zápisom. Pri bytoch pribúda kontrola správcu a nedoplatkov. Zahraničný klient toto všetko nemusí riešiť osobne — previerku aj celý prevod vieme vykonať na základe plnomocenstva.",
        "Najdôležitejšia poistka je úschova kúpnej ceny: peniaze idú do notárskej alebo advokátskej úschovy a predávajúcemu sa uvoľnia až po zápise vlastníctva v prospech kupujúceho. Zmluva autorizovaná advokátom navyše zrýchľuje katastrálne konanie a nahrádza osvedčovanie podpisov — praktické najmä pri podpisoch v zahraničí.",
        "Ak kupujete zo zahraničia, celý proces zvládneme na diaľku: video konzultácia, plnomocenstvo (s apostilom, ak je potrebný), príprava zmlúv v slovenčine s anglickým pracovným prekladom, úschova a vklad do katastra. Ozvite sa nám ešte pred podpisom rezervačnej zmluvy — práve tam vzniká najviac chýb.",
      ],
      en: [
        "Foreign buyers — EU citizens as well as most third-country nationals and companies — can acquire flats, houses and land in Slovakia; restrictions apply only to exceptions such as certain agricultural and forest land. The purchase is always governed by Slovak law, and ownership passes only upon registration in the Slovak land registry (kataster).",
        "Step one is legal due diligence: the title deed, encumbrances (mortgages, easements), access to the land, and whether reality matches the registry. For flats, add a check of the building administrator and any arrears. As a foreign client you don’t have to handle any of this in person — we can run the checks and the entire transfer under a power of attorney.",
        "The single most important safeguard is escrow: the purchase price goes into a notarial or attorney escrow and is released to the seller only after ownership is registered in your name. A contract authorized by a Slovak attorney also speeds up the registry proceedings and replaces signature certification — particularly practical when you sign abroad.",
        "If you are buying from abroad, the whole process works remotely: a video consultation, a power of attorney (with an apostille where needed), contracts in Slovak with an English working translation, escrow and the land-registry filing. Talk to us before you sign a reservation agreement — that is where most costly mistakes happen.",
      ],
    },
  },
  {
    id: "company-formation-slovakia",
    cat: { sk: "Obchodné právo", en: "Corporate law" },
    tone: "brand",
    read: 5,
    date: { sk: "1. júl 2026", en: "1 July 2026" },
    iso: "2026-07-01T09:00:00+02:00",
    sk: [
      "Založenie s.r.o. na Slovensku pre zahraničného zakladateľa",
      "Ako si cudzinec založí slovenskú s.r.o. bez cesty na Slovensko — a na čo si dať pozor pri konateľoch z tretích krajín.",
    ],
    en: [
      "Starting a business in Slovakia: company formation for foreigners",
      "How a foreigner sets up a Slovak s.r.o. without travelling to Slovakia — and what to watch with non-EU directors.",
    ],
    body: {
      sk: [
        "Slovenská s.r.o. je najčastejšia forma podnikania aj pre zahraničných zakladateľov: základné imanie od 5 000 EUR (nemusí sa skladať na účet v banke), jeden alebo viac spoločníkov — fyzické osoby aj zahraničné firmy. Spoločnosť vzniká zápisom do slovenského obchodného registra.",
        "Celý proces vieme zvládnuť na diaľku: pripravíme zakladateľské dokumenty, zahraničný zakladateľ ich podpíše doma (s úradným osvedčením, prípadne apostilom) a na základe plnomocenstva vybavíme živnostenské oprávnenia aj zápis do obchodného registra. Bežný časový rámec sú približne dva až tri týždne od doručenia podpísaných dokumentov.",
        "Pozor na konateľov: konateľom slovenskej s.r.o. môže byť bez ďalších podmienok občan EÚ alebo štátu OECD. Pri konateľovi z inej krajiny sa vyžaduje slovenský pobyt — to je najčastejší zádrhel, ktorý treba vyriešiť ešte pred podaním. Zahraničná materská firma ako spoločník problém nie je.",
        "Po vzniku spoločnosti netreba zabudnúť na nadväzujúce povinnosti podľa slovenského práva: registráciu na daňovom úrade, zápis konečných užívateľov výhod, prípadne registráciu k DPH. Nastavíme všetko od začiatku správne — vrátane zmlúv o výkone funkcie a vzťahov medzi spoločníkmi.",
      ],
      en: [
        "The Slovak s.r.o. (limited liability company) is the most common vehicle for foreign founders: registered capital from EUR 5,000 (no bank deposit required), one or more shareholders — individuals or foreign companies. The company comes into existence upon registration in the Slovak Commercial Register.",
        "The whole process works remotely: we prepare the incorporation documents, you sign them at home (certified, with an apostille where required), and under a power of attorney we arrange the trade licences and the Commercial Register filing. The usual timeframe is roughly two to three weeks from receiving the signed documents.",
        "Watch the director requirement: a Slovak s.r.o. director can be an EU or OECD national without further conditions. A director from any other country needs Slovak residence — the most common snag, best resolved before filing. A foreign parent company as the shareholder is not a problem.",
        "After incorporation, Slovak law brings follow-up duties: tax-office registration, registering beneficial owners, VAT registration where applicable. We set everything up correctly from day one — including director service agreements and shareholder arrangements.",
      ],
    },
  },
  {
    id: "debt-recovery-slovakia",
    cat: { sk: "Súdne spory", en: "Litigation" },
    tone: "brand",
    read: 5,
    date: { sk: "24. jún 2026", en: "24 June 2026" },
    iso: "2026-06-24T09:00:00+02:00",
    sk: [
      "Slovenský odberateľ nezaplatil: ako vymáha pohľadávku zahraničný veriteľ",
      "Od predžalobnej výzvy cez upomínacie konanie po exekúciu — ako na Slovensku efektívne vymôcť faktúru zo zahraničia.",
    ],
    en: [
      "Recovering a debt from a Slovak company: what foreign creditors should know",
      "From a pre-action demand through the Slovak payment-order procedure to enforcement — how to collect an unpaid invoice from abroad.",
    ],
    body: {
      sk: [
        "Ak vám slovenský obchodný partner nezaplatil faktúru, čas hrá proti vám — obchodné pohľadávky sa premlčujú spravidla za štyri roky a schopnosť dlžníka platiť sa časom zhoršuje. Vymáhanie prebieha podľa slovenského práva pred slovenskými súdmi, no zahraničný veriteľ pri ňom nemusí byť osobne prítomný.",
        "Prvým krokom je kvalifikovaná predžalobná výzva od slovenskej advokátskej kancelárie — často zaberie sama osebe, pretože dlžníkovi signalizuje, že náklady konania pôjdu na jeho účet. Ak nezaberie, nasleduje návrh na vydanie platobného rozkazu v tzv. upomínacom konaní: elektronický, rýchly a s polovičným súdnym poplatkom.",
        "Pri nespochybnenej faktúre vydá súd platobný rozkaz spravidla do desiatich pracovných dní; ak dlžník nepodá odpor, máte exekučný titul a pohľadávku vymáha súdny exekútor. Ak dlžník medzičasom skončil v konkurze, treba pohľadávku prihlásiť u správcu v zákonnej lehote — jej zmeškanie sa odpúšťa len výnimočne.",
        "Zo zahraničia vám stačí poslať podklady (zmluvu či objednávku, faktúru, dodacie doklady) a podpísať plnomocenstvo. Postup, náklady aj reálnu vymožiteľnosť vám povieme vopred — vrátane preverenia majetkových pomerov dlžníka v slovenských registroch.",
      ],
      en: [
        "If your Slovak business partner hasn’t paid an invoice, time works against you — commercial claims in Slovakia are generally time-barred after four years, and a debtor’s ability to pay tends to deteriorate. Recovery proceeds under Slovak law before Slovak courts, but as a foreign creditor you don’t need to attend in person.",
        "Step one is a formal pre-action demand from a Slovak law firm — it often works by itself, because it signals to the debtor that the costs of proceedings will land on their side. If it doesn’t, we file for a Slovak payment order in the electronic “reminder procedure”: fast, fully online, with a court fee reduced by half.",
        "For an undisputed invoice the court typically issues the payment order within ten working days; if the debtor files no objection, you hold an enforceable title and a court-appointed enforcement officer collects the debt. If the debtor has meanwhile entered Slovak insolvency, the claim must be filed with the trustee within the statutory deadline — missing it is forgiven only exceptionally.",
        "From abroad, all we need are the documents (contract or order, invoice, delivery records) and a signed power of attorney. We tell you the strategy, the costs and a realistic recovery assessment up front — including a check of the debtor’s assets in Slovak registers.",
      ],
    },
  },
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
    read: 6,
    date: { sk: "23. august 2026", en: "23 August 2026" },
    iso: "2026-08-23T09:00:00+02:00",
    sk: [
      "Založenie s.r.o. v roku 2026: od 17. augusta len cez notára alebo advokáta",
      "Nový zákon o obchodnom registri zmenil formu zakladateľských dokumentov. Čo to znamená v praxi, koľko stojí zápis a ako prebieha založenie krok po kroku.",
    ],
    en: [
      "Forming an s.r.o. in 2026: since 17 August only through a notary or an attorney",
      "Slovakia’s new Commercial Register Act changed the required form of founding documents. What it means in practice, what registration costs and how formation works step by step.",
    ],
    body: {
      sk: [
        "Od 17. augusta 2026 je účinný nový zákon č. 29/2026 Z. z. o obchodnom registri. Pre každého, kto zakladá spoločnosť s ručením obmedzeným, má jednu zmenu, ktorá sa nedá obísť: spoločenská zmluva aj zakladateľská listina musia byť vyhotovené vo forme notárskej zápisnice alebo vo forme dokumentu autorizovaného advokátom (§ 57 ods. 1 a 3 Obchodného zákonníka v znení čl. II tohto zákona). Dokument spísaný doma a podpísaný s úradne osvedčenými podpismi, ktorý stačil celé roky, už registrový súd neprijme. Konania, v ktorých bol návrh podaný do 16. augusta 2026, sa dokončia podľa starých predpisov (§ 126 ods. 1).",
        "Tá istá forma platí aj pre ďalšie úkony počas života firmy. Zmluva o prevode obchodného podielu musí byť notárska zápisnica alebo zmluva autorizovaná advokátom (§ 115 ods. 4), rovnako rozhodnutie jediného spoločníka o zmene pomeru hlasov, pomeru podielov alebo o konateľovi (§ 132 ods. 1). Pri spoločnosti s viacerými spoločníkmi musí byť priebeh valného zhromaždenia v týchto veciach osvedčený notárskou zápisnicou (§ 127a ods. 4) — tam advokát alternatívou nie je. Zostáva aj tretia cesta: založenie zjednodušeným spôsobom cez elektronický formulár ministerstva (§ 110a). Má však pevné hranice — najviac päť spoločníkov, výlučne peňažné vklady, iba vybrané voľné živnosti a najviac pätnásť z nich, bez dozornej rady. Kto potrebuje remeselnú alebo viazanú živnosť, nepeňažný vklad alebo vlastné pravidlá medzi spoločníkmi, formulár nepoužije.",
        "Čo znamená, že dokument autorizuje advokát? Podľa § 1a ods. 2 zákona č. 586/2003 Z. z. o advokácii advokát dokument spíše, zistí totožnosť účastníka úkonu a jeho zástupcu a posúdi, či úkon neodporuje zákonu, neobchádza ho, neprieči sa dobrým mravom a či ním nevznikne škoda. Výsledok potvrdí doložkou o autorizácii s počtom listov, miestom, dátumom, podpisom a pečiatkou (§ 1ab) a v ten istý deň uloží dokument do registra autorizácií Slovenskej advokátskej komory (§ 1ac). Praktický dôsledok pre zakladateľa upravuje § 50 ods. 4 zákona o obchodnom registri: ak je dokument autorizovaný advokátom, úradné osvedčenie podpisov sa nevyžaduje. Netýka sa to len spoločenskej zmluvy, ale aj podpisového vzoru konateľa, ktorý by inak musel byť podpísaný pred notárom alebo na obci (§ 34 písm. g).",
        "Samotný postup sa v jadre nezmenil. Zvolíte obchodné meno — registrový súd pred zápisom preverí, či nie je totožné s už zapísaným alebo rezervovaným menom (§ 51 ods. 1 a 2); ak chcete mať istotu, meno sa dá vopred rezervovať za 50 eur. Určíte predmety podnikania a ohlásite živnosti. Spoločenská zmluva musí obsahovať náležitosti podľa § 110 Obchodného zákonníka: spoločníkov, výšku základného imania a vkladov, prvých konateľov a spôsob ich konania, správcu vkladov a predpokladané náklady založenia. Základné imanie je najmenej 5 000 eur, vklad každého spoločníka najmenej 750 eur (§ 108 a § 109). Po podpise a autorizácii sa podá elektronický návrh na zápis; súdny poplatok za prvozápis s.r.o. je 220 eur (položka 17 sadzobníka súdnych poplatkov v znení účinnom od 17. augusta 2026). Ak sú podmienky splnené, registrový súd vykoná zápis do dvoch pracovných dní od doručenia návrhu (§ 58 ods. 1).",
        "Súd pri prvozápise skúma viac než formu. Podľa § 51 ods. 3 preverí v registri diskvalifikácií, či konateľovi nebráni v zápise rozhodnutie o vylúčení, a v registri poverení na vykonanie exekúcie, či konateľ nie je vedený ako povinný. Zakladateľ vedený v exekúcii je dôvodom na odmietnutie návrhu. Pri konateľovi z krajiny mimo EÚ a OECD sa preveruje povolenie na pobyt (§ 51 ods. 4). Tieto prekážky sa oplatí vylúčiť ešte pred podpisom dokumentov, nie až po zamietnutí návrhu — poplatok sa nevracia a čas beží odznova.",
        "Čo sa oplatí premyslieť vopred, lebo sa to neskôr mení ťažko: vzťahy medzi spoločníkmi, kto a ako koná za spoločnosť, či sa podiel dá previesť na tretiu osobu bez súhlasu ostatných a čo sa stane, keď jeden spoločník zomrie alebo chce odísť. Po novele každá takáto neskoršia zmena znamená ďalší autorizovaný dokument alebo notársku zápisnicu a ďalší poplatok 50 eur za zápis zmeny. Nastaviť to správne hneď pri založení je lacnejšie.",
        "Založenie s.r.o. robíme na kľúč: pripravíme spoločenskú zmluvu alebo zakladateľskú listinu, autorizujeme ju ako advokáti, ohlásime živnosti, podáme návrh na zápis a po vzniku firmy vybavíme registráciu na daňovom úrade. Odmena je 299 eur s DPH; súdny poplatok 220 eur sa platí samostatne v skutočnej výške. Celý proces trvá spravidla sedem až desať pracovných dní. Ak zakladáte firmu zo zahraničia alebo potrebujete pre konateľa vybaviť pobyt, máme pre vás samostatnú stránku o založení firmy pre zahraničných zakladateľov.",
      ],
      en: [
        "Since 17 August 2026, Slovakia’s new Commercial Register Act (Act No. 29/2026 Coll.) has been in force. For anyone forming a limited liability company (s.r.o.) it brings one change that cannot be worked around: the memorandum of association and the founder’s deed must be drawn up either as a notarial deed or as a document authorised by an attorney (Section 57(1) and (3) of the Commercial Code as amended by Article II of the Act). A document drafted at home and signed with officially certified signatures — sufficient for years — is no longer accepted by the registry court. Proceedings in which the application was filed by 16 August 2026 are completed under the old rules (Section 126(1)).",
        "The same form applies to other acts during the company’s life. A share transfer agreement must be a notarial deed or an agreement authorised by an attorney (Section 115(4)), and so must a sole shareholder’s decision on changing voting ratios, share ratios or the managing director (Section 132(1)). In a company with several shareholders, the general meeting on those matters must be certified by a notarial deed (Section 127a(4)) — there an attorney is not an alternative. A third route remains: simplified formation through the ministry’s electronic form (Section 110a). It has firm limits — at most five shareholders, cash contributions only, selected unregulated trades only and no more than fifteen of them, no supervisory board. Anyone who needs a craft or regulated trade, an in-kind contribution or bespoke rules between shareholders cannot use the form.",
        "What does attorney authorisation mean? Under Section 1a(2) of Act No. 586/2003 Coll. on the Legal Profession, the attorney draws up the document, verifies the identity of the party and of any representative, and assesses whether the act contravenes or circumvents the law, conflicts with good morals or would cause damage. The attorney confirms this in an authorisation clause stating the number of pages, place, date, signature and stamp (Section 1ab) and, on the same day, deposits the document in the Slovak Bar Association’s register of authorisations (Section 1ac). The practical consequence for founders is in Section 50(4) of the Commercial Register Act: where a document is authorised by an attorney, no official certification of signatures is required. That covers not only the memorandum but also the managing director’s specimen signature, which would otherwise have to be signed before a notary or at a municipal office (Section 34(g)).",
        "The procedure itself is essentially unchanged. You choose a business name — before registration the court checks that it is not identical to a registered or reserved name (Section 51(1) and (2)); for certainty, a name can be reserved in advance for EUR 50. You define the business activities and notify the trades. The memorandum must contain the particulars required by Section 110 of the Commercial Code: the shareholders, the registered capital and contributions, the first managing directors and how they act, the contribution administrator and the expected formation costs. Registered capital is at least EUR 5,000 and each shareholder’s contribution at least EUR 750 (Sections 108 and 109). After signing and authorisation, an electronic application is filed; the court fee for the first registration of an s.r.o. is EUR 220 (item 17 of the court-fee tariff as in force from 17 August 2026). If the conditions are met, the registry court registers the company within two working days of receiving the application (Section 58(1)).",
        "The court examines more than form. Under Section 51(3) it checks the disqualification register for a ruling barring the managing director and the register of enforcement authorisations for whether the director is listed as a debtor. A founder under enforcement is grounds for rejecting the application. For a director from outside the EU and the OECD, a residence permit is checked (Section 51(4)). These obstacles are best ruled out before the documents are signed, not after the application is rejected — the fee is not refunded and the clock starts again.",
        "What is worth thinking through in advance, because it is hard to change later: the relationships between shareholders, who acts for the company and how, whether a share can be transferred to a third party without the others’ consent, and what happens when a shareholder dies or wants to leave. After the amendment, every later change of this kind means another authorised document or notarial deed and a further EUR 50 fee for registering the change. Getting it right at formation is cheaper.",
        "We form your s.r.o. turn-key: we prepare the memorandum or founder’s deed, authorise it as attorneys, notify the trades, file the registration application and, once the company exists, handle tax registration. Our fee is EUR 299 including VAT; the EUR 220 court fee is paid separately at its actual amount. The whole process usually takes seven to ten working days. If you are forming the company from abroad or need a residence permit for the director, see our dedicated page on company formation for foreign founders.",
      ],
    },
  },
];

/** Slug článku pre daný jazyk. Slovenčina vždy `id`, angličtina podľa mapy v lib/article-slugs.ts. */
function articleSlug(a: RawArticle, locale: Locale): string {
  return locale === "en" ? enArticleSlug(a.id) : a.id;
}

/* Vyhľadanie článku podľa slugu v danom jazyku. Zámerne prísne — v angličtine
   matchujeme LEN anglický slug, aby stará adresa /en/blog/{slovenský-slug}
   neostala živá ako duplicitný obsah. Tá dostane 301 (viď next.config.ts). */
function findArticle(locale: Locale, slug: string): RawArticle | undefined {
  return BLOG.find((a) => articleSlug(a, locale) === slug);
}

function localizeArticle(a: RawArticle, locale: Locale): Article {
  return {
    // `id` je slug v aktuálnom jazyku — odkazy v komponentoch tak vedú
    // na správnu jazykovú adresu bez ďalšieho zásahu.
    id: articleSlug(a, locale),
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

/** Slugy článkov pre daný jazyk (pre generateStaticParams). */
export function getArticleIds(locale: Locale): string[] {
  return BLOG.map((a) => articleSlug(a, locale));
}

export function getArticle(locale: Locale, id: string): Article | undefined {
  const a = findArticle(locale, id);
  return a ? localizeArticle(a, locale) : undefined;
}

/** Slovenský aj anglický slug jedného článku — pre hreflang a sitemap. */
export interface ArticleSlugs {
  sk: string;
  en: string;
}

function slugsOf(a: RawArticle): ArticleSlugs {
  return { sk: a.id, en: enArticleSlug(a.id) };
}

/** Dvojice slugov všetkých článkov (sitemap). */
export function getArticleSlugPairs(): ArticleSlugs[] {
  return BLOG.map(slugsOf);
}

/** Dvojica slugov pre článok nájdený podľa slugu v danom jazyku (hreflang). */
export function getArticleSlugs(locale: Locale, id: string): ArticleSlugs | undefined {
  const a = findArticle(locale, id);
  return a ? slugsOf(a) : undefined;
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
    sk: { city: "Zvolen", address: "Námestie SNP 74/28, 960 01 Zvolen, Slovenská republika" },
    en: { city: "Zvolen", address: "Námestie SNP 74/28, 960 01 Zvolen, Slovak Republic" },
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
  // Same destination the e-mail signatures link to.
  mapsUrl: "https://maps.google.com/?q=N%C3%A1mestie+SNP+74%2F28%2C+960+01+Zvolen",
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
