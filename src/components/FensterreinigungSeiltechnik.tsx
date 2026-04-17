import { CheckCircle, AlertTriangle } from "lucide-react";
import CTAWhatsApp from "@/components/CTAWhatsApp";
import { trackEvent } from "@/utils/analytics";
import seiltechnikImage from "@/assets/s-seiltechnik-new.jpg";

const FensterreinigungSeiltechnik = () => {
  const benefits = [
    "Zertifizierte Seiltechnik für obere Etagen",
    "Absicherung und Bereichsabsperrung vor Ort",
    "Früh morgens oder nach Betriebsschluss"
  ];

  const handleWhatsApp = () => {
    trackEvent('whatsapp_click_seiltechnik', {
      event_category: 'engagement',
      event_label: 'cashcow_section'
    });
    window.open("https://wa.me/436677680897?text=Hallo%20Nikola,%20bitte%20um%20Inhaber-Besichtigung%20f%C3%BCr%20Fensterreinigung%20mit%20Seiltechnik%20in%20[Ort,%20PLZ].", "_blank");
  };

  const handleCall = () => {
    trackEvent('call_click_seiltechnik', {
      event_category: 'engagement',
      event_label: 'cashcow_section'
    });
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
              "Ohne Nikola hätten wir die Bauabnahme nie geschafft."
            </blockquote>

            <div className="flex justify-center lg:justify-start">
              <CTAWhatsApp 
                text="Industriekletterer anfragen"
                onClick={handleWhatsApp}
              />
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