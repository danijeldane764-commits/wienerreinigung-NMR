import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import CTAWhatsApp from "@/components/CTAWhatsApp";
import CTACall from "@/components/CTACall";

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
          
          <div className="flex flex-col md:flex-row gap-3 md:gap-[14px] justify-center items-center mb-8">
            <CTACall 
              text="Jetzt anrufen"
              onClick={handleCall}
            />
            <CTAWhatsApp 
              text="Per WhatsApp schreiben"
              onClick={handleWhatsApp}
            />
          </div>

          <div className="text-center space-y-2 text-muted-foreground">
            <div className="flex items-center justify-center space-x-3">
              <Phone className="w-4 h-4 text-primary" />
              <span>Telefon: +43 667 7680897</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                <rect width="24" height="24" rx="5.4" fill="currentColor"/>
                <path d="M12.012 7.3c-2.7 0-4.9 2.2-4.9 4.9 0 .9.2 1.7.7 2.4l.1.1-.4 1.5 1.5-.4.1.1c.7.4 1.5.7 2.4.7 2.7 0 4.9-2.2 4.9-4.9s-2.2-4.9-4.9-4.9zm2.8 6.9c-.1.3-.7.6-1 .6-.3 0-.6 0-1-.2-.2-.1-.5-.2-.8-.3-1.3-.6-2.2-1.9-2.2-3.2 0-.3.1-.6.3-.8.1-.1.2-.1.3-.1.1 0 .2 0 .3.1.1.1.2.3.3.5.1.1.1.3.1.4 0 .1-.1.2-.2.3-.1.1-.1.2-.1.3 0 .1.1.3.3.4.4.3.8.3 1.2 0 .2-.1.3-.3.4-.4.1-.1.2-.1.3-.1.1 0 .2.1.3.2.1.1.2.3.3.5 0 .2-.1.4-.2.5z" fill="#25D366"/>
              </svg>
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
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                    <rect width="24" height="24" rx="5.4" fill="currentColor"/>
                    <path d="M12.012 7.3c-2.7 0-4.9 2.2-4.9 4.9 0 .9.2 1.7.7 2.4l.1.1-.4 1.5 1.5-.4.1.1c.7.4 1.5.7 2.4.7 2.7 0 4.9-2.2 4.9-4.9s-2.2-4.9-4.9-4.9zm2.8 6.9c-.1.3-.7.6-1 .6-.3 0-.6 0-1-.2-.2-.1-.5-.2-.8-.3-1.3-.6-2.2-1.9-2.2-3.2 0-.3.1-.6.3-.8.1-.1.2-.1.3-.1.1 0 .2 0 .3.1.1.1.2.3.3.5.1.1.1.3.1.4 0 .1-.1.2-.2.3-.1.1-.1.2-.1.3 0 .1.1.3.3.4.4.3.8.3 1.2 0 .2-.1.3-.3.4-.4.1-.1.2-.1.3-.1.1 0 .2.1.3.2.1.1.2.3.3.5 0 .2-.1.4-.2.5z" fill="#25D366"/>
                  </svg>
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
              
              <div className="flex flex-col md:flex-row gap-3 md:gap-[14px] mt-6">
                <CTACall 
                  text="Anrufen"
                  onClick={handleCall}
                />
                <CTAWhatsApp 
                  text="Per WhatsApp schreiben"
                  onClick={handleWhatsApp}
                />
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
              
              <div className="text-center mt-4">
                <CTAWhatsApp 
                  text="Per WhatsApp schreiben"
                  onClick={handleWhatsApp}
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;