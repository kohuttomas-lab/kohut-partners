import type { CampaignData } from "./types";

/**
 * Oddlženie konkurzom — priebeh konania do hĺbky (situačná stránka; prípravu
 * podkladov a balík 149 € rieši /osobny-bankrot, tu sa neduplikuje).
 * Overené v knižnici: ZKR 7/2005 v znení od 1. 10. 2025 — § 166 ods. 2 a 3
 * (10 rokov; exekúcia aspoň 1 rok), § 166a ods. 1 (rozhodujúci deň), § 166c,
 * § 166d, § 166e ods. 1 až 3 (oddlženie už v uznesení o vyhlásení; ručiteľ),
 * § 166f ods. 1 a 4 (6 rokov), § 166g ods. 1 a 2, § 166i ods. 3, § 166j
 * ods. 1 a 5, § 166k, § 167 ods. 2, § 167a (15 dní), § 167b, § 167e, § 167f,
 * § 167h, § 167i, § 167j ods. 1 a 2 (60 dní), § 167l ods. 1, 3 a 4 (45 dní),
 * § 167o, § 167r, § 167u ods. 1, § 167v ods. 1 a 2, § 170. Zák. 327/2005
 * v znení od 12. 6. 2026 — § 24h ods. 4 a 5, § 24i ods. 1. Vyhl. 665/2005
 * § 7a (preddavok 500 €). Exekučný poriadok § 115.
 * ⚖ KONTROLA: výška nepostihnuteľnej hodnoty obydlia (nariadenie vlády podľa
 *   § 166d ods. 4) v knižnici nie je — suma sa vo viditeľnom texte neuvádza.
 * ⚖ KONTROLA: FAQ „mzda po vyhlásení konkurzu“ je výklad a contrario z § 167h
 *   ods. 1 (majetok „ku dňu vyhlásenia“) — potvrdiť formuláciu.
 * ⚖ KONTROLA: § 24i ods. 1 zák. 327/2005 — vrátenie preddavku Centru „do
 *   dvoch rokov“ podľa znenia od 12. 6. 2026; staršie znenia mali inú dobu.
 * ⚖ KONTROLA: správny poplatok podľa § 24h ods. 1 písm. d) zák. 327/2005 —
 *   poznámka pod čiarou 19d v knižnici chýba; v texte sa poplatok nespomína.
 * ⚖ KONTROLA: tretia cenová položka je „pevná cena vopred“ (zadanie), kým
 *   /osobny-bankrot uvádza „od 290 € s DPH“ — zjednotiť.
 */
export const debtReliefBankruptcy: CampaignData = {
  id: "debt-relief-bankruptcy",
  pathname: "/debt-relief-bankruptcy",
  group: "situacie",

  meta: {
    title: "Oddlženie konkurzom — ako prebieha konkurz fyzickej osoby | kohút & partners",
    description:
      "Ako prebieha oddlženie konkurzom: podmienky návrhu, vyhlásenie konkurzu do 15 dní, čo sa stane s majetkom a obydlím, úloha správcu, prihlášky veriteľov a šesť rokov, počas ktorých možno oddlženie zrušiť. Posúdenie situácie zadarmo, celá SR.",
  },

  hero: {
    overline: "Oddlženie konkurzom · celá SR",
    h1: "Oddlženie konkurzom — ako prebieha konkurz fyzickej osoby krok za krokom",
    lead: "Konkurz fyzickej osoby je súdne konanie podľa štvrtej časti zákona o konkurze a reštrukturalizácii. Správca speňaží majetok, ktorý konkurzu podlieha, a súd vás už v uznesení o vyhlásení konkurzu zbavuje dlhov v rozsahu, v akom sa v konkurze neuspokoja (§ 166e ods. 1 ZKR). Na tejto stránke prechádzame celé konanie — od návrhu po šesť rokov po ňom.",
    paragraphs: [
      "Návrh na vyhlásenie konkurzu podáva za dlžníka Centrum právnej pomoci, ktoré ho zastupuje až do ustanovenia správcu (§ 166k ZKR, § 24h ods. 5 zákona č. 327/2005 Z. z.). My ho preto nepodávame a hovoríme to otvorene. Pomáhame s tým, čo je pred podaním a po ňom: posúdenie podmienok, príprava na správcu a zastupovanie, keď už konkurz beží. Prípravu podkladov pre Centrum opisujeme na stránke Osobný bankrot.",
      "Insolvenčnému právu sa kancelária venuje dlhodobo a advokát kancelárie je zapísaný v zozname správcov vedenom Ministerstvom spravodlivosti SR. Vopred vám preto vieme povedať, čo bude správca zisťovať a akú súčinnosť od vás zákon vyžaduje. Vec vedieme na diaľku pre klientov z celého Slovenska.",
    ],
    cta: "Chcem posúdenie zadarmo",
  },

  reasons: {
    overline: "Čo sa stane po vyhlásení",
    heading: "Štyri účinky vyhlásenia konkurzu, s ktorými treba počítať",
    lead: "Konkurz je vyhlásený zverejnením uznesenia v insolvenčnom registri (§ 167a ods. 3 ZKR). Od tej chvíle nastávajú účinky priamo zo zákona — je dobré poznať ich skôr, než sa návrh podá.",
    items: [
      {
        title: "O oddlžení súd rozhoduje hneď",
        desc: "O oddlžení súd rozhodne priamo v uznesení o vyhlásení konkurzu, nie až po skončení konania (§ 166e ods. 1). Ak návrh spĺňa podmienky, súd konkurz vyhlási a ustanoví správcu najneskôr do 15 dní od doručenia návrhu (§ 167a ods. 1). Oddlženie sa týka dlhov, ktoré vznikli pred kalendárnym mesiacom vyhlásenia konkurzu (§ 166a ods. 1 písm. a)) — neskoršie dlhy nerieši.",
      },
      {
        title: "Majetok preberá správca",
        desc: "Konkurzu podlieha majetok, ktorý vám patril ku dňu vyhlásenia konkurzu, a oprávnenie nakladať s ním prechádza na správcu (§ 167h ods. 1, § 167b ods. 1). Veci môžete ďalej užívať obvyklým spôsobom, musíte ich však chrániť a umožniť správcovi obhliadku (§ 167b ods. 3). Konkurzu nepodlieha nepostihnuteľná hodnota obydlia a majetok, ktorý nemožno postihnúť ani v exekúcii — napríklad nevyhnutné vybavenie domácnosti (§ 167h ods. 4 ZKR, § 115 Exekučného poriadku).",
      },
      {
        title: "Exekúcie a spory o dlhy sa zastavujú",
        desc: "Vyhlásenie konkurzu je dôvodom na zastavenie exekúcií, v ktorých sa vymáhajú dlhy pokryté oddlžením, a na majetok podliehajúci konkurzu nemožno počas konkurzu viesť exekúciu (§ 167f ods. 1 a 2). Zastavujú sa aj súdne konania o takýchto pohľadávkach a exekučné záložné právo zaniká (§ 167e ods. 1, § 167f ods. 4). Tento dôvod zastavenia sa nevzťahuje na pohľadávky, ktoré oddlženie necháva nedotknuté, napríklad výživné na dieťa (§ 166c).",
      },
      {
        title: "Manželia: spoločný majetok je súčasťou konkurzu",
        desc: "Vyhlásením konkurzu zaniká bezpodielové spoluvlastníctvo manželov a do konkurznej podstaty patrí všetok majetok v ňom, ak ešte nebol vyporiadaný (§ 167i ods. 1). Pri obydlí v bezpodielovom spoluvlastníctve má na nepostihnuteľnú hodnotu právo každý z manželov (§ 166d ods. 2, § 167i ods. 3). Ak žiada o oddlženie aj druhý z manželov, súd mu ustanoví toho istého správcu (§ 166j ods. 1).",
      },
    ],
  },

  scope: {
    overline: "Rozsah",
    heading: "S čím pri konkurze pomáhame",
    lead: "Od posúdenia podmienok po šesťročné obdobie po vyhlásení konkurzu. Podanie návrhu je zo zákona vecou Centra právnej pomoci — naša práca sa začína pred ním a pokračuje po ustanovení správcu, na základe plnomocenstva.",
    items: [
      "Posúdenie podmienok návrhu — exekúcia trvajúca aspoň rok a desaťročná prekážka (§ 166 ZKR)",
      "Prehľad, ktoré dlhy konkurz pokryje a ktoré ostanú nedotknuté (§ 166a až § 166c)",
      "Príprava na úvodné stretnutie so správcom a na jeho dopyty (§ 166i)",
      "Označenie obydlia v zozname majetku a nepostihnuteľná hodnota obydlia (§ 166d)",
      "Kontrola súpisu majetku a námietky proti zápisu do súpisu (§ 167j)",
      "Speňažovanie: dražba obydlia, ponukové konania a právo príbuzných vykúpiť majetok (§ 167n až § 167r)",
      "Bezpodielové spoluvlastníctvo manželov v konkurze (§ 167i)",
      "Obrana proti návrhu na zrušenie oddlženia pre nepoctivý zámer (§ 166f)",
    ],
  },

  steps: [
    {
      title: "Posúdenie zadarmo",
      desc: "Napíšete nám o dlhoch, exekúciách a majetku. Do troch pracovných dní vám odpovieme, či podmienky oddlženia konkurzom spĺňate, čo by konkurz znamenal pre váš majetok a ktoré dlhy by vám ostali.",
    },
    {
      title: "Príprava a Centrum právnej pomoci",
      desc: "Návrh s prílohami podáva Centrum elektronicky a musí byť úplný na prvý raz: súd na opravu ani doplnenie návrhu nevyzýva (§ 170 ZKR) a do 15 dní konkurz buď vyhlási, alebo návrh odmietne, prípadne konanie zastaví (§ 167a). Balík prípravy podkladov opisujeme na stránke Osobný bankrot.",
    },
    {
      title: "Vyhlásenie konkurzu a správca",
      desc: "Správcu určuje súd náhodným výberom (§ 166j ods. 1). Na úvodnom stretnutí vás poučí o povinnostiach (§ 166i ods. 3), do 60 dní vyhotoví súpis majetku (§ 167j ods. 1) a veritelia sa prihlasujú v základnej lehote 45 dní (§ 167l ods. 3). V tejto fáze vás už môžeme zastupovať.",
    },
    {
      title: "Speňaženie, rozvrh a zrušenie konkurzu",
      desc: "Správca majetok speňaží a výťažok rozdelí; rozvrh pripraví najskôr 60 dní od vyhlásenia konkurzu (§ 167u ods. 1). Konkurz sa zrušuje zverejnením oznámenia správcu po splnení rozvrhu — alebo po zistení, že majetok nepokryje ani náklady konkurzu (§ 167v ods. 1). Oddlženie zrušením konkurzu nezaniká; do šiestich rokov od vyhlásenia konkurzu ho však súd môže zrušiť pre nepoctivý zámer (§ 166f).",
    },
  ],

  deadline: {
    heading: "Od 15 dní po šesť rokov — lehoty, ktoré v konkurze bežia",
    body: "Návrh možno podať, až keď od vydania poverenia na vykonanie exekúcie uplynul aspoň rok, a doklad o exekúcii nesmie byť starší ako 30 dní (§ 166 ods. 3, § 167 ods. 2 písm. f) ZKR) — načasovanie podania rozoberáme na stránke Osobný bankrot. Súd rozhoduje do 15 dní od doručenia návrhu (§ 167a). Po vyhlásení konkurzu beží veriteľom základná 45-dňová lehota na prihlášky (§ 167l ods. 3) a správcovi 60 dní na súpis majetku (§ 167j ods. 1). Preddavok na paušálnu odmenu správcu, ktorý za vás zložilo Centrum právnej pomoci, mu vraciate do dvoch rokov (§ 24i ods. 1 zákona č. 327/2005 Z. z.); ak ho bez vážneho dôvodu riadne a včas nevraciate, zákon to radí medzi prejavy nepoctivého zámeru (§ 166g ods. 2 písm. k)). Šesť rokov od vyhlásenia konkurzu môže veriteľ navrhnúť zrušenie oddlženia (§ 166f ods. 1) — a o ďalšie oddlženie možno požiadať najskôr po desiatich rokoch (§ 166 ods. 2).",
  },

  pricing: {
    heading: "Koľko to stojí",
    lead: "Ceny s DPH, povedané vopred. Preddavok 500 € na paušálnu odmenu správcu skladá pri konkurze Centrum právnej pomoci a dlžník mu ho vracia na základe zmluvy o pôžičke — nie je naším príjmom. Ak chcete situáciu najprv prejsť osobne, konzultácia (30 min) stojí 50 € s DPH.",
    items: [
      {
        label: "Posúdenie situácie",
        value: "zadarmo",
        desc: "Či podmienky oddlženia konkurzom spĺňate, čo by sa stalo s majetkom a ktoré dlhy ostanú nedotknuté. Do troch pracovných dní, bez záväzku.",
      },
      {
        label: "Príprava na oddlženie",
        value: "149 € s DPH",
        desc: "Balík prípravy podkladov pre Centrum právnej pomoci. Jeho obsah opisujeme na stránke Osobný bankrot.",
      },
      {
        label: "Zastupovanie počas konkurzu",
        value: "pevná cena vopred",
        desc: "Komunikácia so správcom, kontrola súpisu a speňažovania, ochrana obydlia. Cenu dohodneme vopred podľa rozsahu majetku a dozviete sa ju pri posúdení.",
      },
    ],
  },

  form: {
    title: "Napíšte nám, v akom stave sú vaše dlhy",
    leads: [
      "Do troch pracovných dní dostanete bezplatné posúdenie: či podmienky oddlženia konkurzom spĺňate, čo by konkurz znamenal pre váš majetok a ktoré dlhy by vám ostali. Všetko, čo nám napíšete, kryje advokátska mlčanlivosť.",
      "Ak konkurz vo vašej situácii nie je vhodný — napríklad pri hodnotnejšom majetku a pravidelnom príjme — povieme vám to a vysvetlíme aj oddlženie splátkovým kalendárom.",
    ],
    fields: [
      { name: "debts", label: "Približná výška dlhov a počet veriteľov", placeholder: "napr. 28 000 €, šesť veriteľov" },
      { name: "oldestExecution", label: "Najstaršia exekúcia — od kedy", placeholder: "napr. od jari 2024" },
      { name: "assets", label: "Bývanie a majetok", placeholder: "napr. byt v BSM s hypotékou, auto z roku 2012" },
    ],
    messageLabel: "Vaša situácia vlastnými slovami",
    subject: "Oddlženie konkurzom — podklady",
    documents: [
      "upovedomenia o začatí exekúcie alebo iný doklad o exekúciách",
      "prehľad veriteľov a dlhov, hoci neúplný",
      "list vlastníctva alebo iný údaj o bývaní a majetku",
      "doklad o príjme",
    ],
    submit: "Chcem posúdenie zadarmo",
  },

  faq: [
    {
      q: "Ako dlho konkurz fyzickej osoby trvá?",
      a: "Zákon pevnú dĺžku neurčuje, určuje len jednotlivé lehoty. Súd o návrhu rozhodne do 15 dní (§ 167a ods. 1 ZKR), veritelia sa prihlasujú v základnej lehote 45 dní (§ 167l ods. 3) a rozvrh výťažku správca nepripraví skôr než 60 dní od vyhlásenia konkurzu (§ 167u ods. 1). Ak majetok nepokryje ani náklady konkurzu, správca zverejní oznámenie o ukončení konkurzu bez zbytočného odkladu, nie však skôr, než uplynie základná prihlasovacia lehota (§ 167v ods. 1). Pri speňažovaní nehnuteľnosti alebo pri sporoch o súpis trvá konanie dlhšie.",
    },
    {
      q: "Bude správca siahať aj na moju mzdu po vyhlásení konkurzu?",
      a: "Zákon viaže konkurznú podstatu na deň vyhlásenia konkurzu: patrí do nej majetok, ktorý ste mali k tomuto dňu, a výťažok z jeho správy a speňaženia (§ 167h ods. 1 ZKR). Príjem za prácu vykonanú po vyhlásení konkurzu medzi majetok podliehajúci konkurzu neuvádza. Dlhy, ktoré oddlženie necháva nedotknuté — napríklad výživné na dieťa — však platíte ďalej (§ 166c). A pri nie nepatrnom dedičstve, dare alebo výhre zákon spája poctivý zámer s tým, že aspoň polovicu dobrovoľne ponúknete veriteľom (§ 166g ods. 1).",
    },
    {
      q: "Kto je správca a môžem si ho vybrať?",
      a: "Nemôžete — správcu ustanovuje súd náhodným výberom (§ 166j ods. 1 ZKR). Správca preskúma vaše pomery, spíše majetok, speňaží ho a výťažok rozdelí veriteľom; vo veciach majetku podliehajúceho konkurzu koná vo vašom mene a na váš účet (§ 167b ods. 1). Na úvodnom stretnutí vás musí podrobne poučiť o povinnostiach a následkoch ich nesplnenia (§ 166i ods. 3). Jeho odmena sa hradí z preddavku a z výťažku zo speňaženia (§ 166j ods. 5). Súčinnosť so správcom je jedným z meradiel poctivého zámeru, preto ju odporúčame poskytovať preukázateľne.",
    },
    {
      q: "Ako sa speňažuje obydlie a môže ho rodina vykúpiť?",
      a: "Obydlie možno speňažiť len dražbou — a vôbec nie, ak by výťažok po odpočítaní nepostihnuteľnej hodnoty nepokryl náklady speňaženia a aspoň sčasti pohľadávky prihlásených veriteľov (§ 167o ods. 1 a 2 ZKR). Ak k speňaženiu dôjde, sumu nepostihnuteľnej hodnoty správca poukáže na osobitný účet dlžníka, ktorý je 36 mesiacov chránený pred exekúciou a z ktorého možno mesačne vyberať do sumy určenej nariadením vlády (§ 167o ods. 3 až 5). Príbuzný v priamom rade, súrodenec, manžel, bývalý manžel, spoluvlastník nehnuteľnosti alebo obec môže s vaším súhlasom majetok z podstaty vykúpiť za cenu podľa znaleckého posudku; ak obydlie vykupuje niekto z rodiny alebo spoluvlastník, nepostihnuteľná hodnota sa započíta na kúpnu cenu (§ 167r ods. 1, 3 a 4).",
    },
    {
      q: "Za môj úver ručí príbuzný. Pomôže oddlženie aj jemu?",
      a: "Nie. Pohľadávka, ktorá sa oddlžením stane nevymáhateľnou voči vám, zostáva vymáhateľná voči ručiteľovi alebo inej osobe, ktorá ju zabezpečuje (§ 166e ods. 3 ZKR). Ručiteľ, ktorý za vás bude plniť, môže svoju budúcu pohľadávku voči vám uplatniť len v konkurze prihláškou (§ 166a ods. 1 písm. b) a ods. 2). S ručiteľom je preto vhodné hovoriť ešte pred podaním návrhu.",
    },
    {
      q: "Čo ak v zozname veriteľov na niekoho zabudnem?",
      a: "Oddlženie sa vzťahuje na pohľadávky bez ohľadu na to, či boli do konkurzu prihlásené (§ 166e ods. 2 ZKR). Výnimkou je veriteľ — fyzická osoba, ktorý sa neprihlásil preto, že ho správca o konkurze písomne neupovedomil: jeho pohľadávka ostáva nedotknutá (§ 166c ods. 1 písm. a)). Správca pritom upovedomuje veriteľov podľa zoznamu, ktorý ste zostavili vy (§ 167l ods. 4). Neuvedenie veriteľa — fyzickej osoby, o ktorom ste vedeli, navyše zákon radí medzi prejavy nepoctivého zámeru; na drobných veriteľov sa neprihliada (§ 166g ods. 2 písm. b)).",
    },
  ],

  relatedServiceId: "insolvencie",
  relatedServiceLabel: "Insolvencie a reštrukturalizácie",
};
