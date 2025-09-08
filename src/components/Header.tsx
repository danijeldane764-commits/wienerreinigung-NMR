import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const handleCall = () => {
  // Track call event if gtag is available
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'anrufen_click', {
      event_category: 'engagement',
      event_label: 'header'
    });
  }
  window.location.href = "tel:+436677680897";
};

const handleWhatsApp = () => {
  // Track WhatsApp event if gtag is available
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'whatsapp_click', {
      event_category: 'engagement', 
      event_label: 'header'
    });
  }
  window.open("https://wa.me/436677680897?text=Hallo%20Nikola,%20ich%20brauche%20Unterstützung%20bei%20einer%20Reinigung%20in%20Wien", "_blank", "noopener");
};

const Header = () => {
  return (
    <>
      {/* Desktop Header */}
      <header className="hidden md:block bg-white shadow-sm border-b border-border py-4">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="text-xl font-bold text-foreground">
            Nikola Miloradovic Reinigung
          </div>
          <div className="flex space-x-4">
            <Button 
              variant="outline" 
              size="sm"
              onClick={handleCall}
              className="flex items-center space-x-2"
            >
              <Phone className="w-4 h-4" />
              <span>Anrufen</span>
            </Button>
            <Button 
              variant="whatsapp" 
              size="sm"
              onClick={handleWhatsApp}
              className="flex items-center space-x-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Sticky Header */}
      <header className="md:hidden fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-border py-3">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="text-sm font-bold text-foreground">
            Nikola Miloradovic
          </div>
          <div className="flex space-x-3">
            <Button 
              variant="outline" 
              size="icon"
              onClick={handleCall}
              className="h-11 w-11"
              aria-label="Anrufen"
            >
              <Phone className="w-5 h-5" />
            </Button>
            <Button 
              variant="whatsapp" 
              size="icon"
              onClick={handleWhatsApp}
              className="h-11 w-11"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;