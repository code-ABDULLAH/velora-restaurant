export const MENU_CATEGORIES = [
  { id: 'all', name: 'All Masterpieces', icon: 'Sparkles' },
  { id: 'signature', name: 'VELORA Signatures', icon: 'Crown' },
  { id: 'starters', name: 'Avant-Garde Starters', icon: 'Utensils' },
  { id: 'mains', name: 'Masterpiece Mains', icon: 'Flame' },
  { id: 'desserts', name: 'Sculpted Desserts', icon: 'Cake' },
  { id: 'drinks', name: 'Artisan Mixology', icon: 'Wine' },
];

export const DIETARY_TAGS = [
  { id: 'all', label: 'All Creations' },
  { id: 'popular', label: '👑 Chef’s Reserve' },
  { id: 'truffle', label: '🍄 Truffle Infused' },
  { id: 'seafood', label: '🌊 Wild Ocean' },
  { id: 'vegan', label: '🌿 Botanical Artistry' },
];

export const MENU_ITEMS = [
  {
    id: 1,
    name: '24K Gold Saffron Wagyu Tenderloin',
    category: 'signature',
    price: 165,
    rating: 5.0,
    reviewsCount: 480,
    dietary: ['popular', 'truffle'],
    shortDesc: 'A5 Miyazakigyu Wagyu, Iranian saffron emulsion, shaved winter black truffle, and edible 24k gold leaf.',
    longDesc: 'Our crowning culinary achievement. Pan-seared A5 Miyazaki Wagyu tenderloin finished with rare winter black truffle shavings, 24-karat gold leaf, and a delicate Iranian saffron velvet reduction over bone marrow fondant.',
    ingredients: ['A5 Miyazaki Wagyu', 'Black Truffle', '24K Edible Gold', 'Saffron Emulsion', 'Bone Marrow Glaze'],
    calories: 780,
    prepTime: '25 mins',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    isPopular: true
  },
  {
    id: 2,
    name: 'Smoked Black Cod in Miso Velvet',
    category: 'mains',
    price: 110,
    rating: 4.9,
    reviewsCount: 320,
    dietary: ['popular', 'seafood'],
    shortDesc: 'Wild-caught Alaskan black cod infused with applewood smoke, caramelized saikyo miso, and pickled hajikami ginger.',
    longDesc: 'Marinated for 72 hours in sweet saikyo miso and junmai daiginjo sake, gently seared over binchotan charcoal and presented inside a cloche of sweet applewood smoke.',
    ingredients: ['Alaskan Black Cod', 'Saikyo Miso', 'Junmai Sake', 'Pickled Hajikami', 'Binchotan Smoke'],
    calories: 620,
    prepTime: '20 mins',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80',
    isPopular: true
  },
  {
    id: 3,
    name: 'Charcoal Octopussy Carpaccio',
    category: 'starters',
    price: 68,
    rating: 4.8,
    reviewsCount: 210,
    dietary: ['seafood'],
    shortDesc: 'Paper-thin charred Mediterranean octopus, squid ink coral crisp, Yuzu caviar, and micro purple shiso.',
    longDesc: 'Sous-vide octopus slow-cooked for 12 hours, flash-charred on white oak charcoal, shaved paper-thin and decorated with house-made squid ink coral tuile and citrus yuzu spheres.',
    ingredients: ['Mediterranean Octopus', 'Squid Ink Coral', 'Yuzu Caviar', 'Purple Shiso', 'Smoked Olive Oil'],
    calories: 340,
    prepTime: '15 mins',
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80',
    isPopular: false
  },
  {
    id: 4,
    name: 'Truffle & Smoked Burrata Spheres',
    category: 'starters',
    price: 58,
    rating: 4.9,
    reviewsCount: 295,
    dietary: ['popular', 'truffle', 'vegan'],
    shortDesc: 'Artisanal Pugliese burrata filled with liquid white truffle butter, heirloom tomato gelée, and basil oil pearls.',
    longDesc: 'Handcrafted burrata sphere infused with white truffle essence, resting on a bed of crystal heirloom tomato consommé and accompanied by cold-extracted basil oil pearls.',
    ingredients: ['Pugliese Burrata', 'White Truffle Essence', 'Heirloom Tomato Gelée', 'Basil Pearls', 'Aged Balsamic'],
    calories: 420,
    prepTime: '12 mins',
    image: 'https://images.unsplash.com/photo-1592417817098-8f3d6eb231fc?auto=format&fit=crop&w=800&q=80',
    isPopular: true
  },
  {
    id: 5,
    name: 'Dry-Aged Duck Breast & Wine Reduction',
    category: 'mains',
    price: 95,
    rating: 4.8,
    reviewsCount: 185,
    dietary: ['popular'],
    shortDesc: '14-day dry-aged Rohan duck breast, spiced blackberry & Bordeaux wine reduction, and roasted baby turnips.',
    longDesc: 'Crispy skin Rohan duck breast pan-roasted with star anise and honey lavender glaze, sliced thin over smooth celeriac puree and finished with a rich vintage Bordeaux reduction.',
    ingredients: ['Rohan Duck Breast', 'Bordeaux Wine Reduction', 'Spiced Blackberry', 'Celeriac Puree', 'Star Anise'],
    calories: 710,
    prepTime: '22 mins',
    image: 'https://images.unsplash.com/photo-1514944298341-9ebb685ee5b6?auto=format&fit=crop&w=800&q=80',
    isPopular: true
  },
  {
    id: 6,
    name: 'Golden Eclipse Chocolate Soufflé',
    category: 'desserts',
    price: 42,
    rating: 5.0,
    reviewsCount: 360,
    dietary: ['popular'],
    shortDesc: '70% Valrhona dark chocolate warm soufflé, salted caramel core, and smoked Madagascar vanilla gelato.',
    longDesc: 'Baked fresh to order. A towering warm chocolate soufflé with a molten salted caramel center, dusted with gold shimmer powder and served alongside tableside liquid nitrogen ice cream.',
    ingredients: ['70% Valrhona Chocolate', 'Salted Caramel Core', 'Madagascar Vanilla Gelato', 'Edible Gold Dust'],
    calories: 520,
    prepTime: '18 mins',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80',
    isPopular: true
  },
  {
    id: 7,
    name: 'Velvet Nebula Smoked Cocktail',
    category: 'drinks',
    price: 34,
    rating: 4.9,
    reviewsCount: 410,
    dietary: ['popular'],
    shortDesc: 'Hibiscus-infused Japanese Gin, clarified guava, smoked rosemary mist, and iridescent gold shimmer.',
    longDesc: 'An enchanting elixir crafted with Roku Gin, clarified dragonfruit guava cordial, and elderflower liqueur, presented inside a glowing sphere infused with aromatic rosemary wood smoke.',
    ingredients: ['Roku Japanese Gin', 'Clarified Guava', 'Elderflower Liqueur', 'Rosemary Smoke', 'Gold Shimmer'],
    calories: 190,
    prepTime: '8 mins',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80',
    isPopular: true
  },
  {
    id: 8,
    name: 'Botanical Garden Matcha Sphere',
    category: 'desserts',
    price: 38,
    rating: 4.7,
    reviewsCount: 165,
    dietary: ['vegan'],
    shortDesc: 'Uji Ceremonial Matcha mousse dome, yuzu gel, crispy black sesame tuile, and micro edible petals.',
    longDesc: 'A delicate dessert sculpture featuring stone-ground Uji matcha mousse encased in a glossy dark chocolate sphere, melting open under warm passionfruit yuzu ganache.',
    ingredients: ['Uji Matcha Mousse', 'Yuzu Passionfruit Gel', 'Black Sesame Tuile', 'Edible Flowers'],
    calories: 410,
    prepTime: '15 mins',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
    isPopular: false
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    quote: "VELORA achieves what few restaurants attempt: a seamless harmony of avant-garde gastronomy and cinematic 3D atmosphere. The 24K Gold Saffron Wagyu is unforgettable.",
    author: "Elena Rostova",
    title: "Michelin Guide Reviewer & Culinary Critic",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 2,
    quote: "From the smoked black cod cloche to the liquid nitrogen mixology, dining at VELORA feels like stepping into the future of luxury culinary art.",
    author: "Marcus Vance",
    title: "Gastronomy Editor, Epicurean International",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 3,
    quote: "An extraordinary multi-sensory journey. The ambiance, precision lighting, and table service set a new benchmark for fine dining excellence.",
    author: "Sophia Chen-Laurant",
    title: "Global Luxury Hospitality Digest",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80"
  }
];
