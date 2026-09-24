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
  const [bookmarkedIds, setBookmarkedIds] = useState<Record<string, boolean>>(
    {},
  );
  const [isDragging, setIsDragging] = useState(false);
  const dragStartXRef = React.useRef(0);
  const dragMovedRef = React.useRef(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const totalSlides = HERO_SLIDES.length;
  const currentSlide = HERO_SLIDES[currentIndex];

  // 3D Cylindrical coordinates calculation
  const getCard3DStyle = (idx: number, isMob: boolean) => {
    let diff = idx - currentIndex;
    if (diff > totalSlides / 2) diff -= totalSlides;
    if (diff < -totalSlides / 2) diff += totalSlides;

    const absDiff = Math.abs(diff);

    // Hide cards that are far behind to maintain silky 60fps and clear perspective
    if (absDiff > 3) {
      return {
        transform: `translateX(${diff > 0 ? (isMob ? 210 : 420) : (isMob ? -210 : -420)}px) translateZ(-320px) rotateY(${diff > 0 ? -70 : 70}deg) scale(0.4)`,
        opacity: 0,
        zIndex: 0,
        pointerEvents: "none" as const,
        visibility: "hidden" as const,
      };
    }

    let x = 0;
    let z = 0;
    let rotateY = 0;
    let scale = 1;
    let opacity = 1;
    let zIndex = 30;
    let brightness = 1;

    if (diff === 0) {
      // FRONT ACTIVE CARD (Center stage, scaled up)
      x = 0;
      z = isMob ? 35 : 70;
      rotateY = 0;
      scale = isMob ? 1.05 : 1.1;
      opacity = 1;
      zIndex = 30;
      brightness = 1;
    } else if (diff === 1) {
      // RIGHT 1 (Flanking right in cylinder)
      x = isMob ? 95 : 190;
      z = isMob ? -40 : -75;
      rotateY = isMob ? -22 : -28;
      scale = isMob ? 0.84 : 0.88;
      opacity = isMob ? 0.78 : 0.88;
      zIndex = 20;
      brightness = 0.88;
    } else if (diff === -1) {
      // LEFT 1 (Flanking left in cylinder)
      x = isMob ? -95 : -190;
      z = isMob ? -40 : -75;
      rotateY = isMob ? 22 : 28;
      scale = isMob ? 0.84 : 0.88;
      opacity = isMob ? 0.78 : 0.88;
      zIndex = 20;
      brightness = 0.88;
    } else if (diff === 2) {
      // RIGHT 2 (Peeche right)
      x = isMob ? 165 : 330;
      z = isMob ? -100 : -170;
      rotateY = isMob ? -38 : -48;
      scale = isMob ? 0.68 : 0.74;
      opacity = isMob ? 0.45 : 0.6;
      zIndex = 10;
      brightness = 0.7;
    } else if (diff === -2) {
      // LEFT 2 (Peeche left)
      x = isMob ? -165 : -330;
      z = isMob ? -100 : -170;
      rotateY = isMob ? 38 : 48;
      scale = isMob ? 0.68 : 0.74;
      opacity = isMob ? 0.45 : 0.6;
      zIndex = 10;
      brightness = 0.7;
    } else if (absDiff === 3) {
      // PEECHE (Back center-depth)
      x = diff > 0 ? (isMob ? 200 : 410) : (isMob ? -200 : -410);
      z = isMob ? -160 : -250;
      rotateY = diff > 0 ? -55 : 55;
      scale = isMob ? 0.52 : 0.6;
      opacity = isMob ? 0.2 : 0.3;
      zIndex = 5;
      brightness = 0.5;
    }

    return {
      transform: `translateX(${x}px) translateZ(${z}px) rotateY(${rotateY}deg) scale(${scale})`,
      opacity,
      zIndex,
      filter: `brightness(${brightness})`,
      pointerEvents: (absDiff <= 2 ? "auto" : "none") as "auto" | "none",
      visibility: "visible" as const,
    };
  };

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

  // Mouse Drag / Grab & Touch Swipe handlers
  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    dragStartXRef.current = e.clientX;
    dragMovedRef.current = false;
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    const diff = e.clientX - dragStartXRef.current;
    if (Math.abs(diff) > 8) {
      dragMovedRef.current = true;
    }
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (!isDragging) return;
    setIsDragging(false);
    const diff = e.clientX - dragStartXRef.current;
    if (Math.abs(diff) > 40) {
      if (diff < 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
  };

  const handlePointerCancel = () => {
    setIsDragging(false);
  };

  const handleCardClick = (e: React.MouseEvent, idx: number) => {
    if (dragMovedRef.current) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }
    goToSlide(idx);
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
      className="relative w-full h-[calc(100dvh-58px)] sm:h-[calc(100vh-75px)] min-h-[500px] sm:min-h-[640px] max-h-[960px] overflow-hidden bg-slate-950 select-none text-white"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Animated Dotted Wall Background */}
      <AnimatedDottedWall
        className="opacity-40 z-10"
        dotColor="rgba(56, 189, 248, 0.4)"
      />

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
              isActive
                ? "opacity-100 z-10 pointer-events-auto"
                : "opacity-0 z-0 pointer-events-none"
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
      <div className="relative z-20 h-full max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 pl-4 sm:pl-16 lg:pl-24 flex flex-col justify-start lg:justify-between py-2 sm:py-6 lg:py-10 pointer-events-none">
        {/* Top Badging / Location Indicator */}
        <div className="pt-0.5 sm:pt-2 pointer-events-auto shrink-0">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg text-[10px] sm:text-xs font-semibold uppercase tracking-wider sm:tracking-widest text-sky-300">
            <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 animate-pulse text-sky-400" />
            <span>Featured Luxury Expeditions</span>
          </div>
        </div>

        {/* Center Grid: Left Text Details + Right Carousel Track */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 sm:gap-4 lg:gap-6 items-start lg:items-center mt-14 xs:mt-2.5 sm:mt-3 lg:my-auto">
          {/* LEFT SECTION: DESTINATION INFORMATION WITH BOTTOM-TO-TOP TRANSITIONS */}
          <div
            key={currentIndex}
            className="lg:col-span-5 xl:col-span-5 space-y-1.5 sm:space-y-3 lg:space-y-4 text-left pointer-events-auto max-w-xl"
          >
            {/* Country / Region Tag with top margin */}
            <div className="animate-slide-up-1 flex items-center gap-2 text-[11px] sm:text-xs font-bold uppercase tracking-widest text-sky-400">
              <span>{currentSlide.country}</span>
              <span>•</span>
              <span className="text-slate-300">{currentSlide.duration}</span>
            </div>

            {/* Slide Title */}
            <h1 className="animate-slide-up-1 text-2xl xs:text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-black uppercase tracking-tight text-white leading-tight sm:leading-none font-sans drop-shadow-lg break-words">
              {currentSlide.name}
            </h1>

            {/* Slide Description - compact on mobile so preview cards & arrows stay in view */}
            <p className="animate-slide-up-2 text-white/85 text-xs sm:text-sm md:text-base leading-snug sm:leading-relaxed line-clamp-2 sm:line-clamp-3 lg:line-clamp-4 max-w-lg drop-shadow font-normal">
              {currentSlide.description}
            </p>

            {/* Explore CTA Button with ShimmerButton */}
            <div className="animate-slide-up-3 pt-0.5 sm:pt-2">
              <Link href={`#explore-${currentSlide.id}`}>
                <ShimmerButton
                  size="lg"
                  className="!text-xs !px-4 !py-2 sm:!text-base sm:!px-6 sm:!py-3.5"
                  icon={
                    <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white shrink-0 group-hover/btn:translate-x-1 transition-transform" />
                  }
                >
                  Explore Package
                </ShimmerButton>
              </Link>
            </div>
          </div>

          {/* 3D CYLINDRICAL SPINNER CAROUSEL (Active Front, Left/Right/Behind in 3D Cylinder) */}
          <div
            className={`w-full lg:col-span-7 xl:col-span-7 flex items-center justify-center relative pointer-events-auto mt-2 sm:mt-4 lg:mt-0 select-none overflow-visible touch-pan-y ${
              isDragging ? "cursor-grabbing" : "cursor-grab"
            }`}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerCancel}
            onPointerLeave={handlePointerCancel}
          >
            <div className="relative w-full h-[230px] xs:h-[260px] sm:h-[310px] lg:h-[390px] xl:h-[430px] flex items-center justify-center [perspective:1000px] lg:[perspective:1400px] [transform-style:preserve-3d] overflow-visible">
              {HERO_SLIDES.map((slide, idx) => {
                const style3D = getCard3DStyle(idx, isMobile);
                const isActive = idx === currentIndex;
                const isSaved = Boolean(bookmarkedIds[slide.id]);

                return (
                  <div
                    key={`cylinder-card-${slide.id}`}
                    onClick={(e) => handleCardClick(e, idx)}
                    style={style3D}
                    className={`absolute transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] will-change-transform ${
                      isActive ? "z-30" : "hover:brightness-110"
                    }`}
                  >
                    {/* The Card Container - NO BORDER & NO SHADOW */}
                    <div
                      className={`relative w-[145px] xs:w-[165px] sm:w-[210px] lg:w-[235px] xl:w-[255px] h-[190px] xs:h-[215px] sm:h-[280px] lg:h-[330px] xl:h-[365px] rounded-2xl sm:rounded-3xl overflow-hidden transition-all duration-500 ${
                        isActive ? "opacity-100" : "opacity-90"
                      }`}
                    >
                      {/* Card Image */}
                      <Image
                        src={slide.thumbnailUrl}
                        alt={slide.name}
                        fill
                        className="object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                        sizes="(max-width: 640px) 170px, (max-width: 1024px) 210px, 255px"
                      />

                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/25 to-transparent" />

                      {/* Top Bar: Title & Active Badge / Bookmark */}
                      <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between pointer-events-none">
                        {isActive ? (
                          <span className="text-[8px] xs:text-[9px] font-extrabold uppercase px-1.5 py-0.5 rounded-md bg-sky-400 text-slate-950">
                            Active
                          </span>
                        ) : (
                          <span className="text-[9px] xs:text-[10px] font-bold text-white/80 bg-black/40 backdrop-blur-md px-1.5 py-0.5 rounded-md truncate max-w-[100px]">
                            {slide.location || slide.name}
                          </span>
                        )}

                        {/* Bookmark Button */}
                        <button
                          type="button"
                          onClick={(e) => toggleBookmark(e, slide.id)}
                          className={`w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 rounded-full backdrop-blur-md flex items-center justify-center transition-all duration-200 cursor-pointer pointer-events-auto ${
                            isSaved
                              ? "bg-white text-blue-600"
                              : "bg-white/25 hover:bg-white/40 text-white"
                          }`}
                          aria-label="Bookmark destination"
                          title={isSaved ? "Saved" : "Save destination"}
                        >
                          <Bookmark
                            className={`w-3 h-3 xs:w-3.5 xs:h-3.5 ${isSaved ? "fill-blue-600" : ""}`}
                          />
                        </button>
                      </div>

                      {/* Bottom Meta */}
                      <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-3.5 sm:left-3.5 sm:right-3.5 text-white">
                        {/* Destination Title & Stars */}
                        <div className="mb-1">
                          <span className="text-xs xs:text-sm sm:text-base font-bold text-white block truncate">
                            {slide.location || slide.name}
                          </span>
                          <div className="flex items-center gap-0.5 mt-0.5">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-2.5 h-2.5 sm:w-3 sm:h-3 ${
                                  i < (slide.rating || 5)
                                    ? "fill-amber-400 text-amber-400"
                                    : "fill-white/20 text-white/30"
                                }`}
                              />
                            ))}
                          </div>
                        </div>

                        {/* Country, Duration, Price */}
                        <div className="flex items-center justify-between text-[9px] xs:text-[10px] sm:text-xs text-white/80 pt-1">
                          <span className="font-semibold uppercase tracking-wider text-sky-300 truncate max-w-[90px]">
                            {slide.country}
                          </span>
                          {slide.price && (
                            <span className="font-bold text-white">
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
            4. BOTTOM CONTROLS (NAVIGATION ARROWS ON RIGHT)
        ======================================================== */}
        <div className="flex items-center justify-end pt-1.5 sm:pt-2 pointer-events-auto">
          {/* Navigation Arrows (Prev / Next) on Right */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Mobile Slide Counter */}
            <div className="flex items-center gap-1 mr-1.5 sm:hidden">
              <span className="text-[11px] font-bold text-sky-300">
                {String(currentIndex + 1).padStart(2, "0")}
              </span>
              <span className="text-[10px] text-white/40">/</span>
              <span className="text-[10px] text-white/60">
                {String(totalSlides).padStart(2, "0")}
              </span>
            </div>

            <button
              type="button"
              onClick={prevSlide}
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/15 hover:bg-white/30 backdrop-blur-md flex items-center justify-center text-white border border-white/20 transition-all duration-200 cursor-pointer active:scale-95"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <button
              type="button"
              onClick={nextSlide}
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/15 hover:bg-white/30 backdrop-blur-md flex items-center justify-center text-white border border-white/20 transition-all duration-200 cursor-pointer active:scale-95"
              aria-label="Next slide"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
