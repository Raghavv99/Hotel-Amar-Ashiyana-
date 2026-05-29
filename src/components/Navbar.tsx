import { useState, useEffect } from "react";
import { Menu, X, Phone, MapPin, User as UserIcon } from "lucide-react";
import { motion, AnimatePresence, LayoutGroup } from "motion/react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, requireAuth } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Rooms & Suites", href: "/rooms" },
    { name: "Restaurant", href: "/restaurant" },
    { name: "Location", href: "/location" },
    { name: "Contact Us", href: "/contact" },
  ];

  const handleProfileClick = () => {
    requireAuth(() => {
      navigate('/profile');
    });
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-700 flex flex-col ${
          isScrolled || mobileMenuOpen ? "bg-black/95 backdrop-blur-xl shadow-2xl border-b border-luxury-gold/20" : "bg-transparent py-2"
        }`}
      >
        {/* Top Mini Bar - Hidden on scroll or when mobile menu open */}
        <div className={`w-full px-4 md:px-6 lg:px-12 transition-all duration-700 overflow-hidden ${isScrolled || mobileMenuOpen ? "h-0 opacity-0" : "h-8 opacity-100 border-b border-ivory/10"}`}>
          <div className="flex justify-between items-center h-full">
            <div className="flex items-center space-x-6 text-[9px] uppercase tracking-widest text-ivory/60">
              <span className="flex items-center hover:text-luxury-gold transition-colors cursor-default">
                <MapPin size={10} className="mr-2" /> Etawah, Uttar Pradesh
              </span>
            </div>
            <div className="flex items-center space-x-6 text-[9px] uppercase tracking-widest text-ivory/60">
              <a href="tel:07520957011" className="flex items-center hover:text-luxury-gold transition-colors">
                <Phone size={10} className="mr-2" /> 075209 57011
              </a>
            </div>
          </div>
        </div>

        {/* Main Navigation Bar */}
        <div className={`w-full px-4 md:px-6 lg:px-12 transition-all duration-700 ${isScrolled || mobileMenuOpen ? "py-4" : "py-6"}`}>
          <div className="flex justify-between items-center relative">
            
            {/* Left: Logo */}
            <div className="flex items-center z-50">
              <Link to="/" onClick={() => setMobileMenuOpen(false)} className="text-left group">
                <h1 className="font-serif text-2xl md:text-3xl text-luxury-gold group-hover:text-ivory transition-colors duration-500 whitespace-nowrap">
                  Amar Ashiyana
                </h1>
                <p className="text-[7px] md:text-[8px] uppercase tracking-[0.3em] md:tracking-[0.4em] text-ivory/50 group-hover:text-luxury-gold/50 transition-colors duration-500 mt-1">
                  Hotel & Restaurant
                </p>
              </Link>
            </div>

            {/* Center: Desktop Links (Hidden on mobile) */}
            <LayoutGroup>
              <div className="hidden lg:flex items-center justify-center space-x-1 xl:space-x-3 absolute left-1/2 -translate-x-1/2">
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.href;
                  return (
                    <Link
                      key={link.name}
                      to={link.href}
                      className={`relative px-4 py-3 text-[10px] uppercase tracking-[0.15em] transition-all duration-300 rounded-sm overflow-hidden ${
                        isActive ? "text-luxury-gold font-bold" : "text-ivory/80 hover:text-ivory hover:bg-white/5"
                      }`}
                    >
                      <span className="relative z-10">{link.name}</span>
                      {isActive && (
                        <motion.div
                          layoutId="desktop-nav-active"
                          className="absolute inset-0 bg-luxury-gold/10 border-b-2 border-luxury-gold shadow-[0_4px_15px_rgba(212,175,55,0.4)]"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ type: "spring", stiffness: 350, damping: 30 }}
                        />
                      )}
                    </Link>
                  );
                })}
              </div>
            </LayoutGroup>

            {/* Right: Reservation Button & Mobile Hamburger */}
            <div className="flex items-center justify-end space-x-3 md:space-x-6 z-50">
              <button 
                onClick={handleProfileClick}
                className="flex items-center justify-center p-2 text-ivory/80 hover:text-luxury-gold transition-colors"
                title={user ? "My Profile" : "Login"}
              >
                {user && user.photoURL ? (
                  <img referrerPolicy="no-referrer" src={user.photoURL} alt="Profile" className="w-6 h-6 rounded-full border border-luxury-gold" />
                ) : (
                  <UserIcon size={20} />
                )}
              </button>
              
              <Link 
                to="/rooms" 
                onClick={() => setMobileMenuOpen(false)}
                className="hidden md:flex items-center justify-center px-6 py-3 bg-luxury-gold text-black text-[10px] uppercase tracking-widest font-bold hover:bg-ivory hover:scale-105 transition-all duration-300"
              >
                Reserve Now
              </Link>
              <Link 
                to="/rooms" 
                onClick={() => setMobileMenuOpen(false)}
                className="md:hidden text-[10px] uppercase tracking-widest text-luxury-gold border-b border-luxury-gold pb-1 font-bold"
              >
                Reserve
              </Link>
              
              {/* Hamburger Menu Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden group flex items-center text-ivory hover:text-luxury-gold transition-colors p-2 -mr-2"
                aria-label="Toggle Menu"
              >
                <div className="flex flex-col space-y-[5px] w-6 items-end">
                  <span className={`h-[2px] bg-current transition-all duration-300 ${mobileMenuOpen ? 'w-6 rotate-45 translate-y-[7px]' : 'w-6 group-hover:w-4'}`}></span>
                  <span className={`h-[2px] bg-current transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : 'w-4 group-hover:w-6'}`}></span>
                  <span className={`h-[2px] bg-current transition-all duration-300 ${mobileMenuOpen ? 'w-6 -rotate-45 -translate-y-[7px]' : 'w-5 group-hover:w-3'}`}></span>
                </div>
              </button>
            </div>

          </div>
        </div>

        {/* Fullscreen Overlay Menu (Mobile & Tablet) */}
        <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            animate={{ opacity: 1, clipPath: 'inset(0 0 0 0)' }}
            exit={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 top-[70px] md:top-[85px] bg-black/95 backdrop-blur-2xl border-t border-luxury-gold/20 h-[calc(100vh-70px)] md:h-[calc(100vh-85px)] w-full overflow-y-auto lg:hidden"
          >
            {/* Background design element */}
            <div className="absolute inset-0 bg-luxury-gold/5 opacity-50 blur-[150px] rounded-full pointer-events-none"></div>

            <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col justify-between min-h-full relative z-10 w-full">
              
              <div className="flex flex-col space-y-4 md:space-y-6">
                <p className="text-[10px] uppercase tracking-widest text-luxury-gold border-b border-luxury-gold/20 pb-4 w-12 mb-2 md:mb-4">Menu</p>
                
                <LayoutGroup>
                  {navLinks.map((link, index) => {
                    const isActive = location.pathname === link.href;
                    return (
                      <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        key={link.name}
                        className="relative block"
                      >
                        <Link
                          to={link.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className={`relative font-serif text-3xl sm:text-4xl md:text-5xl w-fit block py-2 transition-all duration-300 ${
                            isActive 
                              ? "text-luxury-gold font-bold translate-x-4 md:translate-x-6" 
                              : "text-ivory hover:text-luxury-gold"
                          }`}
                        >
                          <span className="relative z-10">{link.name}</span>
                          {isActive && (
                            <motion.div
                              layoutId="mobile-nav-active"
                              className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 w-1 h-3/4 bg-luxury-gold shadow-[0_0_15px_rgba(212,175,55,0.7)]"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ type: "spring", stiffness: 350, damping: 30 }}
                            />
                          )}
                        </Link>
                      </motion.div>
                    );
                  })}
                  <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.7 }} className="mt-4 pt-4 border-t border-white/5">
                     <button onClick={handleProfileClick} className="font-serif text-3xl sm:text-4xl w-fit block py-2 text-ivory hover:text-luxury-gold transition-colors">
                        {user ? 'My Profile' : 'Login / Register'}
                     </button>
                  </motion.div>
                </LayoutGroup>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-12 border-t border-luxury-gold/10 pt-8"
              >
                <div className="space-y-2 text-ivory/60 text-xs font-light">
                  <p className="text-luxury-gold font-serif text-lg mb-4">Amar Ashiyana</p>
                  <p>V Mart, Mall Godam Road, Ashok Nagar,</p>
                  <p>Swaroop Nagar, Etawah, UP 206001</p>
                  <p className="pt-2 text-luxury-gold font-sans tracking-widest text-sm">075209 57011</p>
                </div>
              </motion.div>

            </div>
          </motion.div>
        )}
        </AnimatePresence>
      </nav>
    </>
  );
}
