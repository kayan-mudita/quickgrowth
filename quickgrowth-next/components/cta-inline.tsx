"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { WaitlistModal } from "@/components/waitlist-modal";
import { trackCtaClick } from "@/lib/analytics";

interface CtaInlineProps {
  source: string;
  buttonLabel?: string;
  placeholder?: string;
  className?: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function CtaInline({
  source,
  buttonLabel = "Request a Free Consult",
  placeholder = "you@company.com",
  className = "",
}: CtaInlineProps) {
  const [email, setEmail] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [error, setError] = useState(false);

  const handleClick = () => {
    if (!EMAIL_RE.test(email.trim())) {
      setError(true);
      setTimeout(() => setError(false), 2500);
      return;
    }
    trackCtaClick(source);
    setModalOpen(true);
  };

  return (
    <>
      <div
        className={`flex w-full flex-col gap-3 sm:flex-row sm:items-center ${className}`}
      >
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={error ? "Please enter a valid email" : placeholder}
          aria-invalid={error}
          className={`h-12 flex-1 bg-white/[0.06] ${error ? "border-red-400/70 ring-2 ring-red-400/20" : ""}`}
        />
        <button
          type="button"
          onClick={handleClick}
          className="h-12 whitespace-nowrap rounded-xl bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] px-6 font-display text-base font-bold text-white shadow-[0_4px_15px_rgba(99,102,241,0.40)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(99,102,241,0.60)] active:scale-[0.97]"
        >
          {buttonLabel}
        </button>
      </div>

      <WaitlistModal
        open={modalOpen}
        onOpenChange={setModalOpen}
        initialEmail={email}
        source={source}
      />
    </>
  );
}
