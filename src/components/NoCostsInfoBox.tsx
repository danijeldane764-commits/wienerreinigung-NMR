import { OctagonX, Plus } from "lucide-react";

const NoCostsInfoBox = () => {
  return (
    <section className="py-8">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <div className="relative bg-[hsl(var(--dark-blue))] text-white p-8 rounded-2xl shadow-lg overflow-hidden">
            {/* Guarantee stamp */}
            <div className="absolute top-4 right-4 bg-white/10 text-white px-3 py-1 rounded-full text-xs font-bold border border-white/20 rotate-12">
              Keine Extras
            </div>
            
            {/* Content */}
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-full">
                  <div className="relative">
                    <OctagonX className="w-6 h-6 text-red-500" />
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                      <Plus className="w-2 h-2 text-white transform rotate-45" />
                    </div>
                  </div>
                </div>
                <h3 className="text-h3 font-bold">
                  Nie wieder Sonderkosten
                </h3>
              </div>
              
              <p className="text-body-large opacity-95">
                Ich komm selbst vorbei, seh mir dein Objekt an - und sag dir ehrlich, was es kostet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NoCostsInfoBox;