"use client";

import React, { useState, useRef } from "react";
import {
  MapPin,
  Calendar,
  Users,
  Search,
  ChevronDown,
  Sparkles,
  Check,
  Plus,
  Minus,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useClickOutside } from "@/hooks/useClickOutside";

const DESTINATION_OPTIONS = [
  { label: "Rajasthan (Jaipur, Udaipur, Jaisalmer)", type: "Heritage & Desert" },
  { label: "Char Dham Yatra (Kedarnath, Badrinath)", type: "Sacred Pilgrimage" },
  { label: "Kerala Backwaters & Munnar Hills", type: "Nature & Ayurveda" },
  { label: "Swiss Alps & Paris Romance", type: "International Luxe" },
  { label: "Bali Luxury Pool Villas & Nusa Penida", type: "Tropical Getaway" },
  { label: "Kashi Ganga Aarti & Ayodhya Ram Mandir", type: "Spiritual Circuit" },
  { label: "Kashmir Paradise (Srinagar & Gulmarg)", type: "Himalayan Escape" },
  { label: "Dubai & Abu Dhabi Grandeur", type: "Modern Luxury" },
];

export const SearchWidget: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"all" | "indian" | "international" | "pilgrimage">("all");
  const [destination, setDestination] = useState("");
  const [showDestDropdown, setShowDestDropdown] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState("April 2026");
  const [showDateDropdown, setShowDateDropdown] = useState(false);
  const [adults, setAdults] = useState(2);
  const [childrenCount, setChildrenCount] = useState(0);
  const [showTravelersDropdown, setShowTravelersDropdown] = useState(false);
  const [searchFeedback, setSearchFeedback] = useState(false);

  const destRef = useRef<HTMLDivElement>(null);
  const dateRef = useRef<HTMLDivElement>(null);
  const travelersRef = useRef<HTMLDivElement>(null);

  useClickOutside(destRef, () => setShowDestDropdown(false));
  useClickOutside(dateRef, () => setShowDateDropdown(false));
  useClickOutside(travelersRef, () => setShowTravelersDropdown(false));

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchFeedback(true);
    setTimeout(() => setSearchFeedback(false), 2500);
  };

  const MONTHS = [
    "March 2026",
    "April 2026",
    "May 2026 (Peak Yatra)",
    "June 2026",
    "July 2026",
    "October 2026 (Festive)",
    "December 2026 (Holidays)",
  ];

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6">
      <div className="bg-white rounded-3xl shadow-xl border border-border/80 p-4 sm:p-6 transition-all duration-300 hover:shadow-2xl">
        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 pb-4 mb-4 border-b border-border/70 overflow-x-auto no-scrollbar">
          {[
            { id: "all", label: "All Experiences" },
            { id: "indian", label: "Indian Tours" },
            { id: "international", label: "International Getaways" },
            { id: "pilgrimage", label: "Sacred Pilgrimages" },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
              className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                activeTab === tab.id
                  ? "bg-primary text-white shadow-sm"
                  : "text-muted hover:text-foreground hover:bg-gray-100"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Form Fields */}
        <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 items-center">
          {/* Destination Field (5 cols on md) */}
          <div ref={destRef} className="relative md:col-span-4">
            <label className="block text-[11px] font-bold uppercase tracking-wider text-muted mb-1">
              Where to?
            </label>
            <div
              onClick={() => setShowDestDropdown(!showDestDropdown)}
              className="flex items-center gap-3 p-3 rounded-2xl border border-border hover:border-primary/40 bg-gray-50/50 hover:bg-white cursor-pointer transition-all"
            >
              <MapPin className="w-5 h-5 text-primary shrink-0" />
              <div className="flex-1 min-w-0">
                <input
                  type="text"
                  placeholder="e.g. Rajasthan, Char Dham, Swiss..."
                  value={destination}
                  onChange={(e) => {
                    setDestination(e.target.value);
                    setShowDestDropdown(true);
                  }}
                  className="w-full text-sm font-semibold text-foreground placeholder:text-muted/70 bg-transparent outline-none truncate"
                />
              </div>
              <ChevronDown className="w-4 h-4 text-muted shrink-0" />
            </div>

            {/* Destination Dropdown */}
            {showDestDropdown && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-xl border border-border p-2 z-50 max-h-64 overflow-y-auto">
                <div className="text-[10px] font-bold uppercase tracking-wider text-muted px-3 py-1">
                  Popular Destinations
                </div>
                {DESTINATION_OPTIONS.map((item, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => {
                      setDestination(item.label.split("(")[0].trim());
                      setShowDestDropdown(false);
                    }}
                    className="w-full text-left px-3 py-2 rounded-xl text-xs sm:text-sm hover:bg-primary-light flex items-center justify-between group transition-colors"
                  >
                    <div>
                      <p className="font-medium text-foreground group-hover:text-primary">
                        {item.label}
                      </p>
                      <span className="text-[11px] text-muted">{item.type}</span>
                    </div>
                    {destination === item.label.split("(")[0].trim() && (
                      <Check className="w-4 h-4 text-primary shrink-0" />
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Travel Dates Field (3 cols on md) */}
          <div ref={dateRef} className="relative md:col-span-3">
            <label className="block text-[11px] font-bold uppercase tracking-wider text-muted mb-1">
              Travel Month
            </label>
            <div
              onClick={() => setShowDateDropdown(!showDateDropdown)}
              className="flex items-center gap-3 p-3 rounded-2xl border border-border hover:border-primary/40 bg-gray-50/50 hover:bg-white cursor-pointer transition-all"
            >
              <Calendar className="w-5 h-5 text-primary shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-foreground truncate">
                  {selectedMonth}
                </p>
                <p className="text-[11px] text-muted">Flexible dates</p>
              </div>
              <ChevronDown className="w-4 h-4 text-muted shrink-0" />
            </div>

            {/* Date Dropdown */}
            {showDateDropdown && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-xl border border-border p-2 z-50">
                <div className="text-[10px] font-bold uppercase tracking-wider text-muted px-3 py-1">
                  Select Season or Month
                </div>
                {MONTHS.map((month, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => {
                      setSelectedMonth(month);
                      setShowDateDropdown(false);
                    }}
                    className="w-full text-left px-3 py-2 rounded-xl text-xs sm:text-sm hover:bg-primary-light flex items-center justify-between group transition-colors"
                  >
                    <span className="font-medium text-foreground group-hover:text-primary">
                      {month}
                    </span>
                    {selectedMonth === month && (
                      <Check className="w-4 h-4 text-primary shrink-0" />
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Guests / Travelers Counter (3 cols on md) */}
          <div ref={travelersRef} className="relative md:col-span-3">
            <label className="block text-[11px] font-bold uppercase tracking-wider text-muted mb-1">
              Guests
            </label>
            <div
              onClick={() => setShowTravelersDropdown(!showTravelersDropdown)}
              className="flex items-center gap-3 p-3 rounded-2xl border border-border hover:border-primary/40 bg-gray-50/50 hover:bg-white cursor-pointer transition-all"
            >
              <Users className="w-5 h-5 text-primary shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-foreground truncate">
                  {adults} Adults{childrenCount > 0 ? `, ${childrenCount} Kids` : ""}
                </p>
                <p className="text-[11px] text-muted">1 Room</p>
              </div>
              <ChevronDown className="w-4 h-4 text-muted shrink-0" />
            </div>

            {/* Travelers Popover */}
            {showTravelersDropdown && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-xl border border-border p-4 z-50 space-y-4 w-64">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-foreground">Adults</p>
                    <p className="text-xs text-muted">Ages 12+</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      disabled={adults <= 1}
                      onClick={() => setAdults((prev) => Math.max(1, prev - 1))}
                      className="w-7 h-7 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-gray-100 disabled:opacity-30"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="w-5 text-center text-sm font-bold">{adults}</span>
                    <button
                      type="button"
                      onClick={() => setAdults((prev) => prev + 1)}
                      className="w-7 h-7 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-gray-100"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between border-t border-border/70 pt-3">
                  <div>
                    <p className="text-sm font-semibold text-foreground">Children</p>
                    <p className="text-xs text-muted">Ages 0–11</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      disabled={childrenCount <= 0}
                      onClick={() => setChildrenCount((prev) => Math.max(0, prev - 1))}
                      className="w-7 h-7 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-gray-100 disabled:opacity-30"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="w-5 text-center text-sm font-bold">{childrenCount}</span>
                    <button
                      type="button"
                      onClick={() => setChildrenCount((prev) => prev + 1)}
                      className="w-7 h-7 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-gray-100"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                <Button
                  type="button"
                  variant="primary"
                  size="sm"
                  className="w-full justify-center"
                  onClick={() => setShowTravelersDropdown(false)}
                >
                  Done
                </Button>
              </div>
            )}
          </div>

          {/* Submit Search CTA Button (2 cols on md) */}
          <div className="md:col-span-2 pt-1 md:pt-4">
            <Button
              type="submit"
              variant="primary"
              size="lg"
              pill
              className="w-full justify-center py-3.5 h-[50px] shadow-md"
              leftIcon={<Search className="w-4 h-4" />}
            >
              Search Tours
            </Button>
          </div>
        </form>

        {/* Feedback banner when search clicked */}
        {searchFeedback && (
          <div className="mt-3 p-2.5 rounded-xl bg-primary-light border border-primary/20 text-xs text-primary flex items-center justify-between animate-slide-down">
            <span className="flex items-center gap-1.5 font-medium">
              <Sparkles className="w-4 h-4" /> Finding bespoke tours for {destination || "all top destinations"} in {selectedMonth}...
            </span>
            <span className="font-bold">Showing 24 Available Packages</span>
          </div>
        )}
      </div>
    </div>
  );
};
