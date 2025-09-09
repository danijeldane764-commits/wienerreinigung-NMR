import { CheckCircle, Users, Clock, Euro, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import logoImage from "/lovable-uploads/1749d45b-8d40-4eac-a729-4c7021371753.png";

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

          {/* Company Logo */}
          <div className="flex justify-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-medium">
              <img 
                src={logoImage} 
                alt="Nikola Miloradovic Reinigung Logo - Professionelle Reinigungsfirma in Wien und Umgebung"
                className="w-full max-w-sm mx-auto object-contain"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;