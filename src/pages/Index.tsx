import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Trust from "@/components/Trust";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Update page title and meta description for SEO
    document.title = "Wiener Reinigungsfirma – Büroreinigung, Hausbetreuung, Industriekletterer, Fensterreinigung Wien";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professionelle Reinigungsfirma in Wien – Büroreinigung, Hausbetreuung, Industriekletterer, Fensterreinigung. Direkter Kontakt mit dem Chef. Angebot in 24 Stunden.');
    }
  }, []);

  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Trust />
      <About />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
