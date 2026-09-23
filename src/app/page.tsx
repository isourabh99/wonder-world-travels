import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/home/hero/Hero";
import { DestinationsGrid } from "@/components/home/destinations/DestinationsGrid";
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

        {/* Handcrafted Featured Tour Packages */}
        <FeaturedTours />

        {/* Sacred Pilgrimage Yatra Highlights */}
        <PilgrimageHighlight />

        {/* Why Choose Us Trust Pillars */}
        <WhyChooseUs />

        {/* Verified Traveler Testimonials */}
        <Testimonials />

        {/* Exclusive Travel Blogs & Curated Guides */}
        <ExclusiveBlogs />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
