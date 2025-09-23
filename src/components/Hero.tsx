import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, X, Check } from "lucide-react";
import heroImage from "@/assets/hero-office-cleaning.jpg";

const Hero = () => {
  const handleCall = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'call_click_hero', {
        event_category: 'engagement',
        event_label: 'hero_section'
      });
    }
    window.location.href = "tel:+436677680897";
  };

  const handleWhatsApp = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'whatsapp_click_hero', {
        event_category: 'engagement',
        event_label: 'hero_section'
      });
    }
    window.open("https://wa.me/436677680897?text=Hallo%20Nikola,%20bitte%20um%20kurze%20Chef-Besichtigung%20in%20Wien.%20Wunschtermin:%20[Datum/Uhrzeit].", "_blank");
  };

  return (
    <section className="relative h-[85vh] flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0,0,0,0.45)' }}></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <div className="max-w-[900px] mx-auto">
          <h1 className="font-poppins font-bold text-white text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight">
            Sauberkeit ohne Ausreden in Wien & Umgebung
          </h1>
          <p className="font-roboto text-[#E6E6E6] text-xl md:text-2xl mb-8 leading-relaxed">
            Für Hausverwaltungen, Kanzleien, Baufirmen, Unternehmen & Haushalte<br />
            Direkt vom Chef. Fixpreis. Versichert.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="whatsapp-primary" 
              size="lg" 
              onClick={handleWhatsApp}
              className="w-full sm:w-auto font-poppins font-medium text-lg px-8 py-4 h-14"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp – Angebot in 1 Minute
            </Button>
            <Button 
              variant="call-primary" 
              size="lg" 
              onClick={handleCall}
              className="w-full sm:w-auto font-poppins font-medium text-lg px-8 py-4 h-14"
            >
              <Phone className="w-5 h-5 mr-2" />
              Jetzt anrufen
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;