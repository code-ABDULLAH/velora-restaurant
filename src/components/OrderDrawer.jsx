import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ArrowRight, CheckCircle2, ShoppingBag, Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function OrderDrawer() {
  const { isDrawerOpen, setIsDrawerOpen, cartItems, removeFromCart, updateQuantity, clearCart, cartTotal } = useCart();
  const [orderType, setOrderType] = useState('pickup');
  const [tipPercentage, setTipPercentage] = useState(18);
  const [customerName, setCustomerName] = useState('');
  const [phone, setPhone] = useState('');
  const [isOrdered, setIsOrdered] = useState(false);

  if (!isDrawerOpen) return null;

  const tipAmount = (cartTotal * tipPercentage) / 100;
  const taxAmount = cartTotal * 0.08875; // NYC Sales Tax
  const grandTotal = cartTotal + tipAmount + taxAmount;

  const handleCheckout = (e) => {
    e.preventDefault();
    if (cartItems.length === 0) return;
    setIsOrdered(true);
    setTimeout(() => {
      clearCart();
    }, 1000);
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(5, 6, 7, 0.8)',
        backdropFilter: 'blur(12px)',
        zIndex: 250,
        display: 'flex',
        justifyContent: 'flex-end',
        animation: 'fadeIn 0.3s ease'
      }}
      onClick={() => setIsDrawerOpen(false)}
    >
      <div
        className="glass-card"
        style={{
          width: '100%',
          maxWidth: '480px',
          height: '100%',
          boxShadow: 'var(--shadow-3d)',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          borderLeft: '1px solid var(--accent-gold)'
        }}
        onClick={e => e.stopPropagation()}
      >
        
        {/* Drawer Header */}
        <div
          style={{
            padding: '1.75rem',
            borderBottom: '1px solid var(--border-gold)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: 'rgba(10, 11, 13, 0.95)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <ShoppingBag size={22} style={{ color: 'var(--accent-gold-bright)' }} />
            <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', fontFamily: 'var(--font-serif)', fontWeight: 700 }}>
              VELORA Culinary Order
            </h3>
          </div>

          <button
            onClick={() => {
              setIsDrawerOpen(false);
              setIsOrdered(false);
            }}
            style={{
              border: 'none',
              background: 'none',
              cursor: 'pointer',
              color: 'var(--accent-gold-bright)'
            }}
          >
            <X size={22} />
          </button>
        </div>

        {isOrdered ? (
          /* Order Submitted Screen */
          <div
            style={{
              padding: '3rem 2rem',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              flex: 1
            }}
          >
            <div
              style={{
                width: '76px',
                height: '76px',
                borderRadius: '50%',
                backgroundColor: 'var(--accent-gold-light)',
                color: 'var(--accent-gold-bright)',
                border: '1px solid var(--accent-gold)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.5rem'
              }}
            >
              <CheckCircle2 size={44} />
            </div>

            <h3 style={{ fontSize: '2.2rem', color: 'var(--text-primary)', fontFamily: 'var(--font-serif)', marginBottom: '0.5rem' }}>
              Order Confirmed
            </h3>

            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', marginBottom: '1.75rem', lineHeight: 1.6 }}>
              Your order has been transmitted to Chef’s Pass. Prepared with white-glove precision.
            </p>

            <div
              style={{
                backgroundColor: 'rgba(10, 11, 13, 0.8)',
                padding: '1.25rem 1.5rem',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-gold)',
                width: '100%',
                marginBottom: '2rem',
                fontSize: '0.9rem',
                textAlign: 'center'
              }}
            >
              <div>Reference Code: <strong style={{ color: 'var(--accent-gold-bright)' }}>#VEL-{Math.floor(1000 + Math.random() * 9000)}</strong></div>
              <div style={{ marginTop: '0.3rem', color: 'var(--text-muted)' }}>Estimated Prep: <strong>20 Mins</strong></div>
            </div>

            <button
              onClick={() => {
                setIsOrdered(false);
                setIsDrawerOpen(false);
              }}
              className="btn-primary"
            >
              Return to Experience
            </button>
          </div>
        ) : (
          /* Cart Items & Checkout */
          <>
            {cartItems.length === 0 ? (
              <div
                style={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '2rem',
                  color: 'var(--text-muted)'
                }}
              >
                <ShoppingBag size={52} style={{ strokeWidth: 1.2, marginBottom: '1rem', color: 'var(--accent-gold-light)' }} />
                <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', fontFamily: 'var(--font-serif)', marginBottom: '0.5rem' }}>
                  Your order bag is empty
                </p>
                <p style={{ fontSize: '0.88rem', textAlign: 'center' }}>
                  Explore our seasonal repertoire to curate your tasting experience.
                </p>
              </div>
            ) : (
              <div style={{ flex: 1, overflowY: 'auto', padding: '1.75rem' }}>
                
                {/* Order Type Toggle */}
                <div style={{ display: 'flex', backgroundColor: 'rgba(10, 11, 13, 0.8)', padding: '0.35rem', borderRadius: 'var(--radius-full)', border: '1px solid var(--border-gold)', marginBottom: '1.75rem' }}>
                  <button
                    type="button"
                    onClick={() => setOrderType('pickup')}
                    style={{
                      flex: 1,
                      padding: '0.55rem 0',
                      borderRadius: 'var(--radius-full)',
                      border: 'none',
                      backgroundColor: orderType === 'pickup' ? 'var(--accent-gold-light)' : 'transparent',
                      color: orderType === 'pickup' ? 'var(--accent-gold-bright)' : 'var(--text-muted)',
                      fontFamily: 'var(--font-display)',
                      fontWeight: 600,
                      fontSize: '0.85rem',
                      cursor: 'pointer'
                    }}
                  >
                    👑 Curbside Valet Pickup
                  </button>
                  <button
                    type="button"
                    onClick={() => setOrderType('dinein')}
                    style={{
                      flex: 1,
                      padding: '0.55rem 0',
                      borderRadius: 'var(--radius-full)',
                      border: 'none',
                      backgroundColor: orderType === 'dinein' ? 'var(--accent-gold-light)' : 'transparent',
                      color: orderType === 'dinein' ? 'var(--accent-gold-bright)' : 'var(--text-muted)',
                      fontFamily: 'var(--font-display)',
                      fontWeight: 600,
                      fontSize: '0.85rem',
                      cursor: 'pointer'
                    }}
                  >
                    🍷 Table Express
                  </button>
                </div>

                {/* Items List */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2rem' }}>
                  {cartItems.map(item => (
                    <div
                      key={item.id}
                      style={{
                        display: 'flex',
                        gap: '1rem',
                        paddingBottom: '1.25rem',
                        borderBottom: '1px solid var(--border-subtle)'
                      }}
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        style={{ width: '70px', height: '70px', borderRadius: 'var(--radius-sm)', objectFit: 'cover', border: '1px solid var(--border-gold)' }}
                      />

                      <div style={{ flex: 1 }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.2rem' }}>
                          <h4 style={{ fontSize: '1.05rem', fontFamily: 'var(--font-serif)', fontWeight: 700, color: 'var(--text-primary)' }}>
                            {item.name}
                          </h4>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            style={{ border: 'none', background: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>

                        {item.specialNote && (
                          <div style={{ fontSize: '0.78rem', color: 'var(--accent-gold-bright)', fontStyle: 'italic', marginBottom: '0.4rem' }}>
                            Note: "{item.specialNote}"
                          </div>
                        )}

                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '0.5rem' }}>
                          <span style={{ fontWeight: 700, fontSize: '1.05rem', color: 'var(--accent-gold-bright)', fontFamily: 'var(--font-serif)' }}>
                            ${item.price * item.quantity}
                          </span>

                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', backgroundColor: 'rgba(10, 11, 13, 0.8)', padding: '0.25rem 0.65rem', borderRadius: 'var(--radius-full)', border: '1px solid var(--border-gold)' }}>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              style={{ border: 'none', background: 'none', cursor: 'pointer', color: 'var(--accent-gold-bright)' }}
                            >
                              <Minus size={13} />
                            </button>
                            <span style={{ fontSize: '0.88rem', fontWeight: 700, minWidth: '18px', textAlign: 'center' }}>
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              style={{ border: 'none', background: 'none', cursor: 'pointer', color: 'var(--accent-gold-bright)' }}
                            >
                              <Plus size={13} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Gratuity */}
                <div style={{ marginBottom: '1.75rem' }}>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontFamily: 'var(--font-display)', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.6rem' }}>
                    Sommelier & Culinary Team Gratuity:
                  </label>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    {[15, 18, 20, 25].map(pct => (
                      <button
                        key={pct}
                        type="button"
                        onClick={() => setTipPercentage(pct)}
                        style={{
                          flex: 1,
                          padding: '0.45rem 0',
                          borderRadius: 'var(--radius-sm)',
                          border: '1px solid',
                          borderColor: tipPercentage === pct ? 'var(--accent-gold)' : 'var(--border-subtle)',
                          backgroundColor: tipPercentage === pct ? 'var(--accent-gold-light)' : 'transparent',
                          color: tipPercentage === pct ? 'var(--accent-gold-bright)' : 'var(--text-secondary)',
                          fontSize: '0.85rem',
                          fontFamily: 'var(--font-display)',
                          fontWeight: 600,
                          cursor: 'pointer'
                        }}
                      >
                        {pct}%
                      </button>
                    ))}
                  </div>
                </div>

                {/* Customer Details */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '1.75rem' }}>
                  <input
                    type="text"
                    required
                    placeholder="Guest Name *"
                    value={customerName}
                    onChange={e => setCustomerName(e.target.value)}
                    style={{
                      padding: '0.8rem 1rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--border-gold)',
                      backgroundColor: 'rgba(10, 11, 13, 0.8)',
                      color: 'var(--text-primary)',
                      fontSize: '0.9rem',
                      outline: 'none'
                    }}
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Concierge Mobile Phone *"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    style={{
                      padding: '0.8rem 1rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--border-gold)',
                      backgroundColor: 'rgba(10, 11, 13, 0.8)',
                      color: 'var(--text-primary)',
                      fontSize: '0.9rem',
                      outline: 'none'
                    }}
                  />
                </div>

              </div>
            )}

            {/* Footer Checkout Summary */}
            {cartItems.length > 0 && (
              <div
                style={{
                  padding: '1.75rem',
                  borderTop: '1px solid var(--border-gold)',
                  backgroundColor: 'rgba(10, 11, 13, 0.95)'
                }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem', fontSize: '0.9rem', marginBottom: '1.25rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-secondary)' }}>
                    <span>Subtotal</span>
                    <span>${cartTotal.toFixed(2)}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-secondary)' }}>
                    <span>Gratuity ({tipPercentage}%)</span>
                    <span>${tipAmount.toFixed(2)}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-secondary)' }}>
                    <span>State & Local Tax (8.875%)</span>
                    <span>${taxAmount.toFixed(2)}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.35rem', fontFamily: 'var(--font-serif)', fontWeight: 700, color: 'var(--text-primary)', paddingTop: '0.6rem', borderTop: '1px dashed var(--border-gold)' }}>
                    <span>Grand Total</span>
                    <span style={{ color: 'var(--accent-gold-bright)' }}>${grandTotal.toFixed(2)}</span>
                  </div>
                </div>

                <button
                  onClick={handleCheckout}
                  className="btn-primary"
                  style={{ width: '100%', justifyContent: 'center', padding: '1rem' }}
                >
                  <Sparkles size={18} />
                  <span>Transmit Order • ${grandTotal.toFixed(2)}</span>
                </button>
              </div>
            )}
          </>
        )}

      </div>
    </div>
  );
}
