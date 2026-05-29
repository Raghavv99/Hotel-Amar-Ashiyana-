import { motion } from "motion/react";
import { Facebook, Instagram, Youtube, ExternalLink } from "lucide-react";

export function SocialConnect() {
  const socials = [
    {
       name: "Instagram",
       handle: "@amarashiyana",
       icon: <Instagram size={28} />,
       link: "#"
    },
    {
       name: "Facebook",
       handle: "Hotel Amar Ashiyana",
       icon: <Facebook size={28} />,
       link: "#"
    },
    {
       name: "Google Business",
       handle: "View our verified reviews",
       icon: <ExternalLink size={28} />,
       link: "https://maps.google.com/maps?q=Hotel%20Amar%20Ashiyana,%20V%20Mart,%20Mall%20Godam%20Road,%20Ashok%20Nagar,%20Swaroop%20Nagar,%20Etawah,%20Uttar%20Pradesh%20206001"
    },
    {
       name: "YouTube",
       handle: "Hotel Tours & Events",
       icon: <Youtube size={28} />,
       link: "#"
    }
  ];

  return (
    <section className="py-24 bg-black border-t border-luxury-gold/5 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 text-center">
        
        <p className="text-[10px] uppercase tracking-widest text-luxury-gold mb-4 font-semibold">Join Our Community</p>
        <h2 className="font-serif text-4xl md:text-5xl text-ivory mb-16">Connect <span className="text-luxury-gold italic">Socially</span></h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 text-left lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {socials.map((platform, idx) => (
             <motion.a
                href={platform.link}
                target={platform.name === "Google Business" ? "_blank" : "_self"}
                rel="noreferrer"
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group flex flex-col bg-[#06080a] border border-ivory/10 p-8 hover:border-luxury-gold/50 transition-colors relative overflow-hidden"
             >
                <div className="absolute inset-0 bg-luxury-gold/5 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></div>
                <div className="text-luxury-gold mb-6 relative z-10 group-hover:scale-110 transition-transform duration-300">
                   {platform.icon}
                </div>
                <h4 className="font-serif text-2xl text-ivory mb-2 relative z-10 group-hover:text-luxury-gold transition-colors">{platform.name}</h4>
                <p className="text-xs font-light text-ivory/50 mt-auto relative z-10">{platform.handle}</p>
             </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}
