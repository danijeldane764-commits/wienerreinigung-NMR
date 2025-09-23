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
    { label: "Hausverwaltungen: Ruhe mit den Mietern", target: "hausbetreuung" },
    { label: "Kanzleien: Glasklare Fenster für den ersten Eindruck", target: "fensterreinigung" },
    { label: "Baufirmen: Saubere Abnahme ohne Theater", target: "hausbetreuung" },
    { label: "Haushalte: Fixpreis, pünktlich, kein Stress", target: "fensterreinigung" }
  ];

  return (
    <section className="py-20 bg-background">
    </section>
  );
};

export default ForWhom;