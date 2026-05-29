import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export function AboutHero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={ref} className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-black">
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2070&auto=format&fit=crop')", // Hotel lobby/entrance
          }}
        ></div>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/40 to-black"></div>
      </motion.div>

      <div className="relative z-10 w-full px-4 max-w-5xl mx-auto flex flex-col items-center text-center mt-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        >
          <p className="text-luxury-gold tracking-widest text-[11px] md:text-[13px] mb-6 font-serif italic drop-shadow-md">
            The Legacy of Elegance
          </p>
          
          <h1 className="font-serif text-5xl md:text-7xl lg:text-[6rem] text-ivory mb-6 leading-[1.05] tracking-tight max-w-5xl mx-auto drop-shadow-xl">
            More Than a Stay,<br/><span className="text-luxury-gold italic">An Experience.</span>
          </h1>
          
          <p className="text-ivory/80 text-sm md:text-base max-w-2xl mx-auto font-light leading-relaxed mt-6 drop-shadow-md">
            Discover a sanctuary where timeless tradition meets refined modern luxury in the heart of Etawah.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
