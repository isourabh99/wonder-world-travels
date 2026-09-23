"use client";

import { useState, useRef, useCallback } from "react";

interface UseHoverDropdownOptions {
  openDelay?: number;
  closeDelay?: number;
}

export function useHoverDropdown(options: UseHoverDropdownOptions = {}) {
  const { openDelay = 60, closeDelay = 220 } = options;
  const [activeId, setActiveId] = useState<string | null>(null);
  const openTimer = useRef<NodeJS.Timeout | null>(null);
  const closeTimer = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = useCallback(
    (id: string) => {
      if (closeTimer.current) {
        clearTimeout(closeTimer.current);
        closeTimer.current = null;
      }
      if (openTimer.current) {
        clearTimeout(openTimer.current);
      }

      // If a menu is already open, swap instantly with no delay
      if (activeId !== null) {
        setActiveId(id);
      } else {
        openTimer.current = setTimeout(() => {
          setActiveId(id);
        }, openDelay);
      }
    },
    [activeId, openDelay]
  );

  const handleMouseLeave = useCallback(() => {
    if (openTimer.current) {
      clearTimeout(openTimer.current);
      openTimer.current = null;
    }
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
    }
    closeTimer.current = setTimeout(() => {
      setActiveId(null);
    }, closeDelay);
  }, [closeDelay]);

  const closeImmediately = useCallback(() => {
    if (openTimer.current) clearTimeout(openTimer.current);
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveId(null);
  }, []);

  const toggle = useCallback((id: string) => {
    setActiveId((prev) => (prev === id ? null : id));
  }, []);

  return {
    activeId,
    setActiveId,
    handleMouseEnter,
    handleMouseLeave,
    closeImmediately,
    toggle,
  };
}
