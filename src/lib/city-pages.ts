import type { Locale } from "@/i18n/routing";

/* ============================================================
   Local-SEO city landing pages (/advokat-{mesto}).
   Slovak is the ranking target ("advokát {mesto}"); English is
   a short courtesy version. Content written 2026-08-02 —
   court-district facts reflect the 2023 judicial-map reform.
   ============================================================ */

export interface CityFaq { q: string; a: string }
export interface CitySection { heading: string; paragraphs: string[] }
export interface CityContent {
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string[];
  sections: CitySection[];
  faq: CityFaq[];
}

export interface CityPageData {
  id: string;
  pathname:
    | "/lawyer-zvolen"
    | "/lawyer-detva"
    | "/lawyer-krupina"
    | "/lawyer-banska-bystrica"
    | "/lawyer-ziar-nad-hronom";
  name: string;
  sk: CityContent;
  en: CityContent;
}

export const CITY_PAGES: Record<string, CityPageData> = {
  "zvolen": {
    id: "zvolen",
    pathname: "/lawyer-zvolen",
    name: "Zvolen",
    sk: {
          "metaTitle": "Advokát Zvolen – kohút & partners, Námestie SNP",
          "metaDescription": "Advokát Zvolen – kancelária kohút & partners priamo na Námestí SNP. Pevná cena vopred, odpoveď do 24 hodín. Objednajte sa online alebo na +421 907 823 239.",
          "h1": "Advokát Zvolen – právna pomoc priamo na Námestí SNP",
          "intro": [
                "Hľadáte advokáta vo Zvolene, ktorý vám právo vysvetlí ľudsky a cenu povie skôr, než sa do čohokoľvek pustíte? Advokátska kancelária kohút & partners sídli priamo na Námestí SNP 74/28, v samom centre mesta – od Okresného súdu Zvolen nás delí pár minút pešej chôdze. Za 20 rokov praxe sme vyriešili viac ako 2 400 prípadov a celý čas sa držíme jednoduchých pravidiel: klient má vopred vedieť, koľko ho právna pomoc bude stáť, čo ho čaká a kedy sa mu ozveme.",
                "Vo Zvolene nie sme na návšteve – tu pracujeme každý deň. Poznáme miestny súd, kataster aj úrady, a keď treba, sme na pojednávaní alebo na osobnom stretnutí do niekoľkých minút. Napíšte nám na klienti@tkak.sk alebo zavolajte na +421 907 823 239 – na prvú správu odpovedáme do 24 hodín. Termín konzultácie si viete rezervovať aj online, stretneme sa osobne v kancelárii alebo cez videohovor, ako vám to vyhovuje."
          ],
          "sections": [
                {
                      "heading": "Právne služby pre klientov zo Zvolena",
                      "paragraphs": [
                            "Pokrývame šesť oblastí, s ktorými sa na nás ľudia a firmy zo Zvolena obracajú najčastejšie. Pri nehnuteľnostiach pripravujeme prevody, kúpne a darovacie zmluvy, nájmy a riešime zápisy na katastri. Podnikateľom pomáhame s obchodným právom – od založenia či zmien v s.r.o. cez prípravu zmlúv až po vymáhanie neuhradených faktúr. Ľuďom v dlhoch vieme pomôcť s oddlžením (osobným bankrotom), firmám s konkurzom alebo reštrukturalizáciou.",
                            "Zastupujeme klientov aj v súdnych sporoch – od predžalobnej výzvy po právoplatný rozsudok – a v trestných veciach zabezpečujeme obhajobu od prvého výsluchu. Čoraz častejšou témou je aj IT právo: GDPR, licenčné zmluvy či podmienky pre e-shopy. Nech je vaša situácia akákoľvek, najprv vám zrozumiteľne vysvetlíme možnosti a až potom sa spolu rozhodnete, ako ďalej."
                      ]
                },
                {
                      "heading": "Zastupovanie na Okresnom súde Zvolen",
                      "paragraphs": [
                            "Okresný súd Zvolen sídli na ulici J. Kozáčeka 19 – z našej kancelárie na Námestí SNP sme tam pešo za pár minút. Po súdnej reforme účinnej od 1. júna 2023 jeho obvod pokrýva okresy Zvolen, Detva a Krupina, takže na tomto súde zastupujeme aj klientov z Detvy, Hriňovej, Krupiny či Dudiniec. Blízkosť súdu nie je len pohodlie: znamená, že osobná účasť na pojednávaní, nahliadnutie do spisu ani podanie na podateľni nás nestoja polovicu dňa – a vás peniaze navyše.",
                            "Dobré je vedieť, že nie každý spor sa dnes rieši vo Zvolene. Obchodné spory medzi podnikateľmi patria po reforme Okresnému súdu Banská Bystrica a odvolania smerujú na Krajský súd v Banskej Bystrici. Aj tam klientov bežne zastupujeme – povieme vám hneď na začiatku, ktorý súd bude váš prípad riešiť a čo to pre vás prakticky znamená."
                      ]
                },
                {
                      "heading": "Ako prebieha spolupráca",
                      "paragraphs": [
                            "Začína sa to jednoducho: napíšete alebo zavoláte a do 24 hodín máte našu prvú odpoveď. Nasleduje konzultácia – osobne v kancelárii na Námestí SNP, telefonicky alebo cez videohovor. Termín si viete rezervovať online na stránke Kontakt, otvorené máme v pracovné dni od 9:00 do 16:00.",
                            "Skôr než sa pustíme do práce, dohodneme si pevnú cenu. Žiadne hodinové sadzby, pri ktorých neviete, kde sa zastavia – vopred viete, koľko zaplatíte a čo za to dostanete. Počas celej spolupráce vám dianie vo vašej veci vysvetľujeme normálnou rečou, nie paragrafmi. Ak sa okolnosti zmenia, dozviete sa to od nás skôr, ako sa stihnete spýtať."
                      ]
                },
                {
                      "heading": "S čím sa na nás Zvolenčania obracajú najčastejšie",
                      "paragraphs": [
                            "Ako advokáti vo Zvolene vidíme, čo miestnych skutočne trápi. Často sú to prevody bytov a domov – kúpne zmluvy, ktoré bezpečne prejdú katastrom na Okresnom úrade Zvolen, a ošetrenie rizík, na ktoré vzory z internetu nemyslia. Podnikatelia z regiónu riešia neplatičov: pripravíme výzvu, návrh na súd a pohľadávku vymáhame až po exekúciu. A pribúdajú aj ľudia, ktorým dlhy prerástli cez hlavu – s oddlžením im pomôžeme prejsť celým procesom od návrhu po rozhodnutie súdu.",
                            "Každý prípad z tejto stránky poznáme z praxe, nie z učebnice. Ak si nie ste istí, či je vaša situácia „na advokáta“, pokojne sa spýtajte – krátka konzultácia vám ušetrí veľa neistoty a často aj peňazí. Ozvite sa na +421 907 823 239 alebo si rovno rezervujte termín online."
                      ]
                }
          ],
          "faq": [
                {
                      "q": "Zastupujete klientov z celého okresu Zvolen?",
                      "a": "Áno. Zastupujeme klientov zo Zvolena aj z celého obvodu Okresného súdu Zvolen, ktorý po reforme z roku 2023 zahŕňa okresy Zvolen, Detva a Krupina. Klientom zo vzdialenejších obcí vieme väčšinu vecí vybaviť online a osobne sa stretneme, keď to naozaj treba."
                },
                {
                      "q": "Koľko stojí konzultácia u advokáta vo Zvolene?",
                      "a": "Cenu sa dozviete vopred – ešte predtým, než sa rozhodnete, či do toho s nami pôjdete. Po prvej konzultácii vám dáme pevnú cenovú ponuku za celú službu, žiadne otvorené hodinové sadzby. Na prvú správu alebo telefonát odpovedáme do 24 hodín."
                },
                {
                      "q": "Kde vás vo Zvolene nájdem a kedy máte otvorené?",
                      "a": "Kancelária sídli na Námestí SNP 74/28 v centre Zvolena, pár minút pešo od Okresného súdu Zvolen. Otvorené máme v pracovné dni od 9:00 do 16:00. Termín konzultácie si viete rezervovať online na stránke Kontakt – osobne aj formou videohovoru."
                },
                {
                      "q": "Ktorý súd bude riešiť môj prípad, ak som zo Zvolena?",
                      "a": "Väčšinu občianskych vecí – nehnuteľnosti, rodinné či susedské spory – rieši Okresný súd Zvolen na ulici J. Kozáčeka. Obchodné spory medzi podnikateľmi patria po súdnej reforme Okresnému súdu Banská Bystrica a odvolania Krajskému súdu v Banskej Bystrici. Na všetkých týchto súdoch klientov zastupujeme a hneď na úvod vám povieme, kde váš prípad skončí."
                },
                {
                      "q": "Musím prísť osobne, alebo sa dá všetko vyriešiť online?",
                      "a": "Veľkú časť agendy vybavíme na diaľku – konzultácie cez videohovor alebo telefón, dokumenty e-mailom. Osobné stretnutie v kancelárii na Námestí SNP odporúčame pri podpisoch zmlúv alebo zložitejších veciach, ale je to na vás. Kombinácia online a osobne funguje u našich klientov najlepšie."
                }
          ]
    },
    en: {
          "metaTitle": "Lawyer in Zvolen, Slovakia | kohút & partners",
          "metaDescription": "English-speaking law firm in the centre of Zvolen, Slovakia. Fixed fees agreed upfront, first reply within 24 hours. Book an online or in-person consultation.",
          "h1": "Lawyer in Zvolen, Slovakia",
          "intro": [
                "kohút & partners is a Slovak law firm based at Námestie SNP 74/28, right in the centre of Zvolen, a few minutes' walk from the Zvolen District Court. With 20 years of practice and more than 2,400 resolved cases, we advise individuals and businesses on real estate transfers, corporate and commercial law, debt recovery, insolvency and personal bankruptcy, litigation, criminal defence, and IT law including GDPR.",
                "We work the way international clients expect: a fixed fee agreed before we start, a first reply within 24 hours, and legal advice explained in plain language rather than legal jargon. Consultations are available in person at our office or online via video call, so you can work with us from anywhere.",
                "To get started, call +421 907 823 239, e-mail klienti@tkak.sk, or book an appointment online. Office hours are Monday to Friday, 9:00 to 16:00."
          ],
          "sections": [],
          "faq": []
    },
  },
  "detva": {
    id: "detva",
    pathname: "/lawyer-detva",
    name: "Detva",
    sk: {
          "metaTitle": "Advokát Detva | kohút & partners, advokátska kancelária",
          "metaDescription": "Advokát pre Detvu a Podpoľanie – zmluvy, pohľadávky, pozemky aj súdne spory. Pevná cena vopred, odpoveď do 24 hodín. Zavolajte +421 907 823 239.",
          "h1": "Advokát Detva – právne služby pre celé Podpoľanie",
          "intro": [
                "Hľadáte advokáta v Detve? Naša advokátska kancelária kohút & partners sídli vo Zvolene, necelých 25 minút jazdy po rýchlostnej ceste R2, a dlhodobo pracujeme pre klientov z Detvy, Hriňovej aj okolitých obcí Podpoľania. V Detve pobočku nemáme a nebudeme predstierať opak – vďaka online konzultáciám, telefonátom a ochote sadnúť si do auta to však v praxi nie je žiadna prekážka. Väčšinu vecí vyriešime na diaľku a keď je potrebné osobné stretnutie, dohodneme ho vo Zvolene alebo prídeme za vami.",
                "Za 20 rokov praxe sme vyriešili viac ako 2 400 prípadov – od vymáhania neuhradených faktúr cez prevody pozemkov až po obhajobu v trestnom konaní. Právo vysvetľujeme ľudsky, bez zbytočných paragrafov, a odmenu si dohodneme vopred, aby ste od začiatku presne vedeli, koľko vás naša pomoc bude stáť. Na prvú správu odpovedáme do 24 hodín."
          ],
          "sections": [
                {
                      "heading": "Právne služby pre podnikateľov a rodiny z Detvy",
                      "paragraphs": [
                            "Podpoľanie žije strojárstvom, remeslom a drobným podnikaním. Pre živnostníkov a menšie firmy z Detvy a okolia najčastejšie riešime neuhradené faktúry – od predžalobnej výzvy cez platobný rozkaz až po exekúciu. Pripravujeme a kontrolujeme zmluvy s odberateľmi a dodávateľmi, zakladáme a upravujeme s.r.o. a keď sa podnikanie dostane do ťažkostí, pomáhame s reštrukturalizáciou alebo konkurzom.",
                            "Fyzickým osobám pomáhame s oddlžením (osobným bankrotom), susedskými a rodinnými spormi, dedičskými záležitosťami aj obhajobou v trestnom konaní. Nezáleží na tom, či sa spor zvonku javí ako malý – ak vás trápi, zaslúži si poriadne riešenie."
                      ]
                },
                {
                      "heading": "Pozemky na Podpoľaní: lazy, spoluvlastníctvo a kataster",
                      "paragraphs": [
                            "Ak vlastníte pozemky v okolí Detvy, pravdepodobne poznáte tunajší problém: lazové osídlenie a desaťročia dedenia rozdrobili parcely medzi desiatky spoluvlastníkov. Pomáhame usporiadať spoluvlastnícke podiely, pripravujeme dohody o zrušení a vyporiadaní podielového spoluvlastníctva a riešime vecné bremená, vydržanie aj opravy zápisov v katastri.",
                            "Pri kúpe alebo predaji domu, bytu či pôdy pripravíme kúpnu alebo darovaciu zmluvu a návrh na vklad, skontrolujeme list vlastníctva a upozorníme na ťarchy skôr, než podpíšete čokoľvek záväzné. Prevod tak prebehne bez zbytočného rizika na oboch stranách."
                      ]
                },
                {
                      "heading": "Súd pre okres Detva sídli vo Zvolene – rovnako ako my",
                      "paragraphs": [
                            "Po reforme súdnej mapy účinnej od júna 2023 patrí okres Detva do obvodu Okresného súdu Zvolen, spolu s okresmi Zvolen a Krupina. Žaloby, platobné rozkazy aj trestné veci obyvateľov Detvy sa preto prejednávajú vo Zvolene.",
                            "Pre vás je to praktická výhoda: naša kancelária na Námestí SNP je od budovy súdu vzdialená len pár minút. Pojednávania, nahliadanie do spisu a podania vybavíme bez cestovania navyše a v mnohých civilných konaniach sa ako klient nemusíte osobne zúčastniť vôbec – zastúpime vás v plnom rozsahu."
                      ]
                },
                {
                      "heading": "Ako prebieha spolupráca",
                      "paragraphs": [
                            "Napíšte nám na klienti@tkak.sk, zavolajte na +421 907 823 239 alebo si rezervujte termín online cez našu stránku Kontakt. Ozveme sa do 24 hodín. Prvá konzultácia môže prebehnúť videohovorom, telefonicky alebo osobne – vo Zvolene sme vám k dispozícii v pracovné dni od 9:00 do 16:00 a z Detvy ste u nás autom približne za 25 minút.",
                            "Skôr než začneme pracovať, dohodneme si pevnú cenu za dohodnutý rozsah služieb – žiadne prekvapenia na faktúre. Počas celej spolupráce vám priebežne a zrozumiteľne vysvetľujeme, čo sa vo vašej veci deje a aké máte možnosti."
                      ]
                }
          ],
          "faq": [
                {
                      "q": "Zastupujete aj klientov z Detvy a okolia?",
                      "a": "Áno. Hoci naša kancelária sídli vo Zvolene, dlhodobo pracujeme pre klientov z Detvy, Hriňovej, Kriváňa aj ďalších obcí Podpoľania. Väčšinu komunikácie zvládneme online a telefonicky, osobné stretnutia si dohodneme vo Zvolene alebo prídeme za vami."
                },
                {
                      "q": "Musím kvôli konzultácii pricestovať do Zvolena?",
                      "a": "Nemusíte. Prvú konzultáciu aj väčšinu ďalšej komunikácie vybavíme videohovorom alebo telefonicky, dokumenty stačí poslať e-mailom. Ak je osobné stretnutie potrebné, zo Zvolena je to do Detvy približne 25 minút – vieme prísť aj my za vami."
                },
                {
                      "q": "Ktorý súd rieši súdne spory z okresu Detva?",
                      "a": "Od reformy súdnej mapy v roku 2023 patrí okres Detva do obvodu Okresného súdu Zvolen, ktorý pokrýva okresy Zvolen, Detva a Krupina. Naša kancelária je od tohto súdu vzdialená len pár minút, takže na pojednávaniach a podaniach vás zastúpime bez komplikácií."
                },
                {
                      "q": "Koľko stojí konzultácia a právne služby?",
                      "a": "Odmenu si dohodneme vždy vopred a pevne – po úvodnom oboznámení s vaším prípadom vám povieme presnú cenu za dohodnutý rozsah práce. Úvodný dopyt e-mailom alebo telefonicky vás k ničomu nezaväzuje."
                },
                {
                      "q": "Pomôžete mi s osobným bankrotom?",
                      "a": "Áno, oddlženie je jednou z našich hlavných oblastí. Posúdime, či je osobný bankrot vo vašej situácii vhodným riešením, vysvetlíme vám podmienky a dôsledky a prevedieme vás celým procesom od prípravy podkladov až po jeho ukončenie."
                }
          ]
    },
    en: {
          "metaTitle": "Lawyer for Detva, Slovakia | kohút & partners",
          "metaDescription": "Slovak law firm serving clients from Detva and the Podpoľanie region – contracts, debt recovery, real estate, litigation. Fixed fees agreed upfront.",
          "h1": "Lawyer for Detva and the Podpoľanie region",
          "intro": [
                "kohút & partners is a Slovak law firm based in Zvolen, about 25 minutes' drive from Detva. For years we have advised clients from Detva and the wider Podpoľanie region – online, by phone and in person, in Slovak and English.",
                "Typical matters include debt recovery for local businesses, commercial contracts and company law, real-estate transfers and co-ownership of land, insolvency proceedings and criminal defence. Since the 2023 court reform, cases from the Detva district are heard by the District Court in Zvolen, just a few minutes from our office, so we represent clients there without extra travel.",
                "We agree a fixed fee before any work begins and reply to every first enquiry within 24 hours. Contact us at klienti@tkak.sk or +421 907 823 239, or book an appointment online."
          ],
          "sections": [],
          "faq": []
    },
  },
  "krupina": {
    id: "krupina",
    pathname: "/lawyer-krupina",
    name: "Krupina",
    sk: {
          "metaTitle": "Advokát Krupina – právne služby | kohút & partners",
          "metaDescription": "Advokát pre Krupinu a okolie: pozemky, dedičstvo, spory aj oddlženie. Pevná cena vopred, odpoveď do 24 hodín. Zavolajte +421 907 823 239.",
          "h1": "Advokát Krupina – právna pomoc pre vás, vašu rodinu aj firmu",
          "intro": [
                "Hľadáte advokáta v Krupine? Priamo v meste je ponuka právnych služieb veľmi obmedzená – dobrá správa však je, že nemusíte hľadať ďaleko. Advokátska kancelária kohút & partners sídli vo Zvolene, necelých 30 kilometrov od Krupiny, teda približne pol hodiny cesty. Pre klientov z Krupiny a okolitých obcí Hontu pracujeme online, telefonicky aj osobne a zastupujeme ich na Okresnom súde Zvolen, ktorý je pre okres Krupina príslušný.",
                "Za 20 rokov praxe sme vyriešili viac než 2 400 prípadov – od prevodov pozemkov cez dedičské nezhody až po oddlženie. Sme advokáti zapísaní v Slovenskej advokátskej komore a držíme sa troch jednoduchých zásad: cenu sa dozviete vopred a je pevná, na prvú správu odpovieme do 24 hodín a právo vám vysvetlíme ľudskou rečou, nie paragrafmi."
          ],
          "sections": [
                {
                      "heading": "S čím najčastejšie pomáhame klientom z Krupiny",
                      "paragraphs": [
                            "Hont je región pozemkov. Vinice, záhrady, polia aj rodinné domy sa tu dedia po generácie a vlastnícke vzťahy k nim bývajú poriadne zamotané. Pomáhame s prevodmi nehnuteľností, vysporiadaním podielového spoluvlastníctva, zápismi do katastra aj s nájomnými zmluvami k pozemkom a budovám. Kúpnu či darovaciu zmluvu pripravíme tak, aby na katastri prešla na prvýkrát.",
                            "Druhou veľkou témou je dedičstvo – roky nevyporiadané pozemky po rodičoch či prarodičoch, nezhody medzi súrodencami alebo dedičstvo zaťažené dlhmi. To všetko vieme rozpliesť a doviesť do konca. A keď sa dohodnúť nedá, zastúpime vás v spore: či už ide o hranicu pozemku so susedom, nezaplatenú faktúru alebo vymáhanie pohľadávky."
                      ]
                },
                {
                      "heading": "Zastupovanie na Okresnom súde Zvolen",
                      "paragraphs": [
                            "Okres Krupina patrí po reforme súdnej mapy z roku 2023 do obvodu Okresného súdu Zvolen, ktorý je príslušný pre okresy Zvolen, Detva a Krupina. Ak vás teda čaká žaloba alebo iné občianske súdne konanie, pojednávať sa bude s najväčšou pravdepodobnosťou vo Zvolene. Aj dedičské konanie vedie notár ako súdny komisár poverený týmto súdom.",
                            "Pre vás je to praktická výhoda: naša kancelária sídli priamo vo Zvolene na Námestí SNP, na pojednávania to máme na skok a miestnu súdnu prax dobre poznáme. Vy pritom na súd vo väčšine prípadov chodiť nemusíte – na základe plnomocenstva vás zastúpime a o každom kroku vás budeme včas informovať."
                      ]
                },
                {
                      "heading": "Ako prebieha spolupráca",
                      "paragraphs": [
                            "Prvý kontakt je jednoduchý: zavolajte na +421 907 823 239, napíšte na klienti@tkak.sk alebo si rezervujte termín online priamo na našom webe. Ozveme sa vám najneskôr do 24 hodín. Samotná konzultácia môže prebehnúť cez videohovor, telefonicky alebo osobne – u nás vo Zvolene, prípadne sa dohodneme na stretnutí bližšie k vám.",
                            "Po úvodnej konzultácii dostanete konkrétny návrh postupu a pevnú cenu, ktorá sa počas spolupráce nemení. Žiadne prekvapenia na faktúre. Kanceláriu máme otvorenú v pracovné dni od 9:00 do 16:00, e-maily a online rezervácie však bežia nepretržite."
                      ]
                },
                {
                      "heading": "Dlhy a oddlženie – diskrétne a bez zbytočných rečí",
                      "paragraphs": [
                            "Krupina je mesto, kde sa ľudia poznajú. Práve preto mnohí odkladajú riešenie dlhov a exekúcií, aby sa o ich situácii nehovorilo. Rozumieme tomu – celý proces oddlženia, teda osobného bankrotu, vieme pripraviť diskrétne a z veľkej časti na diaľku. Zanalyzujeme vaše dlhy, vysvetlíme, čo oddlženie znamená v praxi, a pripravíme všetko potrebné.",
                            "Rovnako pristupujeme aj k firmám. Ak sa vaše podnikanie dostalo do platobnej neschopnosti, čím skôr sa ozvete, tým viac možností na riešenie máte – od reštrukturalizácie až po riadený konkurz."
                      ]
                }
          ],
          "faq": [
                {
                      "q": "Zastupujete aj klientov z Krupiny?",
                      "a": "Áno, klienti z Krupiny a okolia sú prirodzenou súčasťou našej praxe. Advokát pre Krupinu totiž nemusí sedieť priamo na námestí v Krupine – dôležité je, aby poznal váš región a váš súd. Sídlime vo Zvolene, necelých 30 kilometrov od Krupiny, priamo v meste, kde sídli aj súd príslušný pre váš okres."
                },
                {
                      "q": "Musím kvôli konzultácii pricestovať do Zvolena?",
                      "a": "Nemusíte. Väčšinu vecí vyriešime online alebo telefonicky a dokumenty si vymeníme e-mailom. Ak preferujete osobné stretnutie, privítame vás v kancelárii na Námestí SNP vo Zvolene, prípadne sa vieme dohodnúť na stretnutí v Krupine."
                },
                {
                      "q": "Ktorý súd rieši spory obyvateľov Krupiny?",
                      "a": "Od reformy súdnej mapy v roku 2023 je pre okres Krupina príslušný Okresný súd Zvolen – jeho obvod tvoria okresy Zvolen, Detva a Krupina. Na tomto súde zastupujeme klientov pravidelne, takže jeho fungovanie poznáme z každodennej praxe."
                },
                {
                      "q": "Koľko ma budú právne služby stáť?",
                      "a": "Cenu sa dozviete vopred a je pevná – žiadne hodinové sadzby, ktoré rastú s každým telefonátom. Po úvodnej konzultácii dostanete konkrétnu ponuku a sami sa rozhodnete, či do toho spolu pôjdeme."
                },
                {
                      "q": "Mám exekúcie. Pomôžete mi s osobným bankrotom?",
                      "a": "Áno, oddlženie je jednou z našich hlavných oblastí. Posúdime, či je osobný bankrot vo vašej situácii vhodným riešením, otvorene vám vysvetlíme jeho dôsledky a pripravíme celý proces – diskrétne a zrozumiteľne."
                }
          ]
    },
    en: {
          "metaTitle": "Lawyer near Krupina, Slovakia | kohút & partners",
          "metaDescription": "Law firm serving clients from Krupina: real estate, inheritance, disputes and debt relief. Fixed fees agreed upfront, first reply within 24 hours.",
          "h1": "English-Speaking Lawyer for Krupina",
          "intro": [
                "kohút & partners is a Slovak law firm based in Zvolen, about 30 km from Krupina. We advise individuals and businesses from the Krupina district on real estate and land transfers, inheritance matters, commercial law, litigation and personal bankruptcy, and we represent clients before the District Court in Zvolen, which has jurisdiction over the Krupina district.",
                "We work with clients online, by phone and in person. You always receive a fixed fee agreed in advance and a first reply within 24 hours, and most matters can be handled entirely remotely.",
                "Contact us at klienti@tkak.sk or +421 907 823 239, or book an appointment online at tkak.sk. Office hours: Monday to Friday, 9:00–16:00."
          ],
          "sections": [],
          "faq": []
    },
  },
  "banska-bystrica": {
    id: "banska-bystrica",
    pathname: "/lawyer-banska-bystrica",
    name: "Banská Bystrica",
    sk: {
          "metaTitle": "Advokát Banská Bystrica | kohút & partners",
          "metaDescription": "Advokát Banská Bystrica – zastupovanie na Okresnom aj Krajskom súde BB, obchodné právo, insolvencie, GDPR. Pevná cena vopred, odpoveď do 24 hodín.",
          "h1": "Advokát Banská Bystrica – právne služby pre firmy aj jednotlivcov",
          "intro": [
                "Hľadáte advokáta v Banskej Bystrici? Povedzme si to na rovinu hneď v úvode: naša advokátska kancelária kohút & partners sídli vo Zvolene, na Námestí SNP 74/28. Z centra Banskej Bystrice ste u nás autom po rýchlostnej ceste R1 zhruba za dvadsať minút – a väčšinu vecí navyše vybavíme online alebo telefonicky, takže za nami často nemusíte cestovať vôbec. Na banskobystrických súdoch pritom zastupujeme klientov pravidelne, je to pre nás domáce prostredie.",
                "Za dvadsať rokov praxe sme vyriešili viac ako 2 400 prípadov – od zakladania a predaja firiem cez súdne spory až po konkurzy a oddlženia. Naši advokáti sú zapísaní v Slovenskej advokátskej komore. Fungujeme jednoducho: cenu si dohodneme vopred, na prvú správu odpovedáme do 24 hodín a právo vysvetľujeme tak, aby ste mu rozumeli aj bez právnického slovníka."
          ],
          "sections": [
                {
                      "heading": "Právne služby pre klientov z Banskej Bystrice",
                      "paragraphs": [
                            "Banská Bystrica je krajské mesto so silným firemným zázemím, a tomu zodpovedá aj to, s čím sa na nás Bystričania najčastejšie obracajú. Podnikateľom pomáhame s obchodným právom – založenie a zmeny v s.r.o., príprava a kontrola zmlúv, vymáhanie neuhradených faktúr. Čoraz viac riešime aj IT právo a GDPR: licenčné zmluvy, spracúvanie osobných údajov či zmluvy s vývojármi, čo oceňujú najmä technologické a servisné firmy v regióne.",
                            "Jednotlivcom pomáhame pri prevodoch nehnuteľností a katastri, pri nájmoch, v súdnych sporoch aj v trestných veciach, kde zabezpečujeme obhajobu. Samostatnou kapitolou sú insolvencie – konkurz, reštrukturalizácia a oddlženie, ktorým sa venujeme dlhodobo a ktoré majú k Banskej Bystrici bližšie, než si mnohí myslia (viac nižšie)."
                      ]
                },
                {
                      "heading": "Zastupovanie na súdoch v Banskej Bystrici",
                      "paragraphs": [
                            "Po súdnej reforme účinnej od 1. júna 2023 patrí do obvodu Okresného súdu Banská Bystrica okrem okresu Banská Bystrica aj okres Brezno. Odvolania z celého Banskobystrického kraja – vrátane rozhodnutí Okresného súdu Zvolen – rozhoduje Krajský súd v Banskej Bystrici, takže v odvolacích konaniach končíme v Bystrici aj s prípadmi klientov z iných okresov. Oba súdy nájdete na Skuteckého ulici a naši advokáti tam chodia bežne.",
                            "Banská Bystrica má od reformy aj jeden z troch správnych súdov na Slovensku, ktorý rozhoduje žaloby proti štátnym orgánom a samosprávam. A ešte jedna zaujímavosť: Okresný súd Banská Bystrica vedie celoslovenské upomínacie konanie o elektronických platobných rozkazoch aj obchodný register pre celý kraj. Ak teda ako váš advokát vymáhame pohľadávku alebo zapisujeme zmenu vo firme, komunikujeme priamo s bystrickým súdom."
                      ]
                },
                {
                      "heading": "Insolvencie: konkurzy a oddlženie sa riešia práve v Bystrici",
                      "paragraphs": [
                            "Málo známy fakt: konkurzné a reštrukturalizačné konania firiem z celého Banskobystrického kraja vedie Okresný súd Banská Bystrica. Či ste veriteľ, ktorému dlžník skončil v konkurze, alebo firma v problémoch zvažujúca reštrukturalizáciu, konanie bude prebiehať v Bystrici – a my sme na tomto súde ako doma. Veriteľom prihlasujeme pohľadávky a strážime schôdze veriteľov, dlžníkom pomáhame vybrať najmenej bolestivú cestu.",
                            "Jednotlivcom z Banskej Bystrice pomáhame aj s oddlžením, teda osobným bankrotom: vysvetlíme podmienky, pripravíme podklady a prevedieme vás celým procesom vrátane toho, čo bude s vaším majetkom a ktoré dlhy sa vás budú týkať aj po ňom."
                      ]
                },
                {
                      "heading": "Ako prebieha spolupráca, keď ste z Banskej Bystrice",
                      "paragraphs": [
                            "Napíšte nám na klienti@tkak.sk, zavolajte na +421 907 823 239 alebo si rezervujte termín online na stránke kontakt – ozveme sa do 24 hodín. Prvú konzultáciu vieme spraviť cez videohovor alebo telefón, takže ju vybavíte z obývačky či kancelárie v Bystrici. Ak preferujete osobné stretnutie, privítame vás vo Zvolene (Po–Pia 9:00–16:00), prípadne sa stretneme priamo v Banskej Bystrici, napríklad pred pojednávaním.",
                            "Nebojíte sa otvorenej otázky, koľko to bude stáť? My tiež nie. Cenu si dohodneme vopred ako pevnú sumu, takže žiadne prekvapenia na faktúre. Sídlime len vo Zvolene a pobočku v Bystrici zámerne nepredstierame – vzdialenosť dvadsiatich minút po R1 však v praxi nikto z našich banskobystrických klientov nepocítil."
                      ]
                }
          ],
          "faq": [
                {
                      "q": "Zastupujete klientov z Banskej Bystrice?",
                      "a": "Áno, pravidelne. Väčšinu agendy vybavíme online a telefonicky a na Okresnom, Krajskom aj Správnom súde v Banskej Bystrici zastupujeme klientov osobne. Kancelária sídli vo Zvolene, dvadsať minút po R1."
                },
                {
                      "q": "Musím pricestovať do Zvolena?",
                      "a": "Nemusíte. Konzultácie robíme cez videohovor alebo telefón a dokumenty si vymieňame elektronicky. Ak je osobné stretnutie potrebné, radi vás privítame vo Zvolene alebo prídeme za vami do Banskej Bystrice."
                },
                {
                      "q": "Koľko stojí konzultácia a právne služby?",
                      "a": "Cenu sa dozviete vopred – po prvom kontakte vám navrhneme pevnú sumu za konkrétnu službu, ktorú odsúhlasíte skôr, než začneme pracovať. Na prvú správu odpovedáme do 24 hodín."
                },
                {
                      "q": "Ktorý súd bude riešiť môj spor, ak som z Banskej Bystrice?",
                      "a": "Na prvom stupni spravidla Okresný súd Banská Bystrica, ktorého obvod po reforme z roku 2023 zahŕňa okresy Banská Bystrica a Brezno. O odvolaniach rozhoduje Krajský súd v Banskej Bystrici. V oboch konaniach vás vieme zastupovať."
                },
                {
                      "q": "Pomôžete mi s osobným bankrotom alebo konkurzom v Banskej Bystrici?",
                      "a": "Áno, insolvencie sú jednou z našich hlavných oblastí. Konkurzy a reštrukturalizácie z celého kraja vedie Okresný súd Banská Bystrica, kde klientov bežne zastupujeme – ako veriteľov aj ako dlžníkov. S oddlžením fyzických osôb pomáhame od posúdenia podmienok až po skončenie konania."
                }
          ]
    },
    en: {
          "metaTitle": "Lawyer in Banská Bystrica, Slovakia | kohút & partners",
          "metaDescription": "Slovak law firm serving clients in Banská Bystrica: corporate law, litigation, insolvency, real estate and GDPR. Fixed fees agreed upfront, reply within 24 hours.",
          "h1": "Lawyer in Banská Bystrica – kohút & partners",
          "intro": [
                "Looking for a lawyer in Banská Bystrica? Our law firm kohút & partners is based in Zvolen, about twenty minutes away on the R1 expressway, and we regularly represent clients before the District Court, the Regional Court and the Administrative Court in Banská Bystrica. Most matters can be handled online or by phone, so you rarely need to travel at all.",
                "With twenty years of practice and more than 2,400 resolved cases, we advise companies on corporate law, contracts, debt recovery, IT law and GDPR, and we assist individuals with real estate transfers, litigation, criminal defence and insolvency. Notably, bankruptcy and restructuring proceedings for the entire Banská Bystrica region are handled by the Banská Bystrica District Court, where we appear frequently.",
                "We work with fixed fees agreed in advance and respond to every first enquiry within 24 hours. Book a consultation online, e-mail us at klienti@tkak.sk or call +421 907 823 239 – consultations are available in person or via video call."
          ],
          "sections": [],
          "faq": []
    },
  },
  "ziar-nad-hronom": {
    id: "ziar-nad-hronom",
    pathname: "/lawyer-ziar-nad-hronom",
    name: "Žiar nad Hronom",
    sk: {
          "metaTitle": "Advokát Žiar nad Hronom | kohút & partners",
          "metaDescription": "Advokát pre Žiar nad Hronom: dlhy a oddlženie, pohľadávky, nehnuteľnosti, spory. Pevná cena vopred, odpoveď do 24 hodín. Volajte +421 907 823 239.",
          "h1": "Advokát Žiar nad Hronom – právne služby s pevnou cenou vopred",
          "intro": [
                "Ak hľadáte advokáta pre Žiar nad Hronom a okolie, nemusíte sa obmedzovať len na kancelárie priamo v meste. Advokátska kancelária kohút & partners sídli vo Zvolene, necelých 25 kilometrov po rýchlostnej ceste R1 – z centra Žiaru ste u nás autom približne za 20 až 25 minút. Väčšinu vecí navyše vybavíme na diaľku: konzultácie prebiehajú online alebo telefonicky a dokumenty si vymeníme e-mailom, takže do Zvolena cestovať vôbec nemusíte.",
                "Za kanceláriou stojí 20 rokov praxe a viac než 2 400 vyriešených prípadov. Riadiacim partnerom je Tomáš Kohút, naši advokáti sú zapísaní v Slovenskej advokátskej komore. Klientom zo Žiaru nad Hronom, Žarnovice aj Banskej Štiavnice pomáhame s dlhmi a oddlžením, vymáhaním pohľadávok, prevodmi nehnuteľností, obchodnými zmluvami aj so zastupovaním pred súdom. Cenu poznáte vopred a prvú odpoveď dostanete do 24 hodín."
          ],
          "sections": [
                {
                      "heading": "Právne služby pre klientov zo Žiaru nad Hronom",
                      "paragraphs": [
                            "Žiar nad Hronom je priemyselné mesto a tomu zodpovedajú aj právne otázky, s ktorými sa na nás ľudia z regiónu obracajú najčastejšie. Firmám a živnostníkom, ktorí dodávajú tovar či služby do miestneho priemyselného parku a okolitých prevádzok, pomáhame s obchodnými zmluvami, založením a zmenami v s.r.o. a najmä s vymáhaním neuhradených faktúr – od predžalobnej výzvy až po exekúciu.",
                            "Domácnostiam zase pomáhame pri kúpe a predaji bytov a domov vrátane návrhu na vklad do katastra, pri nájomných zmluvách a pri sporoch o majetok či spoluvlastníctvo. Zastupujeme aj obvinených v trestných veciach a firmám radíme v IT práve, GDPR a licenčných zmluvách."
                      ]
                },
                {
                      "heading": "Dlhy, exekúcie a osobný bankrot",
                      "paragraphs": [
                            "Osobitnou kapitolou sú dlhy. Pomáhame ľuďom, ktorým sa nazbierali pôžičky a exekúcie, aj podnikateľom, ktorých položil jeden neuhradený kontrakt. Najprv spolu prejdeme reálny stav – čo dlhujete, komu a v akom štádiu vymáhania jednotlivé veci sú. Až potom navrhneme riešenie: niekedy stačí dohoda s veriteľmi, inokedy je najrozumnejšou cestou oddlženie, teda osobný bankrot.",
                            "Oddlženie prebieha formou konkurzu alebo splátkového kalendára a celým procesom vás prevedieme – od prípravy podkladov až po zbavenie sa dlhov. Firmám v ťažkostiach vieme pomôcť s reštrukturalizáciou alebo riadeným konkurzom tak, aby konatelia zbytočne neriskovali osobnú zodpovednosť."
                      ]
                },
                {
                      "heading": "Zastupovanie na Okresnom súde Žiar nad Hronom",
                      "paragraphs": [
                            "Súdne spory obyvateľov mesta a okolia rieši Okresný súd Žiar nad Hronom, ktorého obvod po súdnej reforme z roku 2023 zahŕňa okresy Žiar nad Hronom, Žarnovica a Banská Štiavnica. Ak teda bývate napríklad v Kremnici, Novej Bani alebo Banskej Štiavnici, váš prípad bude s najväčšou pravdepodobnosťou prebiehať práve v Žiari.",
                            "Pre nás je to domáci terén. Zo Zvolena sme na pojednávaní v Žiari za dvadsať minút po R1, takže osobná účasť advokáta na každom pojednávaní nie je problém a neplatíte za ňu vysoké cestovné náhrady. Odvolacie konania pokračujú na Krajskom súde v Banskej Bystrici, kde klientov zastupujeme rovnako."
                      ]
                },
                {
                      "heading": "Ako prebieha spolupráca",
                      "paragraphs": [
                            "Začíname vždy rovnako: napíšete nám na klienti@tkak.sk, zavoláte na +421 907 823 239 alebo si cez našu stránku rezervujete termín konzultácie online. Prvú odpoveď od nás dostanete do 24 hodín. Na úvodnej konzultácii – online, telefonicky alebo osobne – si vypočujeme, čo riešite, a povieme vám na rovinu, či a ako vieme pomôcť.",
                            "Predtým, než sa do čohokoľvek pustíme, si dohodneme pevnú cenu. Žiadna hodinová sadzba, pri ktorej neviete, kde sa zastaví – vopred viete, koľko a za čo platíte. A právo vysvetľujeme ľudsky, bez paragrafov tam, kde nie sú potrebné. Ak potrebujete advokáta v Žiari nad Hronom či okolí, ozvite sa – kancelária na Námestí SNP 74/28 vo Zvolene je otvorená v pracovné dni od 9:00 do 16:00."
                      ]
                }
          ],
          "faq": [
                {
                      "q": "Zastupujete aj klientov zo Žiaru nad Hronom?",
                      "a": "Áno. Kancelária sídli vo Zvolene, no klientom zo Žiaru nad Hronom a celého okresu slúžime bežne – konzultácie prebiehajú online, telefonicky alebo osobne a na pojednávania na Okresnom súde Žiar nad Hronom dochádzame bez problémov, je to približne 25 km po R1."
                },
                {
                      "q": "Musím kvôli konzultácii pricestovať do Zvolena?",
                      "a": "Nemusíte. Väčšinu agendy vybavíme online alebo telefonicky a dokumenty si vymeníme e-mailom. Ak preferujete osobné stretnutie, radi vás privítame v kancelárii na Námestí SNP vo Zvolene – zo Žiaru ste u nás autom za 20 až 25 minút – alebo sa vieme dohodnúť na stretnutí u vás."
                },
                {
                      "q": "Koľko stojí konzultácia a právne služby?",
                      "a": "S cenou pracujeme transparentne: pred začatím spolupráce si dohodneme pevnú cenu, ktorú poznáte vopred. Napíšte nám, čo riešite, a do 24 hodín sa vám ozveme s návrhom postupu aj s cenou."
                },
                {
                      "q": "Ktorý súd rieši spory obyvateľov Žiaru nad Hronom?",
                      "a": "Prvostupňové občianske aj trestné veci patria Okresnému súdu Žiar nad Hronom, ktorého obvod zahŕňa okresy Žiar nad Hronom, Žarnovica a Banská Štiavnica. O odvolaniach rozhoduje Krajský súd v Banskej Bystrici. Na oboch súdoch klientov bežne zastupujeme."
                },
                {
                      "q": "Ako rýchlo sa mi ozvete?",
                      "a": "Prvú odpoveď dostanete do 24 hodín. Zavolajte na +421 907 823 239, napíšte na klienti@tkak.sk alebo si rezervujte termín konzultácie online cez našu stránku. Kancelária je otvorená v pracovné dni od 9:00 do 16:00."
                }
          ]
    },
    en: {
          "metaTitle": "Lawyer Žiar nad Hronom | kohút & partners",
          "metaDescription": "Slovak law firm serving clients in Žiar nad Hronom: debt relief, receivables, real estate, litigation. Fixed fees agreed up front, reply within 24 hours.",
          "h1": "Lawyer for Žiar nad Hronom",
          "intro": [
                "kohút & partners is a Slovak law firm based in Zvolen, about 25 km from Žiar nad Hronom via the R1 expressway – roughly a 20-minute drive. We regularly serve clients from Žiar nad Hronom and the surrounding districts, both online and in person, backed by 20 years of practice and more than 2,400 resolved cases. Our attorneys are registered with the Slovak Bar Association.",
                "We assist individuals and businesses with debt relief and personal bankruptcy, debt collection, real estate transfers and land registry filings, commercial contracts, criminal defence and IT law including GDPR. We represent clients before the District Court Žiar nad Hronom, whose jurisdiction covers the districts of Žiar nad Hronom, Žarnovica and Banská Štiavnica, as well as before the Regional Court in Banská Bystrica on appeal.",
                "Working with us is straightforward: you receive a first reply within 24 hours, and we agree on a fixed fee before any work begins. Contact us at klienti@tkak.sk or +421 907 823 239, or book an online consultation through our website."
          ],
          "sections": [],
          "faq": []
    },
  },
};

export const getCityIds = () => Object.keys(CITY_PAGES);

export function getCityPage(locale: Locale, id: string) {
  const page = CITY_PAGES[id];
  if (!page) return null;
  return { ...page, content: locale === "en" ? page.en : page.sk };
}
