 "use client";
import Link from "next/link";
import {useState} from "react";
import {useCart} from "./CartProvider";
export default function SiteHeader(){
 const [open,setOpen]=useState(false); const [search,setSearch]=useState(false); const {count}=useCart();
 const links=[["New Arrival","/shop?sort=new"],["Sports","/shop?category=Sports"],["Polarized","/shop?category=Polarized"],["Men","/shop?gender=Men"],["Women","/shop?gender=Women"],["Combo","/shop?category=Combo"]];
 return <>
  <div className="announcement"><span>BUY 1, GET 1 AT 50% OFF</span><span className="announcement-hide">•</span><span className="announcement-hide">Premium eyewear. Fast shipping across India.</span></div>
  <header className="header">
   <div className="header-inner">
    <button className="icon-btn mobile-only" onClick={()=>setOpen(!open)} aria-label="Menu">{open?"×":"☰"}</button>
    <Link href="/" className="brand-logo">
  <span className="brand-rich">Rich</span>
  <span className="brand-club">Club</span>

  <small>SEE MORE. LIVE BOLDER.</small>
</Link>
    <nav className="desktop-nav">{links.map(([t,h])=><Link key={t} href={h}>{t}</Link>)}</nav>
    <div className="header-actions">
      <button className="search-btn" onClick={()=>setSearch(true)}>⌕ <span>Search</span></button>
      <Link href="/cart" className="cart-btn">Cart {count>0&&<b>{count}</b>}</Link>
      <Link href="/account" className="account-link">Account</Link>
    </div>
   </div>
   {open&&<div className="mobile-menu">{links.map(([t,h])=><Link key={t} href={h} onClick={()=>setOpen(false)}>{t}</Link>)}<Link href="/shop" onClick={()=>setOpen(false)}>All Sunglasses</Link><Link href="/about" onClick={()=>setOpen(false)}>About Us</Link><Link href="/contact" onClick={()=>setOpen(false)}>Contact</Link><Link href="/cart" onClick={()=>setOpen(false)}>Cart ({count})</Link></div>}
  </header>
  {search&&<div className="search-modal"><button className="search-close" onClick={()=>setSearch(false)}>×</button><form action="/search"><input autoFocus name="q" placeholder="Search sunglasses..." /><button>Search</button></form></div>}
 </>;
}