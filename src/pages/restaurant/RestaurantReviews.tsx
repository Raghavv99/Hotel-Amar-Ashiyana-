import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

export function RestaurantReviews() {
  const reviews = [
    {
       name: "Rahul Verma",
       dish: "Shahi Paneer & Naan",
       rating: 5.0,
       text: "Absolutely the best North Indian food in Etawah. The Shahi Paneer was rich, creamy, and authentic. The service was impeccable."
    },
    {
       name: "Priya Sharma",
       dish: "Vegetarian Thali",
       rating: 4.8,
       text: "A perfect place for family dinners. The ambiance is very calm, and the food quality is excellent. Highly recommend their special thali."
    },
    {
       name: "Amit Singh",
       dish: "Dal Makhani",
       rating: 5.0,
       text: "The Dal Makhani here is out of this world. You can tell it's slow-cooked the traditional way. Will definitely visit again."
    }
  ];

  return (
    <section className="py-24 bg-[#030303] text-ivory border-y border-luxury-gold/5 relative">
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-luxury-gold/5 blur-[120px] -translate-y-1/2 pointer-events-none rounded-full"></div>

      <div className="max-w-[1400px] mx-auto px-4 relative z-10 text-center">
        
        <Quote size={40} className="mx-auto text-luxury-gold/30 mb-6" />
        <h2 className="font-serif text-4xl md:text-5xl text-ivory mb-16">Guest <span className="text-luxury-gold italic">Stories</span></h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {reviews.map((review, idx) => (
              <motion.div
                 key={idx}
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.6, delay: idx * 0.15 }}
                 className="bg-black border border-ivory/10 p-10 flex flex-col items-center text-center group hover:border-luxury-gold/40 transition-colors"
              >
                 <div className="flex space-x-1 mb-6 text-luxury-gold">
                    {[...Array(Math.floor(review.rating))].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                 </div>
                 
                 <p className="text-ivory/80 font-light text-sm italic mb-8 flex-grow leading-relaxed">"{review.text}"</p>
                 
                 <div className="w-8 h-[1px] bg-luxury-gold/30 mb-6"></div>
                 
                 <h4 className="font-serif text-lg text-ivory mb-1">{review.name}</h4>
                 <p className="text-[10px] uppercase tracking-widest text-ivory/40">Ordered: {review.dish}</p>
              </motion.div>
           ))}
        </div>

      </div>
    </section>
  );
}
