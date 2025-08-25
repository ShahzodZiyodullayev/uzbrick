// Accessibility utilities for focus management and ARIA attributes
export const a11y = {
  // Focus management utilities
  trapFocus: (element: HTMLElement) => {
    const focusableElements = element.querySelectorAll(
      'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select, [tabindex]:not([tabindex="-1"])',
    );
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key === "Tab") {
        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement.focus();
            e.preventDefault();
          }
        }
      }
    };

    element.addEventListener("keydown", handleTabKey);
    return () => element.removeEventListener("keydown", handleTabKey);
  },

  // Screen reader announcements
  announceToScreenReader: (message: string, priority: "polite" | "assertive" = "polite") => {
    const announcement = document.createElement("div");
    announcement.setAttribute("aria-live", priority);
    announcement.setAttribute("aria-atomic", "true");
    announcement.setAttribute("class", "sr-only");
    announcement.textContent = message;

    document.body.appendChild(announcement);

    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  },

  // Generate unique IDs for ARIA attributes
  generateId: (prefix = "a11y") => {
    return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
  },

  // Keyboard navigation helpers
  handleKeyboardNavigation: (e: KeyboardEvent, onEnter?: () => void, onSpace?: () => void) => {
    if (e.key === "Enter" && onEnter) {
      e.preventDefault();
      onEnter();
    }
    if (e.key === " " && onSpace) {
      e.preventDefault();
      onSpace();
    }
  },

  // Check if element is visible to screen readers
  isVisibleToScreenReader: (element: HTMLElement): boolean => {
    const style = window.getComputedStyle(element);
    return !(
      style.display === "none" ||
      style.visibility === "hidden" ||
      style.opacity === "0" ||
      element.getAttribute("aria-hidden") === "true"
    );
  },

  // Color contrast checking utility
  getContrastRatio: (color1: string, color2: string): number => {
    const getLuminance = (color: string) => {
      const rgb = color.match(/\d+/g);
      if (!rgb) return 0;
      const [r, g, b] = rgb.map(c => {
        const val = parseInt(c) / 255;
        return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
      });
      return 0.2126 * r + 0.7152 * g + 0.0722 * b;
    };

    const lum1 = getLuminance(color1);
    const lum2 = getLuminance(color2);
    const brightest = Math.max(lum1, lum2);
    const darkest = Math.min(lum1, lum2);

    return (brightest + 0.05) / (darkest + 0.05);
  },
};

// Common ARIA patterns
export const ariaPatterns = {
  button: {
    role: "button",
    tabIndex: 0,
  },

  link: {
    role: "link",
    tabIndex: 0,
  },

  heading: (level: 1 | 2 | 3 | 4 | 5 | 6) => ({
    role: "heading",
    "aria-level": level,
  }),

  list: {
    role: "list",
  },

  listItem: {
    role: "listitem",
  },

  navigation: {
    role: "navigation",
  },

  main: {
    role: "main",
    id: "main-content",
  },

  banner: {
    role: "banner",
  },

  contentinfo: {
    role: "contentinfo",
  },

  complementary: {
    role: "complementary",
  },

  region: (label: string) => ({
    role: "region",
    "aria-label": label,
  }),
};
