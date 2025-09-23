import { Phone, Clock, Check } from "lucide-react";

const CallbackInfoBox = () => {
  return (
    <section className="py-8">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <div className="relative bg-[hsl(var(--whatsapp-green))] text-white p-8 rounded-2xl shadow-lg overflow-hidden">
            {/* Background checkmark */}
            <div className="absolute top-4 right-4 opacity-20">
              <Check className="w-16 h-16" />
            </div>
            
            {/* Content */}
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-full">
                  <div className="relative">
                    <Phone className="w-6 h-6" />
                    <Clock className="w-3 h-3 absolute -top-1 -right-1 bg-white text-[hsl(var(--whatsapp-green))] rounded-full p-0.5" />
                  </div>
                </div>
                <h3 className="text-h3 font-bold">
                  Dein Rückruf kommt fix
                </h3>
              </div>
              
              <p className="text-body-large opacity-95">
                Ich ruf dich selbst zurück – und nicht irgendwann, sondern spätestens morgen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallbackInfoBox;