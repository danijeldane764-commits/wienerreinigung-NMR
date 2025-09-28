import { useState, useEffect } from "react";
import CTAWhatsApp from "@/components/CTAWhatsApp";
import CTACall from "@/components/CTACall";
import heroImage1 from "@/assets/hero-industriekletterer-1.jpg";
import heroImage2 from "@/assets/hero-fensterreinigung-2.jpg";
import heroImage3 from "@/assets/hero-industriekletterer-3.jpg";
import heroImage4 from "@/assets/hero-bueroreinigung-4.jpg";
import heroImage5 from "@/assets/hero-hausbetreuung-5.jpg";
import heroImage6 from "@/assets/hero-hausbetreuung-6.jpg";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: heroImage1,
      title: "Sauberkeit ohne Ausreden in Wien & Umgebung",
      subtitle: "Für Hausverwaltungen, Kanzleien, Baufirmen, Unternehmen & Haushalte",
      service: "Industriekletterer & Fensterreinigung",
      backgroundPosition: "center 20%"
    },
    {
      image: heroImage2,
      title: "Professionelle Fensterreinigung in Wien & Umgebung",
      subtitle: "Kristallklare Ergebnisse mit modernster Seiltechnik",
      service: "Fensterreinigung mit Seiltechnik",
      backgroundPosition: "center 15%"
    },
    {
      image: heroImage3,
      title: "Industriekletterer für alle Höhen in Wien & Umgebung",
      subtitle: "Sichere Arbeiten an Gebäuden und schwer zugänglichen Stellen",
      service: "Industrieklettern & Höhenarbeiten",
      backgroundPosition: "center 25%"
    },
    {
      image: heroImage4,
      title: "Dachfensterreinigung mit Seiltechnik in Wien & Umgebung",
      subtitle: "Schwer erreichbare Dachfenster professionell gereinigt",
      service: "Dachfensterreinigung & Industrieklettern",
      backgroundPosition: "center 45%"
    },
    {
      image: heroImage5,
      title: "Hausbetreuung mit Glanzgarantie in Wien & Umgebung",
      subtitle: "Treppenhäuser und Eingangsbereiche in perfektem Zustand",
      service: "Hausbetreuung & Stiegenhausreinigung",
      backgroundPosition: "center center"
    },
    {
      image: heroImage6,
      title: "Zuverlässige Hausbetreuung in Wien & Umgebung",
      subtitle: "Ihr Objekt in besten Händen - regelmäßig und gründlich",
      service: "Hausbetreuung & Facility Management",
      backgroundPosition: "center center"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const currentSlideData = slides[currentSlide];
  const handleCall = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'call_click_hero', {
        event_category: 'engagement',
        event_label: 'hero_section'
      });
    }
    window.location.href = "tel:+436677680897";
  };

  const handleWhatsApp = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'whatsapp_click_hero', {
        event_category: 'engagement',
        event_label: 'hero_section'
      });
    }
    window.open("https://wa.me/436677680897?text=Hallo%20Nikola,%20bitte%20um%20kurze%20Chef-Besichtigung%20in%20[Ort].%20Wunschtermin:%20[Datum/Uhrzeit].", "_blank");
  };

  return (
    <section className="relative min-h-[75vh] sm:min-h-[80vh] md:min-h-[82vh] lg:min-h-[85vh] flex items-center justify-center py-4 sm:py-6 md:py-8 overflow-hidden">
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-no-repeat transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ 
            backgroundImage: `url(${slide.image})`,
            backgroundPosition: slide.backgroundPosition
          }}
        >
          <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0,0,0,0.55)' }}></div>
        </div>
      ))}
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center text-white">
        <div className="max-w-[600px] sm:max-w-[650px] md:max-w-[700px] lg:max-w-[800px] mx-auto">
          <h1 className="font-poppins font-bold text-white text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl mb-2 sm:mb-3 md:mb-4 leading-tight transition-all duration-500">
            {currentSlideData.title}
          </h1>
          <p className="font-roboto text-[#E6E6E6] text-sm sm:text-base md:text-base lg:text-lg xl:text-xl mb-4 sm:mb-5 md:mb-6 leading-normal transition-all duration-500">
            {currentSlideData.subtitle}<br className="hidden sm:block" />
            <span className="sm:hidden"> </span>Direkt vom Chef. Fixpreis. Versichert.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mt-4 sm:mt-5 md:mt-6">
            <CTAWhatsApp 
              text="WhatsApp - Anfrage"
              onClick={handleWhatsApp}
            />
            <CTACall 
              text="Anrufen"
              onClick={handleCall}
            />
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white scale-110' 
                : 'bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Slide ${index + 1} anzeigen`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;