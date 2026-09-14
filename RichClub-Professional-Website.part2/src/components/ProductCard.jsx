 "use client";
import Link from "next/link";
import {useCart} from "./CartProvider";
export default function ProductCard({product}){
 const {add}=useCart();
 return <article className="product-card">
  <Link href={"/product/"+product.slug} className="product-media">
   {product.badge&&<span className="badge">{product.badge}</span>}
   <img src={product.image} alt={product.name}/>
   <span className="quick">View product</span>
  </Link>
  <div className="product-info"><p className="eyebrow">{product.category}</p><Link href={"/product/"+product.slug} className="product-name">{product.name}</Link><div className="rating">★★★★★ <span>{product.rating} ({product.reviews})</span></div><div className="price-row"><strong>₹{product.price.toLocaleString("en-IN")}</strong><del>₹{product.compareAt.toLocaleString("en-IN")}</del><button onClick={()=>add(product)}>Add</button></div></div>
 </article>
}