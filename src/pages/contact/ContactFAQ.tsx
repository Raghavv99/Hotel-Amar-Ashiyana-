import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";

export function ContactFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "How can I book a room?",
      a: "You can book directly through our website via the Rooms section, call our 24/7 reservation desk at 075209 57011, or message us on WhatsApp for instant assistance and exclusive direct-booking offers."
    },
    {
      q: "What payment methods are accepted?",
      a: "We accept all major credit and debit cards (Visa, MasterCard, Amex), UPI transactions, net banking, and cash at the reception. Corporate billing accounts can also be arranged with prior approval."
    },
    {
      q: "Is parking available for guests?",
      a: "Yes, we provide complimentary secure valet parking for all our residing guests and restaurant patrons. The parking facility is monitored 24/7 by our security team."
    },
    {
      q: "What are the check-in and check-out timings?",
      a: "Standard check-in time is 12:00 PM (Noon), and check-out time is 11:00 AM. Early check-in or late check-out can be requested subject to availability and may incur additional charges."
    },
    {
      q: "Are family rooms available?",
      a: "Absolutely. We offer spacious Family Rooms and multi-bedroom Family Suites equipped with modern amenities to ensure a comfortable stay for larger groups and families with children."
    },
    {
      q: "Do you host weddings and corporate events?",
      a: "Yes, Hotel Amar Ashiyana features elegant banquet halls and flexible meeting spaces. Our dedicated events team can handle everything from corporate seminars and private dining to grand wedding celebrations."
    }
  ];

  return (
    <section className="py-24 bg-[#030303] text-ivory border-t border-luxury-gold/5 relative overflow-hidden">
      <div className="max-w-[800px] mx-auto px-4 relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-ivory mb-6">Frequently Asked <span className="text-luxury-gold italic">Questions</span></h2>
          <p className="text-ivory/60 font-light text-sm">Find answers to common inquiries to help you plan your perfect stay.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
             <motion.div
               key={idx}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: idx * 0.1 }}
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
             </motion.div>
          ))}
        </div>

        <div className="text-center mt-16 pb-8">
           <p className="text-sm font-light text-ivory/60 mb-4">Have a question not listed here?</p>
           <a href="https://wa.me/9107520957011" target="_blank" rel="noreferrer" className="inline-flex items-center text-[10px] uppercase font-bold tracking-[0.2em] text-luxury-gold hover:text-ivory border-b border-luxury-gold hover:border-ivory pb-1 transition-all">
             Ask us on WhatsApp
           </a>
        </div>

      </div>
    </section>
  );
}
