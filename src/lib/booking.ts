// Cal.com booking config. All "Rezervovať konzultáciu" / "Mám záujem" CTAs open
// this event in a Cal.com modal (real availability synced with the firm's calendar).
// Override the link via NEXT_PUBLIC_CALCOM_LINK — e.g. if the Cal.com username changes.
export const CALCOM_LINK =
  process.env.NEXT_PUBLIC_CALCOM_LINK || "tomas-kohut-jqitcv/pravna-konzultacia-tkak";
export const CALCOM_NAMESPACE = "konzultacia";
export const CALCOM_ENABLED = CALCOM_LINK.length > 0;
