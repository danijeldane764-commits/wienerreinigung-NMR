const Datenschutz = () => {
  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl font-bold text-foreground mb-8">Datenschutzerklärung</h1>
        
        <div className="prose prose-lg max-w-none text-foreground space-y-8">
          <p className="text-muted-foreground">
            Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir verarbeiten Ihre Daten 
            ausschließlich auf Grundlage der gesetzlichen Bestimmungen (DSGVO, TKG 2003).
          </p>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Kontaktaufnahme</h2>
            <p className="text-muted-foreground">
              Wenn Sie per Telefon oder WhatsApp Kontakt mit uns aufnehmen, verarbeiten wir Ihre 
              Angaben zur Bearbeitung der Anfrage und für Anschlussfragen. Diese Daten geben wir 
              nicht ohne Ihre Einwilligung weiter.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Speicherdauer</h2>
            <p className="text-muted-foreground">
              Ihre Daten werden so lange gespeichert, wie es zur Bearbeitung Ihrer Anfrage 
              erforderlich ist. Danach werden sie gelöscht.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Ihre Rechte</h2>
            <p className="text-muted-foreground">
              Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung, 
              Datenübertragbarkeit und Widerruf einer erteilten Einwilligung. Wenn Sie der Meinung sind, 
              dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht verstößt, können Sie sich 
              bei der Datenschutzbehörde beschweren.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Kontakt für Datenschutzanfragen</h2>
            <p className="text-muted-foreground">
              <strong>Nikola Miloradovic</strong><br />
              E-Mail: nikac998@gmail.com<br />
              Telefon: +43 667 7680897
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Datenschutz;