import { motion } from "motion/react";
import { Wifi, Shirt, Dumbbell, Car } from "lucide-react";

export function Amenities() {
  const services = [
    { num: "01", title: "Michelin fine Restaurants" },
    { num: "02", title: "Appointed Penthouses" },
    { num: "03", title: "Spa and Wellness Sanctuary" },
    { num: "04", title: "VIP Lounges and Amenities" },
    { num: "05", title: "Event and Conference" },
  ];

  const features = [
    { num: "01", icon: <Wifi size={32} strokeWidth={1} />, title: "Wi-Fi Connection", text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature." },
    { num: "02", icon: <Shirt size={32} strokeWidth={1} />, title: "Laundry Services", text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature." },
    { num: "03", icon: <Dumbbell size={32} strokeWidth={1} />, title: "Fitness Center", text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature." },
    { num: "04", icon: <Car size={32} strokeWidth={1} />, title: "Limous Services", text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots present culinary creations." },
  ];

  return (
    <section className="py-24 bg-[#0a0c10]">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Core Services Section */}
        <div className="mb-32">
          <div className="flex items-center mb-8">
            <div className="w-12 h-[1px] bg-luxury-gold/50 mr-4"></div>
            <h4 className="text-luxury-gold uppercase tracking-[0.3em] text-[10px]">SERVICES</h4>
          </div>
          
          <h2 className="font-serif text-5xl text-ivory mb-12">Core <span className="italic text-luxury-gold">Services</span></h2>

          <div className="flex flex-col lg:flex-row gap-12 items-start">
             <div className="w-full lg:w-1/2 flex flex-col">
               {services.map((item, idx) => (
                 <div key={idx} className="flex items-center py-6 border-b border-ivory/10 group cursor-pointer">
                   <span className="text-[10px] text-ivory/40 mr-4 font-mono">{item.num} /</span>
                   <span className="font-serif text-xl text-ivory group-hover:text-luxury-gold transition-colors">{item.title}</span>
                 </div>
               ))}
             </div>

             <div className="w-full lg:w-1/2 h-[400px] relative group overflow-hidden">
                <img referrerPolicy="no-referrer" 
                  src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2080&auto=format&fit=crop" 
                  alt="Fine Dining" 
                  className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-24 h-24 rounded-full border border-ivory/30 flex flex-col items-center justify-center backdrop-blur-sm text-ivory">
                    <span className="text-xs tracking-widest uppercase mb-1">→</span>
                    <span className="text-[9px] tracking-widest uppercase">Explore</span>
                  </div>
                </div>
             </div>
          </div>
        </div>

        {/* Why Choose Us / Amenities */}
        <div className="text-center mb-16">
          <p className="text-[10px] uppercase tracking-widest text-ivory/60 italic mb-2">Extra Features</p>
          <h2 className="font-serif text-4xl md:text-5xl text-ivory">Why Choose <span className="text-luxury-gold italic">Us</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-[#0f1116] border border-[#1a1d24] p-12 hover:border-luxury-gold/20 transition-colors group flex flex-col items-center text-center"
            >
              <div className="text-luxury-gold mb-6 opacity-70 group-hover:opacity-100 transition-opacity">
                {feature.icon}
              </div>
              <h3 className="font-serif text-2xl text-ivory mb-4 flex items-center justify-center gap-2">
                <span className="text-xs font-mono text-ivory/40">{feature.num} /</span>
                {feature.title}
              </h3>
              <p className="text-ivory/50 text-xs leading-loose font-light max-w-sm">
                {feature.text}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
