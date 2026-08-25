import type { CampaignData } from "./types";

/**
 * Prevod obchodného podielu (katalóg A3). § 115 ods. 4 ObchZ: notárska
 * zápisnica alebo zmluva autorizovaná advokátom, inak neplatná. § 115 ods. 3
 * a 6: exekučné prekážky na strane prevodcu aj nadobúdateľa. Súvisí so vzorom
 * 03/01 (29 €, zápočet do ceny služby pri objednávke do 30 dní — schválené
 * 24. 8. 2026).
 */
export const shareTransfer: CampaignData = {
  id: "share-transfer",
  pathname: "/share-transfer",
  group: "produkt",

  meta: {
    title: "Prevod obchodného podielu 2026 — zmluva autorizovaná advokátom, 249 € | kohút & partners",
    description:
      "Zmluva o prevode obchodného podielu musí byť notárska zápisnica alebo zmluva autorizovaná advokátom (§ 115 ods. 4 ObchZ). Pripravíme, autorizujeme a zapíšeme do OR — 249 € + poplatok 50 €.",
  },

  hero: {
    overline: "Prevod obchodného podielu · celá SR",
    h1: "Prevod obchodného podielu — autorizovaný a zapísaný za 249 €",
    lead: "Od 17. augusta 2026 musí byť zmluva o prevode obchodného podielu vyhotovená ako notárska zápisnica alebo zmluva autorizovaná advokátom — inak je neplatná (§ 115 ods. 4 Obchodného zákonníka). Zmluvu podpísanú doma registrový súd neprijme.",
    paragraphs: [
      "Pripravíme zmluvu, autorizujeme ju, zabezpečíme súhlas valného zhromaždenia, preveríme exekučné prekážky na oboch stranách a podáme návrh na zápis zmeny. K notárovi nemusíte — a podpisy netreba úradne osvedčovať.",
      "Odmena je 249 € s DPH, súdny poplatok za zápis zmeny 50 €. Celý prevod trvá spravidla päť až desať pracovných dní.",
    ],
    cta: "Chcem previesť podiel",
  },

  reasons: {
    overline: "Na čo si dať pozor",
    heading: "Prečo prevod nie je len podpis zmluvy",
    lead: "Neplatná forma alebo prehliadnutá prekážka znamená, že nadobúdateľ sa spoločníkom nestane — často sa to zistí, až keď je kúpna cena zaplatená.",
    items: [
      {
        title: "Povinná forma zmluvy",
        desc: "Zmluva musí byť notárskou zápisnicou alebo zmluvou autorizovanou advokátom (§ 115 ods. 4). Pri autorizácii advokát zisťuje totožnosť oboch strán a posudzuje súlad úkonu so zákonom; zmluva sa v deň autorizácie ukladá do registra autorizácií komory.",
      },
      {
        title: "Exekúcia blokuje prevod",
        desc: "Spoločník vedený ako povinný v registri poverení na vykonanie exekúcie podiel previesť nemôže — a osoba v exekúcii ho nemôže ani nadobudnúť (§ 115 ods. 3 a 6). Preveríme obe strany pred podpisom.",
      },
      {
        title: "Súhlasy podľa spoločenskej zmluvy",
        desc: "Prevod na tretiu osobu musí spoločenská zmluva pripúšťať a často vyžaduje súhlas valného zhromaždenia (§ 115 ods. 1 a 2). Rozhodnutie o súhlase pripravíme spolu so zmluvou.",
      },
      {
        title: "Pristúpenie a ručenie",
        desc: "Nadobúdateľ, ktorý nie je spoločníkom, musí v zmluve vyhlásiť pristúpenie k spoločenskej zmluve; prevodca ručí za splácanie nesplateného vkladu (§ 115 ods. 4). Na oboje sa pri „vzoroch z internetu“ zabúda.",
      },
    ],
  },

  scope: {
    overline: "V cene",
    heading: "Čo balík obsahuje",
    lead: "Kompletný prevod od preverenia po výpis z obchodného registra so zapísaným novým spoločníkom.",
    items: [
      "Preverenie spoločenskej zmluvy — či prevod pripúšťa a čo vyžaduje",
      "Preverenie exekučných prekážok prevodcu aj nadobúdateľa",
      "Zmluva o prevode obchodného podielu autorizovaná advokátom",
      "Rozhodnutie spoločníka alebo valného zhromaždenia o súhlase s prevodom",
      "Vyhlásenie nadobúdateľa o pristúpení k spoločenskej zmluve",
      "Návrh na zápis zmeny do obchodného registra a jeho podanie",
      "Uloženie zmluvy do registra autorizácií komory v deň autorizácie",
    ],
  },

  steps: [
    {
      title: "Podklady a preverenie",
      desc: "Pošlete údaje strán a spoločenskú zmluvu. Preveríme podmienky prevodu aj registre — diskvalifikácie a poverenia na vykonanie exekúcie — na oboch stranách.",
    },
    {
      title: "Zmluva a súhlasy",
      desc: "Pripravíme zmluvu o prevode, rozhodnutie o súhlase a ďalšie listiny. Odsúhlasíte si ich z pohodlia e-mailu.",
    },
    {
      title: "Autorizácia",
      desc: "Strany zmluvu podpíšu pri autorizácii — bez úradného osvedčovania podpisov (§ 50 ods. 4 zákona o obchodnom registri). Zmluvu v ten istý deň uložíme do registra autorizácií.",
    },
    {
      title: "Zápis do registra",
      desc: "Podáme návrh na zápis zmeny so súdnym poplatkom 50 €. Registrový súd zapíše zmenu do dvoch pracovných dní od úplného návrhu.",
    },
  ],

  deadline: {
    heading: "Zmluva bez správnej formy je neplatná",
    body: "Do 16. augusta 2026 stačila na prevod obchodného podielu zmluva s úradne osvedčenými podpismi. Od 17. augusta 2026 platí § 115 ods. 4 Obchodného zákonníka v novom znení: zmluva musí byť vyhotovená vo forme notárskej zápisnice o právnom úkone alebo vo forme zmluvy autorizovanej advokátom. Zmluva podpísaná doma — hoci s osvedčenými podpismi — je neplatná, registrový súd zmenu spoločníka nezapíše a kúpna cena môže byť zaplatená za podiel, ktorý na nadobúdateľa neprešiel. Ak už takúto zmluvu máte, treba ju uzavrieť nanovo v správnej forme; poslúži ako podklad.",
  },

  pricing: {
    heading: "Koľko to stojí",
    lead: "Pevná cena vopred. Ak ste si u nás kúpili vzor zmluvy o prevode podielu, jeho cena 29 € sa vám do odmeny započíta pri objednávke do 30 dní.",
    items: [
      {
        label: "Prevod obchodného podielu",
        value: "249 € s DPH",
        desc: "Kompletná odmena: preverenie, zmluva, autorizácia, súhlasy a návrh na zápis. Ďalšia zmena zapisovaná v tom istom návrhu — napríklad nový konateľ či sídlo — sa dá pridať výhodnejšie.",
      },
      {
        label: "Súdny poplatok",
        value: "50 €",
        desc: "Poplatok za návrh na zápis zmeny (položka 17 sadzobníka) pokrýva všetky zmeny zapisované jedným návrhom. Platí sa v skutočnej výške.",
      },
      {
        label: "Úschova kúpnej ceny",
        value: "samostatne",
        desc: "Pri odplatnom prevode odporúčame advokátsku úschovu — kúpna cena sa uvoľní prevodcovi až po zápise zmeny. Cenu úschovy oznámime vopred podľa výšky sumy.",
      },
    ],
  },

  form: {
    title: "Napíšte nám o prevode",
    leads: [
      "Ozveme sa do jedného pracovného dňa. Ak prevodu bráni prekážka — exekúcia, chýbajúci súhlas, obmedzenie v spoločenskej zmluve — zistíte to skôr, než čokoľvek podpíšete alebo zaplatíte.",
      "Daňové posúdenie kúpnej ceny nie je súčasťou balíka; na požiadanie odporučíme daňového poradcu.",
    ],
    fields: [
      { name: "ico", label: "IČO spoločnosti", placeholder: "napr. 47 123 456" },
      { name: "share", label: "Aká časť podielu sa prevádza", placeholder: "napr. 100 % / polovica" },
      { name: "parties", label: "Kto prevádza a kto nadobúda", placeholder: "napr. spoločník → nový investor" },
    ],
    messageLabel: "Okolnosti prevodu",
    subject: "Prevod obchodného podielu — podklady",
    documents: [
      "spoločenská zmluva alebo zakladateľská listina",
      "občianske preukazy prevodcu a nadobúdateľa",
      "dohodnutá cena a platobné podmienky, ak je prevod odplatný",
    ],
    submit: "Chcem previesť podiel",
  },

  faq: [
    {
      q: "Stačí zmluva s úradne osvedčenými podpismi?",
      a: "Už nie. Od 17. 8. 2026 musí byť zmluva notárskou zápisnicou alebo zmluvou autorizovanou advokátom (§ 115 ods. 4 ObchZ) — osvedčené podpisy formu nenahrádzajú. Naopak, pri autorizovanej zmluve sa podpisy osvedčovať nemusia vôbec.",
    },
    {
      q: "Kúpil som vzor zmluvy — bol zbytočný?",
      a: "Nebol. Vzor je pripravený podklad: vyplnený ho prinesiete na autorizáciu a jeho cena 29 € sa vám započíta do odmeny za službu, ak si autorizáciu objednáte do 30 dní od kúpy vzoru.",
    },
    {
      q: "Predávam podiel — kedy dostanem peniaze?",
      a: "Ako sa dohodnete. Najbezpečnejšia je advokátska úschova: kupujúci zloží cenu pred podpisom a prevodcovi sa uvoľní po zápise zmeny do obchodného registra. Ani jedna strana tak nenesie riziko toho druhého kroku.",
    },
    {
      q: "Prevádza sa len časť podielu — je to rozdiel?",
      a: "Áno, rozdelenie podielu vyžaduje súhlas valného zhromaždenia a mení pomery v spoločnosti. Pri zmene pomeru obchodných podielov navyše rozhodnutia valného zhromaždenia podliehajú prísnejšej forme. Povieme vám vopred, čo presne bude treba.",
    },
    {
      q: "Nadobúdateľ je v exekúcii. Dá sa to obísť?",
      a: "Nedá — a nemá sa. Osoba vedená ako povinný v registri poverení na vykonanie exekúcie nemôže podiel nadobudnúť (§ 115 ods. 6 ObchZ) a súd to pri zápise preverí. Riešením je exekúciu ukončiť alebo usporiadať skôr, než sa prevod uskutoční.",
    },
  ],

  relatedServiceId: "obchod",
  relatedServiceLabel: "Obchodné právo a firemná agenda",
};
