import { CheckCircle, Users, Clock, Euro, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import teamImage from "@/assets/trust-team-wien.webp";
import inspectionImage from "@/assets/trust-besichtigung-wien.webp";

const Trust = () => {
  const trustPoints = [
    {
      icon: <CheckCircle className="w-8 h-8 text-primary" />,
      title: "Direkter Kontakt mit dem Chef",
      description: "keine Hotline"
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Familienunternehmen aus Wien und Umgebung",
      description: "seit Jahren vertrauensvoll"
    },
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      title: "Flexible Termine und schnelle Kommunikation",
      description: "wir passen uns an"
    },
    {
      icon: <Euro className="w-8 h-8 text-primary" />,
      title: "Fixpreise nach Besichtigung",
      description: "transparent und verbindlich"
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "Angebot in 24 Stunden",
      description: "schnell und unkompliziert"
    }
  ];

  return (
    <section className="py-16" style={{ backgroundColor: "hsl(var(--trust-bg))" }}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Warum wir die richtige Reinigungsfirma in Wien und Umgebung sind
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="space-y-8">
            {trustPoints.map((point, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  {point.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {point.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {point.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Proof Gallery */}
          <div className="space-y-4 md:space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8">
              <a 
                href="tel:+436677680897?utm_source=lp&utm_medium=tile&utm_campaign=trust&utm_content=rueckruf"
                className="relative overflow-hidden rounded-2xl shadow-medium group cursor-pointer block"
                aria-label="Rückruf in 24 Stunden per Telefon starten"
              >
                <img 
                  src={teamImage} 
                  alt="Team von Nikola Miloradovic Reinigung bei Kundentermin in Wien und Umgebung"
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                  srcSet={`${teamImage} 480w, ${teamImage} 768w, ${teamImage} 1280w`}
                  sizes="(max-width: 480px) 480px, (max-width: 768px) 384px, 640px"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-primary/30 backdrop-blur-sm p-4 rounded-2xl">
                  <p className="text-white text-sm font-semibold">Rückruf in 24 Stunden</p>
                  <p className="text-white text-xs">Direkter Kontakt mit dem Chef</p>
                </div>
              </a>
              <Link 
                to="/kontakt#formular?utm_source=lp&utm_medium=tile&utm_campaign=trust&utm_content=fixpreis"
                className="relative overflow-hidden rounded-2xl shadow-medium group cursor-pointer"
                aria-label="Fixpreis nach Besichtigung anfragen"
              >
                <img 
                  src={inspectionImage} 
                  alt="Objektbesichtigung in Wien und Umgebung für Fixpreis"
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                  srcSet={`${inspectionImage} 480w, ${inspectionImage} 768w, ${inspectionImage} 1280w`}
                  sizes="(max-width: 480px) 480px, (max-width: 768px) 384px, 640px"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-primary/30 backdrop-blur-sm p-4 rounded-2xl">
                  <p className="text-white text-sm font-semibold">Fixpreis nach Besichtigung</p>
                  <p className="text-white text-xs">Transparent und verbindlich</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;