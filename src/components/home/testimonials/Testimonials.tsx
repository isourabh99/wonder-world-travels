"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle } from "lucide-react";
import { TESTIMONIALS } from "@/data/testimonials";
import { Testimonial } from "@/types/testimonial";
import { SectionHeading } from "@/components/ui/section-heading";

interface TestimonialsProps {
  testimonials?: Testimonial[];
}

export const Testimonials: React.FC<TestimonialsProps> = ({
  testimonials = TESTIMONIALS,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const next = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const current = testimonials[activeIndex];

  return (
    <section className="py-20 lg:py-24 bg-white border-b border-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Traveler Stories"
          title="Echoes of Wonder From"
          highlight="Our Guests"
          description="Real reflections from discerning families, couples, and pilgrims who have journeyed with us across the globe."
          className="mb-14"
        />

        {/* Featured Testimonial Card */}
        <div className="max-w-4xl mx-auto bg-gray-50/70 border border-border rounded-3xl p-6 sm:p-12 relative shadow-sm">
          <div className="absolute top-6 right-6 text-primary/15">
            <Quote className="w-16 h-16 sm:w-24 sm:h-24" />
          </div>

          <div className="relative z-10 space-y-6">
            {/* Stars */}
            <div className="flex items-center gap-1">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>

            {/* Quote */}
            <p className="font-serif text-xl sm:text-2xl text-foreground leading-relaxed italic">
              &ldquo;{current.quote}&rdquo;
            </p>

            {/* Author details */}
            <div className="pt-4 border-t border-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-primary">
                  <Image
                    src={current.avatarUrl}
                    alt={current.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h4 className="font-semibold text-foreground text-base">
                      {current.name}
                    </h4>
                    {current.verified && (
                      <CheckCircle className="w-4 h-4 text-emerald-600" />
                    )}
                  </div>
                  <p className="text-xs text-muted">
                    {current.location} • <strong className="text-primary font-medium">{current.tourTaken}</strong>
                  </p>
                </div>
              </div>

              {/* Slider Navigation */}
              <div className="flex items-center gap-2 self-end sm:self-center">
                <button
                  onClick={prev}
                  className="w-10 h-10 rounded-full border border-border bg-white hover:bg-primary hover:text-white hover:border-primary flex items-center justify-center text-foreground transition-all duration-200 cursor-pointer shadow-xs"
                  aria-label="Previous review"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-xs font-semibold text-muted px-2">
                  {activeIndex + 1} / {testimonials.length}
                </span>
                <button
                  onClick={next}
                  className="w-10 h-10 rounded-full border border-border bg-white hover:bg-primary hover:text-white hover:border-primary flex items-center justify-center text-foreground transition-all duration-200 cursor-pointer shadow-xs"
                  aria-label="Next review"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
