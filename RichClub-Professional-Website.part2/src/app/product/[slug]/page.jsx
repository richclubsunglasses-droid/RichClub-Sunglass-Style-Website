import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/data/products";
import ProductActions from "@/components/ProductActions";
import ProductGallery from "@/components/ProductGallery";
import ProductGrid from "@/components/ProductGrid";
import TrustBar from "@/components/TrustBar";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  if (!product) return {};
  return {
    title: `${product.name} | RICHCLUB`,
    description: `${product.description} ${product.features.join(", ")}.`,
  };
}

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  if (!product) notFound();
  const related = products.filter((item) => item.id !== product.id).slice(0, 4);
  const discount = Math.round((1 - product.price / product.compareAt) * 100);

  return (
    <main>
      <div className="breadcrumbs container"><Link href="/">Home</Link><span>/</span><Link href="/shop">Sunglasses</Link><span>/</span><span>{product.name}</span></div>
      <section className="product-page">
        <div className="product-detail">
          <ProductGallery product={product} />
          <div className="product-detail-copy">
            <p className="eyebrow">{product.category} · {product.shape} · {product.gender}</p>
            <h1>{product.name}</h1>
            <div className="rating product-rating"><span className="stars">★★★★★</span><span>{product.rating} · {product.reviews} verified reviews</span></div>
            <div className="detail-price-row"><strong>₹{product.price.toLocaleString("en-IN")}</strong><del>₹{product.compareAt.toLocaleString("en-IN")}</del><span className="discount-chip">SAVE {discount}%</span></div>
            <p className="tax-note">Inclusive of all taxes</p>
            <p className="detail-copy lead">{product.description}</p>
            <div className="product-option"><div><span>Frame colour</span><strong>Classic Black</strong></div><button type="button" className="colour-swatch" aria-label="Classic black selected" /></div>
            <ProductActions product={product} />
            <div className="product-accordions">
              <details open><summary>Product details <span>+</span></summary><ul>{product.features.map((feature) => <li key={feature}>{feature}</li>)}</ul></details>
              <details><summary>Size & fit <span>+</span></summary><p>Universal unisex fit with lightweight temples designed for comfortable everyday wear.</p></details>
              <details><summary>Shipping & returns <span>+</span></summary><p>Tracked delivery across India. Returns accepted subject to our return policy and product condition checks.</p></details>
            </div>
            <div className="delivery-card"><span className="delivery-icon">⌂</span><div><strong>Check delivery availability</strong><p>Enter your PIN code during checkout for an estimated delivery date.</p></div></div>
          </div>
        </div>
      </section>
      <TrustBar />
      <section className="section product-story"><div className="container story-grid"><div><p className="eyebrow">BUILT FOR EVERYDAY</p><h2 className="section-title">Sharp style.<br/>Serious protection.</h2></div><p>Clean wayfarer lines meet practical UV400 protection and glare-reducing polarized lenses. Made to move easily from daily commutes to weekend plans.</p></div></section>
      <section className="section related-products"><div className="container"><div className="section-head"><div><p className="eyebrow">COMPLETE THE COLLECTION</p><h2 className="section-title">You may also like</h2></div><Link className="view-all" href="/shop">View all</Link></div><ProductGrid products={related} /></div></section>
    </main>
  );
}
