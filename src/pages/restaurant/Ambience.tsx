import { motion } from "motion/react";

export function Ambience() {
  return (
    <section className="py-24 bg-black border-t border-ivory/5 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4">
        
        <div className="text-center mb-16">
          <p className="text-[10px] uppercase tracking-widest text-luxury-gold mb-4 font-semibold">The Atmosphere</p>
          <h2 className="font-serif text-4xl md:text-5xl text-ivory mb-6">Designed for <span className="text-luxury-gold italic">Comfort</span></h2>
          <p className="text-ivory/60 font-light max-w-2xl mx-auto text-sm">Whether it's an intimate dinner, a family gathering, or a corporate lunch, our space is designed to provide the perfect setting.</p>
        </div>

        <div className="flex flex-col lg:flex-row h-auto lg:h-[600px] gap-4">
           {/* Main Image */}
           <motion.div 
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="w-full lg:w-2/3 h-[400px] lg:h-full relative group overflow-hidden"
           >
              <img referrerPolicy="no-referrer" src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop" alt="Restaurant Interior" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                 <div>
                    <h3 className="font-serif text-2xl text-ivory mb-2">Main Dining Hall</h3>
                    <p className="text-xs font-light text-ivory/60 uppercase tracking-widest">Spacious & Elegant</p>
                 </div>
              </div>
           </motion.div>
           
           <div className="w-full lg:w-1/3 flex flex-col gap-4">
              {/* Image 2 */}
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="h-[300px] lg:h-1/2 relative group overflow-hidden"
              >
                 <img referrerPolicy="no-referrer" src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop" alt="Bar Area" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s]" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                    <div>
                        <h3 className="font-serif text-xl text-ivory mb-1">Private Dining</h3>
                        <p className="text-[10px] font-light text-ivory/60 uppercase tracking-widest">Intimate Gatherings</p>
                    </div>
                 </div>
              </motion.div>

              {/* Image 3 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="h-[300px] lg:h-1/2 relative group overflow-hidden"
              >
                 <img referrerPolicy="no-referrer" src="https://images.unsplash.com/photo-1536653154881-22941dc94cd2?q=80&w=2070&auto=format&fit=crop" alt="Family Seating" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s]" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                    <div>
                        <h3 className="font-serif text-xl text-ivory mb-1">Family Seating</h3>
                        <p className="text-[10px] font-light text-ivory/60 uppercase tracking-widest">Comfortable & Cozy</p>
                    </div>
                 </div>
              </motion.div>
           </div>
        </div>

      </div>
    </section>
  );
}
