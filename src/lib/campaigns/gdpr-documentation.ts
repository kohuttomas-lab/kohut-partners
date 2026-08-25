import type { CampaignData } from "./types";

/**
 * GDPR dokumentácia na mieru (katalóg B1, existujúci balík it-gdpr 199 €).
 * Právny základ: nariadenie (EÚ) 2016/679 (čl. 13, 28, 30, 32), zák. 18/2018.
 * Ročná aktualizácia 79 €. S B2 spolu „E-shop kompletne“ 299 €.
 */
export const gdprDocumentation: CampaignData = {
  id: "gdpr-documentation",
  pathname: "/gdpr-documentation",
  group: "produkt",

  meta: {
    title: "GDPR dokumentácia pre firmu a e-shop — na mieru za 199 € | kohút & partners",
    description:
      "GDPR dokumentácia od advokáta: záznamy o spracovateľských činnostiach, informačné povinnosti, smernica, poverenia zamestnancov a sprostredkovateľské zmluvy. Na mieru vášmu podnikaniu, do 7 pracovných dní, 199 € s DPH.",
  },

  hero: {
    overline: "GDPR dokumentácia · celá SR",
    h1: "GDPR dokumentácia na mieru — nie šablóna, ktorá nesedí",
    lead: "Osobné údaje spracúva každá firma so zamestnancom alebo zákazníkom. GDPR nevyžaduje hrubý šanón — vyžaduje dokumenty, ktoré zodpovedajú tomu, čo s údajmi naozaj robíte. Presne tie pripravíme.",
    paragraphs: [
      "Začíname dotazníkom a krátkou konzultáciou: čo spracúvate, o kom, načo a s kým to zdieľate. Z toho vznikne dokumentácia na mieru — záznamy o spracovateľských činnostiach, informačné povinnosti, interná smernica, poverenia zamestnancov aj vzor sprostredkovateľskej zmluvy pre účtovníka či IT dodávateľa.",
      "Hotovo do siedmich pracovných dní. Pri zmene predpisov alebo vášho podnikania dokumentáciu aktualizujeme za 79 € ročne.",
    ],
    cta: "Chcem GDPR na mieru",
  },

  reasons: {
    overline: "Čo pokrývame",
    heading: "Povinnosti, ktoré dokumentácia rieši",
    lead: "Každý dokument zodpovedá konkrétnej povinnosti z nariadenia (EÚ) 2016/679 a zákona č. 18/2018 Z. z. — nie je tam nič navyše a nič nechýba.",
    items: [
      {
        title: "Záznamy o spracovateľských činnostiach",
        desc: "Prehľad, aké údaje, o kom, na aký účel a ako dlho spracúvate (čl. 30 nariadenia). Prvá vec, ktorú pri kontrole žiada úrad — a základ, z ktorého vychádzajú všetky ostatné dokumenty.",
      },
      {
        title: "Informačné povinnosti",
        desc: "Zásady ochrany osobných údajov pre zákazníkov, uchádzačov aj zamestnancov v rozsahu čl. 13 nariadenia — zrozumiteľné, nie skopírované paragrafy.",
      },
      {
        title: "Interná smernica a poverenia",
        desc: "Kto má k údajom prístup, ako sa údaje chránia a čo robiť pri bezpečnostnom incidente (čl. 32). Poverenia a mlčanlivosť zamestnancov, ktorí s údajmi pracujú.",
      },
      {
        title: "Sprostredkovateľské zmluvy",
        desc: "Účtovník, hosting, e-mailový nástroj či IT správca spracúvajú údaje za vás — bez zmluvy podľa čl. 28 nariadenia je to porušenie na vašej strane, nie na ich. Dodáme vzor pripravený na podpis.",
      },
    ],
  },

  scope: {
    overline: "V cene",
    heading: "Čo balík obsahuje",
    lead: "Kompletná dokumentácia prevádzkovateľa. Posúdenie, či potrebujete zodpovednú osobu, je súčasťou — jej výkon už nie.",
    items: [
      "Vstupný dotazník a 30-minútová konzultácia",
      "Záznamy o spracovateľských činnostiach",
      "Zásady ochrany osobných údajov pre web a zákazníkov",
      "Informačná povinnosť voči zamestnancom a uchádzačom",
      "Interná smernica o ochrane osobných údajov",
      "Poverenia a mlčanlivosť zamestnancov",
      "Vzor sprostredkovateľskej zmluvy pre dodávateľov",
      "Postup pri bezpečnostnom incidente a jeho oznamovaní",
      "Posúdenie povinnosti určiť zodpovednú osobu",
    ],
  },

  steps: [
    {
      title: "Dotazník a konzultácia",
      desc: "Vyplníte dotazník o tom, aké údaje a nástroje používate; v 30-minútovom hovore doladíme detaily. Nič nemusíte formulovať právnicky — na to sme my.",
    },
    {
      title: "Dokumentácia do 7 dní",
      desc: "Pripravíme kompletnú dokumentáciu šitú na vaše procesy. Dostanete ju vo formáte na priame použitie — s vyznačením, kde čo zverejniť alebo podpísať.",
    },
    {
      title: "Nasadenie",
      desc: "Prejdeme s vami, čo patrí na web, čo podpisujú zamestnanci a ktoré zmluvy poslať dodávateľom. Otázky pri nasadzovaní sú v cene.",
    },
    {
      title: "Aktualizácia",
      desc: "Predpisy aj vaše podnikanie sa menia. Za 79 € ročne držíme dokumentáciu aktuálnu — a ozveme sa sami, keď sa zmení niečo podstatné.",
    },
  ],

  deadline: {
    heading: "Kontrola sa neohlasuje vopred",
    body: "Úrad na ochranu osobných údajov koná aj z vlastnej iniciatívy a často na podnet — nespokojný zákazník, bývalý zamestnanec či konkurent. Prvé, čo kontrola žiada, sú záznamy o spracovateľských činnostiach a preukázanie informačných povinností; dokumenty sa nedajú dopísať spätne k dátumu, ku ktorému mali existovať. Pokuty podľa čl. 83 nariadenia sú odstupňované podľa závažnosti — pre malú firmu je však spravidla citeľnejšie už samotné konanie a povinnosť preukazovať súlad bez dokladov. Sedem pracovných dní na poriadnu dokumentáciu je proti tomu zanedbateľný čas.",
  },

  pricing: {
    heading: "Koľko to stojí",
    lead: "Pevné ceny s DPH. E-shopom sa oplatí kombinácia s obchodnými podmienkami — pozrite balík nižšie.",
    items: [
      {
        label: "GDPR dokumentácia",
        value: "199 € s DPH",
        desc: "Kompletná dokumentácia na mieru do 7 pracovných dní vrátane konzultácie a podpory pri nasadení.",
      },
      {
        label: "Ročná aktualizácia",
        value: "79 € s DPH / rok",
        desc: "Priebežné udržiavanie súladu — aktualizácie pri zmene predpisov aj pri zmene vášho podnikania. Voliteľné, bez viazanosti.",
      },
      {
        label: "E-shop kompletne",
        value: "299 € s DPH",
        desc: "GDPR dokumentácia + obchodné podmienky, reklamačný poriadok a dokumenty pre e-shop v jednom balíku — výhodnejšie než samostatne.",
      },
    ],
  },

  form: {
    title: "Napíšte nám o svojom podnikaní",
    leads: [
      "Ozveme sa do jedného pracovného dňa s dotazníkom. Ak už nejakú dokumentáciu máte, pozrieme sa najprv na ňu — možno stačí revízia namiesto novej sady.",
      "DPIA — posúdenie vplyvu pri rizikovom spracúvaní — a výkon funkcie zodpovednej osoby nie sú súčasťou balíka; ak ich potrebujete, dohodneme ich samostatne a povieme to vopred.",
    ],
    fields: [
      { name: "business", label: "Čomu sa firma venuje", placeholder: "napr. e-shop s kozmetikou" },
      { name: "employees", label: "Počet zamestnancov", placeholder: "napr. 4" },
      { name: "tools", label: "Aké nástroje používate", placeholder: "napr. Shoptet, Mailchimp, externý účtovník" },
    ],
    messageLabel: "Doplňujúce informácie",
    subject: "GDPR dokumentácia — podklady",
    documents: [
      "existujúca GDPR dokumentácia, ak nejakú máte",
      "zoznam dodávateľov, ktorí prichádzajú do styku s údajmi",
    ],
    submit: "Chcem GDPR dokumentáciu",
  },

  faq: [
    {
      q: "Sme malá firma — týka sa nás GDPR vôbec?",
      a: "Áno. Nariadenie platí od prvého zamestnanca a prvého zákazníka, ktorého údaje spracúvate; veľkosť firmy ovplyvňuje len rozsah niektorých povinností. Malej firme ale stačí štíhla dokumentácia — presne preto ju robíme na mieru, nie z univerzálnej šablóny.",
    },
    {
      q: "Potrebujem súhlas so spracovaním od každého zákazníka?",
      a: "Spravidla nie. Údaje potrebné na vybavenie objednávky sa spracúvajú na základe zmluvy, faktúry na základe zákona — súhlas je potrebný len tam, kde iný právny základ nie je, typicky pri marketingu. Nadbytočné súhlasy sú častá chyba prevzatých šablón; v dokumentácii právne základy nastavíme správne.",
    },
    {
      q: "Musím mať zodpovednú osobu?",
      a: "Väčšina malých firiem nie — povinnosť sa viaže na rozsiahle alebo osobitne citlivé spracúvanie a na orgány verejnej moci. Posúdenie je súčasťou balíka; ak vám povinnosť vyjde, povieme vám, ako ju splniť.",
    },
    {
      q: "Stačí mi vygenerovaná dokumentácia z online nástroja?",
      a: "Ako východisko môže poslúžiť, no generátor nevidí vaše procesy — a dokumenty, ktoré nezodpovedajú realite, pri kontrole skôr uškodia, než pomôžu. Rozdiel v cene medzi generátorom a dokumentáciou od advokáta je pri 199 € malý; rozdiel v obhájiteľnosti veľký.",
    },
    {
      q: "Máme e-shop — čo potrebujeme okrem GDPR?",
      a: "Obchodné podmienky, reklamačný poriadok, poučenie o odstúpení a správne povinné údaje na webe. To je samostatný balík Dokumenty pre e-shop za 169 €; spolu s GDPR ho ponúkame ako E-shop kompletne za 299 €.",
    },
  ],

  relatedServiceId: "it",
  relatedServiceLabel: "IT a digitálne právo",
};
