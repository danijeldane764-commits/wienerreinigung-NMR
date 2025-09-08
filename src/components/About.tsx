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
              <strong className="text-foreground">Nikola Miloradovic Reinigung</strong> ist ein 
              Familienunternehmen aus Wien, das sich auf professionelle Reinigungsdienstleistungen 
              für Hausverwaltungen, Firmen und private Haushalte spezialisiert hat.
            </p>
            <p>
              Bei uns haben Sie immer direkten Kontakt mit dem Chef – keine anonymen Hotlines 
              oder unpersönliche Betreuung. Wir legen großen Wert auf persönliche Beratung und 
              erstellen nach einer persönlichen Besichtigung ein transparentes Angebot zum Fixpreis.
            </p>
            <p>
              Unser erfahrenes Team steht für Qualität, Zuverlässigkeit und Flexibilität. 
              Ob Hausbetreuung, Fensterreinigung, Industriekletterer-Arbeiten oder Gartenpflege – 
              wir sind Ihr vertrauensvoller Partner in Wien und Umgebung.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;