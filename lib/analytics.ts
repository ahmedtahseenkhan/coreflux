// Google Analytics 4. Set NEXT_PUBLIC_GA_MEASUREMENT_ID (e.g. G-XXXXXXXXXX)
// at build time; when it's empty, no analytics code or cookie banner is shown.
export const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "";

/** localStorage key holding the visitor's choice: "granted" | "denied". */
export const CONSENT_KEY = "cf-consent";
/** Window event that reopens the cookie banner (footer "Cookie settings"). */
export const OPEN_SETTINGS_EVENT = "cf:cookie-settings";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/** Sends a GA4 event. No-op unless the visitor accepted analytics. */
export function trackEvent(name: string, params: Record<string, unknown> = {}) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", name, params);
  }
}
