import { CheckCircle, Users, Clock } from "lucide-react";
import chefImage from "@/assets/d-chef.jpg";
import equipmentImage from "@/assets/d-equipment.jpg";

const Trust = () => {
  const trustPoints = [
    {
      icon: <CheckCircle className="w-8 h-8 text-primary" />,
      title: "Direkter Kontakt mit dem Chef",
      description: "keine Hotline"
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Familienunternehmen aus Wien",
      description: "seit vielen Jahren vertrauensvoll"
    },
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      title: "Flexible Termine & schnelle Kommunikation",
      description: "wir passen uns Ihren Bedürfnissen an"
    }
  ];

  return (
    <section className="py-16" style={{ backgroundColor: "hsl(var(--trust-bg))" }}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Warum wir die richtige Reinigungsfirma in Wien sind
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="relative overflow-hidden rounded-lg shadow-medium">
              <img 
                src={chefImage} 
                alt="Nikola Miloradovic - Chef der Reinigungsfirma Wien - direkter Ansprechpartner"
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-medium">
              <img 
                src={equipmentImage} 
                alt="Professionelle Reinigungsausrüstung Wien - hochwertige Geräte und Materialien"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;