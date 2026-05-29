import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { Lock, Mail, ChevronRight, AlertCircle, Building2 } from "lucide-react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../lib/firebase";
import { doc, getDoc } from "firebase/firestore";

export function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // If user is already logged in as admin, redirect to dashboard.
  // Assuming 'admin' field in user document or a specific email.
  useEffect(() => {
    const unsub = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userDoc = await getDoc(doc(db, "users", user.uid));
        const isAdmin = userDoc.data()?.isAdmin === true || user.email === "admin@amarashiyana.com";
        if (isAdmin) {
          navigate("/admin");
        }
      }
    });
    return () => unsub();
  }, [navigate]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // First sign in
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      // Verify if admin
      const user = userCredential.user;
      const userDoc = await getDoc(doc(db, "users", user.uid));
      
      const isAdmin = userDoc.data()?.isAdmin === true || user.email === "admin@amarashiyana.com";
      
      if (!isAdmin) {
        await auth.signOut();
        throw new Error("Access denied. You don't have administrative privileges.");
      }
      
      navigate("/admin");
    } catch (err: any) {
      if (err.code === "auth/user-not-found" || err.code === "auth/wrong-password" || err.code === "auth/invalid-credential") {
         setError("Invalid credentials. Please check your email and password.");
      } else {
         setError(err.message || "Failed to login");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#06080a] flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8 selection:bg-luxury-gold selection:text-black">
      <div className="sm:mx-auto sm:w-full sm:max-w-md relative z-10">
        <motion.div 
           initial={{ opacity: 0, y: -20 }}
           animate={{ opacity: 1, y: 0 }}
           className="text-center"
        >
          <Building2 size={48} className="text-luxury-gold mx-auto mb-4" />
          <h2 className="text-center text-4xl font-serif tracking-tight text-ivory">
            Hotel Amar Ashiyana
          </h2>
          <p className="mt-2 text-center text-sm text-ivory/60 uppercase tracking-widest">
            Workspace Portal
          </p>
        </motion.div>

        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.1 }}
           className="mt-8 sm:mx-auto sm:w-full sm:max-w-md"
        >
          <div className="bg-black py-8 px-4 border border-ivory/10 shadow-2xl sm:px-10 relative overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 rounded-full bg-luxury-gold/5 blur-[40px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-32 h-32 rounded-full bg-luxury-gold/5 blur-[40px] pointer-events-none"></div>

            <h3 className="text-lg font-serif text-ivory mb-6 border-b border-ivory/5 pb-4">
              Authorized Personnel Only
            </h3>

            {error && (
               <div className="mb-6 p-4 bg-red-900/20 border-l-2 border-red-500 text-red-400 text-xs flex items-center">
                  <AlertCircle size={16} className="mr-3 flex-shrink-0" />
                  {error}
               </div>
            )}

            <form className="space-y-6" onSubmit={handleLogin}>
              <div>
                <label className="sr-only">Email address</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-ivory/40" />
                  </div>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full bg-[#06080a] border border-ivory/10 pl-10 py-3 text-ivory placeholder-ivory/40 focus:outline-none focus:ring-1 focus:ring-luxury-gold focus:border-luxury-gold sm:text-sm text-black transition-colors"
                    placeholder="Admin Email"
                  />
                </div>
              </div>

              <div>
                <label className="sr-only">Password</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-ivory/40" />
                  </div>
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full bg-[#06080a] border border-ivory/10 pl-10 py-3 text-ivory placeholder-ivory/40 focus:outline-none focus:ring-1 focus:ring-luxury-gold focus:border-luxury-gold sm:text-sm text-black transition-colors"
                    placeholder="Password"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 bg-[#0a0a0a] border-ivory/20 rounded accent-luxury-gold focus:ring-luxury-gold"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-xs text-ivory/60 cursor-pointer">
                    Remember me
                  </label>
                </div>

                <div className="text-xs">
                  <button type="button" className="font-medium text-luxury-gold hover:text-luxury-gold/80 transition-colors">
                    Forgot your password?
                  </button>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex justify-center py-4 px-4 border border-transparent shadow-sm text-[10px] uppercase tracking-[0.2em] font-bold bg-luxury-gold text-black hover:bg-ivory focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-luxury-gold focus:ring-offset-black transition-all disabled:opacity-70 group"
                >
                  {loading ? (
                    "Authenticating..."
                  ) : (
                    <>
                      Sign in to Dashboard
                      <ChevronRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </div>
            </form>

            <div className="mt-8 border-t border-ivory/5 pt-6 text-center">
               <p className="text-[10px] text-ivory/40">Protected by 256-bit AES encryption & Firebase Auth.</p>
               <p className="text-[10px] text-ivory/40 mt-1">Unauthorized access is strictly prohibited.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
