"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

const CartContext = createContext(null);

function getProductId(product) {
  return String(
    product?.id ||
    product?.slug ||
    product?.handle ||
    product?.title ||
    "product-" + Date.now()
  );
}

function safeNumber(value) {
  const number = Number(value);
  return Number.isFinite(number) ? number : 0;
}

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // Load saved cart
  useEffect(() => {
    try {
      const saved = localStorage.getItem("rc_cart");

      if (saved) {
        const parsed = JSON.parse(saved);

        if (Array.isArray(parsed)) {
          setCart(parsed);
        }
      }
    } catch (error) {
      console.error("Could not load cart:", error);
    }
  }, []);

  // Save cart
  useEffect(() => {
    try {
      localStorage.setItem("rc_cart", JSON.stringify(cart));
    } catch (error) {
      console.error("Could not save cart:", error);
    }
  }, [cart]);

  // Add product
  const add = (product) => {
    if (!product) return;

    const productId = getProductId(product);

    const productToAdd = {
      ...product,
      id: productId,
      name: product.name || product.title || "RichClub Sunglasses",
      price: safeNumber(
        product.price ?? product.variants?.[0]?.price
      ),
      image:
        product.image ||
        product.images?.[0]?.url ||
        product.images?.[0] ||
        "/Product-1.png",
    };

    setCart((currentCart) => {
      const existing = currentCart.find(
        (item) => String(item.id) === productId
      );

      if (existing) {
        return currentCart.map((item) =>
          String(item.id) === productId
            ? {
                ...item,
                quantity: (item.quantity || 1) + 1,
              }
            : item
        );
      }

      return [
        ...currentCart,
        {
          ...productToAdd,
          quantity: 1,
        },
      ];
    });
  };

  // Change quantity
  const change = (id, amount) => {
    setCart((currentCart) =>
      currentCart
        .map((item) =>
          String(item.id) === String(id)
            ? {
                ...item,
                quantity: Math.max(
                  0,
                  (item.quantity || 1) + amount
                ),
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // Remove product
  const remove = (id) => {
    setCart((currentCart) =>
      currentCart.filter(
        (item) => String(item.id) !== String(id)
      )
    );
  };

  // Clear cart
  const clear = () => {
    setCart([]);
  };

  // Total
  const total = useMemo(() => {
    return cart.reduce(
      (sum, item) =>
        sum +
        safeNumber(item.price) *
          safeNumber(item.quantity || 1),
      0
    );
  }, [cart]);

  const count = useMemo(() => {
    return cart.reduce(
      (sum, item) => sum + safeNumber(item.quantity || 1),
      0
    );
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        add,
        change,
        remove,
        clear,
        total,
        count,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(
      "useCart must be used inside CartProvider"
    );
  }

  return context;
}
export { CartProvider };
export default CartProvider;