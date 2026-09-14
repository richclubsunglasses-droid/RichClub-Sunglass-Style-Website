"use client";

import { useCart } from "@/components/CartProvider";
import { useRouter } from "next/navigation";

export default function ProductActions({ product }) {
  const { add } = useCart();
  const router = useRouter();

  const price =
    Number(product?.price) ||
    Number(product?.variants?.[0]?.price) ||
    0;

  const handleAddToCart = () => {
    if (!product) return;

    add(product);

  };

  const handleBuyNow = () => {
    if (!product) return;

    add(product);
    router.push("/cart");
  };

  return (
    <div className="product-actions">
      <button
        type="button"
        className="add-btn"
        onClick={handleAddToCart}
      >
        ADD TO CART — ₹{price.toLocaleString("en-IN")}
      </button>

      <button
        type="button"
        className="buy-now-btn"
        onClick={handleBuyNow}
      >
        BUY NOW — ₹{price.toLocaleString("en-IN")}
      </button>
    </div>
  );
}