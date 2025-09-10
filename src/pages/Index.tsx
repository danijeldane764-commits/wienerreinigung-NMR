import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Hausbetreuung from "@/components/Hausbetreuung";
import Fensterreinigung from "@/components/Fensterreinigung";
import FensterreinigungSeiltechnik from "@/components/FensterreinigungSeiltechnik";
import Trust from "@/components/Trust";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Update page title and meta description for SEO
    document.title = "Reinigungsfirma Wien - Hausbetreuung, Fensterreinigung, Fensterreinigung mit Seiltechnik mit Fixpreis";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Hausbetreuung, Fensterreinigung und Fensterreinigung mit Seiltechnik in Wien. Chef Besichtigung vor Ort, Fixpreis, Angebot in 24 Stunden. Direkter Kontakt mit dem Chef.');
    }
  }, []);

  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Hausbetreuung />
      <Fensterreinigung />
      <FensterreinigungSeiltechnik />
      <Trust />
      <About />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
