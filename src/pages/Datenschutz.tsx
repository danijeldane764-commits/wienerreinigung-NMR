const Datenschutz = () => {
  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl font-bold text-foreground mb-8">Datenschutzerklärung</h1>
        
        <div className="prose prose-lg max-w-none text-foreground space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Datenschutz auf einen Blick</h2>
            <h3 className="text-xl font-medium mb-2">Allgemeine Hinweise</h3>
            <p className="text-muted-foreground">
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren 
              personenbezogenen Daten passiert, wenn Sie unsere Website besuchen. Personenbezogene 
              Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Datenerfassung auf unserer Website</h2>
            <h3 className="text-xl font-medium mb-2">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h3>
            <p className="text-muted-foreground">
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. 
              Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
            </p>
            
            <h3 className="text-xl font-medium mb-2 mt-6">Wie erfassen wir Ihre Daten?</h3>
            <p className="text-muted-foreground">
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. 
              Hierbei kann es sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Kontaktformular</h2>
            <p className="text-muted-foreground">
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus 
              dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks 
              Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. 
              Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Ihre Rechte</h2>
            <p className="text-muted-foreground">
              Sie haben jederzeit das Recht unentgeltlich Auskunft über Herkunft, Empfänger und 
              Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem 
              ein Recht, die Berichtigung, Sperrung oder Löschung dieser Daten zu verlangen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Kontakt</h2>
            <p className="text-muted-foreground">
              Bei Fragen zur Erhebung, Verarbeitung oder Nutzung Ihrer personenbezogenen Daten, 
              bei Auskünften, Berichtigung, Sperrung oder Löschung von Daten wenden Sie sich 
              bitte an:<br /><br />
              
              <strong>Nikola Miloradovic Reinigung</strong><br />
              E-Mail: info@miloradovic-reinigung.at<br />
              Telefon: +43 1 234 567 890
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Datenschutz;