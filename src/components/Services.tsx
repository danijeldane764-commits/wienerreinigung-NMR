import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import officeImage from "@/assets/s-bueroreinigung-wien.webp";
import housekeepingImage from "@/assets/s-hausbetreuung.jpg";
import industrialImage from "@/assets/s-industriekletterer.jpg";
import windowImage from "@/assets/s-fensterreinigung.jpg";

const handleContactScroll = () => {
  const contactSection = document.getElementById('contact');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }
};

const Services = () => {
  const featuredServices = [
    {
      title: "Büroreinigung Wien",
      description: "Gründliche Büros, pünktlich vor Ort, keine Störung im Arbeitsalltag",
      image: officeImage,
      alt: "Büroreinigung in Wien"
    },
    {
      title: "Hausbetreuung Wien", 
      description: "Rundum-Service für Wohnanlagen und Objekte, zuverlässig in Wien",
      image: housekeepingImage,
      alt: "Hausbetreuung in Wien"
    },
    {
      title: "Industriekletterer Wien",
      description: "Sichere Seiltechnik für schwer zugängliche Fassaden",
      image: industrialImage,
      alt: "Industriekletterer in Wien"
    },
    {
      title: "Fensterreinigung Wien",
      description: "Streifenfrei bis zur Kante, innen und außen",
      image: windowImage,
      alt: "Fensterreinigung in Wien"
    }
  ];

  const additionalServices = [
    "Bauendreinigung",
    "Winterdienst", 
    "Entrümpelung",
    "Gartenpflege"
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Unsere Leistungen
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Saubere Ergebnisse, klare Abläufe, transparente Kommunikation
          </p>
        </div>

        {/* Featured Services Grid - 2x2 Desktop, 1x4 Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {featuredServices.map((service, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg bg-card">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                  srcSet={`${service.image} 480w, ${service.image} 768w, ${service.image} 1280w`}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <div className="text-center mb-8">
          <h3 className="text-xl font-semibold text-foreground mb-4">
            Zusatzleistungen
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {additionalServices.map((service, index) => (
              <Badge key={index} variant="secondary" className="text-sm px-4 py-2">
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
            className="font-semibold px-8 py-4 text-lg"
          >
            Angebot in 24 Stunden
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;