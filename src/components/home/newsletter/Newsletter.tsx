"use client";

import React, { useState } from "react";
import { Mail, Check, Sparkles, Send } from "lucide-react";

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  return (
    <section className="bg-primary text-white py-20 lg:py-24 relative overflow-hidden">
      {/* Subtle radial luxury glow */}
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 rounded-full bg-white/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-96 h-96 rounded-full bg-black/20 blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-semibold uppercase tracking-wider backdrop-blur-sm">
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          <span>Private Travel Dispatch</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
          Join the Wonder World Inner Circle
        </h2>

        <p className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Receive confidential seasonal departures, exclusive helicopter charter alerts, and our biannual glossy travel lookbook before public release.
        </p>

        {subscribed ? (
          <div className="p-4 rounded-2xl bg-white/20 border border-white/30 backdrop-blur-md max-w-md mx-auto flex items-center justify-center gap-3 animate-slide-down">
            <Check className="w-5 h-5 text-emerald-300 shrink-0" />
            <span className="text-sm font-semibold text-white">
              Thank you! Check your inbox for our 2026 Lookbook.
            </span>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto pt-2"
          >
            <div className="relative w-full">
              <Mail className="w-5 h-5 text-white/60 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your personal email..."
                className="w-full pl-12 pr-4 py-3.5 rounded-full bg-white/15 border border-white/25 text-white placeholder:text-white/60 text-sm outline-none focus:bg-white/25 focus:border-white transition-all"
              />
            </div>
            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white text-primary font-bold text-sm hover:bg-gray-100 active:scale-[0.98] transition-all duration-200 cursor-pointer shadow-lg shrink-0 flex items-center justify-center gap-2"
            >
              <span>Subscribe</span>
              <Send className="w-4 h-4" />
            </button>
          </form>
        )}

        <p className="text-xs text-white/60">
          No spam ever. You can unsubscribe at any time with a single click.
        </p>
      </div>
    </section>
  );
};
