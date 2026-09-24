"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Star,
  Quote,
  CheckCircle2,
  Sparkles,
  MapPin,
  Calendar,
  Compass,
  Award,
  ThumbsUp,
  MessageSquareHeart,
  ChevronRight,
} from "lucide-react";
import { TESTIMONIALS } from "@/data/testimonials";
import { Testimonial } from "@/types/testimonial";
import { ShimmerButton } from "@/components/ui/button";
import {
  CameraDoodle,
  TapeAccent,
  SparkleDoodle,
  PassportStampDoodle,
  AnimatedDottedWall,
} from "@/components/ui/scrapbook";

interface TestimonialsProps {
  testimonials?: Testimonial[];
}

const CATEGORIES = [
  "All Stories",
  "Pilgrimage Yatra",
  "Indian Heritage",
  "International Luxury",
];

export const Testimonials: React.FC<TestimonialsProps> = ({
  testimonials = TESTIMONIALS,
}) => {
  const [selectedCategory, setSelectedCategory] = useState("All Stories");

  const filteredTestimonials =
    selectedCategory === "All Stories"
      ? testimonials
      : testimonials.filter((item) => item.category === selectedCategory);

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-white border-b border-border/60 relative overflow-hidden">
      {/* Animated Dotted Wall Background */}
      <AnimatedDottedWall className="opacity-70" />

      {/* Scrapbook Vector Accents */}
      <CameraDoodle className="absolute top-12 right-12 w-16 h-16 text-slate-700/60 hidden lg:block z-0" />
      <PassportStampDoodle text="5 ★ REVIEWED" className="absolute top-1/2 -left-4 w-28 h-28 text-sky-600/60 hidden xl:block z-0" />
      <SparkleDoodle className="absolute top-28 left-1/4 w-8 h-8 text-sky-400 z-0" />

      {/* Subtle atmospheric accents on pure white */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-sky-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ========================================================
            1. SECTION HEADER WITH STATS & TRUST PILLARS
        ======================================================== */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div className="space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5 text-primary fill-primary" />
              <span>Verified Traveler Stories</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.15] relative">
              Echoes of Wonder From{" "}
              <span className="text-primary italic">Our Discerning Guests</span>
            </h2>

            <p className="text-muted text-base sm:text-lg leading-relaxed">
              Real reflections and photographs from families, couples, and pilgrims who trusted us with their once-in-a-lifetime journeys.
            </p>
          </div>

          {/* Social Proof Trust Badges Bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 bg-gray-50 border border-border/80 p-4 rounded-2xl shadow-xs shrink-0 w-full lg:w-auto relative">
            <TapeAccent className="-top-3 -right-2 w-14 h-5" />
            <div className="flex items-center gap-3 pr-0 sm:pr-4 border-b sm:border-b-0 sm:border-r border-border/80 pb-3 sm:pb-0 w-full sm:w-auto">
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-sm font-bold text-foreground ml-1">4.9 / 5</span>
                </div>
                <span className="text-[11px] text-muted font-medium mt-0.5">
                  Over 2,800+ Verified Reviews
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 pl-0 sm:pl-1">
              <Award className="w-7 h-7 sm:w-8 sm:h-8 text-primary shrink-0" />
              <div className="text-xs">
                <span className="font-bold text-foreground block">TripAdvisor 2026</span>
                <span className="text-muted">Travelers’ Choice Winner</span>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================
            2. CATEGORY FILTER TABS
        ======================================================== */}
        <div className="flex items-center gap-2.5 overflow-x-auto no-scrollbar pb-3 mb-10">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-primary text-white shadow-md shadow-primary/25 scale-102"
                    : "bg-gray-100/80 hover:bg-gray-200/80 text-foreground/80 border border-border/60"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* ========================================================
            3. DENSE, FULL 3-COLUMN STORIES GRID (NO EMPTY SPACE)
        ======================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTestimonials.map((story) => (
            <article
              key={story.id}
              className="group bg-white rounded-3xl border border-border/80 hover:border-primary/40 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden relative"
            >
              {/* Top: Trip Highlight Image Banner with Badges */}
              {story.tripImage && (
                <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                  <Image
                    src={story.tripImage}
                    alt={story.tourTaken}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  
                  {/* Floating Tour Category Badge */}
                  <div className="absolute top-3.5 left-3.5">
                    <span className="text-[11px] font-semibold tracking-wide bg-white/90 text-primary backdrop-blur-md px-3 py-1 rounded-full shadow-xs">
                      {story.category || "Curated Tour"}
                    </span>
                  </div>

                  {/* Tour Name & Trip Highlight on bottom of photo */}
                  <div className="absolute bottom-3 left-3.5 right-3.5 text-white">
                    <div className="flex items-center gap-1.5 text-xs text-white/80 mb-0.5">
                      <Compass className="w-3.5 h-3.5 text-sky-300" />
                      <span className="line-clamp-1 font-medium">{story.tourTaken}</span>
                    </div>
                    {story.highlight && (
                      <p className="text-xs font-bold text-sky-300 line-clamp-1">
                        ★ {story.highlight}
                      </p>
                    )}
                  </div>
                </div>
              )}

              {/* Middle: Review Quote Content */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  {/* Star Rating + Quote Icon */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      {[...Array(story.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <Quote className="w-6 h-6 text-primary/20 group-hover:text-primary/40 transition-colors" />
                  </div>

                  {/* Quote Text */}
                  <p className="font-serif text-foreground/90 text-base sm:text-lg leading-relaxed italic">
                    &ldquo;{story.quote}&rdquo;
                  </p>
                </div>

                {/* Bottom: Author / Guest Card */}
                <div className="pt-4 border-t border-border/70 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-primary/20 shrink-0">
                      <Image
                        src={story.avatarUrl}
                        alt={story.name}
                        fill
                        className="object-cover"
                        sizes="44px"
                      />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5">
                        <h4 className="font-bold text-foreground text-sm leading-snug">
                          {story.name}
                        </h4>
                        {story.verified && (
                          <span title="Verified Traveler" className="inline-flex shrink-0">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-1.5 text-[11px] text-muted mt-0.5">
                        <span className="inline-flex items-center gap-1 shrink-0">
                          <MapPin className="w-3 h-3 text-primary shrink-0" />
                          <span>{story.location}</span>
                        </span>
                        <span className="text-muted/60">•</span>
                        <span className="shrink-0">{story.date}</span>
                      </div>
                    </div>
                  </div>

                  {/* Persona Tag */}
                  {story.travelerType && (
                    <div className="pl-14 sm:pl-0 self-start sm:self-center shrink-0">
                      <span className="text-[10px] font-semibold text-primary bg-primary/10 px-2.5 py-1 rounded-full whitespace-nowrap inline-block">
                        {story.travelerType}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* ========================================================
            4. BOTTOM TRUST BADGES TICKER & ENGAGEMENT STRIP
        ======================================================== */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gray-50 border border-border/80 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
              <MessageSquareHeart className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-foreground">
                Traveled with Wonder World Travels recently?
              </h4>
              <p className="text-xs text-muted">
                Share your pilgrimage or holiday memories with our community and get exclusive credits on your next departure.
              </p>
            </div>
          </div>

          <a
            href="https://google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ShimmerButton
              size="md"
              icon={<ChevronRight className="w-4 h-4 text-white shrink-0" />}
            >
              Read All Google Reviews
            </ShimmerButton>
          </a>
        </div>

      </div>
    </section>
  );
};
