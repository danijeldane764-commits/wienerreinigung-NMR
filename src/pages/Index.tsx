import { useEffect } from "react";
import Header from "@/components/Header";
import PainPoints from "@/components/PainPoints";
import Hero from "@/components/Hero";
import CallbackInfoBox from "@/components/CallbackInfoBox";
import NoCostsInfoBox from "@/components/NoCostsInfoBox";
import TargetAudience from "@/components/TargetAudience";
import ForWhom from "@/components/ForWhom";
import HowItWorks from "@/components/HowItWorks";
import Hausbetreuung from "@/components/Hausbetreuung";
import Fensterreinigung from "@/components/Fensterreinigung";
import FensterreinigungSeiltechnik from "@/components/FensterreinigungSeiltechnik";
import TrustTiles from "@/components/TrustTiles";
import Trust from "@/components/Trust";
import Testimonial from "@/components/Testimonial";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Update page title and meta description for SEO
    document.title = "Reinigungsfirma Wien – Chef-Besichtigung, Fixpreis, Besichtigung meist innerhalb von 24 Stunden";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Hausbetreuung, Fensterreinigung und Fensterreinigung mit Seiltechnik in Wien. Chef-Besichtigung vor Ort, Fixpreis danach. Direkter Kontakt mit dem Chef.');
    }
  }, []);

  return (
    <main className="min-h-screen pt-24 md:pt-32">
      <Header />
      <Hero />
      <CallbackInfoBox />
      <PainPoints />
      <NoCostsInfoBox />
      <TargetAudience />
      <ForWhom />
      <HowItWorks />
      <Hausbetreuung />
      <Fensterreinigung />
      <FensterreinigungSeiltechnik />
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
