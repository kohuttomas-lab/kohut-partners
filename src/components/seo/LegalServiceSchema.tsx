import { CONTACT } from "@/lib/content";

const BASE = "https://www.tkak.sk";

// JSON-LD for Google rich results. LegalService is a LocalBusiness subtype.
export function LegalServiceSchema({ locale }: { locale: string }) {
  const sk = locale !== "en";
  const data = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "kohút & partners s.r.o.",
    description: sk
      ? "Advokátska kancelária vo Zvolene — insolvencie, obchodné a IT právo, nehnuteľnosti a súdne spory."
      : "Law firm in Zvolen — insolvency, commercial and IT law, real estate and litigation.",
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
    areaServed: "SK",
    priceRange: "€€",
    knowsLanguage: ["sk", "en"],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
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
