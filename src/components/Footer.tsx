import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/lovable-uploads/136a23ba-c861-4ddc-bfa0-27d99a618697.png" 
                alt="Nikola Miloradovic Reinigung Logo"
                className="h-12 w-auto object-contain"
                loading="lazy"
              />
              <h3 className="text-2xl font-bold">
                Nikola Miloradovic Reinigung
              </h3>
            </div>
            <p className="text-primary-foreground/80 mb-4">
              Professionelle Reinigungsdienstleistungen in Wien und Umgebung. 
              Direkter Kontakt mit dem Chef - keine Hotline.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Kontakt</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4" />
                <span className="text-primary-foreground/90">1100 Wien, Karmarschgasse 51</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4" />
                <a 
                  href="tel:+436677680897" 
                  className="text-primary-foreground/90 hover:text-white transition-colors"
                >
                  +43 667 7680897
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4" />
                <a 
                  href="mailto:nikac998@gmail.com" 
                  className="text-primary-foreground/90 hover:text-white transition-colors"
                >
                  nikac998@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MessageCircle className="w-4 h-4" />
                <a 
                  href="https://wa.me/436677680897?text=Hallo%20Nikola,%20ich%20brauche%20Unterstützung%20bei%20einer%20Reinigung%20in%20Wien" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-foreground/90 hover:text-white transition-colors"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Legal & Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Öffnungszeiten</h4>
            <p className="text-primary-foreground/90 mb-4">
              Mo-Fr: 05:00-19:00 Uhr
            </p>
            
            <div className="space-y-2">
              <a 
                href="/impressum" 
                className="block text-primary-foreground/90 hover:text-white transition-colors"
              >
                Impressum
              </a>
              <a 
                href="/datenschutz" 
                className="block text-primary-foreground/90 hover:text-white transition-colors"
              >
                Datenschutz
              </a>
            </div>
          </div>
        </div>

        <hr className="border-primary-foreground/20 my-8" />
        
        <div className="text-center text-primary-foreground/80">
          <p>&copy; 2025 Nikola Miloradovic Reinigung. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;