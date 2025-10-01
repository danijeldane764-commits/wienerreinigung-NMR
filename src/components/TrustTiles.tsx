import trustTeamImage from "@/assets/s-hausbetreuung-new.jpg";
import trustBesichtigungImage from "@/assets/trust-besichtigung-wien.webp";

const TrustTiles = () => {
  const handleCallTile = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'tile_click_rueckruf', {
        event_category: 'engagement',
        event_label: 'trust_tile',
        utm_source: 'lp',
        utm_medium: 'tile',
        utm_campaign: 'trust',
        utm_content: 'rueckruf'
      });
    }
    window.location.href = "tel:+436677680897";
  };

  const handleContactTile = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'tile_click_fixpreis', {
        event_category: 'engagement',
        event_label: 'trust_tile',
        utm_source: 'lp',
        utm_medium: 'tile',
        utm_campaign: 'trust',
        utm_content: 'fixpreis'
      });
    }
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Call Tile */}
            <div 
              className="relative group cursor-pointer rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={handleCallTile}
              role="button"
              aria-label="Direkter Draht zum Inhaber - Telefon starten"
            >
              <div className="aspect-video">
                <img 
                  src={trustTeamImage}
                  alt="Team von Nikola Miloradovic Reinigung bei Kundentermin in Wien"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-primary/70 group-hover:bg-primary/80 transition-all duration-300"></div>
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center p-6">
                  <h3 className="text-h2 mb-3">Direkter Draht zum Inhaber</h3>
                  <p className="text-body-large opacity-90">Keine Hotline - du sprichst direkt mit mir.</p>
                </div>
              </div>
            </div>

            {/* Fixpreis Tile */}
            <div 
              className="relative group cursor-pointer rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={handleContactTile}
              role="button"
              aria-label="Fixpreis nach Besichtigung anfragen"
            >
              <div className="aspect-video">
                <img 
                  src={trustBesichtigungImage}
                  alt="Objektbesichtigung in Wien durch den Inhaber für Fixpreis"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-primary/70 group-hover:bg-primary/80 transition-all duration-300"></div>
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center p-6">
                  <h3 className="text-h2 mb-3">Fixpreis nach Besichtigung</h3>
                  <p className="text-body-large opacity-90">Persönlich durch den Inhaber</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustTiles;