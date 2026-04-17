// Zentrale Tracking-Funktion
// Events werden nur gesendet wenn gtag geladen ist (nach Cookie-Einwilligung)

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export const trackEvent = (
  eventName: string,
  params?: Record<string, string>
) => {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", eventName, params);
  }
};
