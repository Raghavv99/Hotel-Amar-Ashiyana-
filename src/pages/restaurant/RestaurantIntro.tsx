import { motion } from "motion/react";
import { Utensils, Leaf, HeartHandshake, ChefHat } from "lucide-react";

export function RestaurantIntro() {
  const highlights = [
    { icon: <ChefHat size={24} />, title: "Master Chefs", text: "Expert culinary team" },
    { icon: <Leaf size={24} />, title: "Fresh Ingredients", text: "Locally sourced produce" },
    { icon: <HeartHandshake size={24} />, title: "Premium Service", text: "Unmatched hospitality" },
    { icon: <Utensils size={24} />, title: "Authentic Flavors", text: "Traditional recipes" }
  ];

  return (
    <section className="py-24 bg-[#030303] text-ivory relative border-b border-ivory/5">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-luxury-gold/5 blur-[150px] pointer-events-none rounded-full transform translate-x-1/3 -translate-y-1/3"></div>

      <div className="max-w-[1400px] mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="w-full lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative aspect-[3/4] md:aspect-[4/5] overflow-hidden"
            >
              <img referrerPolicy="no-referrer" 
                src="https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2070&auto=format&fit=crop" 
                alt="Chef preparing food" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            </motion.div>
            
            <motion.div 
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8, delay: 0.5 }}
               className="absolute -bottom-8 -right-8 w-48 h-48 sm:w-64 sm:h-64 border-[12px] border-[#030303] overflow-hidden hidden md:block"
            >
               <img referrerPolicy="no-referrer" 
                 src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974&auto=format&fit=crop" 
                 alt="Restaurant ambiance" 
                 className="w-full h-full object-cover"
               />
            </motion.div>
          </div>

          <div className="w-full lg:w-1/2 lg:pl-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-[10px] uppercase tracking-widest text-luxury-gold mb-6 font-semibold border-b border-luxury-gold/30 pb-2 inline-block">The Philosophy</p>
              <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-ivory mb-8 leading-[1.1]">Where Tradition Meets <span className="text-luxury-gold italic">Elegance</span></h2>
              
              <div className="space-y-6 text-ivory/70 font-light text-sm md:text-base leading-relaxed mb-12">
                <p>
                  At Shikhar Restaurant, dining is not just about eating; it is a meticulously crafted experience. We bring together the rich culinary heritage of India and present it with modern elegance.
                </p>
                <p>
                  Every spice is hand-selected, every ingredient is fresh, and every dish is prepared with an uncompromising dedication to flavor. Whether you are savoring our signature Dal Makhani or enjoying our diverse Tandoori collection, you are tasting a legacy of perfection.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                 {highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start">
                       <div className="text-luxury-gold mr-4 mt-1 bg-luxury-gold/5 p-2 rounded-sm border border-luxury-gold/10">{item.icon}</div>
                       <div>
                          <h4 className="font-serif text-lg text-ivory mb-1">{item.title}</h4>
                          <p className="text-xs text-ivory/50 font-light">{item.text}</p>
                       </div>
                    </div>
                 ))}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
