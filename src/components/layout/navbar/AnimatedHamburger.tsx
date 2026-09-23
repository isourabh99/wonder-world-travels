"use client";

import React from "react";

interface AnimatedHamburgerProps {
  isOpen: boolean;
  onClick: () => void;
  className?: string;
}

export const AnimatedHamburger: React.FC<AnimatedHamburgerProps> = ({
  isOpen,
  onClick,
  className = "",
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`p-2.5 rounded-xl text-foreground hover:bg-gray-100/80 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20 cursor-pointer flex items-center justify-center ${className}`}
      aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
      aria-expanded={isOpen}
    >
      <div className="w-5 h-4 relative flex flex-col justify-between items-center">
        <span
          className={`w-5 h-0.5 bg-slate-800 rounded-full transition-all duration-300 ease-in-out transform origin-center ${
            isOpen ? "translate-y-1.75 rotate-45 bg-primary" : "translate-y-0 rotate-0"
          }`}
        />
        <span
          className={`w-5 h-0.5 bg-slate-800 rounded-full transition-all duration-300 ease-in-out ${
            isOpen ? "opacity-0 scale-x-0" : "opacity-100 scale-100"
          }`}
        />
        <span
          className={`w-5 h-0.5 bg-slate-800 rounded-full transition-all duration-300 ease-in-out transform origin-center ${
            isOpen ? "-translate-y-1.75 -rotate-45 bg-primary" : "translate-y-0 rotate-0"
          }`}
        />
      </div>
    </button>
  );
};
