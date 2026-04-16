"use client";

import Link from "next/link";
import { useState } from "react";
import { WaitlistModal } from "@/components/waitlist-modal";
import { trackCtaClick } from "@/lib/analytics";

export function Nav() {
  const [modalOpen, setModalOpen] = useState(false);

  const scrollToFinalCta = () => {
    trackCtaClick("nav");
    const el = document.getElementById("final-cta");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
    else setModalOpen(true);
  };

  return (
    <>
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#0a0a0a]/80 px-6 py-5 backdrop-blur-md md:px-12">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6">
          <Link
            href="/"
            className="font-display text-xl font-bold tracking-tight text-white"
          >
            QuickGrowth
          </Link>
          <button
            type="button"
            onClick={scrollToFinalCta}
            className="h-10 whitespace-nowrap rounded-xl bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] px-5 font-display text-sm font-bold text-white shadow-[0_4px_15px_rgba(99,102,241,0.40)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(99,102,241,0.60)] active:scale-[0.97]"
          >
            Request a Free Consult
          </button>
        </div>
      </nav>
      <WaitlistModal
        open={modalOpen}
        onOpenChange={setModalOpen}
        initialEmail=""
        source="nav"
      />
    </>
  );
}
