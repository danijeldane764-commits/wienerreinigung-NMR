import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, MessageCircle, Mail, MapPin, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
    details: ""
  });
  const { toast } = useToast();

  const handleCall = () => {
    window.location.href = "tel:+436677680897";
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/436677680897?text=Hallo%20Nikola,%20ich%20brauche%20Unterstützung%20bei%20einer%20Reinigung%20in%20Wien", "_blank");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.message) {
      toast({
        title: "Bitte füllen Sie alle Pflichtfelder aus",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Anfrage gesendet!",
      description: "Wir melden uns innerhalb von 24 Stunden bei Ihnen.",
    });
    
    setFormData({ name: "", phone: "", message: "", details: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Kostenloses Angebot in 24 Stunden
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Am schnellsten geht es per Anruf oder WhatsApp. Das Formular ist optional.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              variant="cta" 
              size="lg" 
              onClick={handleCall}
              className="w-full sm:w-auto text-lg px-8 py-4"
            >
              <Phone className="w-5 h-5 mr-2" />
              Jetzt anrufen
            </Button>
            <Button 
              variant="whatsapp" 
              size="lg" 
              onClick={handleWhatsApp}
              className="w-full sm:w-auto text-lg px-8 py-4"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">
                Anfrage senden
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-foreground font-medium">
                    Name *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="mt-2"
                  />
                </div>
                
                <div>
                  <Label htmlFor="phone" className="text-foreground font-medium">
                    Telefon *
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="mt-2"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-foreground font-medium">
                    Nachricht *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="mt-2"
                  />
                </div>
                
                <div>
                  <Label htmlFor="details" className="text-foreground font-medium">
                    Weitere Details (optional)
                  </Label>
                  <Textarea
                    id="details"
                    name="details"
                    value={formData.details}
                    onChange={handleInputChange}
                    rows={3}
                    className="mt-2"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <input 
                      type="checkbox" 
                      id="privacy" 
                      required 
                      className="mt-1"
                    />
                    <label htmlFor="privacy" className="text-sm text-muted-foreground">
                      Ich stimme der Verarbeitung meiner Daten zur Bearbeitung der Anfrage zu
                    </label>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Mit Absenden stimmen Sie der Verarbeitung Ihrer Daten zur Bearbeitung der Anfrage zu. 
                    Weitere Informationen in der <a href="/datenschutz" className="text-primary hover:underline">Datenschutzerklärung</a>.
                  </p>
                </div>
                
                <Button 
                  type="submit" 
                  variant="cta" 
                  size="lg" 
                  className="w-full"
                >
                  Nachricht senden
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
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
                      href="https://wa.me/436677680897?text=Hallo%20Nikola,%20ich%20brauche%20Unterstützung%20bei%20einer%20Reinigung%20in%20Wien"
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
                  <Button 
                    variant="cta" 
                    onClick={handleCall}
                    className="text-lg px-6 py-3"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Anrufen
                  </Button>
                  <Button 
                    variant="whatsapp" 
                    onClick={handleWhatsApp}
                    className="text-lg px-6 py-3"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Per WhatsApp schreiben
                  </Button>
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
      </div>
    </section>
  );
};

export default Contact;