"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const ALL_ASSETS_TO_PRELOAD = {
  images: [
    "/logo.webp",
    "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1920&q=85",
    "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1920&q=85",
    "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1920&q=85",
    "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1920&q=85",
    "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1920&q=85",
    "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1920&q=85",
    "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1476703993599-0035a21b17a9?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1501555088652-021faa106b9b?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
  ],
  videos: [
    "https://videos.pexels.com/video-files/4458316/4458316-hd_1920_1080_25fps.mp4",
    "https://videos.pexels.com/video-files/2491284/2491284-hd_1920_1080_30fps.mp4",
    "https://videos.pexels.com/video-files/4125867/4125867-hd_1920_1080_24fps.mp4",
    "https://videos.pexels.com/video-files/3015510/3015510-hd_1920_1080_24fps.mp4",
    "https://videos.pexels.com/video-files/3571264/3571264-hd_1920_1080_30fps.mp4",
    "https://videos.pexels.com/video-files/3763286/3763286-hd_1920_1080_25fps.mp4",
  ],
};

export const WelcomeSplash: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Lock scroll during initial splash
    document.body.style.overflow = "hidden";

    const totalCount = ALL_ASSETS_TO_PRELOAD.images.length + ALL_ASSETS_TO_PRELOAD.videos.length;
    let loadedCount = 0;

    const handleLoaded = () => {
      loadedCount++;
      const currentProgress = Math.min(100, Math.round((loadedCount / totalCount) * 100));
      setProgress(currentProgress);
      if (loadedCount >= totalCount) {
        setTimeout(() => {
          setIsLoading(false);
          document.body.style.overflow = "";
        }, 500);
      }
    };

    // Preload Images
    ALL_ASSETS_TO_PRELOAD.images.forEach((url) => {
      const img = new window.Image();
      img.src = url;
      img.onload = handleLoaded;
      img.onerror = handleLoaded;
    });

    // Preload Videos
    ALL_ASSETS_TO_PRELOAD.videos.forEach((url) => {
      const video = document.createElement("video");
      video.preload = "auto";
      video.src = url;
      video.oncanplaythrough = handleLoaded;
      video.onerror = handleLoaded;
    });

    // Fallback maximum safety timeout (3.5 seconds max)
    const maxTimer = setTimeout(() => {
      setProgress(100);
      setIsLoading(false);
      document.body.style.overflow = "";
    }, 3500);

    return () => {
      clearTimeout(maxTimer);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          key="welcome-splash"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            y: "-100%",
            scale: 0.98,
            transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-[99999] bg-white flex flex-col items-center justify-center overflow-hidden select-none text-slate-900"
        >
          {/* Subtle Ambient Sky Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-sky-50/80 rounded-full blur-3xl pointer-events-none -z-10" />

          {/* Center Stage Container */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 space-y-6 max-w-lg mx-auto">
            
            {/* Exact Logo Image Container with Motion Reveal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.9,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative flex flex-col items-center justify-center"
            >
              {/* Subtle Backlight Glow */}
              <motion.div
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-sky-300/30 rounded-full blur-2xl pointer-events-none"
              />

              {/* Exact Logo Image from public/logo.webp */}
              <div className="relative w-64 sm:w-80 h-32 sm:h-40 flex items-center justify-center">
                <Image
                  src="/logo.webp"
                  alt="Wonder World Travels"
                  width={360}
                  height={180}
                  className="w-full h-full object-contain mix-blend-multiply drop-shadow-sm"
                  priority
                />
              </div>
            </motion.div>

            {/* Typography Animation below Logo */}
            <div className="space-y-1.5 overflow-hidden">
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
                className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-slate-800"
              >
                Welcome to Wonder World
              </motion.p>

              <motion.p
                initial={{ opacity: 0, letterSpacing: "0.15em" }}
                animate={{ opacity: 1, letterSpacing: "0.35em" }}
                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.35em] text-sky-600"
              >
                Experiential Luxury Travels
              </motion.p>
            </div>

            {/* Live Asset Loading Progress Bar */}
            <div className="space-y-2 w-56 sm:w-72">
              <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden relative shadow-xs border border-slate-200/60">
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-red-500 via-amber-400 via-emerald-400 via-sky-400 to-indigo-600 rounded-full shadow-[0_0_8px_rgba(56,189,248,0.5)]"
                />
              </div>

              <div className="flex items-center justify-between text-[11px] font-semibold text-slate-500 px-1">
                <span>Preloading Media Assets</span>
                <span className="text-sky-600 font-bold">{progress}%</span>
              </div>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
