// Analytics IDs come from env (set them in Vercel). If unset, that tracker
// simply isn't loaded — so the site is safe without them.
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "";
export const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID ?? "";

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
  if (window.gtag) window.gtag("event", "generate_lead", { source });
  if (window.fbq) window.fbq("track", "Lead", { source });
}
