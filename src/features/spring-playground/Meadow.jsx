// ─── components/Meadow.jsx ────────────────────────────────────────────────────
import { useMemo } from "react";
import {
    FLOWER_POSITIONS,
    FLOWER_TIMINGS,
    GRASS_COLORS,
    HILL_COLORS,
} from "../../constants/Constants";
import BloomFlower from "./BloomFlower";

export default function Meadow({ isDark }) {
  const {
    top: grassTop,
    back: hill1,
    mid: hill2,
  } = useMemo(
    () => ({
      top: isDark ? GRASS_COLORS.dark.top : GRASS_COLORS.light.top,
      back: isDark ? HILL_COLORS.dark.back : HILL_COLORS.light.back,
      mid: isDark ? HILL_COLORS.dark.mid : HILL_COLORS.light.mid,
    }),
    [isDark],
  );

  return (
    <div className="relative w-full -mb-1" style={{ height: "200px" }}>
      <svg
        viewBox="0 0 1200 200"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,200 L0,130 Q150,60 300,110 Q450,160 600,90 Q750,30 900,100 Q1050,160 1200,120 L1200,200 Z"
          fill={hill1}
        />
        <path
          d="M0,200 L0,155 Q200,90 400,140 Q550,175 700,115 Q850,60 1000,130 Q1100,165 1200,145 L1200,200 Z"
          fill={hill2}
        />
        {/* Front hill matches grassTop exactly — seamless blend with BunnyDemo */}
        <path
          d="M0,200 L0,172 Q100,138 250,163 Q400,184 550,152 Q700,122 850,158 Q1000,183 1200,168 L1200,200 Z"
          fill={grassTop}
        />
      </svg>

      {FLOWER_POSITIONS.map((f, i) => (
        <BloomFlower
          key={i}
          isDark={isDark}
          swayDuration={FLOWER_TIMINGS[i].sway}
          droopDuration={FLOWER_TIMINGS[i].droop}
          style={{ left: f.left, bottom: `${f.bottom}px` }}
        />
      ))}
    </div>
  );
}
