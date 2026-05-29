import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

export function ContactHero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={ref} className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-black pt-20">
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1542314831-c6a4d14fff88?q=80&w=2070&auto=format&fit=crop')", // Use a nice hotel exterior or lobby here
          }}
        ></div>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/30 to-black"></div>
      </motion.div>

      <div className="relative z-10 w-full px-4 max-w-5xl mx-auto flex flex-col items-center text-center mt-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        >
          <div className="flex items-center justify-center mb-6">
            <div className="w-8 h-[1px] bg-luxury-gold/50 mr-4"></div>
            <p className="text-[10px] md:text-xs uppercase tracking-[0.3em] font-semibold text-luxury-gold">Reach Out</p>
            <div className="w-8 h-[1px] bg-luxury-gold/50 ml-4"></div>
          </div>
          
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-ivory mb-6 leading-[1.05] tracking-tight drop-shadow-2xl">
            Let's Create Your <br/><span className="text-luxury-gold italic">Perfect Stay</span>
          </h1>
          
          <p className="text-ivory/80 text-sm md:text-base max-w-2xl mx-auto font-light leading-relaxed drop-shadow-md mb-12">
            Our hospitality team is ready to assist you with reservations, dining inquiries, events, and personalized guest experiences.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-6">
            <a href="tel:07520957011" className="w-full sm:w-auto px-8 py-4 bg-luxury-gold text-black flex items-center justify-center text-[10px] uppercase tracking-widest font-bold hover:bg-ivory hover:scale-105 transition-all duration-300">
               <Phone size={16} className="mr-3" /> Call Now
            </a>
            <a href="https://wa.me/9107520957011" target="_blank" rel="noreferrer" className="w-full sm:w-auto px-8 py-4 bg-[#25D366] text-white flex items-center justify-center text-[10px] uppercase tracking-widest font-bold hover:bg-[#1ebe57] hover:scale-105 transition-all duration-300">
               <span className="mr-3 flex items-center"><FaWhatsapp size={18} /></span> WhatsApp Us
            </a>
            <Link to="/rooms" className="w-full sm:w-auto px-8 py-4 border border-luxury-gold text-luxury-gold flex items-center justify-center text-[10px] uppercase tracking-widest font-bold hover:bg-luxury-gold/10 transition-colors backdrop-blur-sm">
               Book A Room
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-luxury-gold"
      >
        <span className="text-[9px] uppercase tracking-[0.3em] mb-4">Scroll to Explore</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-gradient-to-b from-luxury-gold to-transparent"
        ></motion.div>
      </motion.div>
    </section>
  );
}
