import { motion } from "motion/react";
import { Phone, CalendarCheck } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useAuth } from "../contexts/AuthContext";

export function FinalCTA() {
  const { requireAuth } = useAuth();

  const handleBookOnline = () => {
    requireAuth(() => {
      alert("Redirecting to comprehensive booking system...");
    });
  };

  return (
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img referrerPolicy="no-referrer" 
          src="https://images.unsplash.com/photo-1542314831-c6a4d14fff88?q=80&w=2070&auto=format&fit=crop" 
          alt="Royal Comfort" 
          className="w-full h-full object-cover filter contrast-[1.1] brightness-75 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30"></div>
        <div className="absolute inset-0 bg-burgundy/10 mix-blend-multiply"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center pb-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <div className="flex items-center justify-center mb-8">
            <div className="w-12 h-[1px] bg-luxury-gold mr-4"></div>
            <p className="text-luxury-gold uppercase tracking-[0.3em] text-[10px] md:text-sm font-semibold">Your Journey Begins</p>
            <div className="w-12 h-[1px] bg-luxury-gold ml-4"></div>
          </div>
          
          <h2 className="font-serif text-5xl md:text-7xl text-ivory mb-8 leading-[1.1]">
            Book Your <span className="italic text-luxury-gold">Royal Experience</span><br/> Today
          </h2>
          
          <p className="text-ivory/80 text-sm md:text-lg font-light max-w-2xl mx-auto mb-12">
            Escape to unparalleled luxury and create timeless memories. Our dedicated team awaits to curate your perfect stay at Hotel Amar Ashiyana.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={handleBookOnline}
              className="flex items-center justify-center px-8 py-4 bg-luxury-gold text-black text-[10px] uppercase tracking-widest font-bold hover:bg-ivory transition-all duration-300 transform hover:scale-105"
            >
              <CalendarCheck size={16} className="mr-3" />
              Book Online
            </button>
            <a 
              href="tel:07520957011"
              className="flex items-center justify-center px-8 py-4 border border-luxury-gold backdrop-blur-md text-luxury-gold text-[10px] uppercase tracking-widest font-bold hover:bg-luxury-gold/10 transition-all duration-300"
            >
              <Phone size={14} className="mr-3" />
              Call To Book
            </a>
            <a 
              href="https://wa.me/9107520957011"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-8 py-4 bg-[#25D366] text-white text-[10px] uppercase tracking-widest font-bold hover:bg-[#1ebe57] transition-all duration-300"
            >
              <span className="mr-3"><FaWhatsapp size={16} /></span>
              WhatsApp Use
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
