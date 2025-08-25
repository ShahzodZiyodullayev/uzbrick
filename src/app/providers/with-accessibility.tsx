import React, { createContext, useContext, useEffect, useState } from "react";

import { a11y } from "@/shared/lib/accessibility";

interface AccessibilityContextType {
  announceToScreenReader: (message: string, priority?: "polite" | "assertive") => void;
  reducedMotion: boolean;
  highContrast: boolean;
  setHighContrast: (enabled: boolean) => void;
  fontSize: "small" | "medium" | "large";
  setFontSize: (size: "small" | "medium" | "large") => void;
}

const AccessibilityContext = createContext<AccessibilityContextType | null>(null);

interface AccessibilityProviderProps {
  children: React.ReactNode;
}

export const AccessibilityProvider: React.FC<AccessibilityProviderProps> = ({ children }) => {
  const [reducedMotion, setReducedMotion] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [fontSize, setFontSize] = useState<"small" | "medium" | "large">("medium");

  useEffect(() => {
    // Check for user's motion preferences
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    // Apply accessibility settings to document
    document.documentElement.setAttribute("data-reduced-motion", reducedMotion.toString());
    document.documentElement.setAttribute("data-high-contrast", highContrast.toString());
    document.documentElement.setAttribute("data-font-size", fontSize);
  }, [reducedMotion, highContrast, fontSize]);

  const announceToScreenReader = (message: string, priority: "polite" | "assertive" = "polite") => {
    a11y.announceToScreenReader(message, priority);
  };

  const value: AccessibilityContextType = {
    announceToScreenReader,
    reducedMotion,
    highContrast,
    setHighContrast,
    fontSize,
    setFontSize,
  };

  return <AccessibilityContext.Provider value={value}>{children}</AccessibilityContext.Provider>;
};

export const useAccessibility = () => {
  const context = useContext(AccessibilityContext);
  if (!context) {
    throw new Error("useAccessibility must be used within AccessibilityProvider");
  }
  return context;
};
