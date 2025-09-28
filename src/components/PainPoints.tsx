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
            <h2 className="font-poppins font-bold text-[#0A2342] text-3xl md:text-4xl lg:text-5xl mb-8">
              Wenn du schon mal eine Reinigungsfirma in Wien oder Umgebung beauftragt hast, kennst du das Spiel:
            </h2>
            
            {/* Comparison Table */}
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white rounded-lg shadow-lg overflow-hidden">
                {/* Andere (Left Column) */}
                <div className="p-8 bg-red-50 border-r border-gray-200">
                  <h3 className="font-poppins font-bold text-[#D7263D] text-3xl mb-8 text-center">
                    Andere:
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <span className="text-[#D7263D] text-2xl mr-4 mt-1">❌</span>
                      <p className="font-roboto text-[#333333] text-lg flex-1">
                        Die kommen zu spät - oder gar nicht.
                      </p>
                    </div>
                    <div className="flex items-start">
                      <span className="text-[#D7263D] text-2xl mr-4 mt-1">❌</span>
                      <p className="font-roboto text-[#333333] text-lg flex-1">
                        Die Arbeit ist schlampig - Ecken bleiben dreckig.
                      </p>
                    </div>
                    <div className="flex items-start">
                      <span className="text-[#D7263D] text-2xl mr-4 mt-1">❌</span>
                      <p className="font-roboto text-[#333333] text-lg flex-1">
                        Erst billig, dann plötzlich "Sonderkosten".
                      </p>
                    </div>
                    <div className="flex items-start">
                      <span className="text-[#D7263D] text-2xl mr-4 mt-1">❌</span>
                      <p className="font-roboto text-[#333333] text-lg flex-1">
                        Kein Rückruf, kein Ansprechpartner - nur Frust.
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Wir (Right Column) */}
                <div className="p-8 bg-green-50">
                  <h3 className="font-poppins font-bold text-[#25D366] text-3xl mb-8 text-center">
                    Wir:
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <span className="text-[#25D366] text-2xl mr-4 mt-1">✅</span>
                      <p className="font-roboto text-[#333333] text-lg flex-1">
                        Pünktlich vor Ort - keine Ausreden.
                      </p>
                    </div>
                    <div className="flex items-start">
                      <span className="text-[#25D366] text-2xl mr-4 mt-1">✅</span>
                      <p className="font-roboto text-[#333333] text-lg flex-1">
                        Sauber. Punkt. - gründlich und professionell.
                      </p>
                    </div>
                    <div className="flex items-start">
                      <span className="text-[#25D366] text-2xl mr-4 mt-1">✅</span>
                      <p className="font-roboto text-[#333333] text-lg flex-1">
                        Fixpreis - keine versteckten Kosten.
                      </p>
                    </div>
                    <div className="flex items-start">
                      <span className="text-[#25D366] text-2xl mr-4 mt-1">✅</span>
                      <p className="font-roboto text-[#333333] text-lg flex-1">
                        Direkt vom Chef - immer erreichbar.
                      </p>
                    </div>
                  </div>
                </div>
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