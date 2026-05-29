/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { Navbar } from "./components/Navbar";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { RoomsPage } from "./pages/RoomsPage";
import { RestaurantPage } from "./pages/RestaurantPage";
import { LocationPage } from "./pages/LocationPage";
import { ContactPage } from "./pages/ContactPage";
import { ProfilePage } from "./pages/ProfilePage";
import { Footer } from "./components/Footer";
import { AuthModal } from "./components/AuthModal";

// Admin Imports
import { AdminLayout } from "./pages/admin/AdminLayout";
import { AdminLogin } from "./pages/admin/AdminLogin";
import { AdminDashboard } from "./pages/admin/AdminDashboard";
import { AdminRooms } from "./pages/admin/AdminRooms";
import { AdminBookings } from "./pages/admin/AdminBookings";
import { AdminSettings } from "./pages/admin/AdminSettings";

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Admin Routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="rooms" element={<AdminRooms />} />
            <Route path="bookings" element={<AdminBookings />} />
            <Route path="settings" element={<AdminSettings />} />
            <Route path="*" element={<div className="p-8 text-ivory/50">Module building in progress...</div>} />
          </Route>

          {/* Public Routes */}
          <Route
            path="/*"
            element={
              <main className="font-sans text-ivory selection:bg-luxury-gold selection:text-black bg-black min-h-screen flex flex-col">
                <Navbar />
                <div className="flex-grow">
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/rooms" element={<RoomsPage />} />
                    <Route path="/restaurant" element={<RestaurantPage />} />
                    <Route path="/location" element={<LocationPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/profile" element={<ProfilePage />} />
                  </Routes>
                </div>
                <Footer />
                <AuthModal />
              </main>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

