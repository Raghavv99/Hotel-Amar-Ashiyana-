import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Calendar, Users, ChevronDown, Search } from "lucide-react";

export function RoomsHero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={ref} className="relative h-[100vh] flex items-center justify-center overflow-hidden bg-black pt-20">
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1542314831-c6a4d14fff88?q=80&w=2070&auto=format&fit=crop')", // Hotel exterior or cinematic room
          }}
        ></div>
        {/* Deep cinematic overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/30 to-black"></div>
      </motion.div>

      <div className="relative z-10 w-full px-4 max-w-7xl mx-auto flex flex-col items-center text-center mt-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        >
          <div className="flex items-center justify-center mb-6">
            <div className="w-8 h-[1px] bg-luxury-gold/50 mr-4"></div>
            <p className="text-[10px] md:text-xs uppercase tracking-[0.3em] font-semibold text-luxury-gold">Accommodations</p>
            <div className="w-8 h-[1px] bg-luxury-gold/50 ml-4"></div>
          </div>
          
          <h1 className="font-serif text-5xl md:text-7xl lg:text-[5.5rem] text-ivory mb-6 leading-[1.05] tracking-tight relative drop-shadow-2xl">
            Discover Your <span className="text-luxury-gold italic">Perfect Stay</span>
          </h1>
          
          <p className="text-ivory/80 text-sm md:text-lg max-w-2xl mx-auto font-light leading-relaxed drop-shadow-md">
            Choose from our collection of luxury rooms and suites designed for comfort, elegance, and unforgettable experiences.
          </p>
        </motion.div>

        {/* Floating Search Bar */}
        <motion.div 
           initial={{ opacity: 0, y: 40 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
           className="w-full max-w-5xl mx-auto mt-16 bg-black/60 backdrop-blur-xl border border-luxury-gold/20 p-2 md:p-4 shadow-[0_0_40px_rgba(0,0,0,0.5)]"
        >
           <div className="flex flex-col md:flex-row gap-2 md:gap-4">
              
              {/* Check In */}
              <div className="flex-1 flex items-center px-4 py-3 bg-black/40 border border-ivory/10 hover:border-luxury-gold/50 transition-colors cursor-pointer group">
                 <Calendar className="text-luxury-gold mr-3 group-hover:scale-110 transition-transform" size={18} />
                 <div className="flex flex-col text-left">
                    <span className="text-[9px] uppercase tracking-widest text-ivory/50 font-semibold mb-1">Check-in</span>
                    <span className="text-sm text-ivory">Select Date</span>
                 </div>
              </div>

              {/* Check Out */}
              <div className="flex-1 flex items-center px-4 py-3 bg-black/40 border border-ivory/10 hover:border-luxury-gold/50 transition-colors cursor-pointer group">
                 <Calendar className="text-luxury-gold mr-3 group-hover:scale-110 transition-transform" size={18} />
                 <div className="flex flex-col text-left">
                    <span className="text-[9px] uppercase tracking-widest text-ivory/50 font-semibold mb-1">Check-out</span>
                    <span className="text-sm text-ivory">Select Date</span>
                 </div>
              </div>

              {/* Guests */}
              <div className="flex-1 flex items-center px-4 py-3 bg-black/40 border border-ivory/10 hover:border-luxury-gold/50 transition-colors cursor-pointer group justify-between">
                 <div className="flex items-center">
                   <Users className="text-luxury-gold mr-3 group-hover:scale-110 transition-transform" size={18} />
                   <div className="flex flex-col text-left">
                      <span className="text-[9px] uppercase tracking-widest text-ivory/50 font-semibold mb-1">Guests</span>
                      <span className="text-sm text-ivory">2 Adults, 0 Children</span>
                   </div>
                 </div>
                 <ChevronDown className="text-ivory/50" size={16} />
              </div>

              {/* Room Type */}
              <div className="flex-1 flex items-center px-4 py-3 bg-black/40 border border-ivory/10 hover:border-luxury-gold/50 transition-colors cursor-pointer group justify-between">
                 <div className="flex flex-col text-left">
                    <span className="text-[9px] uppercase tracking-widest text-ivory/50 font-semibold mb-1">Room Type</span>
                    <span className="text-sm text-ivory">All Rooms</span>
                 </div>
                 <ChevronDown className="text-ivory/50" size={16} />
              </div>

              {/* Search Button */}
              <button className="flex-shrink-0 bg-luxury-gold text-black flex items-center justify-center px-8 py-4 uppercase text-[10px] tracking-widest font-bold hover:bg-ivory transition-colors md:w-auto w-full group">
                <Search className="mr-2 group-hover:scale-110 transition-transform" size={16} />
                Search
              </button>

           </div>
        </motion.div>
      </div>
    </section>
  );
}
