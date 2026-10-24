import type { Metadata } from "next";
import { ProductsCatalog } from "@/components/products-catalog";

export const metadata: Metadata = {
  title: "Nos produits et services | T.cap",
  description: "Découvrez notre collection de luminaires, objets décoratifs, mobilier et poufs.",
};

export default function ProductsPage() {
  return <ProductsCatalog />;
}
