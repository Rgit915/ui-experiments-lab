// ─── hooks/usePastelCycle.js ──────────────────────────────────────────────────
import { useEffect, useState } from "react";
import { DARK_PASTELS, LIGHT_PASTELS } from "../constants/Constants";

export default function usePastelCycle(isDark) {
  const colors = isDark ? DARK_PASTELS : LIGHT_PASTELS;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Reset to index 0 on mode switch to avoid flashing a stale color
    setIndex(0);
    const interval = setInterval(
      () => setIndex((i) => (i + 1) % colors.length),
      2000
    );
    return () => clearInterval(interval);
  }, [isDark, colors.length]);

  return colors[index];
}