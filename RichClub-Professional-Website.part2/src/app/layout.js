import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import CartProvider from "@/components/CartProvider";

export const metadata = {
  metadataBase: new URL("https://richclub.in"),
  title: { default: "RICHCLUB — Premium Eyewear", template: "%s | RICHCLUB" },
  description: "Premium sunglasses with UV protection, built for confidence, comfort and everyday style.",
  keywords: ["sunglasses", "polarized sunglasses", "UV protection", "eyewear India"],
  openGraph: { title: "RICHCLUB — Premium Eyewear", description: "Your next signature pair.", type: "website" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <SiteHeader />
          {children}
          <SiteFooter />
        </CartProvider>
      </body>
    </html>
  );
}