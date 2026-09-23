"use client";

import React from "react";
import Link from "next/link";
import {
  Headphones,
  ShieldCheck,
  Compass,
  Sparkles,
  Crown,
  HeartPulse,
  ArrowRight,
  CheckCircle2,
  PhoneCall,
  Award,
  Users,
} from "lucide-react";
import { WHY_CHOOSE_US_ITEMS, WhyChooseUsItem } from "@/data/why-choose-us";

interface WhyChooseUsProps {
  items?: WhyChooseUsItem[];
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({
  items = WHY_CHOOSE_US_ITEMS,
}) => {
  const getIcon = (name: WhyChooseUsItem["iconName"]) => {
    switch (name) {
      case "Crown":
        return <Crown className="w-6 h-6 text-amber-500" />;
      case "Headphones":
        return <Headphones className="w-6 h-6 text-primary" />;
      case "Compass":
        return <Compass className="w-6 h-6 text-primary" />;
      case "HeartPulse":
        return <HeartPulse className="w-6 h-6 text-rose-500" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-6 h-6 text-emerald-600" />;
      case "Sparkles":
        return <Sparkles className="w-6 h-6 text-amber-500" />;
      default:
        return <Sparkles className="w-6 h-6 text-primary" />;
    }
  };

  return (
    <section id="why-choose-us" className="py-20 lg:py-28 bg-white border-b border-border/60 relative overflow-hidden">
      {/* Background Soft Accent Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-sky-50 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* ========================================================
            1. SECTION HEADER WITH STAT COUNTERS
        ======================================================== */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-wider uppercase">
              <Award className="w-3.5 h-3.5 text-primary" />
              <span>The Wonder World Distinction</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.15]">
              Why Discerning Travelers{" "}
              <span className="text-primary italic">Entrust Us With Their Journeys</span>
            </h2>

            <p className="text-muted text-base sm:text-lg leading-relaxed">
              We do not offer rigid cookie-cutter packages. Every voyage is choreographed around your family’s comfort, security, and cherished aspirations.
            </p>
          </div>

          {/* Quick Metrics Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-gray-50/80 border border-border/80 p-3 sm:p-4 rounded-2xl shrink-0">
            <div className="p-2 sm:p-3 text-center sm:text-left sm:border-r border-border/80">
              <span className="font-serif text-2xl sm:text-3xl font-bold text-primary block leading-none">
                45K+
              </span>
              <span className="text-[11px] text-muted font-medium mt-1 block">Happy Guests</span>
            </div>
            <div className="p-2 sm:p-3 text-center sm:text-left sm:border-r border-border/80">
              <span className="font-serif text-2xl sm:text-3xl font-bold text-primary block leading-none">
                14+
              </span>
              <span className="text-[11px] text-muted font-medium mt-1 block">Years of Trust</span>
            </div>
            <div className="p-2 sm:p-3 text-center sm:text-left sm:border-r border-border/80">
              <span className="font-serif text-2xl sm:text-3xl font-bold text-primary block leading-none">
                100%
              </span>
              <span className="text-[11px] text-muted font-medium mt-1 block">Govt. Verified</span>
            </div>
            <div className="p-2 sm:p-3 text-center sm:text-left">
              <span className="font-serif text-2xl sm:text-3xl font-bold text-primary block leading-none">
                99.4%
              </span>
              <span className="text-[11px] text-muted font-medium mt-1 block">On-Time Trips</span>
            </div>
          </div>
        </div>

        {/* ========================================================
            2. 6-CARD VALUE PILLARS GRID (FULL DENSITY, LUXURY FEEL)
        ======================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {items.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-3xl border border-border/80 hover:border-primary/40 p-7 sm:p-8 flex flex-col justify-between shadow-xs hover:shadow-xl transition-all duration-300 relative overflow-hidden"
            >
              {/* Subtle Card Header */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 group-hover:bg-primary group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-inner group-hover:scale-105">
                    {getIcon(item.iconName)}
                  </div>
                  
                  <span className="text-[11px] font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wider">
                    {item.badge}
                  </span>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
                  {item.title}
                </h3>

                <p className="text-muted text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Bottom Card Stat / CTA */}
              <div className="pt-6 mt-6 border-t border-border/60 flex items-center justify-between">
                {item.highlightStat ? (
                  <span className="text-xs font-bold text-primary flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    {item.highlightStat}
                  </span>
                ) : (
                  <span className="text-xs text-muted">Wonder World Guarantee</span>
                )}

                <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1.5 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* ========================================================
            3. LUXURY TRIP PLANNER CONCIERGE PROMISE STRIP
        ======================================================== */}
        <div className="rounded-3xl bg-gray-50 border border-border/80 p-8 sm:p-10 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-xs">
          <div className="space-y-2 max-w-2xl text-center lg:text-left">
            <h4 className="font-serif text-xl sm:text-2xl font-bold text-foreground">
              Ready to sculpt your next unforgettable holiday or sacred yatra?
            </h4>
            <p className="text-sm text-muted leading-relaxed">
              Connect with our master tour directors in Connaught Place, New Delhi. Complimentary consultation with custom route maps and day-by-day costing.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary hover:bg-primary-hover text-white text-sm font-bold shadow-md shadow-primary/20 transition-all cursor-pointer"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Request Bespoke Plan</span>
            </Link>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-gray-100 text-foreground border border-border text-sm font-semibold transition-all cursor-pointer"
            >
              <span>Our Heritage & Values</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};
