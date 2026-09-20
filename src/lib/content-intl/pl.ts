import type { IntlContent } from "./types";

// Poľský preklad doménového obsahu (služby, balíky, tím, kancelária, meta) pre jazykovú verziu /pl.
// Preložené z anglických vetiev (`en`) v src/lib/content.ts a z EN meta v src/app/[locale]/layout.tsx;
// ceny, ikony a poradie ostávajú v content.ts. Stav k 20. 9. 2026.
export const pl: IntlContent = {
  services: {
    insolvencie: {
      name: "Upadłość i restrukturyzacja na Słowacji",
      tagline: "Ochrona wierzycieli i ratowanie spółek według prawa słowackiego.",
      summary:
        "Prowadzimy spółki i zagranicznych wierzycieli przez słowackie postępowania upadłościowe i restrukturyzacyjne – chronimy wierzytelności, ratujemy przedsiębiorstwa zdolne do dalszego działania, a gdy ratunek nie jest możliwy, przeprowadzamy uporządkowane zakończenie działalności.",
      solve: [
        "Reprezentowanie zagranicznych wierzycieli w słowackich upadłościach i restrukturyzacjach",
        "Zgłaszanie wierzytelności słowackiemu syndykowi w ustawowych terminach",
        "Restrukturyzacja i plany naprawcze według prawa słowackiego",
        "Upadłość i likwidacja słowackich spółek",
        "Negocjacje ze słowackimi bankami i wierzycielami",
      ],
      faq: [
        [
          "Wobec mojego słowackiego dłużnika ogłoszono upadłość – co teraz?",
          "Wierzytelności trzeba zgłosić słowackiemu syndykowi w ściśle określonych terminach ustawowych, w przeciwnym razie Państwa prawa zostają poważnie ograniczone. Prosimy przesłać nam podstawowe informacje – zgłosimy wierzytelność i będziemy Państwa reprezentować przez całe postępowanie.",
        ],
        [
          "Kiedy należy zająć się restrukturyzacją?",
          "Najlepiej od razu, gdy spółka zaczyna mieć trudności z regulowaniem wymagalnych zobowiązań. Im wcześniej się zadziała, tym więcej możliwości ratunku pozostawia prawo słowackie.",
        ],
      ],
    },
    obchod: {
      name: "Prowadzenie działalności na Słowacji",
      tagline: "Zakładanie spółek, umowy i sprawy korporacyjne – według prawa słowackiego.",
      summary:
        "Od założenia słowackiej s.r.o. (odpowiednik spółki z o.o.) dla zagranicznych założycieli, przez umowy handlowe podlegające prawu słowackiemu, po zmiany korporacyjne i due diligence słowackich spółek.",
      solve: [
        "Zakładanie słowackich spółek (s.r.o., a.s.) dla zagranicznych założycieli – w pełni zdalnie",
        "Umowy handlowe podlegające prawu słowackiemu, sporządzane albo weryfikowane po angielsku lub po słowacku",
        "Doradztwo korporacyjne i stosunki między wspólnikami w słowackich spółkach",
        "Umowy cywilnoprawne, prawo własności i zobowiązania według prawa słowackiego",
        "Due diligence słowackich spółek i przejęcia",
      ],
      faq: [
        [
          "Czy cudzoziemiec może być właścicielem słowackiej s.r.o. i nią kierować?",
          "Tak – zagraniczne osoby fizyczne i spółki mogą być właścicielami słowackiej s.r.o. W przypadku członków zarządu (konateľ) spoza UE/OECD mogą obowiązywać dodatkowe wymogi dotyczące pobytu. Sprawdzamy Państwa sytuację i całe założenie spółki przeprowadzamy zdalnie na podstawie pełnomocnictwa.",
        ],
        [
          "Czy mogą Państwo założyć spółkę bez mojego przyjazdu na Słowację?",
          "Tak. Od 17 sierpnia 2026 r. umowa spółki lub akt założycielski muszą mieć formę aktu notarialnego albo dokumentu autoryzowanego przez adwokata (§ 57 słowackiego Kodeksu handlowego). Dokumenty sporządzamy i autoryzujemy jako adwokaci, składamy wniosek o wpis i uzyskujemy uprawnienia do prowadzenia działalności gospodarczej (živnosť). Jeżeli nie mogą Państwo stawić się osobiście, dokument założycielski podpisuje za Państwa pełnomocnik na podstawie pełnomocnictwa z urzędowo poświadczonym podpisem (§ 57 ust. 2) – poświadczonym za granicą przez notariusza i w razie potrzeby opatrzonym apostille lub zalegalizowanym.",
        ],
      ],
    },
    nehnutelnosti: {
      name: "Nieruchomości na Słowacji",
      tagline: "Kupno, sprzedaż i najem słowackich nieruchomości – bezpiecznie.",
      summary:
        "Umowy kupna i najmu, słowacki kataster nieruchomości (kataster nehnuteľností) i projekty deweloperskie. Dbamy o to, aby Państwa środki były chronione, a prawo własności prawidłowo wpisane.",
      solve: [
        "Zakup nieruchomości przez zagranicznych nabywców – umowy, sprawdzenie stanu prawnego, depozyt",
        "Wnioski do słowackiego katastru nieruchomości i wpis prawa własności",
        "Umowy najmu dla wynajmujących i najemców według prawa słowackiego",
        "Projekty deweloperskie i budownictwo na Słowacji",
        "Służebności, prawa zastawu, współwłasność i spory dotyczące nieruchomości",
      ],
      faq: [
        [
          "Czy cudzoziemiec może kupić nieruchomość na Słowacji?",
          "Tak – obywatele i spółki z UE oraz z większości innych państw mogą nabywać słowackie nieruchomości, z nielicznymi wyjątkami (np. niektóre grunty rolne i leśne). Sprawdzamy stan prawny w katastrze nieruchomości i bezpiecznie układamy strukturę transakcji.",
        ],
        [
          "Jak chronią Państwo moje pieniądze przy zakupie?",
          "Korzystamy z depozytu notarialnego lub adwokackiego – środki są wypłacane sprzedającemu dopiero po wpisaniu Państwa prawa własności do słowackiego katastru nieruchomości.",
        ],
      ],
    },
    spory: {
      name: "Spory przed słowackimi sądami",
      tagline: "Gdy nie udaje się dojść do porozumienia, stajemy po Państwa stronie na Słowacji.",
      summary:
        "Reprezentujemy klientów zagranicznych w sporach cywilnych i handlowych przed słowackimi sądami – od wezwań przedsądowych i nakazów zapłaty po egzekucję. Zawsze najpierw rozważamy szybszą drogę pozasądową.",
      solve: [
        "Dochodzenie należności od słowackich dłużników – wezwanie, nakaz zapłaty, egzekucja",
        "Zastępstwo przed słowackimi sądami w sporach cywilnych i handlowych",
        "Wykonywanie zagranicznych orzeczeń sądowych i wyroków arbitrażowych na Słowacji",
        "Ugody pozasądowe, odszkodowania i bezpodstawne wzbogacenie",
        "Środki tymczasowe i ochrona majątku na Słowacji",
      ],
      faq: [
        [
          "Czy z powodu sprawy sądowej muszę przyjeżdżać na Słowację?",
          "W większości spraw cywilnych i handlowych działamy na podstawie pełnomocnictwa i Państwa osobista obecność nie jest potrzebna. Jeżeli sąd zażąda Państwa zeznań, przygotujemy Państwa do nich i zajmiemy się sprawami praktycznymi.",
        ],
        [
          "Ile trwa odzyskanie długu na Słowacji?",
          "Niesporna faktura może w ciągu kilku tygodni zakończyć się wykonalnym słowackim nakazem zapłaty; sprawy sporne trwają dłużej. Realistyczną ocenę i stałe wynagrodzenie przedstawimy na konsultacji.",
        ],
      ],
    },
    trestne: {
      name: "Obrona w sprawach karnych na Słowacji",
      tagline: "Obrona i ochrona Państwa praw w słowackim postępowaniu karnym.",
      summary:
        "Bronimy osób fizycznych i spółek – w tym cudzoziemców – w słowackich postępowaniach karnych, od pierwszego przesłuchania po rozprawę główną. Reprezentujemy także pokrzywdzonych. Szybko, dyskretnie, bez oceniania.",
      solve: [
        "Obrona cudzoziemców w słowackich postępowaniach karnych",
        "Pomoc przy przesłuchaniach na policji i na posiedzeniach w sprawie tymczasowego aresztowania",
        "Przestępstwa gospodarcze i podatkowe według prawa słowackiego",
        "Reprezentowanie pokrzywdzonych i dochodzenie ich roszczeń o naprawienie szkody",
        "Zawiadomienia o przestępstwie, odwołania i inne środki zaskarżenia",
      ],
      faq: [
        [
          "Nie mówię po słowacku – jakie mam prawa?",
          "Przez całe słowackie postępowanie karne mają Państwo prawo do tłumacza, a od samego początku także do obrońcy. Komunikujemy się z Państwem po angielsku i bronimy Państwa przed słowackimi organami – prosimy zadzwonić do nas przed złożeniem zeznań.",
        ],
        [
          "Czy reprezentują Państwo także pokrzywdzonych?",
          "Tak. Pomagamy dochodzić naprawienia szkody w słowackim postępowaniu i śledzimy sprawę w Państwa imieniu.",
        ],
      ],
    },
    it: {
      name: "IT, dane i RODO (GDPR) na Słowacji",
      tagline: "Prawo nowych technologii według przepisów słowackich i unijnych.",
      summary:
        "Zgodność z RODO w działalności na Słowacji, regulaminy e-commerce według słowackiego prawa konsumenckiego, umowy dotyczące oprogramowania i SaaS. Pomagamy firmom technologicznym prowadzić działalność na Słowacji bez luk prawnych.",
      solve: [
        "Zgodność z RODO dla słowackich podmiotów i sklepów internetowych",
        "Regulaminy e-commerce według słowackiego prawa konsumenckiego",
        "Umowy dotyczące oprogramowania, umowy licencyjne i SaaS podlegające prawu słowackiemu",
        "Własność intelektualna i znaki towarowe na Słowacji",
        "Umowy dla dostawców IT i start-upów działających na Słowacji",
      ],
      faq: [
        [
          "Sprzedajemy online słowackim klientom – jakich dokumentów potrzebujemy?",
          "Słowackie prawo konsumenckie wymaga regulaminu, procedury reklamacyjnej i dokumentacji RODO dostosowanej do słowackich przepisów. Przygotowujemy je na miarę Państwa sklepu – po słowacku, z angielską wersją roboczą dla Państwa.",
        ],
        [
          "Czy zajmują się Państwo umowami dla start-upów i inwestorów?",
          "Tak – umowy inwestycyjne, vesting i umowy wspólników dla słowackich podmiotów, sporządzane według prawa słowackiego.",
        ],
      ],
    },
  },
  packages: {
    "ins-analyza": [
      "Analiza ryzyka niewypłacalności",
      "Oceniamy sytuację spółki i w ciągu 5 dni proponujemy dalsze kroki.",
    ],
    "ins-prihlaska": [
      "Zgłoszenie wierzytelności",
      "Sporządzenie i złożenie zgłoszenia wierzytelności w postępowaniu upadłościowym w imieniu wierzyciela.",
    ],
    "ob-zivnost": [
      "Uprawnienie do działalności gospodarczej (živnosť)",
      "Klasyfikacja przedmiotów działalności, zgłoszenie elektroniczne oraz rejestracja w urzędzie skarbowym i u ubezpieczyciela zdrowotnego. Działalności wolne są przy zgłoszeniu elektronicznym zwolnione z opłaty; rzemieślnicze i regulowane – według taryfy opłat.",
    ],
    "ob-sro": [
      "Założenie s.r.o. (spółki z o.o.) pod klucz",
      "Dokumenty założycielskie autoryzowane przez adwokata – forma obowiązkowa od 17 sierpnia 2026 r. – oraz wniosek do rejestru handlowego i zgłoszenie działalności gospodarczej (živnosť). Opłata sądowa 220 € jest płatna osobno.",
    ],
    "ob-revizia": [
      "Weryfikacja umowy",
      "Oceniamy umowę i przed jej podpisaniem wskazujemy ryzyka.",
    ],
    "ob-zmluva": [
      "Umowa na miarę",
      "Dowolna umowa handlowa lub prywatna przygotowana pod Państwa sprawę.",
    ],
    "nh-kupna": [
      "Umowa kupna nieruchomości + wniosek do katastru",
      "Umowa autoryzowana przez adwokata – bez potrzeby poświadczania podpisów – oraz elektroniczny wniosek o wpis do katastru nieruchomości.",
    ],
    "nh-najom": ["Umowa najmu", "Bezpieczna umowa najmu chroniąca obie strony."],
    "sp-vyzva": [
      "Wezwanie przedsądowe",
      "Sporządzenie i wysłanie wezwania do dłużnika – często wystarcza, aby doszło do zapłaty.",
    ],
    "sp-zaloba": [
      "Wniosek o wydanie nakazu zapłaty",
      "Wniosek o wydanie nakazu zapłaty w elektronicznym postępowaniu upominawczym – najszybsza droga do tytułu egzekucyjnego. Opłata sądowa jest płatna osobno.",
    ],
    "tr-obhajoba": [
      "Obrona przy przesłuchaniu",
      "Obecność adwokata przy przesłuchaniu i natychmiastowa pomoc prawna.",
    ],
    "tr-oznamenie": [
      "Zawiadomienie o przestępstwie",
      "Sporządzenie i złożenie zawiadomienia o przestępstwie na policji lub w prokuraturze.",
    ],
    "it-gdpr": [
      "Dokumentacja RODO",
      "Zestaw polityk i zgód dopasowany do Państwa działalności.",
    ],
    "it-eshop": [
      "Dokumenty dla sklepu internetowego",
      "Regulamin, procedura reklamacyjna i informacja o ochronie danych.",
    ],
  },
  team: {
    1: [
      "Tomáš Kohút",
      "partner zarządzający",
      "Niewypłacalność · prawo spółek · nieruchomości i projekty deweloperskie",
    ],
    2: ["Pavol", "adwokat", "Prawo upadłościowe · prawo administracyjne · spory cywilne"],
    3: ["Jakub", "adwokat", "Prawo karne · obsługa korporacyjna · prawo upadłościowe"],
    4: ["Dominika", "adwokatka współpracująca", "Prawo medyczne · prawo rodzinne"],
    5: ["Lucia", "asystentka prawna"],
    6: ["Eva", "księgowa"],
    7: ["Katarína", "księgowa"],
    8: ["Ingrid", "kierowniczka biura"],
  },
  teamBio: {
    1: "20 lat praktyki prawniczej (od 2006 roku). Osobiście prowadzi najbardziej wymagające sprawy upadłościowe i korporacyjne oraz nadzoruje każdą większą sprawę. Wpisany na listę adwokatów Słowackiej Izby Adwokackiej pod nr 3901 oraz na listę syndyków (zoznam správcov) prowadzoną przez Ministerstwo Sprawiedliwości Republiki Słowackiej.",
  },
  // Poľské firmy prichádzajú najmä so spormi, vymáhaním a konkurzom slovenského
  // odberateľa (CRM, 9/2026) — preto iné poradie než v angličtine.
  serviceOrder: ["spory", "insolvencie", "obchod", "nehnutelnosti", "trestne", "it"],
  office: { city: "Zvolen", address: "Námestie SNP 74/28, 960 01 Zvolen, Republika Słowacka" },
  meta: {
    title: "kohút & partners – słowacka kancelaria adwokacka | Zvolen",
    description:
      "Słowacka kancelaria adwokacka doradzająca klientom zagranicznym: nieruchomości, zakładanie spółek, dochodzenie należności, upadłość i spory sądowe – wyłącznie w zakresie prawa słowackiego.",
    ogLocale: "pl_PL",
    ogHeadline: "Pewność prawna w biznesie i w życiu.",
    ogTagline: "Kancelaria adwokacka · Zvolen",
  },
};
