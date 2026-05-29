import { motion } from "motion/react";
import { PhoneCall, Mail, CalendarCheck, UtensilsCrossed, CalendarHeart } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export function ContactOptions() {
  const options = [
    {
      icon: <PhoneCall strokeWidth={1} size={32} />,
      title: "Call Us",
      desc: "Speak directly with our front desk for instant assistance.",
      action: "075209 57011",
      link: "tel:07520957011"
    },
    {
      icon: <FaWhatsapp size={32} />,
      title: "WhatsApp Support",
      desc: "Fast responses for pre-arrival queries and immediate assistance.",
      action: "Message Us",
      link: "https://wa.me/9107520957011"
    },
    {
      icon: <Mail strokeWidth={1} size={32} />,
      title: "Email Support",
      desc: "For detailed inquiries, corporate bookings, and feedback.",
      action: "info@amarashiyana.com",
      link: "mailto:info@amarashiyana.com"
    },
    {
      icon: <CalendarCheck strokeWidth={1} size={32} />,
      title: "Booking Assistance",
      desc: "Need help choosing the right suite or modifying a reservation?",
      action: "Get Help",
      link: "#form"
    },
    {
      icon: <UtensilsCrossed strokeWidth={1} size={32} />,
      title: "Restaurant Reservations",
      desc: "Reserve your table at Shikhar Restaurant for an exquisite dining experience.",
      action: "Book Table",
      link: "#form"
    },
    {
      icon: <CalendarHeart strokeWidth={1} size={32} />,
      title: "Event Enquiries",
      desc: "Planning a wedding, corporate meeting, or family celebration?",
      action: "Plan Event",
      link: "#form"
    }
  ];

  return (
    <section className="py-24 bg-[#030303] text-ivory border-t border-luxury-gold/5 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-1/2 h-[500px] bg-luxury-gold/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <p className="text-[10px] uppercase tracking-widest text-luxury-gold mb-4 font-semibold">How Can We Help</p>
          <h2 className="font-serif text-4xl md:text-5xl text-ivory mb-6">Premium Support <span className="text-luxury-gold italic">Ready For You</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {options.map((item, i) => (
            <motion.a
               href={item.link}
               key={i}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-50px" }}
               transition={{ duration: 0.6, delay: i * 0.1 }}
               className="group flex flex-col items-center text-center p-10 bg-black/40 backdrop-blur-sm border border-ivory/5 hover:border-luxury-gold/30 hover:bg-black transition-all duration-500 overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-luxury-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              
              <div className="p-4 rounded-full bg-ivory/5 text-luxury-gold mb-6 group-hover:scale-110 group-hover:bg-luxury-gold/10 transition-transform duration-500">
                 {item.icon}
              </div>
              <h3 className="font-serif text-2xl text-ivory mb-3 group-hover:text-luxury-gold transition-colors">{item.title}</h3>
              <p className="text-ivory/60 text-sm font-light leading-relaxed mb-8">{item.desc}</p>
              
              <div className="mt-auto block">
                 <span className="inline-flex items-center text-[10px] uppercase font-bold tracking-[0.2em] text-luxury-gold group-hover:text-ivory py-2 border-b border-transparent group-hover:border-luxury-gold transition-all">
                    {item.action}
                 </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
