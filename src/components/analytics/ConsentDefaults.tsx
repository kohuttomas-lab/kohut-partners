import { GA_ID, ADS_ID } from "@/lib/analytics";

/**
 * Google Consent Mode v2 — východiskový stav.
 *
 * Beží ako prvá vec na stránke, ešte pred akýmkoľvek meracím kódom, a povie
 * Googlu, že návštevník zatiaľ nesúhlasil s ničím. Sám nič nesťahuje, nič
 * neukladá a nikam nič neposiela — je to iba zápis do `dataLayer`.
 *
 * Prečo to tu je: od marca 2024 Google bez signálov `ad_user_data` a
 * `ad_personalization` nesmie použiť dáta návštevníkov z EÚ na remarketing
 * ani na publiká. Bez tejto dvojice (default „denied" → update „granted")
 * by kampane prišli o publiká, aj keď návštevník súhlas dal.
 *
 * Zámerne ide o „basic" režim: gtag.js sa načíta až po kliknutí na „Prijať
 * všetko" (Analytics.tsx). Pred súhlasom teda neodíde Googlu ani anonymný
 * ping — to je pri advokátskej kancelárii dôležitejšie než modelovanie
 * konverzií, ktorého prahy (stovky klikov denne) tento web aj tak nedosiahne.
 */
export function ConsentDefaults() {
  if (!GA_ID && !ADS_ID) return null;

  const js = [
    "window.dataLayer=window.dataLayer||[];",
    "function gtag(){dataLayer.push(arguments);}",
    "window.gtag=gtag;",
    // Bez súhlasu sa z prípadnej Ads značky odstránia identifikátory a gclid
    // sa prenáša v adrese stránky namiesto cookie.
    "gtag('set','ads_data_redaction',true);",
    "gtag('set','url_passthrough',true);",
    "gtag('consent','default',{",
    "'ad_storage':'denied',",
    "'ad_user_data':'denied',",
    "'ad_personalization':'denied',",
    "'analytics_storage':'denied',",
    // Nevyhnutné cookies (jazyk, bezpečnosť) súhlas nepotrebujú.
    "'functionality_storage':'granted',",
    "'security_storage':'granted',",
    "'wait_for_update':500",
    "});",
  ].join("");

  return <script id="consent-default" dangerouslySetInnerHTML={{ __html: js }} />;
}
