import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductDetailPage } from "@/components/product-detail-page";
import { catalogProducts } from "@/lib/products";

type ProductPageProps = PageProps<"/products/[id]">;

export function generateStaticParams() {
  return catalogProducts.map((product) => ({ id: product.id }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { id } = await params;
  const product = catalogProducts.find((item) => item.id === id);
  if (!product) return { title: "Pièce introuvable | Cuveroo" };

  return {
    title: `${product.name} | Cuveroo`,
    description: `${product.alt}. Découvrez cette création Cuveroo façonnée à la main au Maroc.`,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = catalogProducts.find((item) => item.id === id);
  if (!product) notFound();

  return <ProductDetailPage product={product} />;
}
