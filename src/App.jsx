import React, { useRef } from 'react';
import { CartProvider, useCart } from './context/CartContext';
import { SoundProvider } from './context/SoundContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SereneMenu from './components/SereneMenu';
import AtmosphereStory from './components/AtmosphereStory';
import GallerySection from './components/GallerySection';
import Testimonials from './components/Testimonials';
import LocationSection from './components/LocationSection';
import ReservationSection from './components/ReservationSection';
import DishModal from './components/DishModal';
import OrderDrawer from './components/OrderDrawer';
import Footer from './components/Footer';
import { Sparkles } from 'lucide-react';

function AppContent() {
  const reservationRef = useRef(null);
  const { orderNotification } = useCart();

  const handleBookTableClick = () => {
    const el = document.getElementById('reservation');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreMenuClick = () => {
    const el = document.getElementById('menu');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app-container" style={{ minHeight: '100vh', backgroundColor: 'var(--bg-primary)' }}>
      {/* Toast Notification */}
      {orderNotification && (
        <div className="toast-notification">
          <Sparkles size={16} style={{ color: 'var(--accent-gold-bright)' }} />
          <span>{orderNotification}</span>
        </div>
      )}

      {/* Main Navigation */}
      <Navbar onOpenReservation={handleBookTableClick} />

      {/* Page Sections */}
      <main>
        <Hero onExploreMenu={handleExploreMenuClick} onBookTable={handleBookTableClick} />
        <SereneMenu />
        <AtmosphereStory />
        <GallerySection />
        <Testimonials />
        <LocationSection />
        <ReservationSection sectionRef={reservationRef} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Global Modals & Drawers */}
      <DishModal />
      <OrderDrawer />
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <SoundProvider>
        <AppContent />
      </SoundProvider>
    </CartProvider>
  );
}
