import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function Rooms() {
  const rooms = [
    {
      title: "Deluxe Room",
      image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2070&auto=format&fit=crop",
      desc: "An intimate sanctuary of modern elegance. Designed with subtle golden tones and plush furnishings, offering a serene escape.",
      price: "₹2,500/night",
      size: "35 M2",
      beds: "1 KING BED",
      baths: "1 BATHROOM"
    },
    {
      title: "Premium Room",
      image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1974&auto=format&fit=crop",
      desc: "Expansive luxury bathed in natural light. Featuring a grand bed, bespoke artwork, and a lavish soaking tub for ultimate relaxation.",
      price: "₹3,500/night",
      size: "45 M2",
      beds: "1 KING BED",
      baths: "1 BATHROOM"
    },
    {
      title: "Family Suite",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop",
      desc: "A sprawling residence offering unparalleled privacy and grandeur. Accommodates with separate living quarters and majestic views.",
      price: "₹5,000/night",
      size: "65 M2",
      beds: "2 BEDS",
      baths: "2 BATHROOMS"
    }
  ];

  return (
    <section id="rooms" className="py-24 bg-black text-ivory border-t border-luxury-gold/5 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
             <div className="flex items-center mb-4">
               <div className="w-12 h-[1px] bg-luxury-gold/50 mr-4"></div>
               <p className="text-[10px] uppercase tracking-widest text-ivory/60 italic font-serif">Accomodation</p>
             </div>
             <h2 className="font-serif text-5xl text-ivory">Royal <span className="text-luxury-gold italic">Residences</span></h2>
          </div>
          <div className="mt-6 md:mt-0">
             <Link to="/rooms" className="inline-flex items-center px-8 py-3 text-[10px] uppercase tracking-widest border border-ivory/20 hover:border-luxury-gold transition-colors text-ivory hover:text-luxury-gold">
               VIEW ALL ROOMS
             </Link>
          </div>
        </div>

        {/* Horizontal scroll container on mobile, grid on desktop if they fit, but let's do a flex horizontal scroll with hide-scrollbar */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-8 pb-12 -mx-4 px-4 md:mx-0 md:px-0 hide-scrollbar">
          {rooms.map((room, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group flex flex-col flex-none w-[85vw] md:w-[60vw] lg:w-[400px] xl:w-[450px] snap-center"
            >
              <div className="relative h-80 md:h-96 w-full overflow-hidden mb-6 border border-ivory/10">
                <div className="absolute inset-0 bg-black/40 z-10 group-hover:bg-transparent transition-colors duration-700 pointer-events-none"></div>
                <img referrerPolicy="no-referrer" 
                  src={room.image} 
                  alt={room.title} 
                  className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
                />
                 {/* Price overlay */}
                <div className="absolute bottom-6 left-6 z-20">
                  <p className="text-[9px] uppercase tracking-[0.2em] font-bold bg-black/80 backdrop-blur-md text-luxury-gold px-4 py-2 border border-luxury-gold/30 shadow-[0_0_15px_rgba(212,175,55,0.2)]">
                    {room.price}
                  </p>
                </div>
              </div>
              
              <h3 className="font-serif text-3xl mb-4 text-ivory group-hover:text-luxury-gold transition-colors">{room.title}</h3>
              
              {/* Specs Array */}
              <div className="flex items-center space-x-3 text-[9px] uppercase tracking-widest text-ivory/60 mb-6 border-b border-ivory/10 pb-6 w-full">
                <span>{room.size}</span>
                <span className="w-[1px] h-3 bg-ivory/20"></span>
                <span>{room.beds}</span>
                <span className="w-[1px] h-3 bg-ivory/20"></span>
                <span>{room.baths}</span>
              </div>
              
              <p className="text-ivory/60 text-sm leading-relaxed font-light mb-8 pt-2">
                {room.desc}
              </p>
              
              <div className="mt-auto pt-2">
                <Link to="/rooms" className="inline-flex items-center text-[10px] uppercase tracking-[0.2em] font-semibold text-luxury-gold hover:text-ivory transition-colors group/btn">
                  EXPLORE SUITE
                  <ArrowRight strokeWidth={1} size={16} className="ml-4 transform group-hover/btn:translate-x-2 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
