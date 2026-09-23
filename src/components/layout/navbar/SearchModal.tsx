"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Search, X, MapPin, Compass, ArrowRight } from "lucide-react";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const POPULAR_SEARCHES = [
  { label: "Char Dham Yatra by Helicopter", category: "Pilgrimage", href: "/pilgrimage-tours/char-dham-heli" },
  { label: "Royal Rajasthan Heritage Palaces", category: "Indian Tours", href: "/indian-tours/rajasthan" },
  { label: "Switzerland & Paris Romance", category: "International", href: "/international-tours/switzerland" },
  { label: "Kerala Houseboats & Munnar Hills", category: "Indian Tours", href: "/indian-tours/kerala" },
  { label: "Bali Luxury Pool Villas", category: "International", href: "/international-tours/bali" },
  { label: "Ayodhya Ram Mandir & Kashi Aarti", category: "Pilgrimage", href: "/pilgrimage-tours/ram-mandir" },
];

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filtered = query.trim()
    ? POPULAR_SEARCHES.filter(
        (item) =>
          item.label.toLowerCase().includes(query.toLowerCase()) ||
          item.category.toLowerCase().includes(query.toLowerCase())
      )
    : POPULAR_SEARCHES;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 sm:px-6">
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-border overflow-hidden z-10 animate-slide-down">
        {/* Search Input Bar */}
        <div className="flex items-center px-6 py-4 border-b border-border gap-3">
          <Search className="w-5 h-5 text-primary shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search tours, holy yatras, or dream destinations..."
            className="w-full text-base sm:text-lg outline-none placeholder:text-muted text-foreground bg-transparent"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="text-muted hover:text-foreground text-xs p-1"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-gray-100 text-muted hover:text-foreground transition-colors"
            aria-label="Close search"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results / Suggestions */}
        <div className="p-6 max-h-[60vh] overflow-y-auto space-y-4">
          <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-muted">
            <span>{query.trim() ? "Search Results" : "Trending Experiences"}</span>
            <span className="text-[11px] text-primary">Press ESC to exit</span>
          </div>

          <div className="space-y-2">
            {filtered.length > 0 ? (
              filtered.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.href}
                  onClick={onClose}
                  className="flex items-center justify-between p-3 rounded-2xl hover:bg-primary-light transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-gray-100 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                      {item.category === "Pilgrimage" ? (
                        <Compass className="w-4 h-4" />
                      ) : (
                        <MapPin className="w-4 h-4" />
                      )}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                        {item.label}
                      </p>
                      <span className="text-xs text-muted">{item.category}</span>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-muted group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </Link>
              ))
            ) : (
              <div className="text-center py-8 text-muted text-sm">
                No tours found matching &ldquo;{query}&rdquo;. Try &ldquo;Rajasthan&rdquo; or &ldquo;Char Dham&rdquo;.
              </div>
            )}
          </div>
        </div>

        {/* Footer info */}
        <div className="px-6 py-3 bg-gray-50 border-t border-border flex items-center justify-between text-xs text-muted">
          <span>Need custom itinerary advice?</span>
          <Link
            href="/contact"
            onClick={onClose}
            className="text-primary font-semibold hover:underline"
          >
            Speak with our travel expert →
          </Link>
        </div>
      </div>
    </div>
  );
};
