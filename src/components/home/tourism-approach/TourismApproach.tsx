"use client";

import React, { useState } from "react";
import {
  Plane,
  Building2,
  Ship,
  PackageCheck,
  CreditCard,
  Users,
  Compass,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { TOURISM_APPROACH_DATA, TourismServiceItem } from "@/data/tourism-approach";
import { ShimmerButton } from "@/components/ui/button";
import { EnquireModal } from "@/components/layout/navbar/EnquireModal";
import {
  CompassRoseDoodle,
  PassportStampDoodle,
  TapeAccent,
  SparkleDoodle,
  AnimatedDottedWall,
} from "@/components/ui/scrapbook";

export const TourismApproach: React.FC = () => {
  const [isEnquireOpen, setIsEnquireOpen] = useState(false);

  const getServiceIcon = (iconName: TourismServiceItem["iconName"]) => {
    switch (iconName) {
      case "Plane":
        return <Plane className="w-6 h-6 text-sky-500" />;
      case "Hotel":
        return <Building2 className="w-6 h-6 text-sky-500" />;
      case "Ship":
        return <Ship className="w-6 h-6 text-sky-500" />;
      case "PackageCheck":
        return <PackageCheck className="w-6 h-6 text-sky-500" />;
      case "CreditCard":
        return <CreditCard className="w-6 h-6 text-sky-500" />;
      case "Users":
        return <Users className="w-6 h-6 text-sky-500" />;
      default:
        return <Compass className="w-6 h-6 text-sky-500" />;
    }
  };

  return (
    <section className="w-full bg-white text-slate-900 py-16 sm:py-24 border-b border-slate-200 relative overflow-hidden">
      {/* Animated Dotted Wall Background */}
      <AnimatedDottedWall className="opacity-70" />

      {/* Soft Decorative Ambient Blue Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-sky-50/70 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Scrapbook Vector Floating Accents */}
      <div className="absolute top-12 left-8 pointer-events-none hidden lg:block">
        <CompassRoseDoodle className="w-24 h-24 text-sky-500/30" />
      </div>
      <div className="absolute bottom-16 right-10 pointer-events-none hidden md:block">
        <PassportStampDoodle text="PREMIUM • APPROVED" className="w-28 h-28 text-sky-600/40" />
      </div>

      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16 relative z-10">
        
        {/* ========================================================
            SECTION HEADER
        ======================================================== */}
        <div className="text-center max-w-3xl mx-auto space-y-4 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-600 text-xs font-semibold tracking-widest uppercase">
            <Compass className="w-3.5 h-3.5 text-sky-500" />
            <span>{TOURISM_APPROACH_DATA.sectionBadge}</span>
          </div>

          <div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
              {TOURISM_APPROACH_DATA.mainTitle}
            </h2>
          </div>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed pt-1">
            {TOURISM_APPROACH_DATA.description}
          </p>
        </div>

        {/* ========================================================
            6 SERVICES GRID
        ======================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {TOURISM_APPROACH_DATA.services.map((service) => (
            <div
              key={service.id}
              className="group bg-slate-50/80 border border-slate-200/90 hover:border-sky-400 rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-sky-500/10 hover:-translate-y-1 relative overflow-hidden"
            >
              {/* Subtle Card Accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-sky-100/50 rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform" />

              <div className="space-y-5 relative z-10">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center shadow-xs group-hover:bg-sky-500 group-hover:border-sky-500 transition-all duration-300">
                    <div className="group-hover:text-white transition-colors">
                      {React.cloneElement(getServiceIcon(service.iconName), {
                        className: "w-6 h-6 text-sky-500 group-hover:text-white transition-colors",
                      })}
                    </div>
                  </div>

                  {service.badge && (
                    <span className="text-[11px] font-semibold text-sky-700 bg-sky-100 px-3 py-1 rounded-full uppercase tracking-wider">
                      {service.badge}
                    </span>
                  )}
                </div>

                <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                  {service.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Bottom Card Footer */}
              <div className="pt-6 mt-6 border-t border-slate-200/80 flex items-center justify-between relative z-10 text-xs font-semibold text-slate-700">
                <span className="flex items-center gap-1.5 text-sky-600">
                  <CheckCircle2 className="w-4 h-4 text-sky-500" />
                  Premium Service
                </span>
                <button
                  onClick={() => setIsEnquireOpen(true)}
                  className="flex items-center gap-1 text-slate-500 group-hover:text-sky-600 transition-colors cursor-pointer"
                >
                  <span>Enquire</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* ========================================================
            BOTTOM CALLOUT STRIP
        ======================================================== */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-2 text-center sm:text-left max-w-2xl">
            <h4 className="font-serif text-xl sm:text-2xl font-bold flex items-center justify-center sm:justify-start gap-2">
              <Sparkles className="w-5 h-5 text-sky-400" />
              <span>Ready for an Unforgettable Travel Experience?</span>
            </h4>
            <p className="text-slate-300 text-sm leading-relaxed">
              Contact our travel experts to get custom flight, hotel, cruise, and tour package options crafted exclusively for you.
            </p>
          </div>

          <div className="shrink-0">
            <ShimmerButton
              onClick={() => setIsEnquireOpen(true)}
              size="lg"
              icon={<ArrowRight className="w-4 h-4 text-white" />}
            >
              Get Custom Quote
            </ShimmerButton>
          </div>
        </div>

      </div>

      {/* Side Enquire Modal */}
      <EnquireModal isOpen={isEnquireOpen} onClose={() => setIsEnquireOpen(false)} />
    </section>
  );
};
