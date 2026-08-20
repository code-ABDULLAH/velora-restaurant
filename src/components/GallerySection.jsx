import React, { useState } from 'react';
import { Eye, Sparkles, X, Maximize2 } from 'lucide-react';

const GALLERY_ITEMS = [
  {
    id: 1,
    title: 'The Glacial Wagyu Composition',
    category: 'culinary',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=80',
    subtitle: 'Signature Cold-Cured Organic Culinary Art'
  },
  {
    id: 2,
    title: 'Main Dining Sanctum',
    category: 'ambiance',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80',
    subtitle: 'Architectural Luminous Interiors & Coastal Glass'
  },
  {
    id: 3,
    title: 'Arctic Lagoon Mixology',
    category: 'mixology',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1000&q=80',
    subtitle: 'Liquid Nitrogen, Botanical Mint & Citrus Smoke'
  },
  {
    id: 4,
    title: 'Private Wine Cellar Reserve',
    category: 'cellar',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1000&q=80',
    subtitle: 'Over 1,200 Rare Coastal & Grand Cru Vintages'
  },
  {
    id: 5,
    title: 'Glacial Black Cod Cloche',
    category: 'culinary',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=1000&q=80',
    subtitle: 'Infused with Smoked Sea Kelp & Yuzu Glaze'
  },
  {
    id: 6,
    title: "Chef's 3D Counter Stage",
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
    <section id="gallery" style={{ padding: '7rem 0', position: 'relative', overflow: 'hidden', backgroundColor: 'var(--bg-surface)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3.5rem' }}>
          <div className="badge-tag badge-gold" style={{ marginBottom: '1rem' }}>
            <Sparkles size={14} />
            Multi-Sensory Gallery
          </div>
          <h2 style={{ fontSize: '3.5rem', color: 'var(--text-primary)', marginBottom: '1.25rem', lineHeight: 1.15 }}>
            An Atmosphere of <span className="text-gold-gradient">Pure Artistry</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.7 }}>
            Explore the visual tapestry of VELORA — where breezy contemporary architecture meets avant-garde 3D culinary theater.
          </p>
        </div>

        {/* Gallery Filter Tabs */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
          {[
            { id: 'all', label: 'All Showcase' },
            { id: 'culinary', label: 'Plated Culinary' },
            { id: 'ambiance', label: 'Architecture & Light' },
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
                fontWeight: 700,
                fontSize: '0.88rem',
                letterSpacing: '0.04em',
                border: activeTab === tab.id ? '1px solid var(--accent-gold)' : '1px solid var(--border-light)',
                background: activeTab === tab.id ? 'var(--accent-gold)' : 'rgba(255, 255, 255, 0.9)',
                color: activeTab === tab.id ? '#FFFFFF' : 'var(--text-secondary)',
                cursor: 'pointer',
                boxShadow: 'var(--shadow-soft)',
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
            gap: '2.2rem'
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
                height: '340px',
                border: '1px solid var(--border-gold-strong)',
                boxShadow: 'var(--shadow-soft)'
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
                  background: 'linear-gradient(to top, rgba(15, 23, 42, 0.9) 0%, rgba(15, 23, 42, 0.15) 60%, transparent 100%)',
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.45rem', color: '#FFFFFF', fontWeight: 700 }}>
                      {item.title}
                    </h3>
                    <p style={{ fontSize: '0.85rem', color: '#E2E8F0', marginTop: '0.25rem' }}>
                      {item.subtitle}
                    </p>
                  </div>
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '50%',
                      background: 'rgba(255, 255, 255, 0.95)',
                      border: '1px solid var(--accent-gold)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--accent-gold-bright)',
                      boxShadow: '0 4px 15px rgba(20, 184, 166, 0.3)'
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
              background: 'rgba(15, 23, 42, 0.75)',
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
                background: 'rgba(255, 255, 255, 0.9)',
                border: '1px solid var(--accent-gold)',
                color: 'var(--text-primary)',
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: 'var(--shadow-soft)'
              }}
            >
              <X size={24} />
            </button>

            <div
              style={{
                maxWidth: '900px',
                width: '100%',
                background: '#FFFFFF',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                border: '1px solid var(--border-gold-strong)',
                boxShadow: '0 25px 60px rgba(15, 23, 42, 0.2)'
              }}
              onClick={e => e.stopPropagation()}
            >
              <img
                src={activeImage.image}
                alt={activeImage.title}
                style={{ width: '100%', maxHeight: '550px', objectFit: 'cover' }}
              />
              <div style={{ padding: '2rem', textAlign: 'center' }}>
                <h3 style={{ fontSize: '2rem', color: 'var(--accent-gold-bright)', marginBottom: '0.5rem', fontFamily: 'var(--font-serif)' }}>
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


