"use client";

import { useEffect, useState } from "react";
import { trackCtaClick } from "@/lib/analytics";

export function MobileStickyCta() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const finalCta = document.getElementById("final-cta");
    if (!finalCta) return;
    const io = new IntersectionObserver(
      (entries) => setVisible(!entries[0].isIntersecting),
      { threshold: 0.1 },
    );
    io.observe(finalCta);
    return () => io.disconnect();
  }, []);

  const handleClick = () => {
    trackCtaClick("mobile-sticky");
    const el = document.getElementById("final-cta");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <div
      aria-hidden={!visible}
      className="pointer-events-none fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-[#0a0a0a]/90 px-4 py-3 backdrop-blur-md transition-opacity duration-300 md:hidden"
      style={{
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      <button
        type="button"
        onClick={handleClick}
        className="h-12 w-full whitespace-nowrap rounded-xl bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] px-6 font-display text-base font-bold text-white shadow-[0_4px_15px_rgba(99,102,241,0.40)] active:scale-[0.97]"
      >
        Request a Free Consult
      </button>
    </div>
  );
}
