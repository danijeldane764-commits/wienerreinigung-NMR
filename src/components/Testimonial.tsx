import { Quote } from "lucide-react";

const Testimonial = () => {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-h2 text-foreground mb-12">
            Was Kunden über mich sagen
          </h2>
          
          {/* Testimonial Card */}
          <div 
            className="relative bg-slate-50 rounded-lg p-8 md:p-12 max-w-3xl mx-auto mb-8"
            style={{ backgroundColor: '#F5F9FC' }}
          >
            {/* Quote Icon */}
            <Quote 
              className="absolute top-4 left-4 text-primary/30" 
              size={32}
            />
            
            <div className="flex flex-col md:flex-row items-center gap-6">
              {/* Avatar */}
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center border-2 border-primary/20">
                  <span className="text-2xl font-bold text-primary">P</span>
                </div>
              </div>
              
              {/* Testimonial Content */}
              <div className="flex-1 text-left md:text-left">
                <blockquote className="text-body-large text-foreground mb-4 italic">
                  "Seit Nikola da ist, ruft keiner mehr an zum Schimpfen. Endlich jemand, der versteht, was saubere Stiegenhäuser bedeuten. Fixpreis, pünktlich, und die Mieter sind zufrieden."
                </blockquote>
                
                <div className="text-body text-muted-foreground">
                  Hausverwalterin
                </div>
              </div>
            </div>
          </div>
          
          {/* Additional Mini Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            
            <div 
              className="bg-slate-50 rounded-lg p-6"
              style={{ backgroundColor: '#F0F4F8' }}
            >
              <p className="text-body text-foreground mb-3 italic">
                "Baustellenreinigung perfekt. Kein Staub, keine Schlieren. Übergabe problemlos."
              </p>
              <div className="text-small text-muted-foreground">
                Bauleiterin
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;