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
    <section id="fensterreinigung-seiltechnik" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Content */}
          <div>
            <h2 className="text-h1 text-foreground mb-8">
              Industriekletterer - sicher, schnell, effizient
            </h2>
            
            <div className="mb-8">
              <p className="text-body-large text-muted-foreground mb-4">❌ Teure Gerüste, Verzögerungen, Chaos bei schwer erreichbaren Flächen</p>
              <p className="text-body-large text-foreground mb-4">👉 Wir hängen uns raus: Seiltechnik, schnell, sicher, günstiger</p>
            </div>
            
            <blockquote className="text-h3 font-medium italic text-primary mb-8">
              "Ohne euch hätten wir die Abnahme nie geschafft."
            </blockquote>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="whatsapp"
                size="lg"
                onClick={handleWhatsApp}
                className="w-full sm:w-auto text-button-large px-8 py-4"
              >
                <Phone className="w-5 h-5 mr-2" />
                📞 Industriekletterer anfragen
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