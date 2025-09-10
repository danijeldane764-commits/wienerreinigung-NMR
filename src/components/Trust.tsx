import { CheckCircle, Users, Clock, Euro, Zap } from "lucide-react"; // Fixed cache issue
import { Link } from "react-router-dom";

const Trust = () => {
  const trustPoints = [
    {
      icon: <CheckCircle className="w-8 h-8 text-primary" />,
      title: "Direkter Kontakt mit dem Chef - keine Hotline",
      description: ""
    },
    {
      icon: <Euro className="w-8 h-8 text-primary" />,
      title: "Fixpreis nach persönlicher Besichtigung durch den Chef - transparent und verbindlich",
      description: ""
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "Angebot in 24 Stunden - schnell und unkompliziert",
      description: ""
    },
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      title: "Flexible Termine und leise im Betrieb",
      description: ""
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Familienunternehmen aus Wien",
      description: ""
    }
  ];

  return (
    <section className="py-16" style={{ backgroundColor: "hsl(var(--trust-bg))" }}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Warum wir
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
                  {point.description && (
                    <p className="text-muted-foreground">
                      {point.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Company Logo with Persuasive Text */}
          <div className="flex flex-col items-center space-y-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Direkter Kontakt mit dem Chef
              </h3>
              <p className="text-muted-foreground text-lg">
                Kein Callcenter - sprechen Sie direkt mit Nikola Miloradovic
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-medium">
              <img 
                src="/lovable-uploads/77c39513-a24a-4fbe-b702-c83164cdf492.png" 
                alt="Nikola Miloradovic Reinigung Logo - Professionelle Reinigungsfirma in Wien und Umgebung"
                className="w-full max-w-sm mx-auto object-contain"
                loading="lazy"
                decoding="async"
              />
            </div>
            
            <div className="text-center">
              <p className="text-foreground font-semibold text-lg mb-1">
                ✓ Persönliche Beratung garantiert
              </p>
              <p className="text-muted-foreground">
                Ihr Vertrauen ist unsere Priorität
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;