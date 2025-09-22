import { Button } from "@/components/ui/button";
import { CheckCircle, Phone, MessageCircle } from "lucide-react";
import hausbetreungImage from "@/assets/s-hausbetreuung-wien.webp";

const Hausbetreuung = () => {
  const benefits = [
    "Regelmäßige Intervalle nach Plan",
    "Pünktliche Teams, leise im Betrieb", 
    "Fixpreis ohne versteckte Kosten"
  ];

  const handleWhatsApp = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'whatsapp_click_hausbetreuung', {
        event_category: 'engagement',
        event_label: 'cashcow_section'
      });
    }
    window.open("https://wa.me/436677680897?text=Hallo%20Nikola,%20bitte%20um%20Chef-Besichtigung%20f%C3%BCr%20Hausbetreuung%20in%20Wien.%20Wunschtermin:%20[Datum/Uhrzeit].", "_blank");
  };

  const handleCall = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'call_click_hausbetreuung', {
        event_category: 'engagement',
        event_label: 'cashcow_section'
      });
    }
    window.location.href = "tel:+436677680897";
  };

  return (
    <section id="hausbetreuung" className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Hausbetreuung in Wien
            </h2>
            
            <div className="mb-6">
              <p className="text-lg text-muted-foreground mb-4">❌ Stiegenhaus stinkt, Müll bleibt liegen, Winterdienst zu spät</p>
              <p className="text-lg text-foreground mb-4">👉 Wir übernehmen alles: Stiegenhaus, Außenflächen, Winterdienst</p>
            </div>
            
            <blockquote className="text-xl font-medium italic text-primary mb-8">
              "Seit du die Betreuung machst, hab ich endlich Ruhe."
            </blockquote>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="whatsapp"
                size="lg"
                onClick={handleWhatsApp}
                className="w-full sm:w-auto text-lg px-8 py-4"
              >
                <Phone className="w-5 h-5 mr-2" />
                📞 Hausbetreuung anfragen
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="lg:order-last">
            <img 
              src={hausbetreungImage}
              alt="Hausbetreuung in Wien"
              className="w-full h-auto rounded-lg shadow-lg"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hausbetreuung;