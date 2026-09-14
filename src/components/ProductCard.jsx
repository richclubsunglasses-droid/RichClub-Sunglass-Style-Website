"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "./CartProvider";

export default function ProductCard({ product }) {
  const { add } = useCart();
  const [currentImage, setCurrentImage] = useState(0);

  // Multiple images support
  const images =
    product.images && product.images.length > 0
      ? product.images
      : [product.image];

  const nextImage = (e) => {
    e.preventDefault();
    e.stopPropagation();

    setCurrentImage((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const previousImage = (e) => {
    e.preventDefault();
    e.stopPropagation();

    setCurrentImage((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <article className="product-card">
      <Link
        href={"/product/" + product.slug}
        className="product-media"
      >
        {product.badge && (
          <span className="badge">{product.badge}</span>
        )}

        <img
          src={images[currentImage]}
          alt={product.name}
        />

        <span className="quick">View product</span>
      </Link>

      {/* IMAGE SLIDER BUTTONS */}
      {images.length > 1 && (
        <div className="image-slider-controls">

          <div className="image-dots">
            {images.map((_, index) => (
              <span
                key={index}
                className={
                  index === currentImage
                    ? "image-dot active"
                    : "image-dot"
                }
              />
            ))}
          </div>

        </div>
      )}

      <div className="product-info">
        <Link
  href={"/product/" + product.slug}
  className="product-name"
>
  {product.name}
</Link>


        <div className="rating">
          ★★★★★
          <span>
            {product.rating} ({product.reviews})
          </span>
        </div>

        <div className="price-row">
          <strong>
            ₹{product.price.toLocaleString("en-IN")}
          </strong>

          <del>
            ₹{product.compareAt.toLocaleString("en-IN")}
          </del>

          <button onClick={() => add(product)}>
            Add
          </button>
        </div>
      </div>
    </article>
  );
}