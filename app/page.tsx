import { CategorySection } from "@/components/category-section";
import { ContactSection } from "@/components/contact-section";
import { FaqSection } from "@/components/faq-section";
import { FeaturedProductsSection } from "@/components/featured-products-section";
import { Hero } from "@/components/hero";
import { MaisonServicesSection } from "@/components/maison-services-section";
import { ReviewsSection } from "@/components/reviews-section";
import { SeasonalFeatureSection } from "@/components/seasonal-feature-section";
import { ScrollReveal } from "@/components/scroll-reveal";

export default function Home() {
  return (
    <main>
      <Hero />
      <ScrollReveal><CategorySection /></ScrollReveal>
      <ScrollReveal><SeasonalFeatureSection /></ScrollReveal>
      <ScrollReveal><FeaturedProductsSection /></ScrollReveal>
      <ScrollReveal><MaisonServicesSection /></ScrollReveal>
      <ScrollReveal><ReviewsSection /></ScrollReveal>
      <ScrollReveal><FaqSection /></ScrollReveal>
      <ScrollReveal><ContactSection /></ScrollReveal>
    </main>
  );
}
