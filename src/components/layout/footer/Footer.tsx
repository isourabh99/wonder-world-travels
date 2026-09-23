"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  CheckCircle2,
  Sparkles,
  Clock,
} from "lucide-react";
import { POPULAR_PACKAGE_CATEGORIES } from "@/data/popular-packages-links";

// Inline branded SVG icons for perfect reliability
const InstagramIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={`${className} fill-current`} viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const FacebookIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={`${className} fill-current`} viewBox="0 0 24 24">
    <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.578 5H18V0h-3.808C10.595 0 9 1.582 9 4.615V8z"/>
  </svg>
);

const YoutubeIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={`${className} fill-current`} viewBox="0 0 24 24">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const TwitterIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={`${className} fill-current`} viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const LinkedinIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={`${className} fill-current`} viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

export const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSubscribed(true);
    }, 700);
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full min-h-screen bg-gradient-to-b from-[#051329] via-[#071d3a] to-[#020a17] text-white relative flex flex-col justify-between overflow-hidden pt-12 sm:pt-16 pb-8 border-t-2 border-sky-500/20">
      
      {/* ========================================================
          BACKGROUND AMBIENT CELESTIAL GLOWS & ORBS
      ======================================================== */}
      <div className="absolute -top-36 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 -right-40 w-[600px] h-[600px] bg-sky-500/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute -bottom-20 left-1/3 w-[650px] h-[400px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-between relative z-10 space-y-12">
        
        {/* ========================================================
            MAIN MULTI-COLUMN NAVIGATION, NEWSLETTER & BRAND HEADQUARTERS
        ======================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Col 1: Brand, Clean Newsletter, Social Media & Contact Info (span 4) */}
          <div className="lg:col-span-4 space-y-6">
            {/* Same Logo as Navbar */}
            <Link href="/" className="group inline-flex items-center gap-3 focus:outline-none">
              <div className="relative w-24 h-12 flex items-center justify-center shrink-0">
                <Image
                  src="/logo.webp"
                  alt="Wonder World Travels logo"
                  width={180}
                  height={60}
                  className="h-12 w-auto object-contain transition-transform duration-700 group-hover:scale-105 drop-shadow-[0_0_12px_rgba(56,189,248,0.35)]"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-white leading-none">
                  Wonder World
                </span>
                <span className="text-[10px] tracking-[0.25em] uppercase font-semibold text-sky-400 pl-0.5 mt-1">
                  Luxury Travels
                </span>
              </div>
            </Link>

            <p className="text-xs text-white/70 leading-relaxed max-w-sm">
              Wonder World Travels is a premier experiential travel designer specializing in bespoke Indian holidays, sacred pilgrimage yatras, and luxury international journeys.
            </p>

            {/* Clean Newsletter Section (Without Container Background) */}
            <div className="space-y-2 pt-1">
              <h4 className="text-xs font-bold uppercase tracking-wider text-sky-400 font-sans flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-sky-400" />
                <span>Subscribe to Newsletter</span>
              </h4>
              <p className="text-[11px] text-white/60">
                Get exclusive travel deals & seasonal lookbooks directly to your inbox.
              </p>

              <AnimatePresence mode="wait">
                {isSubscribed ? (
                  <motion.div
                    key="subscribed"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center gap-2 text-xs text-emerald-300 font-medium"
                  >
                    <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
                    <span>Thank you for subscribing! Check your inbox soon.</span>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubscribe} className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="relative flex-1">
                        <Mail className="w-3.5 h-3.5 text-white/40 absolute left-3 top-3" />
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Enter your email..."
                          className="w-full pl-8 pr-3 py-2 text-xs bg-white/10 text-white placeholder:text-white/40 border border-white/20 rounded-xl focus:outline-none focus:border-sky-400 transition-colors"
                        />
                      </div>
                      <button
                        type="submit"
                        disabled={isLoading}
                        className="px-4 py-2 bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs rounded-xl transition-colors shrink-0 disabled:opacity-50 cursor-pointer"
                      >
                        {isLoading ? "..." : "Subscribe"}
                      </button>
                    </div>
                  </form>
                )}
              </AnimatePresence>
            </div>

            {/* Social Media Links */}
            <div className="space-y-2 pt-1">
              <h4 className="text-[11px] font-bold uppercase tracking-wider text-white/50 font-sans">
                Follow Us
              </h4>
              <div className="flex items-center gap-2.5">
                {[
                  { icon: InstagramIcon, href: "https://instagram.com", label: "Instagram" },
                  { icon: FacebookIcon, href: "https://facebook.com", label: "Facebook" },
                  { icon: YoutubeIcon, href: "https://youtube.com", label: "YouTube" },
                  { icon: TwitterIcon, href: "https://twitter.com", label: "Twitter" },
                  { icon: LinkedinIcon, href: "https://linkedin.com", label: "LinkedIn" },
                ].map((item, idx) => {
                  const IconComponent = item.icon;
                  return (
                    <motion.a
                      key={idx}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.15, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-8 h-8 rounded-full bg-white/10 hover:bg-sky-500 hover:text-slate-950 text-white/80 border border-white/15 flex items-center justify-center transition-all duration-300 shadow-md"
                      aria-label={item.label}
                    >
                      <IconComponent className="w-3.5 h-3.5" />
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Direct Contact Details */}
            <div className="space-y-2.5 text-xs text-white/75 pt-2 border-t border-white/10">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>23/21E, East Patel Nagar, N.D – 110008</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <a href="tel:+918588824351" className="hover:text-sky-300 transition-colors font-medium">
                  +91 85888-24351
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <a href="mailto:booking@wonderworldtravels.com" className="hover:text-sky-300 transition-colors">
                  booking@wonderworldtravels.com
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Mon – Sat: 9:00 AM – 8:00 PM IST (24/7 Helpline)</span>
              </div>
            </div>
          </div>

          {/* Col 2 (span 8): Popular Packages Directory Categories */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {POPULAR_PACKAGE_CATEGORIES.map((category) => (
              <div key={category.id} className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-sky-400 font-sans border-b border-sky-500/20 pb-1.5 flex items-center justify-between">
                  <span>{category.categoryTitle}</span>
                  <span className="text-[10px] text-white/40 font-normal">({category.links.length})</span>
                </h4>
                <ul className="space-y-2 text-xs text-white/70">
                  {category.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-sky-300 transition-colors flex items-center justify-between group/footlink py-0.5"
                      >
                        <span className="truncate group-hover/footlink:translate-x-0.5 transition-transform">
                          {link.title}
                        </span>
                        {link.badge && (
                          <span className="text-[9px] font-semibold text-sky-300 bg-sky-500/20 px-1.5 py-0.5 rounded border border-sky-400/30 uppercase shrink-0 ml-1.5">
                            {link.badge}
                          </span>
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>

        {/* ========================================================
            4. BOTTOM LEGAL, ACCREDITATION & COPYRIGHT BAR
        ======================================================== */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
            <span>&copy; {currentYear} Wonder World Travels Pvt. Ltd. All rights reserved.</span>
            <span className="hidden sm:inline text-white/30">•</span>
            <span className="text-sky-400/90 font-medium">Ministry of Tourism Recognised | IATA Accredited</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-5">
            <Link href="/privacy" className="hover:text-sky-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-sky-300 transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/booking-policy" className="hover:text-sky-300 transition-colors">
              Booking Policy
            </Link>
            <Link href="/sitemap.xml" className="hover:text-sky-300 transition-colors">
              Sitemap
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};
