import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-industriekletterer.jpg";

const Hero = () => {
  const handleCall = () => {
    window.location.href = "tel:+431234567890";
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/431234567890", "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
        <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto opacity-90">
          Professionelle Reinigung für Hausverwaltungen, Firmen und private Haushalte
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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
            WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;