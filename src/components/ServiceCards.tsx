import React from 'react';

const ServiceCards = () => {
  const services = [
    {
      id: 'hausbetreuung',
      title: 'Hausbetreuung',
      description: 'Regelmäßige Reinigung von Stiegenhäusern, Eingangsbereichen und Allgemeinflächen. Sauber, ordentlich und verlässlich – inklusive kleiner Reparaturen.',
    },
    {
      id: 'fensterreinigung',
      title: 'Fensterreinigung & Seiltechnik',
      description: 'Streifenfreie Fenster – ob normal erreichbar oder mit Seiltechnik in luftiger Höhe. Wir sorgen für klare Sicht, wo andere nicht hinkommen.',
    },
    {
      id: 'gartenpflege',
      title: 'Gartenpflege & Außenflächen',
      description: 'Pflege von Grünflächen, Terrassen und Höfen. Wir halten alles in Form – von der Unkrautentfernung bis zur regelmäßigen Grundpflege.',
    },
    {
      id: 'spezialleistungen',
      title: 'Spezial- & Zusatzleistungen',
      description: 'Abfluss- und Hydrantenreinigung, kleine Reparaturen und Sonderreinigungen. Wir kümmern uns, melden Auffälligkeiten und packen dort an, wo es gebraucht wird.',
    },
    {
      id: 'winterdienst',
      title: 'Winterdienst & Schneeräumung',
      description: 'Verlässliche Schneeräumung und Streudienste für sichere Wege, Zufahrten und Eingänge – schnell, gründlich und einsatzbereit bei jedem Wetter.',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
      {services.map((service) => (
        <div
          key={service.id}
          className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer border border-border/50"
        >
          {/* Image Placeholder */}
          <div className="w-full h-48 rounded-t-xl overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-primary/10 to-primary/20 flex items-center justify-center">
              <span className="text-muted-foreground text-sm text-center px-4">
                Bild wird ersetzt –<br />{service.title}
              </span>
            </div>
          </div>
          
          {/* Content */}
          <div className="p-6">
            <h3 className="font-poppins font-bold text-foreground text-xl mb-3">
              {service.title}
            </h3>
            <p className="font-roboto text-muted-foreground text-sm leading-relaxed">
              {service.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceCards;