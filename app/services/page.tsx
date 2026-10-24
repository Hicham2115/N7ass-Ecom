import type { Metadata } from "next";
import { ServicesCatalog } from "@/components/services-catalog";

export const metadata: Metadata = {
  title: "Nos services | T.cap",
  description: "Découvrez les services d’aménagement intérieur et extérieur proposés par T.cap à Selouane, près de Nador.",
};

export default function ServicesPage() {
  return <ServicesCatalog />;
}
