"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { X, ChevronDown, Phone, ArrowRight, Sparkles } from "lucide-react";
import { NavItem } from "@/types/navigation";
import { Button, ShimmerButton } from "@/components/ui/button";
import {
  CompassRoseDoodle,
  PaperAirplaneDoodle,
  SparkleDoodle,
  AnimatedDottedWall,
} from "@/components/ui/scrapbook";

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenEnquire?: () => void;
  navItems: NavItem[];
}

export const MobileDrawer: React.FC<MobileDrawerProps> = ({
  isOpen,
  onClose,
  onOpenEnquire,
  navItems,
}) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  if (!isOpen) return null;

  const toggleAccordion = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Dimmed Overlay */}
      <div
        className="fixed inset-0 bg-slate-950/50 backdrop-blur-xs transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Slide-in Mobile Drawer */}
      <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-2xl z-50 flex flex-col h-full animate-slide-left border-l border-border overflow-hidden">
        {/* Animated Dotted Wall Background inside Drawer */}
        <AnimatedDottedWall className="opacity-30 z-0 pointer-events-none" dotSize={2} gap={18} />

        {/* Floating Doodle Accents */}
        <CompassRoseDoodle className="absolute bottom-20 right-4 w-20 h-20 text-sky-500/20 pointer-events-none z-0" />
        <PaperAirplaneDoodle className="absolute top-16 left-4 w-16 h-16 text-sky-400/25 pointer-events-none z-0" />

        {/* Header with logo.webp & Close Button */}
        <div className="flex items-center justify-between flex-nowrap px-4 sm:px-6 py-3.5 border-b border-border bg-slate-50 shrink-0 relative z-10">
          <Link href="/" onClick={onClose} className="flex items-center shrink-0">
            <Image
              src="/logo.webp"
              alt="Wonder World Travels"
              width={140}
              height={45}
              className="h-9 w-auto object-contain"
            />
          </Link>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 hover:text-slate-950 transition-colors focus:outline-none shrink-0 cursor-pointer border border-slate-200 shadow-xs"
            aria-label="Close navigation menu"
          >
            <X className="w-5 h-5 stroke-[2.5] text-slate-800" />
          </button>
        </div>

        {/* Scrollable Nav Items Accordion */}
        <div className="flex-1 overflow-y-auto px-5 py-3 divide-y divide-border/60 relative z-10">
          {navItems.map((item) => {
            const isExpanded = expandedId === item.id;
            const hasChildren = item.hasMegaMenu && item.megaMenu;

            return (
              <div key={item.id} className="py-2.5">
                {hasChildren ? (
                  <div>
                    <button
                      onClick={() => toggleAccordion(item.id)}
                      className="flex items-center justify-between w-full py-2 text-left font-medium text-slate-800 hover:text-primary transition-colors text-base"
                    >
                      <span className="flex items-center gap-1.5">
                        {item.label}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-muted transition-transform duration-200 ${
                          isExpanded ? "rotate-180 text-primary" : ""
                        }`}
                      />
                    </button>

                    {isExpanded && item.megaMenu && (
                      <div className="pl-3 pr-2 py-3 space-y-4 text-sm bg-sky-50/60 rounded-2xl my-2 border border-sky-100 relative">
                        {item.megaMenu.columns.map((column, colIdx) => (
                          <div key={colIdx} className="space-y-1.5">
                            <span className="text-[11px] font-bold uppercase tracking-wider text-primary flex items-center gap-1">
                              <SparkleDoodle className="w-3 h-3 text-sky-500" />
                              {column.title}
                            </span>
                            <ul className="space-y-1 pl-1">
                              {column.items.map((subItem, sIdx) => (
                                <li key={sIdx}>
                                  <Link
                                    href={subItem.href}
                                    onClick={onClose}
                                    className="flex items-center justify-between py-1.5 text-xs text-slate-700 hover:text-primary font-medium transition-colors"
                                  >
                                    <span>{subItem.label}</span>
                                    {subItem.badge && (
                                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-primary-light text-primary font-semibold">
                                        {subItem.badge}
                                      </span>
                                    )}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}

                        {item.megaMenu.promoCard && (
                          <Link
                            href={item.megaMenu.promoCard.href}
                            onClick={onClose}
                            className="block p-3 rounded-xl bg-white border border-border mt-2 shadow-xs hover:border-primary/40 transition-colors"
                          >
                            <span className="text-[10px] uppercase font-bold text-primary block">
                              Featured Deal
                            </span>
                            <p className="text-xs font-semibold text-slate-900 mt-0.5 line-clamp-1">
                              {item.megaMenu.promoCard.title}
                            </p>
                            <span className="text-xs text-primary font-medium inline-flex items-center gap-1 mt-1">
                              {item.megaMenu.promoCard.ctaText} <ArrowRight className="w-3 h-3" />
                            </span>
                          </Link>
                        )}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="block py-2 text-base font-medium text-slate-800 hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer Helpline & Enquire CTA */}
        <div className="p-5 border-t border-border bg-slate-50 space-y-3 relative z-10">
          <div className="flex items-center gap-2.5 text-xs text-slate-600">
            <Phone className="w-4 h-4 text-primary shrink-0" />
            <span>24/7 Helpline: <a href="tel:+918588824351" className="font-bold text-slate-900 hover:text-primary transition-colors">+91 85888-24351</a></span>
          </div>

          <ShimmerButton
            fullWidth
            size="lg"
            onClick={() => {
              if (onOpenEnquire) onOpenEnquire();
              else onClose();
            }}
          >
            Enquire Now
          </ShimmerButton>
        </div>
      </div>
    </div>
  );
};
