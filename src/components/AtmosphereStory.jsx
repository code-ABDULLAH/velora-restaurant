import React, { useState } from 'react';
import { Sparkles, Compass, ShieldCheck, Flame, Wine, Clock, Eye } from 'lucide-react';

export default function AtmosphereStory() {
  const [activeStoryTab, setActiveStoryTab] = useState('philosophy');

  return (
    <section id="story" style={{ padding: '7rem 0', position: 'relative', overflow: 'hidden', backgroundColor: 'var(--bg-surface)' }}>
      {/* Background Warm Wine & Amber Glow */}
      <div
        style={{
          position: 'absolute',
          top: '30%',
          left: '-10%',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(159, 18, 57, 0.2) 0%, rgba(245, 158, 11, 0.08) 50%, transparent 70%)',
          filter: 'blur(80px)',
          pointerEvents: 'none'
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4.5rem', alignItems: 'center' }}>
          
          {/* Visual Presentation Box */}
          <div style={{ position: 'relative' }}>
            <div
              className="card-3d glass-card"
              style={{
                borderRadius: 'var(--radius-lg)',
                padding: '0.85rem',
                position: 'relative',
                border: '1px solid var(--border-gold-strong)'
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80"
                alt="VELORA Dining Ambiance"
                style={{
                  width: '100%',
                  height: '460px',
                  objectFit: 'cover',
                  borderRadius: 'calc(var(--radius-lg) - 6px)'
                }}
              />

              {/* Floating Stat Card 1 */}
              <div
                className="glass-card animate-float"
                style={{
                  position: 'absolute',
                  top: '-25px',
                  right: '-25px',
                  padding: '1.2rem 1.6rem',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--accent-gold)',
                  maxWidth: '240px',
                  boxShadow: 'var(--shadow-3d-hover)'
                }}
              >
                <div style={{ fontSize: '2.1rem', fontFamily: 'var(--font-serif)', fontWeight: 700, color: 'var(--accent-gold-bright)' }}>
                  1,200+
                </div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>
                  Rare Cellar Vintage Selections
                </div>
              </div>

              {/* Floating Stat Card 2 */}
              <div
                className="glass-card animate-float"
                style={{
                  position: 'absolute',
                  bottom: '-25px',
                  left: '-25px',
                  padding: '1.2rem 1.6rem',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-gold-strong)',
                  animationDelay: '2s',
                  maxWidth: '240px',
                  boxShadow: 'var(--shadow-3d-hover)'
                }}
              >
                <div style={{ fontSize: '2.1rem', fontFamily: 'var(--font-serif)', fontWeight: 700, color: 'var(--accent-gold-bright)' }}>
                  72 Hours
                </div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>
                  Precision Cured Wagyu & Miso
                </div>
              </div>

            </div>
          </div>

          {/* Text & Philosophy Content */}
          <div className="animate-fade-in">
            <div className="badge-tag badge-gold" style={{ marginBottom: '1rem' }}>
              <Compass size={14} />
              The VELORA Experience
            </div>

            <h2 style={{ fontSize: '3.6rem', color: 'var(--text-primary)', marginBottom: '1.5rem', lineHeight: 1.1 }}>
              Where Gastronomy <br />
              <span className="text-gold-gradient">Meets 3D Artistry</span>
            </h2>

            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '2rem' }}>
              VELORA was conceived as a sanctuary of multi-sensory luxury. We transcend traditional dining by fusing contemporary Japanese-French culinary discipline with architectural acoustics and dynamic 3D visual environments.
            </p>

            {/* Interactive Story Tabs */}
            <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
              {[
                { id: 'philosophy', label: 'Culinary Philosophy' },
                { id: 'lighting', label: 'Acoustics & Lighting' },
                { id: 'cellar', label: 'Vintage Cellar' }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveStoryTab(tab.id)}
                  style={{
                    padding: '0.6rem 1.25rem',
                    borderRadius: 'var(--radius-full)',
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    border: '1px solid',
                    borderColor: activeStoryTab === tab.id ? 'var(--accent-gold)' : 'var(--border-subtle)',
                    background: activeStoryTab === tab.id ? 'var(--accent-gold-light)' : 'transparent',
                    color: activeStoryTab === tab.id ? 'var(--accent-gold-bright)' : 'var(--text-muted)',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Descriptions */}
            <div
              style={{
                padding: '1.6rem',
                borderRadius: 'var(--radius-md)',
                backgroundColor: 'rgba(28, 23, 19, 0.85)',
                border: '1px solid var(--border-gold-strong)'
              }}
            >
              {activeStoryTab === 'philosophy' && (
                <p style={{ color: 'var(--text-primary)', fontSize: '0.98rem', lineHeight: 1.7 }}>
                  <strong style={{ color: 'var(--accent-gold-bright)' }}>Pure Sourcing & Zero Waste:</strong> Every protein, truffle, and botanical ingredient is sourced directly from sustainable family estates and wild ocean harbors.
                </p>
              )}
              {activeStoryTab === 'lighting' && (
                <p style={{ color: 'var(--text-primary)', fontSize: '0.98rem', lineHeight: 1.7 }}>
                  <strong style={{ color: 'var(--accent-gold-bright)' }}>Precision Mood Lighting:</strong> Custom 3D projection mapping and acoustic dampening panels ensure an intimate, soothing atmosphere for every table.
                </p>
              )}
              {activeStoryTab === 'cellar' && (
                <p style={{ color: 'var(--text-primary)', fontSize: '0.98rem', lineHeight: 1.7 }}>
                  <strong style={{ color: 'var(--accent-gold-bright)' }}>Sommelier Reserve:</strong> Curated by Master Sommelier Lucian Vane, housing legendary Grand Cru vintages and artisanal Japanese small-batch sake.
                </p>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

