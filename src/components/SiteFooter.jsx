"use client";"use client";
import Link from "next/link";
export default function SiteFooter(){
 return <footer className="footer">
  <div className="footer-top">
   <div><Link href="/" className="footer-logo">RICHCLUB</Link><p>Premium eyewear designed for confidence, comfort and everyday style.</p></div>
   <div><h4>SHOP</h4><Link href="/shop">All Sunglasses</Link><Link href="/shop?category=Sports">Sports</Link><Link href="/shop?category=Polarized">Polarized</Link><Link href="/shop?gender=Men">Men</Link><Link href="/shop?gender=Women">Women</Link></div>
   <div><h4>COMPANY</h4><Link href="/about">About Us</Link><Link href="/contact">Contact</Link><Link href="/account">My Account</Link><Link href="/search">Search</Link></div>
   <div><h4>HELP</h4><Link href="/policies/shipping">Shipping & Delivery</Link><Link href="/policies/returns">Returns & Refunds</Link><Link href="/policies/privacy">Privacy Policy</Link><Link href="/policies/terms">Terms & Conditions</Link></div>
  </div>
  <div className="footer-news"><div><h3>Stay ahead of the next drop.</h3><p>New arrivals and exclusive RichClub offers.</p></div><form onSubmit={e=>e.preventDefault()}><input type="email" placeholder="Your email address"/><button>Subscribe</button></form></div>
  <div className="footer-bottom"><span>© 2026 RICHCLUB. All rights reserved.</span><span>Instagram · Facebook · YouTube</span></div>
 </footer>
}