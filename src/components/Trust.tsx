import CTAWhatsApp from "@/components/CTAWhatsApp";
import CTACall from "@/components/CTACall";

const Trust = () => {
  const handleCall = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'call_click_trust', {
        event_category: 'engagement',
        event_label: 'trust_section'
      });
    }
    window.location.href = "tel:+436677680897";
  };

  const handleWhatsApp = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'whatsapp_click_trust', {
        event_category: 'engagement',
        event_label: 'trust_section'
      });
    }
    window.open("https://wa.me/436677680897?text=Hallo%20Nikola,%20bitte%20um%20kurze%20Chef-Besichtigung%20in%20Wien.%20Wunschtermin:%20[Datum/Uhrzeit].", "_blank");
  };

  return (
    <section className="py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-h2 text-foreground mb-8">
            Abschluss - Vertrauen
          </h2>
          
          <p className="text-body-large text-muted-foreground mb-6">
            Hol dir dein Fixpreis-Angebot direkt vom Chef.
          </p>
          
          <p className="text-body-large text-muted-foreground mb-8">
            Ich nehme nur so viele Kunden an, wie ich selbst im Griff habe - also warte nicht.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <CTACall 
              text="Anrufen - Angebot sichern"
              onClick={handleCall}
            />
            <CTAWhatsApp 
              text="WhatsApp - dauert 1 Minute"
              onClick={handleWhatsApp}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;