import { motion } from "motion/react";

export function Gallery() {
  const images = [
    { src: "https://images.unsplash.com/photo-1542314831-c6a4d14fff88", alt: "Exterior" },
    { src: "https://images.unsplash.com/photo-1590490359854-df253b207567", alt: "Interior" },
  ];

  return (
    <section id="gallery" className="py-24 bg-[#0a0c10] text-ivory">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-[10px] uppercase tracking-widest text-ivory/60 italic mb-2">Gallery</p>
          <h2 className="font-serif text-5xl text-luxury-gold">Our Gallery</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {images.map((img, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: index * 0.2 }}
              className="relative group overflow-hidden h-[400px] w-full"
            >
              <div className="absolute inset-0 bg-[#0a0c10]/20 z-10 group-hover:bg-transparent transition-colors duration-700 pointer-events-none border border-ivory/10"></div>
              <img referrerPolicy="no-referrer" 
                src={`${img.src}?q=80&w=1200&auto=format&fit=crop`} 
                alt={img.alt} 
                className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-105"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
