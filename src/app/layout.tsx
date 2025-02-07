import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
import {Poppins} from 'next/font/google'
import Footer from "./homepage/Footer";
import { CartProvider } from "./context/CartContext";
import { PaymentProvider } from "./context/payment-context";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-main antialiased ${poppins.variable}`}
      >
        <PaymentProvider>
          <CartProvider>
            <Navbar />
            {children}
            <Footer />
          </CartProvider>
        </PaymentProvider>
      </body>
    </html>
  );
}
