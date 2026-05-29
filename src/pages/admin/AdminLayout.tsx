import { useEffect, useState } from "react";
import { Outlet, useNavigate, Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { 
  BarChart3, 
  BedDouble, 
  CalendarCheck, 
  UtensilsCrossed, 
  Image as ImageIcon, 
  MessageSquare, 
  Users, 
  Star, 
  Settings,
  LogOut,
  Building2,
  Menu,
  X,
  Bell
} from "lucide-react";
import { auth, db } from "../../lib/firebase";
import { doc, getDoc } from "firebase/firestore";

export function AdminLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [adminName, setAdminName] = useState("Super Admin");

  useEffect(() => {
    const unsub = auth.onAuthStateChanged(async (user) => {
      if (!user) {
        navigate("/admin/login");
        return;
      }
      
      const userDoc = await getDoc(doc(db, "users", user.uid));
      const isAdmin = userDoc.data()?.isAdmin === true || user.email === "admin@amarashiyana.com";
      
      if (!isAdmin) {
        await auth.signOut();
        navigate("/admin/login");
        return;
      }

      setAdminName(userDoc.data()?.name || "Super Admin");
      setLoading(false);
    });

    return () => unsub();
  }, [navigate]);

  const handleLogout = async () => {
    await auth.signOut();
    navigate("/admin/login");
  };

  const navItems = [
    { name: "Dashboard", path: "/admin", icon: <BarChart3 size={18} /> },
    { name: "Rooms", path: "/admin/rooms", icon: <BedDouble size={18} /> },
    { name: "Bookings", path: "/admin/bookings", icon: <CalendarCheck size={18} /> },
    { name: "Restaurant", path: "/admin/restaurant", icon: <UtensilsCrossed size={18} /> },
    { name: "Gallery", path: "/admin/gallery", icon: <ImageIcon size={18} /> },
    { name: "Inquiries", path: "/admin/inquiries", icon: <MessageSquare size={18} /> },
    { name: "Users", path: "/admin/users", icon: <Users size={18} /> },
    { name: "Reviews", path: "/admin/reviews", icon: <Star size={18} /> },
    { name: "Settings", path: "/admin/settings", icon: <Settings size={18} /> },
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-luxury-gold border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex bg-[#030405] text-ivory font-sans selection:bg-luxury-gold selection:text-black">
      
      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             exit={{ opacity: 0 }}
             className="fixed inset-0 bg-black/80 z-40 lg:hidden"
             onClick={() => setSidebarOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-[#06080a] border-r border-ivory/5 transform transition-transform duration-300 lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } flex flex-col`}
      >
        <div className="h-20 flex items-center justify-between px-6 border-b border-ivory/5 shrink-0">
          <Link to="/admin" className="flex items-center gap-3">
             <Building2 size={24} className="text-luxury-gold" />
             <div>
                <h1 className="font-serif text-lg tracking-wide">Workspace</h1>
                <p className="text-[9px] uppercase tracking-widest text-ivory/40">Super Admin</p>
             </div>
          </Link>
          <button className="lg:hidden text-ivory/50 hover:text-ivory" onClick={() => setSidebarOpen(false)}>
             <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-6 px-3 custom-scrollbar">
           <div className="space-y-1">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path || (item.path !== '/admin' && location.pathname.startsWith(item.path));
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setSidebarOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded text-sm transition-all duration-200 ${
                      isActive 
                        ? "bg-luxury-gold/10 text-luxury-gold font-medium border border-luxury-gold/20" 
                        : "text-ivory/60 hover:text-ivory hover:bg-white/5 border border-transparent"
                    }`}
                  >
                    <span className={isActive ? "text-luxury-gold" : "text-ivory/50"}>{item.icon}</span>
                    {item.name}
                  </Link>
                );
              })}
           </div>
        </div>

        <div className="p-4 border-t border-ivory/5 shrink-0">
           <button 
             onClick={handleLogout}
             className="flex items-center gap-3 w-full px-4 py-3 text-sm text-red-500/80 hover:text-red-500 hover:bg-red-500/10 rounded transition-colors"
           >
              <LogOut size={18} />
              Secure Logout
           </button>
        </div>
      </motion.aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col lg:ml-64 min-w-0 transition-all duration-300">
        
        {/* Top Navbar */}
        <header className="h-20 bg-[#06080a]/80 backdrop-blur-md border-b border-ivory/5 flex items-center justify-between px-6 sticky top-0 z-30">
           <div className="flex items-center gap-4">
              <button className="lg:hidden text-ivory/60 hover:text-ivory" onClick={() => setSidebarOpen(true)}>
                 <Menu size={24} />
              </button>
           </div>
           
           <div className="flex items-center gap-6">
              <button className="relative text-ivory/60 hover:text-ivory transition-colors">
                 <Bell size={20} />
                 <span className="absolute -top-1 -right-1 w-2 h-2 bg-luxury-gold rounded-full"></span>
              </button>
              
              <div className="flex items-center gap-3 pl-6 border-l border-ivory/10">
                 <div className="text-right hidden sm:block">
                    <p className="text-sm font-medium text-ivory">{adminName}</p>
                    <p className="text-[10px] uppercase tracking-widest text-ivory/40">Super Admin</p>
                 </div>
                 <div className="w-10 h-10 rounded-full bg-luxury-gold/20 border border-luxury-gold/30 flex items-center justify-center text-luxury-gold font-serif text-lg">
                    {adminName.charAt(0)}
                 </div>
              </div>
           </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 p-4 md:p-8 overflow-x-hidden">
           <Outlet />
        </main>
      </div>
    </div>
  );
}
