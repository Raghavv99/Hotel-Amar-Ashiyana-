import { motion } from "motion/react";
import { useAuth } from "../contexts/AuthContext";
import { User as UserIcon, LogOut, Settings, CalendarHeart, Hotel } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { db } from "../lib/firebase";
import { doc, getDoc } from "firebase/firestore";

export function ProfilePage() {
  const { user, logout, loading } = useAuth();
  const navigate = useNavigate();
  const [profileData, setProfileData] = useState<any>(null);

  useEffect(() => {
    if (!loading && !user) {
      navigate("/");
    }
  }, [user, loading, navigate]);

  useEffect(() => {
    const fetchProfile = async () => {
      if (user) {
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setProfileData(docSnap.data());
        }
      }
    };
    fetchProfile();
  }, [user]);

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  if (loading || !user) {
    return <div className="min-h-screen bg-black pt-32 text-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-black pt-32 pb-24">
      <div className="max-w-[1200px] mx-auto px-4">
        
        <div className="flex flex-col md:flex-row gap-8">
          
          {/* Sidebar */}
          <div className="w-full md:w-1/4">
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               className="bg-[#06080a] border border-ivory/10 p-6 flex flex-col items-center text-center sticky top-32"
            >
               <div className="w-24 h-24 rounded-full bg-luxury-gold/10 border border-luxury-gold/30 flex items-center justify-center mb-4 overflow-hidden">
                  {user.photoURL ? (
                    <img referrerPolicy="no-referrer" src={user.photoURL} alt="Profile" className="w-full h-full object-cover" />
                  ) : (
                    <UserIcon size={32} className="text-luxury-gold" />
                  )}
               </div>
               <h2 className="font-serif text-xl text-ivory mb-1">{profileData?.name || user.displayName || "Guest Guest"}</h2>
               <p className="text-xs text-ivory/60 font-light mb-8">{user.email}</p>

               <div className="w-full flex flex-col gap-2">
                  <button className="flex items-center text-sm text-ivory/80 bg-white/5 py-3 px-4 hover:bg-white/10 hover:text-luxury-gold transition-colors border border-transparent hover:border-luxury-gold/30">
                     <Settings size={16} className="mr-3" /> Account Settings
                  </button>
                  <button onClick={handleLogout} className="flex items-center text-sm text-red-400 py-3 px-4 hover:bg-red-500/10 transition-colors">
                     <LogOut size={16} className="mr-3" /> Logout
                  </button>
               </div>
            </motion.div>
          </div>

          {/* Main Content */}
          <div className="w-full md:w-3/4">
             <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.1 }}
             >
                <div className="flex items-center justify-between mb-8 border-b border-ivory/10 pb-4">
                   <h1 className="font-serif text-3xl text-ivory">Dashboard</h1>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                   <div className="bg-[#06080a] border border-ivory/10 p-6 flex items-start">
                      <div className="bg-luxury-gold/10 p-3 rounded mr-4">
                         <Hotel className="text-luxury-gold" size={24} />
                      </div>
                      <div>
                         <h3 className="font-serif text-lg text-ivory mb-1">Room Bookings</h3>
                         <p className="text-2xl font-light text-luxury-gold mb-2">0</p>
                         <p className="text-[10px] uppercase tracking-widest text-ivory/40">Total Stays</p>
                      </div>
                   </div>
                   
                   <div className="bg-[#06080a] border border-ivory/10 p-6 flex items-start">
                      <div className="bg-luxury-gold/10 p-3 rounded mr-4">
                         <CalendarHeart className="text-luxury-gold" size={24} />
                      </div>
                      <div>
                         <h3 className="font-serif text-lg text-ivory mb-1">Table Reservations</h3>
                         <p className="text-2xl font-light text-luxury-gold mb-2">0</p>
                         <p className="text-[10px] uppercase tracking-widest text-ivory/40">Total Dines</p>
                      </div>
                   </div>
                </div>

                <h2 className="font-serif text-2xl text-ivory mb-6">Recent Activity</h2>
                <div className="bg-[#06080a] border border-ivory/10 p-8 text-center">
                   <p className="text-sm font-light text-ivory/50">You don't have any recent bookings or reservations.</p>
                   <a href="/rooms" className="inline-block mt-4 px-6 py-2 border border-luxury-gold text-luxury-gold text-xs uppercase tracking-widest hover:bg-luxury-gold/10 transition-colors">Book a Room</a>
                </div>

             </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
}
