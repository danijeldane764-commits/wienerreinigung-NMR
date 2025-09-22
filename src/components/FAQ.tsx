import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const handleCall = () => {
    window.location.href = "tel:+436677680897";
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/436677680897?text=Hallo%20Nikola,%20bitte%20um%20kurze%20Chef-Besichtigung%20in%20Wien.%20Wunschtermin:%20[Datum/Uhrzeit].", "_blank");
  };

  const faqs = [
    {
      question: "Wie schnell kommt die Besichtigung?",
      answer: "Meist innerhalb von 24 Stunden."
    },
    {
      question: "Gibt es Fixpreis?",
      answer: "Ja, direkt nach Chef-Besichtigung."
    },
    {
      question: "Macht ihr Fassaden?",
      answer: "Nein. Nur Fensterreinigung."
    },
    {
      question: "Rechnet ihr offiziell ab?",
      answer: "Ja, Rechnung und Versicherung vorhanden."
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Häufige Fragen
          </h2>
          
          <Accordion type="single" collapsible className="mb-10">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

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
              variant="default"
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

export default FAQ;