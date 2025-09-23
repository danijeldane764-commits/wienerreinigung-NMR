import hausverwaltungImage from "@/assets/hausverwaltung-lobby.jpg";
import kanzleiImage from "@/assets/kanzlei-conference.jpg";
import bueroImage from "@/assets/bueroreinigung-workplace.jpg";

const ForWhom = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div 
            className="relative h-[500px] rounded-2xl overflow-hidden bg-cover bg-center flex items-center justify-center"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url(${hausverwaltungImage})`
            }}
          >
            <div className="text-center px-8 md:px-16">
              <h2 className="text-h1 font-bold text-white mb-4">
                Hausverwaltung
              </h2>
              <p className="text-h3 text-gray-200 leading-relaxed">
                Ruhe mit den Mietern – kein Ärger mehr wegen Reinigung
              </p>
            </div>
          </div>

          {/* Kanzleien Section */}
          <div 
            className="relative h-[500px] rounded-2xl overflow-hidden bg-cover bg-center flex items-center justify-center mt-8"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url(${kanzleiImage})`
            }}
          >
            <div className="text-center px-8 md:px-16">
              <h2 className="text-h1 font-bold text-white mb-4">
                Kanzleien
              </h2>
              <p className="text-h3 text-gray-200 leading-relaxed">
                Saubere Büros für einen professionellen Eindruck
              </p>
            </div>
          </div>

          {/* Büroreinigung Section */}
          <div 
            className="relative h-[500px] rounded-2xl overflow-hidden bg-cover bg-center flex items-center justify-center mt-8"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url(${bueroImage})`
            }}
          >
            <div className="text-center px-8 md:px-16">
              <h2 className="text-h1 font-bold text-white mb-4">
                Büroreinigung
              </h2>
              <p className="text-h3 text-gray-200 leading-relaxed">
                Saubere Arbeitsplätze für ein gesundes und produktives Team
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForWhom;