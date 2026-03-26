// ─── SpringPlayground.jsx ─────────────────────────────────────────────────────
import { useMemo } from "react";
import useIsDark from "../../hooks/useIsDark";
import usePastelCycle from "../../hooks/usePastelCycle";
import BouncyEgg from "./BouncyEgg";
import BunnyDemo from "./BunnyDemo";
import Meadow from "./Meadow";
import WiggleCloud from "./WiggleCloud";
import WiggleStar from "./WiggleStar";
import FloatingPetals from "./FloatingPetals";

export default function SpringPlayground() {
  const isDark = useIsDark();
  const pastel = usePastelCycle(isDark);

  const skyBg = isDark
    ? "linear-gradient(to bottom, #020b18 0%, #0a1628 50%, #0f2040 80%, transparent 100%)"
    : "linear-gradient(to bottom, #a8d8f0 0%, #d4efff 60%, transparent 100%)";

  const colors = useMemo(
    () => ({
      title: isDark ? "#93c5fd" : "#1e3a5f",
      subtitle: isDark ? "#60a5fa" : "#2563eb",
      hint: isDark ? "#6ee7b7" : "#166534",
    }),
    [isDark],
  );

  return (
    <>
      <FloatingPetals />

      <div
        className="relative min-h-screen flex flex-col transition-colors duration-1000"
        style={{ background: pastel }}
      >
        {/* ── Sky ── */}
        <div
          className="relative w-full flex flex-col items-center pt-14 pb-32 overflow-hidden"
          style={{ background: skyBg }}
        >
          <h1
            className="text-3xl font-bold mb-1 tracking-tight z-10"
            style={{ color: colors.title }}
          >
            🌸 Spring Animation Playground
          </h1>
          <p
            className="text-sm opacity-70 z-10 mb-2"
            style={{ color: colors.subtitle }}
          >
            Micro-interactions &amp; UI polish experiments
          </p>
          <p className="text-xs opacity-50 z-10" style={{ color: colors.hint }}>
            {isDark
              ? "hover the stars · hover the flowers · click the egg"
              : "hover the clouds · hover the flowers · click the egg"}
          </p>

          {!isDark && (
            <>
              <WiggleCloud
                style={{ top: "18px", left: "6%" }}
                size="text-6xl"
              />
              <WiggleCloud
                style={{ top: "10px", left: "25%" }}
                size="text-4xl"
              />
              <WiggleCloud
                style={{ top: "22px", left: "48%" }}
                size="text-5xl"
              />
              <WiggleCloud
                style={{ top: "8px", right: "20%" }}
                size="text-4xl"
              />
              <WiggleCloud
                style={{ top: "28px", right: "5%" }}
                size="text-6xl"
              />
              <WiggleCloud
                style={{ top: "55px", left: "15%" }}
                size="text-3xl"
              />
              <WiggleCloud
                style={{ top: "60px", right: "15%" }}
                size="text-3xl"
              />
            </>
          )}

          {isDark && (
            <>
              <WiggleStar
                style={{ top: "12px", left: "8%", animationDelay: "0s" }}
                size="text-2xl"
              />
              <WiggleStar
                style={{ top: "6px", left: "20%", animationDelay: "0.4s" }}
                size="text-xl"
              />
              <WiggleStar
                style={{ top: "20px", left: "35%", animationDelay: "0.8s" }}
                size="text-2xl"
              />
              <WiggleStar
                style={{ top: "8px", left: "52%", animationDelay: "0.2s" }}
                size="text-xl"
              />
              <WiggleStar
                style={{ top: "18px", left: "65%", animationDelay: "1.0s" }}
                size="text-2xl"
              />
              <WiggleStar
                style={{ top: "5px", right: "18%", animationDelay: "0.6s" }}
                size="text-xl"
              />
              <WiggleStar
                style={{ top: "22px", right: "8%", animationDelay: "1.2s" }}
                size="text-2xl"
              />
              <WiggleStar
                style={{ top: "45px", left: "12%", animationDelay: "0.3s" }}
                size="text-base"
              />
              <WiggleStar
                style={{ top: "50px", left: "42%", animationDelay: "0.7s" }}
                size="text-base"
              />
              <WiggleStar
                style={{ top: "48px", right: "22%", animationDelay: "0.9s" }}
                size="text-base"
              />
              <WiggleStar
                style={{ top: "38px", left: "28%", animationDelay: "0.5s" }}
                size="text-base"
              />
              <WiggleStar
                style={{ top: "35px", right: "35%", animationDelay: "1.1s" }}
                size="text-base"
              />
            </>
          )}

          <span className="absolute top-4 right-[8%] text-5xl select-none pointer-events-none opacity-90">
            {isDark ? "🌙" : "☀️"}
          </span>
          {isDark && (
            <span className="absolute top-8 right-[14%] text-xl select-none pointer-events-none opacity-60">
              ✨
            </span>
          )}
        </div>

        {/* ── Meadow ── */}
        <Meadow isDark={isDark} />

        {/* ── Grass + Bunny ── */}
        <div className="relative w-full -mt-1">
          <BouncyEgg style={{ bottom: "195px", left: "8%" }} />
          <BunnyDemo isDark={isDark} />
        </div>
      </div>
    </>
  );
}
