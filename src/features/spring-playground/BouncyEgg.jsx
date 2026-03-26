// ─── components/BouncyEgg.jsx ─────────────────────────────────────────────────
import { useRef, useState, useCallback } from "react";

export default function BouncyEgg({ style }) {
  const btnRef   = useRef(null);
  const audioRef = useRef(null);

  const [bouncing,   setBouncing]   = useState(false);
  const [hatched,    setHatched]    = useState(false);
  const [clickCount, setClickCount] = useState(0);

  const spawnConfetti = useCallback(() => {
    const emojis = ["🌸", "🌼", "✨", "🐣", "🌺", "💛"];
    const rect   = btnRef.current.getBoundingClientRect();
    for (let i = 0; i < 14; i++) {
      const el       = document.createElement("div");
      el.innerText   = emojis[Math.floor(Math.random() * emojis.length)];
      const angle    = Math.random() * 360;
      const distance = 50 + Math.random() * 80;
      const x        = Math.cos((angle * Math.PI) / 180) * distance;
      const y        = Math.sin((angle * Math.PI) / 180) * distance;
      el.style.cssText = `
        position:fixed; left:${rect.left + rect.width / 2}px; top:${rect.top + rect.height / 2}px;
        font-size:${12 + Math.random() * 14}px; pointer-events:none; z-index:9999;
        transition:transform 0.7s ease-out,opacity 0.7s ease-out;
        transform:translate(0,0); opacity:1;
      `;
      document.body.appendChild(el);
      requestAnimationFrame(() => {
        el.style.transform = `translate(${x}px,${y}px)`;
        el.style.opacity   = "0";
      });
      setTimeout(() => el.remove(), 800);
    }
  }, []);

  const handleClick = useCallback(() => {
    audioRef.current?.play().catch(() => {});
    setBouncing(true);
    setTimeout(() => setBouncing(false), 400);
    spawnConfetti();
    setClickCount((prev) => {
      const next = prev + 1;
      if (next >= 3) {
        setHatched(true);
        setTimeout(() => { setHatched(false); setClickCount(0); }, 2000);
        return 0;
      }
      return next;
    });
  }, [spawnConfetti]);

  return (
    <>
      <audio
        ref={audioRef}
        src="https://assets.mixkit.co/sfx/preview/mixkit-select-click-1109.mp3"
        preload="auto"
      />
      <div className="absolute flex flex-col items-center gap-1 z-10" style={style}>
        <button
          ref={btnRef}
          onClick={handleClick}
          className={`text-5xl bg-transparent border-none cursor-pointer select-none p-0 leading-none
            ${bouncing ? "egg-bouncing" : ""} ${hatched ? "egg-hatching" : ""}`}
          title="click me!"
        >
          {hatched ? "🐣" : "🥚"}
        </button>
        {clickCount > 0 && !hatched && (
          <span className="text-xs text-green-700 dark:text-green-300 font-medium opacity-70">
            {clickCount === 1 ? "tap again..." : "one more..."}
          </span>
        )}
      </div>
    </>
  );
}