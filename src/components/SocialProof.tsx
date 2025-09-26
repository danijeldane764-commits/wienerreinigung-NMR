import { Star } from "lucide-react";

const SocialProof = () => {
  const handleGoogleClick = () => {
    // Replace with actual Google Business Profile link
    window.open("https://www.google.com/maps/place/Nikola+Miloradovic+Reinigung", "_blank");
  };

  return (
    <section className="py-16 bg-[#F7F9FC]">
      <div className="container mx-auto px-6">
        <div className="max-w-[700px] mx-auto">
          {/* Review Card */}
          <div className="bg-white rounded-lg shadow-sm p-8 mb-6">
            {/* Header with Stars and Google Logo */}
            <div className="flex justify-between items-start mb-6">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="w-8 h-8 fill-[#FFD700] text-[#FFD700]" 
                  />
                ))}
              </div>
              <button 
                onClick={handleGoogleClick}
                className="opacity-70 hover:opacity-100 transition-opacity"
                aria-label="Auf Google öffnen"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" className="w-6 h-6">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
              </button>
            </div>

            {/* Review Content */}
            <div className="flex gap-4">
              {/* Avatar */}
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-[#6C63FF] rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-lg">H</span>
                </div>
              </div>

              {/* Review Text */}
              <div className="flex-1">
                <blockquote className="font-poppins text-[#333333] text-base md:text-lg leading-relaxed mb-4" style={{ lineHeight: '1.2' }}>
                  "Unsere bisherige Reinigungsfirma für Umreich's Anglerfachmarkt ist in Pension gegangen und wir sind sehr froh, dass wir die Firma Miloradovic gefunden haben.
                  Kompetente, umsichtige und sehr freundliche und eifrige Mitarbeiter, die zu unserer vollsten Zufriedenheit unseren Shop und die Büros auf Vordermann bringen.
                  Wir können diese Firma nur wärmstens empfehlen!"
                </blockquote>
                
                {/* Author Info */}
                <div className="text-sm text-[#666666]">
                  <div className="font-medium">Harald Umreich - Inhaber Umreich's Anglerfachmarkt</div>
                  <div className="text-xs mt-1">Google Rezension (5 Sterne, vor 1 Woche)</div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <button
              onClick={handleGoogleClick}
              className="inline-flex items-center px-6 py-3 border-2 border-[#0052CC] text-[#0052CC] bg-white rounded-lg hover:bg-[#0052CC] hover:text-white transition-colors duration-200 font-medium"
              style={{ borderRadius: '8px' }}
            >
              Alle Google Rezensionen ansehen
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;