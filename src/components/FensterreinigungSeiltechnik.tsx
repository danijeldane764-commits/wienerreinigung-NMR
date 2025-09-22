import { Button } from "@/components/ui/button";
import { CheckCircle, Phone, MessageCircle, AlertTriangle } from "lucide-react";
import seiltechnikImage from "@/assets/s-seiltechnik-fensterreinigung-wien.webp";

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
    window.open("https://wa.me/436677680897?text=Hallo%20Nikola,%20bitte%20um%20Chef-Besichtigung%20f%C3%BCr%20Fensterreinigung%20mit%20Seiltechnik%20in%20Wien.%20Wunschtermin:%20[Datum/Uhrzeit].", "_blank");
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
    <section id="fensterreinigung-seiltechnik" className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Fensterreinigung mit Seiltechnik - sicher für schwer zugängliche Fenster
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Nur Fensterreinigung, keine Fassadenarbeiten. Chef-Besichtigung und Fixpreis vor Start.
            </p>

            {/* Benefits */}
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium text-lg">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Important Notice */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-10 flex items-center space-x-3">
              <AlertTriangle className="w-5 h-5 text-yellow-600 flex-shrink-0" />
              <span className="text-yellow-800 font-medium">
                Nur Fenster. Keine Fassadenreinigung.
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="whatsapp"
                size="lg"
                onClick={handleWhatsApp}
                className="w-full sm:w-auto text-lg px-8 py-4"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Per WhatsApp anfragen
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
          </div>

          {/* Image */}
          <div className="lg:order-last">
            <img 
              src={seiltechnikImage}
              alt="Seiltechnik für schwer zugängliche Fenster in Wien"
              className="w-full h-auto rounded-lg shadow-lg"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FensterreinigungSeiltechnik;