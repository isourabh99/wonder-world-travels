"use client";

import React from "react";
import { motion } from "framer-motion";

interface AnimatedDottedWallProps {
  className?: string;
  dotColor?: string;
  dotSize?: number;
  gap?: number;
}

/**
 * Animated Dotted Wall Component
 * Renders a sleek, high-end matrix grid of animated dots with a traveling wave effect.
 */
export const AnimatedDottedWall: React.FC<AnimatedDottedWallProps> = ({
  className = "",
  dotColor = "rgba(56, 189, 248, 0.25)",
  dotSize = 3,
  gap = 24,
}) => {
  return (
    <div
      className={`absolute inset-0 pointer-events-none select-none overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {/* SVG Dotted Grid Matrix Pattern with Animated Radial Light Wave */}
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="dotted-wall-pattern"
            width={gap}
            height={gap}
            patternUnits="userSpaceOnUse"
          >
            <circle cx={gap / 2} cy={gap / 2} r={dotSize / 2} fill={dotColor} />
          </pattern>

          {/* Radial Mask so dots fade gracefully around section margins */}
          <radialGradient id="dotted-wall-mask" cx="50%" cy="50%" r="65%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
            <stop offset="70%" stopColor="#ffffff" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Base Dotted Wall Grid */}
        <rect
          width="100%"
          height="100%"
          fill="url(#dotted-wall-pattern)"
          mask="url(#dotted-wall-mask)"
        />
      </svg>

      {/* Traveling Ambient Light Wave moving across the dotted wall */}
      <motion.div
        animate={{
          x: ["-30%", "130%"],
          y: ["-30%", "130%"],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute w-96 h-96 rounded-full bg-sky-400/20 blur-3xl"
        style={{
          top: "-10%",
          left: "-10%",
        }}
      />
    </div>
  );
};
