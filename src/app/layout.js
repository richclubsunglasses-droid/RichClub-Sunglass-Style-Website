import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import CartProvider from "@/components/CartProvider";
import CartDrawer from "@/components/CartDrawer";

export const metadata = {
  title: "RICHCLUB — Premium Eyewear",
  description: "Premium sunglasses for everyday confidence.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <SiteHeader />
          <CartDrawer />
          {children}
          <SiteFooter />
        </CartProvider>
      </body>
    </html>
  );
}