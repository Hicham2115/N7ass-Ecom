import type { Metadata } from "next";
import localFont from "next/font/local";
import { Footer } from "@/components/footer";
import { SmoothScroll } from "@/components/smooth-scroll";
import { ShopProvider } from "@/components/shop-state";
import { Header } from "@/layout/header";
import "lenis/dist/lenis.css";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/geist-latin.woff2",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/geist-mono-latin.woff2",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "T.cap — Aménagement intérieur & extérieur",
  description:
    "Cuisines sur mesure, chambres, salons et finitions intérieures à Nador et dans la région. T.cap aménage vos espaces selon votre projet.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr-MA" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <ShopProvider>
          <SmoothScroll>
            <Header />
            {children}
            <Footer />
          </SmoothScroll>
        </ShopProvider>
      </body>
    </html>
  );
}
