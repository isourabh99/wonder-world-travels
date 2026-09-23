"use client";

import React from "react";
import Link from "next/link";
import {
  Award,
  Users,
  Sparkles,
  Globe,
  Building,
  FileCheck,
  ArrowRight,
  CheckCircle2,
  PhoneCall,
  MapPin,
} from "lucide-react";
import { WHY_CHOOSE_US_ITEMS, WhyChooseUsItem } from "@/data/why-choose-us";
import { ShimmerButton } from "@/components/ui/button";
import {
  SuitcaseDoodle,
  ExplorerBadgeDoodle,
  TapeAccent,
  SparkleDoodle,
  AnimatedDottedWall,
} from "@/components/ui/scrapbook";

interface WhyChooseUsProps {
  items?: WhyChooseUsItem[];
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({
  items = WHY_CHOOSE_US_ITEMS,
}) => {
  const getIcon = (name: WhyChooseUsItem["iconName"]) => {
    switch (name) {
      case "Award":
        return <Award className="w-6 h-6 text-sky-500" />;
      case "Users":
        return <Users className="w-6 h-6 text-primary" />;
      case "Sparkles":
        return <Sparkles className="w-6 h-6 text-sky-500" />;
      case "Globe":
        return <Globe className="w-6 h-6 text-primary" />;
      case "Building":
        return <Building className="w-6 h-6 text-sky-500" />;
      case "FileCheck":
        return <FileCheck className="w-6 h-6 text-primary" />;
      default:
        return <Award className="w-6 h-6 text-primary" />;
    }
  };

  return (
    <section id="why-choose-us" className="py-20 lg:py-28 bg-white border-b border-border/60 relative overflow-hidden">
      {/* Animated Dotted Wall Background */}
      <AnimatedDottedWall className="opacity-70" />

      {/* Scrapbook Vector Accents */}
      <SuitcaseDoodle className="absolute top-10 right-12 w-20 h-20 text-slate-700/60 hidden xl:block z-0" />
      <ExplorerBadgeDoodle text="100% TRUSTED" className="absolute bottom-12 left-8 w-28 h-28 text-sky-500/70 hidden lg:block z-0" />
      <SparkleDoodle className="absolute top-24 left-1/3 w-8 h-8 text-sky-400 z-0" />

      {/* Background Soft Accent Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-sky-50 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* ========================================================
            1. SECTION HEADER WITH STAT COUNTERS
        ======================================================== */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 relative">
          <div className="space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-wider uppercase">
              <Award className="w-3.5 h-3.5 text-primary" />
              <span>The Wonder World Distinction</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.15] relative">
              Why Discerning Travelers{" "}
              <span className="text-primary italic">Entrust Us With Their Journeys</span>
            </h2>

            <p className="text-muted text-base sm:text-lg leading-relaxed">
              We provide expert travel planning, smooth bookings, and reliable support with 100% transparency and complete customer satisfaction.
            </p>
          </div>

          {/* Quick Metrics Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-50 border border-border/80 p-3 sm:p-4 rounded-2xl shrink-0 relative">
            <TapeAccent className="-top-3 -right-3 w-16 h-5" />
            <div className="p-2 sm:p-3 text-center sm:text-left sm:border-r border-border/80 relative">
              <span className="font-serif text-2xl sm:text-3xl font-bold text-primary block leading-none">
                50K+
              </span>
              <span className="text-[11px] text-muted font-medium mt-1 block">Happy Customers</span>
            </div>
            <div className="p-2 sm:p-3 text-center sm:text-left sm:border-r border-border/80">
              <span className="font-serif text-2xl sm:text-3xl font-bold text-primary block leading-none">
                15+
              </span>
              <span className="text-[11px] text-muted font-medium mt-1 block">Years Experience</span>
            </div>
            <div className="p-2 sm:p-3 text-center sm:text-left sm:border-r border-border/80">
              <span className="font-serif text-xl sm:text-2xl font-bold text-primary block leading-none">
                IATA
              </span>
              <span className="text-[11px] text-muted font-medium mt-1 block">TIDS Certified</span>
            </div>
            <div className="p-2 sm:p-3 text-center sm:text-left">
              <span className="font-serif text-xl sm:text-2xl font-bold text-primary block leading-none">
                GST
              </span>
              <span className="text-[11px] text-muted font-medium mt-1 block">Registered Co.</span>
            </div>
          </div>
        </div>

        {/* ========================================================
            2. 6-CARD VALUE PILLARS GRID
        ======================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {items.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-3xl border border-border/80 hover:border-primary/40 p-7 sm:p-8 flex flex-col justify-between shadow-xs hover:shadow-xl transition-all duration-300 relative overflow-hidden"
            >
              {/* Card Content */}
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

              {/* Bottom Card Stat */}
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
        <div className="rounded-3xl bg-slate-50 border border-border/80 p-8 sm:p-10 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-xs">
          <div className="space-y-2 max-w-2xl text-center lg:text-left">
            <h4 className="font-serif text-xl sm:text-2xl font-bold text-foreground flex items-center justify-center lg:justify-start gap-2">
              <MapPin className="w-5 h-5 text-primary shrink-0" />
              <span>Visit Our Head Office at 23/21E, East Patel Nagar, N.D – 110008</span>
            </h4>
            <p className="text-sm text-muted leading-relaxed">
              Connect directly with our master tour planners at 23/21E, East Patel Nagar, New Delhi for in-person consultation, customized route maps, and day-by-day itineraries.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 shrink-0">
            <Link href="/contact">
              <ShimmerButton
                size="lg"
                icon={<PhoneCall className="w-4 h-4 text-white shrink-0" />}
              >
                Request Bespoke Plan
              </ShimmerButton>
            </Link>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-gray-100 text-slate-800 border border-border text-sm font-semibold transition-all cursor-pointer"
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
