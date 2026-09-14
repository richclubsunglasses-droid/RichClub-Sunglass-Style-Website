"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "./CartProvider";

export default function ProductActions({ product }) {
  const { add } = useCart();
  const router = useRouter();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const addQuantity = () => {
    for (let i = 0; i < quantity; i += 1) add(product);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1800);
  };

  const buyNow = () => {
    addQuantity();
    router.push("/cart");
  };

  return (
    <div className="product-actions">
      <div className="stock-line"><span className="stock-dot" /> In stock · Ready to dispatch</div>
      <div className="purchase-row">
        <div className="quantity-picker" aria-label="Quantity selector">
          <button type="button" onClick={() => setQuantity((q) => Math.max(1, q - 1))} aria-label="Decrease quantity">−</button>
          <span>{quantity}</span>
          <button type="button" onClick={() => setQuantity((q) => q + 1)} aria-label="Increase quantity">+</button>
        </div>
        <button type="button" className="add-btn" onClick={addQuantity}>{added ? "ADDED TO BAG ✓" : "ADD TO BAG"}</button>
      </div>
      <button type="button" className="buy-btn" onClick={buyNow}>BUY IT NOW — ₹{(product.price * quantity).toLocaleString("en-IN")}</button>
      <p className="payment-note">Secure payments · UPI · Cards · Netbanking · COD</p>
    </div>
  );
}
