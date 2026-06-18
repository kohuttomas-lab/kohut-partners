// Cookie-consent state shared between the banner and the analytics loader.
// "all" = analytics/marketing allowed; "essential" = only necessary cookies.
export type Consent = "all" | "essential";

const STORAGE_KEY = "kp_consent";
export const CONSENT_EVENT = "kp:consent";

export function getConsent(): Consent | null {
  if (typeof window === "undefined") return null;
  try {
    const v = localStorage.getItem(STORAGE_KEY);
    return v === "all" || v === "essential" ? v : null;
  } catch {
    return null;
  }
}

export function setConsent(value: Consent): void {
  try {
    localStorage.setItem(STORAGE_KEY, value);
  } catch {
    /* ignore */
  }
  // Let the analytics loader react immediately (no reload needed).
  try {
    window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: value }));
  } catch {
    /* ignore */
  }
}
