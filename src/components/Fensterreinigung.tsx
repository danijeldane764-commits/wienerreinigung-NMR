import { CheckCircle } from "lucide-react";
import CTAWhatsApp from "@/components/CTAWhatsApp";
import fensterreinigungImage from "@/assets/s-industriekletterer-new.jpg";

const Fensterreinigung = () => {
  const benefits = [
    "Streifenfrei bis zur Kante",
    "Terminfenster passend zu deinem Betrieb",
    "Eigene Ausrüstung inklusive"
  ];

  const handleWhatsApp = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'whatsapp_click_fenster', {
        event_category: 'engagement',
        event_label: 'cashcow_section'
      });
    }
    window.open("https://wa.me/436677680897?text=Hallo%20Nikola,%20bitte%20um%20Inhaber-Besichtigung%20f%C3%BCr%20Fensterreinigung%20in%20[Ort,%20PLZ].", "_blank");
  };

  const handleCall = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'call_click_fenster', {
        event_category: 'engagement',
        event_label: 'cashcow_section'
      });
    }
    window.location.href = "tel:+436677680897";
  };

  return (
    <section id="fensterreinigung" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Image */}
          <div>
            <img 
              src={fensterreinigungImage}
              alt="Fensterreinigung in Wien"
              className="w-full h-auto rounded-lg shadow-lg"
              loading="lazy"
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-h1 text-foreground mb-8">
              Fensterreinigung - glasklar, ohne Schlieren
            </h2>
            
            <div className="mb-8">
              <p className="text-body-large text-muted-foreground mb-4">❌ Schlieren, Streifen, peinlich vor Mandanten oder bei Abnahme</p>
              <p className="text-body-large text-foreground mb-4">👉 Wir machen's glasklar: vom Bürofenster bis zur Glasfront im Hochhaus in Wien und Wien Umgebung</p>
            </div>
            
            <blockquote className="text-h3 font-medium italic text-primary mb-8">
              "Unsere Kanzlei sieht jetzt immer top aus - kein peinlicher erster Eindruck mehr."
            </blockquote>

            <div className="flex justify-center lg:justify-start">
              <CTAWhatsApp 
                text="Fensterreinigung anfragen"
                onClick={handleWhatsApp}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fensterreinigung;