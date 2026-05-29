import React, { useState, ChangeEvent, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Mail, Lock, User, Chrome } from "lucide-react";
import { useAuth } from "../contexts/AuthContext";
import { auth, googleProvider, db } from "../lib/firebase";
import { signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";

export function AuthModal() {
  const { isAuthModalOpen, closeAuthModal } = useAuth();
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: false
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  const handleCreateUserProfile = async (userRef: any, additionalData: any) => {
    const userDocRef = doc(db, "users", userRef.uid);
    const userDoc = await getDoc(userDocRef);
    if (!userDoc.exists()) {
      await setDoc(userDocRef, {
        name: additionalData.name || userRef.displayName || "",
        email: userRef.email,
        phone: additionalData.phone || userRef.phoneNumber || "",
        photoURL: userRef.photoURL || "",
        createdAt: serverTimestamp(),
      });
    }
  };

  const handleEmailAuth = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, formData.email, formData.password);
      } else {
        if (formData.password !== formData.confirmPassword) {
            throw new Error("Passwords do not match");
        }
        if (!formData.terms) {
            throw new Error("Please accept the terms and conditions");
        }
        const { user } = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
        await handleCreateUserProfile(user, { name: formData.name, phone: formData.phone });
      }
      // AuthContext will automatically close modal on success if there's a pending action
    } catch (err: any) {
      setError(err.message || "Failed to authenticate");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleAuth = async () => {
    setError("");
    setLoading(true);
    try {
      const { user } = await signInWithPopup(auth, googleProvider);
      await handleCreateUserProfile(user, {});
    } catch (err: any) {
      setError(err.message || "Failed to sign in with Google");
    } finally {
      setLoading(false);
    }
  };

  if (!isAuthModalOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/80 backdrop-blur-md"
          onClick={closeAuthModal}
        ></motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-md bg-[#06080a] border border-ivory/10 shadow-2xl overflow-hidden"
        >
          {/* Close button */}
          <button 
            onClick={closeAuthModal}
            className="absolute top-4 right-4 text-ivory/50 hover:text-luxury-gold p-2 transition-colors z-10"
          >
            <X size={20} />
          </button>

          {/* Header */}
          <div className="p-8 text-center border-b border-ivory/5 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-luxury-gold/5 rounded-full blur-[60px] pointer-events-none"></div>
            <h2 className="font-serif text-3xl text-ivory mb-2 relative z-10">
              {isLogin ? "Welcome Back" : "Create Account"}
            </h2>
            <p className="text-xs text-ivory/60 font-light relative z-10">
              {isLogin 
                ? "Sign in to manage bookings and preferences." 
                : "Create an account for a personalized hospitality experience."}
            </p>
          </div>

          <div className="p-8">
            {error && (
               <div className="mb-6 p-3 bg-red-900/20 border border-red-500/50 text-red-400 text-xs text-center rounded">
                  {error}
               </div>
            )}

            <button 
              onClick={handleGoogleAuth}
              disabled={loading}
              className="w-full mb-6 flex items-center justify-center py-3 px-4 bg-white/5 border border-ivory/10 hover:border-luxury-gold hover:bg-white/10 text-ivory text-sm transition-all"
            >
               <Chrome size={18} className="mr-3" /> Continue with Google
            </button>

            <div className="relative mb-6 text-center">
               <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-ivory/10"></div>
               </div>
               <span className="relative z-10 bg-[#06080a] px-4 text-xs text-ivory/40 uppercase tracking-widest font-semibold">Or continue with email</span>
            </div>

            <form onSubmit={handleEmailAuth} className="space-y-4">
               {!isLogin && (
                 <>
                   <div>
                     <label className="sr-only">Full Name</label>
                     <div className="relative">
                       <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-ivory/40" />
                       <input 
                         type="text" 
                         name="name"
                         placeholder="Full Name" 
                         required 
                         value={formData.name} onChange={handleChange} 
                         className="w-full bg-black/50 border border-ivory/10 focus:border-luxury-gold text-ivory text-sm px-10 py-3 outline-none transition-colors" 
                       />
                     </div>
                   </div>
                   <div>
                     <label className="sr-only">Mobile Number</label>
                     <div className="relative">
                       <span className="absolute left-3 top-1/2 -translate-y-1/2 text-ivory/40 text-sm border-r border-ivory/10 pr-2">+91</span>
                       <input 
                         type="tel" 
                         name="phone"
                         placeholder="Mobile Number" 
                         required 
                         value={formData.phone} onChange={handleChange} 
                         className="w-full bg-black/50 border border-ivory/10 focus:border-luxury-gold text-ivory text-sm pl-14 pr-4 py-3 outline-none transition-colors" 
                       />
                     </div>
                   </div>
                 </>
               )}

               <div>
                 <label className="sr-only">Email</label>
                 <div className="relative">
                   <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-ivory/40" />
                   <input 
                     type="email" 
                     name="email"
                     placeholder="Email address" 
                     required 
                     value={formData.email} onChange={handleChange} 
                     className="w-full bg-black/50 border border-ivory/10 focus:border-luxury-gold text-ivory text-sm px-10 py-3 outline-none transition-colors" 
                   />
                 </div>
               </div>

               <div>
                 <label className="sr-only">Password</label>
                 <div className="relative">
                   <Lock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-ivory/40" />
                   <input 
                     type="password" 
                     name="password"
                     placeholder="Password" 
                     required 
                     value={formData.password} onChange={handleChange} 
                     className="w-full bg-black/50 border border-ivory/10 focus:border-luxury-gold text-ivory text-sm px-10 py-3 outline-none transition-colors" 
                   />
                 </div>
               </div>

               {!isLogin && (
                 <div>
                   <label className="sr-only">Confirm Password</label>
                   <div className="relative">
                     <Lock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-ivory/40" />
                     <input 
                       type="password" 
                       name="confirmPassword"
                       placeholder="Confirm Password" 
                       required 
                       value={formData.confirmPassword} onChange={handleChange} 
                       className="w-full bg-black/50 border border-ivory/10 focus:border-luxury-gold text-ivory text-sm px-10 py-3 outline-none transition-colors" 
                     />
                   </div>
                 </div>
               )}

               {isLogin ? (
                 <div className="flex justify-between items-center mt-2 mb-4">
                    <label className="flex items-center text-xs text-ivory/60 cursor-pointer hover:text-ivory">
                       <input type="checkbox" className="mr-2 accent-luxury-gold" /> Remember Me
                    </label>
                    <button type="button" className="text-xs text-luxury-gold hover:underline">Forgot password?</button>
                 </div>
               ) : (
                 <div className="mt-2 mb-4">
                    <label className="flex items-start text-xs text-ivory/60 cursor-pointer">
                       <input type="checkbox" name="terms" required checked={formData.terms} onChange={handleChange} className="mr-2 mt-0.5 accent-luxury-gold shrink-0" /> 
                       <span>I agree to the <button type="button" className="text-luxury-gold hover:underline">Terms of Service</button> and <button type="button" className="text-luxury-gold hover:underline">Privacy Policy</button>.</span>
                    </label>
                 </div>
               )}

               <button 
                  type="submit" 
                  disabled={loading}
                  className="w-full py-4 bg-luxury-gold text-black text-[10px] uppercase tracking-widest font-bold hover:bg-ivory transition-colors disabled:opacity-70 mt-6"
               >
                  {loading ? 'Processing...' : (isLogin ? 'Login' : 'Create Account')}
               </button>
            </form>

            <div className="mt-8 text-center text-xs text-ivory/60">
               {isLogin ? (
                 <>Don't have an account? <button type="button" onClick={() => setIsLogin(false)} className="text-luxury-gold hover:underline font-medium ml-1">Create Account</button></>
               ) : (
                 <>Already have an account? <button type="button" onClick={() => setIsLogin(true)} className="text-luxury-gold hover:underline font-medium ml-1">Login</button></>
               )}
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
