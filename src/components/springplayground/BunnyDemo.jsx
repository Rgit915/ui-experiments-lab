// ─── components/BunnyDemo.jsx ─────────────────────────────────────────────────
import { useEffect, useRef, useState, useCallback } from "react";
import { GRASS_COLORS, INITIAL_ITEMS, lerp } from "../../features/interactive/Constants";

// Grass blade data — generated once at module scope (stable, no re-renders)
const GRASS_BLADES = Array.from({ length: 28 }, () => ({
  left:     Math.random() * 98 + 1,
  size:     14 + Math.floor(Math.random() * 10),
  duration: 1.2 + Math.random() * 1.2,
  delay:    Math.random(),
}));

export default function BunnyDemo({ isDark }) {
  const stageRef  = useRef(null);
  const wrapRef   = useRef(null);
  const activeRef = useRef(false);
  const animRef   = useRef(null);

  const [items,          setItems]          = useState(INITIAL_ITEMS);
  const [eaten,          setEaten]          = useState(null);
  const [celebration,    setCelebration]    = useState(null);
  const [bunnyTransform, setBunnyTransform] = useState("translate(26,26)");
  const [legLTransform,  setLegLTransform]  = useState("rotate(-5,-9,17)");
  const [legRTransform,  setLegRTransform]  = useState("rotate(5,9,17)");
  const [earTransform,   setEarTransform]   = useState("translate(0,0)");

  // Cancel any in-flight rAF on unmount to prevent memory leaks
  useEffect(() => () => { if (animRef.current) cancelAnimationFrame(animRef.current); }, []);

  const hopTo = useCallback((startX, endX, duration) => {
    return new Promise((resolve) => {
      const start = performance.now();
      const hops  = Math.max(3, Math.floor(Math.abs(endX - startX) / 70));
      function frame(now) {
        const t        = Math.min((now - start) / duration, 1);
        const x        = lerp(startX, endX, t);
        const hopPhase = (t * hops) % 1;
        const hopY     = -Math.sin(hopPhase * Math.PI) * 28;
        const isUp     = hopY < -4;
        if (wrapRef.current) {
          wrapRef.current.style.left   = `${x}px`;
          wrapRef.current.style.bottom = `${50 - hopY}px`;
        }
        const tilt    = isUp ? (startX < endX ? -18 : 18) : 0;
        const squishY = isUp ? 1.15 : hopPhase > 0.85 ? 0.88 : 1;
        const squishX = isUp ? 0.9  : hopPhase > 0.85 ? 1.1  : 1;
        setBunnyTransform(`translate(26,26) rotate(${tilt}) scale(${squishX},${squishY})`);
        setLegLTransform(`rotate(${isUp ? -18 : -5},-9,17)`);
        setLegRTransform(`rotate(${isUp ?  18 :  5}, 9,17)`);
        setEarTransform(`translate(0,${isUp ? 4 : 0})`);
        if (t < 1) animRef.current = requestAnimationFrame(frame);
        else resolve();
      }
      animRef.current = requestAnimationFrame(frame);
    });
  }, []);

  const nibble = useCallback((facingDir) => {
    return new Promise((resolve) => {
      let n = 0;
      const interval = setInterval(() => {
        n++;
        const s  = n % 2 === 0 ? 1.2 : 0.95;
        const ty = n % 2 === 0 ? -4  : 2;
        setBunnyTransform(`translate(26,26) scaleX(${facingDir}) scale(1,${s}) translateY(${ty})`);
        if (n >= 5) {
          clearInterval(interval);
          setBunnyTransform(`translate(26,26) scaleX(${facingDir})`);
          resolve();
        }
      }, 120);
    });
  }, []);

  const handleMouseEnter = useCallback(async () => {
    if (activeRef.current) return;
    activeRef.current = true;
    const stage = stageRef.current;
    const wrap  = wrapRef.current;
    if (!stage || !wrap) return;

    const w         = stage.offsetWidth;
    const fromLeft  = Math.random() > 0.5;
    const facingDir = fromLeft ? 1 : -1;
    const startX    = fromLeft ? -80 : w + 80;
    const endX      = fromLeft ? w + 80 : -80;

    wrap.style.transform = `scaleX(${facingDir})`;
    wrap.style.left      = `${startX}px`;

    const newItems = items.map((it) => ({ ...it, left: Math.random() * (w - 160) + 80 }));
    setItems(newItems);

    const target  = newItems[Math.floor(Math.random() * newItems.length)];
    const targetX = target.left - 10;

    await hopTo(startX, targetX, 2600);

    setEaten(target.id);
    setCelebration({ left: target.left, emoji: "😋" });
    setTimeout(() => setCelebration(null), 900);

    await nibble(facingDir);

    setTimeout(() => {
      setEaten(null);
      setItems((prev) =>
        prev.map((it) =>
          it.id === target.id ? { ...it, left: Math.random() * (w - 160) + 80 } : it
        )
      );
    }, 1800);

    await hopTo(targetX, endX, 2200);
    setBunnyTransform("translate(26,26)");
    activeRef.current = false;
  }, [items, hopTo, nibble]);

  const { top: grassTop, bottom: grassBottom } = isDark ? GRASS_COLORS.dark : GRASS_COLORS.light;

  return (
    <div
      ref={stageRef}
      onMouseEnter={handleMouseEnter}
      className="relative w-full overflow-hidden cursor-pointer"
      style={{ height: "200px", background: `linear-gradient(to bottom, ${grassTop} 0%, ${grassBottom} 100%)` }}
    >
      {GRASS_BLADES.map((blade, i) => (
        <span
          key={i}
          className="absolute top-0 pointer-events-none select-none"
          style={{
            left:           `${blade.left}%`,
            fontSize:       `${blade.size}px`,
            animation:      `grassSway ${blade.duration}s ease-in-out infinite`,
            animationDelay: `${blade.delay}s`,
          }}
        >
          🌿
        </span>
      ))}

      {items.map((item) => (
        <span
          key={item.id}
          className={`absolute top-8 text-3xl select-none z-10 pointer-events-none
            ${eaten === item.id ? "opacity-0 scale-0" : "item-spawn"}`}
          style={{ left: `${item.left}px`, transition: "opacity 0.3s, transform 0.3s" }}
        >
          {item.emoji}
        </span>
      ))}

      {celebration && (
        <span
          className="celeb-pop absolute text-2xl pointer-events-none z-20"
          style={{ left: `${celebration.left}px`, top: "20px" }}
        >
          {celebration.emoji}
        </span>
      )}

      <div
        ref={wrapRef}
        className="absolute pointer-events-none z-10"
        style={{ left: "-80px", bottom: "50px", width: "52px", height: "52px" }}
      >
        <svg viewBox="0 0 52 52" width="52" height="52" xmlns="http://www.w3.org/2000/svg">
          <g transform={bunnyTransform}>
            <g transform={earTransform}>
              <ellipse cx="-6" cy="-18" rx="4"   ry="10" fill="#e8c4c4"/>
              <ellipse cx="-6" cy="-18" rx="2.2" ry="7"  fill="#f9a0a0"/>
              <ellipse cx="6"  cy="-18" rx="4"   ry="10" fill="#e8c4c4"/>
              <ellipse cx="6"  cy="-18" rx="2.2" ry="7"  fill="#f9a0a0"/>
            </g>
            <ellipse cx="0" cy="8"   rx="13"  ry="11" fill="#f0ece8"/>
            <ellipse cx="0" cy="10"  rx="8"   ry="7"  fill="#fdf6f2"/>
            <ellipse cx="0" cy="-6"  rx="12"  ry="11" fill="#f0ece8"/>
            <circle  cx="-4.5" cy="-8" r="2"   fill="#333"/>
            <circle  cx="4.5"  cy="-8" r="2"   fill="#333"/>
            <circle  cx="-4.5" cy="-8" r="0.8" fill="white"/>
            <circle  cx="4.5"  cy="-8" r="0.8" fill="white"/>
            <ellipse cx="0" cy="-2.5" rx="2.5" ry="1.8" fill="#f9a0a0"/>
            <line x1="-2.5" y1="-2.5" x2="-7" y2="-1"   stroke="#ccc" strokeWidth="0.8"/>
            <line x1="-2.5" y1="-2"   x2="-7" y2="-3.5" stroke="#ccc" strokeWidth="0.8"/>
            <line x1="2.5"  y1="-2.5" x2="7"  y2="-1"   stroke="#ccc" strokeWidth="0.8"/>
            <line x1="2.5"  y1="-2"   x2="7"  y2="-3.5" stroke="#ccc" strokeWidth="0.8"/>
            <ellipse cx="-9" cy="17" rx="5" ry="3.5" fill="#e8c4c4" transform={legLTransform}/>
            <ellipse cx="9"  cy="17" rx="5" ry="3.5" fill="#e8c4c4" transform={legRTransform}/>
            <ellipse cx="13" cy="6"  rx="5" ry="4.5" fill="white"/>
          </g>
        </svg>
      </div>

      <p
        className="absolute bottom-2 left-1/2 -translate-x-1/2 text-xs opacity-40 pointer-events-none select-none whitespace-nowrap"
        style={{ color: isDark ? "#a7f3d0" : "#14532d" }}
      >
        hover to wake the bunny
      </p>
    </div>
  );
}