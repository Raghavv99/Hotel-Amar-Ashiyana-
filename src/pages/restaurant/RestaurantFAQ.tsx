import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";

export function RestaurantFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "How do I reserve a table?",
      a: "You can easily reserve a table through our website's reservation form, via WhatsApp, or by calling our restaurant desk directly."
    },
    {
      q: "Do you offer family dining?",
      a: "Yes, we have a dedicated family seating section ensuring a comfortable, peaceful, and family-friendly dining experience."
    },
    {
      q: "Are vegetarian options available?",
      a: "Absolutely. We pride ourselves on a massive selection of premium vegetarian, paneer, and rich North Indian veg thalis."
    },
    {
      q: "Do you host events or private parties?",
      a: "Yes, we offer private dining and event setups for birthdays, anniversaries, corporate lunches, and family gatherings."
    },
    {
      q: "What are the restaurant timings?",
      a: "Shikhar Restaurant is open from 11:00 AM to 11:30 PM offering lunch, dinner, and all-day snacks."
    }
  ];

  return (
    <section className="py-24 bg-[#030303] text-ivory border-h border-ivory/5">
      <div className="max-w-[800px] mx-auto px-4">
        
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-ivory mb-6">Dining <span className="text-luxury-gold italic">FAQs</span></h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
             <div
               key={idx}
               className="border border-ivory/10 hover:border-luxury-gold/30 transition-colors bg-black"
             >
                <button 
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full flex justify-between items-center p-6 text-left"
                >
                   <span className="font-serif text-xl md:text-2xl text-ivory pr-8">{faq.q}</span>
                   <ChevronDown className={`flex-shrink-0 text-luxury-gold transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                   {openIndex === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                         <div className="p-6 pt-0 text-sm font-light text-ivory/60 leading-relaxed border-t border-ivory/5">
                            {faq.a}
                         </div>
                      </motion.div>
                   )}
                </AnimatePresence>
             </div>
          ))}
        </div>

      </div>
    </section>
  );
}
