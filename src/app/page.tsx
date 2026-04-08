import { HeroCarousel } from "@/components/home/HeroCarousel";
import { CategoryGrid } from "@/components/home/CategoryGrid";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { PromoBanner } from "@/components/home/PromoBanner";
import { Differentials } from "@/components/home/Differentials";
import { TestimonialCarousel } from "@/components/home/TestimonialCarousel";
import { SocialMedia } from "@/components/home/SocialMedia";
import { Newsletter } from "@/components/home/Newsletter";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroCarousel />
      <CategoryGrid />
      <FeaturedProducts />
      <PromoBanner />
      <Differentials />
      <TestimonialCarousel />
      <SocialMedia />
      <Newsletter />
    </div>
  );
}
