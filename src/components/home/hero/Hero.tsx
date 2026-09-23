"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Bookmark,
  Star,
  Sparkles,
} from "lucide-react";
import { HERO_SLIDES, HeroSlide } from "@/data/heroSlides";
import { ShimmerButton } from "@/components/ui/button";
import {
  PaperAirplaneDoodle,
  CompassRoseDoodle,
  SparkleDoodle,
  AnimatedDottedWall,
} from "@/components/ui/scrapbook";

export const Hero: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [bookmarkedIds, setBookmarkedIds] = useState<Record<string, boolean>>({});

  const totalSlides = HERO_SLIDES.length;
  const currentSlide = HERO_SLIDES[currentIndex];

  // Advance to next slide
  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  // Go to previous slide
  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  // Jump to specific slide
  const goToSlide = (idx: number) => {
    setCurrentIndex(idx);
  };

  // Toggle bookmark for cards
  const toggleBookmark = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    setBookmarkedIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Automatic slide rotation every 4.5 seconds
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  // Generate ordered queue of cards (Active slide first, then upcoming slides)
  const carouselCards: { slide: HeroSlide; originalIndex: number }[] = [];
  for (let i = 0; i < totalSlides; i++) {
    const idx = (currentIndex + i) % totalSlides;
    carouselCards.push({ slide: HERO_SLIDES[idx], originalIndex: idx });
  }

  return (
    <section
      className="relative w-full h-[calc(100vh-75px)] min-h-[640px] max-h-[960px] overflow-hidden bg-slate-950 select-none text-white"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Animated Dotted Wall Background */}
      <AnimatedDottedWall className="opacity-40 z-10" dotColor="rgba(56, 189, 248, 0.4)" />

      {/* Scrapbook Vector Accents */}
      <div className="absolute top-8 right-12 z-30 pointer-events-none hidden md:block">
        <PaperAirplaneDoodle className="w-28 h-28 text-sky-400 opacity-80" />
      </div>
      <div className="absolute bottom-20 left-8 z-30 pointer-events-none hidden lg:block">
        <CompassRoseDoodle className="w-24 h-24 text-sky-400/40" />
      </div>
      <div className="absolute top-24 left-1/3 z-30 pointer-events-none">
        <SparkleDoodle className="w-6 h-6 text-sky-300" />
      </div>
      {/* ========================================================
          1. FULL-BLEED BACKGROUND BANNER WITH CROSS-FADE
      ======================================================== */}
      {HERO_SLIDES.map((slide, idx) => {
        const isActive = idx === currentIndex;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? "opacity-100 z-10 pointer-events-auto" : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            {/* Background Image with subtle Ken-Burns Zoom effect */}
            <div className="relative w-full h-full overflow-hidden">
              <Image
                src={slide.imageUrl}
                alt={slide.name}
                fill
                priority={idx === 0}
                className={`object-cover object-center transition-transform duration-10000 ease-linear ${
                  isActive ? "scale-108" : "scale-100"
                }`}
                sizes="100vw"
              />

              {/* Multi-layered Premium Dark Gradients for cinematic contrast */}
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/50 to-transparent z-10" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-transparent to-slate-950/40 z-10" />
            </div>
          </div>
        );
      })}

      {/* ========================================================
          2. VERTICAL TIMELINE OF 10 CIRCLES ON FAR LEFT
      ======================================================== */}
      <div className="hidden lg:flex flex-col items-center gap-4 absolute left-6 sm:left-10 top-1/2 -translate-y-1/2 z-30 pointer-events-auto">
        <div className="relative flex flex-col items-center gap-3.5">
          {/* Vertical connecting background line */}
          <div className="absolute top-2 bottom-2 w-0.5 bg-white/15 -z-10" />

          {HERO_SLIDES.map((slide, idx) => {
            const isActive = idx === currentIndex;
            return (
              <button
                key={slide.id}
                onClick={() => goToSlide(idx)}
                className={`relative rounded-full transition-all duration-300 cursor-pointer flex items-center justify-center focus:outline-none ${
                  isActive
                    ? "w-4.5 h-4.5 bg-sky-400 ring-4 ring-sky-400/30 shadow-lg shadow-sky-400/50 scale-110"
                    : "w-2.5 h-2.5 bg-white/40 hover:bg-white/80 hover:scale-125"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
                title={`${idx + 1}. ${slide.name}`}
              >
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-950 inline-block" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* ========================================================
          3. MAIN CONTENT OVERLAY (HERO TEXT & CAROUSEL CARDS)
      ======================================================== */}
      <div className="relative z-20 h-full max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 pl-6 sm:pl-16 lg:pl-24 flex flex-col justify-between py-8 sm:py-12 pointer-events-none">
        
        {/* Top Badging / Location Indicator */}
        <div className="pt-2 sm:pt-4 pointer-events-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg text-xs font-semibold uppercase tracking-widest text-sky-300">
            <Sparkles className="w-3.5 h-3.5 animate-pulse text-sky-400" />
            <span>Featured Luxury Expeditions</span>
          </div>
        </div>

        {/* Center Grid: Left Text Details + Right Carousel Track */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center my-auto">
          
          {/* LEFT SECTION: DESTINATION INFORMATION WITH BOTTOM-TO-TOP TRANSITIONS */}
          <div
            key={currentIndex}
            className="lg:col-span-5 xl:col-span-5 space-y-4 text-left pointer-events-auto max-w-xl"
          >
            {/* Country / Region Tag */}
            <div className="animate-slide-up-1 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-sky-400">
              <span>{currentSlide.country}</span>
              <span>•</span>
              <span className="text-slate-300">{currentSlide.duration}</span>
            </div>

            {/* Slide Title */}
            <h1 className="animate-slide-up-1 text-4xl sm:text-6xl xl:text-7xl font-black uppercase tracking-tight text-white leading-none font-sans drop-shadow-lg break-words">
              {currentSlide.name}
            </h1>

            {/* Slide Description */}
            <p className="animate-slide-up-2 text-white/85 text-sm sm:text-base leading-relaxed line-clamp-4 max-w-lg drop-shadow font-normal">
              {currentSlide.description}
            </p>

            {/* Explore CTA Button with ShimmerButton */}
            <div className="animate-slide-up-3 pt-2">
              <Link href={`#explore-${currentSlide.id}`}>
                <ShimmerButton
                  size="lg"
                  icon={<ArrowRight className="w-4 h-4 text-white shrink-0 group-hover/btn:translate-x-1 transition-transform" />}
                >
                  Explore Package
                </ShimmerButton>
              </Link>
            </div>
          </div>

          {/* RIGHT SECTION: SCALED CAROUSEL CARDS TRACK */}
          <div className="lg:col-span-7 xl:col-span-7 flex flex-col justify-center relative overflow-visible pointer-events-auto">
            {/* Horizontal Cards Track */}
            <div className="flex items-center gap-4 sm:gap-5 overflow-x-hidden py-6 -mr-6 sm:-mr-10 lg:-mr-14 pl-2">
              {carouselCards.map(({ slide, originalIndex }, queuePos) => {
                const isActiveCard = originalIndex === currentIndex;
                const isSaved = Boolean(bookmarkedIds[slide.id]);

                return (
                  <div
                    key={`${slide.id}-${originalIndex}`}
                    onClick={() => goToSlide(originalIndex)}
                    className={`flex-shrink-0 flex flex-col cursor-pointer group/card transition-all duration-500 ${
                      isActiveCard
                        ? "scale-105 sm:scale-108 z-20 opacity-100"
                        : "scale-95 opacity-75 hover:opacity-100 hover:scale-100 z-10"
                    }`}
                  >
                    {/* Destination Title & Stars Above Card */}
                    <div className="mb-2 px-1 flex flex-col gap-1">
                      <div className="flex items-center justify-between gap-2 max-w-[200px] sm:max-w-[240px]">
                        <span className={`text-xs sm:text-sm font-bold truncate ${
                          isActiveCard ? "text-sky-300 drop-shadow-md" : "text-white/90"
                        }`}>
                          {slide.location || slide.name}
                        </span>
                        {isActiveCard && (
                          <span className="text-[9px] font-extrabold uppercase px-1.5 py-0.5 rounded-md bg-sky-400 text-slate-950 shadow-sm shrink-0">
                            Active
                          </span>
                        )}
                      </div>

                      {/* 5-Star Rating Icons (Golden) */}
                      <div className="flex items-center gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3 sm:w-3.5 h-3 sm:h-3.5 ${
                              i < (slide.rating || 5)
                                ? "fill-amber-400 text-amber-400"
                                : "fill-white/20 text-white/30"
                            }`}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Card Container (No Border & No Shadow) */}
                    <div className="relative w-[185px] sm:w-[215px] lg:w-[235px] xl:w-[250px] h-[270px] sm:h-[310px] lg:h-[350px] rounded-3xl overflow-hidden transition-all duration-500">
                      {/* Card Image */}
                      <Image
                        src={slide.thumbnailUrl}
                        alt={slide.name}
                        fill
                        className="object-cover object-center group-hover/card:scale-108 transition-transform duration-700 ease-out"
                        sizes="(max-width: 640px) 185px, (max-width: 1024px) 215px, 250px"
                      />

                      {/* Card Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />

                      {/* Top-Right Bookmark Button */}
                      <button
                        type="button"
                        onClick={(e) => toggleBookmark(e, slide.id)}
                        className={`absolute top-3 right-3 w-8 h-8 rounded-full backdrop-blur-md flex items-center justify-center transition-all duration-200 border cursor-pointer ${
                          isSaved
                            ? "bg-white text-blue-600 border-white shadow-md"
                            : "bg-white/25 hover:bg-white/40 text-white border-white/30"
                        }`}
                        aria-label="Bookmark destination"
                        title={isSaved ? "Saved" : "Save destination"}
                      >
                        <Bookmark className={`w-3.5 h-3.5 ${isSaved ? "fill-blue-600" : ""}`} />
                      </button>

                      {/* Card Bottom Meta (Subtitle / Price / Duration) */}
                      <div className="absolute bottom-3.5 left-3.5 right-3.5 text-white">
                        <span className="text-[10px] font-semibold uppercase tracking-wider text-white/70 block">
                          {slide.country}
                        </span>
                        <div className="flex items-center justify-between mt-0.5">
                          <span className="text-xs font-medium text-white/90">
                            {slide.duration}
                          </span>
                          {slide.price && (
                            <span className="text-xs font-bold text-sky-300">
                              {slide.price}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ========================================================
            4. BOTTOM CONTROLS (NAVIGATION ARROWS ONLY)
        ======================================================== */}
        <div className="flex items-center justify-start pt-2 pointer-events-auto">
          {/* Navigation Arrows (Prev / Next) */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={prevSlide}
              className="w-10 h-10 rounded-full bg-white/15 hover:bg-white/30 backdrop-blur-md flex items-center justify-center text-white border border-white/20 transition-all duration-200 cursor-pointer shadow-md active:scale-95"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={nextSlide}
              className="w-10 h-10 rounded-full bg-white/15 hover:bg-white/30 backdrop-blur-md flex items-center justify-center text-white border border-white/20 transition-all duration-200 cursor-pointer shadow-md active:scale-95"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
