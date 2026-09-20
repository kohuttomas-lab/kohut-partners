import type { IntlContent } from "./types";

// Maďarský preklad doménového obsahu (služby, balíky, tím, kancelária, meta).
// Preložené z anglických vetiev `en` v src/lib/content.ts — 20. 9. 2026.
// Kancelária komunikuje po anglicky a po slovensky; text nikde netvrdí opak.
export const hu: IntlContent = {
  services: {
    insolvencie: {
      name: "Fizetésképtelenség és szerkezetátalakítás Szlovákiában",
      tagline: "Hitelezővédelem és cégmentés a szlovák jog szerint.",
      summary:
        "Társaságokat és külföldi hitelezőket kísérünk végig a szlovák fizetésképtelenségi eljárásokon: védjük a követeléseket, segítjük az életképes vállalkozások megmentését, és ha a megmentés nem lehetséges, gondoskodunk a rendezett kivezetésről.",
      solve: [
        "Külföldi hitelezők képviselete szlovák csődeljárásokban (konkurz) és szerkezetátalakítási eljárásokban",
        "Hitelezői követelések bejelentése a szlovák csődgondnoknál a törvényi határidőn belül",
        "Szerkezetátalakítás és helyreállítási tervek a szlovák jog szerint",
        "Szlovák társaságok csődeljárása és végelszámolása",
        "Tárgyalások szlovák bankokkal és hitelezőkkel",
      ],
      faq: [
        [
          "Szlovák adósom csődbe ment – mi a teendő?",
          "A követeléseket szigorú törvényi határidőn belül kell bejelenteni a szlovák csődgondnoknál, különben a jogai jelentősen csorbulnak. Küldje el az alapadatokat – a követelést bejelentjük, és az egész eljárás során képviseljük Önt.",
        ],
        [
          "Mikor kell a szerkezetátalakítással foglalkozni?",
          "Ideális esetben azonnal, amint a társaságnak nehézséget okoz esedékes kötelezettségeinek teljesítése. Minél korábban lép, annál több megmentési lehetőséget hagy nyitva a szlovák jog.",
        ],
      ],
    },
    obchod: {
      name: "Vállalkozás Szlovákiában",
      tagline: "Cégalapítás, szerződések és társasági jog – a szlovák jog szerint.",
      summary:
        "A szlovák s.r.o. (a szlovák kft.) külföldi alapítók számára történő alapításától a szlovák jog hatálya alá tartozó kereskedelmi szerződéseken át a társasági változásokig és a szlovák társaságok jogi átvilágításáig (due diligence).",
      solve: [
        "Szlovák társaságok (s.r.o., a.s.) alapítása külföldi alapítóknak – teljes egészében távolról",
        "A szlovák jog hatálya alá tartozó kereskedelmi szerződések elkészítése vagy átnézése, angolul vagy szlovákul",
        "Társasági jogi tanácsadás és a tagok közötti viszonyok szlovák társaságokban",
        "Polgári jogi szerződések, tulajdonjog és kötelmek a szlovák jog szerint",
        "Szlovák társaságok és felvásárlások jogi átvilágítása (due diligence)",
      ],
      faq: [
        [
          "Lehet külföldi egy szlovák s.r.o. tulajdonosa és vezetője?",
          "Igen – külföldi magánszemélyek és társaságok is lehetnek szlovák s.r.o. tulajdonosai. Az EU-n/OECD-n kívülről érkező ügyvezetőkre további tartózkodási követelmények vonatkozhatnak. Ellenőrizzük az Ön helyzetét, és a teljes alapítást távolról, meghatalmazás alapján intézzük.",
        ],
        [
          "Meg tudják alapítani a társaságot úgy, hogy nem utazom Szlovákiába?",
          "Igen. 2026. augusztus 17-től a társasági szerződést vagy az alapító okiratot közjegyzői okiratba vagy ügyvéd által autorizált (ellenjegyzett) okiratba kell foglalni (a Kereskedelmi Törvénykönyv 57. §-a). Az okiratokat elkészítjük és ügyvédként autorizáljuk, benyújtjuk a bejegyzési kérelmet, és elintézzük az iparengedélyeket (živnosť). Ha nem tud személyesen megjelenni, az alapító dokumentumot Ön helyett meghatalmazott írja alá, hatóságilag hitelesített aláírással ellátott meghatalmazás alapján (57. § (2) bekezdés) – az aláírást külföldön közjegyző hitelesíti, és szükség esetén apostille-jal látják el vagy felülhitelesítik.",
        ],
      ],
    },
    nehnutelnosti: {
      name: "Ingatlanok Szlovákiában",
      tagline: "Szlovákiai ingatlan vétele, eladása és bérbeadása – biztonságosan.",
      summary:
        "Adásvételi és bérleti szerződések, a szlovák ingatlan-nyilvántartás (kataster) és ingatlanfejlesztési projektek. Gondoskodunk arról, hogy a pénze védve legyen, a tulajdonjogát pedig szabályszerűen bejegyezzék.",
      solve: [
        "Ingatlanvásárlás külföldi vevőknek – szerződések, a tulajdonjog ellenőrzése, letét",
        "Beadványok a szlovák ingatlan-nyilvántartáshoz (kataster) és a tulajdonjog bejegyzése",
        "Bérleti szerződések bérbeadóknak és bérlőknek a szlovák jog szerint",
        "Ingatlanfejlesztési projektek és építkezés Szlovákiában",
        "Szolgalmi jogok, zálogjogok, közös tulajdon és ingatlanjogi viták",
      ],
      faq: [
        [
          "Vásárolhat külföldi ingatlant Szlovákiában?",
          "Igen – az uniós, valamint a legtöbb más külföldi állampolgár és társaság szerezhet szlovákiai ingatlant, szűk körű kivételekkel (pl. egyes mezőgazdasági és erdőterületek). Az ingatlan-nyilvántartásban ellenőrizzük a tulajdonjogot, és az adásvételt biztonságosan építjük fel.",
        ],
        [
          "Hogyan védik meg a pénzemet a vásárláskor?",
          "Közjegyzői vagy ügyvédi letétet alkalmazunk – a pénz csak azután kerül az eladóhoz, hogy az Ön tulajdonjogát bejegyezték a szlovák ingatlan-nyilvántartásba.",
        ],
      ],
    },
    spory: {
      name: "Peres képviselet szlovák bíróságok előtt",
      tagline: "Ha nem születik megállapodás, Szlovákiában kiállunk Ön mellett.",
      summary:
        "Külföldi ügyfeleket képviselünk polgári és kereskedelmi jogvitákban a szlovák bíróságok előtt – a fizetési felszólítástól és a fizetési meghagyástól a végrehajtásig. Először mindig mérlegeljük a gyorsabb, peren kívüli utat is.",
      solve: [
        "Követelésbehajtás szlovák adósokkal szemben – fizetési felszólítás, fizetési meghagyás, végrehajtás",
        "Képviselet szlovák bíróságok előtt polgári és kereskedelmi jogvitákban",
        "Külföldi ítéletek és választottbírósági ítéletek végrehajtása Szlovákiában",
        "Peren kívüli egyezségek, kártérítés és jogalap nélküli gazdagodás",
        "Ideiglenes intézkedések és vagyonvédelem Szlovákiában",
      ],
      faq: [
        [
          "Szlovákiába kell utaznom a peres ügyem miatt?",
          "A legtöbb polgári és kereskedelmi ügyben meghatalmazás alapján járunk el, és az Ön személyes jelenlétére nincs szükség. Ha a bíróság az Ön meghallgatását kéri, felkészítjük, és megszervezzük a gyakorlati részleteket.",
        ],
        [
          "Mennyi ideig tart egy követelés behajtása Szlovákiában?",
          "Egy nem vitatott számla ügyében heteken belül végrehajtható szlovák fizetési meghagyás születhet; a vitatott ügyek tovább tartanak. A konzultáción reális becslést és fix díjat kap.",
        ],
      ],
    },
    trestne: {
      name: "Büntetőjogi védelem Szlovákiában",
      tagline: "Védelem és az Ön jogainak oltalma a szlovák büntetőeljárásban.",
      summary:
        "Magánszemélyeket és társaságokat – külföldi állampolgárokat is – védünk a szlovák büntetőeljárásban, az első kihallgatástól a főtárgyalásig. Sértetteket is képviselünk. Gyorsan, diszkréten, ítélkezés nélkül.",
      solve: [
        "Külföldi állampolgárok védelme a szlovák büntetőeljárásban",
        "Segítség a rendőrségi kihallgatáson és a letartóztatásról döntő bírósági meghallgatáson",
        "Gazdasági és adóbűncselekmények a szlovák jog szerint",
        "Sértettek képviselete és kártérítési igényeik érvényesítése",
        "Feljelentések, fellebbezések és egyéb jogorvoslatok",
      ],
      faq: [
        [
          "Nem beszélek szlovákul – milyen jogaim vannak?",
          "A szlovák büntetőeljárás egész ideje alatt joga van tolmácshoz, és a legelejétől kezdve védőhöz. Önnel angolul kommunikálunk, és védjük Önt a szlovák hatóságok előtt – hívjon fel minket, mielőtt vallomást tesz.",
        ],
        [
          "Sértetteket is képviselnek?",
          "Igen. Segítünk a kártérítési igény érvényesítésében a szlovák eljárásban, és Ön helyett figyelemmel kísérjük az ügyet.",
        ],
      ],
    },
    it: {
      name: "IT, adatvédelem és GDPR Szlovákiában",
      tagline: "Technológiai jog a szlovák és az uniós szabályok szerint.",
      summary:
        "GDPR-megfelelés a szlovákiai működéshez, webáruház-feltételek a szlovák fogyasztóvédelmi jog szerint, szoftver- és SaaS-szerződések. Segítünk a technológiai cégeknek, hogy Szlovákiában joghézagok nélkül vállalkozhassanak.",
      solve: [
        "GDPR-megfelelés szlovák társaságoknak és webáruházaknak",
        "Webáruházak szerződési feltételei a szlovák fogyasztóvédelmi jog szerint",
        "A szlovák jog hatálya alá tartozó szoftver-, licenc- és SaaS-szerződések",
        "Szellemi tulajdon és védjegyek Szlovákiában",
        "Szerződések Szlovákiában működő IT-beszállítóknak és startupoknak",
      ],
      faq: [
        [
          "Online értékesítünk szlovák vásárlóknak – milyen dokumentumokra van szükségünk?",
          "A szlovák fogyasztóvédelmi jog a szlovák szabályokhoz igazított általános szerződési feltételeket, reklamációs szabályzatot és GDPR-dokumentációt ír elő. Ezeket az Ön webáruházára szabva készítjük el – szlovák nyelven, az Ön számára angol munkaváltozattal.",
        ],
        [
          "Foglalkoznak startup- és befektetői szerződésekkel is?",
          "Igen – befektetési szerződések, vesting és szindikátusi (tagi) megállapodások szlovák társaságok számára, a szlovák jog szerint elkészítve.",
        ],
      ],
    },
  },
  packages: {
    "ins-analyza": [
      "Fizetésképtelenségi kockázat elemzése",
      "Felmérjük a társaság helyzetét, és 5 napon belül javaslatot teszünk a további lépésekre.",
    ],
    "ins-prihlaska": [
      "Követelés bejelentése",
      "A követelésbejelentés elkészítése és benyújtása a csődeljárásban (konkurz) a hitelező nevében.",
    ],
    "ob-zivnost": [
      "Iparengedély (živnosť)",
      "A tevékenységi körök besorolása, elektronikus bejelentés, valamint bejelentkezés az adóhivatalnál és az egészségbiztosítónál. A szabad iparűzési tevékenységek elektronikus bejelentése díjmentes; a kézműves és a képesítéshez kötött tevékenységekre a díjszabás szerinti illeték vonatkozik.",
    ],
    "ob-sro": [
      "Kulcsrakész s.r.o.-alapítás",
      "Ügyvéd által autorizált (ellenjegyzett) alapító dokumentumok – 2026. augusztus 17-től kötelező forma –, bejegyzés a cégjegyzékbe és az iparengedélyek intézése. A 220 € összegű bírósági illetéket külön kell megfizetni.",
    ],
    "ob-revizia": [
      "Szerződés felülvizsgálata",
      "Átnézzük a szerződést, és még az aláírás előtt felhívjuk a figyelmét a kockázatokra.",
    ],
    "ob-zmluva": [
      "Egyedi szerződés",
      "Bármilyen üzleti vagy magánjogi szerződés az Ön esetére szabva.",
    ],
    "nh-kupna": [
      "Ingatlan-adásvételi szerződés + bejegyzési kérelem",
      "Ügyvéd által autorizált (ellenjegyzett) szerződés – az aláírások hitelesítése nélkül –, valamint elektronikus bejegyzési kérelem az ingatlan-nyilvántartáshoz (kataster).",
    ],
    "nh-najom": ["Bérleti szerződés", "Biztonságos bérleti szerződés, amely mindkét felet védi."],
    "sp-vyzva": [
      "Fizetési felszólítás",
      "A felszólítás elkészítése és elküldése az adósnak – gyakran ez is elég ahhoz, hogy fizessen.",
    ],
    "sp-zaloba": [
      "Fizetési meghagyás iránti kérelem",
      "Fizetési meghagyás kibocsátása iránti kérelem az elektronikus fizetési meghagyásos eljárásban – a leggyorsabb út a végrehajtható okirathoz. A bírósági illetéket külön kell megfizetni.",
    ],
    "tr-obhajoba": [
      "Védelem a kihallgatáson",
      "Ügyvéd jelenléte a kihallgatáson és azonnali jogi segítség.",
    ],
    "tr-oznamenie": [
      "Feljelentés",
      "Feljelentés elkészítése és benyújtása a rendőrségen vagy az ügyészségen.",
    ],
    "it-gdpr": [
      "GDPR-dokumentáció",
      "Az Ön vállalkozására szabott szabályzatok és hozzájárulási nyilatkozatok csomagja.",
    ],
    "it-eshop": [
      "Webáruház-dokumentumok",
      "Általános szerződési feltételek, reklamációs szabályzat és adatkezelési tájékoztató.",
    ],
  },
  team: {
    1: [
      "Tomáš Kohút",
      "ügyvezető partner",
      "Fizetésképtelenségi jog · társasági jog · ingatlanjog és ingatlanfejlesztés",
    ],
    2: ["Pavol", "ügyvéd", "Fizetésképtelenségi jog · közigazgatási jog · polgári perek"],
    3: ["Jakub", "ügyvéd", "Büntetőjog · társasági ügyek · fizetésképtelenségi jog"],
    4: ["Dominika", "együttműködő ügyvéd", "Egészségügyi jog · családjog"],
    5: ["Lucia", "ügyvédi asszisztens"],
    6: ["Eva", "könyvelő"],
    7: ["Katarína", "könyvelő"],
    8: ["Ingrid", "irodavezető"],
  },
  teamBio: {
    1: "20 év jogi gyakorlat (2006 óta). Személyesen vezeti a legösszetettebb fizetésképtelenségi és társasági jogi ügyeket, és minden nagyobb ügyet felügyel. Bejegyzett tagja a Szlovák Ügyvédi Kamarának (3901. sz.), és szerepel a Szlovák Köztársaság Igazságügyi Minisztériuma által vezetett csődgondnoki névjegyzékben.",
  },
  office: { city: "Zvolen", address: "Námestie SNP 74/28, 960 01 Zvolen, Szlovák Köztársaság" },
  meta: {
    title: "kohút & partners – szlovák ügyvédi iroda | Zvolen, Szlovákia",
    description:
      "Szlovák ügyvédi iroda külföldi ügyfeleknek: ingatlan, cégalapítás, követelésbehajtás, fizetésképtelenség és peres ügyek – kizárólag a szlovák jog szerint.",
    ogLocale: "hu_HU",
    ogHeadline: "Jogbiztonság az üzletben és az életben.",
    ogTagline: "Ügyvédi iroda · Zvolen",
  },
};
