import React, { useState } from "react";
import { motion } from "motion/react";
import { Send, Calendar, Users, Hotel } from "lucide-react";
import { saveToFirestore } from "../../lib/firebase";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    type: "Room Booking",
    dateIn: "",
    dateOut: "",
    guests: "2",
    subject: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Save to Firestore
    const res = await saveToFirestore("contact_inquiries", {
      ...formData,
      status: 'new'
    });

    setIsSubmitting(false);
    
    if (res.success) {
      setIsSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        city: "",
        type: "Room Booking",
        dateIn: "",
        dateOut: "",
        guests: "2",
        subject: "",
        message: ""
      });
      setTimeout(() => setIsSuccess(false), 5000);
    } else {
      alert("Something went wrong. Please try again.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="form" className="py-24 bg-black border-t border-luxury-gold/5 relative">
      
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* Form Side */}
          <div className="w-full lg:w-3/5">
             <motion.div
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 1 }}
               className="bg-[#06080a]/60 backdrop-blur-2xl border border-ivory/10 p-8 md:p-12 relative overflow-hidden"
             >
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-luxury-gold/10 blur-[100px] rounded-full pointer-events-none"></div>

                <div className="mb-10 relative z-10">
                  <h2 className="font-serif text-4xl text-ivory mb-2">Send an <span className="text-luxury-gold italic">Inquiry</span></h2>
                  <p className="text-ivory/60 text-sm font-light">Complete the form below and our dedicated team will respond within 24 hours.</p>
                </div>

                <form onSubmit={handleSubmit} className="relative z-10">
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div className="flex flex-col">
                        <label className="text-[10px] uppercase tracking-widest text-ivory/60 mb-2">Full Name *</label>
                        <input type="text" name="name" required value={formData.name} onChange={handleChange} className="w-full bg-black/50 border border-ivory/10 focus:border-luxury-gold px-4 py-3 text-ivory outline-none transition-colors font-light text-sm" placeholder="e.g. James Bond" />
                      </div>
                      <div className="flex flex-col">
                        <label className="text-[10px] uppercase tracking-widest text-ivory/60 mb-2">Mobile Number *</label>
                        <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} className="w-full bg-black/50 border border-ivory/10 focus:border-luxury-gold px-4 py-3 text-ivory outline-none transition-colors font-light text-sm" placeholder="+91 xxxxx xxxxx" />
                      </div>
                   </div>

                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div className="flex flex-col">
                        <label className="text-[10px] uppercase tracking-widest text-ivory/60 mb-2">Email Address *</label>
                        <input type="email" name="email" required value={formData.email} onChange={handleChange} className="w-full bg-black/50 border border-ivory/10 focus:border-luxury-gold px-4 py-3 text-ivory outline-none transition-colors font-light text-sm" placeholder="james@example.com" />
                      </div>
                      <div className="flex flex-col">
                        <label className="text-[10px] uppercase tracking-widest text-ivory/60 mb-2">City</label>
                        <input type="text" name="city" value={formData.city} onChange={handleChange} className="w-full bg-black/50 border border-ivory/10 focus:border-luxury-gold px-4 py-3 text-ivory outline-none transition-colors font-light text-sm" placeholder="e.g. New Delhi" />
                      </div>
                   </div>

                   <div className="mb-6">
                      <label className="text-[10px] uppercase tracking-widest text-ivory/60 mb-2 block">Inquiry Type *</label>
                      <select name="type" required value={formData.type} onChange={handleChange} className="w-full bg-black/50 border border-ivory/10 focus:border-luxury-gold px-4 py-3 text-ivory outline-none transition-colors font-light text-sm appearance-none">
                         <option className="bg-[#06080a] text-ivory" value="Room Booking">Room Booking</option>
                         <option className="bg-[#06080a] text-ivory" value="Restaurant Reservation">Restaurant Reservation</option>
                         <option className="bg-[#06080a] text-ivory" value="Wedding/Event Inquiry">Wedding/Event Inquiry</option>
                         <option className="bg-[#06080a] text-ivory" value="Business Stay">Business Stay</option>
                         <option className="bg-[#06080a] text-ivory" value="Customer Support">Customer Support</option>
                      </select>
                   </div>

                   {/* Conditional display based on type */}
                   {(formData.type === "Room Booking" || formData.type === "Business Stay") && (
                     <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                        <div className="flex flex-col">
                          <label className="text-[10px] uppercase tracking-widest text-ivory/60 mb-2">Check-in</label>
                          <div className="relative">
                            <input type="date" name="dateIn" value={formData.dateIn} onChange={handleChange} className="w-full bg-black/50 border border-ivory/10 focus:border-luxury-gold px-4 py-3 text-ivory outline-none transition-colors font-light text-sm color-scheme-dark" />
                          </div>
                        </div>
                        <div className="flex flex-col">
                          <label className="text-[10px] uppercase tracking-widest text-ivory/60 mb-2">Check-out</label>
                          <div className="relative">
                            <input type="date" name="dateOut" value={formData.dateOut} onChange={handleChange} className="w-full bg-black/50 border border-ivory/10 focus:border-luxury-gold px-4 py-3 text-ivory outline-none transition-colors font-light text-sm color-scheme-dark" />
                          </div>
                        </div>
                        <div className="flex flex-col">
                          <label className="text-[10px] uppercase tracking-widest text-ivory/60 mb-2">Guests</label>
                          <select name="guests" value={formData.guests} onChange={handleChange} className="w-full bg-black/50 border border-ivory/10 focus:border-luxury-gold px-4 py-3 text-ivory outline-none transition-colors font-light text-sm appearance-none">
                            <option className="bg-[#06080a] text-ivory" value="1">1 Guest</option>
                            <option className="bg-[#06080a] text-ivory" value="2">2 Guests</option>
                            <option className="bg-[#06080a] text-ivory" value="3">3 Guests</option>
                            <option className="bg-[#06080a] text-ivory" value="4">4 Guests</option>
                            <option className="bg-[#06080a] text-ivory" value="5+">5+ Guests</option>
                          </select>
                        </div>
                     </div>
                   )}

                   <div className="mb-6">
                      <label className="text-[10px] uppercase tracking-widest text-ivory/60 mb-2 block">Subject</label>
                      <input type="text" name="subject" value={formData.subject} onChange={handleChange} className="w-full bg-black/50 border border-ivory/10 focus:border-luxury-gold px-4 py-3 text-ivory outline-none transition-colors font-light text-sm" placeholder="Brief subject of your inquiry" />
                   </div>

                   <div className="mb-8">
                      <label className="text-[10px] uppercase tracking-widest text-ivory/60 mb-2 block">Your Message *</label>
                      <textarea name="message" required value={formData.message} onChange={handleChange} rows={4} className="w-full bg-black/50 border border-ivory/10 focus:border-luxury-gold px-4 py-3 text-ivory outline-none transition-colors font-light text-sm resize-none" placeholder="Please provide any additional details, special requests, or questions..."></textarea>
                   </div>

                   <div className="flex justify-between items-center">
                     <button 
                       type="submit" 
                       disabled={isSubmitting}
                       className="w-full md:w-auto px-10 py-4 bg-luxury-gold text-black flex items-center justify-center text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-ivory transition-colors disabled:opacity-70 group"
                     >
                        {isSubmitting ? 'Sending Processing...' : 'Send Inquiry'}
                        {!isSubmitting && <Send size={14} className="ml-3 group-hover:translate-x-1 transition-transform" />}
                     </button>
                     
                     <div className={`ml-4 text-sm font-medium ${isSuccess ? 'text-green-500 opacity-100 flex items-center' : 'opacity-0'} transition-opacity duration-300`}>
                        {isSuccess && <span>✓ Inquiry Sent Successfully! We will contact you soon.</span>}
                     </div>
                   </div>
                </form>
             </motion.div>
          </div>

          {/* Quick Booking Widget Side */}
          <div className="w-full lg:w-2/5 mt-10 lg:mt-32">
             <motion.div
               initial={{ opacity: 0, x: 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 1, delay: 0.2 }}
               className="bg-ivory text-black p-10 relative"
             >
                <div className="absolute top-0 right-0 w-20 h-20 bg-luxury-gold/20 -translate-y-1/2 translate-x-1/2 rounded-full blur-xl pointer-events-none"></div>
                
                <h3 className="font-serif text-3xl mb-2">Check Availability</h3>
                <p className="text-black/60 text-sm font-medium mb-8">Secure your preferred dates instantly.</p>

                <div className="space-y-4">
                   <div className="flex border border-black/10 hover:border-luxury-gold/50 transition-colors p-3 items-center group bg-white">
                      <Calendar size={18} className="text-luxury-gold mx-2" />
                      <div className="flex flex-col ml-3 flex-grow">
                         <span className="text-[9px] uppercase tracking-widest text-black/50 font-bold mb-1">Arrival Date</span>
                         <input type="date" className="text-sm outline-none w-full bg-transparent font-medium" />
                      </div>
                   </div>

                   <div className="flex border border-black/10 hover:border-luxury-gold/50 transition-colors p-3 items-center group bg-white">
                      <Calendar size={18} className="text-luxury-gold mx-2" />
                      <div className="flex flex-col ml-3 flex-grow">
                         <span className="text-[9px] uppercase tracking-widest text-black/50 font-bold mb-1">Departure Date</span>
                         <input type="date" className="text-sm outline-none w-full bg-transparent font-medium" />
                      </div>
                   </div>

                   <div className="flex border border-black/10 hover:border-luxury-gold/50 transition-colors p-3 items-center group bg-white">
                      <Users size={18} className="text-luxury-gold mx-2" />
                      <div className="flex flex-col ml-3 flex-grow">
                         <span className="text-[9px] uppercase tracking-widest text-black/50 font-bold mb-1">Guests</span>
                         <select className="text-sm outline-none w-full bg-transparent font-medium appearance-none cursor-pointer">
                            <option>2 Adults, 0 Children</option>
                            <option>1 Adult, 0 Children</option>
                            <option>2 Adults, 1 Child</option>
                            <option>3 Adults</option>
                         </select>
                      </div>
                   </div>

                   <div className="flex border border-black/10 hover:border-luxury-gold/50 transition-colors p-3 items-center group bg-white">
                      <Hotel size={18} className="text-luxury-gold mx-2" />
                      <div className="flex flex-col ml-3 flex-grow">
                         <span className="text-[9px] uppercase tracking-widest text-black/50 font-bold mb-1">Accommodation</span>
                         <select className="text-sm outline-none w-full bg-transparent font-medium appearance-none cursor-pointer">
                            <option>Deluxe Room</option>
                            <option>Premium Room</option>
                            <option>Executive Room</option>
                            <option>Family Suite</option>
                            <option>Royal Suite</option>
                         </select>
                      </div>
                   </div>

                   <button className="w-full py-4 mt-4 bg-black text-ivory text-[10px] uppercase tracking-widest font-bold hover:bg-luxury-gold hover:text-black transition-colors block text-center">
                     Check Availability
                   </button>
                </div>
             </motion.div>

             {/* Business Hours Mini Card */}
             <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8, delay: 0.4 }}
               className="mt-8 border border-luxury-gold/20 p-8 flex flex-col space-y-4 text-sm font-light text-ivory/80"
             >
                <div className="flex justify-between border-b border-ivory/5 pb-2">
                   <span>Reception</span>
                   <span className="text-luxury-gold">24 Hours / 7 Days</span>
                </div>
                <div className="flex justify-between border-b border-ivory/5 pb-2">
                   <span>Shikhar Restaurant</span>
                   <span className="text-ivory">07:00 AM - 11:30 PM</span>
                </div>
                <div className="flex justify-between border-b border-ivory/5 pb-2">
                   <span>Room Service</span>
                   <span className="text-ivory">24 Hours (Limited Menu Overnight)</span>
                </div>
             </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
