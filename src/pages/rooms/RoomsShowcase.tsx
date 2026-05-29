import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ROOMS_DATA } from "./data";
import { Star, Wifi, Coffee, Tv, Bath, Users, Maximize, Bed, Heart, ChevronRight, X, Info, Check } from "lucide-react";
import { useAuth } from "../../contexts/AuthContext";

export function RoomsShowcase() {
  const { requireAuth } = useAuth();
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedRoom, setSelectedRoom] = useState<any>(null);
  
  const categories = ["All", "Deluxe", "Premium", "Executive", "Family", "Suite"];
  
  const filteredRooms = activeCategory === "All" 
    ? ROOMS_DATA 
    : ROOMS_DATA.filter(room => room.category === activeCategory);

  const handleBookNow = (room: any) => {
    requireAuth(() => {
      // Proceed to booking logic
      alert(`Proceeding to book ${room.name}`);
    });
  };

  return (
    <section className="py-20 bg-black text-ivory border-t border-luxury-gold/5 relative min-h-screen">
      <div className="max-w-[1600px] mx-auto px-4 xlg:px-8">
        
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          
          {/* Sticky Filtering Sidebar */}
          <div className="w-full lg:w-1/4 xl:w-1/5">
             <div className="sticky top-32 bg-[#06080a] border border-ivory/10 p-6 rounded-sm">
                <h3 className="font-serif text-2xl text-ivory mb-6 pb-4 border-b border-ivory/10">Refine Search</h3>
                
                <div className="mb-8">
                  <h4 className="text-[10px] uppercase tracking-widest text-luxury-gold mb-4 font-semibold">Room Categories</h4>
                  <div className="flex flex-col space-y-2">
                    {categories.map(cat => (
                      <button 
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`text-left text-sm py-2 px-3 transition-colors flex justify-between items-center group ${activeCategory === cat ? 'bg-luxury-gold/10 text-luxury-gold border border-luxury-gold/20' : 'text-ivory/70 hover:text-ivory hover:bg-ivory/5 border border-transparent'}`}
                      >
                        {cat}
                        {activeCategory === cat && <ChevronRight size={14} />}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="text-[10px] uppercase tracking-widest text-luxury-gold mb-4 font-semibold">Price Range (Per Night)</h4>
                  <input type="range" min="2000" max="40000" className="w-full accent-luxury-gold mb-2" />
                  <div className="flex justify-between text-xs text-ivory/50">
                    <span>₹2,000</span>
                    <span>₹40,000+</span>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h4 className="text-[10px] uppercase tracking-widest text-luxury-gold mb-4 font-semibold">Popular Filters</h4>
                  <div className="flex flex-col space-y-3">
                    <label className="flex items-center space-x-3 cursor-pointer group">
                      <div className="w-4 h-4 border border-ivory/30 group-hover:border-luxury-gold flex items-center justify-center transition-colors"></div>
                      <span className="text-sm text-ivory/70 group-hover:text-ivory transition-colors">Free Breakfast</span>
                    </label>
                    <label className="flex items-center space-x-3 cursor-pointer group">
                      <div className="w-4 h-4 border border-ivory/30 group-hover:border-luxury-gold flex items-center justify-center transition-colors"></div>
                      <span className="text-sm text-ivory/70 group-hover:text-ivory transition-colors">Free Cancellation</span>
                    </label>
                    <label className="flex items-center space-x-3 cursor-pointer group">
                      <div className="w-4 h-4 border border-ivory/30 group-hover:border-luxury-gold flex items-center justify-center transition-colors"></div>
                      <span className="text-sm text-ivory/70 group-hover:text-ivory transition-colors">Bathtub</span>
                    </label>
                    <label className="flex items-center space-x-3 cursor-pointer group">
                      <div className="w-4 h-4 border border-ivory/30 group-hover:border-luxury-gold flex items-center justify-center transition-colors"></div>
                      <span className="text-sm text-ivory/70 group-hover:text-ivory transition-colors">City View</span>
                    </label>
                  </div>
                </div>

             </div>
          </div>

          {/* Rooms Grid */}
          <div className="w-full lg:w-3/4 xl:w-4/5">
            <div className="flex justify-between items-end mb-8 border-b border-ivory/10 pb-4">
              <div>
                <p className="text-sm text-ivory/60">Showing <span className="text-ivory font-medium">{filteredRooms.length}</span> luxury stays</p>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-[10px] uppercase tracking-widest text-ivory/50">Sort by:</span>
                <select className="bg-transparent text-sm text-ivory border-none outline-none cursor-pointer">
                  <option className="bg-black text-ivory">Recommended</option>
                  <option className="bg-black text-ivory">Price: Low to High</option>
                  <option className="bg-black text-ivory">Price: High to Low</option>
                  <option className="bg-black text-ivory">Highest Rated</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
              {filteredRooms.map((room, i) => (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  key={room.id}
                  className="bg-[#06080a] border border-ivory/10 group hover:border-luxury-gold/40 transition-all duration-500 overflow-hidden flex flex-col h-full"
                >
                   {/* Image Container */}
                   <div className="relative h-64 overflow-hidden w-full">
                      {room.discount > 0 && (
                        <div className="absolute top-4 left-4 z-20 bg-burgundy text-white text-[9px] uppercase tracking-widest px-3 py-1 font-bold shadow-lg">
                          Save {room.discount}%
                        </div>
                      )}
                      <div className="absolute top-4 right-4 z-20">
                         <button 
                           onClick={(e) => {
                             e.stopPropagation();
                             requireAuth(() => alert(`Added ${room.name} to wishlist`));
                           }}
                           className="w-8 h-8 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-ivory hover:text-luxury-gold hover:bg-black border border-ivory/20 transition-all duration-300"
                         >
                           <Heart size={14} />
                         </button>
                      </div>
                      <div className="absolute inset-0 bg-black/20 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
                      <img referrerPolicy="no-referrer" src={room.image} alt={room.name} className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" />
                   </div>

                   {/* Content Block */}
                   <div className="p-6 flex flex-col flex-grow">
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex items-center bg-luxury-gold/10 px-2 py-1 rounded-sm border border-luxury-gold/20">
                          <Star size={10} className="text-luxury-gold fill-luxury-gold mr-1" />
                          <span className="text-[10px] font-bold text-luxury-gold">{room.rating} <span className="font-normal text-luxury-gold/70">({room.reviews})</span></span>
                        </div>
                      </div>
                      
                      <h3 className="font-serif text-2xl text-ivory mb-2 group-hover:text-luxury-gold transition-colors">{room.name}</h3>
                      <p className="text-[10px] uppercase tracking-widest text-ivory/50 mb-4">{room.category}</p>

                      {/* Specs Row */}
                      <div className="grid grid-cols-2 gap-y-3 gap-x-2 text-[11px] text-ivory/70 border-y border-ivory/10 py-4 mb-4">
                         <div className="flex items-center"><Users size={12} className="mr-2 text-luxury-gold" /> {room.capacity}</div>
                         <div className="flex items-center"><Maximize size={12} className="mr-2 text-luxury-gold" /> {room.size}</div>
                         <div className="flex items-center col-span-2"><Bed size={12} className="mr-2 text-luxury-gold" /> {room.bed}</div>
                      </div>

                      <p className="text-sm font-light text-ivory/60 line-clamp-2 mb-6">
                        {room.desc}
                      </p>

                      <div className="mt-auto">
                        <div className="flex justify-between items-end mb-4">
                           <div className="flex flex-col">
                             <span className="text-[9px] uppercase tracking-widest text-ivory/50 mb-1">Starting from</span>
                             <div className="flex items-end">
                               {room.discount > 0 && <span className="text-sm text-ivory/40 line-through mr-2">₹{room.price + (room.price * room.discount / 100)}</span>}
                               <span className="text-2xl font-serif text-luxury-gold font-medium leading-none">₹{room.price}</span>
                               <span className="text-[10px] text-ivory/50 ml-1 mb-1">/night</span>
                             </div>
                           </div>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                           <button 
                              onClick={() => setSelectedRoom(room)}
                              className="py-3 border border-ivory/20 text-ivory text-[10px] uppercase tracking-widest font-semibold hover:border-luxury-gold hover:text-luxury-gold transition-colors text-center"
                           >
                             View Details
                           </button>
                           <button 
                             onClick={() => handleBookNow(room)}
                             className="py-3 bg-luxury-gold text-black text-[10px] uppercase tracking-widest font-bold hover:bg-ivory transition-colors text-center"
                           >
                             Book Now
                           </button>
                        </div>
                      </div>
                   </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Room Details Modal */}
      <AnimatePresence>
        {selectedRoom && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               onClick={() => setSelectedRoom(null)}
               className="absolute inset-0 bg-black/90 backdrop-blur-sm cursor-pointer"
            ></motion.div>
            
            <motion.div 
               initial={{ opacity: 0, scale: 0.95, y: 20 }}
               animate={{ opacity: 1, scale: 1, y: 0 }}
               exit={{ opacity: 0, scale: 0.95, y: 20 }}
               transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
               className="relative w-full max-w-6xl max-h-[90vh] bg-[#06080a] border border-luxury-gold/20 flex flex-col md:flex-row overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)] z-10"
            >
               {/* Close Button */}
               <button 
                  onClick={() => setSelectedRoom(null)}
                  className="absolute top-4 right-4 z-50 w-10 h-10 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center text-ivory hover:text-luxury-gold hover:bg-black transition-colors"
               >
                 <X size={20} />
               </button>

               {/* Left: Image Gallery (Just major image for now) */}
               <div className="w-full md:w-1/2 relative h-[40vh] md:h-full min-h-[300px]">
                  <img referrerPolicy="no-referrer" src={selectedRoom.image} alt={selectedRoom.name} className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black via-black/60 to-transparent">
                     <div className="flex items-center space-x-2">
                       <span className="bg-luxury-gold text-black text-[9px] uppercase tracking-widest font-bold px-3 py-1">{selectedRoom.category}</span>
                       <span className="bg-black/50 backdrop-blur-md text-ivory text-[9px] uppercase tracking-widest border border-ivory/20 px-3 py-1 flex items-center">
                          <Star size={10} className="text-luxury-gold fill-luxury-gold mr-1" /> {selectedRoom.rating} Rating
                       </span>
                     </div>
                  </div>
               </div>

               {/* Right: Details Container */}
               <div className="w-full md:w-1/2 overflow-y-auto hide-scrollbar p-8 md:p-12">
                  <h2 className="font-serif text-4xl text-ivory mb-2">{selectedRoom.name}</h2>
                  <p className="text-sm font-light text-ivory/60 leading-relaxed mb-8">{selectedRoom.desc}</p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-10 border-y border-ivory/10 py-6">
                     <div className="flex flex-col">
                       <span className="text-[9px] uppercase tracking-widest text-luxury-gold mb-2">Size</span>
                       <span className="text-sm text-ivory font-medium flex items-center"><Maximize size={14} className="mr-2 text-ivory/50"/> {selectedRoom.size}</span>
                     </div>
                     <div className="flex flex-col">
                       <span className="text-[9px] uppercase tracking-widest text-luxury-gold mb-2">Capacity</span>
                       <span className="text-sm text-ivory font-medium flex items-center"><Users size={14} className="mr-2 text-ivory/50"/> {selectedRoom.capacity}</span>
                     </div>
                     <div className="flex flex-col">
                       <span className="text-[9px] uppercase tracking-widest text-luxury-gold mb-2">Bed Type</span>
                       <span className="text-sm text-ivory font-medium flex items-center"><Bed size={14} className="mr-2 text-ivory/50"/> {selectedRoom.bed}</span>
                     </div>
                  </div>

                  <div className="mb-10">
                     <h4 className="text-lg font-serif text-ivory mb-6">Premium Amenities</h4>
                     <div className="grid grid-cols-2 gap-4">
                       {selectedRoom.amenities.map((amenity: string, idx: number) => (
                         <div key={idx} className="flex items-center text-sm font-light text-ivory/70">
                           <Check size={14} className="text-luxury-gold mr-3 flex-shrink-0" />
                           {amenity}
                         </div>
                       ))}
                     </div>
                  </div>

                  <div className="bg-black/50 border border-luxury-gold/10 p-6 mb-8">
                     <div className="flex justify-between items-end mb-6 border-b border-ivory/10 pb-4">
                        <div className="flex flex-col">
                          <span className="text-[10px] uppercase tracking-widest text-ivory/60 mb-1">Total Price</span>
                          <span className="text-4xl font-serif text-luxury-gold">₹{selectedRoom.price}</span>
                        </div>
                        <div className="text-right">
                          <span className="text-[10px] uppercase tracking-widest text-ivory/50 block">Excluding Taxes & Fees</span>
                          <span className="text-[10px] uppercase tracking-widest text-ivory/50 block">Per Night</span>
                        </div>
                     </div>
                     <button onClick={() => handleBookNow(selectedRoom)} className="w-full py-4 bg-luxury-gold text-black text-[12px] uppercase tracking-[0.2em] font-bold hover:bg-ivory transition-colors">
                        Proceed to Booking
                     </button>
                  </div>
               </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
