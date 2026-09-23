import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, ArrowRight, ShieldCheck, HeartHandshake, CheckCircle2 } from "lucide-react";
import { Button, ShimmerButton } from "@/components/ui/button";
import {
  MountainSunDoodle,
  TapeAccent,
  CurvedArrowDoodle,
  AnimatedDottedWall,
} from "@/components/ui/scrapbook";

export const PilgrimageHighlight: React.FC = () => {
  return (
    <section id="pilgrimage" className="py-20 lg:py-24 bg-primary-light border-y border-primary/15 relative overflow-hidden">
      {/* Animated Dotted Wall Background */}
      <AnimatedDottedWall className="opacity-60" />

      {/* Scrapbook Vector Accents */}
      <MountainSunDoodle className="absolute top-8 left-10 w-28 h-20 text-sky-600/70 hidden lg:block z-0" />
      <CurvedArrowDoodle className="absolute bottom-12 right-12 w-20 h-20 text-sky-500/60 hidden xl:block z-0" />

      {/* Decorative background watermark */}
      <div className="absolute -right-20 -bottom-20 opacity-5 pointer-events-none font-serif text-[280px] font-bold text-primary select-none">
        ॐ
      </div>

      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <div className="relative h-[380px] sm:h-[460px] w-full">
                <Image
                  src="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80"
                  alt="Kedarnath Temple Yatra"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                
                {/* Floating highlight badge */}
                <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-lg border border-primary/20 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <span className="text-xs font-bold text-primary uppercase tracking-wider">
                    2026 Yatra Bookings Open
                  </span>
                </div>

                {/* Bottom caption */}
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                  <span className="text-xs font-medium uppercase tracking-wider text-sky-300">
                    Sacred Himalayan Sanctuary
                  </span>
                  <h4 className="font-serif text-2xl font-bold text-white">
                    Kedarnath & Badrinath Helicopter Yatra
                  </h4>
                  <p className="text-xs text-gray-200">
                    VIP Darshan passes, 5-star mountain lodges, doctor & oxygen support on-board.
                  </p>
                </div>
              </div>
            </div>

            {/* Inset floating mini card */}
            <div className="hidden sm:flex absolute -bottom-6 -right-4 bg-white p-4 rounded-2xl shadow-xl border border-border items-center gap-3 max-w-xs">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-foreground">Govt. Authorized Partner</p>
                <p className="text-[11px] text-muted">Direct helipad boarding passes</p>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Pilgrimage Highlights */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider shadow-xs">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Sanatan & Sacred Circuits</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-primary tracking-tight leading-tight">
              Devotion without hardship.{" "}
              <span className="text-foreground block">
                Sacred Yatras with VIP care.
              </span>
            </h2>

            <p className="text-muted text-base sm:text-lg leading-relaxed">
              We specialize in dignified, worry-free pilgrimage yatras tailored for elders and families. Experience spiritual tranquility with priority darshan, dedicated tour managers, and satvik catering.
            </p>

            {/* Inclusions Feature List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                "VIP Darshan Passes & Queue Jumps",
                "Helicopter Transfers to Kedarnath & Yamunotri",
                "Pure Sattvic Vegetarian Meals Daily",
                "Wheelchair & Senior Citizen Attendants",
                "Certified Vedic Pujari Arrangements",
                "24/7 Medical & Oxygen Support",
              ].map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-medium text-foreground">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Link href="/pilgrimage-tours">
                <ShimmerButton
                  size="lg"
                  icon={<ArrowRight className="w-4 h-4 text-white shrink-0" />}
                >
                  Explore Char Dham 2026
                </ShimmerButton>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  pill
                  className="w-full sm:w-auto bg-white"
                >
                  Request Yatra Brochure
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
