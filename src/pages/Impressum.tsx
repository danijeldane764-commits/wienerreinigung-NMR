const Impressum = () => {
  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl font-bold text-foreground mb-8">Impressum</h1>
        
        <div className="prose prose-lg max-w-none text-foreground">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Nikola Miloradovic Reinigung</h2>
            <p>
              <strong>Inhaber:</strong> Nikola Miloradovic<br />
              <strong>Adresse:</strong> Karmarschgasse 51<br />
              1100 Wien, Österreich
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Kontakt</h2>
            <p>
              Telefon: +43 667 7680897<br />
              E-Mail: nikac998@gmail.com
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Unternehmensform</h2>
            <p>
              Einzelunternehmen
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Berufsrechtliche Regelungen</h2>
            <p>
              Gewerberechtliche Vorschriften der Republik Österreich<br />
              Zuständige Kammer: Wirtschaftskammer Wien<br />
              Zuständige Aufsichtsbehörde: Magistrat der Stadt Wien
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Haftung für Inhalte</h2>
            <p className="text-muted-foreground">
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten 
              nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als 
              Diensteanbieter jedoch nicht unter der Verpflichtung, übermittelte oder gespeicherte 
              fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine 
              rechtswidrige Tätigkeit hinweisen.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Impressum;