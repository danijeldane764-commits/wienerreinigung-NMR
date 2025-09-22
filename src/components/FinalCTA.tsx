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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Chef-Besichtigung anfragen
          </h2>
          <p className="text-xl mb-10 opacity-90">
            Direkter Kontakt mit dem Chef. Besichtigung meist innerhalb von 24 Stunden.
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="whatsapp"
              size="lg"
              onClick={handleWhatsApp}
              className="w-full sm:w-auto text-lg px-8 py-4"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Per WhatsApp schreiben
            </Button>
            <Button 
              variant="secondary"
              size="lg"
              onClick={handleCall}
              className="w-full sm:w-auto text-lg px-8 py-4"
            >
              <Phone className="w-5 h-5 mr-2" />
              Jetzt anrufen
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;