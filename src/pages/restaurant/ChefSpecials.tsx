import { motion } from "motion/react";
import { Award } from "lucide-react";

export function ChefSpecials() {
  const specials = [
    {
      name: "Tandoori Platter",
      desc: "An exquisite assortment of paneer, mushrooms, and mixed vegetables marinated in traditional spices and roasted to perfection in our clay oven.",
      image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=800&auto=format&fit=crop"
    },
    {
      name: "Dal Makhani Signature",
      desc: "Our pride. Slow-simmered black lentils finished with fresh cream and butter, offering a melt-in-your-mouth texture.",
      image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&auto=format&fit=crop"
    },
    {
      name: "Special Veg Thali",
      desc: "A royal feast on a single platter. Experience the diverse flavors of North India with an array of curries, bread, rice, and dessert.",
      image: "https://images.unsplash.com/photo-1626776876729-abfb87ef05dd?w=800&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-24 bg-[#030303] text-ivory border-t border-luxury-gold/5 relative">
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-luxury-gold/5 blur-[150px] -translate-y-1/2 rounded-full pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto px-4 relative z-10">
        
        <div className="text-center mb-20">
          <Award size={32} strokeWidth={1} className="mx-auto text-luxury-gold mb-6" />
          <h2 className="font-serif text-4xl md:text-5xl text-ivory mb-6">Chef's <span className="text-luxury-gold italic">Specials</span></h2>
          <p className="text-ivory/60 font-light max-w-xl mx-auto text-sm">Curated masterpieces that define our culinary identity, crafted with passion and precision.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
           {specials.map((special, idx) => (
              <motion.div
                 key={idx}
                 initial={{ opacity: 0, y: 40 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true, margin: "-100px" }}
                 transition={{ duration: 0.8, delay: idx * 0.2 }}
                 className="group"
              >
                 <div className="relative aspect-[4/5] overflow-hidden mb-8 border border-ivory/10">
                    <img referrerPolicy="no-referrer" 
                       src={special.image} 
                       alt={special.name} 
                       className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
                 </div>
                 <div className="text-center px-4">
                    <h3 className="font-serif text-2xl text-luxury-gold mb-4 group-hover:text-ivory transition-colors duration-500">{special.name}</h3>
                    <p className="text-sm font-light text-ivory/70 leading-relaxed">{special.desc}</p>
                 </div>
              </motion.div>
           ))}
        </div>

      </div>
    </section>
  );
}
