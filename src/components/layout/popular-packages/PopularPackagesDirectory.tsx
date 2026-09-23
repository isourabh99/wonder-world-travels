"use client";

import React from "react";
import Link from "next/link";
import {
  MapPin,
  Globe,
  Compass,
  Heart,
  Users,
  Sparkles,
  ChevronRight,
  ExternalLink,
} from "lucide-react";
import {
  POPULAR_PACKAGE_CATEGORIES,
  PackageCategory,
} from "@/data/popular-packages-links";

export const PopularPackagesDirectory: React.FC = () => {
  const getCategoryIcon = (iconName: PackageCategory["iconName"]) => {
    switch (iconName) {
      case "MapPin":
        return <MapPin className="w-5 h-5 text-sky-500" />;
      case "Globe":
        return <Globe className="w-5 h-5 text-sky-500" />;
      case "Sparkles":
        return <Sparkles className="w-5 h-5 text-sky-500" />;
      case "Heart":
        return <Heart className="w-5 h-5 text-sky-500" />;
      case "Compass":
        return <Compass className="w-5 h-5 text-sky-500" />;
      case "Users":
        return <Users className="w-5 h-5 text-sky-500" />;
      default:
        return <Globe className="w-5 h-5 text-sky-500" />;
    }
  };

  return (
    <section className="w-full bg-white text-slate-900 py-16 sm:py-20 border-t border-b border-slate-200/80 relative z-20 overflow-hidden">
      {/* Background Soft Sky Blue Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-sky-50/60 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header Title */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 pb-6">
          <div className="space-y-2 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-50 border border-sky-200 text-sky-600 text-xs font-semibold tracking-wider uppercase">
              <Globe className="w-3.5 h-3.5 text-sky-500" />
              <span>Tour Directory & Packages</span>
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900">
              Explore Popular Tour Packages
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Find your ideal holiday destination from our handcrafted Indian circuits, international holidays, sacred pilgrimage yatras, and luxury honeymoon packages.
            </p>
          </div>

          <div className="shrink-0 text-xs font-semibold text-slate-500 flex items-center gap-1.5 bg-slate-50 border border-slate-200 px-3.5 py-2 rounded-xl">
            <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
            <span>48 Curated Travel Links</span>
          </div>
        </div>

        {/* 6 Category Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {POPULAR_PACKAGE_CATEGORIES.map((category) => (
            <div
              key={category.id}
              className="bg-slate-50/70 border border-slate-200/90 hover:border-sky-300 rounded-3xl p-6 sm:p-7 space-y-4 transition-all duration-300 hover:shadow-lg hover:shadow-sky-500/5 group"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 border-b border-slate-200/80 pb-3.5">
                <div className="w-10 h-10 rounded-2xl bg-sky-100/80 border border-sky-200 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  {getCategoryIcon(category.iconName)}
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                    {category.categoryTitle}
                  </h3>
                  <span className="text-[11px] font-medium text-slate-500 block">
                    {category.links.length} Packages Available
                  </span>
                </div>
              </div>

              {/* Links List */}
              <ul className="space-y-2.5 pt-1">
                {category.links.map((item, idx) => (
                  <li key={idx}>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link flex items-center justify-between text-xs sm:text-sm font-medium text-slate-700 hover:text-sky-600 transition-colors py-1 px-2.5 rounded-xl hover:bg-sky-50/80 border border-transparent hover:border-sky-100"
                    >
                      <span className="flex items-center gap-2 truncate pr-2">
                        <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover/link:text-sky-500 group-hover/link:translate-x-0.5 transition-all shrink-0" />
                        <span className="truncate">{item.title}</span>
                      </span>

                      <div className="flex items-center gap-1.5 shrink-0">
                        {item.badge && (
                          <span className="text-[10px] font-semibold text-sky-700 bg-sky-100/90 px-2 py-0.5 rounded-md uppercase tracking-wider">
                            {item.badge}
                          </span>
                        )}
                        <ExternalLink className="w-3 h-3 text-slate-400 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
