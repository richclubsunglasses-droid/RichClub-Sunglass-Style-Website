import ProductGrid from "@/components/ProductGrid";
import {products} from "@/data/products";
export default async function Search({searchParams}){
 const sp=await searchParams; const q=(sp.q||"").toLowerCase(); const results=q?products.filter(p=>(p.name+" "+p.category+" "+p.shape).toLowerCase().includes(q)):[];
 return <main><section className="search-page"><form className="search-form"><input name="q" defaultValue={q} placeholder="Search RichClub..."/><button>Search</button></form>{q?<><p className="eyebrow">{results.length} RESULTS</p><h1 className="section-title">Search results for “{q}”</h1><div style={{marginTop:35}}>{results.length?<ProductGrid products={results}/>:<div className="empty">No products found.</div>}</div></>:<div className="empty">Search our sunglasses by name, style or shape.</div>}</section></main>
}