import { motion } from "motion/react";
import { Heart, Sparkles, ShieldCheck, Coffee } from "lucide-react";

export function OurPhilosophy() {
  const philosophies = [
    {
      icon: <Heart size={36} strokeWidth={1} />,
      title: "Heartfelt Hospitality",
      desc: "Every interaction is driven by a genuine desire to serve and delight, anticipating your needs before you express them."
    },
    {
      icon: <Sparkles size={36} strokeWidth={1} />,
      title: "Uncompromising Quality",
      desc: "From the thread count of our linens to the ingredients in Shikhar Restaurant, excellence is non-negotiable."
    },
    {
      icon: <ShieldCheck size={36} strokeWidth={1} />,
      title: "Absolute Comfort",
      desc: "We ensure an atmosphere of serenity and cleanliness, offering a flawless escape from the world outside."
    },
    {
      icon: <Coffee size={36} strokeWidth={1} />,
      title: "Culinary Mastery",
      desc: "Gastronomic journeys designed to be relished, blending authentic flavors with premium presentation in every dish."
    }
  ];

  return (
    <section className="py-32 bg-[#030303] text-ivory border-t border-luxury-gold/5 relative overflow-hidden">
      {/* Subtle cinematic glow */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-full bg-luxury-gold/5 blur-[120px] rounded-full pointer-events-none z-0"></div>
      
      <div className="max-w-[1400px] mx-auto px-4 relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <p className="text-[10px] uppercase tracking-widest text-luxury-gold mb-4 font-semibold">Values</p>
            <h2 className="font-serif text-5xl md:text-6xl text-ivory mb-8">Our <span className="text-luxury-gold italic">Philosophy</span></h2>
            <div className="w-16 h-[1px] bg-luxury-gold/30 mx-auto"></div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
           {philosophies.map((item, index) => (
             <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                className="group flex flex-col items-center text-center px-6 py-12 bg-black border border-ivory/5 hover:border-luxury-gold/30 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
             >
                <div className="absolute inset-0 bg-gradient-to-b from-luxury-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="text-luxury-gold mb-8 p-5 rounded-full bg-luxury-gold/5 group-hover:bg-luxury-gold/10 group-hover:scale-110 transition-all duration-500 relative z-10">
                  {item.icon}
                </div>
                
                <h3 className="font-serif text-2xl md:text-3xl text-ivory mb-4 relative z-10 group-hover:text-luxury-gold transition-colors">{item.title}</h3>
                <p className="text-ivory/60 text-sm font-light leading-relaxed relative z-10 group-hover:text-ivory/80 transition-colors">{item.desc}</p>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}
