import { CONTACT } from "@/lib/content";

const BASE = "https://www.tkak.sk";

// Claimed Google Business Profile listing (knowledge-graph id /g/11bvtj6wfv) —
// linking it via sameAs ties the site to the GBP entity for local search.
const GBP_URL =
  "https://www.google.com/maps/place/koh%C3%BAt+%26+partners,+s.r.o./@48.5769516,19.126746,17z";

// Cities the firm actively serves (mirrors the /advokat-{mesto} landing pages).
const SERVED_CITIES = ["Zvolen", "Detva", "Krupina", "Banská Bystrica", "Žiar nad Hronom"];

const city = (name: string) => ({ "@type": "City", name });

// JSON-LD for Google rich results. LegalService is a LocalBusiness subtype.
// `areaServedCity` narrows areaServed on a city landing page; `nationwide`
// widens it to the whole country for services run remotely (the insurance-claim
// campaign page). The default is the full served-cities list (homepage).
export function LegalServiceSchema({
  locale,
  areaServedCity,
  nationwide = false,
}: {
  locale: string;
  areaServedCity?: string;
  nationwide?: boolean;
}) {
  const sk = locale !== "en";
  const data = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "kohút & partners s.r.o.",
    description: sk
      ? "Advokátska kancelária vo Zvolene — insolvencie, obchodné a IT právo, nehnuteľnosti a súdne spory."
      : "Slovak law firm in Zvolen advising international clients in English — real estate, company formation, debt recovery, insolvency and litigation under Slovak law.",
    url: sk ? BASE : `${BASE}/en`,
    telephone: CONTACT.phone.replace(/\s/g, ""),
    email: CONTACT.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Námestie SNP 74/28",
      postalCode: "960 01",
      addressLocality: "Zvolen",
      addressCountry: "SK",
    },
    geo: { "@type": "GeoCoordinates", latitude: 48.5769516, longitude: 19.126746 },
    hasMap: CONTACT.mapsUrl,
    sameAs: [GBP_URL],
    areaServed: nationwide
      ? { "@type": "Country", name: "Slovensko" }
      : areaServedCity
        ? city(areaServedCity)
        : SERVED_CITIES.map(city),
    priceRange: "€€",
    knowsLanguage: ["sk", "en"],
    founder: {
      "@type": "Person",
      name: "Tomáš Kohút",
      jobTitle: sk ? "riadiaci partner" : "Managing Partner",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "16:00",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
