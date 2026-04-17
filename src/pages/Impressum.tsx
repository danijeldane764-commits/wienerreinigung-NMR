import { useEffect } from "react";

const Impressum = () => {
  useEffect(() => {
    document.title = "Impressum | Nikola Miloradovic Reinigung Wien";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Impressum und rechtliche Informationen der Reinigungsfirma Nikola Miloradovic in 1100 Wien. Kontakt, Gewerbeinformationen und Offenlegung."
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl font-bold text-foreground mb-4">Impressum</h1>
        <p className="text-sm text-muted-foreground mb-10">
          Informationspflicht laut §5 E-Commerce-Gesetz (ECG), §63 Gewerbeordnung (GewO)
          und Offenlegungspflicht laut §25 Mediengesetz (MedienG)
        </p>

        <div className="prose prose-lg max-w-none text-foreground space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Nikola Miloradovic Reinigung</h2>
            <p>
              <strong>Inhaber:</strong> Nikola Miloradovic<br />
              <strong>Unternehmensform:</strong> Einzelunternehmen<br />
              <strong>Adresse:</strong> Karmarschgasse 51, 1100 Wien, Österreich
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Kontakt</h2>
            <p>
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
            <h2 className="text-2xl font-semibold mb-4">Berufsrechtliche Regelungen</h2>
            <p className="mb-3">
              Anwendbare Rechtsvorschriften: Gewerbeordnung der Republik Österreich
              <br />
              Abrufbar unter:{" "}
              <a
                href="https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=10007517"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline break-all"
              >
                https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=10007517
              </a>
            </p>
            <p>
              Zuständige Kammer:{" "}
              <a
                href="https://wko.at"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Wirtschaftskammer Wien
              </a>
              <br />
              Zuständige Gewerbebehörde: Magistrat der Stadt Wien
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Offenlegung gemäß §25 Mediengesetz (MedienG)
            </h2>
            <p>
              <strong>Medieninhaber:</strong> Nikola Miloradovic
              <br />
              <strong>Anschrift:</strong> Karmarschgasse 51, 1100 Wien, Österreich
              <br />
              <strong>Unternehmensgegenstand:</strong> Reinigungsdienstleistungen, Hausbetreuung,
              Fensterreinigung, Industriekletterei, Winterdienst und Schneeräumung in Wien und
              Umgebung.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Haftung für Inhalte</h2>
            <p className="text-muted-foreground">
              Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für die Richtigkeit,
              Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
              Als Diensteanbieter sind wir gemäß §16 E-Commerce-Gesetz (ECG) für eigene Inhalte
              und bereitgestellte Informationen auf dieser Website nach den allgemeinen Gesetzen
              verantwortlich. Wir sind jedoch gemäß §18 ECG nicht verpflichtet, die von uns
              übermittelten oder gespeicherten Informationen zu überwachen oder nach Umständen zu
              forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur
              Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen
              aufgrund von gerichtlichen oder behördlichen Anordnungen bleiben hiervon unberührt.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Haftung für Links</h2>
            <p className="text-muted-foreground">
              Unsere Website enthält Links zu externen Websites Dritter, auf deren Inhalte wir
              keinen Einfluss haben. Für die Inhalte der verlinkten Seiten ist stets der jeweilige
              Anbieter oder Betreiber der Seiten verantwortlich. Eine permanente inhaltliche
              Kontrolle der verlinkten Seiten ist ohne konkrete Anhaltspunkte einer Rechtsverletzung
              nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links
              umgehend entfernen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Urheberrecht</h2>
            <p className="text-muted-foreground">
              Die durch den Betreiber dieser Website erstellten Inhalte und Werke unterliegen dem
              österreichischen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und
              jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der
              schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">EU-Streitschlichtung</h2>
            <p className="text-muted-foreground">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS)
              bereit:{" "}
              <a
                href="https://ec.europa.eu/consumers/odr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                https://ec.europa.eu/consumers/odr/
              </a>
              <br />
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Impressum;
