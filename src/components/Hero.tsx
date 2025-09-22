import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, X, Check } from "lucide-react";
import heroImage from "@/assets/hero-fensterreinigung.jpg";

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
    <section className="relative h-[85vh] flex items-center justify-center pt-20 md:pt-16">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white py-16 md:py-20">
        <h1 className="text-hero mb-6 max-w-5xl mx-auto">
          Sauberkeit ohne Ausreden : für Hausverwaltungen, Kanzleien, Baufirmen, Unternehmen und Haushalte in Wien
        </h1>
        <p className="text-body-large mb-4 max-w-4xl mx-auto opacity-95">
          Direkt beim Chef anrufen. Kein Callcenter. Fixpreis. Versichert.
        </p>
        
        {/* Micro Proof */}
        <div className="text-small opacity-90 mb-8">
          Aus Wien • Familienunternehmen • Besichtigung meist innerhalb von 24 Stunden
        </div>
        
        {/* CTA Buttons - First Set */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
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
        
        {/* Pain Block */}
        <div className="mb-10 max-w-4xl mx-auto">
          <h2 className="text-h2 mb-8 text-center">
            Kennst du das?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <p className="text-body opacity-90">❌ <strong>Hausverwaltung:</strong> Mieter beschweren sich, Stiegenhaus stinkt trotz Reinigung</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <p className="text-body opacity-90">❌ <strong>Kanzlei:</strong> Mandanten sehen Schlieren am Glas - peinlich</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <p className="text-body opacity-90">❌ <strong>Baufirma:</strong> Endreinigung "fertig", aber Staub und Zementschlieren überall</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <p className="text-body opacity-90">❌ <strong>Haushalt:</strong> Putzfirma unpünktlich, schlampig, plötzlich Sonderkosten</p>
            </div>
          </div>
          
          <div className="text-center mb-8">
            <p className="text-body-large mb-4">Kunden sagen nach dem Wechsel:</p>
            <p className="text-h3 font-medium italic">"Seit du da bist, ruft keiner mehr an zum Schimpfen."</p>
          </div>
        </div>
        
        {/* CTA Buttons - Second Set */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button 
            variant="default" 
            size="lg" 
            onClick={handleCall}
            className="w-full sm:w-auto text-button-large px-8 py-4"
          >
            <Phone className="w-5 h-5 mr-2" />
            📞 Genug geärgert - ruf mich jetzt an
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
    </section>
  );
};

export default Hero;