import React from 'react';

export default function VeloraLogo({ size = 44, className = "" }) {
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem' }} className={className}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ filter: 'drop-shadow(0px 4px 14px rgba(20, 184, 166, 0.35))' }}
      >
        <defs>
          <linearGradient id="veloraTeal" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#5EEAD4" />
            <stop offset="45%" stopColor="#14B8A6" />
            <stop offset="75%" stopColor="#0D9488" />
            <stop offset="100%" stopColor="#0F766E" />
          </linearGradient>
          <linearGradient id="veloraCyan" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#BAE6FD" />
            <stop offset="50%" stopColor="#38BDF8" />
            <stop offset="100%" stopColor="#0284C7" />
          </linearGradient>
        </defs>

        {/* Outer 3D Hexagonal Ring */}
        <polygon
          points="50,5 90,27.5 90,72.5 50,95 10,72.5 10,27.5"
          stroke="url(#veloraTeal)"
          strokeWidth="3.5"
          fill="#FFFFFF"
        />

        {/* Inner Geometric Cyan Accent Polygon */}
        <polygon
          points="50,14 82,32 82,68 50,86 18,68 18,32"
          stroke="url(#veloraCyan)"
          strokeWidth="1.5"
          fill="none"
          opacity="0.85"
        />

        {/* Dynamic Stylized 'V' Monogram */}
        <path
          d="M32 30 L50 72 L68 30 M42 30 L50 50 L58 30"
          stroke="url(#veloraTeal)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Center Glowing Diamond Sparkle */}
        <polygon
          points="50,22 53,28 50,34 47,28"
          fill="#5EEAD4"
        />
      </svg>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <span
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: size > 36 ? '1.65rem' : '1.35rem',
            fontWeight: 700,
            letterSpacing: '0.16em',
            background: 'linear-gradient(135deg, #0F766E 0%, #0D9488 45%, #0284C7 100%)',
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
            letterSpacing: '0.32em',
            color: 'var(--accent-gold)',
            textTransform: 'uppercase',
            marginTop: '0.25rem',
            fontWeight: 700
          }}
        >
          Haute Gastronomy
        </span>
      </div>
    </div>
  );
}


