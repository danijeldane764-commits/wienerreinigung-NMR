import hausverwaltungImage from "@/assets/hausverwaltung-lobby.jpg";
import kanzleiImage from "@/assets/kanzlei-conference.jpg";
import bueroImage from "@/assets/bueroreinigung-workplace.jpg";
import spezialreinigungImage from "@/assets/spezialreinigung-desinfektion.jpg";

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

          {/* Spezialreinigung & Desinfektion Section */}
          <div 
            className="relative h-[600px] rounded-2xl overflow-hidden bg-cover bg-center mt-8"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url(${spezialreinigungImage})`
            }}
          >
            <div className="absolute top-0 left-0 h-2/3 flex items-center px-8 md:px-16">
              <div className="text-left max-w-2xl">
                <h2 className="text-h1 font-bold text-white mb-4">
                  Spezialreinigung & Desinfektion
                </h2>
                <h3 className="text-h3 text-gray-200 mb-4 leading-relaxed">
                  Für maximale Hygiene in Büros, Kanzleien und öffentlichen Räumen
                </h3>
                <p className="text-body text-gray-100 leading-relaxed">
                  Ob gründliche Desinfektion nach Bauarbeiten, spezielle Hygienestandards oder sensible Arbeitsbereiche – wir sorgen für ein keimfreies Umfeld, in dem sich Mitarbeiter und Kunden sicher fühlen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForWhom;