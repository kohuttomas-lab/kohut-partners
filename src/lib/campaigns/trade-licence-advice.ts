import type { CampaignData } from "./types";

/**
 * Živnosť alebo s.r.o.? — PRÁVNE PORADENSTVO pri voľbe a zmene formy podnikania.
 * Slug /zivnost-alebo-sro. Stránka zámerne nepredáva úradný úkon (Google Ads — úradné
 * služby): ohlásenie živnosti rieši /zalozenie-zivnosti (49 €), zápis s.r.o. /zalozenie-sro
 * (299 € + súdny poplatok); tu sa na ne len slovne odkazuje, poplatky sa neuvádzajú sumou.
 * Žiadne daňové ani odvodové sadzby — odkaz na účtovníka / daňového poradcu.
 * Overené proti knižnici KoP_LegalContext (ŽZ a ObchZ v znení od 17. 8. 2026, ZP od 1. 9. 2026):
 * - ŽZ § 2 (vlastné meno a zodpovednosť), § 5 ods. 3 (zahraničná osoba), § 6 ods. 1 a 3,
 *   § 7 ods. 1 a 2, § 8 ods. 1, 4, 5 (prekážky), § 10 ods. 1 a 8 (vznik, neprenosnosť),
 *   § 11 ods. 1, 5, 6, 7, 9, 10 (zodpovedný zástupca), § 19 – § 25 (druhy živností),
 *   § 57 ods. 1 písm. f), g), ods. 3 – 5 (zánik, pozastavenie), § 58 ods. 2 písm. b)
 *   (4 roky), § 63, § 64 (pokuty — sumy sa v texte neuvádzajú).
 * - ObchZ § 21, § 56 ods. 1, § 59 ods. 3 a 4 (vklad podniku), § 105b ods. 1, § 106 (ručenie),
 *   § 135a ods. 1, 2, 5 (konateľ), § 476, § 477 ods. 1 a 3, § 480 (predaj podniku).
 * - OZ § 147 ods. 1, § 148a ods. 1 (BSM), § 524 ods. 1 (postúpenie), § 531 ods. 1 (prevzatie dlhu).
 * - ZP § 28 ods. 1, § 29 ods. 1, § 29a (prechod práv a povinností).
 * Pozn.: § 57 ŽZ v aktuálnom znení už neobsahuje ods. 6 (min./max. doba pozastavenia) —
 * dĺžka pozastavenia sa preto v texte neuvádza. § 105a ObchZ v aktuálnom znení nie je.
 * ⚖ KONTROLA: veta „živnostník zodpovedá celým majetkom vrátane osobného“ je vyvodená
 *   z § 2 ŽZ / § 2 ods. 1 ObchZ a § 147 OZ (nie je doslovným textom zákona).
 * ⚖ KONTROLA: prekážka podľa § 8 ods. 1 ŽZ („zrušený konkurz“) — zjednodušené na „spravidla
 *   tri roky“; overiť, či sa v praxi úradov vzťahuje aj na oddlženie konkurzom fyzickej osoby.
 * ⚖ KONTROLA: relatedServiceLabel — služba „obchod“ sa v content.ts volá „Obchodné a občianske
 *   právo“; staršie kampane používajú „Obchodné právo a firemná agenda“. Zjednotiť.
 */
export const tradeLicenceAdvice: CampaignData = {
  id: "trade-licence-advice",
  pathname: "/trade-licence-advice",
  group: "situacie",

  meta: {
    title: "Živnosť alebo s.r.o.? Právne poradenstvo k forme podnikania | kohút & partners",
    description:
      "Živnosť alebo s.r.o.? Živnostník zodpovedá za záväzky celým majetkom, spoločník s.r.o. ručí len do výšky nesplateného vkladu (§ 106 ObchZ). Poradíme s voľbou formy, zodpovedným zástupcom, pozastavením živnosti aj prechodom na s.r.o. Konzultácia 50 € s DPH.",
  },

  hero: {
    overline: "Forma podnikania · právne poradenstvo · celá SR",
    h1: "Živnosť alebo s.r.o.? Rozdiel je v tom, čím ručíte",
    lead: "Živnostník podniká vo vlastnom mene a na vlastnú zodpovednosť — za záväzky z podnikania zodpovedá celým svojím majetkom vrátane osobného. Spoločník s.r.o. ručí za záväzky spoločnosti len do výšky svojho nesplateného vkladu zapísaného v obchodnom registri (§ 106 Obchodného zákonníka). Ktorá forma je vhodná pre vás, závisí od rizika činnosti, zmlúv a plánov.",
    paragraphs: [
      "Poskytujeme právne poradenstvo: prejdeme vašu činnosť, zmluvy a riziká a povieme vám, čo z nich pre voľbu formy vyplýva — vrátane toho, či vaše činnosti patria medzi voľné, remeselné alebo viazané živnosti a či budete potrebovať zodpovedného zástupcu. Nie sme úrad ani jeho sprostredkovateľ; podania voči živnostenskému úradu si môžete urobiť aj sami.",
      "Daňovú a odvodovú stránku rozhodnutia neposudzujeme — tú odporúčame prejsť s účtovníkom alebo daňovým poradcom. Právna a daňová odpoveď sa pritom nemusia zhodovať, preto je dobré poznať obe skôr, než sa rozhodnete. Poradenstvo poskytujeme aj na diaľku pre klientov z celého Slovenska.",
    ],
    cta: "Chcem poradiť s formou podnikania",
  },

  reasons: {
    overline: "Na čom rozhodnutie stojí",
    heading: "Štyri právne otázky pred voľbou formy",
    lead: "Rozhodovanie sa zvyčajne zúži na dane a odvody. Právne rozdiely medzi živnosťou a s.r.o. sú pritom trvalejšie než sadzby, ktoré sa menia každý rok.",
    items: [
      {
        title: "Čím ručíte",
        desc: "Živnosť je činnosť prevádzkovaná vo vlastnom mene a na vlastnú zodpovednosť (§ 2 živnostenského zákona) — majetok živnostníka sa nedelí na „firemný“ a „súkromný“. Pohľadávku veriteľa jedného z manželov vzniknutú za trvania manželstva možno pri výkone rozhodnutia uspokojiť aj z bezpodielového spoluvlastníctva (§ 147 ods. 1 Občianskeho zákonníka). Pri s.r.o. zodpovedá za záväzky spoločnosť celým svojím majetkom a spoločník ručí len do výšky nesplateného vkladu (§ 106 ObchZ).",
      },
      {
        title: "S.r.o. nie je bez osobného rizika",
        desc: "Konateľ musí konať s odbornou starostlivosťou a za škodu spôsobenú porušením povinností zodpovedá spoločnosti; ak veriteľ nemôže uspokojiť pohľadávku z majetku spoločnosti, môže tento nárok uplatniť vo vlastnom mene (§ 135a ods. 1, 2 a 5 ObchZ). Obmedzené ručenie sa netýka ani záväzkov, za ktoré sa spoločník či konateľ osobne zaručí — napríklad pri úvere.",
      },
      {
        title: "Podmienky a druh živnosti",
        desc: "Všeobecnými podmienkami sú vek 18 rokov, spôsobilosť na právne úkony a bezúhonnosť (§ 6 ods. 1 ŽZ); pri remeselných a viazaných živnostiach aj odborná spôsobilosť (§ 7 a § 19 ŽZ). Pri s.r.o. musí všeobecné podmienky spĺňať štatutárny orgán a osobitné zodpovedný zástupca (§ 6 ods. 3 a § 7 ods. 2 ŽZ). Prevádzkovanie činnosti bez oprávnenia zákon postihuje pokutou (§ 63 a § 64 ŽZ).",
      },
      {
        title: "Prekážky, o ktorých treba vedieť vopred",
        desc: "Prekážkou živnosti je najmä konkurz — spravidla tri roky po jeho zrušení — a zákaz činnosti, kým trvá (§ 8 ods. 1 a 5 ŽZ); prekážku konkurzu môže živnostenský úrad za zákonných podmienok odpustiť (§ 8 ods. 4 ŽZ). S.r.o. zasa nemôže založiť osoba vedená v zozname daňových dlžníkov, s nedoplatkami na sociálnom poistení alebo vedená ako povinný v registri poverení na vykonanie exekúcie; výnimky upravuje § 105b ObchZ.",
      },
    ],
  },

  scope: {
    overline: "Rozsah",
    heading: "S čím vám poradíme",
    lead: "Osobitnou kapitolou je živnosť zahraničnej osoby: môže ju v zásade prevádzkovať za rovnakých podmienok ako slovenská osoba (§ 5 ods. 3 ŽZ), fyzickej osobe s bydliskom mimo EÚ, EHP a OECD, ktorá nemá na Slovensku pobyt, však oprávnenie vzniká najskôr dňom udelenia povolenia na pobyt (§ 10 ods. 1 ŽZ) a uplynutím alebo zrušením pobytu zaniká (§ 57 ods. 1 písm. f) ŽZ).",
    items: [
      "Voľba medzi živnosťou a s.r.o. podľa rizika činnosti, zmlúv a majetkových pomerov",
      "Zatriedenie činností — voľná, remeselná alebo viazaná živnosť (§ 19 – § 25 ŽZ)",
      "Zodpovedný zástupca — kedy je povinný a aký vzťah s ním musíte mať (§ 11 ŽZ)",
      "Prekážky prevádzkovania živnosti a možnosť ich odpustenia (§ 8 ŽZ)",
      "Pozastavenie, ukončenie a zrušenie živnosti (§ 57 a § 58 ŽZ)",
      "Prechod zo živnosti na s.r.o. — zmluvy, pohľadávky, záväzky, zamestnanci",
      "Podnikanie manželov a bezpodielové spoluvlastníctvo (§ 147 a § 148a OZ)",
      "Živnosť zahraničnej osoby — pobyt a zodpovedný zástupca (§ 5 ods. 3 a § 11 ods. 7 ŽZ, § 21 ObchZ)",
    ],
  },

  steps: [
    {
      title: "Opis situácie",
      desc: "Napíšete nám, čomu sa venujete alebo plánujete venovať, s kým uzatvárate zmluvy a čo chcete dosiahnuť. Ozveme sa do jedného pracovného dňa.",
    },
    {
      title: "Konzultácia s advokátom",
      desc: "Na 30-minútovej konzultácii prejdeme ručenie, podmienky živnosti, zodpovedného zástupcu a riziká vašich zmlúv. Dostanete vecné odporúčanie — aj vtedy, ak znie „zostaňte pri tom, čo máte“.",
    },
    {
      title: "Plán prechodu alebo zmeny",
      desc: "Ak meníte formu, pripravíme poradie krokov: čo urobiť so zmluvami, pohľadávkami, záväzkami a zamestnancami a kedy živnosť pozastaviť alebo ukončiť. Cenu za prípravu dokumentov poznáte vopred.",
    },
    {
      title: "Zmluvná dokumentácia",
      desc: "Pripravíme zmluvy potrebné na prechod — postúpenie pohľadávok, prevzatie dlhov, zmluvu o predaji podniku či dodatky s obchodnými partnermi. Na založenie živnosti alebo s.r.o. máme samostatné služby s vlastnými stránkami.",
    },
  ],

  deadline: {
    heading: "Oprávnenie sa nedá preniesť a nič neplatí spätne",
    body: "Živnostenské oprávnenie nemožno preniesť na inú osobu (§ 10 ods. 8 živnostenského zákona) — s.r.o. musí mať vlastné oprávnenie skôr, než začne činnosť vykonávať, a pri remeselných a viazaných živnostiach aj zodpovedného zástupcu (§ 11 ods. 6). Pozastavenie aj ukončenie živnosti pôsobí najskôr odo dňa nasledujúceho po doručení oznámenia živnostenskému úradu, nie spätne (§ 57 ods. 3 a 4). Ak živnosť bez pozastavenia neprevádzkujete dlhšie ako štyri roky, úrad môže oprávnenie zrušiť (§ 58 ods. 2 písm. b)). Pri prechode so zamestnancami ich treba písomne informovať najneskôr mesiac vopred (§ 29 ods. 1 Zákonníka práce) a ustanovenie či skončenie zodpovedného zástupcu oznámiť do 15 dní (§ 11 ods. 9). Poradie krokov sa preto oplatí naplánovať skôr, než podáte prvé oznámenie.",
  },

  pricing: {
    heading: "Koľko to stojí",
    lead: "Poradenstvo má cenu, ktorú poznáte vopred. Daňové a odvodové prepočty nerobíme — tie patria účtovníkovi alebo daňovému poradcovi.",
    items: [
      {
        label: "Konzultácia (30 min)",
        value: "50 € s DPH",
        desc: "Osobne, telefonicky alebo cez videohovor. Prejdeme ručenie, podmienky živnosti a právne riziká vašej situácie.",
      },
      {
        label: "Plán prechodu a zmluvná dokumentácia",
        value: "pevná cena vopred",
        desc: "Postúpenie pohľadávok, prevzatie dlhov, zmluva o predaji podniku, dodatky k zmluvám. Cenu určíme po konzultácii podľa rozsahu a potvrdíme písomne skôr, než začneme.",
      },
      {
        label: "Založenie živnosti",
        value: "49 € s DPH",
        desc: "Samostatná služba pre tých, ktorí sa rozhodnú pre živnosť — podrobnosti na stránke o založení živnosti. Správne poplatky pri remeselných a viazaných živnostiach sa platia v skutočnej výške.",
      },
      {
        label: "Založenie s.r.o. na kľúč",
        value: "299 € s DPH",
        desc: "Samostatná služba pre tých, ktorí sa rozhodnú pre s.r.o. — podrobnosti na stránke o založení s.r.o. Súdny poplatok za zápis do obchodného registra sa platí osobitne v skutočnej výške.",
      },
    ],
  },

  form: {
    title: "Napíšte nám, o čom sa rozhodujete",
    leads: [
      "Ozveme sa do jedného pracovného dňa a dohodneme termín konzultácie. Ak z vášho opisu vyplynie, že právne niet čo riešiť, povieme vám to rovno.",
      "Daňové a odvodové otázky si, prosím, prejdite s účtovníkom alebo daňovým poradcom — na konzultácii sa venujeme právnej stránke rozhodnutia.",
    ],
    fields: [
      { name: "currentForm", label: "Ako podnikáte teraz", placeholder: "napr. živnosť od 2019 / zatiaľ nepodnikám" },
      { name: "activity", label: "Čomu sa venujete", placeholder: "napr. stavebné práce, IT služby" },
      { name: "employees", label: "Máte zamestnancov?", placeholder: "napr. nie / 3 zamestnanci" },
    ],
    messageLabel: "O čom sa rozhodujete a čo vás na tom znepokojuje",
    subject: "Živnosť alebo s.r.o. — podklady ku konzultácii",
    documents: [
      "výpis zo živnostenského registra, ak už podnikáte",
      "najdôležitejšie zmluvy s odberateľmi a dodávateľmi",
      "prehľad úverov, lízingov a iných dlhodobých záväzkov",
      "zoznam zamestnancov a druh ich zmlúv, ak nejakých máte",
    ],
    submit: "Chcem konzultáciu",
  },

  faq: [
    {
      q: "Ručí živnostník naozaj celým majetkom?",
      a: "Áno. Živnosť je činnosť prevádzkovaná vo vlastnom mene a na vlastnú zodpovednosť (§ 2 ŽZ) a zákon majetok živnostníka na podnikateľský a súkromný nerozdeľuje. Záväzky z podnikania navyše nezanikajú pozastavením ani ukončením živnosti. Ak žijete v manželstve, pohľadávku veriteľa možno pri výkone rozhodnutia uspokojiť aj z majetku v bezpodielovom spoluvlastníctve manželov (§ 147 ods. 1 OZ); na použitie spoločného majetku pri začatí podnikania je potrebný súhlas druhého manžela (§ 148a ods. 1 OZ).",
    },
    {
      q: "Znamená s.r.o., že osobne neručím za nič?",
      a: "Nie celkom. Spoločník ručí za záväzky spoločnosti do výšky svojho nesplateného vkladu zapísaného v obchodnom registri (§ 106 ObchZ) — po splatení vkladu teda ako spoločník za dlhy spoločnosti neručí. Konateľ však zodpovedá za škodu, ktorú spoločnosti spôsobí porušením svojich povinností, a tento nárok môže za zákonných podmienok uplatniť aj veriteľ spoločnosti (§ 135a ods. 2 a 5 ObchZ). Obmedzené ručenie sa netýka ani záväzkov, za ktoré sa osobne zaručíte.",
    },
    {
      q: "Ako prebieha prechod zo živnosti na s.r.o.?",
      a: "S.r.o. je samostatná právnická osoba (§ 56 ods. 1 ObchZ); živnostenské oprávnenie sa na ňu preniesť nedá (§ 10 ods. 8 ŽZ) a zmluvy živnostníka na ňu samy neprechádzajú. Pohľadávky možno postúpiť písomnou zmluvou aj bez súhlasu dlžníka (§ 524 ods. 1 OZ), na prevzatie dlhu je potrebný súhlas veriteľa (§ 531 ods. 1 OZ). Alternatívou je zmluva o predaji podniku alebo vklad podniku do spoločnosti — vtedy prechádzajú práva aj záväzky bez súhlasu veriteľov, živnostník však za splnenie prevedených záväzkov ručí (§ 59 ods. 4, § 476 a § 477 ObchZ). Ktorá cesta je vhodná, závisí od počtu zmlúv a od toho, čo v nich stojí.",
    },
    {
      q: "Čo bude pri prechode s mojimi zamestnancami?",
      a: "Ak sa na s.r.o. prevádza podnik alebo jeho časť ako hospodárska jednotka, práva a povinnosti z pracovnoprávnych vzťahov prechádzajú na preberajúceho zamestnávateľa (§ 28 ods. 1 Zákonníka práce, § 480 ObchZ) — pracovné pomery pokračujú s novým zamestnávateľom. Zamestnancov alebo ich zástupcov treba písomne informovať najneskôr mesiac pred prechodom (§ 29 ods. 1 ZP). Ak by sa zamestnancovi prevodom zásadne zmenili pracovné podmienky a nesúhlasí s tým, pracovný pomer sa považuje za skončený dohodou a patrí mu odstupné (§ 29a ZP).",
    },
    {
      q: "Kedy potrebujem zodpovedného zástupcu?",
      a: "Zodpovedný zástupca je fyzická osoba, prostredníctvom ktorej podnikateľ zabezpečuje odborné vykonávanie činnosti (§ 11 ods. 1 ŽZ). S.r.o. ho musí ustanoviť, ak prevádzkuje remeselnú alebo viazanú živnosť (§ 11 ods. 6); živnostník pri takej živnosti vtedy, ak sám nespĺňa odbornú spôsobilosť alebo ju spĺňa, ale nemá bydlisko či oprávnenie na pobyt na Slovensku (§ 11 ods. 7). Musí byť k podnikateľovi v pracovnom pomere — okrem manžela, príbuzného v priamom rade či súrodenca a pri právnickej osobe jej spoločníka alebo člena (§ 11 ods. 1) — a funkciu môže vykonávať len v jednej prevádzkarni, ak úrad nepovolí výnimku (§ 11 ods. 5). Ak skončí, nového treba ustanoviť do 15 dní (§ 11 ods. 10).",
    },
    {
      q: "Je lepšie živnosť pozastaviť, alebo ukončiť?",
      a: "Pozastavenie oznamujete živnostenskému úradu a jeho účinky nastávajú najskôr dňom nasledujúcim po doručení oznámenia; uplynutím oznámenej doby pozastavenia oprávnenie opäť nadobudnete (§ 57 ods. 4 a 5 ŽZ). Pri ukončení podnikania oprávnenie zaniká dňom uvedeným v oznámení, najskôr však dňom nasledujúcim po jeho doručení (§ 57 ods. 1 písm. g) a ods. 3 ŽZ). Ani jedno nepôsobí spätne a ani jedno nemení vaše existujúce záväzky voči veriteľom. Čo je výhodnejšie z pohľadu daní a odvodov, prejdite s účtovníkom alebo daňovým poradcom.",
    },
  ],

  relatedServiceId: "obchod",
  relatedServiceLabel: "Obchodné a občianske právo",
};
