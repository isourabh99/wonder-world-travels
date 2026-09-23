"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Search,
  Bookmark,
  Compass,
  Star,
  Volume2,
  VolumeX,
} from "lucide-react";
import { HERO_SLIDES, HeroSlide } from "@/data/heroSlides";

export const Hero: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [bookmarkedIds, setBookmarkedIds] = useState<Record<string, boolean>>({});
  const [isTransitioning, setIsTransitioning] = useState(false);

  const totalSlides = HERO_SLIDES.length;
  const currentSlide = HERO_SLIDES[currentIndex];

  // Advance to next slide
  const nextSlide = useCallback(() => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
    setTimeout(() => setIsTransitioning(false), 600);
  }, [totalSlides]);

  // Go to previous slide
  const prevSlide = useCallback(() => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
    setTimeout(() => setIsTransitioning(false), 600);
  }, [totalSlides]);

  // Jump to specific slide
  const goToSlide = (idx: number) => {
    if (idx === currentIndex) return;
    setIsTransitioning(true);
    setCurrentIndex(idx);
    setTimeout(() => setIsTransitioning(false), 600);
  };

  // Toggle bookmark for cards
  const toggleBookmark = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    setBookmarkedIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Automatic slide rotation every 5.5s
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 5500);
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

  // Determine queue of next slides for the right-side carousel
  // Show the next 4 slides in order
  const upcomingSlides: { slide: HeroSlide; originalIndex: number }[] = [];
  for (let i = 1; i <= Math.min(4, totalSlides - 1); i++) {
    const idx = (currentIndex + i) % totalSlides;
    upcomingSlides.push({ slide: HERO_SLIDES[idx], originalIndex: idx });
  }

  return (
    <section
      className="relative w-full h-[calc(100vh-80px)] min-h-[660px] max-h-[980px] overflow-hidden bg-black select-none text-white"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* ========================================================
          1. FULL-BLEED BACKGROUND BANNER WITH CROSS-FADE
      ======================================================== */}
      {HERO_SLIDES.map((slide, idx) => {
        const isActive = idx === currentIndex;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? "opacity-100 z-0" : "opacity-0 pointer-events-none -z-10"
            }`}
          >
            <div className={`relative w-full h-full ${isActive ? "animate-ken-burns" : ""}`}>
              <Image
                src={slide.imageUrl}
                alt={slide.name}
                fill
                priority={idx === 0 || idx === 1}
                className="object-cover object-center scale-105"
                sizes="100vw"
                quality={90}
              />
            </div>

            {/* Gradient Overlays for optimal readability matching the design reference */}
            {/* Left dark foggy gradient for typography */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent" />
            {/* Top subtle vignette for navbar */}
            <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-black/70 via-black/30 to-transparent" />
            {/* Bottom subtle shadow */}
            <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
          </div>
        );
      })}

      {/* ========================================================
          2. MAIN HERO CONTENT AREA (TIMELINE + LEFT INFO + RIGHT CAROUSEL)
      ======================================================== */}
      <div className="relative z-20 w-full h-full flex items-center py-6 sm:py-8">
        {/* ========================================================
            FAR-LEFT VERTICAL TIMELINE
            - Vertical line
            - 10 circular points (one for each slide)
            - Active point blinks, gets bigger, and displays number
            - Bottom counter (e.g. 01 / 10)
        ======================================================== */}
        <div className="absolute left-6 sm:left-10 lg:left-12 top-0 bottom-12 flex flex-col items-center justify-between z-30 pointer-events-auto">
          {/* Vertical track line and 10 points */}
          <div className="relative flex-1 flex flex-col items-center justify-center my-auto">
            {/* Continuous thin vertical line */}
            <div className="absolute top-2 bottom-2 w-[1px] bg-white/30" />

            {/* Timeline Dots */}
            <div className="relative flex flex-col items-center justify-between h-[360px] sm:h-[420px] py-2">
              {HERO_SLIDES.map((_, idx) => {
                const isActive = idx === currentIndex;
                const slideNumber = idx + 1;

                return (
                  <div
                    key={idx}
                    className="relative flex items-center justify-center group/dot cursor-pointer"
                    onClick={() => goToSlide(idx)}
                    title={`Slide ${slideNumber}: ${HERO_SLIDES[idx].name}`}
                  >
                    {/* Active Expanded Blinking Dot with Number */}
                    {isActive ? (
                      <div className="relative z-10 flex items-center justify-center">
                        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/30 backdrop-blur-md border border-white text-white flex items-center justify-center text-xs font-bold animate-timeline-active shadow-[0_0_15px_rgba(255,255,255,0.7)] transition-all">
                          {slideNumber}
                        </div>
                      </div>
                    ) : (
                      /* Inactive Dot */
                      <button
                        type="button"
                        aria-label={`Jump to slide ${slideNumber}`}
                        className="w-2.5 h-2.5 rounded-full bg-white/40 group-hover/dot:bg-white group-hover/dot:scale-150 transition-all duration-300 focus:outline-none"
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Timeline Bottom Slide Counter */}
          <div className="pt-4 flex flex-col items-center text-[11px] sm:text-xs font-mono font-bold tracking-widest text-white/70">
            <span className="text-white text-sm font-extrabold">
              {String(currentIndex + 1).padStart(2, "0")}
            </span>
            <span className="w-3 h-[1px] bg-white/40 my-1" />
            <span>{String(totalSlides).padStart(2, "0")}</span>
          </div>
        </div>

        {/* ========================================================
            INNER GRID CONTAINER: LEFT SECTION + RIGHT CAROUSEL
        ======================================================== */}
        <div className="w-full pl-20 sm:pl-28 lg:pl-32 pr-6 sm:pr-10 lg:pr-14 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* ========================================================
              LEFT SECTION: SLIDE NAME & DESCRIPTION
              WITH TRANSITION EFFECT FROM BELOW
          ======================================================== */}
          <div className="lg:col-span-5 xl:col-span-5 flex flex-col justify-center max-w-xl">
            {/* Animated Wrapper keyed on currentIndex to trigger smooth slide-up from below */}
            <div key={currentIndex} className="space-y-5">
              {/* Destination Title (Massive uppercase bold display) */}
              <h1 className="animate-slide-up-1 text-4xl sm:text-6xl xl:text-7xl font-black uppercase tracking-tight text-white leading-none font-sans drop-shadow-lg break-words">
                {currentSlide.name}
              </h1>

              {/* Destination Narrative Description */}
              <p className="animate-slide-up-2 text-white/85 text-sm sm:text-base leading-relaxed line-clamp-4 sm:line-clamp-5 max-w-lg drop-shadow font-normal">
                {currentSlide.description}
              </p>

              {/* "Explore ->" Pill CTA Button */}
              <div className="animate-slide-up-3 pt-3">
                <Link
                  href={`#explore-${currentSlide.id}`}
                  className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-[#2B5B84] hover:bg-[#1E4566] text-white font-medium text-sm sm:text-base transition-all duration-300 shadow-lg shadow-black/40 hover:shadow-xl hover:translate-x-1 group/btn border border-white/10"
                >
                  <span>Explore</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>

          {/* ========================================================
              RIGHT SECTION: CAROUSEL SLIDESHOW
              - Images coming from right to left
              - Title & rating dots above each card
              - Bookmark button on top right of each card
              - Click card to jump to that slide
          ======================================================== */}
          <div className="lg:col-span-7 xl:col-span-7 flex flex-col justify-center relative overflow-visible">
            {/* Horizontal Cards Row */}
            <div className="flex items-center gap-5 sm:gap-6 overflow-x-hidden py-4 -mr-6 sm:-mr-10 lg:-mr-14 pl-1">
              {upcomingSlides.map(({ slide, originalIndex }, queuePos) => {
                const isSaved = Boolean(bookmarkedIds[slide.id]);

                return (
                  <div
                    key={slide.id}
                    onClick={() => goToSlide(originalIndex)}
                    className="flex-shrink-0 flex flex-col cursor-pointer group/card transition-transform duration-500 hover:-translate-y-2"
                    style={{
                      // Fluid transition for items advancing
                      transition: "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.5s ease",
                    }}
                  >
                    {/* Destination Title & Dots Above the Card */}
                    <div className="mb-2.5 px-1 flex flex-col gap-1">
                      <span className="text-sm font-semibold text-white/95 group-hover/card:text-white drop-shadow truncate max-w-[200px] sm:max-w-[240px]">
                        {slide.location || slide.name}
                      </span>
                      {/* Rating / Position Dots */}
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <span
                            key={i}
                            className={`w-1.5 h-1.5 rounded-full ${
                              i < slide.rating ? "bg-white/90" : "bg-white/30"
                            }`}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Card Container */}
                    <div className="relative w-[190px] sm:w-[220px] lg:w-[240px] xl:w-[260px] h-[280px] sm:h-[320px] lg:h-[360px] rounded-3xl overflow-hidden shadow-2xl shadow-black/60 border border-white/20 transition-all duration-300 group-hover/card:border-white/40 group-hover/card:shadow-black/80">
                      {/* Card Image */}
                      <Image
                        src={slide.thumbnailUrl}
                        alt={slide.name}
                        fill
                        className="object-cover object-center group-hover/card:scale-105 transition-transform duration-700 ease-out"
                        sizes="(max-width: 640px) 190px, (max-width: 1024px) 220px, 260px"
                      />

                      {/* Card gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/20" />

                      {/* Top-Right Bookmark Button */}
                      <button
                        type="button"
                        onClick={(e) => toggleBookmark(e, slide.id)}
                        className={`absolute top-3.5 right-3.5 w-9 h-9 rounded-full backdrop-blur-md flex items-center justify-center transition-all duration-200 border cursor-pointer ${
                          isSaved
                            ? "bg-white text-orange-500 border-white shadow-md"
                            : "bg-white/25 hover:bg-white/40 text-white border-white/30"
                        }`}
                        aria-label="Bookmark destination"
                        title={isSaved ? "Saved" : "Save destination"}
                      >
                        <Bookmark className={`w-4 h-4 ${isSaved ? "fill-orange-500" : ""}`} />
                      </button>

                      {/* Card Bottom Meta (Subtitle / Price / Duration) */}
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <span className="text-[11px] font-medium uppercase tracking-wider text-white/70 block">
                          {slide.country}
                        </span>
                        <div className="flex items-center justify-between mt-1">
                          <span className="text-xs font-semibold text-white/90">
                            {slide.duration}
                          </span>
                          {slide.price && (
                            <span className="text-xs font-bold text-amber-300">
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
      </div>

      {/* ========================================================
          4. BOTTOM NAVIGATION CONTROLS (ARROWS & PROGRESS INDICATOR)
      ======================================================== */}
      <div className="absolute bottom-7 left-28 sm:left-36 lg:left-44 right-6 sm:right-12 flex items-center justify-between z-30 pointer-events-auto">
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

        {/* Bottom Right Slide Progress Bar / Counter */}
        <div className="hidden sm:flex items-center gap-3 text-xs font-mono font-semibold tracking-wider text-white/75">
          <span>{String(currentIndex + 1).padStart(2, "0")}</span>
          <div className="w-20 sm:w-28 h-[2px] bg-white/20 rounded-full overflow-hidden">
            <div
              className="h-full bg-white transition-all duration-500 ease-out"
              style={{
                width: `${((currentIndex + 1) / totalSlides) * 100}%`,
              }}
            />
          </div>
          <span>{String(totalSlides).padStart(2, "0")}</span>
        </div>
      </div>
    </section>
  );
};
