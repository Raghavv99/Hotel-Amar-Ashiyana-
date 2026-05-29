import { motion } from "motion/react";
import { ShieldCheck, Wifi, HeadphonesIcon, ThumbsUp, CreditCard, CheckCircle } from "lucide-react";

export function WhyBookWithUs() {
  const reasons = [
    { icon: <ThumbsUp />, title: "Best Price Guarantee", desc: "Find a lower price elsewhere and we'll match it instantly." },
    { icon: <ShieldCheck />, title: "Secure Booking", desc: "Your booking is 100% secure with enterprise encryption." },
    { icon: <CheckCircle />, title: "Instant Confirmation", desc: "Receive immediate confirmation straight to your email & WhatsApp." },
    { icon: <Wifi />, title: "Free Premium WiFi", desc: "Uncapped high-speed fiber internet throughout your stay." },
    { icon: <CreditCard />, title: "No Hidden Fees", desc: "The price you see is exactly the price you pay." },
    { icon: <HeadphonesIcon />, title: "24/7 Priority Support", desc: "Our concierge team is available to assist you round the clock." }
  ];

  return (
    <section className="py-24 bg-[#030303] text-ivory border-t border-luxury-gold/5 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4">
        
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-ivory mb-6">Why Book <span className="text-luxury-gold italic">Directly With Us</span></h2>
          <p className="text-ivory/60 font-light max-w-xl mx-auto text-sm">Experience exclusive benefits, guaranteed lowest rates, and a seamless reservation process when you book your stay directly.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {reasons.map((item, index) => (
             <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-black border border-ivory/5 p-8 hover:border-luxury-gold/30 transition-colors group flex items-start space-x-6"
             >
                <div className="text-luxury-gold opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-serif text-xl text-ivory mb-3">{item.title}</h4>
                  <p className="text-xs text-ivory/60 font-light leading-relaxed">{item.desc}</p>
                </div>
             </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
