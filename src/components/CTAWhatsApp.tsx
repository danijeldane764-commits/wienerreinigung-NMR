import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CTAWhatsAppProps {
  text?: string;
  className?: string;
  onClick?: () => void;
  href?: string;
  ariaLabel?: string;
}

const CTAWhatsApp = ({ 
  text = "WhatsApp - Anfrage",
  className = "",
  onClick,
  href = "https://wa.me/436677680897?text=Hallo%20Nikola,%20bitte%20um%20kurze%20Chef-Besichtigung%20in%20Wien.%20Wunschtermin:%20[Datum/Uhrzeit].",
  ariaLabel = "WhatsApp - Nachricht senden"
}: CTAWhatsAppProps) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      window.open(href, "_blank");
    }
  };

  return (
    <Button 
      onClick={handleClick}
      aria-label={ariaLabel}
      className={`w-full md:w-auto min-h-[48px] bg-[#25D366] hover:bg-[#1DA851] active:bg-[#169B49] text-white font-poppins font-medium text-lg border-none rounded-[10px] px-7 py-[14px] shadow-[0_4px_6px_rgba(0,0,0,0.15)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2 cursor-pointer transition-all duration-200 ${className}`}
    >
      <MessageCircle className="w-5 h-5 mr-[10px] text-white flex-shrink-0" />
      <span className="hidden xs:inline">{text}</span>
      <span className="inline xs:hidden">WhatsApp</span>
    </Button>
  );
};

export default CTAWhatsApp;