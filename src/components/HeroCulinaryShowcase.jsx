import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, Crown, Plus, RotateCw, Check, Award, Flame } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useSound } from '../context/SoundContext';

const HERO_DISHES = [
  {
    id: 'wagyu',
    name: 'Glacial Wagyu Tenderloin',
    subtitle: 'A5 Miyazaki Wagyu & Winter Truffle Foam',
    price: 165,
    tag: "Chef's Signature Omakase",
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=85',
    badges: [
      { label: '🥩 A5 Miyazaki Wagyu', top: '12%', left: '4%', delay: '0s' },
      { label: '✨ 24K Edible Gold Leaf', top: '18%', right: '6%', delay: '0.4s' },
      { label: '🍄 Shaved Winter Truffle', bottom: '26%', left: '4%', delay: '0.8s' }
    ],
    flavorProfile: {
      umami: 98,
      tenderness: 99,
      smoke: 85
    }
  },
  {
    id: 'cod',
    name: 'Imperial Smoked Black Cod',
    subtitle: 'Saikyo Yuzu Miso & Crispy Lotus Root',
    price: 140,
    tag: 'Coastal Caviar Specialty',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=900&q=85',
    badges: [
      { label: '🐟 Alaskan Black Cod', top: '12%', left: '4%', delay: '0s' },
      { label: '🍋 72h Yuzu Miso Cure', top: '18%', right: '6%', delay: '0.4s' },
      { label: '🌿 Sea Kelp Smoke', bottom: '26%', left: '4%', delay: '0.8s' }
    ],
    flavorProfile: {
      umami: 92,
      tenderness: 96,
      smoke: 90
    }
  },
  {
    id: 'dessert',
    name: 'Kyoto Zen Matcha Sphere',
    subtitle: 'Ceremonial Uji Matcha, White Gold & Yuzu',
    price: 65,
    tag: 'Avant-Garde Confection',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=900&q=85',
    badges: [
      { label: '🍵 Ceremonial Uji Matcha', top: '12%', left: '4%', delay: '0s' },
      { label: '❄️ Liquid Nitrogen Fog', top: '18%', right: '6%', delay: '0.4s' },
      { label: '🍯 Hibiscus & Gold Gelee', bottom: '26%', left: '4%', delay: '0.8s' }
    ],
    flavorProfile: {
      umami: 80,
      tenderness: 94,
      smoke: 75
    }
  }
];

export default function HeroCulinaryShowcase() {
  const [selectedDishIndex, setSelectedDishIndex] = useState(0);
  const [isRotating, setIsRotating] = useState(true);
  const [rotationAngle, setRotationAngle] = useState(0);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [addedAnimation, setAddedAnimation] = useState(false);
  const showcaseRef = useRef(null);

  const { addToCart } = useCart();
  const { playClickSound } = useSound();

  const currentDish = HERO_DISHES[selectedDishIndex];

  // Auto rotation effect
  useEffect(() => {
    if (!isRotating) return;
    const interval = setInterval(() => {
      setRotationAngle(prev => (prev + 0.35) % 360);
    }, 30);
    return () => clearInterval(interval);
  }, [isRotating]);

  // 3D Parallax Mouse Tracking
  const handleMouseMove = (e) => {
    if (!showcaseRef.current) return;
    const rect = showcaseRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 16;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -16;
    setTilt({ x: y, y: x });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  const handleAddHeroDish = () => {
    playClickSound();
    addToCart({
      id: currentDish.id === 'wagyu' ? 1 : currentDish.id === 'cod' ? 4 : 8,
      name: currentDish.name,
      price: currentDish.price,
      image: currentDish.image,
      category: 'Signature'
    });
    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 1500);
  };

  return (
    <div
      ref={showcaseRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        position: 'relative',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.25rem',
        perspective: '1200px'
      }}
    >
      {/* 3D Main Floating Showcase Container */}
      <div
        className="glass-card"
        style={{
          position: 'relative',
          width: '100%',
          height: '430px',
          borderRadius: 'var(--radius-lg)',
          overflow: 'hidden',
          background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.98) 0%, rgba(240, 253, 250, 0.95) 100%)',
          border: '1px solid var(--border-gold-strong)',
          boxShadow: '0 25px 60px rgba(15, 23, 42, 0.08), 0 0 40px rgba(20, 184, 166, 0.08)',
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: 'transform 0.15s ease-out, box-shadow 0.3s ease',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {/* Top Floating Dish Selection Pills */}
        <div
          style={{
            position: 'absolute',
            top: '16px',
            left: '16px',
            right: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            zIndex: 10
          }}
        >
          <div style={{ display: 'flex', gap: '0.45rem' }}>
            {HERO_DISHES.map((dish, idx) => (
              <button
                key={dish.id}
                onClick={() => {
                  playClickSound();
                  setSelectedDishIndex(idx);
                }}
                style={{
                  padding: '0.42rem 0.9rem',
                  borderRadius: 'var(--radius-full)',
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  letterSpacing: '0.03em',
                  border: selectedDishIndex === idx ? '1px solid var(--accent-gold)' : '1px solid var(--border-light)',
                  backgroundColor: selectedDishIndex === idx ? 'var(--accent-gold)' : '#FFFFFF',
                  color: selectedDishIndex === idx ? '#FFFFFF' : 'var(--text-secondary)',
                  cursor: 'pointer',
                  boxShadow: selectedDishIndex === idx ? '0 4px 14px rgba(13, 148, 136, 0.3)' : 'var(--shadow-soft)',
                  transition: 'all 0.25s ease'
                }}
              >
                {dish.name.split(' ')[0]} {dish.name.split(' ')[1]}
              </button>
            ))}
          </div>

          {/* Auto Spin Toggle */}
          <button
            onClick={() => setIsRotating(!isRotating)}
            style={{
              padding: '0.4rem',
              width: '34px',
              height: '34px',
              borderRadius: '50%',
              backgroundColor: isRotating ? 'rgba(13, 148, 136, 0.1)' : '#FFFFFF',
              border: '1px solid var(--border-gold)',
              color: isRotating ? 'var(--accent-gold-bright)' : 'var(--text-muted)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: 'var(--shadow-soft)'
            }}
            title={isRotating ? 'Pause Plate Rotation' : 'Spin Plate'}
          >
            <RotateCw size={15} style={{ transform: isRotating ? 'rotate(0deg)' : 'rotate(45deg)', transition: 'transform 0.3s ease' }} />
          </button>
        </div>

        {/* Ambient Platter Radial Halo */}
        <div
          style={{
            position: 'absolute',
            width: '340px',
            height: '340px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(20, 184, 166, 0.18) 0%, rgba(56, 189, 248, 0.1) 45%, transparent 70%)',
            filter: 'blur(30px)',
            pointerEvents: 'none',
            zIndex: 1
          }}
        />

        {/* 3D Porcelain Culinary Platter & Dish Presentation */}
        <div
          style={{
            position: 'relative',
            width: '270px',
            height: '270px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 2,
            marginTop: '10px'
          }}
        >
          {/* Outer Platter Gold & Platinum Rim Ring */}
          <div
            style={{
              position: 'absolute',
              inset: '-12px',
              borderRadius: '50%',
              border: '2px solid rgba(20, 184, 166, 0.45)',
              boxShadow: '0 0 25px rgba(20, 184, 166, 0.2), inset 0 0 20px rgba(20, 184, 166, 0.1)',
              transform: `rotate(${rotationAngle}deg)`,
              transition: 'transform 0.05s linear',
              pointerEvents: 'none'
            }}
          >
            <div style={{ position: 'absolute', top: '-4px', left: '50%', transform: 'translateX(-50%)', width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--accent-gold-bright)' }} />
            <div style={{ position: 'absolute', bottom: '-4px', left: '50%', transform: 'translateX(-50%)', width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--accent-gold-bright)' }} />
            <div style={{ position: 'absolute', left: '-4px', top: '50%', transform: 'translateY(-50%)', width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--accent-gold-bright)' }} />
            <div style={{ position: 'absolute', right: '-4px', top: '50%', transform: 'translateY(-50%)', width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--accent-gold-bright)' }} />
          </div>

          {/* Dish Platter Shadow */}
          <div
            style={{
              position: 'absolute',
              bottom: '-16px',
              width: '240px',
              height: '35px',
              borderRadius: '50%',
              background: 'radial-gradient(ellipse at center, rgba(15, 23, 42, 0.2) 0%, transparent 70%)',
              filter: 'blur(8px)',
              pointerEvents: 'none'
            }}
          />

          {/* Dish High-Res Culinary Centerpiece */}
          <div
            style={{
              width: '250px',
              height: '250px',
              borderRadius: '50%',
              overflow: 'hidden',
              position: 'relative',
              boxShadow: '0 16px 40px rgba(15, 23, 42, 0.18)',
              border: '4px solid #FFFFFF',
              transform: `scale(${1 + Math.sin(rotationAngle * 0.05) * 0.02})`,
              transition: 'transform 0.3s ease'
            }}
          >
            <img
              src={currentDish.image}
              alt={currentDish.name}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transform: `rotate(${-rotationAngle * 0.4}deg) scale(1.08)`,
                transition: 'transform 0.1s linear'
              }}
            />
            {/* Shimmer Sheen on dish */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.3) 0%, transparent 50%, rgba(20, 184, 166, 0.12) 100%)',
                pointerEvents: 'none'
              }}
            />
          </div>

          {/* Floating 3D Ingredient Badges */}
          {currentDish.badges.map((badge, bIdx) => (
            <div
              key={bIdx}
              className="glass-card animate-float"
              style={{
                position: 'absolute',
                top: badge.top,
                bottom: badge.bottom,
                left: badge.left,
                right: badge.right,
                animationDelay: badge.delay,
                zIndex: 6,
                padding: '0.35rem 0.75rem',
                borderRadius: 'var(--radius-full)',
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                border: '1px solid var(--border-gold)',
                boxShadow: '0 8px 20px rgba(15, 23, 42, 0.12)',
                fontSize: '0.72rem',
                fontWeight: 700,
                color: 'var(--text-primary)',
                fontFamily: 'var(--font-display)',
                whiteSpace: 'nowrap',
                pointerEvents: 'none',
                backdropFilter: 'blur(8px)'
              }}
            >
              {badge.label}
            </div>
          ))}
        </div>

        {/* Bottom Flavor Metrics Bar */}
        <div
          style={{
            position: 'absolute',
            bottom: '12px',
            left: '16px',
            right: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0.55rem 1rem',
            borderRadius: 'var(--radius-md)',
            backgroundColor: 'rgba(255, 255, 255, 0.92)',
            border: '1px solid var(--border-light)',
            backdropFilter: 'blur(10px)',
            zIndex: 5
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.75rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
              <span style={{ color: 'var(--text-muted)', fontWeight: 600 }}>Umami:</span>
              <strong style={{ color: 'var(--accent-gold-bright)' }}>{currentDish.flavorProfile.umami}%</strong>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
              <span style={{ color: 'var(--text-muted)', fontWeight: 600 }}>Tenderness:</span>
              <strong style={{ color: 'var(--accent-gold-bright)' }}>{currentDish.flavorProfile.tenderness}%</strong>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
              <span style={{ color: 'var(--text-muted)', fontWeight: 600 }}>Aroma:</span>
              <strong style={{ color: 'var(--accent-gold-bright)' }}>{currentDish.flavorProfile.smoke}%</strong>
            </div>
          </div>

          <div style={{ fontSize: '0.72rem', color: 'var(--accent-gold)', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
            <Award size={13} />
            <span>Michelin Grade</span>
          </div>
        </div>

      </div>

      {/* Floating Bottom Card: Quick Add to Order & Price Callout */}
      <div
        className="glass-card"
        style={{
          padding: '1rem 1.4rem',
          borderRadius: 'var(--radius-md)',
          boxShadow: 'var(--shadow-3d)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          border: '1px solid var(--border-gold-strong)',
          backgroundColor: '#FFFFFF',
          position: 'relative',
          zIndex: 10
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.9rem' }}>
          <img
            src={currentDish.image}
            alt={currentDish.name}
            style={{
              width: '52px',
              height: '52px',
              borderRadius: 'var(--radius-sm)',
              objectFit: 'cover',
              border: '2px solid var(--accent-gold)'
            }}
          />
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <span className="badge-tag badge-gold" style={{ fontSize: '0.65rem', padding: '0.12rem 0.45rem' }}>
                <Crown size={10} />
                {currentDish.tag}
              </span>
            </div>
            <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', marginTop: '0.15rem' }}>
              {currentDish.name}
            </h4>
            <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
              {currentDish.subtitle}
            </p>
          </div>
        </div>

        {/* Price & Add to Order CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.1rem' }}>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '1.35rem', fontFamily: 'var(--font-serif)', fontWeight: 800, color: 'var(--accent-gold-bright)' }}>
              ${currentDish.price}
            </div>
            <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>
              Tasting Portion
            </div>
          </div>

          <button
            onClick={handleAddHeroDish}
            className="btn-primary"
            style={{
              padding: '0.6rem 1.1rem',
              fontSize: '0.82rem',
              borderRadius: 'var(--radius-sm)'
            }}
          >
            {addedAnimation ? (
              <>
                <Check size={15} />
                <span>Added!</span>
              </>
            ) : (
              <>
                <Plus size={15} />
                <span>Add to Order</span>
              </>
            )}
          </button>
        </div>
      </div>

    </div>
  );
}
