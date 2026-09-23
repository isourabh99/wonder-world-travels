"use client";

import React, { useState } from "react";
import Link from "next/link";
import { X, ChevronDown, Phone, Compass, ArrowRight } from "lucide-react";
import { NavItem } from "@/types/navigation";
import { Button } from "@/components/ui/button";

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: NavItem[];
}

export const MobileDrawer: React.FC<MobileDrawerProps> = ({
  isOpen,
  onClose,
  navItems,
}) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  if (!isOpen) return null;

  const toggleAccordion = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Slide-in Drawer */}
      <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-2xl z-10 flex flex-col h-full animate-slide-down">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-border">
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white">
              <Compass className="w-4 h-4 animate-spin-slow" />
            </span>
            <span className="font-serif text-lg font-bold text-primary tracking-tight">
              Wonder World
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 text-muted hover:text-foreground transition-colors"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Nav Content */}
        <div className="flex-1 overflow-y-auto px-6 py-4 divide-y divide-border/60">
          {navItems.map((item) => {
            const isExpanded = expandedId === item.id;
            const hasChildren = item.hasMegaMenu && item.megaMenu;

            return (
              <div key={item.id} className="py-2.5">
                {hasChildren ? (
                  <div>
                    <button
                      onClick={() => toggleAccordion(item.id)}
                      className="flex items-center justify-between w-full py-2 text-left font-medium text-foreground hover:text-primary transition-colors text-base"
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-muted transition-transform duration-200 ${
                          isExpanded ? "rotate-180 text-primary" : ""
                        }`}
                      />
                    </button>

                    {isExpanded && item.megaMenu && (
                      <div className="pl-3 pr-1 py-2 space-y-4 text-sm bg-gray-50/60 rounded-xl my-2 border border-border/50">
                        {item.megaMenu.columns.map((column, colIdx) => (
                          <div key={colIdx} className="space-y-1.5">
                            <span className="text-[11px] font-bold uppercase tracking-wider text-primary">
                              {column.title}
                            </span>
                            <ul className="space-y-1 pl-1">
                              {column.items.map((subItem, sIdx) => (
                                <li key={sIdx}>
                                  <Link
                                    href={subItem.href}
                                    onClick={onClose}
                                    className="flex items-center justify-between py-1 text-xs text-muted hover:text-primary transition-colors"
                                  >
                                    <span>{subItem.label}</span>
                                    {subItem.badge && (
                                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-primary-light text-primary font-medium">
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
                            className="block p-3 rounded-xl bg-white border border-border mt-3 shadow-xs"
                          >
                            <span className="text-[10px] uppercase font-bold text-primary block">
                              Featured Deal
                            </span>
                            <p className="text-xs font-semibold text-foreground mt-0.5 line-clamp-1">
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
                    className="block py-2 text-base font-medium text-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer Actions */}
        <div className="p-6 border-t border-border bg-gray-50/80 space-y-3">
          <div className="flex items-center gap-3 text-xs text-muted">
            <Phone className="w-4 h-4 text-primary shrink-0" />
            <span>24/7 Helpline: <strong>+91 98765 43210</strong></span>
          </div>

          <Button
            variant="primary"
            size="lg"
            className="w-full justify-center"
            onClick={onClose}
          >
            Plan My Trip
          </Button>
        </div>
      </div>
    </div>
  );
};
