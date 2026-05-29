import { motion } from "motion/react";

export function OurStory() {
  return (
    <section className="py-32 bg-black text-ivory border-t border-luxury-gold/5 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
          
          <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
             className="relative h-[60vh] md:h-[80vh] w-full group overflow-hidden border border-ivory/10"
           >
             <div className="absolute inset-0 bg-black/20 z-10 group-hover:bg-transparent transition-colors duration-1000"></div>
             <img referrerPolicy="no-referrer" 
               src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop" 
               alt="Hotel Amar Ashiyana Legacy" 
               className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-[2s] group-hover:scale-[1.03] filter group-hover:contrast-110 sepia-[10%]"
             />
             <div className="absolute bottom-10 left-10 z-20 bg-black/80 backdrop-blur-md p-8 border border-luxury-gold/30 shadow-[0_0_30px_rgba(212,175,55,0.1)]">
                <p className="font-serif text-5xl md:text-6xl text-luxury-gold mb-2">10+</p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-ivory/70">Years of<br/>Excellence</p>
             </div>
           </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="md:pr-12"
          >
            <div className="flex items-center mb-8">
              <div className="w-12 h-[1px] bg-luxury-gold/50 mr-4"></div>
              <h4 className="text-luxury-gold uppercase tracking-[0.3em] text-[10px] font-semibold">
                Our Story
              </h4>
            </div>

            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-ivory leading-[1.1] mb-8">
              A Legacy of <span className="italic text-luxury-gold">Comfort & Care</span>
            </h2>
            
            <p className="text-ivory/70 text-sm md:text-base font-light leading-relaxed mb-6">
              Hotel Amar Ashiyana was founded with a singular vision: to redefine luxury and comfort in Etawah. What began as a dream to provide world-class hospitality has blossomed into the city's most distinguished sanctuary for travelers and gourmets alike.
            </p>
            <p className="text-ivory/70 text-sm md:text-base font-light leading-relaxed mb-12">
              Every cornerstone of our hotel is built on the principles of warmth, elegance, and personalized attention. We don't just offer rooms; we curate experiences that resonate long after our guests depart.
            </p>

            <div className="flex border-l-2 border-luxury-gold pl-8 pb-4 relative">
                <div className="absolute top-0 left-0 -ml-[13px] bg-black text-luxury-gold">
                   <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-quote"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/></svg>
                </div>
                <p className="font-serif italic text-xl md:text-2xl text-ivory/90 leading-relaxed font-light">
                  "Our ultimate goal is to make every guest feel like royalty, wrapped in the warmth of home."
                </p>
            </div>
            <p className="text-[10px] uppercase tracking-widest text-luxury-gold mt-6 pl-8">Founding Principle</p>

          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
