"use client";

import { useState } from "react";
import { SectionShell, SectionHeader } from "@/components/ui/section-shell";
import { Eyebrow } from "@/components/ui/eyebrow";
import { WaitlistModal } from "@/components/waitlist-modal";
import { trackCtaClick } from "@/lib/analytics";
import { cn } from "@/lib/utils";

const TIERS = [
  {
    name: "Sprint",
    blurb: "Ship a working automation this week.",
    features: [
      "One automation shipped in 2 days",
      "Scoped upfront, no surprises",
      "Includes training + 30-day monitoring",
    ],
    cta: "Start a sprint",
    featured: false,
  },
  {
    name: "Outcome",
    blurb: "Pay only on KPI success. Shared upside.",
    features: [
      "Pay only if we hit the KPI",
      "Shared upside on revenue/time saved",
      "Same 48-hour build + 30-day monitoring",
    ],
    cta: "Pitch your KPI",
    featured: true,
    badge: "Most popular",
  },
  {
    name: "Retainer",
    blurb: "Ongoing optimization and new automations monthly.",
    features: [
      "Ongoing tweaks and new flows monthly",
      "Live monitoring + alerting",
      "Monthly strategy and backlog reviews",
    ],
    cta: "Scope a retainer",
    featured: false,
  },
];

export function Pricing() {
  const [modalOpen, setModalOpen] = useState(false);
  const [source, setSource] = useState("pricing");

  const openModal = (tierName: string) => {
    setSource(`pricing:${tierName.toLowerCase()}`);
    trackCtaClick(`pricing:${tierName.toLowerCase()}`);
    setModalOpen(true);
  };

  return (
    <SectionShell id="pricing" className="py-24">
      <SectionHeader
        eyebrow={<Eyebrow>Pricing</Eyebrow>}
        title="Three ways to work together."
        subtitle="Pick the model that fits your risk tolerance and ambition."
      />

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {TIERS.map((t) => (
          <div
            key={t.name}
            className={cn(
              "relative flex h-full flex-col rounded-2xl border p-7 transition-all duration-300",
              t.featured
                ? "border-[#6366f1]/60 bg-gradient-to-br from-[#6366f1]/10 to-[#8b5cf6]/5 shadow-[0_8px_40px_rgba(99,102,241,0.20)]"
                : "border-white/10 bg-white/[0.03] hover:border-white/20",
            )}
          >
            {t.badge ? (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white shadow-[0_4px_15px_rgba(99,102,241,0.40)]">
                {t.badge}
              </span>
            ) : null}
            <h3 className="font-display text-2xl font-bold text-white">
              {t.name}
            </h3>
            <p className="mt-2 text-sm text-white/70">{t.blurb}</p>
            <ul className="mt-6 space-y-3 text-sm text-white/80">
              {t.features.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <svg
                    aria-hidden
                    viewBox="0 0 20 20"
                    fill="none"
                    className="mt-0.5 h-5 w-5 shrink-0 text-[#a5b4fc]"
                  >
                    <path
                      d="M4 10.5L8 14.5L16 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <button
              type="button"
              onClick={() => openModal(t.name)}
              className={cn(
                "mt-8 h-12 w-full rounded-xl font-display text-sm font-bold transition-all duration-300 active:scale-[0.97]",
                t.featured
                  ? "bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] text-white shadow-[0_4px_15px_rgba(99,102,241,0.40)] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(99,102,241,0.60)]"
                  : "border border-white/15 bg-white/[0.04] text-white hover:border-white/30 hover:bg-white/[0.08]",
              )}
            >
              {t.cta}
            </button>
          </div>
        ))}
      </div>

      <WaitlistModal
        open={modalOpen}
        onOpenChange={setModalOpen}
        initialEmail=""
        source={source}
      />
    </SectionShell>
  );
}
