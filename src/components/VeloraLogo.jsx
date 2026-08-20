import React from 'react';

export default function VeloraLogo({ size = 42, className = "" }) {
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem' }} className={className}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ filter: 'drop-shadow(0px 4px 12px rgba(212, 175, 55, 0.4))' }}
      >
        <defs>
          <linearGradient id="veloraGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF0BD" />
            <stop offset="50%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#8A6D15" />
          </linearGradient>
          <linearGradient id="veloraWine" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#A84351" />
            <stop offset="100%" stopColor="#581825" />
          </linearGradient>
        </defs>

        {/* Outer 3D Hexagonal Gold Ring */}
        <polygon
          points="50,5 90,27.5 90,72.5 50,95 10,72.5 10,27.5"
          stroke="url(#veloraGold)"
          strokeWidth="3.5"
          fill="#0F1116"
        />

        {/* Inner Geometric Wine Accent Polygon */}
        <polygon
          points="50,14 82,32 82,68 50,86 18,68 18,32"
          stroke="url(#veloraWine)"
          strokeWidth="1.5"
          fill="none"
          opacity="0.7"
        />

        {/* Dynamic Stylized 'V' Monogram */}
        <path
          d="M32 30 L50 72 L68 30 M42 30 L50 50 L58 30"
          stroke="url(#veloraGold)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Center Glowing Diamond Sparkle */}
        <polygon
          points="50,22 53,28 50,34 47,28"
          fill="#FFF0BD"
        />
      </svg>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <span
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: size > 36 ? '1.6rem' : '1.3rem',
            fontWeight: 700,
            letterSpacing: '0.18em',
            background: 'linear-gradient(135deg, #FFF0BD 0%, #D4AF37 60%, #AA820A 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            lineHeight: 1
          }}
        >
          VELORA
        </span>
        <span
          style={{
            fontSize: '0.62rem',
            fontFamily: 'var(--font-display)',
            letterSpacing: '0.3em',
            color: 'var(--text-muted)',
            textTransform: 'uppercase',
            marginTop: '0.25rem'
          }}
        >
          Haute Gastronomy
        </span>
      </div>
    </div>
  );
}
