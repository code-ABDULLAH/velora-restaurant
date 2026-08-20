import React, { useState, useEffect } from 'react';
import { ShoppingBag, Volume2, VolumeX, Calendar, Sparkles, Menu as MenuIcon, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useSound } from '../context/SoundContext';
import VeloraLogo from './VeloraLogo';

export default function Navbar({ onOpenReservation }) {
  const { cartCount, setIsDrawerOpen } = useCart();
  const { soundEnabled, toggleSound, playClick } = useSound();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, id) => {
    if (playClick) playClick();
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        transition: 'all 0.4s var(--transition-smooth)',
        boxShadow: scrolled ? 'var(--shadow-3d)' : 'none',
        background: scrolled ? 'rgba(12, 10, 9, 0.94)' : 'rgba(12, 10, 9, 0.82)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        borderBottom: '1px solid var(--border-gold)'
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '88px' }}>
        
        {/* VELORA Emblem Brand */}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          style={{ textDecoration: 'none' }}
        >
          <VeloraLogo size={46} />
        </a>

        {/* Desktop Navigation Links */}
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '2.2rem'
          }}
          className="desktop-only"
        >
          {[
            { id: 'hero', label: 'Home' },
            { id: 'story', label: 'Our Story' },
            { id: 'menu', label: '3D Menu' },
            { id: 'experience', label: 'Accolades' },
            { id: 'gallery', label: 'Gallery' },
            { id: 'contact', label: 'Contact' },
          ].map(link => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => { e.preventDefault(); handleNavClick(e, link.id); }}
              style={{
                textDecoration: 'none',
                color: 'var(--text-primary)',
                fontFamily: 'var(--font-display)',
                fontWeight: 600,
                fontSize: '0.92rem',
                letterSpacing: '0.04em',
                transition: 'all 0.3s ease',
                position: 'relative'
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Action Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          
          {/* Sound Ambience Toggle */}
          <button
            onClick={() => { toggleSound(); }}
            style={{
              padding: '0.65rem',
              borderRadius: '50%',
              border: '1px solid var(--border-gold)',
              backgroundColor: 'rgba(28, 23, 19, 0.75)',
              color: soundEnabled ? 'var(--accent-gold-bright)' : 'var(--text-muted)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s ease',
              boxShadow: soundEnabled ? '0 0 15px rgba(245, 158, 11, 0.25)' : 'none'
            }}
            title={soundEnabled ? "Mute Ambient Sound" : "Enable Ambient Sound"}
          >
            {soundEnabled ? <Volume2 size={18} /> : <VolumeX size={18} />}
          </button>

          {/* Cart Icon & Counter Drawer Toggle */}
          <button
            onClick={() => { if (playClick) playClick(); setIsDrawerOpen(true); }}
            style={{
              position: 'relative',
              padding: '0.65rem',
              borderRadius: '50%',
              border: '1px solid var(--border-gold)',
              backgroundColor: 'rgba(28, 23, 19, 0.75)',
              color: 'var(--text-primary)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s ease'
            }}
            title="Open Order Experience"
          >
            <ShoppingBag size={18} />
            {cartCount > 0 && (
              <span
                style={{
                  position: 'absolute',
                  top: '-4px',
                  right: '-4px',
                  backgroundColor: 'var(--accent-gold)',
                  color: '#0C0A09',
                  fontSize: '0.72rem',
                  fontWeight: '800',
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 2px 10px rgba(245, 158, 11, 0.65)'
                }}
              >
                {cartCount}
              </span>
            )}
          </button>

          {/* Reserve Table CTA Button */}
          <button
            onClick={() => { if (playClick) playClick(); onOpenReservation(); }}
            className="btn-primary"
            style={{ padding: '0.7rem 1.4rem', fontSize: '0.82rem' }}
          >
            <Calendar size={15} />
            <span>Reserve Table</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-only"
            style={{
              padding: '0.65rem',
              borderRadius: 'var(--radius-sm)',
              border: '1px solid var(--border-gold)',
              background: 'transparent',
              color: 'var(--text-primary)',
              cursor: 'pointer'
            }}
          >
            {mobileMenuOpen ? <X size={22} /> : <MenuIcon size={22} />}
          </button>
        </div>

      </div>

      {/* Mobile Nav Overlay */}
      {mobileMenuOpen && (
        <div
          style={{
            background: 'var(--bg-primary)',
            borderBottom: '1px solid var(--border-gold)',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem',
            textAlign: 'center'
          }}
        >
          {[
            { id: 'hero', label: 'Home' },
            { id: 'story', label: 'Our Story' },
            { id: 'menu', label: '3D Menu' },
            { id: 'experience', label: 'Accolades' },
            { id: 'gallery', label: 'Gallery' },
            { id: 'contact', label: 'Contact' },
          ].map(link => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => { e.preventDefault(); handleNavClick(e, link.id); }}
              style={{
                color: 'var(--text-primary)',
                textDecoration: 'none',
                fontFamily: 'var(--font-serif)',
                fontSize: '1.4rem',
                fontWeight: 600
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

