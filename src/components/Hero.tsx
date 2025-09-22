import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, X, Check } from "lucide-react";
import heroImage from "@/assets/hero-industriekletterer-new.jpg";

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
    <section className="relative h-[80vh] flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0,0,0,0.3)' }}></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <div className="max-w-[800px] mx-auto">
          <h1 className="text-hero mb-6">
            Sauberkeit ohne Ausreden : für Hausverwaltungen, Kanzleien, Baufirmen, Unternehmen und Haushalte in Wien
          </h1>
          <p className="text-body-large mb-6 opacity-95">
            Direkt beim Chef anrufen. Kein Callcenter. Fixpreis. Versichert.
          </p>
          
          {/* Micro Proof */}
          <div className="text-small opacity-90 mb-8">
            Aus Wien • Familienunternehmen • Besichtigung meist innerhalb von 24 Stunden
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="default" 
              size="lg" 
              onClick={handleCall}
              className="w-full sm:w-auto text-button-large px-8 py-4"
            >
              <Phone className="w-5 h-5 mr-2" />
              📞 Jetzt direkt mit dem Chef reden
            </Button>
            <Button 
              variant="whatsapp" 
              size="lg" 
              onClick={handleWhatsApp}
              className="w-full sm:w-auto text-button-large px-8 py-4"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              💬 WhatsApp, dauert keine Minute
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;