import React from 'react';
import { ArrowRight, Calendar, Sparkles, Award, Star, Compass } from 'lucide-react';
import ThreeCanvas from './ThreeCanvas';

export default function Hero({ onExploreMenu, onBookTable }) {
  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        padding: '6rem 0 5rem',
        overflow: 'hidden',
        background: 'radial-gradient(circle at 75% 30%, rgba(114, 47, 55, 0.2) 0%, rgba(10, 11, 13, 1) 75%)',
        minHeight: '88vh',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      {/* Background Subtle Ambient Glow */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          right: '10%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(212, 175, 55, 0.12) 0%, transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none'
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.1fr 0.9fr',
            gap: '4rem',
            alignItems: 'center'
          }}
        >
          
          {/* Hero Left Content */}
          <div className="animate-fade-in">
            
            {/* Live Status & Haute Tagline */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                backgroundColor: 'var(--accent-gold-light)',
                color: 'var(--accent-gold-bright)',
                border: '1px solid var(--border-gold)',
                padding: '0.45rem 1.1rem',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.82rem',
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                marginBottom: '1.75rem'
              }}
            >
              <Sparkles size={14} style={{ color: 'var(--accent-gold)' }} />
              <span>Modern Fusion • World-Class Culinary Theater</span>
            </div>

            {/* Main Brand Title & Tagline */}
            <h1
              style={{
                fontSize: '4.5rem',
                lineHeight: 1.05,
                color: 'var(--text-primary)',
                marginBottom: '1rem',
                fontWeight: 700,
                fontFamily: 'var(--font-serif)'
              }}
            >
              <span style={{ display: 'block', letterSpacing: '0.08em' }} className="text-gold-gradient">
                VELORA
              </span>
              <span
                style={{
                  fontSize: '2.4rem',
                  fontWeight: 400,
                  fontStyle: 'italic',
                  color: 'var(--text-secondary)',
                  display: 'block',
                  marginTop: '0.2rem'
                }}
              >
                Taste Beyond the Ordinary
              </span>
            </h1>

            <p
              style={{
                fontSize: '1.15rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.8,
                marginBottom: '2.5rem',
                maxWidth: '560px',
                fontFamily: 'var(--font-sans)'
              }}
            >
              Where contemporary culinary art meets immersive 3D architecture. Experience rare 24K Miyazaki Wagyu, smoked black cod, and handcrafted botanical mixology.
            </p>

            {/* CTA Action Buttons */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', flexWrap: 'wrap' }}>
              <button
                onClick={onExploreMenu}
                className="btn-primary"
                style={{ padding: '1.05rem 2.4rem', fontSize: '0.92rem' }}
              >
                <span>Explore Menu</span>
                <ArrowRight size={18} />
              </button>

              <button
                onClick={onBookTable}
                className="btn-secondary"
                style={{ padding: '1.05rem 2.2rem', fontSize: '0.92rem' }}
              >
                <Calendar size={17} />
                <span>Reserve a Table</span>
              </button>
            </div>

            {/* Michelin & Luxury Metrics */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '2.5rem',
                marginTop: '3.5rem',
                paddingTop: '2rem',
                borderTop: '1px solid var(--border-gold)'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: 'var(--accent-gold)' }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={15} fill="currentColor" />
                  ))}
                  <span style={{ fontWeight: 800, color: 'var(--text-primary)', marginLeft: '0.4rem', fontSize: '1rem' }}>
                    3 Michelin Stars
                  </span>
                </div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: '0.3rem' }}>
                  World’s 50 Best Restaurants 2026
                </div>
              </div>

              <div style={{ borderLeft: '1px solid var(--border-gold)', paddingLeft: '2.5rem' }}>
                <div style={{ fontSize: '1.1rem', fontFamily: 'var(--font-serif)', fontWeight: 700, color: 'var(--accent-gold-bright)' }}>
                  Arts District Flagship
                </div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                  Private Cellar & Rooftop Lounge
                </div>
              </div>
            </div>

          </div>

          {/* Hero Right Visual Presentation - Interactive 3D WebGL Canvas */}
          <div style={{ position: 'relative', height: '480px' }}>
            
            {/* Interactive Three.js 3D WebGL Canvas Layer */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                zIndex: 1,
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden'
              }}
            >
              <ThreeCanvas interactive={true} />
            </div>

            {/* Floating Featured Dish Preview Overlay */}
            <div
              className="glass-card animate-float"
              style={{
                position: 'absolute',
                bottom: '-20px',
                left: '20px',
                right: '20px',
                zIndex: 2,
                padding: '1.25rem 1.6rem',
                borderRadius: 'var(--radius-md)',
                boxShadow: 'var(--shadow-3d)',
                display: 'flex',
                alignItems: 'center',
                gap: '1.25rem'
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=300&q=80"
                alt="24K Gold Saffron Wagyu Tenderloin"
                style={{
                  width: '72px',
                  height: '72px',
                  borderRadius: 'var(--radius-sm)',
                  objectFit: 'cover',
                  border: '1px solid var(--accent-gold)'
                }}
              />
              <div style={{ flex: 1 }}>
                <span className="badge-tag badge-gold" style={{ fontSize: '0.68rem', padding: '0.25rem 0.65rem' }}>
                  👑 Chef's Masterpiece
                </span>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-primary)', marginTop: '0.3rem' }}>
                  24K Gold Saffron Wagyu
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  A5 Miyazaki Wagyu & Shaved Winter Truffle
                </div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <span style={{ fontSize: '1.3rem', fontFamily: 'var(--font-serif)', fontWeight: 700, color: 'var(--accent-gold-bright)' }}>
                  $165
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
