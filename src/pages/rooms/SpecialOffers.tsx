import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useAuth } from "../../contexts/AuthContext";

export function SpecialOffers() {
  const { requireAuth } = useAuth();
  const offers = [
    {
      title: "Weekend Getaway Epic",
      subtitle: "Relax & Recharge",
      desc: "Enjoy 20% off on all luxury suites when booking for Friday ensuring a magical weekend escape.",
      image: "https://images.unsplash.com/photo-1542314831-c6a4d14fff88?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Honeymoon Package",
      subtitle: "Romantic Escape",
      desc: "Complimentary champagne, spa access, and romantic room decor. Curated for unforgettable memories.",
      image: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-24 bg-black border-t border-luxury-gold/5 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-[10px] uppercase tracking-widest text-luxury-gold mb-4 font-semibold">Exclusives</p>
          <h2 className="font-serif text-4xl md:text-5xl text-ivory mb-6">Special <span className="text-luxury-gold italic">Offers</span></h2>
          <div className="w-16 h-[1px] bg-luxury-gold/30 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {offers.map((offer, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative h-[60vh] overflow-hidden group rounded-sm"
            >
              <div className="absolute inset-0 bg-black/40 z-10 group-hover:bg-black/20 transition-colors duration-700"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent z-10"></div>
              <img referrerPolicy="no-referrer" src={offer.image} alt={offer.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110" />
              
              <div className="absolute inset-x-0 bottom-0 p-8 md:p-12 z-20">
                <p className="text-[10px] uppercase tracking-widest text-luxury-gold font-bold mb-3">{offer.subtitle}</p>
                <h3 className="font-serif text-3xl md:text-4xl text-ivory mb-4">{offer.title}</h3>
                <p className="text-sm font-light text-ivory/70 max-w-sm mb-8 leading-relaxed">{offer.desc}</p>
                
                <button 
                  onClick={() => requireAuth(() => alert(`Proceeding to claim ${offer.title}`)) }
                  className="inline-flex items-center text-[10px] uppercase font-bold tracking-[0.2em] text-ivory hover:text-luxury-gold transition-colors group/btn"
                >
                  Claim Offer
                  <ArrowRight strokeWidth={1} size={16} className="ml-4 transform group-hover/btn:translate-x-2 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
