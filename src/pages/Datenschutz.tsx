import { useEffect } from "react";

const Datenschutz = () => {
  useEffect(() => {
    document.title = "Datenschutzerklärung | Nikola Miloradovic Reinigung Wien";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Datenschutzerklärung der Reinigungsfirma Nikola Miloradovic in Wien. Informationen zur Verarbeitung Ihrer personenbezogenen Daten gemäß DSGVO."
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl font-bold text-foreground mb-10">
          Datenschutzerklärung
        </h1>

        <div className="prose prose-lg max-w-none text-foreground space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Verantwortlicher</h2>
            <p>
              Nikola Miloradovic<br />
              Karmarschgasse 51<br />
              1100 Wien, Österreich<br />
              Telefon:{" "}
              <a href="tel:+436677680897" className="text-primary hover:underline">
                +43 667 7680897
              </a>
              <br />
              E-Mail:{" "}
              <a href="mailto:nikac998@gmail.com" className="text-primary hover:underline">
                nikac998@gmail.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Grundsätze der Datenverarbeitung</h2>
            <p className="text-muted-foreground">
              Wir verarbeiten personenbezogene Daten im Einklang mit der Datenschutz-Grundverordnung
              (DSGVO), dem österreichischen Datenschutzgesetz (DSG) und dem Telekommunikationsgesetz
              2021 (TKG 2021). Personenbezogene Daten werden nur erhoben, soweit dies zur
              Bereitstellung unserer Website und unserer Leistungen erforderlich ist oder Sie in die
              Verarbeitung eingewilligt haben.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Zugriff auf die Website (Server-Log-Dateien)
            </h2>
            <p className="text-muted-foreground mb-3">
              Bei jedem Zugriff auf unsere Website werden automatisch folgende Daten durch den
              Hostinganbieter erfasst und in Server-Log-Dateien gespeichert:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-1 mb-3">
              <li>IP-Adresse des zugreifenden Geräts</li>
              <li>Datum und Uhrzeit des Zugriffs</li>
              <li>Name und URL der abgerufenen Seite</li>
              <li>Übertragene Datenmenge</li>
              <li>Meldung, ob der Zugriff erfolgreich war</li>
              <li>Erkennungsdaten des verwendeten Browsers und Betriebssystems</li>
              <li>Referrer-URL (die zuvor besuchte Seite)</li>
            </ul>
            <p className="text-muted-foreground">
              Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der
              Sicherstellung eines störungsfreien Betriebs der Website). Diese Daten werden nicht
              mit anderen Datenquellen zusammengeführt und nach spätestens 30 Tagen automatisch
              gelöscht.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Hosting</h2>
            <p className="text-muted-foreground mb-3">
              Diese Website wird über Lovable (Lovable Technologies, Inc.) bereitgestellt. Dabei
              werden die oben genannten Server-Log-Daten verarbeitet. Zusätzlich wird für
              Backend-Funktionen Supabase (Supabase, Inc., San Francisco, USA) eingesetzt. Soweit
              Daten in die USA übermittelt werden, erfolgt dies auf Grundlage des EU-US Data Privacy
              Frameworks (DPF) bzw. der EU-Standardvertragsklauseln gemäß Art. 46 Abs. 2 lit. c
              DSGVO.
            </p>
            <p className="text-muted-foreground">
              Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer
              zuverlässigen und sicheren Bereitstellung der Website).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Kontaktaufnahme per Telefon und E-Mail
            </h2>
            <p className="text-muted-foreground mb-3">
              Wenn Sie uns per Telefon oder E-Mail kontaktieren, werden Ihre Angaben (Name,
              Telefonnummer, E-Mail-Adresse, Inhalt Ihrer Anfrage) zur Bearbeitung der Anfrage bei
              uns gespeichert.
            </p>
            <p className="text-muted-foreground mb-3">
              Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen bzw.
              Vertragserfüllung) sowie Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der
              Beantwortung Ihrer Anfrage).
            </p>
            <p className="text-muted-foreground">
              Speicherdauer: Ihre Daten werden gelöscht, sobald Ihre Anfrage abschließend bearbeitet
              wurde und keine gesetzlichen Aufbewahrungspflichten entgegenstehen. Gesetzliche
              Aufbewahrungsfristen (z.B. nach der Bundesabgabenordnung) betragen in der Regel 7
              Jahre.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Kontaktaufnahme per WhatsApp</h2>
            <p className="text-muted-foreground mb-3">
              Für die Kontaktaufnahme bieten wir auch WhatsApp an. WhatsApp ist ein Dienst der
              WhatsApp Ireland Limited, 4 Grand Canal Square, Grand Canal Harbour, Dublin 2,
              Irland (ein Unternehmen der Meta Platforms, Inc.).
            </p>
            <p className="text-muted-foreground mb-3">
              Wenn Sie uns über WhatsApp kontaktieren, werden folgende Daten verarbeitet:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-1 mb-3">
              <li>Ihre Mobilfunknummer</li>
              <li>Ihr WhatsApp-Profilname und Profilbild</li>
              <li>Nachrichteninhalte (Text, Bilder, Sprachnachrichten)</li>
              <li>Zeitstempel der Nachrichten</li>
            </ul>
            <p className="text-muted-foreground mb-3">
              WhatsApp verschlüsselt die Kommunikation Ende-zu-Ende. Allerdings verarbeitet
              WhatsApp/Meta Metadaten (z.B. wer mit wem wann kommuniziert) auf Servern, die sich
              auch außerhalb der EU befinden können, unter anderem in den USA. Die Datenübermittlung
              in die USA erfolgt auf Grundlage des EU-US Data Privacy Frameworks (DPF) sowie der
              EU-Standardvertragsklauseln gemäß Art. 46 Abs. 2 lit. c DSGVO.
            </p>
            <p className="text-muted-foreground mb-3">
              Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung). Indem Sie uns aktiv über
              WhatsApp kontaktieren, willigen Sie in die damit verbundene Datenverarbeitung ein.
              Sie können diese Einwilligung jederzeit widerrufen, indem Sie uns stattdessen per
              Telefon oder E-Mail kontaktieren.
            </p>
            <p className="text-muted-foreground mb-3">
              Weitere Informationen:{" "}
              <a
                href="https://www.whatsapp.com/legal/privacy-policy-eea"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline break-all"
              >
                https://www.whatsapp.com/legal/privacy-policy-eea
              </a>
            </p>
            <p className="text-muted-foreground">
              Hinweis: Wenn Sie die Datenverarbeitung durch WhatsApp/Meta nicht wünschen,
              kontaktieren Sie uns bitte per Telefon (+43 667 7680897) oder E-Mail
              (nikac998@gmail.com).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Chat-Funktion</h2>
            <p className="text-muted-foreground mb-3">
              Unsere Website bietet eine Chat-Funktion an. Wenn Sie diese nutzen, werden Ihre
              Nachrichten zur Verarbeitung an einen KI-gestützten Dienst (Lovable AI Gateway)
              übermittelt. Dabei werden der Inhalt Ihrer Nachrichten und technische Daten
              (IP-Adresse, Zeitstempel) verarbeitet.
            </p>
            <p className="text-muted-foreground mb-3">
              Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung). Die Nutzung der
              Chat-Funktion ist freiwillig. Ihre Chat-Nachrichten werden nicht dauerhaft
              gespeichert und nach Beendigung der Sitzung gelöscht.
            </p>
            <p className="text-muted-foreground">
              Hinweis: Geben Sie im Chat keine sensiblen personenbezogenen Daten ein (z.B.
              Gesundheitsdaten, Finanzdaten).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Cookies und lokale Speicherung</h2>
            <h3 className="text-xl font-semibold mb-2">
              Technisch notwendige Cookies und Speicherung
            </h3>
            <p className="text-muted-foreground mb-4">
              Wir verwenden technisch notwendige Speichermechanismen, die für den Betrieb der
              Website erforderlich sind. Dazu gehört die Speicherung Ihrer Cookie-Einwilligung im
              lokalen Speicher (localStorage) Ihres Browsers. Für diese Speicherung ist keine
              Einwilligung erforderlich (§165 Abs. 3 TKG 2021).
            </p>

            <h3 className="text-xl font-semibold mb-2">Analyse-Cookies (nur mit Einwilligung)</h3>
            <p className="text-muted-foreground mb-3">
              Sofern Sie im Cookie-Banner der Kategorie "Analyse" zustimmen, wird Google Analytics
              (Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland) eingesetzt.
              Google Analytics verwendet Cookies, um die Nutzung der Website zu analysieren. Die
              durch das Cookie erzeugten Informationen werden in der Regel an einen Server von
              Google in den USA übertragen und dort gespeichert. Wir verwenden Google Analytics mit
              aktivierter IP-Anonymisierung (anonymize_ip), sodass Ihre IP-Adresse innerhalb der EU
              gekürzt wird.
            </p>
            <p className="text-muted-foreground mb-3">
              Sie können Ihre Einwilligung jederzeit über den Link "Cookie-Einstellungen" im
              Footer der Website widerrufen.
            </p>
            <p className="text-muted-foreground mb-3">
              Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung).
            </p>
            <p className="text-muted-foreground">
              Weitere Informationen:{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                https://policies.google.com/privacy
              </a>
              <br />
              Browser-Plugin zur Deaktivierung:{" "}
              <a
                href="https://tools.google.com/dlpage/gaoptout"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                https://tools.google.com/dlpage/gaoptout
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Ihre Rechte</h2>
            <p className="text-muted-foreground mb-3">
              Sie haben gemäß DSGVO folgende Rechte:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>
                <strong>Recht auf Auskunft (Art. 15 DSGVO):</strong> Sie können Auskunft über Ihre
                bei uns gespeicherten personenbezogenen Daten verlangen.
              </li>
              <li>
                <strong>Recht auf Berichtigung (Art. 16 DSGVO):</strong> Sie können die Berichtigung
                unrichtiger oder die Vervollständigung unvollständiger Daten verlangen.
              </li>
              <li>
                <strong>Recht auf Löschung (Art. 17 DSGVO):</strong> Sie können die Löschung Ihrer
                Daten verlangen, sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
              </li>
              <li>
                <strong>Recht auf Einschränkung (Art. 18 DSGVO):</strong> Sie können die
                Einschränkung der Verarbeitung Ihrer Daten verlangen.
              </li>
              <li>
                <strong>Recht auf Datenübertragbarkeit (Art. 20 DSGVO):</strong> Sie können Ihre
                Daten in einem strukturierten, gängigen und maschinenlesbaren Format erhalten.
              </li>
              <li>
                <strong>Widerspruchsrecht (Art. 21 DSGVO):</strong> Sie können der Verarbeitung
                Ihrer Daten, die auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO erfolgt, jederzeit
                widersprechen.
              </li>
              <li>
                <strong>Recht auf Widerruf (Art. 7 Abs. 3 DSGVO):</strong> Eine erteilte
                Einwilligung können Sie jederzeit widerrufen, ohne dass die Rechtmäßigkeit der
                aufgrund der Einwilligung bis zum Widerruf erfolgten Verarbeitung berührt wird.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Beschwerderecht bei der Aufsichtsbehörde
            </h2>
            <p className="text-muted-foreground mb-3">
              Wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer Daten gegen die DSGVO
              verstößt, haben Sie das Recht auf Beschwerde bei:
            </p>
            <p className="text-muted-foreground">
              Österreichische Datenschutzbehörde<br />
              Barichgasse 40-42<br />
              1030 Wien<br />
              Telefon: +43 1 52 152-0<br />
              E-Mail:{" "}
              <a href="mailto:dsb@dsb.gv.at" className="text-primary hover:underline">
                dsb@dsb.gv.at
              </a>
              <br />
              Website:{" "}
              <a
                href="https://www.dsb.gv.at"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                https://www.dsb.gv.at
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Kontakt für Datenschutzanfragen</h2>
            <p className="text-muted-foreground">
              Nikola Miloradovic<br />
              E-Mail:{" "}
              <a href="mailto:nikac998@gmail.com" className="text-primary hover:underline">
                nikac998@gmail.com
              </a>
              <br />
              Telefon:{" "}
              <a href="tel:+436677680897" className="text-primary hover:underline">
                +43 667 7680897
              </a>
            </p>
          </section>

          <p className="text-sm text-muted-foreground pt-4 border-t border-border">
            Stand: April 2026
          </p>
        </div>
      </div>
    </div>
  );
};

export default Datenschutz;
