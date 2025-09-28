import CTAWhatsApp from "@/components/CTAWhatsApp";
import CTACall from "@/components/CTACall";
import { Eye, Euro, CalendarCheck } from "lucide-react";

const HowItWorks = () => {
  const handleCall = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'call_click_howitworks', {
        event_category: 'engagement',
        event_label: 'howitworks_section'
      });
    }
    window.location.href = "tel:+436677680897";
  };

  const handleWhatsApp = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'whatsapp_click_howitworks', {
        event_category: 'engagement',
        event_label: 'howitworks_section'
      });
    }
    window.open("https://wa.me/436677680897?text=Hallo%20Nikola,%20bitte%20um%20kurze%20Chef-Besichtigung%20in%20[Ort].%20Wunschtermin:%20[Datum/Uhrzeit].", "_blank");
  };

  const steps = [
    {
      icon: Eye,
      title: "Chef-Besichtigung",
      description: "Ich komme persönlich vorbei in Wien oder Wien Umgebung und schau mir dein Objekt an"
    },
    {
      icon: Euro,
      title: "Fixpreis",
      description: "Du bekommst einen Fixpreis - ehrlich, ohne Überraschungen"
    },
    {
      icon: CalendarCheck,
      title: "Termin & Durchführung",
      description: "Termin so, wie's für dich passt - früh, spät, Wochenende"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-h1 text-foreground mb-16">
            So läuft es ab
          </h2>
          
          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-8 lg:gap-10 mb-10">
            {steps.map((step, index) => (
              <div key={index} className="relative flex flex-col items-center space-y-4">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                  <step.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <div className="text-center">
                  <h3 className="text-2xl md:text-2xl lg:text-3xl text-foreground mb-3">{step.title}</h3>
                  <p className="text-body text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <CTAWhatsApp 
              text="WhatsApp - Angebot in 1 Minute"
              onClick={handleWhatsApp}
            />
            <CTACall 
              text="Besichtigung sichern"
              onClick={handleCall}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;