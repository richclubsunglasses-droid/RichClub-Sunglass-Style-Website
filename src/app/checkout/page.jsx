"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/components/CartProvider";

export default function Checkout() {
  const { cart, total, clear } = useCart();

  const [ordered, setOrdered] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleOrder = (e) => {
    e.preventDefault();

    if (!cart.length) return;

    setOrdered(true);
    clear();
  };

  if (ordered) {
    return (
      <main
        style={{
          minHeight: "70vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px 20px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "550px" }}>
          <div
            style={{
              width: "65px",
              height: "65px",
              borderRadius: "50%",
              background: "#111",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 25px",
              fontSize: "30px",
            }}
          >
            ✓
          </div>

          <p
            style={{
              fontSize: "11px",
              letterSpacing: "2px",
              fontWeight: "700",
            }}
          >
            ORDER CONFIRMED
          </p>

          <h1 style={{ fontSize: "42px", margin: "10px 0 15px" }}>
            Thank You!
          </h1>

          <p style={{ color: "#666", lineHeight: "1.7" }}>
            Your order has been received successfully.
            We will contact you shortly to confirm your order.
          </p>

          <Link
            href="/shop"
            style={{
              display: "inline-block",
              marginTop: "25px",
              padding: "15px 25px",
              background: "#111",
              color: "#fff",
              textDecoration: "none",
              fontSize: "12px",
              fontWeight: "700",
              letterSpacing: "1px",
            }}
          >
            CONTINUE SHOPPING
          </Link>
        </div>
      </main>
    );
  }

  if (!cart.length) {
    return (
      <main
        style={{
          minHeight: "70vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px 20px",
          textAlign: "center",
        }}
      >
        <div>
          <p
            style={{
              fontSize: "11px",
              letterSpacing: "2px",
              fontWeight: "700",
            }}
          >
            CHECKOUT
          </p>

          <h1 style={{ fontSize: "40px" }}>
            Your cart is empty
          </h1>

          <p style={{ color: "#666" }}>
            Add a pair of sunglasses before checking out.
          </p>

          <Link
            href="/shop"
            style={{
              display: "inline-block",
              marginTop: "20px",
              padding: "15px 25px",
              background: "#111",
              color: "#fff",
              textDecoration: "none",
              fontSize: "12px",
              fontWeight: "700",
            }}
          >
            SHOP SUNGLASSES
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main
      style={{
        minHeight: "80vh",
        background: "#fafafa",
        padding: "50px 20px 80px",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: "40px",
          }}
        >
          <p
            style={{
              fontSize: "11px",
              letterSpacing: "2px",
              fontWeight: "700",
            }}
          >
            RICHCLUB CHECKOUT
          </p>

          <h1
            style={{
              fontSize: "42px",
              margin: "10px 0",
            }}
          >
            Complete Your Order
          </h1>
        </div>

        <div className="checkout-grid">
          <form
            onSubmit={handleOrder}
            style={{
              background: "#fff",
              padding: "30px",
              border: "1px solid #eee",
            }}
          >
            <h2 style={{ marginTop: 0 }}>
              Customer Details
            </h2>

            <label
              style={{
                display: "block",
                marginBottom: "18px",
                fontSize: "13px",
                fontWeight: "600",
              }}
            >
              Full Name

              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
                style={inputStyle}
              />
            </label>

            <label
              style={{
                display: "block",
                marginBottom: "18px",
                fontSize: "13px",
                fontWeight: "600",
              }}
            >
              Mobile Number

              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Enter 10 digit mobile number"
                pattern="[0-9]{10}"
                maxLength="10"
                required
                style={inputStyle}
              />
            </label>

            <label
              style={{
                display: "block",
                marginBottom: "18px",
                fontSize: "13px",
                fontWeight: "600",
              }}
            >
              Email

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter email address"
                required
                style={inputStyle}
              />
            </label>

            <label
              style={{
                display: "block",
                marginBottom: "18px",
                fontSize: "13px",
                fontWeight: "600",
              }}
            >
              Full Address

              <textarea
                name="address"
                value={form.address}
                onChange={handleChange}
                placeholder="House no., street, area"
                rows="4"
                required
                style={inputStyle}
              />
            </label>

            <label
              style={{
                display: "block",
                marginBottom: "18px",
                fontSize: "13px",
                fontWeight: "600",
              }}
            >
              City

              <input
                type="text"
                name="city"
                value={form.city}
                onChange={handleChange}
                placeholder="City"
                required
                style={inputStyle}
              />
            </label>

            <label
              style={{
                display: "block",
                marginBottom: "18px",
                fontSize: "13px",
                fontWeight: "600",
              }}
            >
              State
              <input
                type="text"
                name="state"
                value={form.state}
                onChange={handleChange}
                placeholder="State"
                required
                style={inputStyle}
              />
            </label>

            <label
              style={{
                display: "block",
                marginBottom: "20px",
                fontSize: "13px",
                fontWeight: "600",
              }}
            >
              PIN Code

              <input
                type="text"
                name="pincode"
                value={form.pincode}
                onChange={handleChange}
                placeholder="6 digit PIN code"
                pattern="[0-9]{6}"
                maxLength="6"
                required
                style={inputStyle}
              />
            </label>

            <button
              type="submit"
              style={{
                width: "100%",
                border: "0",
                background: "#111",
                color: "#fff",
                padding: "17px",
                cursor: "pointer",
                fontSize: "12px",
                fontWeight: "700",
                letterSpacing: "1px",
              }}
            >
              PLACE ORDER — ₹{total.toLocaleString("en-IN")}
            </button>
          </form>

          <aside
            style={{
              background: "#fff",
              padding: "30px",
              border: "1px solid #eee",
            }}
          >
            <h2 style={{ marginTop: 0 }}>
              Order Summary
            </h2>

            {cart.map((item) => (
              <div
                key={item.id}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "15px",
                  padding: "15px 0",
                  borderBottom: "1px solid #eee",
                  fontSize: "13px",
                }}
              >
                <div>
                  <strong>{item.name}</strong>

                  <div
                    style={{
                      color: "#777",
                      marginTop: "5px",
                    }}
                  >
                    Qty: {item.quantity}
                  </div>
                </div>

                <strong>
                  ₹
                  {(
                    Number(item.price || 0) *
                    Number(item.quantity || 0)
                  ).toLocaleString("en-IN")}
                </strong>
              </div>
            ))}

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "22px 0",
                fontSize: "17px",
              }}
            >
              <span>Total</span>

              <strong>
                ₹{total.toLocaleString("en-IN")}
              </strong>
            </div>

            <div
              style={{
                background: "#f5f5f5",
                padding: "16px",
              }}
            >
              <strong>Cash on Delivery</strong>

              <p
                style={{
                  color: "#666",
                  fontSize: "12px",
                  lineHeight: "1.6",
                  marginBottom: 0,
                }}
              >
                COD is available for your order.
              </p>
            </div>

            <Link
              href="/cart"
              style={{
                display: "inline-block",
                marginTop: "25px",
                color: "#111",
                textDecoration: "none",
                fontSize: "11px",
                fontWeight: "700",
                letterSpacing: "1px",
              }}
            >
              ← BACK TO CART
            </Link>
          </aside>
        </div>
      </div>
    </main>
  );
}
const inputStyle = {
  width: "100%",
  boxSizing: "border-box",
  marginTop: "8px",
  padding: "13px 14px",
  border: "1px solid #ddd",
  background: "#fff",
  color: "#111",
  fontSize: "14px",
  outline: "none",
};
