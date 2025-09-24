import { Building2, Scale, Monitor, HardHat, Home, Store, Snowflake } from "lucide-react";
import officeCleaningImage from "@/assets/s-bueroreinigung-wien.webp";

const TargetAudience = () => {
  const targetGroups = [
    {
      icon: Building2,
      headline: "Hausverwaltungen",
      subline: "Ruhe mit den Mietern – kein Ärger mehr wegen Reinigung",
      hasImage: false
    },
    {
      icon: Scale,
      headline: "Kanzleien", 
      subline: "Saubere Büros für einen professionellen Eindruck",
      hasImage: false
    },
    {
      icon: Monitor,
      headline: "Büroreinigung",
      subline: "Saubere Arbeitsplätze für ein gesundes und produktives Team",
      hasImage: true,
      backgroundImage: officeCleaningImage
    },
    {
      icon: HardHat,
      headline: "Baufirmen",
      subline: "Saubere Abnahme ohne Stress und Nacharbeit",
      hasImage: false
    },
    {
      icon: Home,
      headline: "Haushalte",
      subline: "Pünktlich, ehrlich, Fixpreis – ohne Überraschungen",
      hasImage: false
    },
    {
      icon: Store,
      headline: "Unternehmen & Geschäfte",
      subline: "Saubere Verkaufsflächen und Geschäftsräume – für zufriedene Kunden & Mitarbeiter.",
      hasImage: false
    },
    {
      icon: Snowflake,
      headline: "Winterdienst & Schneeräumung",
      subline: "Sichere Gehwege & Zufahrten – pünktlich und zuverlässig.",
      hasImage: false
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-h2 text-foreground text-center mb-12">
            Für wen wir arbeiten in Wien und Umgebung
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {targetGroups.map((group, index) => {
              const IconComponent = group.icon;
              return (
                <div
                  key={index}
                  className={`relative overflow-hidden bg-[hsl(var(--light-blue-bg))] p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:bg-[hsl(var(--light-blue-bg))] hover:-translate-y-1 cursor-pointer ${
                    group.hasImage ? 'bg-cover bg-center' : ''
                  }`}
                  style={group.hasImage ? {
                    backgroundImage: `linear-gradient(rgba(245, 248, 255, 0.95), rgba(245, 248, 255, 0.95)), url(${group.backgroundImage})`
                  } : {}}
                >
                  <div className="text-center">
                    <div className="flex justify-center mb-4">
                      <div className="w-12 h-12 bg-[hsl(var(--dark-blue))] rounded-full flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    
                    <h3 className="text-h4 font-bold text-[hsl(var(--dark-blue))] mb-2">
                      {group.headline}
                    </h3>
                    
                    <p className="text-body text-[hsl(var(--neutral-gray))] leading-relaxed">
                      {group.subline}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;