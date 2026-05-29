import { motion } from "motion/react";

export function MapLocation() {
  return (
    <section id="location" className="relative h-[70vh] w-full border-t border-luxury-gold/5">
       <div className="absolute inset-0 pointer-events-none z-10 bg-gradient-to-t from-black via-transparent to-black/80"></div>
       <div className="absolute inset-0 pointer-events-none z-10 bg-black/40 mix-blend-multiply"></div>

        {/* Cinematic highly desaturated map */}
        <iframe
          src="https://maps.google.com/maps?q=Hotel%20Amar%20Ashiyana,%20V%20Mart,%20Mall%20Godam%20Road,%20Ashok%20Nagar,%20Swaroop%20Nagar,%20Etawah,%20Uttar%20Pradesh%20206001&t=&z=15&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0, filter: 'grayscale(100%) invert(100%) contrast(1.5) sepia(20%) hue-rotate(180deg)' }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 z-0"
        ></iframe>

        <div className="absolute inset-x-0 bottom-0 z-20 p-8 md:p-16 flex flex-col md:flex-row justify-between items-end gap-8 bg-gradient-to-t from-black via-black/80 to-transparent pt-32">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="md:w-1/2"
          >
            <div className="flex items-center mb-4">
              <div className="w-8 h-[1px] bg-luxury-gold mr-3"></div>
              <h4 className="text-luxury-gold uppercase tracking-[0.3em] text-[10px] font-semibold">Location</h4>
            </div>
            <h3 className="font-serif text-4xl md:text-5xl text-ivory mb-4 leading-tight">Visit Us at<br/><span className="text-luxury-gold italic">Amar Ashiyana</span></h3>
            <p className="text-ivory/60 font-light max-w-sm text-sm leading-relaxed mb-6">
              V Mart, Mall Godam Road, Ashok Nagar, Swaroop Nagar, Etawah, Uttar Pradesh 206001
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <a
              href="https://maps.google.com/?q=Hotel+Amar+Ashiyana+Etawah"
              target="_blank"
              rel="noopener noreferrer" 
              className="px-10 py-4 bg-luxury-gold text-black uppercase text-[10px] font-bold tracking-widest mt-4 inline-block hover:bg-ivory transition-colors"
            >
              Get Directions
            </a>
          </motion.div>
        </div>
    </section>
  );
}
