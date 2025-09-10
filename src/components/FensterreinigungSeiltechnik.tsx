import { Button } from "@/components/ui/button";
import { CheckCircle, Phone, MessageCircle, AlertCircle } from "lucide-react";

const FensterreinigungSeiltechnik = () => {
  const benefits = [
    "Zertifizierte Seiltechnik für obere Etagen",
    "Absicherung und Bereichsabsperrung vor Ort",
    "Früh morgens oder nach Betriebsschluss"
  ];

  const handleWhatsApp = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'whatsapp_click_seiltechnik', {
        event_category: 'engagement',
        event_label: 'cashcow_section'
      });
    }
    window.open("https://wa.me/436677680897?text=Hallo%20Nikola,%20ich%20brauche%20Fensterreinigung%20mit%20Seiltechnik%20in%20Wien%20und%20m%C3%B6chte%20einen%20Fixpreis", "_blank");
  };

  const handleCall = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'call_click_seiltechnik', {
        event_category: 'engagement',
        event_label: 'cashcow_section'
      });
    }
    window.location.href = "tel:+436677680897";
  };

  return (
    <section id="fensterreinigung-seiltechnik" className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Fensterreinigung mit Seiltechnik - sicher für schwer zugängliche Fenster
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Nur Fensterreinigung. Keine Fassadenarbeiten. Chef Besichtigung und Fixpreis vor Start.
          </p>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center justify-center space-x-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-foreground font-medium">{benefit}</span>
              </div>
            ))}
          </div>

          {/* Important Notice */}
          <div className="bg-muted/50 rounded-lg p-4 mb-10 max-w-md mx-auto">
            <div className="flex items-center justify-center space-x-2 text-muted-foreground">
              <AlertCircle className="w-5 h-5" />
              <span className="font-medium">Nur Fenster. Keine Fassadenreinigung.</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="default"
              size="lg"
              onClick={handleWhatsApp}
              className="w-full sm:w-auto text-lg px-8 py-4"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Per WhatsApp anfragen
            </Button>
            <Button 
              variant="outline"
              size="lg"
              onClick={handleCall}
              className="w-full sm:w-auto text-lg px-8 py-4"
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

export default FensterreinigungSeiltechnik;