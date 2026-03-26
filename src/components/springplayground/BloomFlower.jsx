// ─── components/BloomFlower.jsx ───────────────────────────────────────────────
import { useState, useCallback } from "react";
import { PETAL_ANGLES } from "../../features/interactive/Constants";

export default function BloomFlower({ style, isDark, swayDuration, droopDuration }) {
  const [bloomed, setBloomed] = useState(false);
  const [petals,  setPetals]  = useState(false);

  const handleHover = useCallback(() => {
    setBloomed(true);
    setTimeout(() => setPetals(true), 200);
  }, []);

  const handleLeave = useCallback(() => {
    setPetals(false);
    setTimeout(() => setBloomed(false), 300);
  }, []);

  const animation = isDark
    ? `droop ${droopDuration}s ease-in-out infinite, nightGlow ${droopDuration + 0.5}s ease-in-out infinite`
    : `sway ${swayDuration}s ease-in-out infinite`;

  const petalClass = petals
    ? (isDark ? "moon-petal-in" : "petal-in")
    : bloomed ? "petal-out" : "opacity-0";

  return (
    <div
      className="absolute flex flex-col items-center cursor-pointer select-none z-10"
      style={{ ...style, animation }}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      <div className="relative w-12 h-12 flex items-center justify-center">
        {PETAL_ANGLES.map((deg, i) => (
          <span
            key={deg}
            className={`absolute text-xl pointer-events-none ${petalClass}`}
            style={{
              transform: `rotate(${deg}deg) translateY(-14px)`,
              animationDelay: petals ? `${i * 40}ms` : "0ms",
              filter: isDark ? "hue-rotate(200deg) brightness(1.3)" : "none",
            }}
          >
            🌸
          </span>
        ))}
        <span className="text-2xl z-10">
          {isDark ? (bloomed ? "🌼" : "🌷") : (bloomed ? "🌼" : "🌱")}
        </span>
      </div>
      <div
        className="w-1 rounded-full"
        style={{
          height: bloomed ? "28px" : "20px",
          transition: "height 0.3s ease",
          background: isDark ? "#4ade80" : "#22c55e",
        }}
      />
    </div>
  );
}