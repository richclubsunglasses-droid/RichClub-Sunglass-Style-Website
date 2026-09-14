import Link from "next/link";
import ProductGrid from "@/components/ProductGrid";
import {products,categories,shapes} from "@/data/products";
export default async function Shop({searchParams}){
 const sp=await searchParams; const category=sp.category||"All", gender=sp.gender, shape=sp.shape, sort=sp.sort;
 let list=[...products];
 if(category!=="All")list=list.filter(p=>p.category===category);
 if(gender)list=list.filter(p=>p.gender===gender);
 if(shape)list=list.filter(p=>p.shape===shape);
 if(sort==="new")list=list.slice().reverse();
 if(sort==="popular")list.sort((a,b)=>b.rating-a.rating);
 return <main><section className="shop-hero"><div className="container"><p className="eyebrow">RICHCLUB COLLECTION</p><h1>Shop Sunglasses</h1><p>Find your frame by collection, shape or style.</p><div className="filters">{categories.map(c=><Link key={c} href={c==="All"?"/shop":"/shop?category="+encodeURIComponent(c)} className={"filter "+((category===c)?"active":"")}>{c}</Link>)}</div></div></section><section className="section"><div className="container shop-layout"><aside className="filter-panel"><h4>SHOP BY SHAPE</h4>{shapes.map(s=><Link key={s} href={"/shop?shape="+s}>{s}</Link>)}<h4 style={{marginTop:35}}>SHOP BY GENDER</h4><Link href="/shop?gender=Men">Men</Link><Link href="/shop?gender=Women">Women</Link><Link href="/shop">Unisex</Link></aside><div><div className="section-head"><div><p className="eyebrow">{list.length} PRODUCTS</p><h2 className="section-title">{gender||shape||category}</h2></div></div><ProductGrid products={list}/></div></div></section></main>
}