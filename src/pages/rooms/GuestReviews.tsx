import { motion } from "motion/react";
import { Star } from "lucide-react";
import { useAuth } from "../../contexts/AuthContext";

export function GuestReviews() {
  const { requireAuth } = useAuth();
  const reviews = [
    {
      name: "Arthur Pendelton",
      type: "Business Stay",
      rating: 5,
      review: "An absolute masterpiece of hospitality. The Executive Suite provided unmatched comfort and the service was entirely flawless from check-in to departure. Highly recommended.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
    },
    {
      name: "Sophia Martinez",
      type: "Romantic Getaway",
      rating: 5,
      review: "We stayed in the Honeymoon Suite and it exceeded every expectation. The attention to detail and personalized touches made our anniversary truly magical.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop"
    },
    {
      name: "The Harrison Family",
      type: "Family Vacation",
      rating: 4.5,
      review: "Spacious, luxurious, and perfectly accommodating for our family of four. The rooms were spotless and the dining at Shikhar was exceptional.",
      image: "https://images.unsplash.com/photo-1544168190-79c15427015f?q=80&w=2088&auto=format&fit=crop"
    }
  ];

  const handleWriteReview = () => {
    requireAuth(() => {
      alert("Opening review submission form...");
    });
  };

  return (
    <section className="py-32 bg-black text-ivory border-t border-luxury-gold/5 relative overflow-hidden">
      
      <div className="max-w-[1400px] mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="md:w-1/2">
             <div className="flex items-center mb-4">
               <div className="w-12 h-[1px] bg-luxury-gold/50 mr-4"></div>
               <p className="text-[10px] uppercase tracking-widest text-luxury-gold font-semibold">Testimonials</p>
             </div>
             <h2 className="font-serif text-5xl text-ivory">Guest <span className="text-luxury-gold italic">Stories</span></h2>
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0 flex flex-col md:items-end">
             <p className="text-ivory/60 font-light max-w-md md:text-right text-sm leading-relaxed mb-6">
               Read what our esteemed guests have to say about their royal experiences at Hotel Amar Ashiyana.
             </p>
             <button 
               onClick={handleWriteReview}
               className="px-6 py-3 border border-luxury-gold text-luxury-gold text-[10px] uppercase tracking-widest font-bold hover:bg-luxury-gold hover:text-black transition-colors"
             >
               Write a Review
             </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((item, index) => (
             <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-[#06080a] border border-ivory/10 p-10 hover:border-luxury-gold/20 transition-colors"
             >
                <div className="flex space-x-1 mb-6">
                   {[...Array(5)].map((_, i) => (
                     <Star key={i} size={14} className={i < Math.floor(item.rating) ? "fill-luxury-gold text-luxury-gold" : "text-luxury-gold/30"} />
                   ))}
                </div>
                
                <p className="text-sm font-light text-ivory/80 leading-relaxed italic mb-10">"{item.review}"</p>
                
                <div className="flex items-center mt-auto">
                   <img referrerPolicy="no-referrer" src={item.image} alt={item.name} className="w-12 h-12 rounded-full object-cover mr-4 border border-luxury-gold/30" />
                   <div>
                     <h4 className="font-serif text-ivory text-lg">{item.name}</h4>
                     <p className="text-[10px] uppercase tracking-widest text-luxury-gold">{item.type}</p>
                   </div>
                </div>
             </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
