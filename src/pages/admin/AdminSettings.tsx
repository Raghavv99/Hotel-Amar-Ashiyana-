import { useState } from "react";
import { Save, Plus } from "lucide-react";

export function AdminSettings() {
  const [activeTab, setActiveTab] = useState("general");

  return (
    <div className="space-y-6 max-w-5xl">
       <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
         <div>
            <h1 className="font-serif text-3xl text-ivory">System Settings</h1>
            <p className="text-xs text-ivory/50 mt-1">Configure global application parameters</p>
         </div>
         <button className="flex items-center px-6 py-2 bg-luxury-gold text-black text-xs uppercase tracking-widest font-bold rounded hover:bg-ivory transition-colors">
            <Save size={16} className="mr-2" /> Save Changes
         </button>
      </div>

      <div className="flex border-b border-ivory/10 overflow-x-auto custom-scrollbar pb-1 gap-6">
         {["general", "roles", "integrations", "security"].map(tab => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-xs uppercase tracking-widest font-bold pb-3 border-b-2 transition-colors whitespace-nowrap ${
                activeTab === tab ? "border-luxury-gold text-luxury-gold" : "border-transparent text-ivory/50 hover:text-ivory"
              }`}
            >
              {tab}
            </button>
         ))}
      </div>

      {activeTab === "general" && (
        <div className="space-y-8 bg-[#0a0c0f] border border-ivory/10 p-6 sm:p-8 rounded">
           
           <div>
             <h3 className="font-serif text-xl border-b border-ivory/5 pb-2 mb-6">Hotel Information</h3>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-ivory/50 mb-2">Hotel Name</label>
                  <input type="text" defaultValue="Hotel Amar Ashiyana" className="w-full bg-black border border-ivory/10 rounded px-4 py-3 text-sm text-ivory focus:border-luxury-gold outline-none" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-ivory/50 mb-2">Contact Email</label>
                  <input type="email" defaultValue="admin@amarashiyana.com" className="w-full bg-black border border-ivory/10 rounded px-4 py-3 text-sm text-ivory focus:border-luxury-gold outline-none" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-ivory/50 mb-2">Reservation Phone</label>
                  <input type="text" defaultValue="+91 07520957011" className="w-full bg-black border border-ivory/10 rounded px-4 py-3 text-sm text-ivory focus:border-luxury-gold outline-none" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-ivory/50 mb-2">WhatsApp Number</label>
                  <input type="text" defaultValue="+91 07520957011" className="w-full bg-black border border-ivory/10 rounded px-4 py-3 text-sm text-ivory focus:border-luxury-gold outline-none" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-xs uppercase tracking-widest text-ivory/50 mb-2">Address</label>
                  <input type="text" defaultValue="Rampura Road" className="w-full bg-black border border-ivory/10 rounded px-4 py-3 text-sm text-ivory focus:border-luxury-gold outline-none" />
                </div>
             </div>
           </div>

           <div>
             <h3 className="font-serif text-xl border-b border-ivory/5 pb-2 mb-6">Social Media</h3>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-ivory/50 mb-2">Instagram URL</label>
                  <input type="text" placeholder="https://instagram.com/..." className="w-full bg-black border border-ivory/10 rounded px-4 py-3 text-sm text-ivory focus:border-luxury-gold outline-none" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-ivory/50 mb-2">Facebook URL</label>
                  <input type="text" placeholder="https://facebook.com/..." className="w-full bg-black border border-ivory/10 rounded px-4 py-3 text-sm text-ivory focus:border-luxury-gold outline-none" />
                </div>
             </div>
           </div>
        </div>
      )}

      {activeTab === "roles" && (
         <div className="bg-[#0a0c0f] border border-ivory/10 p-6 sm:p-8 rounded">
            <div className="flex justify-between items-center mb-6">
               <h3 className="font-serif text-xl text-ivory">Role Management</h3>
               <button className="flex items-center px-4 py-2 bg-luxury-gold/10 text-luxury-gold text-xs uppercase tracking-widest font-bold rounded border border-luxury-gold/30 hover:bg-luxury-gold hover:text-black transition-colors">
                 <Plus size={16} className="mr-2" /> Create Role
               </button>
            </div>
            <div className="grid grid-cols-1 gap-4">
               {[
                 { name: "Super Admin", desc: "Full access to all modules and system settings." },
                 { name: "Hotel Manager", desc: "Can manage rooms, bookings, and users but no settings access." },
                 { name: "Receptionist", desc: "Can view and update bookings, view rooms." },
                 { name: "Restaurant Manager", desc: "Manage restaurant reservations and menu." }
               ].map(role => (
                 <div key={role.name} className="p-4 border border-ivory/10 bg-black rounded flex justify-between items-center">
                    <div>
                       <h4 className="text-ivory font-medium">{role.name}</h4>
                       <p className="text-xs text-ivory/50 mt-1">{role.desc}</p>
                    </div>
                    <button className="text-xs text-luxury-gold hover:underline">Edit Permissions</button>
                 </div>
               ))}
            </div>
         </div>
      )}

    </div>
  );
}
