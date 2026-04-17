

# Plan: Rechtliche Compliance -- Alle 10 Schritte

## Zusammenfassung
Alle 10 Schritte werden umgesetzt, um die Website DSGVO-, ECG-, TKG-2021- und MedienG-konform zu machen. Das umfasst: lokale Fonts, Entfernung von Google Analytics/Ads, lokale Bilder, BrowserRouter, neues Impressum, Cookie-Banner, neue Datenschutzerklärung, Footer-Update, Meta-Tags und JSON-LD-Korrektur.

---

## Schritt 1: Google Fonts lokal einbinden

**Dateien:**
- Neue Dateien: `public/fonts/` -- WOFF2-Dateien für Inter, Poppins, Roboto, Montserrat (alle benötigten Gewichte)
- `src/index.css` -- Zeile 1: `@import url(...)` entfernen, stattdessen `@font-face`-Deklarationen einfügen
- `index.html` -- Zeilen 27-29: Alle drei `<link>`-Tags zu fonts.googleapis.com/fonts.gstatic.com entfernen

Font-Dateien werden per Script von google-webfonts-helper oder direkt heruntergeladen und in `public/fonts/` gespeichert.

---

## Schritt 2: Google Analytics/Ads entfernen, trackEvent erstellen

**Dateien:**
- `index.html` -- Zeilen 12-24 entfernen (GA4 + Ads Script-Tags)
- Neue Datei: `src/utils/analytics.ts` -- zentrale `trackEvent()`-Funktion
- 12 Komponentendateien: Alle `(window as any).gtag(...)` Aufrufe durch `trackEvent()` ersetzen:
  - `Header.tsx`, `Hero.tsx`, `HowItWorks.tsx`, `Contact.tsx`, `Trust.tsx`, `TrustTiles.tsx`, `Fensterreinigung.tsx`, `FensterreinigungSeiltechnik.tsx`, `Hausbetreuung.tsx`, `Winterdienst.tsx`, `FinalCTA.tsx`, `ChatWindow.tsx`

---

## Schritt 3: Externe Bilder lokal einbinden

**Dateien:**
- OG-Image und Favicon von `storage.googleapis.com` herunterladen nach `public/`
- `index.html` -- OG/Twitter image Meta-Tags und Favicon `<link>` auf lokale Pfade ändern

---

## Schritt 4: HashRouter zu BrowserRouter

**Dateien:**
- `src/App.tsx` -- `HashRouter` durch `BrowserRouter` ersetzen (Import + Verwendung)
- `vite.config.ts` -- `base` auf `"/"` setzen (statt `"./"` in Production), damit absolute Pfade funktionieren
- `src/components/Footer.tsx` -- Links von `<a href=...>` zu React Router `<Link>` umstellen
- Keine `_redirects`-Datei nötig -- Lovable Hosting unterstützt SPA-Routing nativ

---

## Schritt 5: Impressum komplett ersetzen

**Datei:** `src/pages/Impressum.tsx`
- Gesamten Inhalt durch den bereitgestellten rechtlich korrekten Text ersetzen (ECG, GewO, MedienG statt TMG)
- Links zu RIS, WKO und OS-Plattform als klickbare `<a>`-Tags
- Meta-Tags per `useEffect` setzen (Schritt 9 integriert)

---

## Schritt 6: Cookie-Banner implementieren

**Neue Dateien:**
- `src/components/CookieBanner.tsx` -- Vollständige Cookie-Banner-Komponente mit:
  - Fixierte Leiste am unteren Rand, dunkelblau, weiße Schrift
  - "Alle akzeptieren" (grün) und "Alle ablehnen" (transparent/Rahmen) -- gleich groß
  - "Einstellungen"-Link für Modal mit Kategorien
  - localStorage-basierte Einwilligungsspeicherung (`cookie-consent` Key)
  - Bedingte GA-Script-Ladung bei Zustimmung
  - Einblende-Animation von unten
  - Responsive (Buttons untereinander auf Mobile)
  - Export einer `openCookieBanner`-Funktion/State für Footer-Link

**Geänderte Dateien:**
- `src/pages/Index.tsx` -- CookieBanner einbinden
- `src/App.tsx` -- CookieBanner global einbinden (damit es auf allen Seiten sichtbar ist)

---

## Schritt 7: Datenschutzerklärung komplett ersetzen

**Datei:** `src/pages/Datenschutz.tsx`
- Gesamten Inhalt durch den bereitgestellten DSGVO-konformen Text ersetzen
- Alle Links (DSB, WhatsApp Privacy, Google Privacy, GA Opt-out) als klickbare Links
- Meta-Tags per `useEffect` (Schritt 9 integriert)

---

## Schritt 8: Footer aktualisieren

**Datei:** `src/components/Footer.tsx`
- Dritten Link "Cookie-Einstellungen" hinzufügen (nach Datenschutzerklärung)
- Klick öffnet den Cookie-Banner erneut
- Links zu `/impressum` und `/datenschutz` als React Router `<Link>`-Komponenten

---

## Schritt 9: Meta-Tags für Unterseiten

**Dateien:** `src/pages/Impressum.tsx` und `src/pages/Datenschutz.tsx`
- Jeweils `useEffect` mit `document.title` und Meta-Description setzen
- Impressum: "Impressum | Nikola Miloradovic Reinigung Wien"
- Datenschutz: "Datenschutzerklärung | Nikola Miloradovic Reinigung Wien"

---

## Schritt 10: JSON-LD Schema korrigieren

**Datei:** `index.html`
- Alle `deine-domain.at` durch `wienerreinigung.com` ersetzen
- `canonical` Link auf `https://wienerreinigung.com` setzen
- Image-Feld im Schema auf lokalen Pfad aktualisieren

---

## Technische Details

- **Fonts**: 4 Schriftfamilien x mehrere Gewichte = ca. 15-20 WOFF2-Dateien (~500KB gesamt)
- **Cookie-Banner State**: Global via React Context oder einfacher Callback-Export, damit Footer den Banner erneut öffnen kann
- **vite.config.ts base**: Muss auf `"/"` geändert werden, damit BrowserRouter und absolute Asset-Pfade korrekt funktionieren
- **GitHub Pages Deploy**: Funktioniert nicht mit BrowserRouter (kein SPA-Fallback). Da die primäre Hosting-Plattform Lovable ist (wo SPA-Routing nativ funktioniert), ist das akzeptabel. Die `404.html` im `public/`-Ordner kann als Fallback dienen.

