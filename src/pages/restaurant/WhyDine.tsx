import { motion } from "motion/react";
import { LeafyGreen, ShieldCheck, ChefHat, Users, Clock, HeartHandshake } from "lucide-react";

export function WhyDine() {
  const reasons = [
    { icon: <LeafyGreen size={28} />, title: "Fresh Ingredients", desc: "Sourced daily for authentic taste." },
    { icon: <ShieldCheck size={28} />, title: "Hygienic Kitchen", desc: "Top-tier cleanliness standards." },
    { icon: <ChefHat size={28} />, title: "Master Chefs", desc: "Decades of culinary expertise." },
    { icon: <Users size={28} />, title: "Family Friendly", desc: "Perfect ambiance for loved ones." },
    { icon: <Clock size={28} />, title: "Fast Service", desc: "Prompt and courteous table service." },
    { icon: <HeartHandshake size={28} />, title: "Premium Hospitality", desc: "Treated like royalty every time." }
  ];

  return (
    <section className="py-24 bg-black border-b border-ivory/5">
      <div className="max-w-[1400px] mx-auto px-4 text-center">
        
        <p className="text-[10px] uppercase tracking-widest text-luxury-gold mb-4 font-semibold">Excellence in Service</p>
        <h2 className="font-serif text-4xl md:text-5xl text-ivory mb-16">Why Dine <span className="text-luxury-gold italic">With Us</span></h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8">
           {reasons.map((item, idx) => (
              <motion.div
                 key={idx}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.5, delay: idx * 0.1 }}
                 className="flex flex-col items-center group"
              >
                  <div className="w-16 h-16 rounded-full border border-ivory/10 flex items-center justify-center text-luxury-gold mb-6 group-hover:bg-luxury-gold group-hover:text-black group-hover:border-luxury-gold transition-all duration-300">
                     {item.icon}
                  </div>
                  <h3 className="font-serif text-xl text-ivory mb-3">{item.title}</h3>
                  <p className="text-sm font-light text-ivory/50">{item.desc}</p>
              </motion.div>
           ))}
        </div>

      </div>
    </section>
  );
}
