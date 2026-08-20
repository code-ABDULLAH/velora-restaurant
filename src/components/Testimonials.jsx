import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/menuData';
import { Star, ChevronLeft, ChevronRight, Quote, Award } from 'lucide-react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex(prev => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex(prev => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section id="experience" style={{ padding: '7rem 0', backgroundColor: 'var(--bg-surface)', position: 'relative' }}>
      <div className="container" style={{ maxWidth: '880px' }}>
        
        {/* Section Title */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="badge-tag badge-gold" style={{ marginBottom: '1rem' }}>
            <Award size={14} />
            Critical Acclaim & Accolades
          </div>
          <h2 style={{ fontSize: '3.5rem', color: 'var(--text-primary)', fontFamily: 'var(--font-serif)', fontWeight: 700 }}>
            Echoes from <span className="text-gold-gradient">The Masters</span>
          </h2>
        </div>

        {/* Carousel Card */}
        <div
          className="glass-card card-3d"
          style={{
            borderRadius: 'var(--radius-lg)',
            padding: '4rem 3.5rem',
            border: '1px solid var(--border-gold-strong)',
            position: 'relative',
            textAlign: 'center',
            boxShadow: 'var(--shadow-3d-hover)'
          }}
        >
          <Quote
            size={56}
            style={{
              color: 'var(--accent-gold)',
              position: 'absolute',
              top: '28px',
              left: '36px',
              opacity: 0.25
            }}
          />

          {/* Rating Stars */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.35rem', color: 'var(--accent-gold-bright)', marginBottom: '1.75rem' }}>
            {[...Array(current.rating)].map((_, i) => (
              <Star key={i} size={22} fill="currentColor" />
            ))}
          </div>

          {/* Quote Text */}
          <p
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.75rem',
              color: 'var(--text-primary)',
              lineHeight: 1.55,
              marginBottom: '2.25rem',
              fontStyle: 'italic'
            }}
          >
            "{current.quote}"
          </p>

          {/* Author Details */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.25rem' }}>
            <img
              src={current.avatar}
              alt={current.author}
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                objectFit: 'cover',
                border: '2px solid var(--accent-gold)'
              }}
            />
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontWeight: 700, fontSize: '1.15rem', color: 'var(--text-primary)', fontFamily: 'var(--font-serif)' }}>
                {current.author}
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--accent-gold-bright)', fontFamily: 'var(--font-display)' }}>
                {current.title}
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              position: 'absolute',
              top: '50%',
              left: '16px',
              right: '16px',
              transform: 'translateY(-50%)',
              pointerEvents: 'none'
            }}
          >
            <button
              onClick={handlePrev}
              style={{
                pointerEvents: 'auto',
                width: '46px',
                height: '46px',
                borderRadius: '50%',
                backgroundColor: 'rgba(28, 23, 19, 0.9)',
                border: '1px solid var(--border-gold)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: 'var(--accent-gold-bright)',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.5)'
              }}
            >
              <ChevronLeft size={22} />
            </button>

            <button
              onClick={handleNext}
              style={{
                pointerEvents: 'auto',
                width: '46px',
                height: '46px',
                borderRadius: '50%',
                backgroundColor: 'rgba(28, 23, 19, 0.9)',
                border: '1px solid var(--border-gold)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: 'var(--accent-gold-bright)',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.5)'
              }}
            >
              <ChevronRight size={22} />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}

