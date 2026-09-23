"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Search, Menu, ChevronDown, Compass } from "lucide-react";
import { NAVIGATION_ITEMS } from "@/data/navigation";
import { NavItem } from "@/types/navigation";
import { Button } from "@/components/ui/button";
import { MegaMenu } from "./MegaMenu";
import { MobileDrawer } from "./MobileDrawer";
import { SearchModal } from "./SearchModal";
import { useHoverDropdown } from "@/hooks/useHoverDropdown";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { useClickOutside } from "@/hooks/useClickOutside";
import Image from "next/image";

export interface NavbarProps {
  navItems?: NavItem[];
}

export const Navbar: React.FC<NavbarProps> = ({
  navItems = NAVIGATION_ITEMS,
}) => {
  const { isScrolled } = useScrollPosition(20);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
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
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-border/80 py-3"
            : "bg-white border-b border-border py-4"
        }`}
      >
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Left: Brand Wordmark Logo */}
          <Link
            href="/"
            className="group flex items-center gap-2.5 focus:outline-none"
            onClick={closeImmediately}
          >
          <div className="relative w-24 h-10 flex items-center justify-center shrink-0">
  <Image
    src="https://i0.wp.com/www.wonderworldtravels.com/wp-content/uploads/2024/12/Untitled_design-removebg-preview-1.png?fit=500%2C500&ssl=1"
    alt="Wonder World Travels logo"
    width={240}
    height={160}
    className="w-24 h-16 object-contain transition-transform duration-700 group-hover:scale-105"
    priority
  />
</div>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-primary leading-none">
                Wonder World
              </span>
              <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-muted pl-0.5 mt-0.5">
                Luxury Travels
              </span>
            </div>
          </Link>

          {/* Center: Desktop Navigation Links */}
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
                      className={`inline-flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-full transition-all duration-200 cursor-pointer ${
                        isActive
                          ? "text-primary bg-primary-light font-semibold"
                          : "text-foreground hover:text-primary hover:bg-gray-50"
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
                      className="inline-flex items-center px-3 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-gray-50 rounded-full transition-colors"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Right: Actions (Search + CTA Button + Mobile Toggle) */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Search Icon Trigger */}
            <button
              onClick={() => setSearchModalOpen(true)}
              className="p-2 sm:p-2.5 rounded-full text-foreground hover:text-primary hover:bg-primary-light transition-all duration-200 cursor-pointer"
              aria-label="Search tours and destinations"
            >
              <Search className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            {/* Primary CTA */}
            <Button
              variant="primary"
              size="md"
              pill
              className="hidden sm:inline-flex"
              onClick={() => setSearchModalOpen(true)}
            >
              Plan My Trip
            </Button>

            {/* Mobile Hamburger Trigger */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 rounded-xl text-foreground hover:text-primary hover:bg-gray-100 transition-colors"
              aria-label="Open mobile navigation"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Desktop Full-Viewport Mega Menu */}
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

      {/* Mobile Drawer */}
      <MobileDrawer
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navItems={navItems}
      />

      {/* Search Modal */}
      <SearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
      />
    </>
  );
};
