import ServiceCards from "./ServiceCards";

const Services = () => {
  return (
    <section className="py-[6vh] bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-[1200px] mx-auto text-center">
          {/* Headline */}
          <h2 className="font-poppins font-bold text-[#0A2342] text-4xl md:text-5xl lg:text-6xl mb-6">
            Unsere Leistungen - Sauberkeit, die überzeugt
          </h2>
          
          {/* Teaser Text */}
          <p className="font-roboto text-[#333333] text-lg md:text-xl max-w-[800px] mx-auto mb-12">
            Von Stiegenhaus bis Winterdienst - wir bieten alle Reinigungsleistungen aus einer Hand.
          </p>
          
          {/* Services Grid - Modern Card Layout */}
          <ServiceCards />
        </div>
      </div>
    </section>
  );
};

export default Services;