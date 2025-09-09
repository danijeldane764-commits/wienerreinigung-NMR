import { Phone, MessageCircle, Mail, MapPin, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  const handleCall = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'anrufen_click', {
        event_category: 'engagement',
        event_label: 'contact'
      });
    }
  };

  const handleWhatsApp = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'whatsapp_click', {
        event_category: 'engagement', 
        event_label: 'contact'
      });
    }
  };

  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Angebot in 24 Stunden
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Am schnellsten geht es per Anruf oder WhatsApp. Kein Formular - direkter Kontakt mit dem Chef.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a 
              href="tel:+436677680897"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground text-lg font-medium rounded-md transition-colors"
              aria-label="Anruf mit Nikola Miloradovic starten"
              onClick={handleCall}
            >
              <Phone className="w-5 h-5 mr-2" />
              Jetzt anrufen
            </a>
            <a 
              href="https://wa.me/436677680897?text=Hallo%20Nikola,%20ich%20brauche%20Unterst%C3%BCtzung%20bei%20einer%20Reinigung%20in%20Wien"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-green-600 hover:bg-green-700 text-white text-lg font-medium rounded-md transition-colors"
              aria-label="WhatsApp Chat mit Nikola Miloradovic starten"
              onClick={handleWhatsApp}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Per WhatsApp schreiben
            </a>
          </div>

          <div className="text-center space-y-2 text-muted-foreground">
            <div className="flex items-center justify-center space-x-3">
              <Phone className="w-4 h-4 text-primary" />
              <span>Telefon: +43 667 7680897</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <MessageCircle className="w-4 h-4 text-primary" />
              <span>WhatsApp: +43 667 7680897</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Mail className="w-4 h-4 text-primary" />
              <span>E-Mail: nikac998@gmail.com</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Contact Info */}
          <Card className="shadow-medium">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Kontaktinformationen
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <a 
                    href="tel:+436677680897" 
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    +43 667 7680897
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <MessageCircle className="w-5 h-5 text-primary" />
                  <a 
                    href="https://wa.me/436677680897?text=Hallo%20Nikola,%20ich%20brauche%20Unterst%C3%BCtzung%20bei%20einer%20Reinigung%20in%20Wien"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    WhatsApp
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <a 
                    href="mailto:nikac998@gmail.com"
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    nikac998@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="text-foreground">1100 Wien, Karmarschgasse 51</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <a 
                  href="tel:+436677680897"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground text-lg font-medium rounded-md transition-colors"
                  aria-label="Anruf mit Nikola Miloradovic starten"
                  onClick={handleCall}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Anrufen
                </a>
                <a 
                  href="https://wa.me/436677680897?text=Hallo%20Nikola,%20ich%20brauche%20Unterst%C3%BCtzung%20bei%20einer%20Reinigung%20in%20Wien"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white text-lg font-medium rounded-md transition-colors"
                  aria-label="WhatsApp Chat mit Nikola Miloradovic starten"
                  onClick={handleWhatsApp}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Per WhatsApp schreiben
                </a>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-medium">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                <Clock className="w-5 h-5 text-primary mr-2" />
                Öffnungszeiten
              </h3>
              <div className="text-foreground">
                <p className="font-medium">Mo-Fr: 05:00-19:00 Uhr</p>
                <p className="text-muted-foreground mt-2">
                  Termine nach Vereinbarung auch außerhalb der Öffnungszeiten möglich
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;