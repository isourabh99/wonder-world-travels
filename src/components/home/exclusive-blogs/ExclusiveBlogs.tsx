"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

interface Persona {
  id: string;
  label: string;
  imageUrl: string;
  tagline: string;
}

interface ExclusiveBlogItem {
  id: string;
  title: string;
  slug: string;
  imageUrl: string;
  personas: string[];
  subtitle: string;
  readTime: string;
  highlightText: string;
  category: string;
}

const PERSONAS: Persona[] = [
  {
    id: "couple",
    label: "Couple",
    imageUrl: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=400&q=80",
    tagline: "Romantic getaways & secluded villas",
  },
  {
    id: "family",
    label: "Family",
    imageUrl: "https://images.unsplash.com/photo-1476703993599-0035a21b17a9?auto=format&fit=crop&w=400&q=80",
    tagline: "Fun adventures for all generations",
  },
  {
    id: "friends",
    label: "Friends",
    imageUrl: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=400&q=80",
    tagline: "High-energy trips, nightlife & trails",
  },
  {
    id: "solo",
    label: "Solo",
    imageUrl: "https://images.unsplash.com/photo-1501555088652-021faa106b9b?auto=format&fit=crop&w=400&q=80",
    tagline: "Soulful discovery & mindful journeys",
  },
  {
    id: "seniors",
    label: "Seniors",
    imageUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
    tagline: "Comfort-first heritage & spiritual routes",
  },
];

const EXCLUSIVE_BLOGS: ExclusiveBlogItem[] = [
  {
    id: "1",
    title: "Singapore Wonders",
    slug: "singapore-wonders-hidden-gems",
    imageUrl: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=800&q=80",
    personas: ["couple", "family"],
    subtitle: "Marina Bay lights & garden marvels",
    readTime: "5 min read",
    highlightText: "Couple & Family Favorite",
    category: "City Guide",
  },
  {
    id: "2",
    title: "Malaysia F1 Getaway",
    slug: "malaysia-f1-weekend-guide",
    imageUrl: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=800&q=80",
    personas: ["friends", "solo"],
    subtitle: "Sepang thrill & KL street nightlife",
    readTime: "4 min read",
    highlightText: "High-Octane Adventure",
    category: "Motorsport & Culture",
  },
  {
    id: "3",
    title: "Mercure Maldives",
    slug: "maldives-overwater-luxury-escape",
    imageUrl: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=80",
    personas: ["couple"],
    subtitle: "Overwater bliss & lagoon sunsets",
    readTime: "6 min read",
    highlightText: "Ultimate Honeymoon",
    category: "Luxury Escapes",
  },
  {
    id: "4",
    title: "Bali Thrills & Serenity",
    slug: "bali-thrills-and-serenity",
    imageUrl: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80",
    personas: ["couple", "friends", "solo"],
    subtitle: "Uluwatu sea cliffs & Ubud retreats",
    readTime: "5 min read",
    highlightText: "Curated Island Guide",
    category: "Island Discovery",
  },
  {
    id: "5",
    title: "Phu Quoc Adventure",
    slug: "phu-quoc-island-hidden-paradise",
    imageUrl: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
    personas: ["friends", "family", "solo"],
    subtitle: "Turquoise bays & coral snorkeling",
    readTime: "5 min read",
    highlightText: "Tropical Hideaway",
    category: "Beach Discovery",
  },
  {
    id: "6",
    title: "Rajasthan Royal Havelis",
    slug: "rajasthan-royal-havelis-shekhawati",
    imageUrl: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80",
    personas: ["seniors", "family", "couple"],
    subtitle: "Shekhawati frescoes & palatial stays",
    readTime: "6 min read",
    highlightText: "Heritage Chronicles",
    category: "Heritage",
  },
  {
    id: "7",
    title: "Swiss Panoramic Rails",
    slug: "switzerland-scenic-train-routes",
    imageUrl: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=800&q=80",
    personas: ["seniors", "couple", "family"],
    subtitle: "Glacier Express across alpine peaks",
    readTime: "4 min read",
    highlightText: "Scenic Rail Journey",
    category: "Europe",
  },
  {
    id: "8",
    title: "Sacred Char Dham Yatra",
    slug: "char-dham-yatra-preparation-guide",
    imageUrl: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80",
    personas: ["seniors", "family"],
    subtitle: "Kedarnath & Badrinath pilgrim tips",
    readTime: "7 min read",
    highlightText: "Spiritual Odyssey",
    category: "Pilgrimage",
  },
];

const HASHTAGS = [
  "#WonderWorldTravels",
  "#CuratedHolidays",
  "#WanderlustStories",
  "#LuxuryTravelGuides",
  "#TravelWithWonder",
  "#UnforgettableMoments",
  "#SacredJourneys",
  "#ExploreTheWorld",
];

export const ExclusiveBlogs: React.FC = () => {
  const [selectedPersona, setSelectedPersona] = useState<string | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Filter blogs according to selected persona or show all
  const filteredBlogs = selectedPersona
    ? EXCLUSIVE_BLOGS.filter((blog) => blog.personas.includes(selectedPersona))
    : EXCLUSIVE_BLOGS;

  const handleScroll = (direction: "left" | "right") => {
    if (!carouselRef.current) return;
    const scrollAmount = direction === "left" ? -380 : 380;
    carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  const togglePersona = (personaId: string) => {
    setSelectedPersona((prev) => (prev === personaId ? null : personaId));
  };

  return (
    <section className="relative w-full overflow-hidden bg-white pt-10 pb-0">
      {/* Outer arched dark blue container */}
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-t-[36px] sm:rounded-t-[48px] border-t-2 border-blue-400/40 border-x border-blue-500/20 bg-gradient-to-b from-[#071d3a] via-[#0a2b55] to-[#041226] pt-10 sm:pt-14 pb-12 shadow-2xl overflow-hidden">
          
          {/* Inner Dashed Border framing */}
          <div className="pointer-events-none absolute inset-2.5 sm:inset-4 md:inset-6 rounded-t-[28px] sm:rounded-t-[40px] border-2 border-dashed border-sky-400/40 border-b-0 z-20" />

          {/* Subtle Ambient Radial Light at top */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-48 bg-sky-500/15 blur-3xl pointer-events-none rounded-full" />

          {/* ========================================================
              1. TOP SECTION: WHO'S COMING ALONG (TRAVEL PERSONAS)
          ======================================================== */}
          <div className="relative z-10 px-4 text-center">
            {/* Header with decorative horizontal lines */}
            <div className="flex items-center justify-center gap-3 sm:gap-6 mb-8">
              <div className="h-[1px] w-12 sm:w-28 bg-gradient-to-r from-transparent to-white/30" />
              <h2 className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-white/90 uppercase font-sans">
                WHO&apos;S COMING ALONG
              </h2>
              <div className="h-[1px] w-12 sm:w-28 bg-gradient-to-l from-transparent to-white/30" />
            </div>

            {/* Persona Circle Avatars */}
            <div className="flex items-center justify-center gap-4 sm:gap-8 md:gap-10 overflow-x-auto no-scrollbar py-2">
              {PERSONAS.map((persona) => {
                const isActive = selectedPersona === persona.id;
                return (
                  <button
                    key={persona.id}
                    onClick={() => togglePersona(persona.id)}
                    className="group flex flex-col items-center gap-2.5 focus:outline-none cursor-pointer transition-all duration-300"
                    title={`Filter by ${persona.label}`}
                  >
                    <div
                      className={`relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden transition-all duration-300 ${
                        isActive
                          ? "ring-3 ring-sky-400 ring-offset-2 ring-offset-[#071d3a] scale-110 shadow-lg shadow-sky-500/40"
                          : "border-2 border-white/70 group-hover:border-sky-300 group-hover:scale-105 opacity-85 group-hover:opacity-100"
                      }`}
                    >
                      <Image
                        src={persona.imageUrl}
                        alt={persona.label}
                        fill
                        className="object-cover"
                        sizes="96px"
                      />
                    </div>
                    <span
                      className={`text-xs sm:text-sm transition-colors duration-200 ${
                        isActive
                          ? "text-sky-300 font-bold"
                          : "text-white/80 group-hover:text-white font-medium"
                      }`}
                    >
                      {persona.label}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Active Persona Tagline / Filter indicator */}
            {selectedPersona && (
              <div className="mt-4 flex items-center justify-center gap-2">
                <span className="text-xs text-sky-200 bg-sky-950/80 border border-sky-500/40 px-3 py-1 rounded-full">
                  Showing {PERSONAS.find((p) => p.id === selectedPersona)?.label} Stories
                </span>
                <button
                  onClick={() => setSelectedPersona(null)}
                  className="text-xs text-white/60 hover:text-white underline cursor-pointer"
                >
                  Show All
                </button>
              </div>
            )}
          </div>

          {/* ========================================================
              2. CENTER DIVIDER ACCENT
          ======================================================== */}
          <div className="flex items-center justify-center my-8 sm:my-10 opacity-70">
            <div className="w-16 sm:w-28 h-[1px] bg-gradient-to-r from-transparent to-sky-400/50" />
            <div className="w-2 h-2 rotate-45 border border-sky-400/60 bg-[#071d3a] mx-3" />
            <div className="w-16 sm:w-28 h-[1px] bg-gradient-to-l from-transparent to-sky-400/50" />
          </div>

          {/* ========================================================
              3. EXCLUSIVE BLOGS CAROUSEL
          ======================================================== */}
          <div className="relative z-10">
            {/* Subsection Heading */}
            <div className="text-center mb-6 px-4">
              <h3 className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-white/90 uppercase font-sans">
                EXCLUSIVE WITH WONDER WORLD TRAVELS
              </h3>
            </div>

            {/* Carousel Container with Arrows */}
            <div className="relative max-w-8xl mx-auto px-4 sm:px-10">
              {/* Left Arrow Button */}
              <button
                type="button"
                onClick={() => handleScroll("left")}
                aria-label="Scroll blogs left"
                className="hidden sm:flex absolute left-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-[#061830]/90 hover:bg-blue-600 text-sky-400 hover:text-white border border-blue-500/40 shadow-xl items-center justify-center cursor-pointer transition-all duration-200 active:scale-95"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Right Arrow Button */}
              <button
                type="button"
                onClick={() => handleScroll("right")}
                aria-label="Scroll blogs right"
                className="hidden sm:flex absolute right-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-[#061830]/90 hover:bg-blue-600 text-sky-400 hover:text-white border border-blue-500/40 shadow-xl items-center justify-center cursor-pointer transition-all duration-200 active:scale-95"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Horizontal Blog Cards Track */}
              <div
                ref={carouselRef}
                className="flex items-center gap-4 sm:gap-5 overflow-x-auto no-scrollbar scroll-smooth py-3 px-2 sm:px-4"
              >
                {filteredBlogs.map((blog) => (
                  <Link
                    key={blog.id}
                    href={`/blogs/${blog.slug}`}
                    className="group relative flex items-center gap-3.5 bg-[#092448]/95 hover:bg-[#0d3466] border border-blue-600/40 hover:border-sky-400/60 rounded-2xl p-2.5 sm:p-3 transition-all duration-300 shadow-lg hover:shadow-blue-950/70 min-w-[310px] sm:min-w-[340px] max-w-[360px] shrink-0 cursor-pointer"
                  >
                    {/* Thumbnail Image */}
                    <div className="relative w-24 h-20 sm:w-28 sm:h-20 rounded-xl overflow-hidden shrink-0 bg-blue-950">
                      <Image
                        src={blog.imageUrl}
                        alt={blog.title}
                        fill
                        className="object-cover group-hover:scale-108 transition-transform duration-500"
                        sizes="120px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
                    </div>

                    {/* Blog Content Right */}
                    <div className="flex-1 min-w-0 flex flex-col justify-between py-0.5">
                      <div>
                        <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-sky-300 transition-colors line-clamp-1">
                          {blog.title}
                        </h4>
                        <p className="text-[11px] text-white/60 tracking-tight line-clamp-1 mt-0.5">
                          {blog.subtitle}
                        </p>
                      </div>

                      <div className="pt-2 flex items-center justify-between">
                        <span className="text-xs font-semibold text-sky-300 group-hover:text-sky-200 flex items-center gap-1">
                          {blog.highlightText}
                        </span>
                        <ArrowRight className="w-3.5 h-3.5 text-sky-400 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================
            4. VIBRANT BOTTOM MARQUEE TICKER BANNER (Blue Ribbon)
        ======================================================== */}
        <div className="relative w-full bg-[#0066cc] overflow-hidden py-3 sm:py-3.5 shadow-md">
          <div className="animate-marquee whitespace-nowrap flex items-center gap-8 sm:gap-12">
            {[...HASHTAGS, ...HASHTAGS, ...HASHTAGS].map((tag, idx) => (
              <span
                key={idx}
                className="text-white font-bold text-base sm:text-lg tracking-tight font-sans select-none flex items-center gap-8 sm:gap-12"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
