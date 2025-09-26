import { useState, useEffect } from "react";
import hausverwaltungImage from "@/assets/hausverwaltung-lobby.jpg";
import kanzleiImage from "@/assets/kanzlei-conference.jpg";
import bueroImage from "@/assets/bueroreinigung-workplace.jpg";
import spezialreinigungImage from "@/assets/spezialreinigung-desinfektion.jpg";
import baufirmenImage from "@/assets/baufirmen-rohbau.jpg";

const ForWhom = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: hausverwaltungImage,
      title: "Hausverwaltung",
      subtitle: "Ruhe mit den Mietern – kein Ärger mehr wegen Reinigung",
      gradient: "rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)",
      height: "h-[500px]",
      layout: "center"
    },
    {
      image: kanzleiImage,
      title: "Kanzleien",
      subtitle: "Saubere Büros für einen professionellen Eindruck",
      gradient: "rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)",
      height: "h-[500px]",
      layout: "center"
    },
    {
      image: bueroImage,
      title: "Büroreinigung",
      subtitle: "Saubere Arbeitsplätze für ein gesundes und produktives Team",
      gradient: "rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)",
      height: "h-[500px]",
      layout: "center"
    },
    {
      image: baufirmenImage,
      title: "Baufirmen",
      subtitle: "Saubere Abnahme ohne Stress und Nacharbeit",
      gradient: "rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)",
      height: "h-[500px]",
      layout: "center"
    },
    {
      image: spezialreinigungImage,
      title: "Spezialreinigung & Desinfektion",
      subtitle: "Für maximale Hygiene in Büros, Kanzleien und öffentlichen Räumen",
      description: "Ob gründliche Desinfektion nach Bauarbeiten, spezielle Hygienestandards oder sensible Arbeitsbereiche - wir sorgen für ein keimfreies Umfeld, in dem sich Mitarbeiter und Kunden sicher fühlen.",
      gradient: "rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)",
      height: "h-[600px]",
      layout: "left"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const currentSlideData = slides[currentSlide];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div 
            className={`relative ${currentSlideData.height} rounded-2xl overflow-hidden bg-cover bg-center transition-all duration-1000 ease-in-out`}
            style={{
              backgroundImage: `linear-gradient(${currentSlideData.gradient}), url(${currentSlideData.image})`
            }}
          >
            {currentSlideData.layout === "center" ? (
              <div className="flex items-center justify-center h-full">
                <div className="text-center px-8 md:px-16">
                  <h2 className="text-h1 font-bold text-white mb-4">
                    {currentSlideData.title}
                  </h2>
                  <p className="text-h3 text-gray-200 leading-relaxed">
                    {currentSlideData.subtitle}
                  </p>
                </div>
              </div>
            ) : (
              <div className="absolute top-0 left-0 h-2/3 flex items-center px-8 md:px-16">
                <div className="text-left max-w-2xl">
                  <h2 className="text-h1 font-bold text-white mb-4">
                    {currentSlideData.title}
                  </h2>
                  <h3 className="text-h3 text-gray-200 mb-4 leading-relaxed">
                    {currentSlideData.subtitle}
                  </h3>
                  {currentSlideData.description && (
                    <p className="text-body text-gray-100 leading-relaxed">
                      {currentSlideData.description}
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Slide indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {slides.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-primary' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForWhom;