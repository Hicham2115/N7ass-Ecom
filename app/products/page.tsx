import type { Metadata } from "next";
import { ProductsCatalog } from "@/components/products-catalog";

export const metadata: Metadata = {
  title: "Our Collection | Cuveroo",
  description: "Explore handcrafted copper lighting, home accents, and outdoor pieces made in Morocco.",
};

export default function ProductsPage() {
  return <ProductsCatalog />;
}
