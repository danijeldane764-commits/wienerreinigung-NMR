import SocialProof from "@/components/SocialProof";

const PainPoints = () => {
  return (
    <>
      {/* Social Proof Testimonial */}
      <SocialProof />

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
                  Die kommen zu spät - oder gar nicht.
                </p>
              </div>
              
              <div className="flex items-start text-left">
                <span className="text-[#D7263D] text-xl mr-3 mt-1">❌</span>
                <p className="font-roboto text-[#333333] text-lg flex-1">
                  Die Arbeit ist schlampig - Ecken bleiben dreckig.
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
                  Kein Rückruf, kein Ansprechpartner - nur Frust.
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

      {/* Why We Are Different Section */}
      <section className="py-16 bg-[#F7F9FC]">
        <div className="container mx-auto px-6">
          <div className="max-w-[1200px] mx-auto text-center">
            {/* Headline */}
            <h2 className="font-poppins font-bold text-[#0A2342] text-4xl md:text-5xl lg:text-6xl mb-6">
              Warum wir anders sind
            </h2>
            
            {/* Intro Text */}
            <p className="font-roboto text-[#333333] text-lg md:text-xl max-w-[800px] mx-auto mb-12">
              Wir machen Schluss mit Ausreden. Wir liefern, was wir versprechen - pünktlich, zuverlässig und transparent.
            </p>
            
            {/* Promises Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Promise 1 */}
              <div className="text-center">
                <div className="text-[#25D366] text-5xl mb-4">✅</div>
                <h3 className="font-poppins font-medium text-[#0A2342] text-xl md:text-2xl mb-3">
                  Pünktlich vor Ort
                </h3>
                <p className="font-roboto text-[#333333] text-base md:text-lg">
                  Keine Ausreden. Wir erscheinen, wenn wir es versprechen.
                </p>
              </div>
              
              {/* Promise 2 */}
              <div className="text-center">
                <div className="text-[#25D366] text-5xl mb-4">✅</div>
                <h3 className="font-poppins font-medium text-[#0A2342] text-xl md:text-2xl mb-3">
                  Fixpreis &#8211; keine Überraschungen
                </h3>
                <p className="font-roboto text-[#333333] text-base md:text-lg">
                  Transparente Angebote, keine versteckten Kosten.
                </p>
              </div>
              
              {/* Promise 3 */}
              <div className="text-center">
                <div className="text-[#25D366] text-5xl mb-4">✅</div>
                <h3 className="font-poppins font-medium text-[#0A2342] text-xl md:text-2xl mb-3">
                  Direkt vom Chef
                </h3>
                <p className="font-roboto text-[#333333] text-base md:text-lg">
                  Kein Callcenter. Du sprichst immer mit dem Chef selbst.
                </p>
              </div>
              
              {/* Promise 4 */}
              <div className="text-center">
                <div className="text-[#25D366] text-5xl mb-4">✅</div>
                <h3 className="font-poppins font-medium text-[#0A2342] text-xl md:text-2xl mb-3">
                  Sauber. Punkt.
                </h3>
                <p className="font-roboto text-[#333333] text-base md:text-lg">
                  Gründlich, professionell und ohne Nacharbeit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PainPoints;