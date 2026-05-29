import { motion } from "motion/react";

export function Restaurant() {
  return (
    <section id="restaurant" className="py-32 bg-royal-black text-ivory relative border-t border-luxury-gold/5">
      <div className="max-w-[90%] mx-auto relative z-10">
        <div className="flex flex-col md:flex-row gap-16 md:gap-8 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="w-full md:w-1/2 flex flex-col space-y-8"
          >
             <h4 className="text-luxury-gold uppercase tracking-[0.3em] text-[10px] md:text-xs">
              Exceptional Dining
            </h4>
            <h2 className="font-serif text-5xl md:text-7xl leading-tight">
              Shikhar <br/><span className="text-burgundy italic">Restaurant</span>
            </h2>
            <p className="text-ivory/60 max-w-md font-light leading-relaxed">
              A culinary journey through the royal kitchens of India. Experience the richness of our legendary North Indian Thali, crafted with heirloom spices and served in an atmosphere of shadowed luxury.
            </p>

            <div className="space-y-6 pt-4 border-l border-luxury-gold/20 pl-6">
              {[
                "Royal Indian Thali",
                "Awadhi & Mughlai Cuisine",
                "Artisan Signature Beverages"
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col">
                  <h5 className="font-serif text-xl md:text-2xl text-ivory group-hover:text-luxury-gold transition-colors">{item}</h5>
                </div>
              ))}
            </div>

            <div className="pt-8">
              <a href="tel:07520957011" className="btn-outline-gold px-8 py-3 uppercase text-[10px] tracking-widest inline-block">
                Reserve A Table
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="w-full md:w-1/2 h-[600px] relative group overflow-hidden"
          >
            <div className="absolute inset-0 bg-royal-black/30 z-10 group-hover:bg-transparent transition-colors duration-1000"></div>
            <img referrerPolicy="no-referrer" 
              src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2080&auto=format&fit=crop" 
              alt="Shikhar Restaurant Thali" 
              className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
