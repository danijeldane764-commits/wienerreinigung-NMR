import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";
const heroImage = "/lovable-uploads/46942b1d-df09-4e89-a38e-bb301a305dc2.png";

const Hero = () => {
  const handleCall = () => {
    window.location.href = "tel:+436677680897";
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/436677680897?text=Hallo%20Nikola,%20ich%20brauche%20Unterstützung%20bei%20einer%20Reinigung%20in%20Wien", "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-0">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-primary/80"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Wiener Reinigungsfirma – zuverlässig, schnell und flexibel in Wien und Umgebung
        </h1>
        <p className="text-xl md:text-2xl mb-6 max-w-4xl mx-auto opacity-90">
          Professionelle Reinigung für Hausverwaltungen, Firmen und private Haushalte
        </p>
        
        <p className="text-lg mb-8 opacity-80">
          Direkter Kontakt mit dem Chef
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button 
            variant="cta" 
            size="lg" 
            onClick={handleCall}
            className="w-full sm:w-auto text-lg px-8 py-4"
          >
            <Phone className="w-5 h-5 mr-2" />
            Jetzt anrufen
          </Button>
          <Button 
            variant="whatsapp" 
            size="lg" 
            onClick={handleWhatsApp}
            className="w-full sm:w-auto text-lg px-8 py-4"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Per WhatsApp schreiben
          </Button>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-6 text-sm opacity-90">
          <span className="flex items-center">
            ✓ Aus Wien
          </span>
          <span className="flex items-center">
            ✓ Familienunternehmen
          </span>
          <span className="flex items-center">
            ✓ Angebot in 24h
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;