// Dvojjazyčný obsah (SK/EN) — v PL/HU/DE/RU sa tieto stránky nezobrazujú.
import type { BaseLocale as Locale } from "@/i18n/routing";

/**
 * Podrobný popis balíkov e-shopu — čo presne klient dostane, čo v cene nie je,
 * dokedy a aké podklady potrebujeme. Zobrazuje sa na karte balíka (skrátene)
 * a na stránke objednávky (celé).
 *
 * ⚖ NÁVRH NA KONTROLU ADVOKÁTOM (14. 9. 2026): rozsahy sú prevzaté z katalógu
 * (marketing/eshop-katalog.md) a z produktových stránok; tam, kde katalóg
 * rozsah nemal (revízia zmluvy, zmluva na mieru, nájomná zmluva, prihláška
 * pohľadávky, trestné oznámenie), je rozsah navrhnutý a označený ⚖ v komentári.
 * Bez schválenia nejde na produkciu.
 */
export interface PackageDetail {
  /** Čo je v cene. Prvé tri položky sa zobrazujú aj na karte. */
  includes: string[];
  /** Čo v cene nie je — pri pevnej cene jediná ochrana pred sporom o rozsah. */
  excludes: string[];
  /** Lehota dodania od zaplatenia a dodania podkladov. */
  turnaround: string;
  /** Podklady, ktoré od klienta potrebujeme. */
  documents: string[];
  /** Poplatky štátu mimo ceny (ak sú). */
  fees?: string;
}

type Detail = Record<Locale, PackageDetail>;

const DETAILS: Record<string, Detail> = {
  "ins-prihlaska": {
    sk: {
      includes: [
        "Preverenie konkurzu v Obchodnom vestníku a lehoty na prihlásenie",
        "Spísanie prihlášky pohľadávky s vyčíslením istiny a príslušenstva",
        "Doručenie prihlášky správcovi v lehote a potvrdenie o podaní",
        "Krátke stanovisko, čo môžete v konkurze očakávať",
      ],
      excludes: [
        "Zastupovanie na schôdzi veriteľov a vo veriteľskom výbore (dohodou)",
        "Incidenčný spor, ak správca pohľadávku poprie (dohodou)",
      ],
      // ⚖ § 28 ods. 2 ZKR — základná prihlasovacia lehota 45 dní od vyhlásenia konkurzu.
      turnaround: "Podanie do 3 pracovných dní od dodania podkladov; základná lehota na prihlásenie je 45 dní od vyhlásenia konkurzu.",
      documents: [
        "Zmluva alebo faktúry, z ktorých pohľadávka vznikla",
        "Doklady o doručení a o čiastočných úhradách",
        "Označenie dlžníka (obchodné meno, IČO)",
      ],
    },
    en: {
      includes: [
        "Check of the bankruptcy notice and the filing deadline",
        "Drafting the claim with principal and accessories quantified",
        "Filing with the trustee within the deadline, confirmation of filing",
        "Short note on what to expect in the proceedings",
      ],
      excludes: [
        "Representation at the creditors' meeting or committee (by agreement)",
        "Litigation if the trustee contests the claim (by agreement)",
      ],
      turnaround: "Filed within 3 business days of receiving the documents; the basic filing period is 45 days from the declaration of bankruptcy.",
      documents: ["Contract or invoices behind the claim", "Proof of delivery and of partial payments", "Debtor identification (name, ID no.)"],
    },
  },

  "ob-zivnost": {
    sk: {
      includes: [
        "Výber a správne zatriedenie predmetov podnikania (voľné, remeselné, viazané)",
        "Elektronické ohlásenie živnosti na jednotnom kontaktnom mieste",
        "Registrácia na daň z príjmov",
        "Krátke usmernenie, kedy vzniká povinnosť voči Sociálnej poisťovni",
        "Všetky voľné živnosti bez obmedzenia počtu",
      ],
      excludes: [
        // Položka 148 písm. a) bod 2 sadzobníka (zák. 145/1995): 22 € za každú remeselnú
        // alebo viazanú živnosť; § 6 ods. 2 — pri elektronickom podaní 50 %, t. j. 11 €.
        "Správne poplatky za remeselné a viazané živnosti — 22 € za každú, pri elektronickom ohlásení 11 €",
        "Zodpovedný zástupca, účtovníctvo, daňové poradenstvo",
      ],
      turnaround: "1 – 3 pracovné dni.",
      documents: ["Občiansky preukaz", "Adresa miesta podnikania", "Zoznam činností, ktoré chcete vykonávať"],
      fees: "Voľné živnosti sú pri elektronickom ohlásení bez poplatku; remeselná alebo viazaná živnosť 22 € za každú (elektronicky 11 €), platí sa v skutočnej výške.",
    },
    en: {
      includes: [
        "Selection and correct classification of the activities",
        "Electronic filing with the single point of contact",
        "Income-tax registration",
        "Short note on when social-insurance obligations arise",
        "All free trades, no limit on their number",
      ],
      excludes: ["Administrative fees for craft and regulated trades — EUR 22 each, EUR 11 when filed electronically", "Responsible representative, bookkeeping, tax advice"],
      turnaround: "1 – 3 business days.",
      documents: ["ID card", "Place-of-business address", "List of intended activities"],
      fees: "Free trades filed electronically carry no fee; craft or regulated trade EUR 22 each (EUR 11 electronically), charged at the actual amount.",
    },
  },

  "ob-sro": {
    sk: {
      includes: [
        "Konzultácia k nastaveniu spoločnosti — predmety, podiely, konanie za spoločnosť",
        "Zakladateľská listina alebo spoločenská zmluva autorizovaná advokátom (§ 57 ObchZ)",
        "Vyhlásenie správcu vkladu, podpisový vzor konateľa, čestné vyhlásenia",
        "Ohlásenie voľných živností bez obmedzenia počtu",
        "Návrh na prvozápis do obchodného registra a jeho podanie",
        "Registrácia na daň z príjmov po vzniku spoločnosti",
        "Odovzdanie: výpis z OR, živnostenské oprávnenie, dokumentácia v PDF",
      ],
      excludes: [
        "Súdny poplatok 220 € a správne poplatky za remeselné a viazané živnosti",
        "Sídlo, účtovníctvo, registrácia k DPH",
      ],
      turnaround: "Spravidla 7 – 10 pracovných dní; registrový súd zapíše spoločnosť do 2 pracovných dní od úplného návrhu.",
      documents: [
        "Občiansky preukaz alebo pas zakladateľov a konateľa",
        "Adresa sídla a súhlas vlastníka nehnuteľnosti",
        "Zoznam predmetov podnikania, výška a rozdelenie vkladov",
      ],
      fees: "Súdny poplatok za prvozápis 220 € sa platí samostatne v skutočnej výške — spolu 519 € pri voľných živnostiach.",
    },
    en: {
      includes: [
        "Consultation on the company setup — activities, shares, representation",
        "Founding deed or memorandum authorised by an attorney (s. 57 Commercial Code)",
        "Deposit administrator's declaration, director's specimen signature, affidavits",
        "Filing of free trades without limit on their number",
        "Application for first registration in the Commercial Register and its filing",
        "Income-tax registration after incorporation",
        "Hand-over: register extract, trade licence, full documentation in PDF",
      ],
      excludes: ["Court fee EUR 220 and fees for craft and regulated trades", "Registered office, bookkeeping, VAT registration"],
      turnaround: "Usually 7 – 10 business days; the register court registers the company within 2 business days of a complete application.",
      documents: ["ID or passport of founders and director", "Registered-office address and owner's consent", "List of activities, amount and split of contributions"],
      fees: "The EUR 220 court fee is paid separately at its actual amount — EUR 519 in total for free trades.",
    },
  },

  "ob-revizia": {
    sk: {
      // Stupne schválené 14. 9. 2026 (verzia 3.1): do 2 normostrán 79 €, 3 – 5 strán
      // 158 €, viac individuálne; doplnky express +100 %, redline +59 € (shop-variants.ts).
      includes: [
        "Posúdenie predloženej zmluvy v rozsahu zvoleného stupňa (do 2 alebo do 5 normostrán)",
        "Písomné zhrnutie rizík a nevýhodných ustanovení",
        "Ku každému problematickému ustanoveniu konkrétne navrhnuté znenie, ktoré môžete poslať druhej strane",
        "Telefonická konzultácia k výsledku (20 minút)",
      ],
      excludes: [
        "Kompletná upravená zmluva v režime sledovania zmien a zapracovanie odpovede druhej strany — doplnok za 59 €",
        "Príprava novej zmluvy — balík Zmluva na mieru",
        "Rokovanie s druhou stranou",
        "Zmluvy nad 5 normostrán a zmluvy v cudzom jazyku — individuálna ponuka do 1 pracovného dňa",
      ],
      turnaround: "Do 5 pracovných dní od dodania zmluvy; expresne do 48 hodín za príplatok 100 % ceny.",
      documents: ["Zmluva na posúdenie (PDF alebo Word)", "Pár viet, čo je pre vás v zmluve najdôležitejšie"],
    },
    en: {
      includes: [
        "Review of the submitted contract within the chosen tier (up to 2 or 5 standard pages)",
        "Written summary of risks and unfavourable clauses",
        "Proposed wording for every problematic clause, ready to send to the other party",
        "Phone consultation on the result (20 minutes)",
      ],
      excludes: ["Full contract with tracked changes and incorporating the other party's reply — add-on EUR 59", "Drafting a new contract — Custom contract package", "Negotiation with the other party", "Contracts over 5 standard pages or in a foreign language — individual quote within 1 business day"],
      turnaround: "Within 5 business days of receiving the contract; express within 48 hours for a 100 % surcharge.",
      documents: ["The contract (PDF or Word)", "A few words on what matters most to you in it"],
    },
  },

  "ob-zmluva": {
    sk: {
      // ⚖ Navrhovaný rozsah: bežná zmluva, jedno kolo pripomienok.
      includes: [
        "Konzultácia k obsahu zmluvy (30 minút)",
        "Návrh zmluvy na mieru vašej situácii",
        "Jedno kolo zapracovania vašich pripomienok",
        "Pokyny k podpisu a k tomu, čo si od druhej strany vyžiadať",
      ],
      excludes: [
        "Rokovanie s druhou stranou a ďalšie kolá zmien (dohodou)",
        "Autorizácia advokátom alebo notárska zápisnica, ak ju zákon vyžaduje (samostatne)",
      ],
      turnaround: "Návrh do 5 pracovných dní od konzultácie.",
      documents: ["Kto sú strany a čo má byť predmetom zmluvy", "Dohodnutá cena, termíny a ďalšie podmienky, ak už existujú"],
    },
    en: {
      includes: [
        "Consultation on the content (30 minutes)",
        "Draft contract tailored to your situation",
        "One round of your comments incorporated",
        "Signing instructions and what to request from the other party",
      ],
      excludes: ["Negotiation with the other party and further rounds (by agreement)", "Attorney authorisation or notarial deed where the law requires it (separately)"],
      turnaround: "Draft within 5 business days of the consultation.",
      documents: ["Who the parties are and what the contract covers", "Agreed price, dates and other terms, if any"],
    },
  },

  "nh-kupna": {
    sk: {
      includes: [
        "Preverenie listu vlastníctva, tiarch a vecných bremien",
        "Kúpna zmluva autorizovaná advokátom — bez úradného osvedčovania podpisov",
        "Návrh na vklad a jeho elektronické podanie (nižší správny poplatok)",
        "Sledovanie konania na katastri a oznámenie rozhodnutia",
      ],
      excludes: [
        "Správny poplatok katastra",
        "Úschova kúpnej ceny — advokátska úschova samostatne",
        "Daňové posúdenie predaja",
      ],
      turnaround: "Zmluva do 5 pracovných dní od dodania podkladov; kataster rozhoduje v zákonnej lehote.",
      documents: ["List vlastníctva alebo označenie nehnuteľnosti", "Doklady totožnosti strán", "Dohodnutá cena a spôsob platby"],
      fees: "Správny poplatok katastra sa platí samostatne v skutočnej výške.",
    },
    en: {
      includes: [
        "Title-deed check, encumbrances and easements",
        "Purchase contract authorised by an attorney — no notarised signatures needed",
        "Application for registration and its electronic filing (lower fee)",
        "Monitoring the cadastre proceedings and notifying the decision",
      ],
      excludes: ["Cadastre administrative fee", "Escrow of the purchase price — attorney escrow separately", "Tax assessment of the sale"],
      turnaround: "Contract within 5 business days of receiving the documents; the cadastre decides within the statutory period.",
      documents: ["Title deed or identification of the property", "Parties' IDs", "Agreed price and payment method"],
      fees: "The cadastre fee is paid separately at its actual amount.",
    },
  },

  "nh-najom": {
    sk: {
      // ⚖ Navrhovaný rozsah.
      includes: [
        "Nájomná zmluva na byt, dom alebo nebytový priestor na mieru",
        "Voľba režimu — krátkodobý nájom bytu alebo nájom podľa Občianskeho zákonníka — podľa vašej situácie",
        "Preberací protokol a pokyny k odovzdaniu",
      ],
      excludes: ["Rokovanie s druhou stranou", "Registrácia zmluvy alebo oznámenia úradom"],
      turnaround: "Do 3 pracovných dní.",
      documents: ["Označenie nehnuteľnosti a list vlastníctva", "Kto je prenajímateľ a nájomca", "Nájomné, kaucia, doba nájmu"],
    },
    en: {
      includes: [
        "Lease agreement for a flat, house or commercial premises, tailored",
        "Choice of legal regime according to your situation",
        "Hand-over protocol and instructions",
      ],
      excludes: ["Negotiation with the other party", "Registration or notices to authorities"],
      turnaround: "Within 3 business days.",
      documents: ["Property identification and title deed", "Landlord and tenant details", "Rent, deposit, term"],
    },
  },

  "sp-vyzva": {
    sk: {
      includes: [
        "Preverenie nároku a premlčania",
        "Výzva na zaplatenie s vyčíslením istiny, úrokov z omeškania a paušálnej náhrady nákladov",
        "Odoslanie doporučene aj e-mailom — pri Premium odosiela advokát na hlavičkovom papieri",
        "Jedno kolo komunikácie s dlžníkom",
        "Telefonická konzultácia 15 minút; pri Premium 30 minút a písomné odporúčanie ďalšieho postupu",
      ],
      excludes: [
        "Opakovaná výzva, ak dlžník nezareaguje — doplnok 49 €",
        "Návrh na platobný rozkaz (samostatný balík: 290 € pri pohľadávke do 3 000 €, 490 € nad 3 000 €)",
        "Zastupovanie v súdnom spore a exekúcia",
      ],
      turnaround: "Standard: výzva odchádza do 5 pracovných dní od zaplatenia a dodania podkladov. Premium: do 2 pracovných dní.",
      documents: ["Faktúra, zmluva alebo iný doklad o pohľadávke", "Doklad o doručení a o čiastočných úhradách", "Adresa dlžníka"],
    },
    en: {
      includes: [
        "Check of the claim and limitation",
        "Demand letter quantifying principal, default interest and the flat cost compensation",
        "Sent by registered mail and e-mail — Premium: sent by the attorney on letterhead",
        "One round of communication with the debtor",
        "Phone consultation 15 minutes; Premium 30 minutes plus a written recommendation of next steps",
      ],
      excludes: ["Repeat demand if the debtor does not respond — add-on EUR 49", "Payment-order application (separate package: EUR 290 for claims up to EUR 3,000, EUR 490 above)", "Court representation and enforcement"],
      turnaround: "Standard: sent within 5 business days of payment and receipt of documents. Premium: within 2 business days.",
      documents: ["Invoice, contract or other proof of the claim", "Proof of delivery and of partial payments", "Debtor's address"],
    },
  },

  "sp-zaloba": {
    sk: {
      includes: [
        "Preverenie nároku, dôkazov a premlčania",
        "Návrh na vydanie platobného rozkazu v upomínacom konaní",
        "Elektronické podanie na Okresný súd Banská Bystrica a sledovanie konania",
        "Odovzdanie platobného rozkazu s pokynmi, čo ďalej",
      ],
      excludes: [
        "Súdny poplatok (v upomínacom konaní polovičná sadzba)",
        "Zastupovanie v spore, ak dlžník podá odpor (dohodou)",
        "Návrh na vykonanie exekúcie (samostatne)",
      ],
      turnaround: "Podanie do 5 pracovných dní od dodania podkladov.",
      documents: ["Faktúry alebo zmluva a doklad o dodaní", "Predžalobná výzva, ak bola odoslaná", "Označenie dlžníka a výška dlhu"],
      fees: "Súdny poplatok sa platí samostatne v skutočnej výške.",
    },
    en: {
      includes: [
        "Check of the claim, evidence and limitation",
        "Application for a payment order in the fast-track procedure",
        "Electronic filing with the District Court Banská Bystrica and monitoring",
        "Hand-over of the payment order with next-step instructions",
      ],
      excludes: ["Court fee (half rate in the fast-track procedure)", "Litigation if the debtor objects (by agreement)", "Enforcement application (separately)"],
      turnaround: "Filed within 5 business days of receiving the documents.",
      documents: ["Invoices or contract and proof of delivery", "Pre-action letter, if sent", "Debtor identification and amount"],
      fees: "The court fee is paid separately at its actual amount.",
    },
  },

  "tr-oznamenie": {
    sk: {
      // ⚖ Navrhovaný rozsah.
      includes: [
        "Konzultácia a právna kvalifikácia skutku",
        "Spísanie trestného oznámenia s opisom skutku a označením dôkazov",
        "Podanie na políciu alebo prokuratúru a potvrdenie o podaní",
      ],
      excludes: [
        "Zastupovanie poškodeného v trestnom konaní a uplatnenie náhrady škody (dohodou)",
        "Obhajoba obvineného",
      ],
      turnaround: "Do 5 pracovných dní od konzultácie.",
      documents: ["Opis, čo sa stalo, kedy a kto", "Dôkazy, ktoré máte — správy, doklady, svedkovia"],
    },
    en: {
      includes: [
        "Consultation and legal qualification of the act",
        "Drafting the criminal complaint with facts and evidence",
        "Filing with the police or prosecutor and confirmation of filing",
      ],
      excludes: ["Representation of the victim and damages claim (by agreement)", "Defence of the accused"],
      turnaround: "Within 5 business days of the consultation.",
      documents: ["Description of what happened, when and who", "Evidence you have — messages, documents, witnesses"],
    },
  },

  "it-gdpr": {
    sk: {
      includes: [
        "Vstupný dotazník a konzultácia (30 minút)",
        "Záznamy o spracovateľských činnostiach",
        "Informačná povinnosť pre zákazníkov, zamestnancov a web",
        "Smernica o ochrane osobných údajov, poverenia a mlčanlivosť zamestnancov",
        "Sprostredkovateľská zmluva (vzor pre účtovníka alebo IT) a postup pri incidente",
        "Posúdenie, či potrebujete zodpovednú osobu",
      ],
      excludes: ["Posúdenie vplyvu (DPIA) a výkon funkcie zodpovednej osoby", "Technické zabezpečenie systémov"],
      turnaround: "Do 7 pracovných dní od vyplnenia dotazníka.",
      documents: ["Vyplnený vstupný dotazník (pošleme)", "Zoznam systémov a dodávateľov, ktorí s údajmi pracujú"],
    },
    en: {
      includes: [
        "Intake questionnaire and consultation (30 minutes)",
        "Records of processing activities",
        "Privacy notices for customers, employees and the website",
        "Data-protection policy, authorisations and staff confidentiality",
        "Processor agreement (template for accountant or IT) and incident procedure",
        "Assessment whether you need a data protection officer",
      ],
      excludes: ["Impact assessment (DPIA) and acting as DPO", "Technical security of systems"],
      turnaround: "Within 7 business days of the completed questionnaire.",
      documents: ["Completed intake questionnaire (we send it)", "List of systems and vendors handling the data"],
    },
  },

  "it-eshop": {
    sk: {
      includes: [
        "Obchodné podmienky vrátane práva na odstúpenie, doručovania a platieb",
        "Reklamačný poriadok podľa aktuálneho znenia zákona",
        "Zásady ochrany osobných údajov a cookies",
        "Formulár na odstúpenie od zmluvy",
        "Kontrola povinných údajov na webe — identifikácia predávajúceho, orgán dozoru, alternatívne riešenie sporov",
      ],
      excludes: ["GDPR dokumentácia dovnútra firmy (samostatný balík)", "Technické nastavenie cookie lišty"],
      turnaround: "Do 5 pracovných dní od dodania podkladov.",
      documents: ["Adresa e-shopu", "Čo predávate, ako doručujete a aké platby prijímate"],
    },
    en: {
      includes: [
        "Terms and conditions incl. withdrawal, delivery and payment",
        "Complaints procedure under current law",
        "Privacy and cookie policy",
        "Withdrawal form",
        "Check of mandatory website information — seller identification, supervisory authority, ADR",
      ],
      excludes: ["Internal GDPR documentation (separate package)", "Technical cookie-banner setup"],
      turnaround: "Within 5 business days of receiving the details.",
      documents: ["Shop URL", "What you sell, how you deliver and which payments you accept"],
    },
  },
};

export function getPackageDetail(id: string, locale: Locale): PackageDetail | undefined {
  return DETAILS[id]?.[locale];
}
