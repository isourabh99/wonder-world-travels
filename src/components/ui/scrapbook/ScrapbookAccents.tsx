"use client";

import React from "react";
import { motion } from "framer-motion";

/**
 * 1. Flying Paper Airplane with Dashed Flight Trail
 */
export const PaperAirplaneDoodle: React.FC<{ className?: string }> = ({
  className = "w-24 h-24 text-sky-400",
}) => (
  <motion.div
    animate={{
      y: [0, -14, 0],
      x: [0, 10, 0],
      rotate: [0, 5, 0],
    }}
    transition={{
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className={`relative pointer-events-none select-none ${className}`}
  >
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Dashed Flight Path */}
      <motion.path
        d="M10 100 C 30 70, 50 80, 80 40"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeDasharray="4 4"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2.2, repeat: Infinity, repeatType: "reverse" }}
      />
      {/* Airplane Silhouette */}
      <path
        d="M80 40 L110 20 L95 55 L75 45 L80 40 Z M95 55 L70 70 L65 55 L95 55 Z"
        fill="currentColor"
        opacity="0.9"
      />
    </svg>
  </motion.div>
);

/**
 * 2. Rotating Vintage Compass Rose Doodle
 */
export const CompassRoseDoodle: React.FC<{ className?: string }> = ({
  className = "w-20 h-20 text-sky-500",
}) => (
  <motion.div
    animate={{ rotate: 360 }}
    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
    className={`pointer-events-none select-none ${className}`}
  >
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="2" strokeDasharray="6 4" opacity="0.4" />
      <circle cx="50" cy="50" r="38" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
      {/* North Star points */}
      <polygon points="50,15 56,44 85,50 56,56 50,85 44,56 15,50 44,44" fill="currentColor" opacity="0.85" />
      <polygon points="50,22 54,46 78,50 54,54 50,78 46,54 22,50 46,46" fill="#ffffff" opacity="0.9" />
      <circle cx="50" cy="50" r="4" fill="currentColor" />
    </svg>
  </motion.div>
);

/**
 * 3. Hand-Drawn Camera Doodle with Flashing Lens
 */
export const CameraDoodle: React.FC<{ className?: string }> = ({
  className = "w-16 h-16 text-slate-700",
}) => (
  <motion.div
    animate={{ scale: [1, 1.08, 1], rotate: [-3, 3, -3] }}
    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    className={`pointer-events-none select-none ${className}`}
  >
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Camera Body */}
      <rect x="15" y="30" width="70" height="50" rx="10" stroke="currentColor" strokeWidth="3" fill="none" />
      <rect x="38" y="20" width="24" height="10" rx="3" stroke="currentColor" strokeWidth="2.5" fill="none" />
      {/* Lens */}
      <circle cx="50" cy="55" r="18" stroke="currentColor" strokeWidth="3" fill="none" />
      <motion.circle
        cx="50"
        cy="55"
        r="8"
        fill="currentColor"
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />
      {/* Flash Sparkle */}
      <circle cx="72" cy="40" r="3" fill="#38bdf8" />
    </svg>
  </motion.div>
);

/**
 * 4. Vintage Passport Stamp Doodle Badge
 */
export const PassportStampDoodle: React.FC<{ text?: string; className?: string }> = ({
  text = "PASSPORT • APPROVED",
  className = "w-28 h-28 text-sky-600",
}) => (
  <motion.div
    animate={{ rotate: [-6, -2, -6] }}
    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
    className={`pointer-events-none select-none opacity-80 ${className}`}
  >
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="100" height="100" rx="20" stroke="currentColor" strokeWidth="2.5" strokeDasharray="5 3" />
      <circle cx="60" cy="60" r="38" stroke="currentColor" strokeWidth="2" />
      <path d="M 30 60 Q 60 40 90 60" stroke="currentColor" strokeWidth="1.5" />
      <text x="60" y="52" fontSize="9" fontWeight="bold" fill="currentColor" textAnchor="middle" letterSpacing="1">
        WONDER WORLD
      </text>
      <text x="60" y="74" fontSize="8" fontWeight="semibold" fill="currentColor" textAnchor="middle">
        {text}
      </text>
    </svg>
  </motion.div>
);



/**
 * 6. Scrapbook Photo Corner Tape Accent
 */
export const TapeAccent: React.FC<{ className?: string }> = ({
  className = "w-16 h-6 bg-amber-100/60 border border-amber-200/80 rotate-[-12deg]",
}) => (
  <div
    className={`absolute pointer-events-none shadow-xs backdrop-blur-xs z-20 ${className}`}
    style={{
      clipPath: "polygon(0% 0%, 95% 2%, 100% 100%, 5% 98%)",
    }}
  />
);

/**
 * 7. Sparkling Glitter Star Doodle
 */
export const SparkleDoodle: React.FC<{ className?: string }> = ({
  className = "w-8 h-8 text-sky-400",
}) => (
  <motion.div
    animate={{
      scale: [0.8, 1.2, 0.8],
      rotate: [0, 45, 0],
      opacity: [0.5, 1, 0.5],
    }}
    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
    className={`pointer-events-none select-none ${className}`}
  >
    <svg viewBox="0 0 40 40" fill="currentColor">
      <path d="M20 0 L24 16 L40 20 L24 24 L20 40 L16 24 L0 20 L16 16 Z" />
    </svg>
  </motion.div>
);

/**
 * 8. Floating Hot Air Balloon Doodle
 */
export const HotAirBalloonDoodle: React.FC<{ className?: string }> = ({
  className = "w-20 h-24 text-sky-400",
}) => (
  <motion.div
    animate={{
      y: [0, -16, 0],
      rotate: [-3, 3, -3],
    }}
    transition={{
      duration: 7,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className={`pointer-events-none select-none ${className}`}
  >
    <svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Balloon Envelope */}
      <path
        d="M 50 10 C 20 10, 10 35, 25 65 C 35 85, 42 90, 50 90 C 58 90, 65 85, 75 65 C 90 35, 80 10, 50 10 Z"
        stroke="currentColor"
        strokeWidth="3"
        fill="none"
      />
      {/* Stripes */}
      <path d="M 50 10 C 35 30, 35 70, 50 90" stroke="currentColor" strokeWidth="2" strokeDasharray="3 3" />
      <path d="M 50 10 C 65 30, 65 70, 50 90" stroke="currentColor" strokeWidth="2" strokeDasharray="3 3" />
      {/* Basket Ropes */}
      <path d="M 42 90 L 44 102 M 58 90 L 56 102" stroke="currentColor" strokeWidth="2" />
      {/* Basket */}
      <rect x="42" y="102" width="16" height="12" rx="3" stroke="currentColor" strokeWidth="2.5" fill="none" />
      {/* Small Cloud */}
      <motion.path
        d="M 10 110 C 15 105, 25 105, 30 110 C 35 110, 40 115, 35 120 L 10 120 Z"
        fill="currentColor"
        opacity="0.3"
        animate={{ x: [-5, 5, -5] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
    </svg>
  </motion.div>
);

/**
 * 9. Hand-Drawn Orbiting Globe Doodle
 */
export const GlobeDoodle: React.FC<{ className?: string }> = ({
  className = "w-20 h-20 text-sky-500",
}) => (
  <motion.div
    animate={{ rotate: [-8, 8, -8] }}
    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
    className={`pointer-events-none select-none ${className}`}
  >
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="2.5" strokeDasharray="6 3" />
      <ellipse cx="50" cy="50" rx="40" ry="16" stroke="currentColor" strokeWidth="2" opacity="0.7" />
      <line x1="50" y1="10" x2="50" y2="90" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
      <motion.circle
        cx="78"
        cy="36"
        r="4"
        fill="#38bdf8"
        animate={{ scale: [1, 1.4, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </svg>
  </motion.div>
);

/**
 * 10. Hand-Drawn Animated Pencil Highlight Circle
 */
export const PencilHighlightCircle: React.FC<{ className?: string }> = ({
  className = "w-32 h-16 text-sky-400",
}) => (
  <svg className={`pointer-events-none ${className}`} viewBox="0 0 160 80" fill="none">
    <motion.path
      d="M 15 40 C 15 15, 80 10, 145 25 C 155 45, 120 70, 40 68 C 10 65, 5 35, 60 20 C 100 10, 140 30, 150 45"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
    />
  </svg>
);

/**
 * 11. Vintage Scrapbook Sticker Badge
 */
export const ExplorerBadgeDoodle: React.FC<{ text?: string; className?: string }> = ({
  text = "WONDER • CERTIFIED",
  className = "w-24 h-24 text-sky-500",
}) => (
  <motion.div
    animate={{ rotate: 360 }}
    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
    className={`pointer-events-none select-none ${className}`}
  >
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <polygon
        points="50,5 57,15 69,10 72,22 85,22 83,35 95,40 88,51 97,60 87,69 92,81 79,84 79,97 67,94 61,105 50,97 39,105 33,94 21,97 21,84 8,81 13,69 3,60 12,51 5,40 17,35 15,22 28,22 31,10 43,15"
        stroke="currentColor"
        strokeWidth="2"
        fill="currentColor"
        fillOpacity="0.08"
      />
      <circle cx="50" cy="50" r="32" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
      <text x="50" y="53" fontSize="7" fontWeight="bold" fill="currentColor" textAnchor="middle" letterSpacing="0.8">
        {text}
      </text>
    </svg>
  </motion.div>
);

/**
 * 12. Hand-Drawn Curved Arrow Pointer Doodle
 */
export const CurvedArrowDoodle: React.FC<{ className?: string }> = ({
  className = "w-20 h-20 text-sky-400",
}) => (
  <svg className={`pointer-events-none ${className}`} viewBox="0 0 100 100" fill="none">
    <motion.path
      d="M 15 20 Q 75 10 65 70 L 50 55 M 65 70 L 78 58"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
    />
  </svg>
);

/**
 * 13. Hand-Drawn Vintage Luggage Suitcase Doodle
 */
export const SuitcaseDoodle: React.FC<{ className?: string }> = ({
  className = "w-16 h-16 text-slate-700",
}) => (
  <motion.div
    animate={{ y: [0, -6, 0], rotate: [-2, 2, -2] }}
    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    className={`pointer-events-none select-none ${className}`}
  >
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="15" y="35" width="70" height="50" rx="8" stroke="currentColor" strokeWidth="3" />
      <path d="M 40 35 L 40 22 C 40 18, 60 18, 60 22 L 60 35" stroke="currentColor" strokeWidth="2.5" />
      <line x1="38" y1="35" x2="38" y2="85" stroke="currentColor" strokeWidth="2" strokeDasharray="3 3" />
      <line x1="62" y1="35" x2="62" y2="85" stroke="currentColor" strokeWidth="2" strokeDasharray="3 3" />
      {/* Animated Luggage Tag */}
      <motion.path
        d="M 62 45 L 75 52 L 72 58 L 62 50 Z"
        fill="#38bdf8"
        animate={{ rotate: [0, 15, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </svg>
  </motion.div>
);

/**
 * 14. Hand-Drawn Himalayan Mountain & Sun Doodle
 */
export const MountainSunDoodle: React.FC<{ className?: string }> = ({
  className = "w-28 h-20 text-sky-600",
}) => (
  <motion.div
    animate={{ opacity: [0.85, 1, 0.85] }}
    transition={{ duration: 3, repeat: Infinity }}
    className={`pointer-events-none select-none ${className}`}
  >
    <svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Sun Rays */}
      <circle cx="60" cy="30" r="12" fill="#f59e0b" opacity="0.9" />
      <line x1="60" y1="10" x2="60" y2="15" stroke="#f59e0b" strokeWidth="2" />
      <line x1="42" y1="18" x2="46" y2="22" stroke="#f59e0b" strokeWidth="2" />
      <line x1="78" y1="18" x2="74" y2="22" stroke="#f59e0b" strokeWidth="2" />
      {/* Peaks */}
      <path d="M 10 70 L 45 25 L 70 50 L 95 18 L 115 70 Z" stroke="currentColor" strokeWidth="3" fill="none" strokeLinejoin="round" />
      <path d="M 45 25 L 50 38 M 95 18 L 92 32" stroke="currentColor" strokeWidth="2" />
    </svg>
  </motion.div>
);
