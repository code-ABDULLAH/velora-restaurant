import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem('nagi_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedDishModal, setSelectedDishModal] = useState(null);
  const [orderNotification, setOrderNotification] = useState(null);

  useEffect(() => {
    localStorage.setItem('nagi_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (dish, quantity = 1, specialNote = '') => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === dish.id);
      if (existing) {
        return prev.map(item =>
          item.id === dish.id
            ? { ...item, quantity: item.quantity + quantity, specialNote: specialNote || item.specialNote }
            : item
        );
      }
      return [...prev, { ...dish, quantity, specialNote }];
    });

    // Trigger floating notification
    setOrderNotification(`Added ${dish.name} to your peaceful order.`);
    setTimeout(() => setOrderNotification(null), 3500);
  };

  const removeFromCart = (dishId) => {
    setCartItems(prev => prev.filter(item => item.id !== dishId));
  };

  const updateQuantity = (dishId, newQty) => {
    if (newQty <= 0) {
      removeFromCart(dishId);
      return;
    }
    setCartItems(prev =>
      prev.map(item => (item.id === dishId ? { ...item, quantity: newQty } : item))
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const cartTotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartTotal,
        cartCount,
        isDrawerOpen,
        setIsDrawerOpen,
        selectedDishModal,
        setSelectedDishModal,
        orderNotification
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
