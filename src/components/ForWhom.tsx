import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";

const ForWhom = () => {
  const handleCall = () => {
    window.location.href = "tel:+436677680897";
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/436677680897?text=Hallo%20Nikola,%20bitte%20um%20kurze%20Chef-Besichtigung%20in%20Wien.%20Wunschtermin:%20[Datum/Uhrzeit].", "_blank");
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const chips = [
    { label: "Hausverwaltungen", target: "hausbetreuung" },
    { label: "Büros", target: "fensterreinigung" },
    { label: "Baufirmen", target: "hausbetreuung" },
    { label: "Kanzleien", target: "fensterreinigung" }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-h1 text-foreground mb-12">
            Für wen wir arbeiten
          </h2>
          
          {/* Chips */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {chips.map((chip, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(chip.target)}
                className="bg-primary/10 text-primary px-4 py-3 rounded-lg text-button hover:bg-primary/20 transition-colors cursor-pointer border border-primary/20"
              >
                {chip.label}
              </button>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Button 
              variant="whatsapp"
              size="lg"
              onClick={handleWhatsApp}
              className="text-button px-6 py-3"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Per WhatsApp schreiben
            </Button>
            <Button 
              variant="outline"
              size="lg"
              onClick={handleCall}
              className="text-button px-6 py-3"
            >
              <Phone className="w-4 h-4 mr-2" />
              Jetzt anrufen
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForWhom;