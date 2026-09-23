import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/home/hero/Hero";
import { SearchWidget } from "@/components/home/hero/SearchWidget";
import { DestinationsGrid } from "@/components/home/destinations/DestinationsGrid";
import { FeaturedTours } from "@/components/home/featured-tours/FeaturedTours";
import { PilgrimageHighlight } from "@/components/home/pilgrimage/PilgrimageHighlight";
import { WhyChooseUs } from "@/components/home/why-choose-us/WhyChooseUs";
import { Testimonials } from "@/components/home/testimonials/Testimonials";
import { BlogPreview } from "@/components/home/blog-preview/BlogPreview";
import { Newsletter } from "@/components/home/newsletter/Newsletter";
import { Footer } from "@/components/layout/footer/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Sticky top navbar with hover dropdowns */}
      <Navbar />

      <main className="flex-1">
        {/* Full-bleed interactive Hero Carousel */}
        <Hero />

        {/* Floating Search Widget */}
          <div className="relative z-30 -mt-10 sm:-mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SearchWidget />
          </div>

        {/* Top Destinations Showcase */}
        <DestinationsGrid />

        {/* Handcrafted Featured Tour Packages */}
        <FeaturedTours />

        {/* Sacred Pilgrimage Yatra Highlights */}
        <PilgrimageHighlight />

        {/* Why Choose Us Trust Pillars */}
        <WhyChooseUs />

        {/* Verified Traveler Testimonials */}
        <Testimonials />

        {/* Editorial Blog & Travel Guides */}
        <BlogPreview />

        {/* Luxury Travel Newsletter */}
        <Newsletter />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
