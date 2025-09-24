
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
      <svg className="w-5 h-5 mr-[10px] flex-shrink-0" viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="5.4" fill="white"/>
        <path d="M12.012 7.3c-2.7 0-4.9 2.2-4.9 4.9 0 .9.2 1.7.7 2.4l.1.1-.4 1.5 1.5-.4.1.1c.7.4 1.5.7 2.4.7 2.7 0 4.9-2.2 4.9-4.9s-2.2-4.9-4.9-4.9zm2.8 6.9c-.1.3-.7.6-1 .6-.3 0-.6 0-1-.2-.2-.1-.5-.2-.8-.3-1.3-.6-2.2-1.9-2.2-3.2 0-.3.1-.6.3-.8.1-.1.2-.1.3-.1.1 0 .2 0 .3.1.1.1.2.3.3.5.1.1.1.3.1.4 0 .1-.1.2-.2.3-.1.1-.1.2-.1.3 0 .1.1.3.3.4.4.3.8.3 1.2 0 .2-.1.3-.3.4-.4.1-.1.2-.1.3-.1.1 0 .2.1.3.2.1.1.2.3.3.5 0 .2-.1.4-.2.5z" fill="#25D366"/>
      </svg>
      <span className="hidden xs:inline">{text}</span>
      <span className="inline xs:hidden">WhatsApp</span>
    </Button>
  );
};

export default CTAWhatsApp;