import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { 
  ArrowUp, Mail, Phone, MapPin, CheckCircle, Clock, 
  ShieldCheck, Star, Utensils, Award, CalendarDays, ChevronRight, Heart
} from "lucide-react";
import { 
  FaWhatsapp, FaFacebookF, FaInstagram, 
  FaYoutube, FaTwitter, FaGoogle 
} from "react-icons/fa";
import { useState, useEffect } from "react";

export function Footer() {
  const [showFloating, setShowFloating] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowFloating(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="relative bg-[#0B0B0F] text-ivory overflow-hidden pt-12 md:pt-16 font-sans border-t border-luxury-gold/20 flex flex-col items-center">
        {/* Ambient Dark/Luxury Glows */}
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-luxury-gold/5 blur-[120px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-red-900/5 blur-[120px] rounded-full pointer-events-none translate-x-1/3 translate-y-1/3"></div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 flex flex-col border-b border-ivory/5">
          {/* MAIN FOOTER LAYOUT */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 pb-12 w-full">
             
             {/* Left Section - Hotel Branding */}
             <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <h2 className="font-serif italic text-3xl text-luxury-gold tracking-widest mb-2">Amar Ashiyana</h2>
                <h3 className="text-[11px] sm:text-xs uppercase tracking-[0.2em] text-ivory mb-5 font-bold">Hotel & Shikhar Restaurant</h3>
                <p className="text-sm leading-relaxed text-ivory/60 font-light italic md:border-l border-luxury-gold/30 md:pl-4 py-1">
                  "Where Comfort, Hospitality & Elegance Meet."
                </p>
             </div>

             {/* Center Section - Quick Links */}
             <div className="flex flex-col items-center">
                <h4 className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] font-bold text-luxury-gold mb-6 flex items-center">
                   Quick Links
                </h4>
                <ul className="flex flex-col items-center gap-3 text-center">
                  {[
                    { label: "Home", path: "/" },
                    { label: "About Us", path: "/about" },
                    { label: "Rooms & Suites", path: "/rooms" },
                    { label: "Restaurant", path: "/restaurant" },
                    { label: "Contact Us", path: "/contact" }
                  ].map((link, idx) => (
                    <li key={idx}>
                      <Link to={link.path} onClick={scrollToTop} className="group flex items-center justify-center text-sm text-ivory/60 hover:text-luxury-gold transition-colors">
                        <span className="w-1 h-1 rounded-full bg-luxury-gold opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all mr-2 absolute -ml-4"></span>
                        <span className="group-hover:translate-x-1 transition-transform">{link.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
             </div>

             {/* Right Section - Contact Information */}
             <div className="flex flex-col items-center md:items-end text-center md:text-right mt-4 md:mt-0">
                <h4 className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] font-bold text-luxury-gold mb-6 flex items-center">
                   Contact Information
                </h4>
                
                <div className="flex flex-col items-center md:items-end gap-5 text-sm text-ivory/60">
                   <div className="flex flex-col md:flex-row items-center gap-3 group hover:text-ivory transition-colors cursor-pointer">
                      <p className="order-2 md:order-1">V Mart, Mall Godam Road,<br/>Ashok Nagar, Swaroop Nagar,<br/>Etawah, Uttar Pradesh 206001</p>
                      <MapPin size={16} className="text-luxury-gold group-hover:scale-110 transition-transform order-1 md:order-2 shrink-0 hidden md:block" />
                   </div>
                   
                   <div className="flex flex-col md:flex-row items-center gap-3 group hover:text-ivory transition-colors cursor-pointer mt-1">
                      <p className="order-2 md:order-1">075209 57011</p>
                      <Phone size={16} className="text-luxury-gold group-hover:scale-110 transition-transform order-1 md:order-2 shrink-0 hidden md:block" />
                   </div>

                   <div className="flex items-center gap-3 mt-4">
                      <a href="tel:07520957011" className="px-5 py-2.5 border border-luxury-gold/50 text-luxury-gold text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-luxury-gold hover:text-black transition-all">
                        Call Now
                      </a>
                      <a href="https://wa.me/9107520957011" target="_blank" rel="noreferrer" className="px-5 py-2.5 bg-[#25D366]/10 border border-[#25D366]/50 text-[#25D366] text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-[#25D366] hover:text-black transition-all flex items-center gap-2">
                        <FaWhatsapp size={14} /> WhatsApp
                      </a>
                   </div>
                </div>
             </div>

          </div>
        </div>

        {/* Thin Luxury Divider Line */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-luxury-gold/30 to-transparent relative z-10 hidden md:block"></div>

        {/* BOTTOM FOOTER BAR */}
        <div className="bg-[#060608] border-t border-ivory/5 md:border-t-0 relative z-10 w-full py-5 md:py-6">
          <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
             <div className="text-[9px] sm:text-[10px] tracking-[0.1em] text-ivory/40 text-center md:text-left order-2 md:order-1">
               © {new Date().getFullYear()} Hotel Amar Ashiyana & Shikhar Restaurant. All Rights Reserved.
             </div>
             
             <div className="text-[10px] sm:text-[11px] tracking-[0.15em] font-serif italic text-luxury-gold text-center group cursor-pointer order-1 md:order-2">
               <span className="opacity-80 group-hover:opacity-100 group-hover:drop-shadow-[0_0_8px_rgba(200,162,74,0.6)] transition-all duration-500">Crafted & Designed with Excellence by Raghavv</span>
             </div>
             
             <div className="flex items-center justify-center gap-3 text-[9px] sm:text-[10px] tracking-[0.1em] text-ivory/40 order-3 md:order-3">
               <Link to="#" className="hover:text-ivory transition-colors">Privacy Policy</Link>
               <span className="text-luxury-gold/30">|</span>
               <Link to="#" className="hover:text-ivory transition-colors">Terms & Conditions</Link>
             </div>
          </div>
        </div>
      </footer>

      {/* FLOATING QUICK ACTIONS */}
      <AnimatePresence>
        {showFloating && (
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-6 right-6 lg:bottom-10 lg:right-10 z-[100] flex flex-col items-center gap-3"
          >
             <Link to="/rooms" onClick={scrollToTop} className="w-12 h-12 bg-black border border-luxury-gold text-luxury-gold rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(200,162,74,0.2)] hover:bg-luxury-gold hover:text-black transition-all duration-300 group relative">
               <CalendarDays size={18} />
               <span className="absolute right-14 bg-black/90 text-luxury-gold border border-luxury-gold px-3 py-1 text-[10px] uppercase tracking-widest rounded whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 group-hover:-translate-x-1 transition-all">Book Now</span>
             </Link>
             
             <a href="tel:07520957011" className="w-12 h-12 bg-ivory text-black rounded-full flex items-center justify-center shadow-[0_5px_20px_rgba(255,255,255,0.2)] hover:scale-110 transition-transform duration-300 group relative">
               <Phone size={18} />
               <span className="absolute right-14 bg-ivory/90 text-black px-3 py-1 text-[10px] uppercase tracking-widest rounded whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 group-hover:-translate-x-1 transition-all font-bold">Call Us</span>
             </a>

             <a href="https://wa.me/9107520957011" target="_blank" rel="noreferrer" className="w-12 h-12 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_5px_20px_rgba(37,211,102,0.3)] hover:scale-110 transition-transform duration-300 group relative">
               <FaWhatsapp size={22} />
               <span className="absolute right-14 bg-[#25D366] text-white px-3 py-1 text-[10px] uppercase tracking-widest rounded whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 group-hover:-translate-x-1 transition-all font-bold">WhatsApp</span>
             </a>

             <button onClick={scrollToTop} className="mt-2 w-10 h-10 bg-black/50 border border-ivory/20 text-ivory rounded-full flex items-center justify-center backdrop-blur-md hover:bg-luxury-gold hover:border-luxury-gold hover:text-black transition-all duration-300">
               <ArrowUp size={16} />
             </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
