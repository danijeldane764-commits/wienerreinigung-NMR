const About = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            Über uns
          </h2>
          <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
            <p>
              Wir sind ein Familienunternehmen aus Wien. Bei uns sprechen Sie direkt mit dem Chef. 
              Nach einer kurzen Besichtigung erhalten Sie einen Fixpreis. Wir arbeiten pünktlich, 
              sauber und zuverlässig.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💬</span>
                </div>
                <h4 className="font-semibold text-foreground mb-2">Kostenlose Erstberatung</h4>
                <p className="text-sm">Persönliche Beratung vor Ort</p>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💰</span>
                </div>
                <h4 className="font-semibold text-foreground mb-2">Transparente Fixpreise</h4>
                <p className="text-sm">Klare Preise ohne versteckte Kosten</p>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📍</span>
                </div>
                <h4 className="font-semibold text-foreground mb-2">Einsatzgebiet Wien</h4>
                <p className="text-sm">Wien und Wien Umgebung</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;