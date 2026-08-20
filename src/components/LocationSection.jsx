import React from 'react';
import { MapPin, Navigation, ExternalLink, Clock, Car, Phone, Globe, ShieldCheck, Crown } from 'lucide-react';

export default function LocationSection() {
  const address = "700 Fifth Avenue, Arts District, New York, NY 10019";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("VELORA Haute Gastronomy " + address)}`;
  const mapEmbedSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.9967735398246!2d-73.976527!3d40.761066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258f97bf12345%3A0x123456789abcdef!2sFifth+Ave%2C+New+York%2C+NY!5e0!3m2!1sen!2s!4v1691000000000!5m2!1sen!2s";

  return (
    <section id="contact" style={{ padding: '7rem 0', backgroundColor: 'var(--bg-primary)', position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3.5rem' }}>
          <div className="badge-tag badge-gold" style={{ marginBottom: '1rem' }}>
            <MapPin size={14} />
            Flagship Venue & Concierge
          </div>
          <h2 style={{ fontSize: '3.5rem', color: 'var(--text-primary)', marginBottom: '1rem', lineHeight: 1.1 }}>
            Visit <span className="text-gold-gradient">VELORA</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.7 }}>
            Located in the heart of the Arts District, offering valet arrival, private dining suites, and rooftop terrace access.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3.5rem', alignItems: 'stretch' }}>
          
          {/* Left Column: Map */}
          <div
            className="glass-card"
            style={{
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <div style={{ position: 'relative', width: '100%', height: '400px', backgroundColor: 'var(--bg-dark)' }}>
              <iframe
                title="VELORA Flagship Location"
                src={mapEmbedSrc}
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                allowFullScreen=""
                loading="lazy"
              />
            </div>

            <div
              style={{
                padding: '1.75rem',
                backgroundColor: 'rgba(23, 26, 33, 0.9)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '1rem',
                borderTop: '1px solid var(--border-gold)',
                flexWrap: 'wrap'
              }}
            >
              <div>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', fontWeight: 700, color: 'var(--accent-gold-bright)' }}>
                  VELORA Flagship Sanctum
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  700 Fifth Avenue, Arts District
                </div>
              </div>

              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ padding: '0.65rem 1.25rem', fontSize: '0.82rem', textDecoration: 'none' }}
              >
                <Navigation size={15} />
                <span>Get Directions</span>
              </a>
            </div>
          </div>

          {/* Right Column: Information Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem', justifyContent: 'space-between' }}>
            
            {/* Address Card */}
            <div
              className="glass-card"
              style={{
                padding: '2rem',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-gold)'
              }}
            >
              <div style={{ display: 'flex', gap: '1.2rem' }}>
                <div
                  style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--accent-gold-light)',
                    color: 'var(--accent-gold-bright)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid var(--border-gold)',
                    flexShrink: 0
                  }}
                >
                  <Crown size={24} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.45rem', color: 'var(--text-primary)', marginBottom: '0.4rem', fontFamily: 'var(--font-serif)', fontWeight: 700 }}>
                    Sanctum Address & Valet
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.98rem', lineHeight: 1.6 }}>
                    700 Fifth Avenue, Arts District<br />
                    New York, NY 10019 • United States
                  </p>
                  <div style={{ marginTop: '0.75rem', color: 'var(--accent-gold-bright)', fontSize: '0.85rem', fontWeight: 600 }}>
                    Complimentary White-Glove Valet Parking
                  </div>
                </div>
              </div>
            </div>

            {/* Timings & Dress Code */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
              <div
                className="glass-card"
                style={{ padding: '1.5rem', borderRadius: 'var(--radius-md)' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--accent-gold-bright)', marginBottom: '0.6rem' }}>
                  <Clock size={20} />
                  <h4 style={{ fontSize: '1.05rem', color: 'var(--text-primary)', fontFamily: 'var(--font-serif)', fontWeight: 700 }}>
                    Dining Hours
                  </h4>
                </div>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  <strong>Tue – Sun:</strong> 5:00 PM – 1:00 AM<br />
                  <strong>Mon:</strong> Sommelier Tasting Only
                </p>
              </div>

              <div
                className="glass-card"
                style={{ padding: '1.5rem', borderRadius: 'var(--radius-md)' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--accent-gold-bright)', marginBottom: '0.6rem' }}>
                  <ShieldCheck size={20} />
                  <h4 style={{ fontSize: '1.05rem', color: 'var(--text-primary)', fontFamily: 'var(--font-serif)', fontWeight: 700 }}>
                    Dress Atmosphere
                  </h4>
                </div>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  Formal & Elegant Attire Requested.<br />
                  Private Sommelier Suites Available.
                </p>
              </div>
            </div>

            {/* Direct Concierge Line */}
            <div
              className="glass-panel"
              style={{
                padding: '1.5rem 2rem',
                borderRadius: 'var(--radius-md)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <Phone size={24} style={{ color: 'var(--accent-gold-bright)' }} />
                <div>
                  <div style={{ fontWeight: 700, color: 'var(--text-primary)', fontSize: '1rem', fontFamily: 'var(--font-serif)' }}>
                    Concierge & Private Dining Direct
                  </div>
                  <div style={{ fontSize: '0.88rem', color: 'var(--accent-gold-bright)', fontWeight: 600 }}>
                    +1 (800) 835-6721 • concierge@velora-dining.com
                  </div>
                </div>
              </div>

              <a
                href="tel:+18008356721"
                className="btn-secondary"
                style={{ padding: '0.65rem 1.2rem', fontSize: '0.82rem', textDecoration: 'none' }}
              >
                Call Concierge
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
