import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import housekeepingImage from "@/assets/s-hausbetreuung-wien.webp";
import windowImage from "@/assets/s-fensterreinigung-wien.webp";
import ropeTechImage from "@/assets/s-seiltechnik-fensterreinigung-wien.webp";

const handleContactScroll = () => {
  const contactSection = document.getElementById('contact');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }
};

const Services = () => {
  const featuredServices = [
    {
      title: "Hausbetreuung Wien",
      description: "Rundum Service für Wohnanlagen und Objekte",
      image: housekeepingImage,
      alt: "Hausbetreuung in Wien",
      link: "#hausbetreuung"
    },
    {
      title: "Fensterreinigung Wien",
      description: "Streifenfrei innen und außen",
      image: windowImage,
      alt: "Fensterreinigung in Wien", 
      link: "#fensterreinigung"
    },
    {
      title: "Fensterreinigung mit Seiltechnik",
      description: "Sicher für schwer zugängliche Fenster in oberen Etagen",
      image: ropeTechImage,
      alt: "Seiltechnik für schwer zugängliche Fenster in Wien",
      link: "#fensterreinigung-seiltechnik"
    }
  ];

  const additionalServices = [
    "Büroreinigung",
    "Bauendreinigung",
    "Winterdienst", 
    "Entrümpelung",
    "Gartenpflege"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-h1 text-foreground mb-6">
            Unsere Schwerpunkte in Wien
          </h2>
          <p className="text-body-large text-muted-foreground max-w-2xl mx-auto">
            Saubere Ergebnisse, klare Abläufe, transparente Kommunikation
          </p>
        </div>

        {/* Featured Services Grid - 3 Services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {featuredServices.map((service, index) => (
            <a 
              key={index} 
              href={service.link}
              className="group relative overflow-hidden rounded-2xl shadow-lg bg-card hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                  srcSet={`${service.image} 480w, ${service.image} 768w, ${service.image} 1280w`}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-h3 text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-body text-muted-foreground">
                  {service.description}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Additional Services */}
        <div className="text-center mb-12">
          <h3 className="text-h3 text-foreground mb-6">
            Weitere Leistungen
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {additionalServices.map((service, index) => (
              <Badge key={index} variant="secondary" className="text-body px-4 py-2">
                {service}
              </Badge>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button 
            variant="default"
            size="lg"
            onClick={handleContactScroll}
            className="text-button-large px-8 py-4"
          >
            Angebot in 24 Stunden
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;