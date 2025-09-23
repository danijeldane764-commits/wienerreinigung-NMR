import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CTACallProps {
  text?: string;
  className?: string;
  onClick?: () => void;
  href?: string;
  ariaLabel?: string;
}

const CTACall = ({ 
  text = "Anrufen",
  className = "",
  onClick,
  href = "tel:+436677680897",
  ariaLabel = "Jetzt anrufen"
}: CTACallProps) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      window.location.href = href;
    }
  };

  return (
    <Button 
      onClick={handleClick}
      aria-label={ariaLabel}
      className={`w-full md:w-auto min-h-[48px] bg-[#0052CC] hover:bg-[#003F99] active:bg-[#002F73] text-white font-poppins font-medium text-lg border-none rounded-[10px] px-7 py-[14px] shadow-[0_4px_6px_rgba(0,0,0,0.15)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2 cursor-pointer transition-all duration-200 ${className}`}
    >
      <Phone className="w-5 h-5 mr-[10px] text-white flex-shrink-0" />
      <span className="hidden xs:inline">{text}</span>
      <span className="inline xs:hidden">Anrufen</span>
    </Button>
  );
};

export default CTACall;