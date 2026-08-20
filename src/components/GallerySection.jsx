import React, { useState } from 'react';
import { Eye, Sparkles, X, Maximize2 } from 'lucide-react';

const GALLERY_ITEMS = [
  {
    id: 1,
    title: 'The Golden Saffron Wagyu',
    category: 'culinary',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=80',
    subtitle: 'Signature 24K Gold Culinary Art'
  },
  {
    id: 2,
    title: 'Main Dining Sanctum',
    category: 'ambiance',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80',
    subtitle: 'Architectural Lighting & Velvet Interiors'
  },
  {
    id: 3,
    title: 'Velvet Nebula Mixology',
    category: 'mixology',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1000&q=80',
    subtitle: 'Liquid Nitrogen & Rosemary Smoke'
  },
  {
    id: 4,
    title: 'Private Wine Cellar Reserve',
    category: 'cellar',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1000&q=80',
    subtitle: 'Over 1,200 Rare Vintage Vintages'
  },
  {
    id: 5,
    title: 'Smoked Black Cod Cloche',
    category: 'culinary',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=1000&q=80',
    subtitle: 'Binchotan Charcoal Seared'
  },
  {
    id: 6,
    title: "Chef's Counter Dining",
    category: 'ambiance',
    image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1000&q=80',
    subtitle: 'Front-Row Immersive Culinary Experience'
  }
];

export default function GallerySection() {
  const [activeTab, setActiveTab] = useState('all');
  const [activeImage, setActiveImage] = useState(null);

  const filteredItems = activeTab === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeTab);

  return (
    <section id="gallery" style={{ padding: '7rem 0', position: 'relative', overflow: 'hidden' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3.5rem' }}>
          <div className="badge-tag badge-gold" style={{ marginBottom: '1rem' }}>
            <Sparkles size={14} />
            Multi-Sensory Gallery
          </div>
          <h2 style={{ fontSize: '3.2rem', color: 'var(--text-primary)', marginBottom: '1.25rem', lineHeight: 1.15 }}>
            An Atmosphere of <span className="text-gold-gradient">Pure Artistry</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.7 }}>
            Explore the visual tapestry of VELORA — where contemporary architecture meets avant-garde culinary theater.
          </p>
        </div>

        {/* Gallery Filter Tabs */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
          {[
            { id: 'all', label: 'All Showcase' },
            { id: 'culinary', label: 'Plated Culinary' },
            { id: 'ambiance', label: 'Architecture & Lighting' },
            { id: 'mixology', label: 'Artisan Mixology' },
            { id: 'cellar', label: 'Wine Cellar' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                padding: '0.65rem 1.4rem',
                borderRadius: 'var(--radius-full)',
                fontFamily: 'var(--font-display)',
                fontWeight: 600,
                fontSize: '0.88rem',
                letterSpacing: '0.04em',
                border: activeTab === tab.id ? '1px solid var(--accent-gold)' : '1px solid var(--border-subtle)',
                background: activeTab === tab.id ? 'var(--accent-gold-light)' : 'rgba(23, 26, 33, 0.5)',
                color: activeTab === tab.id ? 'var(--accent-gold-bright)' : 'var(--text-secondary)',
                cursor: 'pointer',
                transition: 'all 0.3s var(--transition-smooth)'
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
            gap: '2rem'
          }}
        >
          {filteredItems.map(item => (
            <div
              key={item.id}
              className="card-3d glass-card"
              onClick={() => setActiveImage(item)}
              style={{
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                cursor: 'pointer',
                position: 'relative',
                height: '320px',
                border: '1px solid var(--border-gold)'
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.6s var(--transition-smooth)'
                }}
              />

              {/* Gradient Overlay */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(10, 11, 13, 0.95) 0%, rgba(10, 11, 13, 0.2) 60%, transparent 100%)',
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.45rem', color: 'var(--text-primary)', fontWeight: 700 }}>
                      {item.title}
                    </h3>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                      {item.subtitle}
                    </p>
                  </div>
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '50%',
                      background: 'rgba(212, 175, 55, 0.2)',
                      border: '1px solid var(--accent-gold)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--accent-gold-bright)'
                    }}
                  >
                    <Maximize2 size={18} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Lightbox Preview */}
        {activeImage && (
          <div
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 2000,
              background: 'rgba(5, 6, 7, 0.95)',
              backdropFilter: 'blur(20px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '2rem'
            }}
            onClick={() => setActiveImage(null)}
          >
            <button
              onClick={() => setActiveImage(null)}
              style={{
                position: 'absolute',
                top: '2rem',
                right: '2rem',
                background: 'rgba(212, 175, 55, 0.2)',
                border: '1px solid var(--accent-gold)',
                color: 'white',
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
            >
              <X size={24} />
            </button>

            <div
              style={{
                maxWidth: '900px',
                width: '100%',
                background: 'var(--bg-card-solid)',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                border: '1px solid var(--accent-gold)',
                boxShadow: 'var(--shadow-3d)'
              }}
              onClick={e => e.stopPropagation()}
            >
              <img
                src={activeImage.image}
                alt={activeImage.title}
                style={{ width: '100%', maxHeight: '550px', objectFit: 'cover' }}
              />
              <div style={{ padding: '2rem', textAlign: 'center' }}>
                <h3 style={{ fontSize: '2rem', color: 'var(--accent-gold-bright)', marginBottom: '0.5rem' }}>
                  {activeImage.title}
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>
                  {activeImage.subtitle}
                </p>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
