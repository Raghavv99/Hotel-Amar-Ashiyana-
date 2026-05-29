import { Phone, Clock, AlertCircle } from "lucide-react";

export function EmergencyContact() {
  return (
    <section className="bg-burgundy/10 border-y border-burgundy/30 py-12">
      <div className="max-w-[1200px] mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        
        <div className="flex items-center mb-6 md:mb-0">
           <div className="w-12 h-12 bg-burgundy/20 rounded-full flex items-center justify-center mr-6 border border-burgundy/40">
             <AlertCircle size={24} className="text-burgundy" />
           </div>
           <div>
              <h3 className="font-serif text-2xl text-ivory mb-1">Emergency Assistance</h3>
              <p className="text-xs font-light text-ivory/60">For immediate, urgent matters outside regular hours.</p>
           </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-6">
           <a href="tel:07520957011" className="flex items-center px-6 py-3 bg-[#06080a] border border-ivory/10 hover:border-burgundy transition-colors text-ivory">
              <Phone size={16} className="text-burgundy mr-3" />
              <div className="flex flex-col">
                 <span className="text-[9px] uppercase tracking-widest text-ivory/50 mb-1">Reception/Security</span>
                 <span className="font-medium text-sm">075209 57011</span>
              </div>
           </a>

           
           <div className="flex items-center px-6 py-3 bg-[#06080a] border border-ivory/10 text-ivory">
              <Clock size={16} className="text-luxury-gold mr-3" />
              <div className="flex flex-col">
                 <span className="text-[9px] uppercase tracking-widest text-ivory/50 mb-1">Availability</span>
                 <span className="font-medium text-sm">24 Hours / 7 Days</span>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
}
