import { Button } from "@/components/ui/button";

const Services = () => {
  return (
    <section className="py-[6vh] bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-[1200px] mx-auto text-center">
          {/* Headline */}
          <h2 className="font-poppins font-bold text-[#0A2342] text-4xl md:text-5xl lg:text-6xl mb-6">
            Unsere Leistungen - Sauberkeit mit Fixpreis & Handschlagqualität
          </h2>
          
          {/* Teaser Text */}
          <p className="font-roboto text-[#333333] text-lg md:text-xl max-w-[800px] mx-auto mb-12">
            Ob Stiegenhaus, Garten oder Fenster in Höhe - wir kümmern uns zuverlässig um alles, was Ihr Gebäude braucht.
          </p>
          
          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Hausbetreuung Card */}
            <div className="relative group h-[48vh] md:h-[48vh] sm:h-[40vh] rounded-lg overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_6px_12px_rgba(0,0,0,0.15)]">
              {/* Background Image Placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700">
                {/* This will be replaced with actual image in editor */}
                <div className="w-full h-full flex items-center justify-center text-white text-sm opacity-50">
                  Hausbetreuung Bild (wird ersetzt)
                </div>
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-35 group-hover:bg-opacity-45 transition-all duration-300"></div>
              
              {/* Content */}
              <div className="absolute inset-0 p-[8%] flex flex-col justify-end text-left">
                {/* Headline */}
                <h3 className="font-poppins font-bold text-white text-[180%] mb-4">
                  Hausbetreuung
                </h3>
                
                {/* Subtext */}
                <p className="font-roboto text-[#E6E6E6] text-[110%] leading-[140%] mb-6">
                  Regelmäßige Betreuung aller Allgemeinflächen - sauber, geordnet, verlässlich.
                </p>
                
                {/* Bullet Points */}
                <ul className="text-white text-sm space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="text-white mr-2 mt-1">•</span>
                    <span>Stiegenhaus, Eingangsbereiche, Gänge</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white mr-2 mt-1">•</span>
                    <span>Kontrolle Licht, Türen, Müllräume</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white mr-2 mt-1">•</span>
                    <span>Kleine Reparaturen und Schadensmeldung</span>
                  </li>
                </ul>
                
                {/* Button */}
                <Button 
                  variant="outline" 
                  className="w-fit border-white text-white bg-transparent hover:bg-white hover:text-[#0A2342] rounded-[10px] px-[18px] py-[10px] transition-all duration-300"
                  aria-label="Mehr erfahren über Hausbetreuung"
                >
                  Mehr erfahren
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;