// Shared Motion (formerly Framer Motion) animation variants.
// Centralizing these keeps every page/component's motion consistent
// and makes future timing/easing tweaks a one-file change.

// Page-level transition used by every route in App.jsx
export const pageTransition = {
  initial: { opacity: 0, x: -100 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 100 },
  transition: { duration: 0.5, type: "tween", ease: "easeInOut" },
};

// Simple fade + rise, used for headings, avatars, cards entering the viewport
export const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

// Wrap a list/grid container with this, then give each child `fadeInUp`
// (as `item`) to get a staggered "cascade" reveal effect.
export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

// Subtle lift used on hoverable cards (project cards, skill/experience cards)
export const hoverLift = {
  whileHover: { y: -6, scale: 1.03 },
  whileTap: { scale: 0.97 },
  transition: { type: "spring", stiffness: 300, damping: 20 },
};

// Gentle press feedback for buttons/icons
export const tapScale = {
  whileHover: { scale: 1.15 },
  whileTap: { scale: 0.9 },
  transition: { type: "spring", stiffness: 400, damping: 15 },
};
