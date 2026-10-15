import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Footer } from "@/components/footer";
import { SmoothScroll } from "@/components/smooth-scroll";
import { ShopProvider } from "@/components/shop-state";
import { Header } from "@/layout/header";
import "lenis/dist/lenis.css";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cuveroo — Le cuivre intemporel, façonné à la main",
  description:
    "Découvrez les luminaires, pièces de bain et objets en cuivre façonnés à la main au Maroc par Cuveroo.",
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
