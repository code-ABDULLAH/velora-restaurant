import React, { useState } from 'react';
import { Calendar, Clock, Users, Sparkles, CheckCircle2, Crown } from 'lucide-react';

export default function ReservationSection({ sectionRef }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    guests: '2',
    date: '',
    time: '19:30',
    area: 'Main Sanctum',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.date) return;
    setSubmitted(true);
  };

  return (
    <section
      id="reservation"
      ref={sectionRef}
      style={{
        padding: '7rem 0',
        position: 'relative',
        background: 'radial-gradient(circle at 50% 50%, rgba(56, 189, 248, 0.12) 0%, rgba(20, 184, 166, 0.08) 40%, rgba(248, 250, 252, 1) 85%)'
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        
        <div style={{ maxWidth: '840px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div className="badge-tag badge-gold" style={{ marginBottom: '1rem' }}>
              <Crown size={14} />
              Private Dining Reservations
            </div>
            <h2 style={{ fontSize: '3.6rem', color: 'var(--text-primary)', marginBottom: '1rem', lineHeight: 1.1 }}>
              Secure Your <span className="text-gold-gradient">VELORA Table</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.7 }}>
              Join us for an unrepeatable culinary journey. Reservations open 30 days in advance.
            </p>
          </div>

          <div className="glass-card" style={{ padding: '3rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-gold-strong)', backgroundColor: '#FFFFFF', boxShadow: 'var(--shadow-3d)' }}>
            
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                <CheckCircle2 size={64} style={{ color: 'var(--accent-gold)', marginBottom: '1.5rem' }} />
                <h3 style={{ fontSize: '2.4rem', fontFamily: 'var(--font-serif)', color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
                  Reservation Confirmed
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '520px', margin: '0 auto 2rem' }}>
                  Thank you, <strong style={{ color: 'var(--accent-gold-bright)' }}>{formData.name}</strong>. A concierge confirmation has been dispatched to <span style={{ color: 'var(--text-primary)' }}>{formData.email}</span>.
                </p>
                <div
                  style={{
                    display: 'inline-block',
                    padding: '1.25rem 2rem',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'rgba(13, 148, 136, 0.08)',
                    border: '1px solid var(--border-gold)',
                    textAlign: 'left'
                  }}
                >
                  <div style={{ fontSize: '0.88rem', color: 'var(--text-muted)', fontWeight: 600 }}>RESERVATION SUMMARY</div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--accent-gold-bright)', marginTop: '0.4rem' }}>
                    {formData.guests} Guests • {formData.date} @ {formData.time}
                  </div>
                  <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>
                    Seating: {formData.area}
                  </div>
                </div>
                <div style={{ marginTop: '2.5rem' }}>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-secondary"
                  >
                    Make Another Reservation
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.75rem' }}>
                
                {/* Full Name */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontSize: '0.88rem', fontFamily: 'var(--font-display)', fontWeight: 600, color: 'var(--text-secondary)' }}>
                    Full Guest Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alexander Vance"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      padding: '0.85rem 1.1rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--border-light)',
                      backgroundColor: '#F8FAFC',
                      color: 'var(--text-primary)',
                      fontSize: '0.95rem',
                      outline: 'none'
                    }}
                  />
                </div>

                {/* Email Address */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontSize: '0.88rem', fontFamily: 'var(--font-display)', fontWeight: 600, color: 'var(--text-secondary)' }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alexander@vance.com"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      padding: '0.85rem 1.1rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--border-light)',
                      backgroundColor: '#F8FAFC',
                      color: 'var(--text-primary)',
                      fontSize: '0.95rem',
                      outline: 'none'
                    }}
                  />
                </div>

                {/* Date */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontSize: '0.88rem', fontFamily: 'var(--font-display)', fontWeight: 600, color: 'var(--text-secondary)' }}>
                    Reservation Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={e => setFormData({ ...formData, date: e.target.value })}
                    style={{
                      padding: '0.85rem 1.1rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--border-light)',
                      backgroundColor: '#F8FAFC',
                      color: 'var(--text-primary)',
                      fontSize: '0.95rem',
                      outline: 'none'
                    }}
                  />
                </div>

                {/* Preferred Time */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontSize: '0.88rem', fontFamily: 'var(--font-display)', fontWeight: 600, color: 'var(--text-secondary)' }}>
                    Preferred Evening Slot *
                  </label>
                  <select
                    value={formData.time}
                    onChange={e => setFormData({ ...formData, time: e.target.value })}
                    style={{
                      padding: '0.85rem 1.1rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--border-light)',
                      backgroundColor: '#F8FAFC',
                      color: 'var(--text-primary)',
                      fontSize: '0.95rem',
                      outline: 'none'
                    }}
                  >
                    <option value="17:30">5:30 PM - Early Tasting</option>
                    <option value="18:30">6:30 PM - Sunset Experience</option>
                    <option value="19:30">7:30 PM - Prime Evening</option>
                    <option value="20:45">8:45 PM - Late Night Gala</option>
                    <option value="22:00">10:00 PM - Midnight Lounge</option>
                  </select>
                </div>

                {/* Guests Count */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontSize: '0.88rem', fontFamily: 'var(--font-display)', fontWeight: 600, color: 'var(--text-secondary)' }}>
                    Party Size
                  </label>
                  <select
                    value={formData.guests}
                    onChange={e => setFormData({ ...formData, guests: e.target.value })}
                    style={{
                      padding: '0.85rem 1.1rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--border-light)',
                      backgroundColor: '#F8FAFC',
                      color: 'var(--text-primary)',
                      fontSize: '0.95rem',
                      outline: 'none'
                    }}
                  >
                    <option value="1">1 Person (Solo Counter)</option>
                    <option value="2">2 Persons (Intimate)</option>
                    <option value="4">4 Persons (Private Table)</option>
                    <option value="6">6 Persons (Chef Table)</option>
                    <option value="8+">8+ Persons (VIP Cellar Suite)</option>
                  </select>
                </div>

                {/* Seating Sanctuary Area */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontSize: '0.88rem', fontFamily: 'var(--font-display)', fontWeight: 600, color: 'var(--text-secondary)' }}>
                    Dining Environment
                  </label>
                  <select
                    value={formData.area}
                    onChange={e => setFormData({ ...formData, area: e.target.value })}
                    style={{
                      padding: '0.85rem 1.1rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--border-light)',
                      backgroundColor: '#F8FAFC',
                      color: 'var(--text-primary)',
                      fontSize: '0.95rem',
                      outline: 'none'
                    }}
                  >
                    <option value="Main Sanctum">Main Dining Sanctum</option>
                    <option value="Chef's Counter">Chef’s Omakase Counter</option>
                    <option value="Private Wine Cellar">Private Wine Cellar Suite</option>
                    <option value="Sky Lounge Rooftop">Sky Lounge Glass Terrace</option>
                  </select>
                </div>

                {/* Submit CTA */}
                <div style={{ gridColumn: '1 / -1', marginTop: '1rem', textAlign: 'center' }}>
                  <button
                    type="submit"
                    className="btn-primary"
                    style={{ width: '100%', padding: '1.1rem', fontSize: '1rem' }}
                  >
                    <Sparkles size={18} />
                    <span>Confirm VELORA Table Request</span>
                  </button>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.75rem', fontWeight: 600 }}>
                    Dress Code: Elegant Coastal Chic • Complimentary Valet Parking Provided
                  </div>
                </div>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}


