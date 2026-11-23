

import HeroSlider from "@/components/home/HeroSlider";
import CategorySection from "@/components/home/CategorySection";
import NewArrivals from "@/components/home/NewArrivals";
import PromotionalBanner from "@/components/home/PromotionalBanner";
import SpecialOffers from "@/components/home/SpecialOffers";
import BrandStory from "@/components/home/BrandStory";
import Testimonials from "@/components/home/Testimonials";
import ShopByOccasion from "@/components/home/ShopByOccasion";
import ShopByCollection from "@/components/home/ShopByCollection";

import {
  ShieldCheck,
  Sparkles,
  HeartHandshake,
} from "lucide-react";

const highlights = [
  {
    icon: ShieldCheck,
    title: "Authentic Handlooms",
    description: "Celebrating traditional craftsmanship",
  },
  {
    icon: Sparkles,
    title: "Timeless Designs",
    description: "Tradition with elegant style",
  },
  {
    icon: HeartHandshake,
    title: "Crafted with Care",
    description: "Inspired by skilled artisans",
  },
];

function BrandHighlights() {
  return (
    <section className="border-y border-[#e9dfd3] bg-[#fffdf9] px-5 py-8 md:px-10">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-7 sm:grid-cols-3">
        {highlights.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="flex items-center justify-center gap-3"
            >
              <Icon
                size={27}
                strokeWidth={1.4}
                className="shrink-0 text-[#a47748]"
              />

              <div>
                <h3 className="font-serif text-sm font-semibold text-[#632d35] md:text-base">
                  {item.title}
                </h3>

                <p className="mt-1 text-[11px] leading-5 text-gray-500 md:text-xs">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#fffdf9]">
      {/* Main Campaign */}
      <HeroSlider />

      {/* Brand Highlights */}
      <BrandHighlights />

      {/* First: Discover Your Style */}
      <CategorySection />

      {/* Second: Shop by Collection */}
      <ShopByCollection />

      <ShopByOccasion />

      {/* Festive Campaign */}
      <PromotionalBanner />

      {/* New Products */}
      <NewArrivals />

      {/* Special Discounts */}
      <SpecialOffers />

      {/* Brand Heritage */}
      <BrandStory />

      {/* Customer Experiences */}
      <Testimonials />

    </main>
  );
}
