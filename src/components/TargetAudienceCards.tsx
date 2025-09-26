import React from 'react';

const TargetAudienceCards = () => {
  const cards = [
    {
      id: 'hausbetreuung',
      title: 'Hausbetreuung',
      description: 'Regelmäßige Betreuung aller Allgemeinflächen - sauber, geordnet, verlässlich. Wir kümmern uns um Stiegenhäuser, Eingangsbereiche und kleine Reparaturen.',
    },
    {
      id: 'kanzleien',
      title: 'Kanzleien',
      description: 'Ein gepflegtes Büro schafft Vertrauen. Wir sorgen für saubere Arbeitsplätze, Konferenzräume und Empfangsbereiche - für den besten Eindruck bei Ihren Mandanten.',
    },
    {
      id: 'baufirmen',
      title: 'Baufirmen',
      description: 'Nach Bauprojekten übernehmen wir die Grob- und Feinreinigung. So können Ihre Objekte pünktlich und sauber an Kunden übergeben werden.',
    },
    {
      id: 'haushalte',
      title: 'Haushalte',
      description: 'Egal ob Wohnung oder Haus - wir übernehmen Grundreinigung, regelmäßige Betreuung oder spezielle Einsätze. Damit Sie es daheim jederzeit sauber haben.',
    },
    {
      id: 'unternehmen',
      title: 'Unternehmen',
      description: 'Für Geschäfte, Büros und Betriebe jeder Art bieten wir flexible Reinigungslösungen. Immer so angepasst, wie es Ihr Alltag erfordert.',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
      {cards.map((card) => (
        <div
          key={card.id}
          className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer border border-border/50"
        >
          {/* Placeholder Image */}
          <div className="w-full h-48 bg-gradient-to-br from-primary/10 to-primary/20 rounded-t-xl flex items-center justify-center">
            <span className="text-muted-foreground text-sm text-center px-4">
              Bild wird ersetzt<br />({card.title})
            </span>
          </div>
          
          {/* Content */}
          <div className="p-6">
            <h3 className="font-poppins font-bold text-foreground text-xl mb-3">
              {card.title}
            </h3>
            <p className="font-roboto text-muted-foreground text-sm leading-relaxed">
              {card.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TargetAudienceCards;