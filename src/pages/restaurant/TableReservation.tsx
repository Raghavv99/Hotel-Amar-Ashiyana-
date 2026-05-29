import React, { useState } from "react";
import { motion } from "motion/react";
import { Phone, CalendarHeart } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { saveToFirestore } from "../../lib/firebase";
import { useAuth } from "../../contexts/AuthContext";

export function TableReservation() {
  const { requireAuth } = useAuth();
  const [formData, setFormData] = useState({
    name: "", phone: "", date: "", time: "", guests: "2", requests: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    requireAuth(async () => {
      setIsSubmitting(true);
      
      const res = await saveToFirestore("restaurant_reservations", {
        ...formData,
        status: 'pending'
      });

      setIsSubmitting(false);

      if (res.success) {
        setIsSuccess(true);
        setFormData({
          name: "", phone: "", date: "", time: "", guests: "2", requests: ""
        });
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        alert("Something went wrong. Please try again.");
      }
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="reservation" className="py-24 bg-black border-t border-luxury-gold/5 relative overflow-hidden">
      
      <div className="max-w-[1400px] mx-auto px-4 flex flex-col lg:flex-row gap-16 relative z-10">
        
        {/* Visual Side */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
           <motion.div
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
           >
              <p className="text-[10px] uppercase tracking-widest text-luxury-gold mb-6 font-semibold border-b border-luxury-gold/30 pb-2 inline-block">Table Reservation</p>
              <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-ivory mb-8 leading-[1.1]">Secure Your <span className="text-luxury-gold italic">Table</span></h2>
              <p className="text-sm font-light text-ivory/60 mb-12 leading-relaxed max-w-md">
                 Ensure a seamless dining experience by reserving your table in advance. We recommend booking at least 24 hours prior for weekend dinners.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                 <a href="tel:07520957011" className="flex items-center justify-center px-8 py-4 bg-[#06080a] border border-ivory/10 hover:border-luxury-gold text-ivory transition-colors text-[10px] uppercase tracking-widest font-bold">
                    <Phone size={14} className="mr-3 text-luxury-gold" /> Call Restaurant
                 </a>
                 <a href="https://wa.me/9107520957011?text=Hello! I would like to reserve a table at Shikhar Restaurant." target="_blank" rel="noreferrer" className="flex items-center justify-center px-8 py-4 bg-[#25D366] text-white transition-colors text-[10px] uppercase tracking-widest font-bold hover:bg-[#1ebe57]">
                    <span className="mr-3"><FaWhatsapp size={16} /></span> WhatsApp
                 </a>
              </div>
           </motion.div>
        </div>

        {/* Form Side */}
        <div className="w-full lg:w-1/2">
           <motion.form 
             onSubmit={handleSubmit}
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="bg-[#06080a]/80 backdrop-blur-xl border border-ivory/10 p-8 md:p-12"
           >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                 <div className="flex flex-col">
                    <label className="text-[10px] uppercase tracking-widest text-ivory/50 mb-2">Full Name *</label>
                    <input type="text" name="name" required value={formData.name} onChange={handleChange} className="bg-black/50 border border-ivory/10 focus:border-luxury-gold text-ivory text-sm px-4 py-3 outline-none transition-colors" placeholder="e.g. John Doe" />
                 </div>
                 <div className="flex flex-col">
                    <label className="text-[10px] uppercase tracking-widest text-ivory/50 mb-2">Mobile Number *</label>
                    <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} className="bg-black/50 border border-ivory/10 focus:border-luxury-gold text-ivory text-sm px-4 py-3 outline-none transition-colors" placeholder="+91 xxxxx xxxxx" />
                 </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                 <div className="flex flex-col">
                    <label className="text-[10px] uppercase tracking-widest text-ivory/50 mb-2">Date *</label>
                    <input type="date" name="date" required value={formData.date} onChange={handleChange} className="bg-black/50 border border-ivory/10 focus:border-luxury-gold text-ivory text-sm px-4 py-3 outline-none transition-colors color-scheme-dark" />
                 </div>
                 <div className="flex flex-col">
                    <label className="text-[10px] uppercase tracking-widest text-ivory/50 mb-2">Time *</label>
                    <input type="time" name="time" required value={formData.time} onChange={handleChange} className="bg-black/50 border border-ivory/10 focus:border-luxury-gold text-ivory text-sm px-4 py-3 outline-none transition-colors color-scheme-dark" />
                 </div>
                 <div className="flex flex-col">
                    <label className="text-[10px] uppercase tracking-widest text-ivory/50 mb-2">Guests *</label>
                    <select name="guests" value={formData.guests} onChange={handleChange} className="bg-black/50 border border-ivory/10 focus:border-luxury-gold text-ivory text-sm px-4 py-3 outline-none transition-colors appearance-none">
                       {[1,2,3,4,5,6,7,8,"9+"].map(num => <option key={num} value={num} className="bg-[#06080a]">{num} People</option>)}
                    </select>
                 </div>
              </div>

              <div className="mb-10">
                 <label className="text-[10px] uppercase tracking-widest text-ivory/50 mb-2 block">Special Requests</label>
                 <textarea name="requests" value={formData.requests} onChange={handleChange} rows={3} className="w-full bg-black/50 border border-ivory/10 focus:border-luxury-gold text-ivory text-sm px-4 py-3 outline-none transition-colors resize-none" placeholder="Allergies, high chair required, etc."></textarea>
              </div>

              <button 
                 type="submit" 
                 disabled={isSubmitting}
                 className="w-full py-4 bg-luxury-gold text-black flex items-center justify-center text-[10px] uppercase tracking-widest font-bold hover:bg-ivory transition-colors disabled:opacity-70 group"
              >
                 {isSubmitting ? 'Processing...' : 'Request Reservation'} 
                 {!isSubmitting && <CalendarHeart size={14} className="ml-3 group-hover:scale-110 transition-transform" />}
              </button>
              
              {isSuccess && (
                 <p className="text-green-500 text-sm mt-4 text-center">✓ Reservation request received. We will confirm shortly.</p>
              )}
           </motion.form>
        </div>

      </div>
    </section>
  );
}
