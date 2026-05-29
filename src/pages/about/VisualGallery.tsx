import { motion } from "motion/react";

export function VisualGallery() {
  const images = [
    { src: "https://images.unsplash.com/photo-1590490359854-df253b207567?q=80&w=1974&auto=format&fit=crop", style: "col-span-12 md:col-span-8 h-[40vh] md:h-[60vh]" },
    { src: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2070&auto=format&fit=crop", style: "col-span-12 md:col-span-4 h-[40vh] md:h-[60vh]" },
    { src: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=2070&auto=format&fit=crop", style: "col-span-12 md:col-span-4 h-[40vh] md:h-[60vh]" },
    { src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop", style: "col-span-12 md:col-span-8 h-[40vh] md:h-[60vh]" },
  ];

  return (
    <section className="py-32 bg-black text-ivory border-t border-luxury-gold/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-black/90"></div>
      
      <div className="max-w-[1400px] mx-auto px-4 relative z-10">
        
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="flex items-center justify-center mb-6">
              <div className="w-8 h-[1px] bg-luxury-gold/50 mr-4"></div>
              <p className="text-[10px] uppercase tracking-widest text-luxury-gold">The Atmosphere</p>
              <div className="w-8 h-[1px] bg-luxury-gold/50 ml-4"></div>
            </div>
            
            <h2 className="font-serif text-5xl md:text-7xl text-ivory mb-6">A Visual <span className="text-luxury-gold italic">Journey</span></h2>
            <p className="text-ivory/60 font-light max-w-xl mx-auto text-sm md:text-base">
              A glimpse into the elegance, comfort, and culinary excellence that awaits you at Hotel Amar Ashiyana. Every corner is designed to inspire.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-12 gap-4 md:gap-6">
          {images.map((img, index) => (
             <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.2, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className={`relative overflow-hidden group border border-ivory/10 ${img.style}`}
             >
                <div className="absolute inset-0 bg-black/40 z-10 group-hover:bg-transparent transition-colors duration-1000 pointer-events-none"></div>
                <img referrerPolicy="no-referrer" 
                  src={img.src} 
                  alt="Gallery image" 
                  className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-105"
                />
             </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
