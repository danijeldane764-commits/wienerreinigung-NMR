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
          Reinigungsfirma in Wien - Fixpreis nach Chef-Besichtigung
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto opacity-90">
          Für Hausverwaltungen, Büros, Baufirmen und Kanzleien. Besichtigung meist innerhalb von 24 Stunden.
        </p>
        
        {/* Proof Points */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-4xl mx-auto">
          <div className="flex flex-col items-center space-y-2">
            <Check className="w-6 h-6 text-green-400" />
            <span className="text-lg font-medium">Chef-Besichtigung vor Ort</span>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <Check className="w-6 h-6 text-green-400" />
            <span className="text-lg font-medium">Fixpreis ohne versteckte Kosten</span>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <Check className="w-6 h-6 text-green-400" />
            <span className="text-lg font-medium">Pünktlich, leise, sauber</span>
          </div>
        </div>

        {/* Contrast Line */}
        <div className="mb-8 text-sm md:text-base">
          <div className="flex items-center justify-center mb-2">
            <X className="w-4 h-4 text-red-400 mr-2" />
            <span className="opacity-80">Verspätet, schlampig, Sonderkosten</span>
          </div>
          <div className="flex items-center justify-center">
            <Check className="w-4 h-4 text-green-400 mr-2" />
            <span className="font-medium">Wir kommen, besichtigen, liefern</span>
          </div>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button 
            variant="whatsapp" 
            size="lg" 
            onClick={handleWhatsApp}
            className="w-full sm:w-auto text-lg px-8 py-4"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Per WhatsApp schreiben
          </Button>
          <Button 
            variant="default" 
            size="lg" 
            onClick={handleCall}
            className="w-full sm:w-auto text-lg px-8 py-4"
          >
            <Phone className="w-5 h-5 mr-2" />
            Jetzt anrufen
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