const PainPoints = () => {
  return (
    <>
      {/* Original "Kennst du das?" Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-h2 mb-12 text-foreground">
              Kennst du das?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="bg-muted/50 rounded-lg p-8 border border-border">
                <p className="text-body text-foreground">❌ <strong>Hausverwaltung:</strong> Mieter beschweren sich, Stiegenhaus stinkt trotz Reinigung</p>
              </div>
              
              <div className="bg-muted/50 rounded-lg p-8 border border-border">
                <p className="text-body text-foreground">❌ <strong>Kanzlei:</strong> Mandanten sehen Schlieren am Glas - peinlich</p>
              </div>
              
              <div className="bg-muted/50 rounded-lg p-8 border border-border">
                <p className="text-body text-foreground">❌ <strong>Baufirma:</strong> Endreinigung "fertig", aber Staub und Zementschlieren überall</p>
              </div>
              
              <div className="bg-muted/50 rounded-lg p-8 border border-border">
                <p className="text-body text-foreground">❌ <strong>Haushalt:</strong> Putzfirma unpünktlich, schlampig, plötzlich Sonderkosten</p>
              </div>
            </div>
            
            <blockquote className="text-h3 font-medium italic text-primary mb-10">
              "Seit du da bist, ruft keiner mehr an zum Schimpfen."
            </blockquote>
          </div>
        </div>
      </section>

      {/* New Pain Block Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-[1200px] mx-auto text-center">
            {/* Main Headline */}
            <h2 className="font-poppins font-bold text-[#0A2342] text-4xl md:text-5xl lg:text-6xl mb-6">
              Sauberkeit. Ohne Ausreden.
            </h2>
            
            {/* Subheadline */}
            <p className="font-roboto font-medium text-[#0A2342] text-2xl md:text-3xl mb-8">
              Pünktlich. Zuverlässig. Fixpreis.
            </p>
            
            {/* Intro Text */}
            <p className="font-roboto text-[#333333] text-lg md:text-xl mb-8">
              Wenn du schon mal eine Reinigungsfirma in Wien beauftragt hast, kennst du das Spiel:
            </p>
            
            {/* Pain Points List */}
            <div className="max-w-3xl mx-auto space-y-4 mb-12">
              <div className="flex items-start text-left">
                <span className="text-[#D7263D] text-xl mr-3 mt-1">❌</span>
                <p className="font-roboto text-[#333333] text-lg flex-1">
                  Die kommen zu spät – oder gar nicht.
                </p>
              </div>
              
              <div className="flex items-start text-left">
                <span className="text-[#D7263D] text-xl mr-3 mt-1">❌</span>
                <p className="font-roboto text-[#333333] text-lg flex-1">
                  Die Arbeit ist schlampig – Ecken bleiben dreckig.
                </p>
              </div>
              
              <div className="flex items-start text-left">
                <span className="text-[#D7263D] text-xl mr-3 mt-1">❌</span>
                <p className="font-roboto text-[#333333] text-lg flex-1">
                  Erst billig, dann plötzlich "Sonderkosten".
                </p>
              </div>
              
              <div className="flex items-start text-left">
                <span className="text-[#D7263D] text-xl mr-3 mt-1">❌</span>
                <p className="font-roboto text-[#333333] text-lg flex-1">
                  Kein Rückruf, kein Ansprechpartner – nur Frust.
                </p>
              </div>
            </div>
            
            {/* Closing Statement */}
            <div className="mt-12">
              <p className="font-montserrat font-bold text-[#0A2342] text-2xl md:text-3xl">
                Wir machen Schluss mit dem Mist.<br />
                Wir machen sauber. Punkt.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PainPoints;