import { Phone, Check } from "lucide-react";

const CallbackInfoBox = () => {
  return (
    <section className="py-8">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <div className="relative bg-[#25D366] text-white px-[30px] py-[20px] rounded-[10px] shadow-lg overflow-hidden">
            {/* Background checkmark */}
            <div className="absolute top-4 right-4 opacity-70">
              <Check className="w-8 h-8 text-white" />
            </div>
            
            {/* Content */}
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-[36px] h-[36px] bg-[#1DA851] rounded-full">
                  <Phone className="w-[18px] h-[18px] text-white" />
                </div>
                <h3 className="font-poppins font-bold text-white text-2xl leading-tight">
                  Immer erreichbar - notfalls Rückruf bis morgen
                </h3>
              </div>
              
              <p className="font-roboto text-white text-lg leading-[140%] opacity-100">
                Ich geh ans Telefon - und falls ich gerade im Einsatz bin, ruf ich dich spätestens morgen persönlich zurück.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallbackInfoBox;