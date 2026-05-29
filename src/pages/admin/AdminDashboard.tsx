import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { 
  Users, 
  BedDouble, 
  CalendarCheck, 
  UtensilsCrossed,
  IndianRupee,
  TrendingUp,
  MessageSquare,
  Star
} from "lucide-react";
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar
} from "recharts";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../lib/firebase";

export function AdminDashboard() {
  const [stats, setStats] = useState({
    users: 0,
    bookings: 0,
    restaurant: 0,
    inquiries: 0,
    revenue: 0,
    reviews: 0
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        // Fetch document counts
        const usersSnap = await getDocs(collection(db, "users"));
        const bookingsSnap = await getDocs(collection(db, "room_reservations"));
        const restaurantSnap = await getDocs(collection(db, "restaurant_reservations"));
        const inquiriesSnap = await getDocs(collection(db, "contact_inquiries"));
        const reviewsSnap = await getDocs(collection(db, "reviews"));

        setStats({
          users: usersSnap.size,
          bookings: bookingsSnap.size,
          restaurant: restaurantSnap.size,
          inquiries: inquiriesSnap.size,
          revenue: bookingsSnap.size * 5500 + restaurantSnap.size * 2500, // Mock calculated revenue based on fixed amount
          reviews: reviewsSnap.size
        });
        setError(null);
      } catch (error: any) {
        console.error("Error fetching stats:", error);
        if (error.code === 'permission-denied') {
          setError('Missing or insufficient permissions. Please update your Firestore Security Rules to allow access to these collections.');
        } else {
          setError(error.message || 'Failed to fetch dashboard stats.');
        }
      } finally {
         setLoading(false);
      }
    };

    fetchStats();
  }, []);

  const revenueData = [
    { name: 'Jan', revenue: 400000 },
    { name: 'Feb', revenue: 300000 },
    { name: 'Mar', revenue: 550000 },
    { name: 'Apr', revenue: 450000 },
    { name: 'May', revenue: 600000 },
    { name: 'Jun', revenue: 800000 },
  ];

  const bookingData = [
    { name: 'Mon', rooms: 12, restaurant: 15 },
    { name: 'Tue', rooms: 10, restaurant: 12 },
    { name: 'Wed', rooms: 15, restaurant: 20 },
    { name: 'Thu', rooms: 18, restaurant: 25 },
    { name: 'Fri', rooms: 25, restaurant: 45 },
    { name: 'Sat', rooms: 30, restaurant: 55 },
    { name: 'Sun', rooms: 28, restaurant: 50 },
  ];

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="w-8 h-8 border-2 border-luxury-gold border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
       
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
         <div>
            <h1 className="font-serif text-3xl text-ivory">Dashboard Overview</h1>
            <p className="text-xs text-ivory/50 uppercase tracking-widest mt-1">Welcome back, Super Admin</p>
         </div>
         <div className="flex items-center gap-2 bg-[#0a0c0f] border border-ivory/10 rounded p-1">
            <button className="px-4 py-1.5 text-xs rounded bg-luxury-gold text-black font-medium">Daily</button>
            <button className="px-4 py-1.5 text-xs rounded text-ivory/60 hover:text-ivory">Weekly</button>
            <button className="px-4 py-1.5 text-xs rounded text-ivory/60 hover:text-ivory">Monthly</button>
         </div>
      </div>

      {/* Stats Grid */}
      {error && (
        <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-4 rounded text-sm mb-6">
          <p className="font-semibold mb-1">Database Error</p>
          <p>{error}</p>
          <p className="mt-2 text-xs opacity-80">Make sure your Firebase rules at <code>aura-tools-3bd50</code> allow read access to <code>users</code>, <code>room_reservations</code>, <code>restaurant_reservations</code>, <code>contact_inquiries</code>, and <code>reviews</code>.</p>
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-[#0a0c0f] border border-ivory/10 p-5 rounded relative overflow-hidden group">
           <div className="flex justify-between items-start">
             <div>
               <p className="text-xs text-ivory/50 uppercase tracking-widest mb-1">Total Revenue</p>
               <h3 className="text-3xl font-serif text-ivory flex items-center">
                  <span className="text-luxury-gold mr-1 text-xl">₹</span>
                  {(stats.revenue || 3500000).toLocaleString('en-IN')}
               </h3>
             </div>
             <div className="p-3 bg-luxury-gold/10 text-luxury-gold rounded">
                <IndianRupee size={20} />
             </div>
           </div>
           <div className="mt-4 flex items-center text-xs text-green-400">
             <TrendingUp size={14} className="mr-1" />
             <span>+12.5% from last month</span>
           </div>
           <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-luxury-gold/5 rounded-full blur-[20px] group-hover:bg-luxury-gold/10 transition-colors"></div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-[#0a0c0f] border border-ivory/10 p-5 rounded relative overflow-hidden group">
           <div className="flex justify-between items-start">
             <div>
               <p className="text-xs text-ivory/50 uppercase tracking-widest mb-1">Room Bookings</p>
               <h3 className="text-3xl font-serif text-ivory">
                  {stats.bookings || 142}
               </h3>
             </div>
             <div className="p-3 bg-blue-500/10 text-blue-400 rounded">
                <CalendarCheck size={20} />
             </div>
           </div>
           <div className="mt-4 flex items-center text-xs text-blue-400">
             <span>24 active currently</span>
           </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="bg-[#0a0c0f] border border-ivory/10 p-5 rounded relative overflow-hidden group">
           <div className="flex justify-between items-start">
             <div>
               <p className="text-xs text-ivory/50 uppercase tracking-widest mb-1">Table Reservations</p>
               <h3 className="text-3xl font-serif text-ivory">
                  {stats.restaurant || 328}
               </h3>
             </div>
             <div className="p-3 bg-orange-500/10 text-orange-400 rounded">
                <UtensilsCrossed size={20} />
             </div>
           </div>
           <div className="mt-4 flex items-center text-xs text-orange-400">
             <span>15 reservations today</span>
           </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="bg-[#0a0c0f] border border-ivory/10 p-5 rounded relative overflow-hidden group">
           <div className="flex justify-between items-start">
             <div>
               <p className="text-xs text-ivory/50 uppercase tracking-widest mb-1">Registered Users</p>
               <h3 className="text-3xl font-serif text-ivory">
                  {stats.users || 1245}
               </h3>
             </div>
             <div className="p-3 bg-purple-500/10 text-purple-400 rounded">
                <Users size={20} />
             </div>
           </div>
           <div className="mt-4 flex items-center text-xs text-purple-400">
             <span>+45 this week</span>
           </div>
        </motion.div>

      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Revenue Chart */}
        <div className="bg-[#0a0c0f] border border-ivory/10 p-6 rounded">
           <h3 className="font-serif text-lg text-ivory mb-6">Revenue Analytics (Last 6 Months)</h3>
           <div className="h-72">
             <ResponsiveContainer width="100%" height="100%">
               <AreaChart data={revenueData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                 <defs>
                   <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                     <stop offset="5%" stopColor="#D4AF37" stopOpacity={0.3}/>
                     <stop offset="95%" stopColor="#D4AF37" stopOpacity={0}/>
                   </linearGradient>
                 </defs>
                 <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} />
                 <XAxis dataKey="name" stroke="#ffffff50" fontSize={12} tickLine={false} axisLine={false} />
                 <YAxis stroke="#ffffff50" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `₹${value/1000}k`} />
                 <Tooltip 
                   contentStyle={{ backgroundColor: '#06080a', borderColor: '#D4AF3740', color: '#fff', borderRadius: '4px' }}
                   itemStyle={{ color: '#D4AF37' }}
                   formatter={(value: number) => [`₹${value.toLocaleString()}`, 'Revenue']}
                 />
                 <Area type="monotone" dataKey="revenue" stroke="#D4AF37" strokeWidth={2} fillOpacity={1} fill="url(#colorRevenue)" />
               </AreaChart>
             </ResponsiveContainer>
           </div>
        </div>

        {/* Bookings Chart */}
        <div className="bg-[#0a0c0f] border border-ivory/10 p-6 rounded">
           <h3 className="font-serif text-lg text-ivory mb-6">Booking Flow (This Week)</h3>
           <div className="h-72">
             <ResponsiveContainer width="100%" height="100%">
               <BarChart data={bookingData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                 <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} />
                 <XAxis dataKey="name" stroke="#ffffff50" fontSize={12} tickLine={false} axisLine={false} />
                 <YAxis stroke="#ffffff50" fontSize={12} tickLine={false} axisLine={false} />
                 <Tooltip 
                   contentStyle={{ backgroundColor: '#06080a', borderColor: '#ffffff20', color: '#fff', borderRadius: '4px' }}
                   cursor={{ fill: '#ffffff05' }}
                 />
                 <Bar dataKey="rooms" name="Rooms" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                 <Bar dataKey="restaurant" name="Restaurant" fill="#f97316" radius={[4, 4, 0, 0]} />
               </BarChart>
             </ResponsiveContainer>
           </div>
        </div>

      </div>

      {/* Mini Stats & Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Status mini cards */}
        <div className="space-y-4">
           <div className="bg-[#0a0c0f] border border-ivory/10 p-5 rounded flex items-center">
             <div className="p-3 bg-red-500/10 text-red-400 rounded mr-4">
                <MessageSquare size={20} />
             </div>
             <div>
                <h4 className="text-ivory font-medium">{stats.inquiries || 24}</h4>
                <p className="text-xs text-ivory/50">Contact Inquiries</p>
             </div>
           </div>
           
           <div className="bg-[#0a0c0f] border border-ivory/10 p-5 rounded flex items-center">
             <div className="p-3 bg-yellow-500/10 text-yellow-400 rounded mr-4">
                <Star size={20} />
             </div>
             <div>
                <h4 className="text-ivory font-medium">{stats.reviews || 86}</h4>
                <p className="text-xs text-ivory/50">Reviews Received</p>
             </div>
           </div>
           
           <div className="bg-[#0a0c0f] border border-ivory/10 p-5 rounded flex items-center">
             <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded mr-4">
                <BedDouble size={20} />
             </div>
             <div>
                <h4 className="text-ivory font-medium">18 / 45</h4>
                <p className="text-xs text-ivory/50">Available Rooms</p>
             </div>
           </div>
        </div>

        {/* Recent Bookings List (Mock) */}
        <div className="lg:col-span-2 bg-[#0a0c0f] border border-ivory/10 rounded overflow-hidden flex flex-col">
          <div className="p-6 border-b border-ivory/5 flex justify-between items-center">
             <h3 className="font-serif text-lg text-ivory">Recent Transactions</h3>
             <button className="text-xs text-luxury-gold hover:underline">View All</button>
          </div>
          <div className="flex-1 overflow-x-auto">
             <table className="w-full text-left text-sm">
                <thead className="bg-[#06080a] text-ivory/50 text-xs uppercase tracking-wider">
                   <tr>
                      <th className="px-6 py-4 font-normal">Customer</th>
                      <th className="px-6 py-4 font-normal">Type</th>
                      <th className="px-6 py-4 font-normal">Date</th>
                      <th className="px-6 py-4 font-normal">Amount</th>
                      <th className="px-6 py-4 font-normal text-right">Status</th>
                   </tr>
                </thead>
                <tbody className="divide-y divide-ivory/5">
                   {[
                     { id: 1, name: "Rahul Sharma", type: "Room Booking", date: "Today, 10:45 AM", amount: "₹ 11,000", status: "Confirmed", statusColor: "text-emerald-400 bg-emerald-400/10" },
                     { id: 2, name: "Priya Patel", type: "Restaurant", date: "Today, 09:20 AM", amount: "₹ 3,500", status: "Pending", statusColor: "text-yellow-400 bg-yellow-400/10" },
                     { id: 3, name: "Amit Kumar", type: "Room Booking", date: "Yesterday, 04:15 PM", amount: "₹ 5,500", status: "Confirmed", statusColor: "text-emerald-400 bg-emerald-400/10" },
                     { id: 4, name: "Neha Singh", type: "Event Package", date: "Yesterday, 11:30 AM", amount: "₹ 45,000", status: "Confirmed", statusColor: "text-emerald-400 bg-emerald-400/10" },
                   ].map((item) => (
                     <tr key={item.id} className="hover:bg-white/[0.02] transition-colors">
                        <td className="px-6 py-4 text-ivory">{item.name}</td>
                        <td className="px-6 py-4 text-ivory/70">{item.type}</td>
                        <td className="px-6 py-4 text-ivory/50">{item.date}</td>
                        <td className="px-6 py-4 text-luxury-gold">{item.amount}</td>
                        <td className="px-6 py-4 text-right">
                           <span className={`px-3 py-1 rounded-full text-[10px] uppercase tracking-wider ${item.statusColor}`}>
                             {item.status}
                           </span>
                        </td>
                     </tr>
                   ))}
                </tbody>
             </table>
          </div>
        </div>

      </div>

    </div>
  );
}
