// Cal.com booking config. All "Rezervovať konzultáciu" / "Mám záujem" CTAs open
// this event in a Cal.com modal (real availability synced with the firm's calendar).
// Two event types share one availability: the Slovak one and an English one for
// the /en locale (title + description in English). Override via env if the
// Cal.com username or slugs ever change.
export const CALCOM_LINK =
  process.env.NEXT_PUBLIC_CALCOM_LINK || "tomas-kohut-jqitcv/pravna-konzultacia-tkak";
export const CALCOM_LINK_EN =
  process.env.NEXT_PUBLIC_CALCOM_LINK_EN || "tomas-kohut-jqitcv/legal-consultation-tkak";
export const CALCOM_NAMESPACE = "konzultacia";
export const CALCOM_ENABLED = CALCOM_LINK.length > 0;

export function calLinkForLocale(locale: string): string {
  return locale === "en" ? CALCOM_LINK_EN : CALCOM_LINK;
}
