import { useEffect } from "react";
import Header from "@/components/Header";
import TrustSection from "@/components/TrustSection";
import PainPoints from "@/components/PainPoints";
import Services from "@/components/Services";
import Hero from "@/components/Hero";
import NoCostsInfoBox from "@/components/NoCostsInfoBox";
import TargetAudience from "@/components/TargetAudience";
import HowItWorks from "@/components/HowItWorks";
import Hausbetreuung from "@/components/Hausbetreuung";
import Fensterreinigung from "@/components/Fensterreinigung";
import FensterreinigungSeiltechnik from "@/components/FensterreinigungSeiltechnik";
import Winterdienst from "@/components/Winterdienst";
import TrustTiles from "@/components/TrustTiles";
import Trust from "@/components/Trust";
import Testimonial from "@/components/Testimonial";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Update page title and meta description for SEO
    document.title = "Reinigungsfirma Wien – Inhaber-Besichtigung, Fixpreis, Besichtigung meist innerhalb von 24 Stunden";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Hausbetreuung, Fensterreinigung und Fensterreinigung mit Seiltechnik in Wien. Inhaber-Besichtigung vor Ort, Fixpreis danach. Direkter Kontakt mit dem Inhaber.');
    }
  }, []);

  return (
    <main className="min-h-screen pt-24 md:pt-32">
      <Header />
      <Hero />
      <TrustSection />
      <PainPoints />
      <Services />
      <NoCostsInfoBox />
      <TargetAudience />
      <HowItWorks />
      <Hausbetreuung />
      <Fensterreinigung />
      <FensterreinigungSeiltechnik />
      <Winterdienst />
      <TrustTiles />
      <Testimonial />
      <FinalCTA />
      <Trust />
      <FAQ />
      <Footer />
    </main>
  );
};

export default Index;
