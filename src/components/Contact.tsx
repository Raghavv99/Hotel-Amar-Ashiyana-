import { motion } from "motion/react";
import { Phone, Mail } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-32 bg-royal-black text-ivory relative border-t border-luxury-gold/5">
      <div className="max-w-[90%] lg:max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h4 className="text-luxury-gold uppercase tracking-[0.3em] text-[10px] md:text-xs mb-4">
            RSVP
          </h4>
          <h2 className="font-serif text-4xl md:text-6xl">Secure Your Stay</h2>
        </motion.div>

        <div className="glass-card p-8 md:p-16 relative overflow-hidden">
           {/* Subtle background glow */}
           <div className="absolute top-0 right-0 w-64 h-64 bg-luxury-gold/5 rounded-full blur-[100px] pointer-events-none"></div>
           
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
              
              <div className="space-y-12">
                <div>
                  <h3 className="font-serif text-3xl mb-4 italic text-luxury-gold">Concierge</h3>
                  <p className="text-ivory/60 font-light text-sm leading-relaxed max-w-sm">
                    Our team is dedicated to arranging your perfect stay. Contact us directly for immediate assistance.
                  </p>
                </div>
                
                <div className="space-y-6">
                  <a href="tel:07520957011" className="flex items-center text-ivory hover:text-luxury-gold transition-colors group">
                    <Phone size={20} strokeWidth={1} className="text-luxury-gold mr-6" />
                    <span className="text-lg tracking-wider">075209 57011</span>
                  </a>
                  <a href="mailto:booking@hotelamarashiyana.com" className="flex items-center text-ivory hover:text-luxury-gold transition-colors group">
                    <Mail size={20} strokeWidth={1} className="text-luxury-gold mr-6" />
                    <span className="text-sm font-light">booking@hotelamarashiyana.com</span>
                  </a>
                </div>

                <div className="pt-4">
                  <a href="https://wa.me/9107520957011" target="_blank" rel="noopener noreferrer" className="btn-outline-gold px-8 py-3 text-[10px] uppercase tracking-widest inline-block focus:outline-none">
                    WhatsApp Booking
                  </a>
                </div>
              </div>

              <div>
                <form className="space-y-8 flex flex-col h-full justify-between" onSubmit={(e) => e.preventDefault()}>
                  <div className="space-y-6">
                    <div className="relative">
                      <input type="text" id="name" className="w-full bg-transparent border-b border-ivory/20 py-3 text-ivory focus:outline-none focus:border-luxury-gold transition-colors peer placeholder-transparent" placeholder="Name" required />
                      <label htmlFor="name" className="absolute left-0 top-3 text-ivory/40 text-xs tracking-widest uppercase transition-all peer-focus:-top-4 peer-focus:text-[9px] peer-focus:text-luxury-gold peer-valid:-top-4 peer-valid:text-[9px] peer-valid:text-luxury-gold pointer-events-none">Full Name</label>
                    </div>

                    <div className="relative">
                      <input type="tel" id="phone" className="w-full bg-transparent border-b border-ivory/20 py-3 text-ivory focus:outline-none focus:border-luxury-gold transition-colors peer placeholder-transparent" placeholder="Phone" required />
                      <label htmlFor="phone" className="absolute left-0 top-3 text-ivory/40 text-xs tracking-widest uppercase transition-all peer-focus:-top-4 peer-focus:text-[9px] peer-focus:text-luxury-gold peer-valid:-top-4 peer-valid:text-[9px] peer-valid:text-luxury-gold pointer-events-none">Phone Number</label>
                    </div>

                    <div className="relative">
                      <input type="date" id="date" className="w-full bg-transparent border-b border-ivory/20 py-3 text-ivory focus:outline-none focus:border-luxury-gold transition-colors peer placeholder-transparent [&::-webkit-calendar-picker-indicator]:filter [&::-webkit-calendar-picker-indicator]:invert" required />
                      <label htmlFor="date" className="absolute left-0 -top-4 text-luxury-gold text-[9px] tracking-widest uppercase pointer-events-none">Expected Date</label>
                    </div>
                  </div>

                  <button className="btn-gold w-full py-4 text-[11px] uppercase tracking-[0.2em] font-medium mt-8">
                    Submit Request
                  </button>
                </form>
              </div>

           </div>
        </div>
      </div>
    </section>
  );
}
