import hausbetreeuungImage from "@/assets/s-hausbetreuung.jpg";
import fensterreinigungImage from "@/assets/s-fensterreinigung.jpg";
import industrieklettererImage from "@/assets/s-industriekletterer.jpg";
import gartenpflegeImage from "@/assets/s-gartenpflege.jpg";

const Services = () => {
  const services = [
    {
      title: "Hausbetreuung Wien",
      description: "Rundum-Betreuung für Wohnanlagen und Objekte",
      image: hausbetreeuungImage,
      alt: "Professionelle Hausbetreuung Wien - Gebäudereinigung und Objektbetreuung"
    },
    {
      title: "Fensterreinigung Wien",
      description: "Glasklare Ergebnisse innen und außen",
      image: fensterreinigungImage,
      alt: "Fensterreinigung Wien - professionelle Glasreinigung für Büros und Privathaushalte"
    },
    {
      title: "Industriekletterer Wien",
      description: "Sichere Seiltechnik für schwer zugängliche Fassaden",
      image: industrieklettererImage,
      alt: "Industriekletterer Wien - Fassadenreinigung mit Seiltechnik für Hochhäuser"
    },
    {
      title: "Gartenpflege Wien",
      description: "Saubere Grünflächen, Wege und Terrassen",
      image: gartenpflegeImage,
      alt: "Gartenpflege Wien - professionelle Gartenpflege und Grünflächenbetreuung"
    }
  ];

  const additionalServices = [
    "Büroreinigung",
    "Bauendreinigung", 
    "Winterdienst",
    "Entrümpelung"
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Unsere Leistungen
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professionelle Reinigungsdienstleistungen für alle Anforderungen in Wien und Umgebung
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-card rounded-lg overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 transform hover:scale-105"
            >
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.alt}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
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

        <div className="text-center">
          <h3 className="text-2xl font-semibold text-foreground mb-6">
            Weitere Leistungen
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {additionalServices.map((service, index) => (
              <span 
                key={index}
                className="bg-accent text-accent-foreground px-6 py-3 rounded-full font-medium"
              >
                {service}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;