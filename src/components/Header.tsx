import { Phone, MessageCircle } from "lucide-react";

const Header = () => {
  return (
    <>
      {/* Desktop Header */}
      <header className="hidden md:block bg-white shadow-sm border-b border-border py-4">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/77c39513-a24a-4fbe-b702-c83164cdf492.png" 
              alt="Nikola Miloradovic Reinigung Logo"
              className="h-10 w-auto object-contain"
              loading="eager"
            />
            <div className="text-xl font-bold text-foreground">
              Nikola Miloradovic Reinigung
            </div>
          </div>
          <div className="flex space-x-4">
            <a 
              href="tel:+436677680897"
              className="inline-flex items-center space-x-2 px-3 py-2 border border-input bg-background hover:bg-accent hover:text-accent-foreground text-sm font-medium rounded-md transition-colors"
              aria-label="Anruf mit Nikola Miloradovic starten"
              onClick={() => {
                if (typeof window !== 'undefined' && (window as any).gtag) {
                  (window as any).gtag('event', 'anrufen_click', {
                    event_category: 'engagement',
                    event_label: 'header'
                  });
                }
              }}
            >
              <Phone className="w-4 h-4" />
              <span>Anrufen</span>
            </a>
            <a 
              href="https://wa.me/436677680897?text=Hallo%20Nikola,%20ich%20brauche%20Unterst%C3%BCtzung%20bei%20einer%20Reinigung%20in%20Wien"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-3 py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-md transition-colors"
              aria-label="WhatsApp Chat mit Nikola Miloradovic starten"
              onClick={() => {
                if (typeof window !== 'undefined' && (window as any).gtag) {
                  (window as any).gtag('event', 'whatsapp_click', {
                    event_category: 'engagement', 
                    event_label: 'header'
                  });
                }
              }}
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </header>

      {/* Mobile Sticky Header */}
      <header className="md:hidden fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-border py-3">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/77c39513-a24a-4fbe-b702-c83164cdf492.png" 
              alt="Nikola Miloradovic Reinigung Logo"
              className="h-8 w-auto object-contain"
              loading="eager"
            />
            <div className="text-sm font-bold text-foreground">
              Nikola Miloradovic
            </div>
          </div>
          <div className="flex space-x-3">
            <a 
              href="tel:+436677680897"
              className="inline-flex items-center justify-center h-11 w-11 border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
              aria-label="Anruf mit Nikola Miloradovic starten"
              onClick={() => {
                if (typeof window !== 'undefined' && (window as any).gtag) {
                  (window as any).gtag('event', 'anrufen_click', {
                    event_category: 'engagement',
                    event_label: 'header'
                  });
                }
              }}
            >
              <Phone className="w-5 h-5" />
            </a>
            <a 
              href="https://wa.me/436677680897?text=Hallo%20Nikola,%20ich%20brauche%20Unterst%C3%BCtzung%20bei%20einer%20Reinigung%20in%20Wien"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-11 w-11 bg-green-600 hover:bg-green-700 text-white rounded-md transition-colors"
              aria-label="WhatsApp Chat mit Nikola Miloradovic starten"
              onClick={() => {
                if (typeof window !== 'undefined' && (window as any).gtag) {
                  (window as any).gtag('event', 'whatsapp_click', {
                    event_category: 'engagement', 
                    event_label: 'header'
                  });
                }
              }}
            >
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;