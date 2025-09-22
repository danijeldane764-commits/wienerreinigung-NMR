import { Button } from "@/components/ui/button";
import { CheckCircle, Phone, MessageCircle } from "lucide-react";
import fensterreinigungImage from "@/assets/s-fensterreinigung-wien.webp";

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
    window.open("https://wa.me/436677680897?text=Hallo%20Nikola,%20bitte%20um%20Chef-Besichtigung%20f%C3%BCr%20Fensterreinigung%20in%20Wien.%20Wunschtermin:%20[Datum/Uhrzeit].", "_blank");
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
    <section id="fensterreinigung" className="py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
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
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Fensterreinigung
            </h2>
            <p className="text-xl text-muted-foreground mb-6">
              Glasklar, streifenfrei, vom Büro bis zur Glasfront.
            </p>
            <blockquote className="text-xl font-medium italic text-primary mb-8">
              👉 „Seit ihr die Fenster macht, sieht's hier endlich so aus, wie es aussehen soll."
            </blockquote>

            {/* Benefits */}
            <div className="space-y-4 mb-10">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium text-lg">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="whatsapp"
                size="lg"
                onClick={handleWhatsApp}
                className="w-full sm:w-auto text-lg px-8 py-4"
              >
                <Phone className="w-5 h-5 mr-2" />
                📞 Fensterreinigung anfragen
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fensterreinigung;