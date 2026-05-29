import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

// Use environment variables if provided, otherwise fallback to the hardcoded config.
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyC47jgba-tSI6iVqPNBxAW39VdeEtOZSOI",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "aura-tools-3bd50.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "aura-tools-3bd50",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "aura-tools-3bd50.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "882567727378",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:882567727378:web:1084932404ae1ffdf14bcb",
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "G-6MKM9CCZFW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const db = getFirestore(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const storage = getStorage(app);
export const analytics = typeof window !== "undefined" ? getAnalytics(app) : null;

// ==========================================
// FIRESTORE COLLECTIONS STRUCTURE
// ==========================================

/*
  1. contact_inquiries
    - name: string
    - email: string
    - phone: string
    - message: string
    - createdAt: timestamp
    - status: 'new' | 'read' | 'replied'
    
  2. restaurant_reservations
    - name: string
    - phone: string
    - date: string
    - time: string
    - guests: number
    - requests: string
    - createdAt: timestamp
    - status: 'pending' | 'confirmed' | 'cancelled'
    
  3. room_reservations
    - checkIn: string
    - checkOut: string
    - adults: number
    - children: number
    - roomType: string
    - customerName: string
    - customerPhone: string
    - customerEmail: string
    - createdAt: timestamp
    - status: 'pending' | 'confirmed' | 'cancelled'
    
  4. reviews
    - customerName: string
    - rating: number
    - text: string
    - type: 'restaurant' | 'hotel'
    - createdAt: timestamp
    - isApproved: boolean
    
  5. gallery
    - imageUrl: string
    - title: string
    - category: 'exterior' | 'rooms' | 'restaurant' | 'events'
    - createdAt: timestamp
*/

/**
 * Utility to save a document to a specific collection
 */
export async function saveToFirestore(collectionName: string, data: any) {
  try {
    const colRef = collection(db, collectionName);
    const docRef = await addDoc(colRef, {
      ...data,
      createdAt: serverTimestamp(),
    });
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error(`Error saving to ${collectionName}:`, error);
    return { success: false, error };
  }
}
