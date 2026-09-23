"use client";

import React from "react";
import Image from "next/image";
import {
  MapPin,
  Globe,
  Sparkles,
  Heart,
  Users,
  Trees,
  Sun,
  Compass,
  Mountain,
  Clock,
  Star,
  ArrowRight,
  ExternalLink,
  Quote,
} from "lucide-react";
import {
  TOUR_CATEGORY_OVERVIEWS,
  INDIAN_TOURS_SECTION,
  INTERNATIONAL_TOURS_SECTION,
  PILGRIMAGE_TOURS_SECTION,
  TourCategoryOverview,
  DetailedTourItem,
} from "@/data/featured-tours-data";
import { ShimmerButton } from "@/components/ui/button";
import {
  CameraDoodle,
  PassportStampDoodle,
  TapeAccent,
  SparkleDoodle,
  AnimatedDottedWall,
} from "@/components/ui/scrapbook";

export const FeaturedTours: React.FC = () => {
  const getCategoryIcon = (iconName: TourCategoryOverview["iconName"]) => {
    switch (iconName) {
      case "MapPin":
        return <MapPin className="w-5 h-5 text-sky-500" />;
      case "Globe":
        return <Globe className="w-5 h-5 text-sky-500" />;
      case "Sparkles":
        return <Sparkles className="w-5 h-5 text-sky-500" />;
      case "Heart":
        return <Heart className="w-5 h-5 text-sky-500" />;
      case "Users":
        return <Users className="w-5 h-5 text-sky-500" />;
      case "Trees":
        return <Trees className="w-5 h-5 text-sky-500" />;
      case "Sun":
        return <Sun className="w-5 h-5 text-sky-500" />;
      case "Mountain":
        return <Mountain className="w-5 h-5 text-sky-500" />;
      case "Compass":
        return <Compass className="w-5 h-5 text-sky-500" />;
      default:
        return <Globe className="w-5 h-5 text-sky-500" />;
    }
  };

  const renderTourCard = (tour: DetailedTourItem) => {
    return (
      <div
        key={tour.id}
        className="group bg-white rounded-3xl border border-slate-200 hover:border-sky-400 p-6 flex flex-col justify-between shadow-xs hover:shadow-xl transition-all duration-300 relative overflow-hidden"
      >
        {/* Scrapbook Tape Accent */}
        <TapeAccent className="-top-2 -right-3 w-16 h-6 bg-amber-100/80 border border-amber-200/90 rotate-[14deg] z-20" />

        <div className="space-y-4">
          {/* Card Media Header */}
          <div className="relative h-48 sm:h-52 w-full rounded-2xl overflow-hidden bg-slate-100">
            <Image
              src={tour.imageUrl}
              alt={tour.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

            {/* Top Badges (Duration & Location) */}
            <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-slate-900/80 backdrop-blur-md text-white border border-white/20 flex items-center gap-1.5 shadow-md">
                <Clock className="w-3.5 h-3.5 text-sky-400" />
                {tour.duration}
              </span>

              <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-white/90 backdrop-blur-md text-slate-800 border border-slate-200 flex items-center gap-1 shadow-sm">
                <MapPin className="w-3 h-3 text-sky-500" />
                {tour.location}
              </span>
            </div>
          </div>

          {/* Tour Category Pills (if provided) */}
          {tour.categories && tour.categories.length > 0 && (
            <div className="flex flex-wrap gap-1.5 pt-1">
              {tour.categories.map((cat, idx) => (
                <a
                  key={idx}
                  href={cat.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] font-semibold text-slate-600 bg-slate-100 hover:bg-sky-50 hover:text-sky-600 px-2.5 py-0.5 rounded-full border border-slate-200 transition-colors"
                >
                  {cat.name}
                </a>
              ))}
            </div>
          )}

          {/* Tour Title */}
          <h3 className="font-serif text-lg sm:text-xl font-bold text-slate-900 group-hover:text-sky-600 transition-colors leading-snug">
            <a href={tour.url} target="_blank" rel="noopener noreferrer">
              {tour.title}
            </a>
          </h3>

          {/* Quote / Description */}
          {tour.description && (
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed italic bg-slate-50 border-l-2 border-sky-400 p-2.5 rounded-r-xl">
              {tour.description}
            </p>
          )}
        </div>

        {/* Card Bottom Footer */}
        <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between gap-3">
          {/* Rating stars */}
          <div className="flex items-center gap-1 text-xs font-bold text-slate-800">
            <div className="flex items-center text-amber-400">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            </div>
            <span>{tour.rating || 4.9}</span>
            <span className="text-slate-400 font-normal">({tour.reviewsCount || 10})</span>
          </div>

          {/* View Details CTA Button with ShimmerButton */}
          <a href={tour.url} target="_blank" rel="noopener noreferrer">
            <ShimmerButton
              size="sm"
              icon={<ArrowRight className="w-3.5 h-3.5 text-white" />}
            >
              View Details
            </ShimmerButton>
          </a>
        </div>
      </div>
    );
  };

  return (
    <section id="featured-tours" className="py-20 lg:py-28 bg-white border-b border-slate-200 relative overflow-hidden">
      {/* Animated Dotted Wall Background */}
      <AnimatedDottedWall className="opacity-70" />

      {/* Background Soft Sky Blue Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-sky-50/70 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">

        {/* ========================================================
            PART 1: EXPLORE OUR TOUR PACKAGES CATEGORY CARDS (9 CARDS)
        ======================================================== */}
        <div className="space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-600 text-xs font-semibold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 text-sky-500" />
              <span>Curated Collections</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
              Explore Our Tour Packages
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Find handcrafted travel itineraries designed for families, couples, adventurers, and spiritual travelers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {TOUR_CATEGORY_OVERVIEWS.map((cat, idx) => (
              <a
                key={idx}
                href={cat.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-slate-50/80 border border-slate-200 hover:border-sky-400 rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-sky-500/10 hover:-translate-y-1"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center shadow-xs group-hover:bg-sky-500 group-hover:border-sky-500 transition-all duration-300">
                      {React.cloneElement(getCategoryIcon(cat.iconName), {
                        className: "w-5 h-5 text-sky-500 group-hover:text-white transition-colors",
                      })}
                    </div>
                    <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-sky-500 transition-colors" />
                  </div>

                  <h3 className="font-serif text-xl font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                    {cat.title}
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {cat.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-200/80 flex items-center text-xs font-semibold text-sky-600 group-hover:translate-x-1 transition-transform">
                  <span>Explore Collection</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* ========================================================
            PART 2: OUR TOP HANDCRAFTED INDIAN TOUR PACKAGES
        ======================================================== */}
        <div className="space-y-10 pt-6 border-t border-slate-200">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-sky-600 text-xs font-semibold uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5 text-sky-500" />
              <span>{INDIAN_TOURS_SECTION.eyebrow}</span>
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900">
              {INDIAN_TOURS_SECTION.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {INDIAN_TOURS_SECTION.tours.map((tour) => renderTourCard(tour))}
          </div>
        </div>

        {/* ========================================================
            PART 3: OUR HANDPICKED INTERNATIONAL TOUR PACKAGES
        ======================================================== */}
        <div className="space-y-10 pt-6 border-t border-slate-200">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-sky-600 text-xs font-semibold uppercase tracking-wider">
              <Globe className="w-3.5 h-3.5 text-sky-500" />
              <span>{INTERNATIONAL_TOURS_SECTION.eyebrow}</span>
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900">
              {INTERNATIONAL_TOURS_SECTION.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {INTERNATIONAL_TOURS_SECTION.tours.map((tour) => renderTourCard(tour))}
          </div>
        </div>

        {/* ========================================================
            PART 4: OUR SPECIAL PILGRIMAGE TOUR PACKAGES
        ======================================================== */}
        <div className="space-y-10 pt-6 border-t border-slate-200">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-sky-600 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-sky-500" />
              <span>{PILGRIMAGE_TOURS_SECTION.eyebrow}</span>
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900">
              {PILGRIMAGE_TOURS_SECTION.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PILGRIMAGE_TOURS_SECTION.tours.map((tour) => renderTourCard(tour))}
          </div>
        </div>

      </div>
    </section>
  );
};
