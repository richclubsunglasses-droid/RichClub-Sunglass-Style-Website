"use client";

import { useState } from "react";

export default function ProductGallery({ product }) {
  const images = product.gallery?.length ? product.gallery : [product.image];
  const [active, setActive] = useState(images[0]);

  return (
    <div className="gallery-wrap">
      <div className="product-gallery-main">
        <span className="gallery-badge">{product.badge || "RICHCLUB"}</span>
        <img src={active} alt={`${product.name} product view`} />
        <span className="zoom-hint">Hover to view closer</span>
      </div>
      <div className="gallery-thumbs" aria-label="Product images">
        {images.map((image, index) => (
          <button
            type="button"
            className={active === image ? "active" : ""}
            onClick={() => setActive(image)}
            aria-label={`View product image ${index + 1}`}
            key={`${image}-${index}`}
          >
            <img src={image} alt="" />
          </button>
        ))}
      </div>
    </div>
  );
}
