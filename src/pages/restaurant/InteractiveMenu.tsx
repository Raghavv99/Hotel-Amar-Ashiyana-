import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, Flame, Leaf, Award } from "lucide-react";

export function InteractiveMenu() {
  const categories = [
    "Signature Specials", "North Indian", "Tandoori", "Biryani Collection", "Vegetarian Specials", "Desserts", "Beverages"
  ];
  const [activeCategory, setActiveCategory] = useState("Signature Specials");
  const [searchQuery, setSearchQuery] = useState("");

  // Mock Menu Data
  const menuItems = [
    { name: "Shahi Paneer", desc: "Cottage cheese cooked in a rich and creamy tomato-cashew gravy.", price: "₹350", category: "Signature Specials", type: "veg", rating: "4.9", isHit: true, spice: 1, image: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?w=500&auto=format&fit=crop" },
    { name: "Dal Makhani", desc: "Slow-cooked black lentils enriched with cream and butter, simmered overnight.", price: "₹280", category: "Signature Specials", type: "veg", rating: "4.8", isHit: true, spice: 1, image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=500&auto=format&fit=crop" },
    { name: "Paneer Lababdar", desc: "Soft paneer cubes in a luscious, slightly tangy and sweet onion-tomato gravy.", price: "₹340", category: "North Indian", type: "veg", rating: "4.7", isHit: false, spice: 2, image: "https://images.unsplash.com/photo-1589302168068-964664d93cb0?w=500&auto=format&fit=crop" },
    { name: "Tandoori Mushroom", desc: "Marinated mushrooms roasted in tandoor with Indian spices.", price: "₹290", category: "Tandoori", type: "veg", rating: "4.6", isHit: false, spice: 2, image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=500&auto=format&fit=crop" },
    { name: "Veg Special Biryani", desc: "Aromatic basmati rice cooked with fresh vegetables and saffron.", price: "₹250", category: "Biryani Collection", type: "veg", rating: "4.5", isHit: true, spice: 2, image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=500&auto=format&fit=crop" },
    { name: "Gulab Jamun", desc: "Deep-fried milk dumplings soaked in cardamom flavored sugar syrup.", price: "₹120", category: "Desserts", type: "veg", rating: "4.8", isHit: false, spice: 0, image: "https://images.unsplash.com/photo-1598023696144-88f5728a8d56?w=500&auto=format&fit=crop" },
    { name: "Fresh Lime Soda", desc: "Refreshing sweet or salted lime drink.", price: "₹90", category: "Beverages", type: "veg", rating: "4.5", isHit: false, spice: 0, image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=500&auto=format&fit=crop" }
  ];

  const filteredItems = menuItems.filter(item => 
    (activeCategory === "All" || item.category === activeCategory) &&
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="menu" className="py-24 bg-black border-t border-ivory/5 relative min-h-screen">
      <div className="max-w-[1400px] mx-auto px-4 relative z-10">
        
        <div className="text-center mb-16">
          <p className="text-[10px] uppercase tracking-widest text-luxury-gold mb-4 font-semibold">Culinary Excellence</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-ivory mb-6">Discover Our <span className="text-luxury-gold italic">Menu</span></h2>
        </div>

        {/* Menu Controls */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6 bg-[#06080a] p-4 md:p-6 border border-ivory/10">
           
           {/* Categories */}
           <div className="w-full md:w-auto flex overflow-x-auto pb-4 md:pb-0 scrollbar-hide space-x-2 lg:space-x-4">
              <button 
                  onClick={() => setActiveCategory("All")}
                  className={`whitespace-nowrap px-4 py-2 text-[10px] uppercase tracking-widest font-semibold transition-all border ${activeCategory === "All" ? 'border-luxury-gold text-luxury-gold bg-luxury-gold/5' : 'border-transparent text-ivory/60 hover:text-ivory'}`}
              >
                  All Menu
              </button>
              {categories.map(cat => (
                 <button 
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`whitespace-nowrap px-4 py-2 text-[10px] uppercase tracking-widest font-semibold transition-all border ${activeCategory === cat ? 'border-luxury-gold text-luxury-gold bg-luxury-gold/5' : 'border-transparent text-ivory/60 hover:text-ivory'}`}
                 >
                    {cat}
                 </button>
              ))}
           </div>

           {/* Search */}
           <div className="w-full md:w-64 relative">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-ivory/40" />
              <input 
                 type="text" 
                 placeholder="Search dishes..."
                 value={searchQuery}
                 onChange={(e) => setSearchQuery(e.target.value)}
                 className="w-full bg-black/50 border border-ivory/10 focus:border-luxury-gold text-ivory text-xs px-10 py-3 outline-none transition-colors"
              />
           </div>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-x-12 gap-y-10">
           <AnimatePresence mode="popLayout">
              {filteredItems.length > 0 ? filteredItems.map((item, idx) => (
                 <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    className="group flex flex-col sm:flex-row items-center sm:items-start gap-6 border-b border-ivory/5 pb-8 hover:border-luxury-gold/30 transition-colors"
                 >
                    {/* Image */}
                    <div className="w-full h-56 sm:w-40 sm:h-40 flex-shrink-0 rounded-lg overflow-hidden border border-ivory/10 shadow-lg relative">
                       <img referrerPolicy="no-referrer" src={item.image} alt={item.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    </div>

                    {/* Details */}
                    <div className="flex-1 w-full text-center sm:text-left">
                       <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start mb-2 gap-2 sm:gap-0">
                          <div className="flex items-center space-x-3">
                             <div className={`w-3 h-3 flex items-center justify-center border ${item.type === 'veg' ? 'border-green-600' : 'border-red-600'} p-[2px]`}>
                                <div className={`w-1.5 h-1.5 rounded-full ${item.type === 'veg' ? 'bg-green-600' : 'bg-red-600'}`}></div>
                             </div>
                             <h3 className="font-serif text-xl sm:text-2xl text-ivory group-hover:text-luxury-gold transition-colors">{item.name}</h3>
                          </div>
                          <span className="font-serif text-xl text-luxury-gold">{item.price}</span>
                       </div>
                       
                       <p className="text-ivory/60 text-xs font-light leading-relaxed mb-3 line-clamp-2">{item.desc}</p>
                       
                       <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 text-[10px] uppercase tracking-widest font-semibold">
                          {item.isHit && (
                             <span className="flex items-center text-luxury-gold bg-luxury-gold/10 px-2 py-1">
                                <Award size={12} className="mr-1" /> Chef's Recommends
                             </span>
                          )}
                          {item.spice > 0 && (
                             <span className="flex items-center text-orange-500 bg-orange-500/10 px-2 py-1">
                                {Array(item.spice).fill(<Flame size={12} className="mx-[1px]" />)}
                             </span>
                          )}
                       </div>
                    </div>
                 </motion.div>
              )) : (
                <div className="col-span-1 md:col-span-2 py-20 text-center text-ivory/50">
                  <p>No dishes found matching your criteria.</p>
                </div>
              )}
           </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
