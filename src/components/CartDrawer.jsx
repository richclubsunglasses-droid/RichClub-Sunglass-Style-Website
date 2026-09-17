"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/components/CartProvider";

export default function CartDrawer() {
  const router = useRouter();

  const {
    cart,
    change,
    remove,
    total,
    cartOpen,
    closeCart,
  } = useCart();

  useEffect(() => {
    if (!cartOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [cartOpen]);

  if (!cartOpen) return null;

  const handleCheckout = () => {
    closeCart();
    router.push("/checkout");
  };

  return (
    <div className="cart-drawer-root">
      <button
        type="button"
        className="cart-drawer-overlay"
        onClick={closeCart}
        aria-label="Close cart"
      />

      <aside className="cart-drawer" aria-label="Shopping cart">
        <div className="cart-drawer-header">
          <h2>CART</h2>

          <button
            type="button"
            className="cart-drawer-close"
            onClick={closeCart}
            aria-label="Close cart"
          >
            ×
          </button>
        </div>

        <div className="cart-shipping-note">
          {total >= 999
            ? "You are eligible for free shipping."
            : "Free shipping available on orders above ₹999."}
        </div>

        <div className="cart-drawer-content">
          {cart.length === 0 ? (
            <div className="cart-empty">
              <p>Your cart is empty.</p>

              <button
                type="button"
                onClick={closeCart}
                className="cart-empty-btn"
              >
                CONTINUE SHOPPING
              </button>
            </div>
          ) : (
            <div className="cart-items">
              {cart.map((item) => (
                <div className="cart-drawer-item" key={item.id}>
                  <div className="cart-drawer-image">
                    <img
                      src={item.image || "/Product-1.png"}
                      alt={item.name || "RichClub Sunglasses"}
                    />
                  </div>

                  <div className="cart-drawer-item-info">
                    <h3>{item.name}</h3>

                    <p className="cart-item-price">
                      ₹{Number(item.price || 0).toLocaleString("en-IN")}
                    </p>

                    <div className="cart-item-bottom">
                      <div className="quantity-control">
                        <button
                          type="button"
                          onClick={() => change(item.id, -1)}
                          aria-label="Decrease quantity"
                        >
                          −
                        </button>

                        <span>{item.quantity || 1}</span>

                        <button
                          type="button"
                          onClick={() => change(item.id, 1)}
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>

                      <button
                        type="button"
                        className="cart-remove-btn"
                        onClick={() => remove(item.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {cart.length > 0 && (
          <div className="cart-drawer-footer">
            <div className="cart-total-row">
              <strong>Total</strong>

              <strong>
                ₹{Number(total || 0).toLocaleString("en-IN")}
              </strong>
            </div>
            <button
              type="button"
              className="cart-checkout-btn"
              onClick={handleCheckout}
            >
              CHECKOUT
              <span>→</span>
            </button>
          </div>
        )}
      </aside>
    </div>
  );
}