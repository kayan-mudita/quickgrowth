export function GradientOrbs() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Radial gradient mesh */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: [
            "radial-gradient(at 27% 37%, rgba(99,102,241,.12) 0px, transparent 50%)",
            "radial-gradient(at 97% 21%, rgba(16,185,129,.08) 0px, transparent 50%)",
            "radial-gradient(at 52% 99%, rgba(139,92,246,.10) 0px, transparent 50%)",
            "radial-gradient(at 10% 29%, rgba(245,158,11,.08) 0px, transparent 50%)",
            "radial-gradient(at 80% 50%, rgba(59,130,246,.10) 0px, transparent 50%)",
          ].join(","),
          animation: "meshMove 20s ease infinite",
        }}
      />
      {/* Floating orbs */}
      <div
        className="absolute -left-40 -top-60 h-[500px] w-[500px] rounded-full opacity-40 blur-[60px]"
        style={{
          background: "linear-gradient(45deg, #6366f1, #8b5cf6)",
          animation: "float 25s ease-in-out infinite",
        }}
      />
      <div
        className="absolute -bottom-52 -right-28 h-[400px] w-[400px] rounded-full opacity-40 blur-[60px]"
        style={{
          background: "linear-gradient(45deg, #10b981, #3b82f6)",
          animation: "float 30s ease-in-out infinite reverse",
        }}
      />
      <div
        className="absolute right-[10%] top-[40%] h-[350px] w-[350px] rounded-full opacity-40 blur-[60px]"
        style={{
          background: "linear-gradient(45deg, #f59e0b, #ef4444)",
          animation: "float 20s ease-in-out infinite",
          animationDelay: "-10s",
        }}
      />
      {/* Grid overlay with radial mask */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.03) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 50%, black 0%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 50%, black 0%, transparent 100%)",
          animation: "gridScroll 20s linear infinite",
        }}
      />
    </div>
  );
}
