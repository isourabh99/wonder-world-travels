"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import { MegaMenuData } from "@/types/navigation";
import { Badge } from "@/components/ui/badge";

interface MegaMenuProps {
  data: MegaMenuData;
  isOpen: boolean;
  onClose: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export const MegaMenu: React.FC<MegaMenuProps> = ({
  data,
  isOpen,
  onClose,
  onMouseEnter,
  onMouseLeave,
}) => {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop scrim */}
      <div
        className="fixed inset-0 top-[70px] bg-black/30 backdrop-blur-[2px] z-40 transition-opacity duration-200"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Full-width modern white panel beneath navbar */}
      <div
        className="absolute top-full left-0 right-0 w-full bg-white border-b border-border shadow-2xl z-50 animate-slide-down"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        role="region"
        aria-label="Mega Menu"
      >
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            {/* Nav Columns (takes 8-9 cols depending on promo) */}
            <div
              className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 ${
                data.promoCard ? "md:col-span-8 lg:col-span-9" : "md:col-span-12"
              }`}
            >
              {data.columns.map((column, colIdx) => (
                <div key={colIdx} className="space-y-4">
                  <h4 className="text-xs font-bold tracking-wider uppercase text-primary border-b border-border pb-2 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
                    {column.title}
                  </h4>
                  <ul className="space-y-3">
                    {column.items.map((item, itemIdx) => (
                      <li key={itemIdx}>
                        <Link
                          href={item.href}
                          onClick={onClose}
                          className="group block p-2 -mx-2 rounded-xl transition-colors duration-200 hover:bg-primary-light"
                        >
                          <div className="flex items-center justify-between gap-2">
                            <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                              {item.label}
                            </span>
                            {item.badge && (
                              <Badge
                                variant={
                                  item.badge === "Trending" || item.badge === "VIP Access"
                                    ? "primary"
                                    : "light"
                                }
                                size="sm"
                              >
                                {item.badge}
                              </Badge>
                            )}
                          </div>
                          {item.description && (
                            <p className="text-xs text-muted line-clamp-1 mt-0.5 group-hover:text-foreground/80 transition-colors">
                              {item.description}
                            </p>
                          )}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Featured Promo Card on the far right */}
            {data.promoCard && (
              <div className="md:col-span-4 lg:col-span-3">
                <div className="relative rounded-2xl overflow-hidden border border-border bg-gray-50 group hover:shadow-lg transition-all duration-300">
                  <div className="relative h-44 w-full overflow-hidden">
                    <Image
                      src={data.promoCard.imageUrl}
                      alt={data.promoCard.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 320px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 text-[11px] font-semibold tracking-wide uppercase bg-primary text-white rounded-full flex items-center gap-1 shadow-sm">
                        <Sparkles className="w-3 h-3" />
                        {data.promoCard.badge}
                      </span>
                    </div>
                    {data.promoCard.priceStart && (
                      <div className="absolute bottom-3 right-3 text-right">
                        <span className="text-[10px] uppercase text-white/80 block">From</span>
                        <span className="text-base font-bold text-white font-serif">
                          {data.promoCard.priceStart}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="p-4 space-y-2">
                    <h5 className="font-serif font-bold text-foreground group-hover:text-primary transition-colors text-base line-clamp-1">
                      {data.promoCard.title}
                    </h5>
                    <p className="text-xs text-muted line-clamp-2">
                      {data.promoCard.subtitle}
                    </p>
                    <Link
                      href={data.promoCard.href}
                      onClick={onClose}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary group-hover:text-primary-hover pt-1"
                    >
                      {data.promoCard.ctaText}
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
