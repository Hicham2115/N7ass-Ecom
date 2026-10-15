import type { Metadata } from "next";
import { ProductsCatalog } from "@/components/products-catalog";

export const metadata: Metadata = {
  title: "La collection | Cuveroo",
  description: "Découvrez nos luminaires, objets de décoration et pièces d’extérieur en cuivre, fabriqués à la main au Maroc.",
};

export default function ProductsPage() {
  return <ProductsCatalog />;
}
