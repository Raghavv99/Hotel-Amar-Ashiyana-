import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ZoomIn, Star } from "lucide-react";

interface GalleryItem {
  id: string;
  src: string;
  name: string;
  category: string;
  description: string;
  price: string;
  rating: number;
}

const fallbackItems: GalleryItem[] = [
  {
    id: "1",
    src: "https://images.unsplash.com/photo-1544681280-d2dcafed0bb6?q=80&w=1200&auto=format&fit=crop",
    name: "Tandoori Platter",
    category: "Tandoori",
    description: "Assorted premium meats and veggies marinated in rich spices and cooked in a traditional clay oven.",
    price: "₹1,200",
    rating: 4.8
  },
  {
    id: "2",
    src: "https://images.unsplash.com/photo-1589302168068-964664d93cb0?q=80&w=1200&auto=format&fit=crop",
    name: "Dal Makhani & Naan",
    category: "North Indian",
    description: "Classic black lentils slow-cooked for 24 hours, served with butter garlic naan.",
    price: "₹550",
    rating: 4.9
  },
  {
    id: "3",
    src: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=1200&auto=format&fit=crop",
    name: "Signature Butter Chicken",
    category: "Signature Specials",
    description: "Our chef's special butter chicken prepared with a secret blend of ground spices and premium butter.",
    price: "₹850",
    rating: 5.0
  },
  {
    id: "4",
    src: "https://images.unsplash.com/photo-1582878826629-29bfabf79fbc?q=80&w=1200&auto=format&fit=crop",
    name: "Dim Sum Basket",
    category: "Chinese",
    description: "Hand-crafted delicate dumplings steamed to perfection with a light soy reduction.",
    price: "₹650",
    rating: 4.7
  },
  {
    id: "5",
    src: "https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?q=80&w=1200&auto=format&fit=crop",
    name: "Classic Masala Dosa",
    category: "South Indian",
    description: "Crispy rice crepe served with coconut chutney and tangy sambar.",
    price: "₹350",
    rating: 4.6
  },
  {
    id: "6",
    src: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=1200&auto=format&fit=crop",
    name: "Royal Biryani",
    category: "Signature Specials",
    description: "Fragrant basmati rice layered with tender meat, saffron, and aromatic spices.",
    price: "₹750",
    rating: 4.9
  },
  {
    id: "7",
    src: "https://images.unsplash.com/photo-1598023696144-88f5728a8d56?q=80&w=1200&auto=format&fit=crop",
    name: "Artisan Chocolate Dome",
    category: "Desserts",
    description: "Melt-in-mouth dark chocolate dome with a molten raspberry center.",
    price: "₹450",
    rating: 4.8
  },
  {
    id: "8",
    src: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=1200&auto=format&fit=crop",
    name: "Sunset Mocktail",
    category: "Beverages",
    description: "Refreshing blend of tropical fruits with a hint of mint and fizz.",
    price: "₹250",
    rating: 4.5
  },
  {
    id: "9",
    src: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?q=80&w=1200&auto=format&fit=crop",
    name: "Paneer Tikka",
    category: "Tandoori",
    description: "Soft cottage cheese cubes marinated in spiced yogurt and grilled.",
    price: "₹450",
    rating: 4.7
  }
];

const categories = ["All", "Signature Specials", "North Indian", "South Indian", "Chinese", "Tandoori", "Desserts", "Beverages"];

export function FoodGallery() {
  const [items, setItems] = useState<GalleryItem[]>(fallbackItems);
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const filteredItems = items.filter(item => activeCategory === "All" || item.category === activeCategory);

  // Esc key to close lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedImage(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section className="py-24 bg-[#0a0c0f] border-t border-ivory/5 relative overflow-hidden" id="gallery">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-luxury-gold/5 blur-[150px] pointer-events-none rounded-full translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        
        {/* Header Setup */}
        <div className="flex flex-col items-center text-center mb-16">
           <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[10px] uppercase tracking-[0.3em] text-luxury-gold mb-4 font-bold"
           >
              Culinary Art
           </motion.p>
           <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-serif text-4xl md:text-6xl text-ivory mb-6"
           >
              The <span className="text-luxury-gold italic">Gallery</span>
           </motion.h2>
           <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-ivory/60 max-w-2xl text-sm font-light leading-relaxed"
           >
              Explore our diverse specialties. Each dish is a masterpiece, crafted with passion and the finest ingredients to provide an unforgettable sensory experience.
           </motion.p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-[10px] sm:text-xs uppercase tracking-widest transition-all duration-300 backdrop-blur-sm border ${
                activeCategory === cat 
                ? "bg-luxury-gold text-black border-luxury-gold font-bold shadow-[0_0_15px_rgba(200,162,74,0.4)]" 
                : "bg-black/40 text-ivory/70 border-ivory/20 hover:border-luxury-gold/50 hover:text-ivory"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Grid Setup */}
        <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={item.id}
                className="break-inside-avoid relative group rounded-lg overflow-hidden cursor-pointer mb-6"
                onClick={() => setSelectedImage(item)}
              >
                {/* Image Placeholder Background */}
                <div className="bg-white/5 absolute inset-0"></div>
                <img referrerPolicy="no-referrer" 
                  src={item.src} 
                  alt={item.name} 
                  loading="lazy"
                  className="w-full h-auto object-cover block relative z-10 group-hover:scale-105 transition-transform duration-[2s] ease-out will-change-transform" 
                />
                
                {/* Hover Details overlay */}
                <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                   <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                     <p className="text-luxury-gold text-[10px] uppercase tracking-widest font-bold mb-2 flex items-center gap-2">
                       {item.category}
                     </p>
                     <h3 className="text-ivory font-serif text-xl sm:text-2xl tracking-tight leading-none mb-1">{item.name}</h3>
                   </div>
                   
                   {/* Center Eye Icon on hover */}
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 backdrop-blur-md border border-ivory/20 flex items-center justify-center opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-500 delay-100 text-ivory">
                      <ZoomIn size={20} />
                   </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredItems.length === 0 && (
           <div className="text-center py-20">
              <p className="text-ivory/50">No images found for this category.</p>
           </div>
        )}

      </div>

      {/* Lightbox / Fullscreen Image Viewer */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center p-4 lg:p-12 overflow-hidden"
          >
            {/* Close Button */}
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 lg:top-10 lg:right-10 w-12 h-12 bg-white/10 hover:bg-luxury-gold hover:text-black rounded-full flex items-center justify-center transition-colors border border-white/20 text-ivory z-[210]"
            >
              <X size={24} />
            </button>

            {/* Modal Content */}
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ delay: 0.1, type: "spring", damping: 25 }}
              className="w-full max-w-6xl flex flex-col lg:flex-row bg-[#0B0B0F] rounded-xl overflow-hidden shadow-2xl border border-ivory/10 max-h-full"
            >
               {/* Left: Huge Picture */}
               <div className="w-full lg:w-2/3 max-h-[50vh] lg:max-h-[85vh] bg-black relative flex items-center justify-center overflow-hidden">
                 <img 
                   referrerPolicy="no-referrer"
                   src={selectedImage.src} 
                   alt={selectedImage.name} 
                   className="w-full h-full object-contain"
                 />
               </div>

               {/* Right: Premium Details */}
               <div className="w-full lg:w-1/3 p-8 lg:p-12 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-ivory/10 max-h-[50vh] lg:max-h-full overflow-y-auto custom-scrollbar">
                 <span className="inline-block px-3 py-1 bg-luxury-gold/10 text-luxury-gold text-[10px] uppercase tracking-widest font-bold rounded-sm w-fit mb-6 border border-luxury-gold/20">
                    {selectedImage.category}
                 </span>
                 
                 <h2 className="font-serif text-3xl lg:text-4xl text-ivory mb-4 leading-tight">{selectedImage.name}</h2>
                 
                 <div className="flex items-center gap-2 mb-8">
                   <div className="flex text-luxury-gold">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} fill={i < Math.floor(selectedImage.rating) ? "currentColor" : "none"} className={i < Math.floor(selectedImage.rating) ? "" : "text-ivory/20"} />
                      ))}
                   </div>
                   <span className="text-xs text-ivory/60 font-medium">{selectedImage.rating} / 5.0</span>
                 </div>

                 <p className="text-ivory/70 text-sm leading-relaxed mb-10 font-light">
                   {selectedImage.description}
                 </p>

                 <div className="mt-auto">
                    <p className="text-[10px] uppercase tracking-widest text-ivory/40 mb-1">Price</p>
                    <p className="text-3xl text-luxury-gold font-serif">{selectedImage.price}</p>
                 </div>
               </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
