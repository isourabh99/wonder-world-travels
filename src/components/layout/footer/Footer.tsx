"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  Award,
  HeartHandshake,
  Compass,
  MapPin,
  Phone,
  Mail,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Clock,
} from "lucide-react";

// Inline branded SVG icons for perfect reliability
const InstagramIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const FacebookIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.578 5H18V0h-3.808C10.595 0 9 1.582 9 4.615V8z"/>
  </svg>
);

const YoutubeIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const TwitterIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
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
            1. TOP TRUST & ACCREDITATION PILLARS
        ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-5 rounded-3xl bg-white/[0.04] border border-white/10 backdrop-blur-md shadow-2xl"
        >
          <div className="flex items-center gap-3.5 p-2">
            <div className="w-12 h-12 rounded-2xl bg-sky-500/15 border border-sky-400/30 flex items-center justify-center text-sky-400 shrink-0 shadow-inner">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white tracking-wide">100% Financial Protection</h4>
              <p className="text-xs text-white/60">Govt. accredited & insured bookings</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-2">
            <div className="w-12 h-12 rounded-2xl bg-sky-500/15 border border-sky-400/30 flex items-center justify-center text-sky-400 shrink-0 shadow-inner">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white tracking-wide">Award-Winning Tours</h4>
              <p className="text-xs text-white/60">Over 45,000+ satisfied travelers</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-2">
            <div className="w-12 h-12 rounded-2xl bg-sky-500/15 border border-sky-400/30 flex items-center justify-center text-sky-400 shrink-0 shadow-inner">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white tracking-wide">24/7 Dedicated Support</h4>
              <p className="text-xs text-white/60">Round-the-clock trip concierge</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-2">
            <div className="w-12 h-12 rounded-2xl bg-sky-500/15 border border-sky-400/30 flex items-center justify-center text-sky-400 shrink-0 shadow-inner">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white tracking-wide">Tailored Itineraries</h4>
              <p className="text-xs text-white/60">Curated by native local guides</p>
            </div>
          </div>
        </motion.div>

        {/* ========================================================
            2. INTEGRATED LUXURY NEWSLETTER SUITE
        ======================================================== */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-blue-950/70 via-[#0a274e]/80 to-blue-950/70 border border-sky-500/30 p-6 sm:p-10 backdrop-blur-xl shadow-2xl"
        >
          {/* Subtle inner accent glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-sky-400/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left copy & perks */}
            <div className="lg:col-span-7 space-y-3.5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/15 border border-sky-400/30 text-sky-300 text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>Private Travel Dispatch & Lookbook</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight">
                Join the Wonder World Inner Circle
              </h3>

              <p className="text-white/75 text-sm sm:text-base leading-relaxed max-w-xl">
                Receive confidential seasonal departures, exclusive helicopter charter alerts, unpublished holiday itineraries, and our annual luxury lookbook before public release.
              </p>

              {/* Newsletter Benefit Pills */}
              <div className="flex flex-wrap items-center gap-2 pt-2 text-xs text-sky-200/80 font-medium">
                <span className="bg-white/[0.06] border border-white/10 px-2.5 py-1 rounded-lg flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Weekly Curated Deals
                </span>
                <span className="bg-white/[0.06] border border-white/10 px-2.5 py-1 rounded-lg flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Private Jet Charters
                </span>
                <span className="bg-white/[0.06] border border-white/10 px-2.5 py-1 rounded-lg flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> VIP Lounge Access
                </span>
              </div>
            </div>

            {/* Right form input */}
            <div className="lg:col-span-5 w-full">
              <AnimatePresence mode="wait">
                {isSubscribed ? (
                  <motion.div
                    key="subscribed"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="p-5 rounded-2xl bg-emerald-950/60 border border-emerald-500/40 backdrop-blur-md flex items-center gap-3.5"
                  >
                    <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" />
                    <div>
                      <h5 className="text-sm font-bold text-white">You&apos;re Officially on the VIP List!</h5>
                      <p className="text-xs text-white/70 mt-0.5">
                        Check your inbox for our 2026 digital lookbook & welcome privileges.
                      </p>
                    </div>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubscribe}
                    className="space-y-2.5"
                  >
                    <div className="relative flex flex-col sm:flex-row items-center gap-2 bg-white/10 p-1.5 rounded-2xl border border-white/20 focus-within:border-sky-400/80 focus-within:ring-2 focus-within:ring-sky-500/30 transition-all">
                      <div className="relative flex-1 w-full flex items-center pl-3">
                        <Mail className="w-4 h-4 text-white/50 shrink-0" />
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Enter your personal email..."
                          className="w-full pl-2.5 pr-3 py-2.5 bg-transparent text-sm text-white placeholder:text-white/50 outline-none"
                        />
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        disabled={isLoading}
                        className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-sm tracking-wide transition-colors flex items-center justify-center gap-2 cursor-pointer shrink-0 shadow-lg shadow-sky-500/25 disabled:opacity-70"
                      >
                        {isLoading ? (
                          <div className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                        ) : (
                          <>
                            <span>Subscribe</span>
                            <ArrowRight className="w-4 h-4" />
                          </>
                        )}
                      </motion.button>
                    </div>

                    <div className="flex items-center justify-between text-[11px] text-white/50 px-2">
                      <span>Zero spam. Direct dispatch only.</span>
                      <Link href="/privacy" className="hover:text-white underline transition-colors">
                        Privacy Policy
                      </Link>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        {/* ========================================================
            3. MAIN MULTI-COLUMN NAVIGATION & BRAND HEADQUARTERS
        ======================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pt-4">
          
          {/* Col 1: Brand & Contact Info (span 4) */}
          <div className="lg:col-span-4 space-y-5">
            {/* Same Logo as Navbar */}
            <Link href="/" className="group inline-flex items-center gap-3 focus:outline-none">
              <div className="relative w-24 h-12 flex items-center justify-center shrink-0">
                <Image
                  src="https://i0.wp.com/www.wonderworldtravels.com/wp-content/uploads/2024/12/Untitled_design-removebg-preview-1.png?fit=500%2C500&ssl=1"
                  alt="Wonder World Travels logo"
                  width={240}
                  height={160}
                  className="w-24 h-16 object-contain transition-transform duration-700 group-hover:scale-105 drop-shadow-[0_0_12px_rgba(56,189,248,0.35)]"
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

            <p className="text-sm text-white/70 leading-relaxed max-w-sm">
              Wonder World Travels is a premier experiential travel designer specializing in bespoke Indian holidays, sacred pilgrimage yatras, and luxury international journeys.
            </p>

            {/* Direct Contact Details */}
            <div className="space-y-2.5 text-xs text-white/75 pt-1">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>Connaught Place, Central Wing, New Delhi 110001, India</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <span>+91 (011) 4567 8900 / +91 98765 43210</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <span>concierge@wonderworldtravels.com</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Mon – Sat: 9:00 AM – 8:00 PM IST (24/7 Helpline for On-Tour Guests)</span>
              </div>
            </div>

            {/* Social Media Links with hover animation */}
            <div className="flex items-center gap-3 pt-2">
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
                    className="w-9 h-9 rounded-full bg-white/10 hover:bg-sky-500 hover:text-slate-950 text-white/80 border border-white/15 flex items-center justify-center transition-all duration-300 shadow-md"
                    aria-label={item.label}
                  >
                    <IconComponent className="w-4 h-4" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Col 2: Indian Tours (span 2) */}
          <div className="lg:col-span-2 space-y-3.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-sky-400 font-sans">
              Indian Circuits
            </h4>
            <ul className="space-y-2.5 text-xs text-white/70">
              <li>
                <Link href="/indian-tours/rajasthan" className="hover:text-sky-300 transition-colors">
                  Royal Rajasthan Forts
                </Link>
              </li>
              <li>
                <Link href="/indian-tours/kerala" className="hover:text-sky-300 transition-colors">
                  Kerala Backwaters
                </Link>
              </li>
              <li>
                <Link href="/indian-tours/kashmir" className="hover:text-sky-300 transition-colors">
                  Kashmir Valley Paradise
                </Link>
              </li>
              <li>
                <Link href="/indian-tours/golden-triangle" className="hover:text-sky-300 transition-colors">
                  Golden Triangle Heritage
                </Link>
              </li>
              <li>
                <Link href="/indian-tours/andaman" className="hover:text-sky-300 transition-colors">
                  Andaman Coral Islands
                </Link>
              </li>
              <li>
                <Link href="/indian-tours/himachal" className="hover:text-sky-300 transition-colors">
                  Himachal Mountain Haven
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Pilgrimage Yatra (span 2) */}
          <div className="lg:col-span-2 space-y-3.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-sky-400 font-sans">
              Sacred Yatra
            </h4>
            <ul className="space-y-2.5 text-xs text-white/70">
              <li>
                <Link href="/pilgrimage/char-dham" className="hover:text-sky-300 transition-colors">
                  Char Dham Helicopter
                </Link>
              </li>
              <li>
                <Link href="/pilgrimage/kedarnath" className="hover:text-sky-300 transition-colors">
                  Kedarnath & Badrinath
                </Link>
              </li>
              <li>
                <Link href="/pilgrimage/varanasi" className="hover:text-sky-300 transition-colors">
                  Varanasi Ganga Aarti
                </Link>
              </li>
              <li>
                <Link href="/pilgrimage/ayodhya" className="hover:text-sky-300 transition-colors">
                  Ayodhya Ram Mandir
                </Link>
              </li>
              <li>
                <Link href="/pilgrimage/vaishno-devi" className="hover:text-sky-300 transition-colors">
                  Vaishno Devi VIP Darshan
                </Link>
              </li>
              <li>
                <Link href="/pilgrimage/tirupati" className="hover:text-sky-300 transition-colors">
                  Tirupati Balaji Express
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: International Escapes (span 2) */}
          <div className="lg:col-span-2 space-y-3.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-sky-400 font-sans">
              International
            </h4>
            <ul className="space-y-2.5 text-xs text-white/70">
              <li>
                <Link href="/international-tours/switzerland" className="hover:text-sky-300 transition-colors">
                  Swiss Panoramic Rails
                </Link>
              </li>
              <li>
                <Link href="/international-tours/bali" className="hover:text-sky-300 transition-colors">
                  Bali Luxury Villas
                </Link>
              </li>
              <li>
                <Link href="/international-tours/maldives" className="hover:text-sky-300 transition-colors">
                  Maldives Overwater Resort
                </Link>
              </li>
              <li>
                <Link href="/international-tours/dubai" className="hover:text-sky-300 transition-colors">
                  Dubai & Desert Safari
                </Link>
              </li>
              <li>
                <Link href="/international-tours/singapore" className="hover:text-sky-300 transition-colors">
                  Singapore Marvels
                </Link>
              </li>
              <li>
                <Link href="/international-tours/vietnam" className="hover:text-sky-300 transition-colors">
                  Vietnam & Phu Quoc
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Travel Styles & Experiences (span 2) */}
          <div className="lg:col-span-2 space-y-3.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-sky-400 font-sans">
              Travel Styles
            </h4>
            <ul className="space-y-2.5 text-xs text-white/70">
              <li>
                <Link href="/styles/couples" className="hover:text-sky-300 transition-colors">
                  Couples & Honeymoon
                </Link>
              </li>
              <li>
                <Link href="/styles/family" className="hover:text-sky-300 transition-colors">
                  Family Multi-Gen Tours
                </Link>
              </li>
              <li>
                <Link href="/styles/friends" className="hover:text-sky-300 transition-colors">
                  Friends & Adventure
                </Link>
              </li>
              <li>
                <Link href="/styles/solo" className="hover:text-sky-300 transition-colors">
                  Solo Mindful Travel
                </Link>
              </li>
              <li>
                <Link href="/styles/seniors" className="hover:text-sky-300 transition-colors">
                  Seniors Comfort Trips
                </Link>
              </li>
              <li>
                <Link href="/styles/charters" className="hover:text-sky-300 transition-colors">
                  Private Jet & Heli Charters
                </Link>
              </li>
            </ul>
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
