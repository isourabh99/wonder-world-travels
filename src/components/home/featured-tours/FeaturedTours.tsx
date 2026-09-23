"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, Clock, MapPin, ArrowRight, Sparkles, Check } from "lucide-react";
import { Tour } from "@/types/tour";
import { FEATURED_TOURS } from "@/data/tours";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface FeaturedToursProps {
  tours?: Tour[];
}

export const FeaturedTours: React.FC<FeaturedToursProps> = ({
  tours = FEATURED_TOURS,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Itineraries" },
    { id: "indian", label: "Indian Heritage" },
    { id: "pilgrimage", label: "Sacred Pilgrimages" },
    { id: "international", label: "International Holidays" },
  ];

  const filteredTours =
    activeCategory === "all"
      ? tours
      : tours.filter((t) => t.category === activeCategory);

  return (
    <section id="featured-tours" className="py-20 lg:py-24 bg-white border-b border-border/60">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            align="left"
            eyebrow="Handcrafted Journeys"
            title="Signature Tours &"
            highlight="Exclusive Circuits"
            description="Meticulously curated holiday packages with 5-star hospitality, seamless private logistics, and native cultural immersion."
          />

          {/* Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar shrink-0 pb-1">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  activeCategory === cat.id
                    ? "bg-primary text-white shadow-sm"
                    : "border border-border text-foreground hover:border-primary hover:text-primary hover:bg-primary-light"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tours Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTours.map((tour) => (
            <div
              key={tour.id}
              className="bg-white rounded-3xl border border-border overflow-hidden group shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300 flex flex-col"
            >
              {/* Image & Badges */}
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={tour.imageUrl}
                  alt={tour.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

                {/* Top Badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  {tour.badge ? (
                    <Badge variant="primary" size="sm" className="shadow-sm">
                      <Sparkles className="w-3 h-3 mr-1" />
                      {tour.badge}
                    </Badge>
                  ) : <div />}

                  <div className="bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-xs font-semibold text-foreground flex items-center gap-1 shadow-sm">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span>{tour.rating}</span>
                    <span className="text-muted text-[11px]">({tour.reviewsCount})</span>
                  </div>
                </div>

                {/* Duration & Location overlay tag */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs">
                  <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{tour.duration}</span>
                  </div>
                  <div className="flex items-center gap-1 text-white/90">
                    <MapPin className="w-3.5 h-3.5 text-primary-light" />
                    <span className="truncate max-w-[130px]">{tour.country}</span>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="font-serif text-xl font-bold text-foreground group-hover:text-primary transition-colors line-clamp-1 leading-snug">
                    {tour.title}
                  </h3>
                  <p className="text-xs text-muted line-clamp-1 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-primary shrink-0" />
                    {tour.location}
                  </p>

                  {/* Highlights Bullet List */}
                  <ul className="pt-2 space-y-1.5 border-t border-border/60">
                    {tour.highlights.slice(0, 3).map((hl, i) => (
                      <li key={i} className="text-xs text-foreground/80 flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-primary shrink-0" />
                        <span className="truncate">{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Price & Action Footer */}
                <div className="pt-4 border-t border-border flex items-center justify-between">
                  <div>
                    <span className="text-[11px] text-muted uppercase tracking-wider block">
                      Starting From
                    </span>
                    <div className="flex items-baseline gap-2">
                      <span className="font-serif text-xl font-bold text-primary">
                        ₹{tour.price.toLocaleString("en-IN")}
                      </span>
                      {tour.originalPrice && (
                        <span className="text-xs text-muted line-through">
                          ₹{tour.originalPrice.toLocaleString("en-IN")}
                        </span>
                      )}
                    </div>
                  </div>

                  <Link href={`/tours/${tour.id}`}>
                    <Button
                      variant="primary"
                      size="sm"
                      pill
                      rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
                    >
                      Book Tour
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="mt-14 text-center">
          <Link href="/indian-tours">
            <Button
              variant="outline"
              size="lg"
              pill
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              Browse All 120+ Curated Itineraries
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
