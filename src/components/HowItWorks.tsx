import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Eye, Euro, CalendarCheck } from "lucide-react";

const HowItWorks = () => {
  const handleCall = () => {
    window.location.href = "tel:+436677680897";
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/436677680897?text=Hallo%20Nikola,%20bitte%20um%20kurze%20Chef-Besichtigung%20in%20Wien.%20Wunschtermin:%20[Datum/Uhrzeit].", "_blank");
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center space-y-4">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                  <step.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <div className="text-center">
                  <h3 className="text-h3 text-foreground mb-3">{step.title}</h3>
                  <p className="text-body text-muted-foreground">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 right-0 w-8 h-0.5 bg-primary/30 transform translate-x-full"></div>
                )}
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="whatsapp"
              size="lg"
              onClick={handleWhatsApp}
              className="w-full sm:w-auto text-button-large px-8 py-4"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              💬 WhatsApp - Angebot in 1 Minute
            </Button>
            <Button 
              variant="default"
              size="lg"
              onClick={handleCall}
              className="w-full sm:w-auto text-button-large px-8 py-4"
            >
              <Phone className="w-5 h-5 mr-2" />
              📞 Besichtigung sichern
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;