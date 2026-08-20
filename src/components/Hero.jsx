import React from 'react';
import { ArrowRight, Calendar, Sparkles, Star, Crown, Flame } from 'lucide-react';
import ThreeCanvas from './ThreeCanvas';

export default function Hero({ onExploreMenu, onBookTable }) {
  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        padding: '5rem 0 5rem',
        overflow: 'hidden',
        background: 'radial-gradient(circle at 75% 35%, rgba(56, 189, 248, 0.12) 0%, rgba(20, 184, 166, 0.08) 35%, rgba(248, 250, 252, 1) 80%)',
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      {/* Background Volumetric Cool Mint & Cyan Glows */}
      <div
        style={{
          position: 'absolute',
          top: '15%',
          right: '8%',
          width: '550px',
          height: '550px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(20, 184, 166, 0.15) 0%, rgba(56, 189, 248, 0.1) 50%, transparent 75%)',
          filter: 'blur(70px)',
          pointerEvents: 'none'
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.1fr 0.9fr',
            gap: '3.5rem',
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
                border: '1px solid var(--border-gold-strong)',
                padding: '0.45rem 1.15rem',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.82rem',
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                marginBottom: '1.75rem',
                boxShadow: '0 4px 15px rgba(20, 184, 166, 0.15)'
              }}
            >
              <Sparkles size={14} style={{ color: 'var(--accent-gold)' }} />
              <span>Modern Haute Fusion • Immersive 3D Gastronomy</span>
            </div>

            {/* Main Brand Title & Tagline */}
            <h1
              style={{
                fontSize: '4.6rem',
                lineHeight: 1.05,
                color: 'var(--text-primary)',
                marginBottom: '1.2rem',
                fontWeight: 700,
                fontFamily: 'var(--font-serif)'
              }}
            >
              <span style={{ display: 'block', letterSpacing: '0.06em' }} className="text-gold-gradient">
                VELORA
              </span>
              <span
                style={{
                  fontSize: '2.4rem',
                  fontWeight: 400,
                  fontStyle: 'italic',
                  color: 'var(--text-secondary)',
                  display: 'block',
                  marginTop: '0.3rem'
                }}
              >
                The Art of 3D Culinary Theater
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
              Where breezy coastal refinement meets interactive 3D architecture. Indulge in Glacial Wagyu, smoked black cod cloche, and arctic nitrogen mixology.
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
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: '#0D9488' }}>
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
                <div style={{ fontSize: '1.15rem', fontFamily: 'var(--font-serif)', fontWeight: 700, color: 'var(--accent-gold-bright)' }}>
                  Arts District Flagship
                </div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                  Private Cellar & Rooftop Lounge
                </div>
              </div>
            </div>

          </div>

          {/* Hero Right Visual Presentation - Interactive 3D WebGL Canvas */}
          <div style={{ position: 'relative', height: '520px' }}>
            
            {/* Interactive Three.js 3D WebGL Canvas Stage */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                zIndex: 1,
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(240, 253, 250, 0.9) 100%)',
                border: '1px solid var(--border-gold-strong)',
                boxShadow: 'var(--shadow-3d)'
              }}
            >
              <ThreeCanvas interactive={true} />
            </div>

            {/* Floating Featured Dish Preview Overlay Card */}
            <div
              className="glass-card animate-float"
              style={{
                position: 'absolute',
                bottom: '-24px',
                left: '20px',
                right: '20px',
                zIndex: 2,
                padding: '1.2rem 1.6rem',
                borderRadius: 'var(--radius-md)',
                boxShadow: 'var(--shadow-3d-hover)',
                display: 'flex',
                alignItems: 'center',
                gap: '1.25rem',
                border: '1px solid var(--border-gold-strong)',
                background: 'rgba(255, 255, 255, 0.92)'
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=300&q=80"
                alt="Glacial Wagyu Tenderloin"
                style={{
                  width: '74px',
                  height: '74px',
                  borderRadius: 'var(--radius-sm)',
                  objectFit: 'cover',
                  border: '1px solid var(--accent-gold)'
                }}
              />
              <div style={{ flex: 1 }}>
                <span className="badge-tag badge-gold" style={{ fontSize: '0.68rem', padding: '0.22rem 0.65rem' }}>
                  <Crown size={11} />
                  Chef's 3D Masterpiece
                </span>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)', marginTop: '0.3rem' }}>
                  Glacial Wagyu Tenderloin
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  A5 Miyazaki Wagyu & Winter Truffle Foam
                </div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <span style={{ fontSize: '1.4rem', fontFamily: 'var(--font-serif)', fontWeight: 700, color: 'var(--accent-gold-bright)' }}>
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

