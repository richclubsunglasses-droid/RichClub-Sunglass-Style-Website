import {notFound} from "next/navigation";
import {products} from "@/data/products";
import ProductActions from "@/components/ProductActions";
import ProductGrid from "@/components/ProductGrid";
export default async function ProductPage({ params }) {
  const { slug } = await params;

  const product = products.find((p) => p.slug === slug);

  if (!product) notFound();

  const related = products
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  return (
    <main>

      <section className="product-page">
        <div className="product-detail">

          {/* PRODUCT IMAGES CAROUSEL */}
          <div className="product-carousel">
  {(product.images?.length ? product.images : [product.image]).map((image, index) => (
    <div className="product-carousel-slide" key={index}>
      <img
        src={image}
        alt={product.name + " " + (index + 1)}
      />
    </div>
  ))}
</div>

          {/* PRODUCT DETAILS */}
          <div className="product-detail-copy">

            <p className="eyebrow">
              {product.category} · {product.shape}
            </p>

            <h1>{product.name}</h1>
            <ProductActions product={product} />

            <div className="rating">
              ★★★★★
              <span>
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            <p className="detail-price">
              ₹{product.price.toLocaleString("en-IN")}
              {" "}
              <del
                style={{
                  fontSize: 14,
                  color: "#999",
                }}
              >
                ₹{product.compareAt.toLocaleString("en-IN")}
              </del>
            </p>

            {/* DESCRIPTION */}
            <div
              className="detail-copy product-description"
              dangerouslySetInnerHTML={{
                __html: product.description || "",
              }}
            />

        

            <ul className="feature-list">
              {product.features?.map((f) => (
                <li key={f}>
                  ✓ &nbsp; {f}
                </li>
              ))}
            </ul>

            <p className="detail-copy">
              Free shipping above ₹999. Easy support for returns and exchanges.
            </p>

          </div>

        </div>
      </section>

      {/* RELATED PRODUCTS */}
      <section className="section">
        <div className="container">

          <div className="section-head">
            <h2 className="section-title">
              You may also like
            </h2>
          </div>

          <ProductGrid products={related} />

        </div>
      </section>

    </main>
  );
}