"use client";

import React from "react";
import { Sparkles } from "lucide-react";

export interface ShimmerButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  icon?: React.ReactNode;
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
}

export const ShimmerButton: React.FC<ShimmerButtonProps> = ({
  children = "Enquire Now",
  icon = <Sparkles className="w-4 h-4 text-sky-300 shrink-0 animate-pulse" />,
  size = "md",
  fullWidth = false,
  className = "",
  type = "button",
  ...props
}) => {
  const sizeClasses = {
    sm: "text-xs px-3.5 py-2 gap-1.5",
    md: "text-sm px-5 py-2.5 gap-2",
    lg: "text-base px-6 py-3.5 gap-2.5",
  };

  return (
    <button
      type={type}
      className={`inline-flex items-center justify-center flex-row whitespace-nowrap font-semibold rounded-full shadow-md text-white transition-all duration-300 hover:scale-103 active:scale-97 cursor-pointer animate-shimmer-btn ${
        sizeClasses[size]
      } ${fullWidth ? "w-full" : ""} ${className}`}
      {...props}
    >
      {icon && <span className="inline-flex items-center shrink-0">{icon}</span>}
      <span className="whitespace-nowrap font-medium tracking-wide">{children}</span>
    </button>
  );
};
