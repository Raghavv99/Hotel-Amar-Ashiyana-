import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Phone, CalendarHeart } from "lucide-react";
import { Link } from "react-router-dom";

export function RestaurantHero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={ref} className="relative h-[85vh] flex items-center justify-center overflow-hidden bg-black pt-20">
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1974&auto=format&fit=crop')",
          }}
        ></div>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-[#030303]"></div>
      </motion.div>

      <div className="relative z-10 w-full px-4 max-w-5xl mx-auto flex flex-col items-center text-center mt-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        >
          <div className="flex items-center justify-center mb-6">
            <div className="w-8 h-[1px] bg-luxury-gold/50 mr-4"></div>
            <p className="text-[10px] md:text-xs uppercase tracking-[0.3em] font-semibold text-luxury-gold">Shikhar Restaurant</p>
            <div className="w-8 h-[1px] bg-luxury-gold/50 ml-4"></div>
          </div>
          
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-ivory mb-6 leading-[1.05] tracking-tight drop-shadow-2xl">
            An Extraordinary <br/><span className="text-luxury-gold italic">Dining Experience</span>
          </h1>
          
          <p className="text-ivory/80 text-sm md:text-base max-w-2xl mx-auto font-light leading-relaxed drop-shadow-md mb-12">
            Experience authentic flavors, premium hospitality, and unforgettable moments.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-6">
            <a href="#menu" className="w-full sm:w-auto px-8 py-4 bg-luxury-gold text-black flex items-center justify-center text-[10px] uppercase tracking-widest font-bold hover:bg-ivory hover:scale-105 transition-all duration-300">
               Explore Menu
            </a>
            <a href="#reservation" className="w-full sm:w-auto px-8 py-4 border border-luxury-gold text-luxury-gold flex items-center justify-center text-[10px] uppercase tracking-widest font-bold hover:bg-luxury-gold/10 transition-colors backdrop-blur-sm">
               <CalendarHeart size={16} className="mr-3" /> Reserve A Table
            </a>
            <a href="tel:07520957011" className="w-full sm:w-auto px-8 py-4 border border-ivory/20 text-ivory flex items-center justify-center text-[10px] uppercase tracking-widest font-bold hover:bg-ivory/5 transition-colors backdrop-blur-sm">
               <Phone size={16} className="mr-3" /> Call Us
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-luxury-gold"
      >
        <span className="text-[9px] uppercase tracking-[0.3em] mb-4">Scroll to Discover</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-gradient-to-b from-luxury-gold to-transparent"
        ></motion.div>
      </motion.div>
    </section>
  );
}
