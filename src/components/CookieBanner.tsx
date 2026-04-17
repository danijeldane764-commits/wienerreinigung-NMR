import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";

export type CookieConsent = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  timestamp: string;
};

const STORAGE_KEY = "cookie-consent";
const OPEN_EVENT = "cookie-banner:open";

export const openCookieBanner = () => {
  window.dispatchEvent(new CustomEvent(OPEN_EVENT));
};

const loadAnalytics = () => {
  if (typeof window === "undefined") return;
  if (document.getElementById("ga-script")) return;
  const script = document.createElement("script");
  script.id = "ga-script";
  script.src = "https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID";
  script.async = true;
  document.head.appendChild(script);

  script.onload = () => {
    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag(...args: unknown[]) {
      window.dataLayer!.push(args);
    };
    window.gtag("js", new Date());
    window.gtag("config", "GA_MEASUREMENT_ID", {
      anonymize_ip: true,
      cookie_flags: "SameSite=None;Secure",
    });
  };
};

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      setVisible(true);
    } else {
      try {
        const parsed: CookieConsent = JSON.parse(stored);
        if (parsed.analytics) loadAnalytics();
      } catch {
        setVisible(true);
      }
    }

    const open = () => {
      const existing = localStorage.getItem(STORAGE_KEY);
      if (existing) {
        try {
          const parsed: CookieConsent = JSON.parse(existing);
          setAnalytics(parsed.analytics);
          setMarketing(parsed.marketing);
        } catch {
          /* ignore */
        }
      }
      setVisible(true);
      setShowSettings(true);
    };
    window.addEventListener(OPEN_EVENT, open);
    return () => window.removeEventListener(OPEN_EVENT, open);
  }, []);

  const persist = (consent: CookieConsent) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
    if (consent.analytics) loadAnalytics();
    setVisible(false);
    setShowSettings(false);
  };

  const acceptAll = () =>
    persist({
      necessary: true,
      analytics: true,
      marketing: true,
      timestamp: new Date().toISOString(),
    });

  const rejectAll = () =>
    persist({
      necessary: true,
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString(),
    });

  const saveSettings = () =>
    persist({
      necessary: true,
      analytics,
      marketing,
      timestamp: new Date().toISOString(),
    });

  if (!visible) return null;

  return (
    <>
      {/* Banner */}
      <div
        role="dialog"
        aria-label="Cookie-Einwilligung"
        className="fixed inset-x-0 bottom-0 z-[2000] animate-in slide-in-from-bottom-8 duration-500"
      >
        <div className="bg-[#0F1B2D] text-white border-t-2 border-white/10 shadow-2xl">
          <div className="container mx-auto px-4 sm:px-6 py-5 sm:py-6">
            <div className="flex flex-col gap-4 max-w-5xl mx-auto">
              <p className="text-sm sm:text-base leading-relaxed">
                Wir verwenden Cookies, um unsere Website optimal zu gestalten.
                Technisch notwendige Cookies werden automatisch gesetzt. Für
                Analyse-Cookies benötigen wir Ihre Einwilligung. Weitere
                Informationen finden Sie in unserer{" "}
                <Link
                  to="/datenschutz"
                  className="underline hover:text-white/80"
                >
                  Datenschutzerklärung
                </Link>
                .
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
                <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={acceptAll}
                    className="w-full sm:w-[180px] h-12 px-6 rounded-md bg-[#22C55E] hover:bg-[#16A34A] text-white font-semibold text-base transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#0F1B2D]"
                  >
                    Alle akzeptieren
                  </button>
                  <button
                    type="button"
                    onClick={rejectAll}
                    className="w-full sm:w-[180px] h-12 px-6 rounded-md bg-transparent border-2 border-white text-white font-semibold text-base hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#0F1B2D]"
                  >
                    Alle ablehnen
                  </button>
                </div>
                <button
                  type="button"
                  onClick={() => setShowSettings(true)}
                  className="text-sm underline text-white/80 hover:text-white text-left sm:text-right"
                >
                  Einstellungen
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Settings Modal */}
      {showSettings && (
        <div
          className="fixed inset-0 z-[2001] flex items-center justify-center bg-black/60 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Cookie-Einstellungen"
        >
          <div className="bg-white rounded-lg shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-5 border-b border-border">
              <h2 className="text-lg font-bold text-foreground">
                Cookie-Einstellungen
              </h2>
              <button
                type="button"
                onClick={() => setShowSettings(false)}
                aria-label="Schließen"
                className="p-1 rounded hover:bg-muted"
              >
                <X className="w-5 h-5 text-foreground" />
              </button>
            </div>

            <div className="p-5 space-y-4">
              <div className="flex items-start justify-between gap-4 p-3 bg-muted rounded-md">
                <div>
                  <h3 className="font-semibold text-foreground">
                    Technisch notwendig
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Erforderlich für den Betrieb der Website. Diese können
                    nicht deaktiviert werden.
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked
                  disabled
                  className="mt-1 h-5 w-5 accent-primary cursor-not-allowed opacity-60"
                  aria-label="Technisch notwendige Cookies (immer aktiv)"
                />
              </div>

              <div className="flex items-start justify-between gap-4 p-3 border border-border rounded-md">
                <div>
                  <h3 className="font-semibold text-foreground">
                    Analyse & Statistik
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Hilft uns zu verstehen, wie Besucher die Website nutzen
                    (Google Analytics, anonymisiert).
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={analytics}
                  onChange={(e) => setAnalytics(e.target.checked)}
                  className="mt-1 h-5 w-5 accent-primary cursor-pointer"
                  aria-label="Analyse-Cookies aktivieren"
                />
              </div>

              <div className="flex items-start justify-between gap-4 p-3 border border-border rounded-md">
                <div>
                  <h3 className="font-semibold text-foreground">Marketing</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Wird verwendet, um Besucher auf Websites zu verfolgen, um
                    relevante Anzeigen zu schalten.
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={marketing}
                  onChange={(e) => setMarketing(e.target.checked)}
                  className="mt-1 h-5 w-5 accent-primary cursor-pointer"
                  aria-label="Marketing-Cookies aktivieren"
                />
              </div>
            </div>

            <div className="p-5 border-t border-border flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={saveSettings}
                className="flex-1 h-11 px-4 rounded-md bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
              >
                Auswahl speichern
              </button>
              <button
                type="button"
                onClick={acceptAll}
                className="flex-1 h-11 px-4 rounded-md bg-[#22C55E] text-white font-semibold hover:bg-[#16A34A] transition-colors"
              >
                Alle akzeptieren
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieBanner;
