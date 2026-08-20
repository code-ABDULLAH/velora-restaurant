import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Crown, Sparkles } from 'lucide-react';
import VeloraLogo from './VeloraLogo';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail('');
  };

  return (
    <footer style={{ backgroundColor: 'var(--bg-dark)', color: 'var(--text-primary)', paddingTop: '6rem', paddingBottom: '3.5rem', borderTop: '1px solid var(--border-gold)' }}>
      <div className="container">
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '4rem', marginBottom: '4.5rem' }}>
          
          {/* Brand Column */}
          <div>
            <div style={{ marginBottom: '1.25rem' }}>
              <VeloraLogo size={48} />
            </div>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.7, marginBottom: '1.75rem' }}>
              VELORA is an immersive 3D haute dining sanctuary fusing Japanese precision, French gastronomy, and architectural acoustics.
            </p>

            <div style={{ display: 'flex', gap: '0.6rem' }} className="badge-tag badge-gold">
              <Crown size={12} />
              Three Michelin Stars • 2026
            </div>
          </div>

          {/* Dining Hours */}
          <div>
            <h4 style={{ fontSize: '1.2rem', color: 'var(--accent-gold-bright)', marginBottom: '1.25rem', fontFamily: 'var(--font-serif)', fontWeight: 700 }}>
              Dining Hours
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.7rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              <li style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Tue – Thu</span>
                <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>5:00 PM – 11:30 PM</span>
              </li>
              <li style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Fri – Sun</span>
                <span style={{ color: 'var(--accent-gold-bright)', fontWeight: 700 }}>5:00 PM – 1:00 AM</span>
              </li>
              <li style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Monday</span>
                <span style={{ color: 'var(--text-muted)' }}>Private Tasting Only</span>
              </li>
              <li style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '0.5rem', borderTop: '1px solid var(--border-subtle)' }}>
                <span>Valet Service</span>
                <span style={{ color: 'var(--accent-gold-bright)' }}>Complimentary</span>
              </li>
            </ul>
          </div>

          {/* Location & Contact */}
          <div>
            <h4 style={{ fontSize: '1.2rem', color: 'var(--accent-gold-bright)', marginBottom: '1.25rem', fontFamily: 'var(--font-serif)', fontWeight: 700 }}>
              Concierge & Address
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              <div style={{ display: 'flex', gap: '0.65rem', alignItems: 'flex-start' }}>
                <MapPin size={18} style={{ color: 'var(--accent-gold)', flexShrink: 0, marginTop: '3px' }} />
                <span>700 Fifth Avenue, Arts District, New York, NY 10019</span>
              </div>
              <div style={{ display: 'flex', gap: '0.65rem', alignItems: 'center' }}>
                <Phone size={18} style={{ color: 'var(--accent-gold)', flexShrink: 0 }} />
                <a href="tel:+18008356721" style={{ color: 'var(--text-primary)', textDecoration: 'none', fontWeight: 600 }}>+1 (800) 835-6721</a>
              </div>
              <div style={{ display: 'flex', gap: '0.65rem', alignItems: 'center' }}>
                <Mail size={18} style={{ color: 'var(--accent-gold)', flexShrink: 0 }} />
                <span style={{ color: 'var(--text-secondary)' }}>concierge@velora-dining.com</span>
              </div>
            </div>
          </div>

          {/* Exclusive Journal Dispatch */}
          <div>
            <h4 style={{ fontSize: '1.2rem', color: 'var(--accent-gold-bright)', marginBottom: '1.25rem', fontFamily: 'var(--font-serif)', fontWeight: 700 }}>
              The Private Journal
            </h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
              Subscribe to receive exclusive invitations for quarterly seasonal menu debuts and rare vintage wine releases.
            </p>

            {subscribed ? (
              <div style={{ backgroundColor: 'var(--accent-gold-light)', color: 'var(--accent-gold-bright)', padding: '0.85rem 1.1rem', borderRadius: 'var(--radius-sm)', fontSize: '0.85rem', border: '1px solid var(--accent-gold)' }}>
                ✓ Welcome to VELORA Private Dispatch.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} style={{ display: 'flex', gap: '0.5rem' }}>
                <input
                  type="email"
                  required
                  placeholder="Enter guest email address"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  style={{
                    flex: 1,
                    padding: '0.75rem 1rem',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--border-gold)',
                    backgroundColor: 'rgba(10, 11, 13, 0.9)',
                    color: 'var(--text-primary)',
                    fontSize: '0.88rem',
                    outline: 'none'
                  }}
                />
                <button
                  type="submit"
                  className="btn-primary"
                  style={{ padding: '0 1.25rem', borderRadius: 'var(--radius-sm)' }}
                >
                  <Send size={16} />
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Bar */}
        <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '2.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.25rem', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
          <div>
            © 2026 VELORA Haute Gastronomy. All rights reserved. Portfolio Showcase Project.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--accent-gold-bright)' }}>
            <Sparkles size={14} />
            Designed & Engineered for Creative Portfolio Showcase
          </div>
        </div>

      </div>
    </footer>
  );
}
