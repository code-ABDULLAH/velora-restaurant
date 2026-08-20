import React, { useState } from 'react';
import { X, Plus, Minus, Star, Sparkles, ShoppingBag, Crown, Box, Image as ImageIcon } from 'lucide-react';
import { useCart } from '../context/CartContext';
import Dish3DViewer from './Dish3DViewer';

export default function DishModal() {
  const { selectedDishModal, setSelectedDishModal, addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [specialNote, setSpecialNote] = useState('');
  const [viewMode, setViewMode] = useState('photo'); // 'photo' | '3d'

  if (!selectedDishModal) return null;

  const handleAddToCart = () => {
    addToCart(selectedDishModal, quantity, specialNote);
    setSelectedDishModal(null);
    setQuantity(1);
    setSpecialNote('');
    setViewMode('photo');
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(15, 23, 42, 0.45)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        zIndex: 200,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
        animation: 'fadeIn 0.3s ease'
      }}
      onClick={() => setSelectedDishModal(null)}
    >
      <div
        className="glass-card"
        style={{
          borderRadius: 'var(--radius-lg)',
          maxWidth: '660px',
          width: '100%',
          maxHeight: '92vh',
          overflowY: 'auto',
          boxShadow: 'var(--shadow-3d)',
          position: 'relative',
          border: '1px solid var(--border-gold-strong)',
          background: 'rgba(255, 255, 255, 0.98)'
        }}
        onClick={e => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => setSelectedDishModal(null)}
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            border: '1px solid var(--border-light)',
            color: 'var(--text-primary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 20,
            transition: 'all 0.25s ease',
            boxShadow: 'var(--shadow-soft)'
          }}
        >
          <X size={20} />
        </button>

        {/* View Mode Toggle (Photo vs 3D Culinary Viewer) */}
        <div
          style={{
            position: 'absolute',
            top: '16px',
            left: '16px',
            zIndex: 20,
            display: 'flex',
            gap: '0.4rem',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            padding: '4px',
            borderRadius: 'var(--radius-full)',
            border: '1px solid var(--border-light)',
            backdropFilter: 'blur(10px)',
            boxShadow: 'var(--shadow-soft)'
          }}
        >
          <button
            onClick={() => setViewMode('photo')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              padding: '0.35rem 0.85rem',
              borderRadius: 'var(--radius-full)',
              border: 'none',
              backgroundColor: viewMode === 'photo' ? 'var(--accent-gold)' : 'transparent',
              color: viewMode === 'photo' ? '#FFFFFF' : 'var(--text-secondary)',
              fontSize: '0.75rem',
              fontWeight: 700,
              fontFamily: 'var(--font-display)',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            <ImageIcon size={13} />
            <span>Photo</span>
          </button>

          <button
            onClick={() => setViewMode('3d')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              padding: '0.35rem 0.85rem',
              borderRadius: 'var(--radius-full)',
              border: 'none',
              backgroundColor: viewMode === '3d' ? 'var(--accent-gold)' : 'transparent',
              color: viewMode === '3d' ? '#FFFFFF' : 'var(--text-secondary)',
              fontSize: '0.75rem',
              fontWeight: 700,
              fontFamily: 'var(--font-display)',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            <Box size={13} />
            <span>3D Interactive</span>
          </button>
        </div>

        {/* Modal Image or 3D Header */}
        <div style={{ height: '300px', width: '100%', position: 'relative', overflow: 'hidden', backgroundColor: '#F1F5F9' }}>
          {viewMode === 'photo' ? (
            <>
              <img
                src={selectedDishModal.image}
                alt={selectedDishModal.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(255, 255, 255, 0.9) 0%, transparent 60%)'
                }}
              />
            </>
          ) : (
            <div style={{ width: '100%', height: '100%', position: 'relative' }}>
              <Dish3DViewer dish={selectedDishModal} />
              <div
                style={{
                  position: 'absolute',
                  bottom: '10px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  fontSize: '0.72rem',
                  color: 'var(--accent-gold-bright)',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 600,
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  padding: '0.2rem 0.8rem',
                  borderRadius: 'var(--radius-full)',
                  border: '1px solid var(--border-gold)',
                  pointerEvents: 'none',
                  boxShadow: 'var(--shadow-soft)'
                }}
              >
                ✦ Move cursor to inspect 3D Platter
              </div>
            </div>
          )}
        </div>

        {/* Modal Body */}
        <div style={{ padding: '2rem' }}>
          
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.8rem' }}>
            <span className="badge-tag badge-gold">
              <Crown size={13} />
              {selectedDishModal.category.toUpperCase()}
            </span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: '#0D9488', fontWeight: 700 }}>
              <Star size={16} fill="currentColor" />
              <span style={{ color: 'var(--text-primary)' }}>{selectedDishModal.rating} ({selectedDishModal.reviewsCount} reviews)</span>
            </div>
          </div>

          <h2 style={{ fontSize: '2.2rem', color: 'var(--text-primary)', marginBottom: '0.8rem', fontFamily: 'var(--font-serif)', fontWeight: 700 }}>
            {selectedDishModal.name}
          </h2>

          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '1.75rem' }}>
            {selectedDishModal.longDesc}
          </p>

          {/* Quick Metrics */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1rem',
              backgroundColor: '#F8FAFC',
              padding: '1.1rem',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-light)',
              marginBottom: '1.75rem',
              textAlign: 'center'
            }}
          >
            <div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontFamily: 'var(--font-display)', fontWeight: 600 }}>Energy</div>
              <div style={{ fontWeight: 700, color: 'var(--accent-gold-bright)', marginTop: '3px', fontSize: '1rem' }}>{selectedDishModal.calories} kcal</div>
            </div>
            <div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontFamily: 'var(--font-display)', fontWeight: 600 }}>Preparation</div>
              <div style={{ fontWeight: 700, color: 'var(--text-primary)', marginTop: '3px', fontSize: '1rem' }}>{selectedDishModal.prepTime}</div>
            </div>
            <div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontFamily: 'var(--font-display)', fontWeight: 600 }}>Sourcing</div>
              <div style={{ fontWeight: 700, color: 'var(--accent-gold-bright)', marginTop: '3px', fontSize: '1rem' }}>100% Organic</div>
            </div>
          </div>

          {/* Key Ingredients */}
          <div style={{ marginBottom: '1.75rem' }}>
            <h4 style={{ fontSize: '1rem', color: 'var(--text-primary)', marginBottom: '0.75rem', fontFamily: 'var(--font-serif)', fontWeight: 700 }}>
              Master Ingredients:
            </h4>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {selectedDishModal.ingredients.map((ing, i) => (
                <span
                  key={i}
                  style={{
                    backgroundColor: 'rgba(13, 148, 136, 0.08)',
                    border: '1px solid var(--border-gold)',
                    padding: '0.35rem 0.9rem',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.82rem',
                    color: 'var(--text-primary)',
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 600
                  }}
                >
                  {ing}
                </span>
              ))}
            </div>
          </div>

          {/* Special Requests */}
          <div style={{ marginBottom: '1.75rem' }}>
            <label style={{ display: 'block', fontSize: '0.88rem', fontFamily: 'var(--font-display)', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
              Chef's Special Customization Notes:
            </label>
            <input
              type="text"
              placeholder="e.g. Extra mint glaze, sommelier pairing advice..."
              value={specialNote}
              onChange={e => setSpecialNote(e.target.value)}
              style={{
                width: '100%',
                padding: '0.85rem 1.1rem',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--border-light)',
                backgroundColor: '#F8FAFC',
                color: 'var(--text-primary)',
                fontSize: '0.9rem',
                outline: 'none'
              }}
            />
          </div>

          {/* Stepper & Add Button */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1.25rem', paddingTop: '1.25rem', borderTop: '1px solid var(--border-subtle)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', backgroundColor: '#F8FAFC', padding: '0.5rem 1.1rem', borderRadius: 'var(--radius-full)', border: '1px solid var(--border-light)' }}>
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                style={{ border: 'none', background: 'none', cursor: 'pointer', color: 'var(--accent-gold)' }}
              >
                <Minus size={16} />
              </button>
              <span style={{ fontWeight: 700, fontSize: '1.05rem', color: 'var(--text-primary)', minWidth: '22px', textAlign: 'center' }}>
                {quantity}
              </span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                style={{ border: 'none', background: 'none', cursor: 'pointer', color: 'var(--accent-gold)' }}
              >
                <Plus size={16} />
              </button>
            </div>

            <button
              onClick={handleAddToCart}
              className="btn-primary"
              style={{ flex: 1, justifyContent: 'center', padding: '0.95rem 1.6rem' }}
            >
              <ShoppingBag size={18} />
              <span>Add to Order • ${selectedDishModal.price * quantity}</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}


