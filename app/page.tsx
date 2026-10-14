import { CategorySection } from "@/components/category-section";
import { ContactSection } from "@/components/contact-section";
import { FaqSection } from "@/components/faq-section";
import { FeaturedProductsSection } from "@/components/featured-products-section";
import { Hero } from "@/components/hero";
import { MaisonServicesSection } from "@/components/maison-services-section";
import { ReviewsSection } from "@/components/reviews-section";
import { SeasonalFeatureSection } from "@/components/seasonal-feature-section";

export default function Home() {
  return (
    <main>
      <Hero />
      <CategorySection />
      <SeasonalFeatureSection />
      <FeaturedProductsSection />
      <MaisonServicesSection />
      <ReviewsSection />
      <FaqSection />
      <ContactSection />
    </main>
  );
}
