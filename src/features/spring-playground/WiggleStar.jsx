// ─── components/WiggleStar.jsx ────────────────────────────────────────────────
import { useCallback, useState } from "react";
import { STAR_FONT_SIZE } from "../../constants/Constants";

export default function WiggleStar({ style, size = "text-2xl" }) {
  const [twinkling, setTwinkling] = useState(false);

  const handleHover = useCallback(() => {
    if (twinkling) return;
    setTwinkling(true);
    setTimeout(() => setTwinkling(false), 600);
  }, [twinkling]);

  return (
    <span
      onMouseEnter={handleHover}
      className={`absolute select-none cursor-pointer star-float ${twinkling ? "star-twinkling" : ""}`}
      style={{
        color: "white",
        opacity: 0.8,
        fontSize: STAR_FONT_SIZE[size] ?? "14px",
        ...style,
      }}
      title="✨"
    >
      ✦
    </span>
  );
}
