import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, X, Check } from "lucide-react";
import heroImage from "@/assets/hero-office-wien.jpg";

const Hero = () => {
  const handleCall = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'call_click_hero', {
        event_category: 'engagement',
        event_label: 'hero_section'
      });
    }
    window.location.href = "tel:+436677680897";
  };

  const handleWhatsApp = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'whatsapp_click_hero', {
        event_category: 'engagement',
        event_label: 'hero_section'
      });
    }
    window.open("https://wa.me/436677680897?text=Hallo%20Nikola,%20bitte%20um%20kurze%20Chef-Besichtigung%20in%20Wien.%20Wunschtermin:%20[Datum/Uhrzeit].", "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 md:pt-16">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-primary/30"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white py-16 md:py-32">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Sauberkeit ohne Ausreden : für Hausverwaltungen, Kanzleien, Baufirmen, Unternehmen und Haushalte in Wien
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto opacity-90">
          Wenn du bei mir anrufst, geh ich selbst ran. Kein Callcenter, keine Ausreden. Ich komm vorbei, schau mir dein Objekt an und sag dir gleich, was Sache ist : ein fairer Fixpreis, versichert und ehrlich.
        </p>
        
        {/* Pain Block */}
        <div className="mb-8 max-w-4xl mx-auto text-left">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
            Weißt du, was ich jede Woche höre?
          </h2>
          
          <div className="space-y-6 mb-8">
            <div className="bg-white/10 rounded-lg p-6">
              <p className="text-lg mb-2 font-medium">Eine Hausverwaltung :</p>
              <p className="text-lg opacity-90">"Die Mieter zerreißen mich, weil das Stiegenhaus nach der Reinigung immer noch stinkt – und die Putzfirma behauptet, sie war schon da."</p>
            </div>
            
            <div className="bg-white/10 rounded-lg p-6">
              <p className="text-lg mb-2 font-medium">Ein Anwalt :</p>
              <p className="text-lg opacity-90">"Ich lad Klienten ein, und das Erste, was die sehen, sind Schlieren am Glas. Einfach nur peinlich."</p>
            </div>
            
            <div className="bg-white/10 rounded-lg p-6">
              <p className="text-lg mb-2 font-medium">Ein Bauleiter :</p>
              <p className="text-lg opacity-90">"Endreinigung fertig hieß es – und bei der Abnahme war Staub und Zementschlieren überall. Ich stand da wie ein Trottel."</p>
            </div>
            
            <div className="bg-white/10 rounded-lg p-6">
              <p className="text-lg opacity-90">Und Haushalte? Immer dasselbe : unpünktlich, schlampig, plötzlich Sonderkosten.</p>
            </div>
          </div>
          
          <div className="text-center mb-6">
            <p className="text-xl md:text-2xl font-bold mb-4">Genau deswegen mach ich's anders.</p>
            <p className="text-xl md:text-2xl mb-4">Und weißt du, was mir Kunden am häufigsten sagen?</p>
            <p className="text-xl md:text-2xl font-medium italic">"Nikola, seit du da bist, ruft keiner mehr an zum Schimpfen."</p>
          </div>
        </div>

        {/* CTA Block */}
        <div className="mb-8 max-w-4xl mx-auto text-center">
          <p className="text-xl md:text-2xl mb-4">So läuft's : ruf mich direkt an oder schick mir eine WhatsApp. Dauert keine Minute.</p>
          <p className="text-xl md:text-2xl mb-6">Du bekommst ein Angebot, kostenlos und glasklar. Wenn's passt, starten wir sofort.</p>
          <p className="text-lg mb-8 opacity-90">Aber ehrlich : ich nehm nur so viele Kunden, wie ich selbst im Griff hab. Lieber weniger Objekte – dafür alle richtig sauber, und jeder zufrieden.</p>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button 
            variant="default" 
            size="lg" 
            onClick={handleCall}
            className="w-full sm:w-auto text-lg px-8 py-4"
          >
            <Phone className="w-5 h-5 mr-2" />
            📞 Genug geärgert – ruf mich jetzt an
          </Button>
          <Button 
            variant="whatsapp" 
            size="lg" 
            onClick={handleWhatsApp}
            className="w-full sm:w-auto text-lg px-8 py-4"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            💬 Schreib mir schnell – dauert keine Minute
          </Button>
        </div>

        {/* Micro Proof */}
        <div className="text-sm opacity-90">
          Aus Wien • Familienunternehmen • Besichtigung meist innerhalb von 24 Stunden
        </div>
      </div>
    </section>
  );
};

export default Hero;