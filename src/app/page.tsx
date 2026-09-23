import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/home/hero/Hero";
import { DestinationsGrid } from "@/components/home/destinations/DestinationsGrid";
import { TourismApproach } from "@/components/home/tourism-approach";
import { FeaturedTours } from "@/components/home/featured-tours/FeaturedTours";
import { PilgrimageHighlight } from "@/components/home/pilgrimage/PilgrimageHighlight";
import { WhyChooseUs } from "@/components/home/why-choose-us/WhyChooseUs";
import { Testimonials } from "@/components/home/testimonials/Testimonials";
import { ExclusiveBlogs } from "@/components/home/exclusive-blogs";
import { Footer } from "@/components/layout/footer/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Sticky top navbar with hover dropdowns */}
      <Navbar />

      <main className="flex-1">
        {/* Full-bleed interactive Hero Carousel */}
        <Hero />

        {/* Top Destinations Showcase */}
        <DestinationsGrid />

        {/* Our Approach To Tourism - Premium Services (White Background) */}
        <TourismApproach />

        {/* Handcrafted Featured Tour Packages */}
        <FeaturedTours />

        {/* Sacred Pilgrimage Yatra Highlights */}
        <PilgrimageHighlight />

        {/* Why Choose Us Trust Pillars */}
        <WhyChooseUs />

        {/* Exclusive Travel Blogs & Curated Guides */}
        <ExclusiveBlogs />
        {/* Verified Traveler Testimonials */}
        <Testimonials />

      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}



