// Atribúcia dopytu — odkiaľ návštevník prišiel. Doplnok k nepovinnej otázke
// „Ako ste nás našli?": tá závisí od ochoty odpovedať, toto nie.
//
// POZOR: všetky hodnoty pochádzajú z `window` a `document`, takže sa smú čítať
// AŽ v prehliadači. collectAttribution() volaj výlučne z obsluhy odoslania
// formulára a captureLanding() z efektu (AttributionCapture) — NIKDY pri
// renderi — na serveri by nemali čo prečítať.
//
// Nič sa neukladá do prehliadača (žiadne cookie, localStorage ani
// sessionStorage), takže nejde o prístup ku koncovému zariadeniu podľa
// § 55 ods. 5 zák. č. 351/2011 Z. z. a nič sa neviaže na cookie lištu.

/**
 * Snímka VSTUPNEJ stránky (prvé načítanie dokumentu v tejto návšteve).
 *
 * Prečo: mestské a obsahové stránky nemajú formulár, takže návštevník z Ads
 * dorazí na /advokat-zvolen?gclid=… a na /kontakt sa preklikne klientsky
 * (next/link). Tým sa z adresy stratia UTM aj gclid a `document.referrer`
 * ostane prázdny — dopyt by potom vyzeral ako priama návšteva. Preto si
 * kampaňové údaje odložíme hneď pri prvom načítaní.
 *
 * Drží sa výlučne v pamäti modulu (zaniká zatvorením karty). Žiadne cookie,
 * localStorage ani sessionStorage — platí to isté, čo pre zvyšok súboru.
 */
let landing: { url: string; referrer: string } | null = null;

/** Zavolá sa raz pri prvom načítaní stránky (AttributionCapture v layoute). */
export function captureLanding(): void {
  if (typeof window === "undefined" || landing) return;
  landing = { url: window.location.href, referrer: document.referrer };
}

const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
] as const;

/**
 * Polia atribúcie pripravené na priame vloženie do `fields` v submitLead().
 * Prázdne hodnoty nechávame prázdne — submitLead ich odfiltruje, takže pri
 * priamej návšteve e-mail nezaťaží ani jeden zbytočný riadok.
 */
export function collectAttribution(locale: string): Record<string, string> {
  if (typeof window === "undefined") return {};

  // Adresa, na ktorej je formulár (kam dopyt patrí).
  const url = new URL(window.location.href);
  // Zdroj kampaňových údajov: vstupná stránka, ak ju máme, inak aktuálna.
  // Pri priamom dopade na /kontakt sú obe rovnaké, takže sa nič nemení.
  const entry = new URL(landing?.url ?? window.location.href);
  const q = entry.searchParams;

  // UTM zlučujeme do jedného riadku — päť samostatných polí by e-mail
  // roztiahlo aj vtedy, keď je vyplnený len utm_source.
  const utm = UTM_KEYS.map((k) => {
    const v = q.get(k)?.trim();
    return v ? `${k.slice(4)}=${v}` : "";
  })
    .filter(Boolean)
    .join(" · ");

  // Referrer z vlastnej domény je interný preklik, nie zdroj návštevy —
  // označíme ho, nech sa v e-maile nemýli s reálnym externým zdrojom.
  const ref = landing?.referrer ?? document.referrer;
  let refLabel = "";
  if (ref) {
    try {
      refLabel = new URL(ref).host === url.host ? `${ref} (interný preklik)` : ref;
    } catch {
      refLabel = ref;
    }
  }

  const entryPath = `${entry.origin}${entry.pathname}`;

  // Intl je v každom podporovanom prehliadači, ale v starších WebView môže
  // hodiť — atribúcia nikdy nesmie zhodiť odoslanie dopytu.
  let tz = "";
  try {
    tz = Intl.DateTimeFormat().resolvedOptions().timeZone ?? "";
  } catch {
    tz = "";
  }

  return {
    // Bez query — UTM aj gclid majú vlastný riadok, nech sa adresa neduplikuje.
    "Stránka dopytu": `${url.origin}${url.pathname}`,
    // Kam viedla reklama/odkaz. Vypĺňa sa len pri prekliku v rámci webu —
    // inak by len zopakovala riadok vyššie.
    "Vstupná stránka": entryPath === `${url.origin}${url.pathname}` ? "" : entryPath,
    "Odkiaľ prišiel": refLabel,
    "Kampaň (UTM)": utm,
    "Google Ads (gclid)": q.get("gclid")?.trim() ?? "",
    "Jazyková verzia": locale === "sk" ? "slovenská (/)" : "anglická (/en)",
    // Krajina dopytu: časové pásmo a jazyk zariadenia. Oboje číta prehliadač
    // sám zo svojho nastavenia — žiadna geolokácia, žiadna IP adresa, žiadna
    // tretia strana; CRM si z toho odvodí vlajku (viď cesta/src/lib/krajiny.ts).
    "Časové pásmo": tz,
    "Jazyk prehliadača": navigator.language || "",
  };
}

/**
 * Beacon pri príchode: pošle gclid/UTM na CRM hneď, nezávisle od formulára.
 * Bez toho sa gclid stratí vždy, keď návštevník namiesto formulára napíše
 * priamy e-mail — jediný doterajší prenos (collectAttribution) beží až pri
 * odoslaní formulára. Beží raz za návštevu (rovnaký strážca ako captureLanding).
 *
 * Neposiela nič osobné — len kampaňové parametre a čas. Endpoint na strane
 * CRM ich ukladá anonymne, bez cookie a bez väzby na konkrétneho človeka;
 * slúži len na neskoršie časové spárovanie s dopytom, ktorý príde mailom.
 */
let beaconOdoslany = false;

export function odoslaniBeacon(znacka: string): void {
  if (typeof window === "undefined" || beaconOdoslany) return;
  const q = new URL(window.location.href).searchParams;
  const gclid = q.get("gclid")?.trim();
  const utmSource = q.get("utm_source")?.trim();
  const utmMedium = q.get("utm_medium")?.trim();
  const utmCampaign = q.get("utm_campaign")?.trim();
  if (!gclid && !(utmMedium === "cpc" && utmSource)) return; // organika sa neposiela
  beaconOdoslany = true;
  const telo = JSON.stringify({
    znacka, gclid, utm_source: utmSource, utm_medium: utmMedium, utm_campaign: utmCampaign,
    landing_path: window.location.pathname,
  });
  const url = "https://crm.tkak.sk/api/atribucia/navsteva";
  try {
    // text/plain je „CORS-safelisted" — sendBeacon na iný podomén (crm.tkak.sk)
    // s application/json by vyžadoval preflight, ktorý beacon nevie urobiť, a
    // prehliadač ho potichu zahodí (overené 10. 9. 2026: sendBeacon vráti true,
    // no na server nič nepríde). Telo je aj tak platný JSON, req.json() na
    // strane servera parsuje podľa obsahu, nie podľa hlavičky.
    if (navigator.sendBeacon) {
      navigator.sendBeacon(url, new Blob([telo], { type: "text/plain" }));
    } else {
      fetch(url, { method: "POST", body: telo, headers: { "Content-Type": "text/plain" }, keepalive: true, mode: "cors" });
    }
  } catch {
    // beacon nesmie nikdy zhodiť stránku
  }
}
