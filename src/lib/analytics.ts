// Analytics IDs come from env (set them in Vercel). If unset, that tracker
// simply isn't loaded — so the site is safe without them.
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "";
export const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID ?? "";
export const ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID ?? "";
export const ADS_LABEL = process.env.NEXT_PUBLIC_GOOGLE_ADS_LABEL ?? "";
// Separate label so phone calls don't get counted as form leads. Unset = the
// Ads conversion simply isn't sent (GA4 + Pixel still get the event).
export const ADS_PHONE_LABEL = process.env.NEXT_PUBLIC_GOOGLE_ADS_PHONE_LABEL ?? "";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

/** Send a page_view on client-side route changes (GA4 + Meta Pixel). */
export function pageview(path: string): void {
  if (typeof window === "undefined") return;
  if (GA_ID && window.gtag) window.gtag("config", GA_ID, { page_path: path });
  if (META_PIXEL_ID && window.fbq) window.fbq("track", "PageView");
}

/** Conversion: a lead from a form or booking. No-op until analytics is loaded. */
export function trackLead(source: string): void {
  if (typeof window === "undefined") return;
  if (window.gtag && ADS_ID && ADS_LABEL) {
    window.gtag("event", "conversion", { send_to: `${ADS_ID}/${ADS_LABEL}` });
  }
  if (window.gtag) window.gtag("event", "generate_lead", { source });
  if (window.fbq) window.fbq("track", "Lead", { source });
}

/**
 * Conversion: the visitor tapped a phone number. Kept apart from trackLead so
 * calls and form leads stay separable in GA4 and in Google Ads. `source` is
 * the page the number was tapped on (e.g. "/advokat-zvolen").
 */
export function trackPhoneClick(source: string): void {
  if (typeof window === "undefined") return;
  if (window.gtag && ADS_ID && ADS_PHONE_LABEL) {
    window.gtag("event", "conversion", { send_to: `${ADS_ID}/${ADS_PHONE_LABEL}` });
  }
  if (window.gtag) window.gtag("event", "phone_click", { source });
  if (window.fbq) window.fbq("track", "Contact", { source });
}
