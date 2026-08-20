import React, { useState } from 'react';
import { X, Plus, Minus, Star, Sparkles, ShoppingBag, Crown } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function DishModal() {
  const { selectedDishModal, setSelectedDishModal, addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [specialNote, setSpecialNote] = useState('');

  if (!selectedDishModal) return null;

  const handleAddToCart = () => {
    addToCart(selectedDishModal, quantity, specialNote);
    setSelectedDishModal(null);
    setQuantity(1);
    setSpecialNote('');
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(5, 6, 7, 0.85)',
        backdropFilter: 'blur(16px)',
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
          maxWidth: '640px',
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          boxShadow: 'var(--shadow-3d)',
          position: 'relative',
          border: '1px solid var(--accent-gold)'
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
            backgroundColor: 'rgba(10, 11, 13, 0.8)',
            border: '1px solid var(--accent-gold)',
            color: 'var(--accent-gold-bright)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 10
          }}
        >
          <X size={20} />
        </button>

        {/* Modal Image Header */}
        <div style={{ height: '280px', width: '100%', position: 'relative' }}>
          <img
            src={selectedDishModal.image}
            alt={selectedDishModal.name}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, var(--bg-card-solid) 0%, transparent 70%)'
            }}
          />
        </div>

        {/* Modal Body */}
        <div style={{ padding: '2rem' }}>
          
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.8rem' }}>
            <span className="badge-tag badge-gold">
              <Crown size={12} />
              {selectedDishModal.category}
            </span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: 'var(--accent-gold-bright)', fontWeight: 700 }}>
              <Star size={16} fill="currentColor" />
              <span>{selectedDishModal.rating} ({selectedDishModal.reviewsCount} reviews)</span>
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
              backgroundColor: 'rgba(10, 11, 13, 0.7)',
              padding: '1.1rem',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-gold)',
              marginBottom: '1.75rem',
              textAlign: 'center'
            }}
          >
            <div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Energy</div>
              <div style={{ fontWeight: 700, color: 'var(--accent-gold-bright)', marginTop: '3px' }}>{selectedDishModal.calories} kcal</div>
            </div>
            <div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Preparation</div>
              <div style={{ fontWeight: 700, color: 'var(--text-primary)', marginTop: '3px' }}>{selectedDishModal.prepTime}</div>
            </div>
            <div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Origin</div>
              <div style={{ fontWeight: 700, color: 'var(--accent-gold-bright)', marginTop: '3px' }}>100% Organic</div>
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
                    backgroundColor: 'rgba(212, 175, 55, 0.1)',
                    border: '1px solid var(--border-gold)',
                    padding: '0.35rem 0.85rem',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.82rem',
                    color: 'var(--text-primary)'
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
              placeholder="e.g. Extra black truffle shavings, sauce on side..."
              value={specialNote}
              onChange={e => setSpecialNote(e.target.value)}
              style={{
                width: '100%',
                padding: '0.85rem 1.1rem',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--border-gold)',
                backgroundColor: 'rgba(10, 11, 13, 0.8)',
                color: 'var(--text-primary)',
                fontSize: '0.9rem',
                outline: 'none'
              }}
            />
          </div>

          {/* Stepper & Add Button */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1.25rem', paddingTop: '1.25rem', borderTop: '1px solid var(--border-subtle)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', backgroundColor: 'rgba(10, 11, 13, 0.8)', padding: '0.5rem 1rem', borderRadius: 'var(--radius-full)', border: '1px solid var(--border-gold)' }}>
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                style={{ border: 'none', background: 'none', cursor: 'pointer', color: 'var(--accent-gold-bright)' }}
              >
                <Minus size={16} />
              </button>
              <span style={{ fontWeight: 700, fontSize: '1.05rem', color: 'var(--text-primary)', minWidth: '22px', textAlign: 'center' }}>
                {quantity}
              </span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                style={{ border: 'none', background: 'none', cursor: 'pointer', color: 'var(--accent-gold-bright)' }}
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
