import { useState, useEffect } from "react";
import { Plus, Edit2, Trash2, Search, Filter } from "lucide-react";

// Using mock data based on our initial ROOMS_DATA just to visualize
const initialRooms = [
  { id: "1", name: "Royal Suite", type: "Suite", price: 12000, status: "Available", capacity: 4 },
  { id: "2", name: "Premium Executive", type: "Executive", price: 8500, status: "Occupied", capacity: 2 },
  { id: "3", name: "Deluxe Heritage", type: "Deluxe", price: 5500, status: "Available", capacity: 2 },
  { id: "4", name: "Family Connecting", type: "Family", price: 9500, status: "Maintenance", capacity: 6 },
];

export function AdminRooms() {
  const [rooms, setRooms] = useState(initialRooms);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredRooms = rooms.filter(room => room.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="space-y-6">
      
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
         <div>
            <h1 className="font-serif text-3xl text-ivory">Room Management</h1>
            <p className="text-xs text-ivory/50 mt-1">Manage hotel rooms, pricing, and availability</p>
         </div>
         <button className="flex items-center px-4 py-2 bg-luxury-gold text-black text-xs uppercase tracking-widest font-bold rounded hover:bg-ivory transition-colors">
            <Plus size={16} className="mr-2" /> Add New Room
         </button>
      </div>

      <div className="bg-[#0a0c0f] border border-ivory/10 rounded overflow-hidden">
         <div className="p-4 border-b border-ivory/5 flex flex-col sm:flex-row gap-4 justify-between">
            <div className="relative w-full sm:w-64">
               <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-ivory/40" />
               <input 
                 type="text" 
                 placeholder="Search rooms..." 
                 value={searchTerm}
                 onChange={(e) => setSearchTerm(e.target.value)}
                 className="w-full bg-black/50 border border-ivory/10 rounded pl-10 pr-4 py-2 text-sm text-ivory outline-none focus:border-luxury-gold transition-colors"
               />
            </div>
            <button className="flex items-center px-4 py-2 border border-ivory/10 rounded text-sm text-ivory/70 hover:bg-white/5 transition-colors">
               <Filter size={16} className="mr-2" /> Filter Details
            </button>
         </div>

         <div className="overflow-x-auto">
            <table className="w-full text-left text-sm whitespace-nowrap">
               <thead className="bg-[#06080a] text-ivory/50 text-xs uppercase tracking-wider">
                  <tr>
                     <th className="px-6 py-4 font-normal">Room Details</th>
                     <th className="px-6 py-4 font-normal">Type / Category</th>
                     <th className="px-6 py-4 font-normal">Capacity</th>
                     <th className="px-6 py-4 font-normal">Base Price (₹)</th>
                     <th className="px-6 py-4 font-normal">Status</th>
                     <th className="px-6 py-4 font-normal text-right">Actions</th>
                  </tr>
               </thead>
               <tbody className="divide-y divide-ivory/5">
                  {filteredRooms.map((room) => (
                    <tr key={room.id} className="hover:bg-white/[0.02] transition-colors">
                       <td className="px-6 py-4">
                          <div className="font-medium text-ivory">{room.name}</div>
                          <div className="text-xs text-ivory/50">Room #{200 + parseInt(room.id)}</div>
                       </td>
                       <td className="px-6 py-4 text-ivory/70">{room.type}</td>
                       <td className="px-6 py-4 text-ivory/70">{room.capacity} Guests</td>
                       <td className="px-6 py-4 text-luxury-gold">₹ {room.price.toLocaleString()}</td>
                       <td className="px-6 py-4">
                          <span className={`px-3 py-1 rounded-full text-[10px] uppercase tracking-wider ${
                            room.status === 'Available' ? 'bg-emerald-500/10 text-emerald-400' :
                            room.status === 'Occupied' ? 'bg-blue-500/10 text-blue-400' :
                            'bg-red-500/10 text-red-400'
                          }`}>
                            {room.status}
                          </span>
                       </td>
                       <td className="px-6 py-4 text-right">
                          <div className="flex items-center justify-end gap-2">
                             <button className="p-2 text-ivory/50 hover:text-luxury-gold transition-colors" title="Edit">
                               <Edit2 size={16} />
                             </button>
                             <button className="p-2 text-ivory/50 hover:text-red-400 transition-colors" title="Delete">
                               <Trash2 size={16} />
                             </button>
                          </div>
                       </td>
                    </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </div>
    </div>
  );
}
