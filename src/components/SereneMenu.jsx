import React, { useState, useMemo } from 'react';
import { MENU_CATEGORIES, DIETARY_TAGS, MENU_ITEMS } from '../data/menuData';
import { Search, Plus, Info, Star, Sparkles, Crown, Box } from 'lucide-react';
import { useCart } from '../context/CartContext';

function DishCard({ dish, onOpenDetails, onAddToCart }) {
  const [tiltStyle, setTiltStyle] = useState({});

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;

    setTiltStyle({
      transform: `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-8px) scale(1.02)`,
      boxShadow: 'var(--shadow-3d-hover)',
      borderColor: 'var(--border-gold-strong)',
      '--mouse-x': `${(x / rect.width) * 100}%`,
      '--mouse-y': `${(y / rect.height) * 100}%`
    });
  };

  const handleMouseLeave = () => {
    setTiltStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px) scale(1)',
      boxShadow: 'var(--shadow-3d)',
      borderColor: 'var(--border-gold)'
    });
  };

  return (
    <div
      className="card-3d glass-card"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        borderRadius: 'var(--radius-md)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        ...tiltStyle
      }}
    >
      {/* Dynamic Cursor Sheen Layer */}
      <div className="sheen-layer" />

      {/* Image & Overlay Badges */}
      <div style={{ position: 'relative', height: '240px', overflow: 'hidden' }}>
        <img
          src={dish.image}
          alt={dish.name}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.6s var(--transition-smooth)'
          }}
        />

        {dish.isPopular && (
          <span className="badge-tag badge-gold" style={{ position: 'absolute', top: '14px', left: '14px' }}>
            <Crown size={12} />
            Chef's Reserve
          </span>
        )}

        {/* 3D Model Available Indicator */}
        <button
          onClick={() => onOpenDetails(dish)}
          style={{
            position: 'absolute',
            top: '14px',
            right: '14px',
            backgroundColor: 'rgba(12, 10, 9, 0.85)',
            color: 'var(--accent-gold-bright)',
            padding: '0.3rem 0.75rem',
            borderRadius: 'var(--radius-full)',
            fontSize: '0.72rem',
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            border: '1px solid var(--border-gold)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.35rem',
            cursor: 'pointer',
            transition: 'all 0.25s ease'
          }}
          title="Inspect 3D Plate"
        >
          <Box size={13} />
          <span>3D View</span>
        </button>

        <span
          style={{
            position: 'absolute',
            bottom: '14px',
            right: '14px',
            backgroundColor: 'rgba(12, 10, 9, 0.85)',
            color: 'var(--text-secondary)',
            padding: '0.3rem 0.75rem',
            borderRadius: 'var(--radius-full)',
            fontSize: '0.75rem',
            border: '1px solid var(--border-gold)',
            backdropFilter: 'blur(8px)'
          }}
        >
          {dish.calories} kcal
        </span>
      </div>

      {/* Card Body */}
      <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', flex: 1, position: 'relative', zIndex: 2 }}>
        
        {/* Rating & Prep Time */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.65rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: 'var(--accent-gold-bright)', fontSize: '0.88rem', fontWeight: 700 }}>
            <Star size={15} fill="currentColor" />
            <span>{dish.rating} ({dish.reviewsCount} critics)</span>
          </div>
          <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', fontFamily: 'var(--font-display)', fontWeight: 600 }}>
            {dish.prepTime}
          </span>
        </div>

        <h3 style={{ fontSize: '1.45rem', color: 'var(--text-primary)', marginBottom: '0.6rem', fontFamily: 'var(--font-serif)', fontWeight: 700 }}>
          {dish.name}
        </h3>

        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.5rem', flex: 1 }}>
          {dish.shortDesc}
        </p>

        {/* Pricing & Actions */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '1.2rem', borderTop: '1px solid var(--border-subtle)' }}>
          <div>
            <span style={{ fontSize: '1.55rem', fontFamily: 'var(--font-serif)', fontWeight: 700, color: 'var(--accent-gold-bright)' }}>
              ${dish.price}
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <button
              onClick={() => onOpenDetails(dish)}
              style={{
                padding: '0.65rem',
                borderRadius: '50%',
                border: '1px solid var(--border-gold)',
                backgroundColor: 'rgba(28, 23, 19, 0.7)',
                color: 'var(--accent-gold-bright)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease'
              }}
              title="View Ingredients & 3D Platter"
            >
              <Info size={18} />
            </button>

            <button
              onClick={() => onAddToCart(dish, 1)}
              className="btn-primary"
              style={{ padding: '0.65rem 1.3rem', fontSize: '0.82rem' }}
            >
              <Plus size={15} />
              <span>Add</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default function SereneMenu() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeDietary, setActiveDietary] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const { addToCart, setSelectedDishModal } = useCart();

  const filteredDishes = useMemo(() => {
    return MENU_ITEMS.filter(dish => {
      const matchesCategory = activeCategory === 'all' || dish.category === activeCategory;
      const matchesDietary = activeDietary === 'all' || dish.dietary.includes(activeDietary);
      const matchesSearch =
        dish.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dish.shortDesc.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesDietary && matchesSearch;
    });
  }, [activeCategory, activeDietary, searchQuery]);

  return (
    <section id="menu" style={{ padding: '7rem 0', backgroundColor: 'var(--bg-primary)', position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3.5rem' }}>
          <div className="badge-tag badge-gold" style={{ marginBottom: '1rem' }}>
            <Crown size={14} />
            Haute Gastronomy Creations
          </div>
          <h2 style={{ fontSize: '3.5rem', color: 'var(--text-primary)', marginBottom: '1rem', lineHeight: 1.1 }}>
            The Culinary <span className="text-gold-gradient">Repertoire</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.7 }}>
            Each dish at VELORA is an architectural composition of rare seasonal ingredients, avant-garde technique, and sublime flavor harmony.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem', marginBottom: '3.5rem' }}>
          
          {/* Category Tabs & Search Bar */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem' }}>
            
            {/* Category Tabs */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
              {MENU_CATEGORIES.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  style={{
                    padding: '0.75rem 1.5rem',
                    borderRadius: 'var(--radius-full)',
                    border: '1px solid',
                    borderColor: activeCategory === cat.id ? 'var(--accent-gold)' : 'var(--border-subtle)',
                    backgroundColor: activeCategory === cat.id ? 'var(--accent-gold-light)' : 'rgba(28, 23, 19, 0.7)',
                    color: activeCategory === cat.id ? 'var(--accent-gold-bright)' : 'var(--text-secondary)',
                    fontFamily: 'var(--font-display)',
                    fontWeight: 600,
                    fontSize: '0.88rem',
                    letterSpacing: '0.04em',
                    cursor: 'pointer',
                    backdropFilter: 'blur(10px)',
                    transition: 'all 0.3s var(--transition-smooth)'
                  }}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            {/* Live Search Input */}
            <div style={{ position: 'relative', minWidth: '300px' }}>
              <Search
                size={18}
                style={{
                  position: 'absolute',
                  left: '16px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: 'var(--accent-gold)'
                }}
              />
              <input
                type="text"
                placeholder="Search haute dishes or ingredients..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.75rem 1.25rem 0.75rem 2.8rem',
                  borderRadius: 'var(--radius-full)',
                  border: '1px solid var(--border-gold)',
                  backgroundColor: 'rgba(28, 23, 19, 0.85)',
                  color: 'var(--text-primary)',
                  fontSize: '0.9rem',
                  outline: 'none',
                  backdropFilter: 'blur(12px)',
                  transition: 'all 0.3s ease'
                }}
              />
            </div>
          </div>

          {/* Secondary Dietary Preferences */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginRight: '0.5rem', fontWeight: 600, fontFamily: 'var(--font-display)' }}>
              Curated Filter:
            </span>
            {DIETARY_TAGS.map(tag => (
              <button
                key={tag.id}
                onClick={() => setActiveDietary(tag.id)}
                style={{
                  padding: '0.45rem 1rem',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.8rem',
                  fontFamily: 'var(--font-display)',
                  border: '1px solid',
                  borderColor: activeDietary === tag.id ? 'var(--accent-gold)' : 'var(--border-subtle)',
                  backgroundColor: activeDietary === tag.id ? 'var(--accent-gold-light)' : 'transparent',
                  color: activeDietary === tag.id ? 'var(--accent-gold-bright)' : 'var(--text-secondary)',
                  cursor: 'pointer',
                  fontWeight: 500,
                  transition: 'all 0.25s ease'
                }}
              >
                {tag.label}
              </button>
            ))}
          </div>

        </div>

        {/* Dish Grid Display */}
        {filteredDishes.length === 0 ? (
          <div
            style={{
              textAlign: 'center',
              padding: '5rem 2rem',
              backgroundColor: 'var(--bg-card-solid)',
              borderRadius: 'var(--radius-md)',
              border: '1px dashed var(--border-gold)'
            }}
          >
            <Sparkles size={36} style={{ color: 'var(--accent-gold)', marginBottom: '1rem' }} />
            <h3 style={{ fontSize: '1.6rem', color: 'var(--text-primary)', marginBottom: '0.5rem', fontFamily: 'var(--font-serif)' }}>
              No dishes found matching your criteria
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
              Please reset your search terms or select another category.
            </p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setActiveDietary('all');
                setSearchQuery('');
              }}
              className="btn-secondary"
              style={{ marginTop: '1.75rem' }}
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
              gap: '2.2rem'
            }}
          >
            {filteredDishes.map(dish => (
              <DishCard
                key={dish.id}
                dish={dish}
                onOpenDetails={setSelectedDishModal}
                onAddToCart={addToCart}
              />
            ))}
          </div>
        )}

      </div>
    </section>
  );
}

