import { motion } from "motion/react";
import { Tag } from "lucide-react";

export function SpecialOffers() {
  const offers = [
    {
       title: "Family Dinner Combo",
       desc: "Perfect for a family of 4. Includes 2 starters, 2 main courses, breads, rice, and desserts.",
       original: "₹1500",
       discount: "₹1299"
    },
    {
       title: "Weekend Royal Thali",
       desc: "Experience 12 different items in a single grand thali. Available only on Saturdays & Sundays.",
       original: "₹450",
       discount: "₹399"
    },
    {
       title: "Corporate Lunch Box",
       desc: "Executive packing with premium quality food. Ideal for office meetings and quick lunches.",
       original: "₹250",
       discount: "₹199"
    }
  ];

  return (
    <section className="py-24 bg-[#030303] text-ivory border-t border-luxury-gold/5 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-luxury-gold/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-4 relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-ivory mb-6">Special <span className="text-luxury-gold italic">Offers</span></h2>
          <p className="text-ivory/60 font-light text-sm max-w-xl mx-auto">Exclusive dining combinations designed to offer the best of Shikhar Restaurant.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {offers.map((offer, idx) => (
              <motion.div
                 key={idx}
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.6, delay: idx * 0.15 }}
                 className="bg-black border border-ivory/10 hover:border-luxury-gold p-8 md:p-10 relative group transition-colors duration-500"
              >
                 <div className="absolute top-0 right-0 bg-luxury-gold text-black text-[9px] font-bold uppercase tracking-widest px-3 py-1 m-4 flex items-center">
                    <Tag size={10} className="mr-1" /> Offer
                 </div>
                 
                 <h3 className="font-serif text-2xl text-ivory mb-4 group-hover:text-luxury-gold transition-colors">{offer.title}</h3>
                 <p className="text-sm font-light text-ivory/60 mb-8 line-clamp-3 leading-relaxed">{offer.desc}</p>
                 
                 <div className="flex items-end space-x-4 mt-auto">
                    <span className="text-3xl font-serif text-ivory">{offer.discount}</span>
                    <span className="text-sm text-ivory/40 line-through pb-1">{offer.original}</span>
                 </div>
              </motion.div>
           ))}
        </div>

      </div>
    </section>
  );
}
