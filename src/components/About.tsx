import { motion } from "motion/react";

export function About() {
  return (
    <section id="about" className="py-32 bg-black text-ivory relative border-t border-luxury-gold/5">
      <div className="max-w-6xl mx-auto px-4 z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center mb-8">
              <div className="w-12 h-[1px] bg-luxury-gold/50 mr-4"></div>
              <h4 className="text-luxury-gold uppercase tracking-[0.3em] text-[10px]">
                The Heritage
              </h4>
            </div>

            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-ivory leading-[1.2] mb-8">
              Step into <span className="italic text-luxury-gold">Royal Hospitality</span>
            </h2>
            
            <p className="text-ivory/60 text-sm md:text-base font-light leading-relaxed mb-6">
              Welcome to Hotel Amar Ashiyana, a sanctuary of elegance in the heart of Etawah. Crafted for unforgettable stays, we merge the grandeur of royal hospitality with the refined sophistication of modern luxury.
            </p>
            <p className="text-ivory/60 text-sm md:text-base font-light leading-relaxed mb-10">
              Every detail is meticulously designed. From our opulent rooms to the culinary masterpiece that is Shikhar Restaurant, we invite you to immerse yourself in an atmosphere of absolute premium comfort.
            </p>
            
            <div className="pt-4">
               <div className="font-serif italic text-4xl text-luxury-gold/70 opacity-80 tracking-widest pl-2">Raghavv</div>
               <p className="mt-2 text-[10px] uppercase tracking-widest text-luxury-gold/50">The Management</p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-[70vh] w-full group overflow-hidden border border-ivory/10"
          >
            <div className="absolute inset-0 bg-black/30 z-10 group-hover:bg-transparent transition-colors duration-1000"></div>
            <img referrerPolicy="no-referrer" 
              src="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2070&auto=format&fit=crop" 
              alt="Hotel Amar Ashiyana Lobby" 
              className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-[2s] group-hover:scale-105 filter group-hover:contrast-110"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
