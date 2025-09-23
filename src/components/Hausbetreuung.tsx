import { CheckCircle } from "lucide-react";
import CTAWhatsApp from "@/components/CTAWhatsApp";
import hausbetreungImage from "@/assets/s-hausbetreuung-glanz.jpg";

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
    <section id="hausbetreuung" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Content */}
          <div>
            <h2 className="text-h1 text-foreground mb-8">
              Hausbetreuung in Wien und Wien Umgebung
            </h2>
            
            <div className="mb-8">
              <p className="text-body-large text-muted-foreground mb-4">❌ Stiegenhaus stinkt, Müll bleibt liegen, Winterdienst zu spät</p>
              <p className="text-body-large text-foreground mb-4">👉 Wir übernehmen alles: Stiegenhaus, Außenflächen, Winterdienst</p>
            </div>
            
            <blockquote className="text-h3 font-medium italic text-primary mb-8">
              "Seit Nikola die Hausbetreuung macht, hab ich als Hausverwalter endlich Ruhe."
            </blockquote>

            <div className="flex justify-center lg:justify-start">
              <CTAWhatsApp 
                text="Hausbetreuung anfragen"
                onClick={handleWhatsApp}
              />
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