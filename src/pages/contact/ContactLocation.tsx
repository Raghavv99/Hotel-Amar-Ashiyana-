import { motion } from "motion/react";
import { TrainTrack, BusFront, MapPin, Navigation } from "lucide-react";

export function ContactLocation() {
  return (
    <section className="py-24 bg-black border-t border-luxury-gold/5 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4">
        
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-ivory mb-6">Our <span className="text-luxury-gold italic">Location</span></h2>
          <p className="text-ivory/60 font-light max-w-xl mx-auto text-sm">Ideally situated in the heart of Etawah, providing seamless access to the city's key transit hubs and cultural landmarks.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 w-full h-[600px] bg-[#06080a] border border-ivory/10">
          
          {/* Map Viewer */}
          <div className="w-full lg:w-2/3 h-[300px] lg:h-full relative filter grayscale-[80%] hover:grayscale-0 transition-all duration-[2s]">
             <iframe
                src="https://maps.google.com/maps?q=Hotel%20Amar%20Ashiyana,%20V%20Mart,%20Mall%20Godam%20Road,%20Ashok%20Nagar,%20Swaroop%20Nagar,%20Etawah,%20Uttar%20Pradesh%20206001&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
             ></iframe>
             <div className="absolute top-4 left-4 z-10">
                <a href="https://maps.google.com/maps?q=Hotel%20Amar%20Ashiyana,%20V%20Mart,%20Mall%20Godam%20Road,%20Ashok%20Nagar,%20Swaroop%20Nagar,%20Etawah,%20Uttar%20Pradesh%20206001" target="_blank" rel="noreferrer" className="flex items-center px-4 py-3 bg-black/80 backdrop-blur-md text-ivory text-[10px] uppercase tracking-widest font-semibold border border-luxury-gold/30 hover:bg-luxury-gold hover:text-black transition-colors shadow-lg">
                   <Navigation size={14} className="mr-2" /> Get Directions
                </a>
             </div>
          </div>

          {/* Details Sidebar */}
          <div className="w-full lg:w-1/3 p-8 lg:p-12 flex flex-col justify-center">
             <div className="mb-10 text-ivory/80 font-light text-sm space-y-2">
                <p className="font-serif text-2xl text-ivory mb-4">Hotel Amar Ashiyana</p>
                <p>V Mart, Mall Godam Road,</p>
                <p>Ashok Nagar, Swaroop Nagar,</p>
                <p>Etawah, Uttar Pradesh 206001</p>
             </div>

             <div className="space-y-6">
                <h4 className="text-[10px] uppercase tracking-[0.2em] text-luxury-gold font-bold mb-4 border-b border-luxury-gold/30 pb-2">Proximity Guide</h4>
                
                <div className="flex items-center text-ivory">
                   <div className="w-10 h-10 bg-ivory/5 border border-ivory/10 flex items-center justify-center mr-4">
                      <TrainTrack size={18} className="text-luxury-gold" />
                   </div>
                   <div className="flex flex-col">
                      <span className="text-sm font-medium">Etawah Railway Station</span>
                      <span className="text-xs text-ivory/50">Approx. 5-10 minutes (2 km)</span>
                   </div>
                </div>

                <div className="flex items-center text-ivory">
                   <div className="w-10 h-10 bg-ivory/5 border border-ivory/10 flex items-center justify-center mr-4">
                      <BusFront size={18} className="text-luxury-gold" />
                   </div>
                   <div className="flex flex-col">
                      <span className="text-sm font-medium">Etawah Bus Stand</span>
                      <span className="text-xs text-ivory/50">Approx. 10 minutes (2.5 km)</span>
                   </div>
                </div>

                <div className="flex items-center text-ivory">
                   <div className="w-10 h-10 bg-ivory/5 border border-ivory/10 flex items-center justify-center mr-4">
                      <MapPin size={18} className="text-luxury-gold" />
                   </div>
                   <div className="flex flex-col">
                      <span className="text-sm font-medium">Lion Safari Etawah</span>
                      <span className="text-xs text-ivory/50">Approx. 15-20 minutes drive</span>
                   </div>
                </div>
             </div>
          </div>
        </div>

      </div>
    </section>
  );
}
