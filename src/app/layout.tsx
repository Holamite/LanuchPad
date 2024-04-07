import type { Metadata } from "next";
import "./globals.css";
import { Space_Grotesk, Hanken_Grotesk, Playfair_Display } from "next/font/google";
import Footer from "@/components/Footer";
import Navbar from "@/components/Home/Navbar";

const space = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap"
})

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
  display: "swap"
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap"
})


export const metadata: Metadata = {
  title: "SPIDEX",
  description: "Explore web3 with no native gas fee",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${space.variable} ${hanken.variable} ${playfair.variable}`}
    >
      <body className="font-hanken text-neutral-300">
        <section className="lg:px-20 pt-8 pb-24 bg-hero">
          <Navbar />
        </section>
        {children}
        {/* footer */}
        <Footer />
      </body>
    </html>
  );
}
