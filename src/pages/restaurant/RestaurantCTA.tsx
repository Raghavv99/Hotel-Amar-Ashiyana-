import { Phone, CalendarHeart } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export function RestaurantCTA() {
  return (
    <section className="relative py-32 bg-black border-t border-luxury-gold/20 overflow-hidden">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed opacity-30"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=2070&auto=format&fit=crop')" }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-[#030303]"></div>
      
      <div className="max-w-[1200px] mx-auto px-4 relative z-10 text-center">
        <h2 className="font-serif text-5xl md:text-6xl text-ivory mb-6">Reserve Your Table & <br/><span className="text-luxury-gold italic">Experience Exceptional Dining</span></h2>
        
        <p className="text-ivory/80 text-sm font-light max-w-xl mx-auto mb-12">
          Join us at Shikhar for an unforgettable culinary journey filled with premium flavors, exquisite ambiance, and unparalleled hospitality.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <a 
            href="#reservation" 
            className="w-full sm:w-auto flex items-center justify-center px-10 py-5 bg-luxury-gold text-black text-[10px] md:text-xs uppercase tracking-widest font-bold hover:bg-ivory hover:scale-105 transition-all duration-300"
          >
            <CalendarHeart size={16} className="mr-3" />
            Reserve Now
          </a>
          
          <a 
            href="https://wa.me/9107520957011" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center px-10 py-5 bg-[#25D366] text-white text-[10px] md:text-xs uppercase tracking-widest font-bold hover:bg-[#1ebe57] transition-all duration-300 shadow-[0_5px_20px_rgba(37,211,102,0.2)]"
          >
            <span className="mr-3"><FaWhatsapp size={18} /></span>
            WhatsApp Us
          </a>

          <a 
            href="tel:07520957011" 
            className="w-full sm:w-auto flex items-center justify-center px-10 py-5 border border-luxury-gold text-luxury-gold backdrop-blur-md text-[10px] md:text-xs uppercase tracking-widest font-bold hover:bg-luxury-gold/10 transition-all duration-300"
          >
            <Phone size={16} className="mr-3" />
            Call Restaurant
          </a>
        </div>
      </div>
    </section>
  );
}
