import { motion } from "motion/react";
import { CheckCircle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export function WhatsAppBooking() {
  const features = [
    "Instant booking confirmation",
    "Direct chat with our concierge",
    "Special WhatsApp-only discounts",
    "Modify or cancel easily"
  ];

  return (
    <section className="py-24 bg-black border-t border-ivory/5 relative overflow-hidden">
      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 max-w-2xl h-full bg-[#1ebe57]/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto px-4 relative z-10">
        <div className="bg-[#06080a] border border-ivory/10 p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 rounded-sm relative overflow-hidden">
           
           {/* WhatsApp Icon Pattern Background */}
           <div className="absolute -right-20 -bottom-20 opacity-5 pointer-events-none">
              <FaWhatsapp size={400} />
           </div>

           <div className="w-full md:w-1/2">
             <motion.div
               initial={{ opacity: 0, scale: 0.8 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8, type: "spring" }}
               className="w-24 h-24 bg-[#25D366] rounded-full flex items-center justify-center mb-8 shadow-[0_0_50px_rgba(37,211,102,0.4)]"
             >
                <span className="text-white"><FaWhatsapp size={48} /></span>
             </motion.div>
             <h2 className="font-serif text-4xl md:text-5xl text-ivory mb-4">Book Instantly via <span className="text-[#25D366]">WhatsApp</span></h2>
             <p className="text-ivory/70 font-light text-sm leading-relaxed mb-8">Skip the forms and wait times. Connect directly with our front desk team for personalized booking assistance and exclusive direct-booking perks.</p>
           </div>
           
           <div className="w-full md:w-1/2 flex flex-col items-start md:pl-12 border-t md:border-t-0 md:border-l border-ivory/10 pt-12 md:pt-0">
             <h3 className="text-lg font-serif text-ivory mb-6">Why book on WhatsApp?</h3>
             <ul className="space-y-4 mb-10 w-full">
                {features.map((feature, idx) => (
                   <li key={idx} className="flex items-center text-sm font-light text-ivory/80">
                      <CheckCircle size={16} className="text-[#25D366] mr-4 flex-shrink-0" />
                      {feature}
                   </li>
                ))}
             </ul>
             
             <a href="https://wa.me/9107520957011?text=Hello! I would like to inquire about booking a room." target="_blank" rel="noreferrer" className="w-full md:w-auto px-10 py-5 bg-[#25D366] text-white flex items-center justify-center text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-[#1ebe57] hover:-translate-y-1 transition-all duration-300 shadow-[0_10px_30px_rgba(37,211,102,0.3)]">
                Start Chat Now
             </a>
           </div>

        </div>
      </div>
    </section>
  );
}
