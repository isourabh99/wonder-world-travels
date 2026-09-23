"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, MapPin, Sparkles } from "lucide-react";

export interface HeroSlide {
  id: string;
  title: string;
  tagline: string;
  location: string;
  country: string;
  imageUrl: string;
  badge: string;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    id: "rajasthan",
    title: "The Regal Grandeur of Rajasthan",
    tagline: "Golden sand dunes & centuries-old palace suites",
    location: "Udaipur & Jaisalmer",
    country: "India",
    imageUrl: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1600&q=85",
    badge: "Royal Heritage",
  },
  {
    id: "swiss-alps",
    title: "Majestic Alpine Summits",
    tagline: "Panoramic glacier trains & pristine lake vistas",
    location: "Zermatt & Lucerne",
    country: "Switzerland",
    imageUrl: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1600&q=85",
    badge: "International Luxe",
  },
  {
    id: "kedarnath",
    title: "Sacred Himalayan Devotion",
    tagline: "Holy darshan amidst mist-cloaked peaks",
    location: "Kedarnath & Badrinath",
    country: "Uttarakhand",
    imageUrl: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1600&q=85",
    badge: "Sacred Yatra",
  },
  {
    id: "kerala",
    title: "Emerald Palm Serenity",
    tagline: "Private spice estates & tranquil sunset houseboats",
    location: "Alleppey & Kumarakom",
    country: "Kerala",
    imageUrl: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1600&q=85",
    badge: "Ayurvedic Haven",
  },
];

export const HeroCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const currentSlide = HERO_SLIDES[currentIndex];

  return (
    <div className="relative w-full h-[480px] sm:h-[550px] lg:h-full min-h-[500px] overflow-hidden bg-slate-900 group">
      {/* Background Image Carousel with Ken Burns */}
      {HERO_SLIDES.map((slide, idx) => {
        const isActive = idx === currentIndex;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            <div className={`relative w-full h-full ${isActive ? "animate-ken-burns" : ""}`}>
              <Image
                src={slide.imageUrl}
                alt={slide.title}
                fill
                priority={idx === 0}
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Cinematic Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent hidden lg:block" />
          </div>
        );
      })}

      {/* Slide Context Overlay on Bottom-Left */}
      <div className="absolute bottom-16 sm:bottom-20 left-6 sm:left-10 z-20 max-w-md text-white space-y-2 pointer-events-none">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-semibold uppercase tracking-wider text-white border border-white/30">
          <Sparkles className="w-3.5 h-3.5 text-sky-300" />
          <span>{currentSlide.badge}</span>
        </div>
        <h3 className="font-serif text-2xl sm:text-3xl font-bold leading-tight drop-shadow-md">
          {currentSlide.title}
        </h3>
        <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-200">
          <MapPin className="w-4 h-4 text-sky-300 shrink-0" />
          <span>{currentSlide.location}, {currentSlide.country}</span>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-10 z-20 flex items-center gap-4">
        {/* Slide Indicators */}
        <div className="flex items-center gap-2">
          {HERO_SLIDES.map((_, dotIdx) => (
            <button
              key={dotIdx}
              onClick={() => setCurrentIndex(dotIdx)}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                dotIdx === currentIndex
                  ? "w-8 bg-white"
                  : "w-2 bg-white/40 hover:bg-white/70"
              }`}
              aria-label={`Go to slide ${dotIdx + 1}`}
            />
          ))}
        </div>

        {/* Arrow buttons */}
        <div className="flex items-center gap-1.5 pl-4 border-l border-white/20">
          <button
            onClick={prevSlide}
            className="w-8 h-8 rounded-full bg-black/40 hover:bg-black/70 backdrop-blur-sm text-white flex items-center justify-center transition-colors cursor-pointer border border-white/20"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={nextSlide}
            className="w-8 h-8 rounded-full bg-black/40 hover:bg-black/70 backdrop-blur-sm text-white flex items-center justify-center transition-colors cursor-pointer border border-white/20"
            aria-label="Next slide"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
