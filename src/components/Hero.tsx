import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, X, Check } from "lucide-react";
import heroImage from "@/assets/hero-office-wien.jpg";

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
    <section className="relative min-h-screen flex items-center justify-center pt-20 md:pt-16">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-primary/30"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white py-16 md:py-32">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Sauberkeit ohne Ausreden : für Hausverwaltungen, Kanzleien, Baufirmen, Unternehmen und Haushalte in Wien
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto opacity-90">
          Direkt beim Chef anrufen. Kein Callcenter. Fairer Fixpreis. Versichert.
        </p>
        
        {/* Pain Points */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 max-w-4xl mx-auto text-left">
          <div className="flex items-center space-x-3">
            <X className="w-5 h-5 text-red-400 flex-shrink-0" />
            <span className="text-lg opacity-90">Stiegenhaus stinkt trotz Reinigung</span>
          </div>
          <div className="flex items-center space-x-3">
            <X className="w-5 h-5 text-red-400 flex-shrink-0" />
            <span className="text-lg opacity-90">Schlieren in der Kanzlei - peinlich vor Mandanten</span>
          </div>
          <div className="flex items-center space-x-3">
            <X className="w-5 h-5 text-red-400 flex-shrink-0" />
            <span className="text-lg opacity-90">Bauabnahme scheitert an Staub & Schlieren</span>
          </div>
          <div className="flex items-center space-x-3">
            <X className="w-5 h-5 text-red-400 flex-shrink-0" />
            <span className="text-lg opacity-90">Putzfirma kommt zu spät oder verrechnet Sonderkosten</span>
          </div>
        </div>

        {/* Customer Testimonial */}
        <div className="mb-8 text-xl md:text-2xl font-medium italic max-w-3xl mx-auto">
          „Nikola, seit du da bist, ruft keiner mehr an zum Schimpfen."
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button 
            variant="default" 
            size="lg" 
            onClick={handleCall}
            className="w-full sm:w-auto text-lg px-8 py-4"
          >
            <Phone className="w-5 h-5 mr-2" />
            📞 Jetzt direkt mit dem Chef reden
          </Button>
          <Button 
            variant="whatsapp" 
            size="lg" 
            onClick={handleWhatsApp}
            className="w-full sm:w-auto text-lg px-8 py-4"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            💬 WhatsApp in 1 Minute - Angebot sichern
          </Button>
        </div>

        {/* Micro Proof */}
        <div className="text-sm opacity-90">
          Aus Wien • Familienunternehmen • Besichtigung meist innerhalb von 24 Stunden
        </div>
      </div>
    </section>
  );
};

export default Hero;