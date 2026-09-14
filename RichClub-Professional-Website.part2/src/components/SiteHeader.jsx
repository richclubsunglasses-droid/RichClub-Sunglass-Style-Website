"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "./CartProvider";

const links = [
  ["New In", "/shop?sort=new"], ["Polarized", "/shop?category=Polarized"],
  ["Sports", "/shop?category=Sports"], ["Men", "/shop?gender=Men"],
  ["Women", "/shop?gender=Women"], ["All Eyewear", "/shop"],
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState(false);
  const { count } = useCart();

  return <>
    <div className="announcement"><span>COMPLIMENTARY SHIPPING ABOVE ₹999</span><span className="announcement-hide">•</span><span className="announcement-hide">EASY RETURNS · SECURE PAYMENTS</span></div>
    <header className="header">
      <div className="header-inner">
        <button className="icon-btn mobile-only" onClick={() => setOpen(!open)} aria-label="Toggle menu">{open ? "×" : "☰"}</button>
        <Link href="/" className="logo" aria-label="RichClub home">RICHCLUB<span>®</span></Link>
        <nav className="desktop-nav" aria-label="Main navigation">{links.map(([title, href]) => <Link key={title} href={href}>{title}</Link>)}</nav>
        <div className="header-actions">
          <button className="header-icon" onClick={() => setSearch(true)} aria-label="Search"><span>⌕</span><em>Search</em></button>
          <Link href="/account" className="header-icon account-link" aria-label="Account"><span>◯</span><em>Account</em></Link>
          <Link href="/cart" className="header-icon cart-btn" aria-label={`Shopping bag with ${count} items`}><span>▱</span><em>Bag</em>{count > 0 && <b>{count}</b>}</Link>
        </div>
      </div>
      {open && <nav className="mobile-menu" aria-label="Mobile navigation">{links.map(([title, href]) => <Link key={title} href={href} onClick={() => setOpen(false)}>{title}<span>→</span></Link>)}<Link href="/about" onClick={() => setOpen(false)}>Our story<span>→</span></Link><Link href="/contact" onClick={() => setOpen(false)}>Contact<span>→</span></Link></nav>}
    </header>
    {search && <div className="search-modal" role="dialog" aria-modal="true" aria-label="Search products"><button className="search-close" onClick={() => setSearch(false)} aria-label="Close search">×</button><div className="search-modal-inner"><p className="eyebrow">WHAT ARE YOU LOOKING FOR?</p><form action="/search"><input autoFocus name="q" placeholder="Search frames, shapes, collections…"/><button>SEARCH</button></form><div className="popular-searches"><span>Popular:</span><Link href="/shop?category=Polarized">Polarized</Link><Link href="/shop?shape=Wayfarer">Wayfarer</Link><Link href="/shop?category=Sports">Sports</Link></div></div></div>}
  </>;
}
