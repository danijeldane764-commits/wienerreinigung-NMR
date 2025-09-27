import CTAWhatsApp from "@/components/CTAWhatsApp";
import CTACall from "@/components/CTACall";

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
      <div className="container mx-auto px-0 py-0 relative">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3 pl-1">
            <img 
              src="/lovable-uploads/136a23ba-c861-4ddc-bfa0-27d99a618697.png" 
              alt="Nikola Miloradovic Reinigung Logo"
              className="h-16 md:h-20 w-auto object-contain block"
              loading="eager"
            />
            <span className="text-2xl font-bold text-primary hidden sm:block">
              Nikola Miloradovic Reinigung
            </span>
          </div>

          {/* CTAs */}
          <div className="flex items-center space-x-3 pr-1">
            <CTAWhatsApp 
              text="Per WhatsApp schreiben"
              onClick={handleWhatsApp}
              className="text-sm px-4 py-2 h-8"
            />
            <CTACall 
              text="Anrufen"
              onClick={handleCall}
              className="text-sm px-4 py-2 h-8"
            />
          </div>
        </div>
        
        {/* Small text positioned absolutely */}
        <div className="hidden sm:block absolute right-1 bottom-1 text-xs text-muted-foreground">
          Besichtigung meist innerhalb von 24 Stunden
        </div>
      </div>
    </header>
  );
};

export default Header;