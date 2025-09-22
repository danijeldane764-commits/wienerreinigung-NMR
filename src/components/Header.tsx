import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const handleCall = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'call_click_header', {
        event_category: 'engagement',
        event_label: 'header_cta'
      });
    }
    window.location.href = "tel:+436677680897";
  };

  const handleWhatsApp = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'whatsapp_click_header', {
        event_category: 'engagement',
        event_label: 'header_cta'
      });
    }
    window.open("https://wa.me/436677680897?text=Hallo%20Nikola,%20bitte%20um%20kurze%20Chef-Besichtigung%20in%20Wien.%20Wunschtermin:%20[Datum/Uhrzeit].", "_blank");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/136a23ba-c861-4ddc-bfa0-27d99a618697.png" 
              alt="Nikola Miloradovic Reinigung Logo"
              className="h-10 w-auto object-contain"
              loading="eager"
            />
            <span className="text-lg font-bold text-primary hidden sm:block">
              Nikola Miloradovic Reinigung
            </span>
          </div>

          {/* CTAs */}
          <div className="flex items-center space-x-3">
            <Button 
              variant="whatsapp"
              size="sm"
              onClick={handleWhatsApp}
              className="text-sm px-4 py-2"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Per WhatsApp schreiben</span>
              <span className="sm:hidden">WhatsApp</span>
            </Button>
            <Button 
              variant="default"
              size="sm"
              onClick={handleCall}
              className="text-sm px-4 py-2"
            >
              <Phone className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Jetzt anrufen</span>
              <span className="sm:hidden">Anrufen</span>
            </Button>
          </div>
        </div>
        
        {/* Small text under CTAs */}
        <div className="text-xs text-muted-foreground text-right mt-1">
          Besichtigung meist innerhalb von 24 Stunden
        </div>
      </div>
    </header>
  );
};

export default Header;