// ─── components/WiggleCloud.jsx ───────────────────────────────────────────────
import { useState, useCallback } from "react";

export default function WiggleCloud({ style, size = "text-5xl" }) {
  const [wiggling, setWiggling] = useState(false);

  const handleHover = useCallback(() => {
    if (wiggling) return;
    setWiggling(true);
    setTimeout(() => setWiggling(false), 500);
  }, [wiggling]);

  return (
    <span
      onMouseEnter={handleHover}
      className={`absolute select-none cursor-pointer ${size} ${wiggling ? "cloud-wiggling" : ""}`}
      style={{ transition: "transform 0.1s", ...style }}
      title="boo!"
    >
      ☁️
    </span>
  );
}