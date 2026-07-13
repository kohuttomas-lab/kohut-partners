import type { Locale } from "@/i18n/routing";
import { CONTACT } from "./content";

/* ============================================================
   Legal pages — Privacy / Terms / Cookies.
   These are structured WORKING DRAFTS (correct GDPR/e-commerce
   outline + the firm's real identifying data). Final wording is
   to be reviewed and approved by the firm before publishing —
   surfaced via the `notice` field on each document.
   ============================================================ */

export interface LegalSection {
  heading: string;
  paragraphs?: string[];
  items?: string[];
}

export interface LegalDoc {
  slug: LegalSlug;
  overline: string;
  title: string;
  updated: string;
  notice: string;
  sections: LegalSection[];
}

export type LegalSlug = "privacy" | "terms" | "cookies";

const COMPANY = "kohút & partners s.r.o.";
const ICO = "47 235 888";
const ADDRESS = "Námestie SNP 74/28, 960 01 Zvolen";
const UPDATED = { sk: "Posledná aktualizácia: 15. jún 2026", en: "Last updated: 15 June 2026" };
const COOKIES_UPDATED = { sk: "Posledná aktualizácia: 13. júl 2026", en: "Last updated: 13 July 2026" };
const NOTICE = {
  sk: "Toto je pracovný návrh dokumentu. Pred zverejnením ho prosím skontrolujte a finalizujte podľa aktuálnej praxe kancelárie.",
  en: "This is a working draft. Please review and finalize it before publishing in line with the firm's current practice.",
};

type Doc = Record<Locale, LegalDoc>;

const PRIVACY: Doc = {
  sk: {
    slug: "privacy",
    overline: "Právne",
    title: "Ochrana osobných údajov",
    updated: UPDATED.sk,
    notice: NOTICE.sk,
    sections: [
      {
        heading: "Prevádzkovateľ",
        paragraphs: [
          `Prevádzkovateľom osobných údajov je ${COMPANY}, IČO ${ICO}, so sídlom ${ADDRESS}. Vo veciach ochrany osobných údajov nás kontaktujte na ${CONTACT.email} alebo ${CONTACT.phone}.`,
        ],
      },
      {
        heading: "Aké údaje spracúvame",
        items: [
          "Kontaktný formulár: meno a priezvisko, e-mail, telefón, obsah správy.",
          "Rezervácia konzultácie: meno, e-mail, telefón, zvolená oblasť práva a termín.",
          "Objednávka v e-shope: fakturačné údaje, prípadne IČO firmy a údaje o platbe.",
          "Technické údaje: IP adresa, typ zariadenia a prehliadača v rozsahu nevyhnutnom pre prevádzku webu.",
        ],
      },
      {
        heading: "Účely a právne základy spracúvania",
        items: [
          "Odpoveď na váš dopyt a dohodnutie konzultácie — predzmluvné vzťahy a náš oprávnený záujem.",
          "Poskytnutie objednanej právnej služby — plnenie zmluvy.",
          "Spracovanie platieb a vedenie účtovníctva — plnenie zákonných povinností.",
          "Zabezpečenie a zlepšovanie webu — náš oprávnený záujem.",
        ],
      },
      {
        heading: "Príjemcovia a sprostredkovatelia",
        paragraphs: [
          "Vaše údaje neposkytujeme tretím stranám na marketingové účely. Na prevádzku služieb využívame dôveryhodných sprostredkovateľov, ktorí spracúvajú údaje výlučne podľa našich pokynov — poskytovateľa platieb, rezervačného systému, e-mailovej služby a hostingu (po nasadení uvedieme konkrétne subjekty).",
        ],
      },
      {
        heading: "Doba uchovávania",
        paragraphs: [
          "Údaje uchovávame len po dobu nevyhnutnú na daný účel, prípadne po dobu vyžadovanú právnymi predpismi (napr. účtovné a daňové doklady). Po jej uplynutí údaje bezpečne odstránime.",
        ],
      },
      {
        heading: "Vaše práva",
        paragraphs: [
          "Máte právo na prístup k údajom, ich opravu alebo výmaz, obmedzenie spracúvania, prenosnosť, ako aj právo namietať proti spracúvaniu. Tieto práva si môžete uplatniť na vyššie uvedených kontaktoch.",
          "Ak sa domnievate, že spracúvame vaše údaje nezákonne, máte právo podať sťažnosť Úradu na ochranu osobných údajov Slovenskej republiky.",
        ],
      },
    ],
  },
  en: {
    slug: "privacy",
    overline: "Legal",
    title: "Privacy policy",
    updated: UPDATED.en,
    notice: NOTICE.en,
    sections: [
      {
        heading: "Data controller",
        paragraphs: [
          `The data controller is ${COMPANY}, Company ID ${ICO}, registered at ${ADDRESS}. For data-protection matters contact us at ${CONTACT.email} or ${CONTACT.phone}.`,
        ],
      },
      {
        heading: "What data we process",
        items: [
          "Contact form: full name, e-mail, phone, message content.",
          "Consultation booking: name, e-mail, phone, the chosen area of law and slot.",
          "Shop order: billing details, optionally a company ID, and payment data.",
          "Technical data: IP address, device and browser type, to the extent necessary to run the website.",
        ],
      },
      {
        heading: "Purposes and legal bases",
        items: [
          "Responding to your enquiry and arranging a consultation — pre-contractual steps and our legitimate interest.",
          "Providing the ordered legal service — performance of a contract.",
          "Processing payments and bookkeeping — compliance with legal obligations.",
          "Securing and improving the website — our legitimate interest.",
        ],
      },
      {
        heading: "Recipients and processors",
        paragraphs: [
          "We do not share your data with third parties for marketing. To run our services we use trusted processors acting only on our instructions — a payment provider, a booking system, an e-mail service and hosting (the specific entities will be listed once deployed).",
        ],
      },
      {
        heading: "Retention",
        paragraphs: [
          "We keep data only for as long as necessary for the given purpose, or for the period required by law (e.g. accounting and tax records). After that we securely delete it.",
        ],
      },
      {
        heading: "Your rights",
        paragraphs: [
          "You have the right to access, rectify or erase your data, restrict processing, data portability, and to object to processing. You can exercise these rights using the contacts above.",
          "If you believe we process your data unlawfully, you may lodge a complaint with the Office for Personal Data Protection of the Slovak Republic.",
        ],
      },
    ],
  },
};

const TERMS: Doc = {
  sk: {
    slug: "terms",
    overline: "Právne",
    title: "Obchodné podmienky",
    updated: UPDATED.sk,
    notice: NOTICE.sk,
    sections: [
      {
        heading: "Predávajúci",
        paragraphs: [
          `Predávajúcim a poskytovateľom služieb je ${COMPANY}, IČO ${ICO}, so sídlom ${ADDRESS}, e-mail ${CONTACT.email}.`,
        ],
      },
      {
        heading: "Predmet",
        paragraphs: [
          "Tieto podmienky upravujú predaj jednorazových právnych balíkov, hotových dokumentov na stiahnutie (digitálny obsah) a mesačného predplatného právnych služieb prostredníctvom tohto webu.",
        ],
      },
      {
        heading: "Objednávka a uzavretie zmluvy",
        paragraphs: [
          "Zmluva vzniká odoslaním objednávky a jej potvrdením z našej strany. Pred odoslaním objednávky máte k dispozícii zhrnutie obsahu a ceny.",
        ],
      },
      {
        heading: "Ceny a platba",
        paragraphs: [
          "Všetky ceny sú uvedené vrátane DPH. Platba prebieha online cez poskytovateľa platobných služieb. Daňový doklad zašleme na váš e-mail.",
        ],
      },
      {
        heading: "Dodanie",
        paragraphs: [
          "Digitálny obsah (šablóny) sprístupníme na stiahnutie bezodkladne po prijatí platby. Právne služby poskytujeme v rozsahu a termíne dohodnutom po konzultácii.",
        ],
      },
      {
        heading: "Odstúpenie od zmluvy",
        paragraphs: [
          "Pri digitálnom obsahu dodávanom okamžite beriete na vedomie, že udelením súhlasu so začatím plnenia pred uplynutím lehoty na odstúpenie strácate právo odstúpiť od zmluvy. V ostatných prípadoch sa uplatnia príslušné ustanovenia o odstúpení podľa právnych predpisov SR.",
        ],
      },
      {
        heading: "Reklamácie a rozhodné právo",
        paragraphs: [
          "Reklamácie vybavujeme bez zbytočného odkladu na vyššie uvedených kontaktoch. Zmluvný vzťah sa riadi právnym poriadkom Slovenskej republiky.",
        ],
      },
    ],
  },
  en: {
    slug: "terms",
    overline: "Legal",
    title: "Terms & conditions",
    updated: UPDATED.en,
    notice: NOTICE.en,
    sections: [
      {
        heading: "Seller",
        paragraphs: [
          `The seller and service provider is ${COMPANY}, Company ID ${ICO}, registered at ${ADDRESS}, e-mail ${CONTACT.email}.`,
        ],
      },
      {
        heading: "Scope",
        paragraphs: [
          "These terms govern the sale of one-off legal packages, ready-made downloadable documents (digital content) and monthly legal-services subscriptions via this website.",
        ],
      },
      {
        heading: "Order and contract formation",
        paragraphs: [
          "A contract is formed when you submit an order and we confirm it. A summary of the content and price is shown before you submit the order.",
        ],
      },
      {
        heading: "Prices and payment",
        paragraphs: [
          "All prices include VAT. Payment is made online through a payment-services provider. We send the tax document to your e-mail.",
        ],
      },
      {
        heading: "Delivery",
        paragraphs: [
          "Digital content (templates) is made available for download promptly after payment is received. Legal services are provided in the scope and timeframe agreed after a consultation.",
        ],
      },
      {
        heading: "Withdrawal",
        paragraphs: [
          "For digital content delivered immediately, you acknowledge that by consenting to the start of performance before the withdrawal period expires you lose the right to withdraw. Otherwise the relevant withdrawal provisions under Slovak law apply.",
        ],
      },
      {
        heading: "Complaints and governing law",
        paragraphs: [
          "We handle complaints without undue delay using the contacts above. The contractual relationship is governed by the law of the Slovak Republic.",
        ],
      },
    ],
  },
};

const COOKIES: Doc = {
  sk: {
    slug: "cookies",
    overline: "Právne",
    title: "Zásady používania cookies",
    updated: COOKIES_UPDATED.sk,
    notice: NOTICE.sk,
    sections: [
      {
        heading: "Čo sú cookies",
        paragraphs: [
          "Cookies sú malé súbory, ktoré web ukladá vo vašom prehliadači, aby si zapamätal vaše nastavenia a zabezpečil správne fungovanie stránky. Podobné technológie zahŕňajú aj lokálne úložisko prehliadača a meracie kódy (pixely).",
        ],
      },
      {
        heading: "Aké cookies a nástroje používame",
        items: [
          "Nevyhnutné (bez súhlasu): zapamätanie zvoleného jazyka (SK/EN) a vašej voľby v cookie lište.",
          "Lokálne úložisko prehliadača: obsah košíka v e-shope (neodosiela sa automaticky na server).",
          "Analytické (len s vaším súhlasom): Google Analytics 4 — meranie návštevnosti a spôsobu používania webu.",
          "Marketingové (len s vaším súhlasom): Meta Pixel (Facebook/Instagram) a Google Ads — meranie konverzií a prispôsobenie reklamy.",
        ],
      },
      {
        heading: "Kto k údajom pristupuje",
        paragraphs: [
          "Analytické a marketingové nástroje prevádzkujú spoločnosti Google Ireland Limited a Meta Platforms Ireland Limited, ktoré ako tretie strany spracúvajú príslušné údaje podľa vlastných zásad ochrany súkromia. Tieto nástroje sa vo vašom prehliadači načítajú až po udelení súhlasu; ak súhlas neudelíte, nespustia sa.",
        ],
      },
      {
        heading: "Súhlas a jeho odvolanie",
        paragraphs: [
          "Pri prvej návšteve zobrazíme cookie lištu. Analytické a marketingové cookies aktivujeme iba ak zvolíte „Prijať všetko“. Ak zvolíte „Iba nevyhnutné“, tieto nástroje sa nenačítajú.",
          "Svoj súhlas môžete kedykoľvek zmeniť alebo odvolať tlačidlom nižšie — cookie lišta sa zobrazí znova a vy si voľbu upravíte. Ukladanie cookies viete spravovať aj priamo v nastaveniach svojho prehliadača.",
        ],
      },
    ],
  },
  en: {
    slug: "cookies",
    overline: "Legal",
    title: "Cookie policy",
    updated: COOKIES_UPDATED.en,
    notice: NOTICE.en,
    sections: [
      {
        heading: "What cookies are",
        paragraphs: [
          "Cookies are small files a website stores in your browser to remember your preferences and ensure the site works correctly. Similar technologies include browser local storage and tracking pixels.",
        ],
      },
      {
        heading: "Cookies and tools we use",
        items: [
          "Essential (no consent required): remembering your chosen language (SK/EN) and your cookie-banner choice.",
          "Browser local storage: the shop cart contents (not sent to the server automatically).",
          "Analytics (only with your consent): Google Analytics 4 — measuring traffic and how the site is used.",
          "Marketing (only with your consent): Meta Pixel (Facebook/Instagram) and Google Ads — conversion measurement and ad personalisation.",
        ],
      },
      {
        heading: "Who accesses the data",
        paragraphs: [
          "The analytics and marketing tools are operated by Google Ireland Limited and Meta Platforms Ireland Limited, which process the relevant data as third parties under their own privacy policies. These tools load in your browser only after you give consent; if you decline, they do not run.",
        ],
      },
      {
        heading: "Consent and withdrawal",
        paragraphs: [
          "On your first visit we show a cookie banner. Analytics and marketing cookies are activated only if you choose “Accept all”. If you choose “Only necessary”, these tools do not load.",
          "You can change or withdraw your consent at any time using the button below — the cookie banner reappears and you can update your choice. You can also manage cookie storage directly in your browser settings.",
        ],
      },
    ],
  },
};

const DOCS: Record<LegalSlug, Doc> = {
  privacy: PRIVACY,
  terms: TERMS,
  cookies: COOKIES,
};

export function getLegalDoc(locale: Locale, slug: LegalSlug): LegalDoc {
  return DOCS[slug][locale];
}
