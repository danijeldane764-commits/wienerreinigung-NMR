import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";

const PainPoints = () => {
  const handleCall = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'call_click_pain', {
        event_category: 'engagement',
        event_label: 'pain_points_section'
      });
    }
    window.location.href = "tel:+436677680897";
  };

  const handleWhatsApp = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'whatsapp_click_pain', {
        event_category: 'engagement',
        event_label: 'pain_points_section'
      });
    }
    window.open("https://wa.me/436677680897?text=Hallo%20Nikola,%20bitte%20um%20kurze%20Chef-Besichtigung%20in%20Wien.%20Wunschtermin:%20[Datum/Uhrzeit].", "_blank");
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-h2 mb-12 text-foreground">
            Kennst du das?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-muted/50 rounded-lg p-8 border border-border">
              <p className="text-body text-foreground">❌ <strong>Hausverwaltung:</strong> Mieter beschweren sich, Stiegenhaus stinkt trotz Reinigung</p>
            </div>
            
            <div className="bg-muted/50 rounded-lg p-8 border border-border">
              <p className="text-body text-foreground">❌ <strong>Kanzlei:</strong> Mandanten sehen Schlieren am Glas - peinlich</p>
            </div>
            
            <div className="bg-muted/50 rounded-lg p-8 border border-border">
              <p className="text-body text-foreground">❌ <strong>Baufirma:</strong> Endreinigung "fertig", aber Staub und Zementschlieren überall</p>
            </div>
            
            <div className="bg-muted/50 rounded-lg p-8 border border-border">
              <p className="text-body text-foreground">❌ <strong>Haushalt:</strong> Putzfirma unpünktlich, schlampig, plötzlich Sonderkosten</p>
            </div>
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
      </div>
    </section>
  );
};

export default PainPoints;