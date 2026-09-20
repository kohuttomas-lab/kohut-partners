import type { IntlContent } from "./types";

// Nemecký preklad doménového obsahu (služby, balíky, tím, kancelária, meta) pre klientov
// z Nemecka a Rakúska. Preložené z anglickej vetvy `en` v src/lib/content.ts; ceny, ikony
// a poradie ostávajú v content.ts. Stav k 20. 9. 2026.
export const de: IntlContent = {
  services: {
    insolvencie: {
      name: "Insolvenz und Restrukturierung in der Slowakei",
      tagline: "Gläubigerschutz und Rettung von Unternehmen nach slowakischem Recht.",
      summary:
        "Wir begleiten Unternehmen und ausländische Gläubiger durch slowakische Insolvenzverfahren – mit dem Schutz von Forderungen, der Rettung überlebensfähiger Unternehmen und einem geordneten Ausstieg, wenn eine Rettung nicht möglich ist.",
      solve: [
        "Vertretung ausländischer Gläubiger in slowakischen Konkurs- und Restrukturierungsverfahren",
        "Anmeldung von Gläubigerforderungen beim slowakischen Insolvenzverwalter innerhalb der gesetzlichen Fristen",
        "Restrukturierung und Sanierungspläne nach slowakischem Recht",
        "Konkurs und Liquidation slowakischer Gesellschaften",
        "Verhandlungen mit slowakischen Banken und Gläubigern",
      ],
      faq: [
        [
          "Mein slowakischer Schuldner ist in Konkurs – was nun?",
          "Forderungen müssen innerhalb strenger gesetzlicher Fristen beim slowakischen Insolvenzverwalter angemeldet werden, sonst werden Ihre Rechte erheblich eingeschränkt. Senden Sie uns die Eckdaten – wir melden die Forderung an und vertreten Sie während des gesamten Verfahrens.",
        ],
        [
          "Wann sollte ich eine Restrukturierung angehen?",
          "Am besten, sobald das Unternehmen Schwierigkeiten hat, fällige Verbindlichkeiten zu erfüllen. Je früher Sie handeln, desto mehr Rettungsoptionen lässt das slowakische Recht offen.",
        ],
      ],
    },
    obchod: {
      name: "Geschäftstätigkeit in der Slowakei",
      tagline: "Gesellschaftsgründung, Verträge und Gesellschaftsrecht – nach slowakischem Recht.",
      summary:
        "Von der Gründung einer s.r.o. (slowakische GmbH) für ausländische Gründer über Handelsverträge nach slowakischem Recht bis zu gesellschaftsrechtlichen Änderungen und Due-Diligence-Prüfungen slowakischer Gesellschaften.",
      solve: [
        "Gründung slowakischer Gesellschaften (s.r.o., a.s.) für ausländische Gründer – vollständig aus der Ferne",
        "Handelsverträge nach slowakischem Recht – Entwurf oder Prüfung auf Englisch oder Slowakisch",
        "Gesellschaftsrechtliche Beratung und Gesellschafterbeziehungen in slowakischen Gesellschaften",
        "Zivilrechtliche Verträge, Eigentum und Schuldverhältnisse nach slowakischem Recht",
        "Due Diligence bei slowakischen Gesellschaften und Unternehmenskäufen",
      ],
      faq: [
        [
          "Kann ein Ausländer eine slowakische s.r.o. besitzen und führen?",
          "Ja – ausländische natürliche Personen und Gesellschaften können eine slowakische s.r.o. besitzen. Für Geschäftsführer aus Staaten außerhalb der EU/OECD können zusätzliche Aufenthaltsvoraussetzungen gelten. Wir prüfen Ihre Konstellation und wickeln die gesamte Gründung aus der Ferne per Vollmacht ab.",
        ],
        [
          "Können Sie die Gesellschaft gründen, ohne dass ich in die Slowakei reise?",
          "Ja. Seit dem 17. August 2026 muss der Gesellschaftsvertrag oder die Gründungsurkunde als notarielle Urkunde oder als von einem Rechtsanwalt autorisierte Urkunde errichtet werden (§ 57 des slowakischen Handelsgesetzbuchs). Wir entwerfen die Dokumente und autorisieren sie als Rechtsanwälte, reichen den Eintragungsantrag ein und besorgen die Gewerbeberechtigungen. Können Sie nicht persönlich erscheinen, unterzeichnet ein Vertreter das Gründungsdokument für Sie aufgrund einer Vollmacht mit amtlich beglaubigter Unterschrift (§ 57 Abs. 2) – im Ausland vor einem Notar beglaubigt und, soweit erforderlich, mit Apostille versehen oder legalisiert.",
        ],
      ],
    },
    nehnutelnosti: {
      name: "Immobilien in der Slowakei",
      tagline: "Slowakische Immobilien kaufen, verkaufen und vermieten – sicher.",
      summary:
        "Kauf- und Mietverträge, das slowakische Grundbuch bzw. Liegenschaftskataster (kataster) und Entwicklungsprojekte. Wir achten darauf, dass Ihr Geld geschützt ist und Ihr Eigentum ordnungsgemäß eingetragen wird.",
      solve: [
        "Immobilienerwerb durch ausländische Käufer – Verträge, Prüfung der Eigentumsverhältnisse, Treuhandabwicklung",
        "Anträge beim slowakischen Liegenschaftskataster (kataster) und Eintragung des Eigentums",
        "Mietverträge für Vermieter und Mieter nach slowakischem Recht",
        "Entwicklungsprojekte und Bauvorhaben in der Slowakei",
        "Dienstbarkeiten, Pfandrechte, Miteigentum und Immobilienstreitigkeiten",
      ],
      faq: [
        [
          "Kann ein Ausländer in der Slowakei eine Immobilie kaufen?",
          "Ja – Staatsangehörige und Gesellschaften aus der EU und den meisten anderen Staaten können slowakische Immobilien erwerben, mit begrenzten Ausnahmen (z. B. bestimmte land- und forstwirtschaftliche Grundstücke). Wir prüfen die Eigentumsverhältnisse im Liegenschaftskataster und gestalten den Kauf sicher.",
        ],
        [
          "Wie schützen Sie mein Geld beim Kauf?",
          "Wir nutzen eine Treuhandverwahrung beim Notar oder Rechtsanwalt – der Betrag wird erst an den Verkäufer freigegeben, nachdem Ihr Eigentum im slowakischen Liegenschaftskataster eingetragen ist.",
        ],
      ],
    },
    spory: {
      name: "Prozessführung vor slowakischen Gerichten",
      tagline: "Kommt keine Einigung zustande, treten wir in der Slowakei für Sie ein.",
      summary:
        "Wir vertreten internationale Mandanten in zivil- und handelsrechtlichen Streitigkeiten vor slowakischen Gerichten – von der vorgerichtlichen Mahnung über den Zahlungsbefehl bis zur Zwangsvollstreckung. Zuerst prüfen wir stets, ob ein schnellerer außergerichtlicher Weg in Betracht kommt.",
      solve: [
        "Forderungseinzug bei slowakischen Schuldnern – Mahnung, Zahlungsbefehl, Zwangsvollstreckung",
        "Vertretung vor slowakischen Gerichten in zivil- und handelsrechtlichen Streitigkeiten",
        "Vollstreckung ausländischer Urteile und Schiedssprüche in der Slowakei",
        "Außergerichtliche Vergleiche, Schadensersatz und ungerechtfertigte Bereicherung",
        "Einstweilige Maßnahmen und Sicherung von Vermögenswerten in der Slowakei",
      ],
      faq: [
        [
          "Muss ich für mein Gerichtsverfahren in die Slowakei reisen?",
          "In den meisten zivil- und handelsrechtlichen Angelegenheiten handeln wir aufgrund einer Vollmacht, und Ihre persönliche Anwesenheit ist nicht nötig. Verlangt das Gericht Ihre Aussage, bereiten wir Sie darauf vor und kümmern uns um die praktischen Fragen.",
        ],
        [
          "Wie lange dauert der Forderungseinzug in der Slowakei?",
          "Eine unbestrittene Rechnung kann binnen Wochen zu einem vollstreckbaren slowakischen Zahlungsbefehl führen; bestrittene Fälle dauern länger. In der Beratung erhalten Sie eine realistische Einschätzung und ein Festhonorar.",
        ],
      ],
    },
    trestne: {
      name: "Strafverteidigung in der Slowakei",
      tagline: "Verteidigung und Schutz Ihrer Rechte im slowakischen Strafverfahren.",
      summary:
        "Wir verteidigen natürliche Personen und Unternehmen – auch ausländische Staatsangehörige – in slowakischen Strafverfahren, von der ersten Vernehmung bis zur Hauptverhandlung. Wir vertreten auch Geschädigte. Schnell, diskret, ohne zu urteilen.",
      solve: [
        "Verteidigung ausländischer Staatsangehöriger in slowakischen Strafverfahren",
        "Beistand bei polizeilichen Vernehmungen und Haftverhandlungen",
        "Wirtschafts- und Steuerstrafsachen nach slowakischem Recht",
        "Vertretung von Geschädigten und ihrer Schadensersatzansprüche",
        "Strafanzeigen, Berufungen und sonstige Rechtsmittel",
      ],
      faq: [
        [
          "Ich spreche kein Slowakisch – welche Rechte habe ich?",
          "Sie haben im gesamten slowakischen Strafverfahren das Recht auf einen Dolmetscher und von Anfang an das Recht auf einen Verteidiger. Wir kommunizieren mit Ihnen auf Englisch und verteidigen Sie vor den slowakischen Behörden – rufen Sie uns an, bevor Sie aussagen.",
        ],
        [
          "Vertreten Sie auch Geschädigte?",
          "Ja. Wir helfen Ihnen, Schadensersatz im slowakischen Verfahren geltend zu machen, und verfolgen den Verlauf des Verfahrens für Sie.",
        ],
      ],
    },
    it: {
      name: "IT, Daten und DSGVO in der Slowakei",
      tagline: "Technologierecht nach slowakischen und EU-Vorschriften.",
      summary:
        "DSGVO-Compliance für slowakische Geschäftstätigkeit, E-Commerce-Bedingungen nach slowakischem Verbraucherrecht, Software- und SaaS-Verträge. Wir helfen Technologieunternehmen, in der Slowakei ohne rechtliche Lücken tätig zu sein.",
      solve: [
        "DSGVO-Compliance für slowakische Gesellschaften und Onlineshops",
        "E-Commerce-Bedingungen nach slowakischem Verbraucherrecht",
        "Software-, Lizenz- und SaaS-Verträge nach slowakischem Recht",
        "Geistiges Eigentum und Marken in der Slowakei",
        "Verträge für IT-Anbieter und Start-ups, die in der Slowakei tätig sind",
      ],
      faq: [
        [
          "Wir verkaufen online an slowakische Kunden – welche Dokumente brauchen wir?",
          "Das slowakische Verbraucherrecht verlangt Allgemeine Geschäftsbedingungen, eine Reklamationsordnung und eine an die slowakischen Vorschriften angepasste DSGVO-Dokumentation. Wir erstellen sie passend für Ihren Shop – auf Slowakisch, mit einer englischen Arbeitsfassung für Sie.",
        ],
        [
          "Betreuen Sie auch Verträge für Start-ups und Investoren?",
          "Ja – Beteiligungsverträge, Vesting-Regelungen und Gesellschaftervereinbarungen für slowakische Gesellschaften, entworfen nach slowakischem Recht.",
        ],
      ],
    },
  },
  packages: {
    "ins-analyza": [
      "Analyse des Insolvenzrisikos",
      "Wir beurteilen die Lage des Unternehmens und schlagen innerhalb von 5 Tagen die nächsten Schritte vor.",
    ],
    "ins-prihlaska": [
      "Forderungsanmeldung",
      "Erstellung und Einreichung der Forderungsanmeldung im Konkurs für einen Gläubiger.",
    ],
    "ob-zivnost": [
      "Gewerbeberechtigung (živnosť)",
      "Einordnung der Tätigkeiten, elektronische Anmeldung und Registrierung beim Finanzamt und bei der Krankenversicherung. Freie Gewerbe sind bei elektronischer Anmeldung gebührenfrei; handwerkliche und gebundene Gewerbe nach dem Gebührentarif.",
    ],
    "ob-sro": [
      "Komplette Gründung einer s.r.o. (slowakische GmbH)",
      "Anwaltlich autorisierte Gründungsdokumente – seit dem 17. August 2026 vorgeschriebene Form –, Anmeldung zum Handelsregister und Gewerbeanmeldung. Die Gerichtsgebühr von 220 € wird gesondert gezahlt.",
    ],
    "ob-revizia": [
      "Vertragsprüfung",
      "Wir prüfen einen Vertrag und weisen vor der Unterzeichnung auf die Risiken hin.",
    ],
    "ob-zmluva": [
      "Individueller Vertrag",
      "Jeder geschäftliche oder private Vertrag, für Ihren Fall entworfen.",
    ],
    "nh-kupna": [
      "Immobilienkaufvertrag + Katasterantrag",
      "Ein anwaltlich autorisierter Vertrag – ohne Beglaubigung der Unterschriften – sowie der elektronische Antrag auf Eintragung in das Liegenschaftskataster.",
    ],
    "nh-najom": ["Mietvertrag", "Ein sicherer Mietvertrag, der beide Parteien schützt."],
    "sp-vyzva": [
      "Vorgerichtliche Mahnung",
      "Erstellung und Versand einer Zahlungsaufforderung an den Schuldner – oft genügt das, damit gezahlt wird.",
    ],
    "sp-zaloba": [
      "Antrag auf Zahlungsbefehl",
      "Antrag auf Erlass eines Zahlungsbefehls im elektronischen Mahnverfahren – der schnellste Weg zu einem Vollstreckungstitel. Die Gerichtsgebühr wird gesondert gezahlt.",
    ],
    "tr-obhajoba": [
      "Verteidigung bei der Vernehmung",
      "Anwesenheit eines Rechtsanwalts bei der Vernehmung und sofortiger Rechtsbeistand.",
    ],
    "tr-oznamenie": [
      "Strafanzeige",
      "Erstellung und Einreichung einer Strafanzeige bei der Polizei oder der Staatsanwaltschaft.",
    ],
    "it-gdpr": [
      "DSGVO-Dokumentation",
      "Ein auf Ihr Unternehmen zugeschnittenes Paket von Richtlinien und Einwilligungen.",
    ],
    "it-eshop": [
      "Dokumente für den Onlineshop",
      "AGB, Reklamationsordnung und Datenschutzhinweise.",
    ],
  },
  team: {
    1: [
      "Tomáš Kohút",
      "geschäftsführender Partner",
      "Insolvenzrecht · Gesellschaftsrecht · Immobilien und Projektentwicklung",
    ],
    2: ["Pavol", "Rechtsanwalt", "Insolvenzrecht · Verwaltungsrecht · zivilrechtliche Streitigkeiten"],
    3: ["Jakub", "Rechtsanwalt", "Strafrecht · gesellschaftsrechtliche Agenda · Insolvenzrecht"],
    4: ["Dominika", "kooperierende Rechtsanwältin", "Gesundheitsrecht · Familienrecht"],
    5: ["Lucia", "juristische Assistentin"],
    6: ["Eva", "Buchhalterin"],
    7: ["Katarína", "Buchhalterin"],
    8: ["Ingrid", "Office-Managerin"],
  },
  teamBio: {
    1: "20 Jahre juristische Praxis (seit 2006). Er führt persönlich die anspruchsvollsten insolvenz- und gesellschaftsrechtlichen Mandate und beaufsichtigt jede größere Sache. Eingetragen bei der Slowakischen Rechtsanwaltskammer (Nr. 3901) und im Verzeichnis der Insolvenzverwalter des Justizministeriums der Slowakischen Republik.",
  },
  office: {
    city: "Zvolen",
    address: "Námestie SNP 74/28, 960 01 Zvolen, Slowakische Republik",
  },
  meta: {
    title: "kohút & partners – slowakische Anwaltskanzlei | Zvolen, Slowakei",
    description:
      "Slowakische Rechtsanwaltskanzlei für internationale Mandanten: Immobilien, Gesellschaftsgründung, Forderungseinzug, Insolvenz und Prozessführung – Beratung ausschließlich im slowakischen Recht.",
    ogLocale: "de_DE",
    ogHeadline: "Rechtssicherheit für Geschäft und Leben.",
    ogTagline: "Rechtsanwaltskanzlei · Zvolen",
  },
};
