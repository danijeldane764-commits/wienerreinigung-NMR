import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {

  const faqs = [
    {
      question: "Wie schnell kommt die Besichtigung?",
      answer: "Meistens innerhalb von 24 Stunden. Ich komme persönlich vorbei in Wien oder Wien Umgebung."
    },
    {
      question: "Gibt es Fixpreis?",
      answer: "Ja. Nach der Besichtigung bekommst du einen verbindlichen Fixpreis ohne Überraschungen."
    },
    {
      question: "Macht ihr Fassaden?",
      answer: "Nein, wir machen Fenster - keine Fassaden. So sind wir schnell, spezialisiert und zuverlässig."
    },
    {
      question: "Rechnet ihr offiziell ab?",
      answer: "Ja, klar. Du bekommst eine offizielle Rechnung mit ausgewiesener Mehrwertsteuer."
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Häufige Fragen
          </h2>
          
          <Accordion type="single" collapsible>
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
        </div>
      </div>
    </section>
  );
};

export default FAQ;