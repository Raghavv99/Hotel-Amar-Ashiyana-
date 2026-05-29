import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Link } from "react-router-dom";

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={ref} id="home" className="relative h-screen flex items-center justify-center overflow-visible bg-[#06080a]">
      {/* Background */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 z-0 h-full w-full"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop')", // Classic royal hotel exterior/resort
          }}
        ></div>
        {/* Deep cinematic overlay to highlight elements */}
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/40 to-black"></div>
      </motion.div>

      <div className="relative z-10 w-full px-4 max-w-5xl mx-auto flex flex-col items-center text-center mt-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        >
          <p className="text-luxury-gold tracking-widest text-[13px] md:text-[15px] mb-4 font-serif italic drop-shadow-md">
            Welcome To The Palace
          </p>
          
          <h1 className="font-serif text-4xl md:text-6xl lg:text-[5rem] text-ivory mb-6 leading-[1.1] tracking-normal max-w-5xl mx-auto drop-shadow-xl">
            Experience Royal Comfort at<br/><span className="text-luxury-gold">Hotel Amar Ashiyana</span>
          </h1>
          
          <p className="text-ivory text-sm md:text-base max-w-2xl mx-auto font-light leading-loose mt-6 drop-shadow-md">
            Where Luxury Meets Tradition in the Heart of Etawah. <br className="hidden md:block" />
            Discover a sanctuary of elegance tailored for unforgettable stays.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6 mt-12">
            <Link to="/rooms" className="px-10 py-4 bg-luxury-gold text-black text-[10px] uppercase tracking-widest font-semibold hover:bg-ivory transition-colors">
              Book Your Stay
            </Link>
            <Link to="/rooms" className="px-10 py-4 border border-luxury-gold text-luxury-gold text-[10px] uppercase tracking-widest font-semibold hover:bg-luxury-gold/10 transition-colors backdrop-blur-sm">
              Explore Rooms
            </Link>
          </div>
        </motion.div>
      </div>

    </section>
  );
}
