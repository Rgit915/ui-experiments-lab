export const LIGHT_PASTELS = ["#fce4ec", "#fff9e6", "#f3e5f5", "#e8f5e9"];
export const DARK_PASTELS  = ["#1a0a0e", "#1a1700", "#120a1a", "#051a05"];

export const GRASS_COLORS = {
  light: { top: "#6dbf67", bottom: "#4a9e44" },
  dark:  { top: "#1a3a1a", bottom: "#0f2410" },
};

export const HILL_COLORS = {
  light: { back: "#86d47a", mid: "#6dbf62" },
  dark:  { back: "#14401a", mid: "#0e3014" },
};

export const FLOWER_POSITIONS = [
  { left: "8%",  bottom: 72  },
  { left: "22%", bottom: 95  },
  { left: "38%", bottom: 80  },
  { left: "56%", bottom: 100 },
  { left: "72%", bottom: 78  },
  { left: "88%", bottom: 68  },
];

// Generated once when the module loads — stable across the app lifetime
export const FLOWER_TIMINGS = Array.from({ length: FLOWER_POSITIONS.length }, () => ({
  sway:  2 + Math.random() * 1.5,
  droop: 3 + Math.random() * 2,
}));

export const PETAL_ANGLES = [0, 45, 90, 135, 180, 225, 270, 315];

export const INITIAL_ITEMS = [
  { id: 1, emoji: "🥕", left: 80  },
  { id: 2, emoji: "🥕", left: 240 },
  { id: 3, emoji: "🥕", left: 400 },
  { id: 4, emoji: "🥕", left: 560 },
];

export const STAR_FONT_SIZE = {
  "text-2xl":  "22px",
  "text-xl":   "18px",
  "text-base": "14px",
};

// Pure math utility — no React dependency
export const lerp = (a, b, t) => a + (b - a) * t;