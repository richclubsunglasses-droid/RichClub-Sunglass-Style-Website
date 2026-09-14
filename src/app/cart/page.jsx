"use client";

import Link from "next/link";
import { useCart } from "@/components/CartProvider";

export default function Cart() {
  const { cart, change, remove, total } = useCart();

  return (
    <main>
      <section className="page-head">
        <div className="container">
          <p className="eyebrow">YOUR BAG</p>
          <h1>Cart</h1>
        </div>
      </section>

      <section className="cart-page">
        {!cart.length ? (
          <div className="empty">
            <h2>Your cart is empty.</h2>
            <p>Find a pair you love.</p>

            <Link className="button dark" href="/shop">
              Shop Sunglasses
            </Link>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cart.map((item) => {
                const image =
                  item.image ||
                  item.images?.[0]?.url ||
                  item.images?.[0] ||
                  "/Product-1.png";

                const price = Number(item.price || 0);
                const quantity = Number(item.quantity || 0);

                return (
                  <div className="cart-row" key={item.id}>
                    <img
                      src={image}
                      alt={item.name || "RichClub Sunglasses"}
                    />

                    <div className="cart-product-info">
                      <h3>{item.name}</h3>

                      <p className="detail-copy">
                        ₹{price.toLocaleString("en-IN")}
                      </p>

                      <button
                        type="button"
                        onClick={() => remove(item.id)}
                        style={{
                          border: 0,
                          background: "none",
                          padding: 0,
                          color: "#888",
                          fontSize: 12,
                          cursor: "pointer",
                        }}
                      >
                        Remove
                      </button>
                    </div>

                    <div className="qty">
                      <button
                        type="button"
                        onClick={() => change(item.id, -1)}
                        aria-label="Decrease quantity"
                      >
                        −
                      </button>

                      <span>{quantity}</span>

                      <button
                        type="button"
                        onClick={() => change(item.id, 1)}
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>

                    <strong className="line-total">
                      ₹{(price * quantity).toLocaleString("en-IN")}
                    </strong>
                  </div>
                );
              })}
            </div>

            <div className="cart-summary">
              <div>
                <span>Subtotal</span>

                <strong>
                  ₹{total.toLocaleString("en-IN")}
                </strong>
              </div>

              <p className="detail-copy">
                Shipping and taxes are calculated at checkout.
              </p>

              <Link
                href="/checkout"
                className="add-btn"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textDecoration: "none",
                }}
              >
                PROCEED TO CHECKOUT
              </Link>

              <Link
                href="/shop"
                className="continue-shopping"
              >
                ← Continue Shopping
              </Link>
            </div>
          </>
        )}
      </section>
    </main>
  );
}