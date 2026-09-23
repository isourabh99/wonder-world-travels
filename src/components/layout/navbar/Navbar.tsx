"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, ChevronDown, Sparkles } from "lucide-react";
import { NAVIGATION_ITEMS } from "@/data/navigation";
import { NavItem } from "@/types/navigation";
import { Button, ShimmerButton } from "@/components/ui/button";
import { MegaMenu } from "./MegaMenu";
import { MobileDrawer } from "./MobileDrawer";
import { SearchModal } from "./SearchModal";
import { EnquireModal } from "./EnquireModal";
import { AnimatedHamburger } from "./AnimatedHamburger";
import { useHoverDropdown } from "@/hooks/useHoverDropdown";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { useClickOutside } from "@/hooks/useClickOutside";

export interface NavbarProps {
  navItems?: NavItem[];
}

export const Navbar: React.FC<NavbarProps> = ({
  navItems = NAVIGATION_ITEMS,
}) => {
  const { isScrolled } = useScrollPosition(20);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [enquireModalOpen, setEnquireModalOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  const {
    activeId,
    handleMouseEnter,
    handleMouseLeave,
    closeImmediately,
    toggle,
  } = useHoverDropdown({
    openDelay: 80,
    closeDelay: 200,
  });

  useClickOutside(navRef, () => {
    closeImmediately();
  });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeImmediately();
        setMobileMenuOpen(false);
        setSearchModalOpen(false);
        setEnquireModalOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [closeImmediately]);

  const activeItem = navItems.find((item) => item.id === activeId);

  return (
    <>
      <header
        ref={navRef}
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100 py-2.5"
            : "bg-white py-3.5"
        }`}
      >
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Left: Brand Logo from public/logo.webp */}
          <Link
            href="/"
            className="group flex items-center gap-2 focus:outline-none shrink-0"
            onClick={closeImmediately}
          >
            <div className="relative h-10 sm:h-12 flex items-center">
              <Image
                src="/logo.webp"
                alt="Wonder World Travels"
                width={180}
                height={60}
                className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-102"
                priority
              />
            </div>
          </Link>

          {/* Center: Desktop Navigation Links with Dropdowns */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => {
              const hasMega = item.hasMegaMenu && item.megaMenu;
              const isActive = activeId === item.id;

              return (
                <div
                  key={item.id}
                  className="relative"
                  onMouseEnter={() =>
                    hasMega ? handleMouseEnter(item.id) : closeImmediately()
                  }
                  onMouseLeave={handleMouseLeave}
                >
                  {hasMega ? (
                    <button
                      type="button"
                      onClick={() => toggle(item.id)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          toggle(item.id);
                        }
                      }}
                      aria-expanded={isActive}
                      aria-haspopup="true"
                      className={`inline-flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium rounded-full transition-all duration-200 cursor-pointer ${
                        isActive
                          ? "text-primary bg-primary-light font-semibold"
                          : "text-slate-800 hover:text-primary hover:bg-slate-50"
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          isActive ? "rotate-180 text-primary" : "text-muted"
                        }`}
                      />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={closeImmediately}
                      className="inline-flex items-center px-3.5 py-2 text-sm font-medium text-slate-800 hover:text-primary hover:bg-slate-50 rounded-full transition-colors"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Right: Actions (Search + Enquire Now Button + Mobile Animated Hamburger) */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Search Trigger Icon */}
            <button
              onClick={() => setSearchModalOpen(true)}
              className="p-2 sm:p-2.5 rounded-full text-slate-700 hover:text-primary hover:bg-primary-light transition-all duration-200 cursor-pointer"
              aria-label="Search tours and destinations"
            >
              <Search className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            {/* Enquire Now Primary CTA with Reusable Shimmer Button */}
            <ShimmerButton
              size="md"
              className="hidden sm:inline-flex"
              onClick={() => setEnquireModalOpen(true)}
            >
              Enquire Now
            </ShimmerButton>

            {/* Mobile Animated Hamburger Button (Morphs to X) */}
            <AnimatedHamburger
              isOpen={mobileMenuOpen}
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="lg:hidden"
            />
          </div>
        </div>

        {/* Desktop Mega Menu Dropdown */}
        {activeItem?.megaMenu && (
          <MegaMenu
            data={activeItem.megaMenu}
            isOpen={Boolean(activeId)}
            onClose={closeImmediately}
            onMouseEnter={() => {
              if (activeId) handleMouseEnter(activeId);
            }}
            onMouseLeave={handleMouseLeave}
          />
        )}
      </header>

      {/* Mobile Navigation Drawer */}
      <MobileDrawer
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        onOpenEnquire={() => {
          setMobileMenuOpen(false);
          setEnquireModalOpen(true);
        }}
        navItems={navItems}
      />

      {/* Search Modal */}
      <SearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
      />

      {/* Right-aligned Enquire Now Modal */}
      <EnquireModal
        isOpen={enquireModalOpen}
        onClose={() => setEnquireModalOpen(false)}
      />
    </>
  );
};
