import { Building2, Scale, HardHat, Home } from "lucide-react";

const TargetAudience = () => {
  const targetGroups = [
    {
      icon: Building2,
      headline: "Hausverwaltungen",
      subline: "Ruhe mit den Mietern – kein Ärger mehr wegen Reinigung"
    },
    {
      icon: Scale,
      headline: "Kanzleien", 
      subline: "Saubere Büros für einen professionellen Eindruck"
    },
    {
      icon: HardHat,
      headline: "Baufirmen",
      subline: "Saubere Abnahme ohne Stress und Nacharbeit"
    },
    {
      icon: Home,
      headline: "Haushalte",
      subline: "Pünktlich, ehrlich, Fixpreis – ohne Überraschungen"
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-h2 text-foreground text-center mb-12">
            Für wen wir arbeiten in Wien und Umgebung
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {targetGroups.map((group, index) => {
              const IconComponent = group.icon;
              return (
                <div
                  key={index}
                  className="bg-[hsl(var(--light-blue-bg))] p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:bg-[hsl(var(--light-blue-bg))] hover:-translate-y-1 cursor-pointer"
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