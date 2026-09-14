"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/components/CartProvider";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { count } = useCart();

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <div className="rc-promo-bar">
        FREE SHIPPING ON ORDERS ABOVE ₹999 &nbsp; • &nbsp; COD AVAILABLE
      </div>

      <header className="rc-navbar">
        <div className="rc-nav-inner">

          <button
            type="button"
            className="rc-menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Open menu"
          >
            ☰
          </button>

          <Link href="/" className="rc-logo" onClick={closeMenu}>
            <span>RICHCLUB</span>
            <small>PREMIUM EYEWEAR</small>
          </Link>

          <nav className="rc-desktop-nav">
            <Link href="/">HOME</Link>
            <Link href="/shop">ALL SUNGLASSES</Link>
            <Link href="/shop">COLLECTIONS</Link>
            <Link href="/about">ABOUT US</Link>
            <Link href="/contact">CONTACT</Link>
          </nav>

          <div className="rc-nav-actions">

            <Link
              href="/search"
              className="rc-search-btn"
              aria-label="Search"
            >
              ⌕
            </Link>

            <Link href="/cart" className="rc-cart-btn">
              <span className="rc-cart-text">CART</span>
              <span className="rc-cart-count">{count}</span>
            </Link>

          </div>
        </div>

        <div
          className={"rc-mobile-menu " + (menuOpen ? "open" : "")}
        >

          <Link href="/" onClick={closeMenu}>
            HOME
          </Link>

          <Link href="/shop" onClick={closeMenu}>
            ALL SUNGLASSES
          </Link>

          <Link href="/shop" onClick={closeMenu}>
            COLLECTIONS
          </Link>

          <Link href="/about" onClick={closeMenu}>
            ABOUT US
          </Link>

          <Link href="/contact" onClick={closeMenu}>
            CONTACT
          </Link>

          <Link href="/search" onClick={closeMenu}>
            SEARCH
          </Link>

          <Link href="/cart" onClick={closeMenu}>
            CART ({count})
          </Link>

        </div>
      </header>

      <style jsx>{`
        .rc-promo-bar {
          width: 100%;
          background: #080808;
          color: #fff;
          text-align: center;
          padding: 9px 15px;
          font-size: 11px;
          letter-spacing: 1.2px;
          font-weight: 500;
        }

        .rc-navbar {
          width: 100%;
          background: #fff;
          border-bottom: 1px solid #eee;
          position: relative;
          z-index: 1000;
        }

        .rc-nav-inner {
          width: 100%;
          max-width: 1400px;
          min-height: 82px;
          margin: 0 auto;
          padding: 0 35px;
          display: flex;
          align-items: center;
          gap: 35px;
        }

        .rc-logo {
          text-decoration: none;
          color: #111;
          display: flex;
          flex-direction: column;
          line-height: 1;
          min-width: 155px;
        }

        .rc-logo span {
          font-size: 22px;
          font-weight: 800;
          letter-spacing: 4px;
        }

        .rc-logo small {
          margin-top: 7px;
          font-size: 8px;
          letter-spacing: 3px;
          color: #777;
        }

        .rc-desktop-nav {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 28px;
          flex: 1;
        }

        .rc-desktop-nav a {
          text-decoration: none;
          color: #111;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 1px;
          white-space: nowrap;
        }

        .rc-desktop-nav a:hover {
          opacity: 0.55;
        }
          .rc-nav-actions {
          display: flex;
          align-items: center;
          gap: 18px;
        }

        .rc-search-btn {
          color: #111;
          text-decoration: none;
          font-size: 28px;
          line-height: 1;
        }

        .rc-cart-btn {
          color: #111;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 7px;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 1px;
        }

        .rc-cart-count {
          width: 21px;
          height: 21px;
          border-radius: 50%;
          background: #111;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 10px;
        }

        .rc-menu-btn {
          display: none;
          border: 0;
          background: transparent;
          font-size: 24px;
          cursor: pointer;
          padding: 5px;
        }

        .rc-mobile-menu {
          display: none;
        }

        @media (max-width: 900px) {
          .rc-nav-inner {
            min-height: 68px;
            padding: 0 18px;
            justify-content: space-between;
            gap: 12px;
          }

          .rc-menu-btn {
            display: block;
          }

          .rc-logo {
            min-width: auto;
            align-items: center;
          }

          .rc-logo span {
            font-size: 18px;
            letter-spacing: 3px;
          }

          .rc-logo small {
            font-size: 6px;
            letter-spacing: 2px;
            margin-top: 5px;
          }

          .rc-desktop-nav {
            display: none;
          }

          .rc-nav-actions {
            gap: 12px;
          }

          .rc-search-btn {
            font-size: 25px;
          }

          .rc-cart-text {
            display: none;
          }

          .rc-mobile-menu {
            display: flex;
            flex-direction: column;
            background: #fff;
            border-top: 1px solid #eee;
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            padding: 8px 20px 20px;
            transform: translateY(-10px);
            opacity: 0;
            visibility: hidden;
            pointer-events: none;
            transition: all 0.25s ease;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
          }

          .rc-mobile-menu.open {
            transform: translateY(0);
            opacity: 1;
            visibility: visible;
            pointer-events: auto;
          }

          .rc-mobile-menu a {
            text-decoration: none;
            color: #111;
            font-size: 13px;
            font-weight: 600;
            letter-spacing: 1.5px;
            padding: 16px 5px;
            border-bottom: 1px solid #eee;
          }

          .rc-promo-bar {
            font-size: 9px;
            letter-spacing: 0.8px;
            padding: 8px 10px;
          }
        }
      `}</style>
    </>
  );
}