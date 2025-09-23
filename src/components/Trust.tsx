import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";

const Trust = () => {
  const handleCall = () => {
    window.location.href = "tel:+436677680897";
  };

  const handleWhatsApp = () => {
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

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="default"
              size="lg"
              onClick={handleCall}
              className="w-full sm:w-auto text-button-large px-8 py-4"
            >
              <Phone className="w-5 h-5 mr-2" />
              📞 Anrufen - Angebot sichern
            </Button>
            <Button 
              variant="whatsapp"
              size="lg"
              onClick={handleWhatsApp}
              className="w-full sm:w-auto text-button-large px-8 py-4"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              💬 WhatsApp - dauert 1 Minute
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;