import { Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { openCookieBanner } from "@/components/CookieBanner";

const Footer = () => {
  return (
    <footer className="bg-muted py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Contact Section */}
          <div className="mb-8">
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="/lovable-uploads/136a23ba-c861-4ddc-bfa0-27d99a618697.png"
                alt="Nikola Miloradovic Reinigung Logo"
                className="h-10 w-auto object-contain"
                loading="lazy"
              />
              <h3 className="text-xl font-bold text-foreground">
                Nikola Miloradovic Reinigung
              </h3>
            </div>

            <div className="space-y-2 text-muted-foreground">
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4" />
                <span>1100 Wien, Karmarschgasse 51</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4" />
                <a
                  href="tel:+436677680897"
                  className="hover:text-primary transition-colors"
                >
                  +43 667 7680897
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4" />
                <a
                  href="mailto:nikac998@gmail.com"
                  className="hover:text-primary transition-colors"
                >
                  nikac998@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="mb-8">
            <p className="text-muted-foreground">
              <span className="font-medium">Öffnungszeiten:</span> Mo-Fr 05:00-19:00 Uhr
            </p>
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap gap-x-6 gap-y-3 mb-8">
            <Link
              to="/impressum"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Impressum
            </Link>
            <Link
              to="/datenschutz"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Datenschutzerklärung
            </Link>
            <button
              type="button"
              onClick={openCookieBanner}
              className="text-muted-foreground hover:text-primary transition-colors text-left"
            >
              Cookie-Einstellungen
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
