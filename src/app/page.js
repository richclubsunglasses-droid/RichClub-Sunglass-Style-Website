"use client";
import Link from "next/link";
import ProductGrid from "@/components/ProductGrid";
import TrustBar from "@/components/TrustBar";
import {products} from "@/data/products";
export default function Home(){
 const newArrivals=products.slice(0,4), hot=products.slice(4,8);
 return <>
 <main>
   <section className="hero-banner-section">
  <Link href="/shop" className="hero-banner-link">
    <img
      src="/richclub-hero-banner.png"
      alt="RichClub Premium Eyewear"
      className="hero-banner-image"
    />
  </Link>
</section>
<section className="benefits-strip">
  <div className="benefit-item">
    <span className="benefit-icon">✦</span>
    <div>
      <strong>Premium Quality</strong>
      <small>Made for everyday style</small>
    </div>
  </div>

  <div className="benefit-item">
    <span className="benefit-icon">↗</span>
    <div>
      <strong>Free Shipping</strong>
      <small>Across India</small>
    </div>
  </div>

  <div className="benefit-item">
    <span className="benefit-icon">✓</span>
    <div>
      <strong>Secure Payment</strong>
      <small>100% secure checkout</small>
    </div>
  </div>

  <div className="benefit-item">
    <span className="benefit-icon">↺</span>
    <div>
      <strong>Easy Returns</strong>
      <small>Hassle-free support</small>
    </div>
  </div>
</section>
   <section className="section"><div className="container"><div className="section-head"><div><p className="eyebrow">THIS MONTH</p><h2 className="section-title new-arrivals-title">New Arrivals</h2></div><Link className="view-all" href="/shop?sort=new">View all</Link></div><ProductGrid products={newArrivals}/></div></section>
   <section className="section dark-section"><div className="container"><div className="section-head"><div><p className="eyebrow">FIND YOUR FIT</p><h2 className="section-title">Shop by Shape</h2></div><Link className="view-all" href="/shop">Explore</Link></div><div className="shape-grid">{[["Rectangle","/Product-1.png"],["Square","/Product-2.png"],["Round","/Product-3.png"],["Hexagon","/sunglasses.png"]].map(([name,img])=><Link href={"/shop?shape="+name} className="shape-card" key={name}><img src={img} alt=""/><h3>{name}</h3><span>SHOP NOW →</span></Link>)}</div></div></section>
   <section className="section"><div className="container"><div className="section-head"><div><p className="eyebrow">2026 EDIT</p><h2 className="section-title best-sellers-title">BEST SELLERS</h2></div><Link className="view-all" href="/shop?sort=popular">View all</Link></div><ProductGrid products={hot}/></div></section>
   <section className="section"><div className="container"><div className="look"><div className="look-main"><img src="/Product-1.png" alt="RichClub collection"/><div className="look-caption"><h3>Shop the look</h3><span>CURATED RICHCLUB STYLE →</span></div></div><div className="look-side"><img src="/Product-3.png" alt="RichClub eyewear"/><div className="look-caption"><h3>Blue hour.</h3><span>EXPLORE POLARIZED →</span></div></div></div></div></section>
   <section className="editorial"><img src="/Product-2.png" alt="RichClub eyewear editorial"/><div className="editorial-copy"><p className="eyebrow">ABOUT RICHCLUB</p><h2>Eyewear made for your everyday world.</h2><p>RichClub is built around one idea: great eyewear should feel as good as it looks. Clean silhouettes, confident details and everyday comfort come together in every collection.</p><Link href="/about" className="button">OUR STORY</Link></div></section>
   <TrustBar/>
   <section className="section reviews"><div className="container"><div className="section-head"><div><p className="eyebrow">CUSTOMER LOVE</p><h2 className="section-title">Styled for a reason.</h2></div></div><div className="review-grid">{[["Rahul S.","The frame looks premium and the fit is extremely comfortable."],["Aman K.","Really good quality for the price. Looks even better in person."],["Arjun M.","Sporty, lightweight and stylish. Definitely buying another pair."]].map(([n,t])=><div className="review" key={n}><div className="stars">★★★★★</div><p>“{t}”</p><strong>{n}</strong></div>)}</div></div></section>
   <section className="newsletter"><p className="eyebrow">RICHCLUB INSIDER</p><h2>Get the latest from RichClub.</h2><p>New drops, offers and eyewear updates.</p><form onSubmit={e=>e.preventDefault()}><input type="email" placeholder="Email address"/><button>Subscribe</button></form></section>
  </main>
 </>
}