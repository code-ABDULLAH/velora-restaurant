import React from 'react';
import { ArrowRight, Calendar, Sparkles, Star, Crown, Flame } from 'lucide-react';
import HeroCulinaryShowcase from './HeroCulinaryShowcase';

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
                backgroundColor: 'rgba(13, 148, 136, 0.1)',
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
              <span>Modern Haute Fusion • 3-Star Gastronomy</span>
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
                The Art of Fine Culinary Dining
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
              Where breezy coastal refinement meets visionary fine dining. Indulge in Glacial Wagyu, smoked black cod cloche, and artisan botanicals.
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
                <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: '0.3rem', fontWeight: 600 }}>
                  World’s 50 Best Restaurants 2026
                </div>
              </div>

              <div style={{ borderLeft: '1px solid var(--border-gold)', paddingLeft: '2.5rem' }}>
                <div style={{ fontSize: '1.15rem', fontFamily: 'var(--font-serif)', fontWeight: 700, color: 'var(--accent-gold-bright)' }}>
                  Arts District Flagship
                </div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: '0.2rem', fontWeight: 600 }}>
                  Private Cellar & Rooftop Lounge
                </div>
              </div>
            </div>

          </div>

          {/* Hero Right Visual Presentation - Interactive Culinary Stage */}
          <div>
            <HeroCulinaryShowcase />
          </div>

        </div>
      </div>
    </section>
  );
}


