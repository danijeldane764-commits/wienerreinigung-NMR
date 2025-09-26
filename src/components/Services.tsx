import { Button } from "@/components/ui/button";
import TargetAudienceCards from "./TargetAudienceCards";

const Services = () => {
  return (
    <section className="py-[6vh] bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-[1200px] mx-auto text-center">
          {/* Headline */}
          <h2 className="font-poppins font-bold text-[#0A2342] text-4xl md:text-5xl lg:text-6xl mb-6">
            Unsere Leistungen - Sauberkeit mit Fixpreis & Handschlagqualität
          </h2>
          
          {/* Teaser Text */}
          <p className="font-roboto text-[#333333] text-lg md:text-xl max-w-[800px] mx-auto mb-12">
            Ob Stiegenhaus, Garten oder Fenster in Höhe - wir kümmern uns zuverlässig um alles, was Ihr Gebäude braucht.
          </p>
          
          {/* Services Grid - Modern Card Layout */}
          <TargetAudienceCards />
        </div>
      </div>
    </section>
  );
};

export default Services;