import CTAWhatsApp from "@/components/CTAWhatsApp";
import CTACall from "@/components/CTACall";
import winterdienstImage from "@/assets/winterdienst-wien.jpg";

const Winterdienst = () => {
  const handleWhatsApp = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'whatsapp_click_winterdienst', {
        event_category: 'engagement',
        event_label: 'winterdienst_section'
      });
    }
    window.open("https://wa.me/436677680897?text=Hallo%20Nikola,%20bitte%20um%20Chef-Besichtigung%20f%C3%BCr%20Winterdienst%20in%20Wien.%20Wunschtermin:%20[Datum/Uhrzeit].", "_blank");
  };

  const handleCall = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'call_click_winterdienst', {
        event_category: 'engagement',
        event_label: 'winterdienst_section'
      });
    }
    window.location.href = "tel:+436677680897";
  };

  return (
    <section id="winterdienst" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Content */}
          <div>
            <h2 className="text-h1 text-foreground mb-8">
              Winterdienst & Schneeräumung
            </h2>
            
            <div className="mb-8">
              <p className="text-body-large text-muted-foreground mb-4">❌ Unsichere Gehwege, Unfallgefahr, rechtliche Probleme bei Winterdienst</p>
              <p className="text-body-large text-foreground mb-4">👉 Wir sorgen im Winter für Sicherheit und Verlässlichkeit. Ob Gehwege, Einfahrten, Parkflächen oder Betriebsflächen - wir räumen Schnee und streuen pünktlich. Für Hausverwaltungen, Unternehmen und Haushalte in Wien und Umgebung. Fixpreis, zuverlässig, ohne Ausreden.</p>
            </div>
            
          <blockquote className="text-h3 font-medium italic text-primary mb-8">
            "Nikola ist immer da bevor die ersten Mieter kommen."
          </blockquote>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <CTAWhatsApp 
                text="WhatsApp - Winterdienst anfragen"
                onClick={handleWhatsApp}
              />
              <CTACall 
                text="Anrufen"
                onClick={handleCall}
              />
            </div>
          </div>

          {/* Image */}
          <div className="lg:order-last">
            <img 
              src={winterdienstImage}
              alt="Winterdienst und Schneeräumung in Wien"
              className="w-full h-auto rounded-lg shadow-lg"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Winterdienst;