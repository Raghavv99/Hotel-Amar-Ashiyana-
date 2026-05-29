import { useState, useEffect } from "react";
import { Plus, Edit2, Trash2, Search, Filter, CheckCircle, XCircle } from "lucide-react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../lib/firebase";

export function AdminBookings() {
  const [bookings, setBookings] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const snapshot = await getDocs(collection(db, "room_reservations"));
        const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        // Mock some data if empty to show the premium UI
        if (data.length === 0) {
           setBookings([
             { id: "BOK-20891", customerName: "Vikram Malhotra", customerPhone: "+91 9876543210", roomType: "Royal Suite", checkIn: "2026-06-15", checkOut: "2026-06-18", status: "pending", amount: 36000 },
             { id: "BOK-20892", customerName: "Ananya Desai", customerPhone: "+91 9876543211", roomType: "Deluxe Heritage", checkIn: "2026-06-10", checkOut: "2026-06-12", status: "confirmed", amount: 11000 },
           ]);
        } else {
           setBookings(data);
        }
        setError(null);
      } catch (e: any) {
        console.error(e);
        if (e.code === 'permission-denied') {
          setError('Permission denied to read room_reservations. Check your Firebase rules.');
        } else {
          setError(e.message || 'Failed to fetch bookings.');
        }
      } finally {
        setLoading(false);
      }
    };
    fetchBookings();
  }, []);

  if (loading) {
    return <div className="p-8 text-center text-ivory/50">Loading bookings...</div>;
  }

  return (
    <div className="space-y-6">
      
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
         <div>
            <h1 className="font-serif text-3xl text-ivory">Bookings & Reservations</h1>
            <p className="text-xs text-ivory/50 mt-1">Manage guest stays, payments, and approvals</p>
         </div>
      </div>

      {error && (
        <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-4 rounded text-sm mb-6">
          <p className="font-semibold mb-1">Database Error</p>
          <p>{error}</p>
        </div>
      )}

      <div className="bg-[#0a0c0f] border border-ivory/10 rounded overflow-hidden">
         <div className="p-4 border-b border-ivory/5 flex flex-col sm:flex-row gap-4 justify-between">
            <div className="relative w-full sm:w-64">
               <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-ivory/40" />
               <input 
                 type="text" 
                 placeholder="Search guest or ID..." 
                 className="w-full bg-black/50 border border-ivory/10 rounded pl-10 pr-4 py-2 text-sm text-ivory outline-none focus:border-luxury-gold transition-colors"
               />
            </div>
            <div className="flex gap-2">
               <button className="px-4 py-2 bg-luxury-gold/10 text-luxury-gold text-xs uppercase tracking-widest font-bold rounded border border-luxury-gold/30">All</button>
               <button className="px-4 py-2 bg-white/5 text-ivory/70 text-xs uppercase tracking-widest font-bold rounded border border-ivory/10 hover:bg-white/10">Pending</button>
               <button className="px-4 py-2 bg-white/5 text-ivory/70 text-xs uppercase tracking-widest font-bold rounded border border-ivory/10 hover:bg-white/10">Confirmed</button>
            </div>
         </div>

         <div className="overflow-x-auto">
            <table className="w-full text-left text-sm whitespace-nowrap">
               <thead className="bg-[#06080a] text-ivory/50 text-xs uppercase tracking-wider">
                  <tr>
                     <th className="px-6 py-4 font-normal">Booking ID / Guest</th>
                     <th className="px-6 py-4 font-normal">Contact</th>
                     <th className="px-6 py-4 font-normal">Stay Details</th>
                     <th className="px-6 py-4 font-normal">Amount</th>
                     <th className="px-6 py-4 font-normal">Status</th>
                     <th className="px-6 py-4 font-normal text-right">Actions</th>
                  </tr>
               </thead>
               <tbody className="divide-y divide-ivory/5">
                  {bookings.map((booking, idx) => (
                    <tr key={booking.id || idx} className="hover:bg-white/[0.02] transition-colors">
                       <td className="px-6 py-4">
                          <div className="font-medium text-ivory">{booking.customerName || "Web Guest"}</div>
                          <div className="text-xs text-ivory/50 font-mono mt-1">{booking.id}</div>
                       </td>
                       <td className="px-6 py-4 text-ivory/70">
                          <div>{booking.customerPhone}</div>
                          <div className="text-xs text-ivory/40">{booking.customerEmail || "-"}</div>
                       </td>
                       <td className="px-6 py-4">
                          <div className="text-ivory">{booking.roomType}</div>
                          <div className="text-xs text-ivory/50 mt-1">{booking.checkIn} to {booking.checkOut}</div>
                       </td>
                       <td className="px-6 py-4 text-luxury-gold">₹ {booking.amount ? booking.amount.toLocaleString() : "TBD"}</td>
                       <td className="px-6 py-4">
                          <span className={`px-3 py-1 rounded-full text-[10px] uppercase tracking-wider ${
                            booking.status === 'confirmed' ? 'bg-emerald-500/10 text-emerald-400' :
                            booking.status === 'pending' ? 'bg-yellow-500/10 text-yellow-400' :
                            'bg-red-500/10 text-red-400'
                          }`}>
                            {booking.status || 'Pending'}
                          </span>
                       </td>
                       <td className="px-6 py-4 text-right">
                          <div className="flex items-center justify-end gap-2">
                             <button className="p-2 text-emerald-400/70 hover:text-emerald-400 bg-emerald-400/5 hover:bg-emerald-400/10 transition-colors rounded" title="Approve">
                               <CheckCircle size={16} />
                             </button>
                             <button className="p-2 text-red-400/70 hover:text-red-400 bg-red-400/5 hover:bg-red-400/10 transition-colors rounded" title="Reject">
                               <XCircle size={16} />
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
