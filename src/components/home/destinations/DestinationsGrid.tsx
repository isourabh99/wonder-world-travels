"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Compass, Play } from "lucide-react";
import { Destination } from "@/types/destination";
import { TOP_DESTINATIONS } from "@/data/destinations";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  PaperAirplaneDoodle,
  PassportStampDoodle,
  TapeAccent,
  SparkleDoodle,
  AnimatedDottedWall,
} from "@/components/ui/scrapbook";

interface DestinationsGridProps {
  destinations?: Destination[];
}

export const DestinationsGrid: React.FC<DestinationsGridProps> = ({
  destinations = TOP_DESTINATIONS,
}) => {
  return (
    <section id="destinations" className="py-20 lg:py-24 bg-gray-50/60 border-b border-border/60 relative overflow-hidden">
      {/* Animated Dotted Wall Background */}
      <AnimatedDottedWall className="opacity-60" />

      {/* Scrapbook Floating Vector Accents */}
      <div className="absolute top-10 right-10 pointer-events-none hidden md:block z-10">
        <PaperAirplaneDoodle className="w-24 h-24 text-sky-500 opacity-60" />
      </div>

      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="Cinematic Landscapes"
          title="Top Destinations To"
          highlight="Explore This Year"
          description="Immerse yourself in live cinematic glimpses of timeless royal kingdoms, sacred alpine heights, and tropical paradises."
          className="mb-14"
        />

        {/* Bento / Dynamic Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((dest, idx) => {
            const isLarge = idx === 0 || idx === 3;

            return (
              <Link
                key={dest.id}
                href={`/destinations/${dest.id}`}
                className={`group relative rounded-3xl overflow-hidden border border-border shadow-sm hover:shadow-2xl transition-all duration-500 bg-slate-900 ${
                  isLarge ? "sm:col-span-2 lg:col-span-2 h-[340px] sm:h-[400px]" : "h-[340px] sm:h-[400px]"
                }`}
              >
                {/* Scrapbook Corner Tape Accent */}
                <TapeAccent className="-top-1 -right-2 w-16 h-6 bg-white/70 border border-slate-200/80 rotate-[15deg] z-20" />
                {/* Background Looping HD Pexels Video Stream */}
                {dest.videoUrl ? (
                  <video
                    poster={dest.imageUrl}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  >
                    <source src={dest.videoUrl} type="video/mp4" />
                  </video>
                ) : (
                  <img
                    src={dest.imageUrl}
                    alt={dest.name}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                )}

                {/* Dark Vignette Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-black/20 group-hover:from-slate-950 transition-colors duration-300 pointer-events-none" />

                {/* Top Badges (Category Tag & Live Video Badge) */}
                <div className="absolute top-5 left-5 right-5 flex items-center justify-between pointer-events-none z-10">
                  {dest.tag ? (
                    <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-black/40 backdrop-blur-md text-white border border-white/20">
                      {dest.tag}
                    </span>
                  ) : <div />}

                  <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold tracking-wide bg-sky-500/30 backdrop-blur-md text-sky-200 border border-sky-400/40 flex items-center gap-1.5 shadow-sm">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-400"></span>
                    </span>
                    <Play className="w-2.5 h-2.5 fill-current text-sky-300" />
                    <span>HD Video</span>
                  </span>
                </div>

                {/* Bottom Content Overlay */}
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between z-10 pointer-events-none">
                  <div className="space-y-1 text-white">
                    <div className="flex items-center gap-2 text-xs text-slate-300 font-medium">
                      <Compass className="w-3.5 h-3.5 text-sky-400" />
                      <span>{dest.region} • {dest.country}</span>
                    </div>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-white group-hover:translate-x-1 transition-transform">
                      {dest.name}
                    </h3>
                    <p className="text-xs text-slate-300">
                      {dest.toursCount} Curated Packages • From ₹{dest.startingPrice.toLocaleString("en-IN")}
                    </p>
                  </div>

                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white flex items-center justify-center group-hover:bg-sky-500 group-hover:border-sky-500 group-hover:scale-110 transition-all duration-300 shrink-0 shadow-lg">
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};
