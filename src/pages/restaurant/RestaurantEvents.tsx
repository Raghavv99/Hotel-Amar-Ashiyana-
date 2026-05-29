import { motion } from "motion/react";
import { GlassWater } from "lucide-react";

export function RestaurantEvents() {
  return (
    <section className="py-24 bg-black border-b border-ivory/5 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4">
        
        <div className="flex flex-col lg:flex-row items-center gap-16">
           <div className="w-full lg:w-1/2">
              <motion.div
                 initial={{ opacity: 0, scale: 0.95 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.8 }}
                 className="relative aspect-square md:aspect-[4/3] overflow-hidden"
              >
                 <img referrerPolicy="no-referrer" src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop" alt="Events dining table" className="w-full h-full object-cover" />
                 <div className="absolute inset-0 bg-black/30"></div>
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-ivory">
                    <GlassWater size={48} className="mx-auto text-luxury-gold mb-4" />
                 </div>
              </motion.div>
           </div>
           
           <div className="w-full lg:w-1/2">
              <motion.div
                 initial={{ opacity: 0, x: 30 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.8 }}
              >
                  <p className="text-[10px] uppercase tracking-widest text-luxury-gold mb-4 font-semibold">Celebrate With Us</p>
                  <h2 className="font-serif text-4xl md:text-5xl text-ivory mb-6">Events & <span className="text-luxury-gold italic">Gatherings</span></h2>
                  
                  <p className="text-sm font-light text-ivory/60 mb-8 leading-relaxed">
                     From intimate birthday dinners to grand corporate gatherings, our dedicated team ensures your special occasions are celebrated with impeccable flavor and style.
                  </p>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                     {["Birthday Parties", "Corporate Lunches", "Anniversary Dinners", "Family Gatherings", "Kitty Parties", "Small Celebrations"].map((event, i) => (
                        <li key={i} className="flex items-center text-sm text-ivory/80 font-light before:content-[''] before:w-1.5 before:h-1.5 before:bg-luxury-gold before:mr-3 before:rounded-full">
                           {event}
                        </li>
                     ))}
                  </ul>

                  <a href="/contact" className="inline-flex items-center px-8 py-4 bg-transparent border border-luxury-gold text-luxury-gold text-[10px] uppercase tracking-widest font-bold hover:bg-luxury-gold hover:text-black transition-colors">
                     Inquire for Events
                  </a>
              </motion.div>
           </div>
        </div>

      </div>
    </section>
  );
}
