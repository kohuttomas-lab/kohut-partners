// Dvojjazyčný obsah (SK/EN) — v PL/HU/DE/RU sa tieto stránky nezobrazujú.
import type { BaseLocale as Locale } from "@/i18n/routing";
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
  /** Upozornenie na pracovný návrh. Schválené dokumenty ho nemajú. */
  notice?: string;
  sections: LegalSection[];
}

export type LegalSlug = "privacy" | "terms" | "cookies";

const COMPANY = "kohút & partners s.r.o.";
const ICO = "47 235 888";
const ADDRESS = "Námestie SNP 74/28, 960 01 Zvolen";
const UPDATED = { sk: "Posledná aktualizácia: 15. jún 2026", en: "Last updated: 15 June 2026" };
// VOP e-shopu — schválené Tomášom 20. 9. 2026; účinné dňom, od ktorého platí
// povinná funkcia na odstúpenie podľa § 20a zák. 108/2024 Z. z.
const TERMS_UPDATED = { sk: "Účinné od 27. septembra 2026", en: "Effective from 27 September 2026" };
const COURT = { sk: "Okresný súd Banská Bystrica, oddiel Sro, vložka č. 20922/S", en: "District Court Banská Bystrica, section Sro, insert no. 20922/S" };
const SOI = {
  sk: "Inšpektorát Slovenskej obchodnej inšpekcie pre Banskobystrický kraj, Dolná 46, 974 00 Banská Bystrica 1",
  en: "Slovak Trade Inspection, Inspectorate for the Banská Bystrica Region, Dolná 46, 974 00 Banská Bystrica 1",
};
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
          "Údaje o zdroji dopytu: adresa stránky, z ktorej ste formulár odoslali, odkazujúca stránka a parametre kampane (UTM, gclid), ak boli v adrese.",
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
          "Inquiry source data: the address of the page you submitted the form from, the referring page and campaign parameters (UTM, gclid) if present in the address.",
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
    updated: TERMS_UPDATED.sk,
    sections: [
      {
        heading: "1. Poskytovateľ",
        paragraphs: [
          `Poskytovateľom právnych služieb je ${COMPANY}, advokátska spoločnosť, so sídlom ${ADDRESS}, IČO ${ICO}, DIČ 2023356478, IČ DPH SK2023356478, zapísaná v obchodnom registri (${COURT.sk}) a v zozname advokátov vedenom Slovenskou advokátskou komorou (ďalej len „kancelária“).`,
          `Kontakt: ${CONTACT.email}, ${CONTACT.phone}, adresa sídla uvedená vyššie.`,
          "Kancelária je poistená pre prípad zodpovednosti za škodu spôsobenú v súvislosti s výkonom advokácie. Údaje o poisťovni a výške poistného krytia poskytneme na požiadanie; pri autorizácii zmluvy o prevode nehnuteľnosti ich oznámime vždy.",
          `Dozor nad výkonom advokácie vykonáva Slovenská advokátska komora, Kolárska 4, 813 42 Bratislava. Dozor nad dodržiavaním predpisov na ochranu spotrebiteľa vykonáva ${SOI.sk}.`,
        ],
      },
      {
        heading: "2. Na čo sa podmienky vzťahujú",
        paragraphs: [
          "Tieto obchodné podmienky upravujú objednávanie a poskytovanie právnych služieb, ktoré kancelária ponúka za pevnú cenu na tomto webe v časti E-shop a na stránkach jednotlivých služieb (ďalej len „balík“).",
          "Klient je fyzická alebo právnická osoba, ktorá balík objedná. Spotrebiteľ je klient — fyzická osoba, ktorá pri objednávke nekoná v rámci svojho podnikania ani povolania. Ustanovenia označené ako spotrebiteľské sa na ostatných klientov nevzťahujú.",
          "Rozsah každého balíka — čo je v cene, čo v cene nie je, lehota a podklady, ktoré od klienta potrebujeme — je uvedený pri balíku v čase objednávky a je súčasťou zmluvy.",
          "Pre veci, ktoré presahujú rozsah balíka, a pre zastupovanie v konaniach mimo balíka sa uzatvára samostatná zmluva o poskytovaní právnych služieb; tieto podmienky sa na ňu nevzťahujú.",
        ],
      },
      {
        heading: "3. Objednávka a uzavretie zmluvy",
        paragraphs: [
          "Klient vyberie balík, prípadne jeho stupeň a doplnky, vyplní objednávkový formulár vrátane stručného opisu veci a zaplatí cenu online. Pred odoslaním objednávky vidí rozsah balíka, celkovú cenu vrátane DPH aj informáciu o poplatkoch štátu, ktoré sa platia samostatne.",
          "Odoslaním objednávky a zaplatením klient podáva návrh na uzavretie zmluvy o poskytnutí právnej služby v rozsahu zvoleného balíka.",
          "Kancelária objednávku preverí, najmä či nie je povinná poskytnutie právnych služieb odmietnuť podľa § 21 zákona č. 586/2003 Z. z. o advokácii (napríklad pre konflikt záujmov) a či zvolený balík zodpovedá opísanej veci. Zmluva vzniká doručením potvrdenia kancelárie o prijatí objednávky na e-mail klienta; potvrdenie odosielame spravidla do jedného pracovného dňa od zaplatenia.",
          "Zaplatená suma je do vzniku zmluvy preddavkom na cenu. Ak objednávku neprijmeme, oznámime to klientovi a celý preddavok mu vrátime bez zbytočného odkladu, najneskôr do 14 dní, rovnakým spôsobom, akým platil. Dôvody odmietnutia neuvádzame, ak by sme tým porušili povinnosť mlčanlivosti.",
          "Ak z opisu veci vyplynie, že klientovi viac zodpovedá iný balík alebo stupeň, oznámime mu to pred prijatím objednávky. Klient sa môže rozhodnúť pre zmenu s doplatením alebo vrátením rozdielu, alebo objednávku zrušiť s vrátením celej platby.",
          "Potvrdenie o prijatí objednávky obsahuje údaje o kancelárii, zvolený balík a jeho rozsah, cenu, lehotu, odkaz na tieto podmienky a pri spotrebiteľovi aj potvrdenie jeho vyhlásenia a súhlasu podľa článku 7.",
        ],
      },
      {
        heading: "4. Cena a platba",
        paragraphs: [
          "Ceny balíkov sú v eurách vrátane DPH 23 %. Pri balíkoch so stupňami a pri doplnkoch sa cena určí podľa voľby klienta v objednávke; celková suma je zobrazená na tlačidle objednávky pred zaplatením.",
          "Súdne a správne poplatky (napríklad súdny poplatok za zápis do obchodného registra, poplatok za živnosť alebo za návrh na vklad do katastra) nie sú súčasťou ceny balíka. Platia sa v skutočnej výške podľa platných predpisov; ich výška je pri balíku uvedená, ak je vopred známa.",
          "Cena sa platí vopred cez platobnú bránu Stripe. Údaje o platobnej karte spracúva výlučne poskytovateľ platobnej brány; kancelária k nim nemá prístup. Doklad o platbe a faktúru dostane klient e-mailom.",
          "Ak sa počas poskytovania služby ukáže, že vec presahuje rozsah balíka, oznámime to klientovi a povieme mu cenu ešte predtým, než akékoľvek práce nad rozsah balíka vykonáme. Bez súhlasu klienta ich nevykonáme ani neúčtujeme.",
        ],
      },
      {
        heading: "5. Poskytnutie služby",
        paragraphs: [
          "Službu začíname poskytovať po vzniku zmluvy a po dodaní podkladov uvedených pri balíku alebo vyžiadaných kanceláriou. Lehota uvedená pri balíku plynie od zaplatenia a dodania úplných podkladov, podľa toho, čo nastane neskôr; pri expresnom variante alebo doplnku platí lehota uvedená pri ňom.",
          "Klient je povinný poskytnúť pravdivé a úplné informácie a potrebnú súčinnosť. Kancelária nezodpovedá za následky nepravdivých alebo neúplných informácií od klienta.",
          "Pri službách, pri ktorých to vyžadujú predpisy o ochrane pred legalizáciou príjmov z trestnej činnosti, a pri autorizácii dokumentu advokátom je klient povinný umožniť zistenie a overenie svojej totožnosti; bez toho službu poskytnúť nemôžeme.",
          "Ak klient napriek výzve nedodá podklady ani neposkytne súčinnosť do 30 dní od doručenia výzvy, kancelária môže zmluvu ukončiť a vráti zaplatenú cenu zníženú o cenu už skutočne poskytnutého plnenia.",
          "Výstupy odovzdávame spravidla elektronicky na e-mail klienta, pri podaniach na súd alebo úrad aj s potvrdením o podaní.",
          "Kancelária poskytuje právne služby podľa zákona o advokácii a stavovských predpisov Slovenskej advokátskej komory, je viazaná povinnosťou mlčanlivosti a riadi sa pokynmi klienta, ak nie sú v rozpore s právnymi predpismi. Výsledok konania kancelária nesľubuje; závisí aj od rozhodnutia súdu, úradu či správania druhej strany.",
        ],
      },
      {
        heading: "6. Odstúpenie kancelárie od zmluvy",
        paragraphs: [
          "Kancelária môže od zmluvy odstúpiť zo závažných dôvodov podľa § 22 zákona o advokácii, najmä ak sa naruší nevyhnutná dôvera medzi ňou a klientom, a vždy, ak dodatočne zistí dôvod, pre ktorý je povinná poskytnutie právnych služieb odmietnuť.",
          "V takom prípade vráti klientovi zaplatenú cenu zníženú o cenu už skutočne poskytnutého plnenia, najneskôr do 14 dní.",
        ],
      },
      {
        heading: "7. Odstúpenie spotrebiteľa od zmluvy",
        paragraphs: [
          "Spotrebiteľ má právo odstúpiť od zmluvy bez udania dôvodu do 14 dní odo dňa uzavretia zmluvy (§ 20 ods. 1 písm. a) druhý bod zákona č. 108/2024 Z. z. o ochrane spotrebiteľa). Lehota je zachovaná, ak oznámenie odošle najneskôr v posledný deň lehoty.",
          "Odstúpiť možno funkciou „odstúpiť od zmluvy tu“ na stránke Odstúpenie od zmluvy (§ 20a zákona č. 108/2024 Z. z.), e-mailom na klienti@tkak.sk alebo listom na adresu sídla; použiť možno aj vzorový formulár, ktorý je na tej istej stránke.",
          "Začatie služby pred uplynutím lehoty: spotrebiteľ môže v objednávke požiadať, aby sme službu začali poskytovať ešte pred uplynutím 14-dňovej lehoty. Udeľuje tým výslovný súhlas so začatím poskytovania služby a vyhlasuje, že bol poučený, že po úplnom poskytnutí služby právo na odstúpenie stráca (§ 17 ods. 10 a § 19 ods. 1 písm. a) zákona č. 108/2024 Z. z.).",
          "Ak spotrebiteľ odstúpi po začatí, ale pred úplným poskytnutím služby, zaplatí cenu za skutočne poskytnuté plnenie do dňa doručenia oznámenia o odstúpení (§ 21 ods. 5 zákona č. 108/2024 Z. z.); zvyšok ceny mu vrátime.",
          "Ak spotrebiteľ súhlas so začatím neudelí, začneme službu poskytovať až po uplynutí lehoty na odstúpenie a lehoty uvedené pri balíku plynú až od jej uplynutia. Pri expresných variantoch preto tento súhlas vyžadujeme.",
          "Po odstúpení vrátime spotrebiteľovi všetky platby znížené o cenu už poskytnutého plnenia najneskôr do 14 dní od doručenia oznámenia, rovnakým spôsobom, akým platil (§ 22 ods. 1 a 6 zákona č. 108/2024 Z. z.). Žiadne ďalšie poplatky mu tým nevznikajú.",
          "Súdne a správne poplatky, ktoré sme na pokyn klienta už zaplatili štátu, sú súčasťou skutočne poskytnutého plnenia, ak ich štát nevráti.",
        ],
      },
      {
        heading: "8. Reklamácie",
        paragraphs: [
          "Ak klient považuje službu za poskytnutú vadne alebo v rozpore so zmluvou, môže ju reklamovať e-mailom na klienti@tkak.sk alebo listom na adresu sídla. V reklamácii uvedie, akej služby sa týka a v čom vidí vadu.",
          "Prijatie reklamácie potvrdíme bez zbytočného odkladu a vybavíme ju najneskôr do 30 dní od doručenia. Ak je reklamácia oprávnená, vadu bezplatne odstránime, a ak to nie je možné, primerane znížime cenu alebo ju vrátime.",
          "Nárok na náhradu škody spôsobenej v súvislosti s poskytovaním právnych služieb sa riadi zákonom o advokácii a všeobecnými predpismi.",
        ],
      },
      {
        heading: "9. Mesačné predplatné",
        paragraphs: [
          "Mesačné predplatné právnych služieb je určené výlučne podnikateľom. Objednaním predplatného klient potvrdzuje, že koná v rámci svojej podnikateľskej činnosti.",
          "Predplatné sa platí mesačne vopred automatickou platbou kartou cez platobnú bránu Stripe, vždy v deň zodpovedajúci dňu prvej platby. Obsahuje rozsah hodín a ďalšie plnenia uvedené pri zvolenom pláne.",
          "Predplatné možno kedykoľvek zrušiť v samoobslužnom portáli alebo e-mailom na klienti@tkak.sk. Zrušenie je účinné koncom zaplateného obdobia; ďalšia platba sa už nestrhne a za začaté obdobie sa pomerná časť ceny nevracia.",
          "Nevyčerpané hodiny sa prenášajú do ďalšieho obdobia len pri pláne, pri ktorom je to výslovne uvedené, a len v uvedenom rozsahu.",
        ],
      },
      {
        heading: "10. Osobné údaje a mlčanlivosť",
        paragraphs: [
          "Osobné údaje spracúvame na účel vybavenia objednávky a poskytnutia právnych služieb; podrobnosti sú v dokumente Ochrana osobných údajov.",
          "Všetky informácie, ktoré nám klient poskytne, podliehajú povinnosti mlčanlivosti advokáta podľa § 23 zákona o advokácii.",
        ],
      },
      {
        heading: "11. Riešenie sporov",
        paragraphs: [
          "Spotrebiteľ sa môže obrátiť na kanceláriu so žiadosťou o nápravu, ak nie je spokojný so spôsobom vybavenia reklamácie alebo sa domnieva, že sme porušili jeho práva. Ak na žiadosť odpovieme zamietavo alebo neodpovieme do 30 dní od jej odoslania, má právo podať návrh na začatie alternatívneho riešenia sporu.",
          `Subjektom alternatívneho riešenia sporov je pre tieto spory Slovenská obchodná inšpekcia (§ 3 ods. 2 písm. c) zákona č. 391/2015 Z. z.), ${SOI.sk}; návrh možno podať aj inej oprávnenej právnickej osobe zapísanej v zozname vedenom Ministerstvom hospodárstva Slovenskej republiky.`,
          "Tým nie je dotknuté právo obrátiť sa na súd ani právo podať podnet Slovenskej advokátskej komore.",
        ],
      },
      {
        heading: "12. Záverečné ustanovenia",
        paragraphs: [
          "Zmluvný vzťah sa riadi právnym poriadkom Slovenskej republiky. Zmluva sa uzatvára v slovenskom jazyku; pri objednávke v anglickej verzii webu platí anglický preklad týchto podmienok, pričom v prípade rozporu má prednosť slovenské znenie.",
          "Kancelária môže tieto podmienky meniť. Na zmluvu sa použije znenie účinné v čase odoslania objednávky.",
        ],
      },
    ],
  },
  en: {
    slug: "terms",
    overline: "Legal",
    title: "Terms & conditions",
    updated: TERMS_UPDATED.en,
    sections: [
      {
        heading: "1. Provider",
        paragraphs: [
          `Legal services are provided by ${COMPANY}, a law firm with its seat at ${ADDRESS}, Slovakia, company ID ${ICO}, VAT ID SK2023356478, registered in the Commercial Register (${COURT.en}) and in the list of attorneys kept by the Slovak Bar Association (the „firm“).`,
          `Contact: ${CONTACT.email}, ${CONTACT.phone}.`,
          "The firm carries professional indemnity insurance for damage caused in the practice of law. Details of the insurer and the cover are provided on request, and always when authorising a contract on the transfer of real property.",
          `Supervision of the practice of law is exercised by the Slovak Bar Association, Kolárska 4, 813 42 Bratislava. Consumer-protection supervision is exercised by the ${SOI.en}.`,
        ],
      },
      {
        heading: "2. Scope",
        paragraphs: [
          "These terms govern ordering and provision of the fixed-price legal services offered on this website (each a „package“).",
          "A consumer is a client — a natural person not acting within their trade or profession. Provisions marked as consumer provisions apply only to them.",
          "The scope of each package — what is included, what is not, the turnaround and the documents we need — is shown with the package at the time of the order and forms part of the contract.",
          "Matters beyond a package and representation in proceedings outside it are covered by a separate legal services agreement to which these terms do not apply.",
        ],
      },
      {
        heading: "3. Order and conclusion of the contract",
        paragraphs: [
          "The client selects a package, any tier and add-ons, completes the order form including a short description of the matter and pays online. The scope, the total price including VAT and any state fees payable separately are shown before the order is sent.",
          "By sending the order and paying, the client makes an offer to conclude a contract for the legal service within the scope of the selected package.",
          "The firm reviews the order, in particular whether it must refuse to provide legal services under s. 21 of Act No. 586/2003 Coll. on the Legal Profession (for example due to a conflict of interest) and whether the selected package fits the matter. The contract is concluded when the firm's confirmation of acceptance is delivered to the client's e-mail, usually within one business day of payment.",
          "Until the contract is concluded the amount paid is an advance. If we do not accept the order, we refund the full advance without undue delay, at the latest within 14 days, by the same means the client used.",
          "If another package or tier fits the matter better, we say so before accepting the order; the client may switch with the difference paid or refunded, or cancel with a full refund.",
        ],
      },
      {
        heading: "4. Price and payment",
        paragraphs: [
          "Prices are in euro including 23 % VAT. For tiered packages and add-ons the price follows the client's selection; the total is shown on the order button before payment.",
          "Court and administrative fees are not part of the package price and are charged at their actual amount.",
          "Payment is made in advance through the Stripe payment gateway; card data is processed solely by the gateway provider. The receipt and invoice are sent by e-mail.",
          "If the matter turns out to exceed the scope of the package, we tell the client and quote the price before carrying out any work beyond the package. Without the client's consent no such work is done or charged.",
        ],
      },
      {
        heading: "5. Provision of the service",
        paragraphs: [
          "We start after the contract is concluded and the required documents are delivered. The stated turnaround runs from payment and delivery of complete documents, whichever is later; an express variant or add-on carries its own turnaround.",
          "The client must provide true and complete information and the necessary cooperation. The firm is not liable for consequences of untrue or incomplete client information.",
          "Where anti-money-laundering rules or attorney authorisation of a document require it, the client must allow their identity to be established and verified.",
          "If the client fails to deliver documents or cooperate within 30 days of our request, the firm may terminate the contract and refunds the price less the value of the service actually provided.",
          "Outputs are delivered electronically, with filing confirmations where a submission is made to a court or authority.",
          "The firm acts under the Act on the Legal Profession and the professional rules of the Slovak Bar Association, is bound by professional secrecy and follows the client's instructions unless they conflict with the law. No outcome of proceedings is promised.",
        ],
      },
      {
        heading: "6. Termination by the firm",
        paragraphs: [
          "The firm may withdraw from the contract for serious reasons under s. 22 of the Act on the Legal Profession, and always if it later finds a reason requiring it to refuse to provide legal services.",
          "In that case it refunds the price less the value of the service actually provided, at the latest within 14 days.",
        ],
      },
      {
        heading: "7. Consumer withdrawal",
        paragraphs: [
          "A consumer may withdraw from the contract without giving a reason within 14 days of its conclusion (s. 20(1)(a)(2) of Act No. 108/2024 Coll. on Consumer Protection). The deadline is met if the notice is sent on the last day at the latest.",
          "Withdrawal is possible through the „withdraw from the contract here“ function on the Withdrawal page (s. 20a of Act No. 108/2024 Coll.), by e-mail to klienti@tkak.sk or by letter to the firm's seat; the model form is available on the same page.",
          "Starting before the deadline: in the order the consumer may ask us to start providing the service before the 14-day period expires. In doing so the consumer gives express consent and declares they were informed that the right of withdrawal is lost once the service has been fully provided (s. 17(10) and s. 19(1)(a)).",
          "If the consumer withdraws after the start but before full provision, they pay for the service actually provided up to the day the notice is delivered (s. 21(5)); the rest is refunded.",
          "Without that consent we start only after the withdrawal period expires and the stated turnaround runs from that point. Express variants therefore require the consent.",
          "After withdrawal we refund all payments less the value of the service provided, at the latest within 14 days of the notice, by the same means the consumer used (s. 22(1) and (6)).",
        ],
      },
      {
        heading: "8. Complaints",
        paragraphs: [
          "Complaints may be sent to klienti@tkak.sk or by letter to the firm's seat, stating the service and the defect.",
          "We confirm receipt without undue delay and settle the complaint within 30 days at the latest. If the complaint is justified we remedy the defect free of charge, or reduce or refund the price where that is not possible.",
        ],
      },
      {
        heading: "9. Monthly subscription",
        paragraphs: [
          "The monthly subscription is offered to business clients only. By ordering it the client confirms they act within their business activity.",
          "It is paid monthly in advance by automatic card payment through Stripe on the day matching the first payment, and covers the hours and other items stated with the plan.",
          "It can be cancelled at any time in the self-service portal or by e-mail; cancellation takes effect at the end of the paid period, with no proration of the started period.",
        ],
      },
      {
        heading: "10. Personal data and professional secrecy",
        paragraphs: [
          "Personal data is processed to handle the order and provide the legal service; see the Privacy page for details.",
          "All information provided to us is covered by the attorney's duty of confidentiality under s. 23 of the Act on the Legal Profession.",
        ],
      },
      {
        heading: "11. Dispute resolution",
        paragraphs: [
          "A consumer may ask the firm for redress if dissatisfied with the handling of a complaint. If we reject the request or fail to reply within 30 days, the consumer may file for alternative dispute resolution.",
          `For these disputes the ADR body is the Slovak Trade Inspection (s. 3(2)(c) of Act No. 391/2015 Coll.), ${SOI.en}; a filing may also be made with another authorised legal entity on the list kept by the Ministry of Economy of the Slovak Republic.`,
          "This does not affect the right to go to court or to complain to the Slovak Bar Association.",
        ],
      },
      {
        heading: "12. Final provisions",
        paragraphs: [
          "The contractual relationship is governed by the law of the Slovak Republic. The contract is concluded in Slovak; this English text is a translation and the Slovak version prevails in case of conflict.",
          "The firm may amend these terms; the version in force when the order is sent applies to that contract.",
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
