import trustImage from "@/assets/trust-office-clean-wien.webp";

const TrustSection = () => {
  const stats = [
    {
      icon: "📍",
      number: "3 Jahre",
      label: "Aktiv in Wien & Umgebung"
    },
    {
      icon: "🧼",
      number: "754",
      label: "Erfolgreiche Reinigungen"
    },
    {
      icon: "🔒",
      number: "100%",
      label: "Fixpreis & Zufriedenheitsgarantie",
      highlighted: true
    },
    {
      icon: "🌟",
      number: "5.0 Sterne",
      label: "Bewertung bei Google"
    }
  ];

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container mx-auto px-6">
        {/* Split Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-h1 font-bold mb-6" style={{ color: '#002060' }}>
              Ehrliche Reinigung. Direkt vom Chef.
            </h2>
            <p className="text-body-large" style={{ color: '#333333' }}>
              Seit 3 Jahren in Wien & Umgebung – mit Fixpreis, Handschlagqualität und persönlichem Einsatz.
            </p>
          </div>

          {/* Right Image with Badge */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <img
                src={trustImage}
                alt="Professionelle Reinigung in Wien - Reinigungsexperte bei der Arbeit"
                className="w-full h-64 md:h-80 object-cover"
              />
              {/* Badge Overlay */}
              <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2 shadow-md">
                <div className="flex items-center gap-1 text-sm font-medium" style={{ color: '#002060' }}>
                  <span>⭐</span>
                  <span>5 Sterne bei Google</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="rounded-lg p-8 md:p-12" style={{ backgroundColor: '#0052CC' }}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`text-center p-4 rounded-lg transition-colors ${
                  stat.highlighted ? 'bg-white/20' : ''
                }`}
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-white/90 leading-tight">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;