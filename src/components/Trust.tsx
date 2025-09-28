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
    window.open("https://wa.me/436677680897?text=Hallo%20Nikola,%20bitte%20um%20kurze%20Chef-Besichtigung%20in%20[Ort].%20Wunschtermin:%20[Datum/Uhrzeit].", "_blank");
  };

  return (
    <section className="pt-20 md:pt-24 pb-16 md:pb-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-h2 font-bold mb-8" style={{ color: '#002060' }}>
            Bereit für ein sauberes Ergebnis?
          </h2>
          
          <p className="text-body-large mb-6" style={{ color: '#333333' }}>
            Genug geärgert mit unzuverlässigen Reinigungsfirmen?
          </p>
          
          <p className="text-body-large mb-8" style={{ color: '#333333' }}>
            Ruf mich direkt an oder schreib mir auf WhatsApp, ich kümmere mich persönlich um deinen Fixpreis-Angebot nach der Besichtigung.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <CTACall 
              text="Anrufen"
              onClick={handleCall}
            />
            <CTAWhatsApp 
              text="WhatsApp - Anfrage"
              onClick={handleWhatsApp}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;