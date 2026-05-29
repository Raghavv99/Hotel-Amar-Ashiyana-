import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export function ExperienceDifference() {
  return (
    <section className="py-0 bg-black border-t border-luxury-gold/5">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-0 group">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
             className="w-full lg:w-1/2 relative h-[60vh] md:h-[80vh] overflow-hidden"
          >
            <div className="absolute inset-0 bg-black/40 z-10 group-hover:bg-black/60 transition-colors duration-700 hover:!bg-black/20"></div>
            <img referrerPolicy="no-referrer" 
              src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop" 
              alt="Luxury Room" 
              className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-[3s] group-hover:scale-[1.03]"
            />
            <div className="absolute inset-x-0 bottom-0 p-12 md:p-20 z-20 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none">
               <h3 className="font-serif text-5xl text-ivory mb-6 pointer-events-auto">Royal <span className="text-luxury-gold italic">Residences</span></h3>
               <p className="text-ivory/80 max-w-md text-sm md:text-base font-light mb-10 leading-relaxed pointer-events-auto">Each suite is an intimate sanctuary of modern elegance, designed with subtle golden tones and plush furnishings, offering a serene escape imbued with absolute comfort.</p>
               <Link to="/rooms" className="pointer-events-auto inline-flex items-center text-[10px] md:text-xs uppercase font-bold tracking-[0.2em] text-luxury-gold hover:text-ivory transition-colors group/btn">
                 Discover Rooms
                 <ArrowRight strokeWidth={1} size={16} className="ml-4 transform group-hover/btn:translate-x-2 transition-transform" />
               </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
             className="w-full lg:w-1/2 relative h-[60vh] md:h-[80vh] overflow-hidden"
          >
            <div className="absolute inset-0 bg-black/40 z-10 group-hover:bg-black/60 transition-colors duration-700 hover:!bg-black/20"></div>
            <img 
              src="https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2070&auto=format&fit=crop" 
              alt="Fine Dining" 
              className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-[3s] group-hover:scale-[1.03] filter sepia-[10%]"
            />
            <div className="absolute inset-x-0 bottom-0 p-12 md:p-20 z-20 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none">
               <h3 className="font-serif text-5xl text-ivory mb-6 pointer-events-auto">Shikhar <span className="text-luxury-gold italic">Restaurant</span></h3>
               <p className="text-ivory/80 max-w-md text-sm md:text-base font-light mb-10 leading-relaxed pointer-events-auto">A gastronomic haven where culinary artistry meets exceptional dining experiences. We blend authentic traditional flavors with modern presentation, leaving you with unforgettable memories.</p>
               <Link to="/restaurant" className="pointer-events-auto inline-flex items-center text-[10px] md:text-xs uppercase font-bold tracking-[0.2em] text-luxury-gold hover:text-ivory transition-colors group/btn">
                 Explore Dining
                 <ArrowRight strokeWidth={1} size={16} className="ml-4 transform group-hover/btn:translate-x-2 transition-transform" />
               </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
