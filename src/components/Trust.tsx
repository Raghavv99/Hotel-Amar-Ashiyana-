import { motion } from "motion/react";
import { Users, Building, Star } from "lucide-react";

export function Trust() {
  const stats = [
    { icon: <Users size={40} strokeWidth={1} />, value: "50k+", label: "Happy Guests" },
    { icon: <Building size={40} strokeWidth={1} />, value: "30+", label: "Luxury Rooms" },
    { icon: <Star size={40} strokeWidth={1} />, value: "100%", label: "Service Quality" },
  ];

  return (
    <section className="py-32 bg-black relative border-y border-luxury-gold/10 overflow-hidden">
      {/* Cinematic subtle background glow */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-burgundy/5 blur-[120px] rounded-full pointer-events-none z-0"></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <p className="text-[10px] uppercase tracking-widest text-ivory/60 italic mb-4 font-serif">Our Legacy</p>
            <h2 className="font-serif text-5xl md:text-6xl text-ivory mb-6">Why Guests <span className="text-luxury-gold italic">Love Us</span></h2>
            <div className="w-16 h-[1px] bg-luxury-gold/50 mx-auto"></div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="flex flex-col items-center group"
            >
              <div className="text-luxury-gold mb-6 opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">
                {stat.icon}
              </div>
              <h3 className="font-serif text-5xl md:text-6xl text-ivory mb-2 group-hover:text-luxury-gold transition-colors">{stat.value}</h3>
              <p className="text-ivory/60 text-xs uppercase tracking-[0.2em]">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
