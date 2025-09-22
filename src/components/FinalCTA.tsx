import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";

const FinalCTA = () => {
  const handleCall = () => {
    window.location.href = "tel:+436677680897";
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/436677680897?text=Hallo%20Nikola,%20bitte%20um%20kurze%20Chef-Besichtigung%20in%20Wien.%20Wunschtermin:%20[Datum/Uhrzeit].", "_blank");
  };

  return (
    <section id="contact" className="py-16 md:py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-h2 mb-6">
            Warum du mir vertrauen kannst
          </h2>
          <div className="mb-8">
            <p className="text-body-large mb-4 opacity-90">
              Ich bin Nikola. Chef, Ansprechpartner, Fixpreis, versichert, ehrlich.
            </p>
            <p className="text-body-large mb-4 opacity-90">
              Seit Jahren vertrauen mir Hausverwaltungen, Kanzleien, Baufirmen und Haushalte in Wien.
            </p>
            <p className="text-body-large mb-6 opacity-90">
              👉 Kunden sagen: "Endlich einer, der hält, was er verspricht."
            </p>
          </div>
          
          <div className="mb-8">
            <p className="text-body-large mb-4 font-medium">
              Hol dir jetzt dein kostenloses Fixpreis-Angebot.
            </p>
            <p className="text-body opacity-90">
              Ich nehm nur so viele Kunden an, wie ich selbst im Griff hab - also warte nicht.
            </p>
          </div>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="secondary"
              size="lg"
              onClick={handleCall}
              className="w-full sm:w-auto text-button-large px-8 py-4"
            >
              <Phone className="w-5 h-5 mr-2" />
              📞 Ruf mich jetzt direkt an
            </Button>
            <Button 
              variant="whatsapp"
              size="lg"
              onClick={handleWhatsApp}
              className="w-full sm:w-auto text-button-large px-8 py-4"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              💬 Schreib mir kurz auf WhatsApp - schnell und einfach
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;