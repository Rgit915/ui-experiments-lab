import { useEffect, useState } from "react";

const PETALS = ["🌸", "🌼", "🌺"];
const STARS = ["✦", "✧", "⋆"];

export default function FloatingPetals({ isDark, onPetalsUpdate }) {
  const [petals, setPetals] = useState([]);
  const [stars, setStars] = useState([]);

  // 🌸 Petals
  useEffect(() => {
    if (isDark) {
      setPetals([]);
      return;
    }

    const interval = setInterval(() => {
      const newPetal = {
        id: crypto.randomUUID(),
        emoji: PETALS[Math.floor(Math.random() * PETALS.length)],
        left: Math.random() * 100,
      };

      setPetals(prev => {
        const updated = [...prev, newPetal];
        onPetalsUpdate?.(updated);
        return updated;
      });

      setTimeout(() => {
        setPetals(prev => {
          const updated = prev.filter(p => p.id !== newPetal.id);
          onPetalsUpdate?.(updated);
          return updated;
        });
      }, 6000);
    }, 600);

    return () => clearInterval(interval);
  }, [isDark, onPetalsUpdate]);

  // ✨ Stars
  useEffect(() => {
    if (!isDark) {
      setStars([]);
      return;
    }

    const generated = Array.from({ length: 40 }).map(() => ({
      id: crypto.randomUUID(),
      emoji: STARS[Math.floor(Math.random() * STARS.length)],
      top: Math.random() * 25,
      left: Math.random() * 100,
      size: 10 + Math.random() * 14,
      duration: 2 + Math.random() * 2,
      delay: Math.random() * 2,
    }));

    setStars(generated);
  }, [isDark]);

  return (
    <>
      {/* 🌸 Petals */}
      {!isDark &&
        petals.map(p => (
          <span
            key={p.id}
            className="fixed pointer-events-none z-50"
            style={{
              top: "-20px",
              left: `${p.left}vw`,
              fontSize: "16px",
              animation: "petalFall 6s linear forwards",
              opacity: isDark ? 0 : 1,
              transition: "opacity 0.8s ease",
            }}
          >
            {p.emoji}
          </span>
        ))}

      {/* ✨ Stars */}
      {isDark &&
        stars.map(s => (
          <span
            key={s.id}
            className="fixed pointer-events-none z-50 text-white"
            style={{
              top: `${s.top}vh`,
              left: `${s.left}vw`,
              fontSize: `${s.size}px`,
              animation: `starSparkle ${s.duration}s ${s.delay}s infinite`,
              opacity: isDark ? 1 : 0,
              transition: "opacity 0.8s ease",
            }}
          >
            {s.emoji}
          </span>
        ))}
    </>
  );
}