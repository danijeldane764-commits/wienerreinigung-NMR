import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";

const Header = () => {
  const handleCall = () => {
    window.location.href = "tel:+436677680897";
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/436677680897?text=Hallo%20Nikola,%20ich%20brauche%20Unterstützung%20bei%20einer%20Reinigung%20in%20Wien", "_blank");
  };

  return (
    <>
      {/* Desktop Header */}
      <header className="hidden md:block bg-white border-b border-border py-4">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-xl font-bold text-primary">
                Nikola Miloradovic Reinigung
              </h3>
            </div>
            <div className="flex items-center space-x-4">
              <Button 
                variant="outline" 
                size="sm" 
                onClick={handleCall}
                className="text-primary border-primary hover:bg-primary hover:text-white"
              >
                <Phone className="w-4 h-4 mr-2" />
                +43 667 7680897
              </Button>
              <Button 
                variant="whatsapp" 
                size="sm" 
                onClick={handleWhatsApp}
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Sticky Header */}
      <header className="md:hidden fixed top-0 left-0 right-0 z-50 bg-white border-b border-border py-2 px-4">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-lg font-bold text-primary">
              Nikola Miloradovic
            </h3>
          </div>
          <div className="flex items-center space-x-2">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={handleCall}
              className="text-primary border-primary hover:bg-primary hover:text-white px-3 py-2"
            >
              <Phone className="w-4 h-4" />
            </Button>
            <Button 
              variant="whatsapp" 
              size="sm" 
              onClick={handleWhatsApp}
              className="px-3 py-2"
            >
              <MessageCircle className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;