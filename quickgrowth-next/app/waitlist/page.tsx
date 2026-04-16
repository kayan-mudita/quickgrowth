import type { Metadata } from "next";
import { Nav } from "@/components/sections/nav";
import { Faq } from "@/components/sections/faq";
import { WaitlistForm } from "@/components/waitlist-form";
import { Eyebrow } from "@/components/ui/eyebrow";
import { SectionShell } from "@/components/ui/section-shell";

export const metadata: Metadata = {
  title: "Request a Free Consult — QuickGrowth",
  description:
    "Book a free 30-minute consult. We'll scope one automation you could ship this week — no pitch deck.",
  robots: { index: true, follow: true },
};

const TRUST = [
  "48-hour build guarantee",
  "Pay-on-KPI available",
  "No long contracts",
  "30-day monitoring included",
];

const BULLETS = [
  {
    title: "A scoped automation plan",
    body: "Walk away with one workflow mapped end-to-end, whether or not we work together.",
  },
  {
    title: "Honest fit assessment",
    body: "If you’re not a fit, we’ll say so on the call — and point you to who is.",
  },
  {
    title: "Zero sales pressure",
    body: "No follow-up sequence. No “next steps” deck. Just the plan, in writing.",
  },
];

export default function WaitlistPage() {
  return (
    <>
      <Nav />
      <main className="flex flex-col">
        <section className="relative w-full overflow-hidden px-6 pb-16 pt-32 sm:pt-36">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/4 top-0 h-[600px] w-[600px] rounded-full bg-[#6366f1]/15 blur-[100px]" />
            <div className="absolute right-1/4 top-1/3 h-[500px] w-[500px] rounded-full bg-[#8b5cf6]/10 blur-[100px]" />
          </div>

          <div className="relative z-10 mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-start lg:gap-16">
            <div className="space-y-7">
              <Eyebrow>Free consult · 30 minutes</Eyebrow>
              <h1 className="font-display text-4xl font-bold leading-[1.05] text-white sm:text-5xl md:text-6xl">
                Ship one automation in the next{" "}
                <span className="bg-gradient-to-br from-white to-[#a5b4fc] bg-clip-text text-transparent">
                  48 hours
                </span>
                .
              </h1>
              <p className="max-w-xl text-lg text-white/70">
                Book a free consult and we&rsquo;ll scope a real AI automation
                you could ship this week — same call, same 48 hours, no pitch
                deck, no sales sequence.
              </p>

              <ul className="space-y-4 pt-2">
                {BULLETS.map((b) => (
                  <li key={b.title} className="flex items-start gap-3">
                    <svg
                      aria-hidden
                      viewBox="0 0 20 20"
                      fill="none"
                      className="mt-1 h-5 w-5 shrink-0 text-[#a5b4fc]"
                    >
                      <path
                        d="M4 10.5L8 14.5L16 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div>
                      <p className="font-display text-base font-bold text-white">
                        {b.title}
                      </p>
                      <p className="text-sm text-white/70">{b.body}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 pt-4">
                {TRUST.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-white/70"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:sticky lg:top-28">
              <WaitlistForm source="waitlist-page" />
            </div>
          </div>
        </section>

        <SectionShell className="py-16">
          <div className="mx-auto max-w-4xl rounded-2xl border border-white/10 bg-white/[0.03] p-8 text-center sm:p-10">
            <p className="font-display text-xl font-semibold leading-relaxed text-white sm:text-2xl">
              &ldquo;QuickGrowth shipped our lead-routing automation in 3 days.
              We&rsquo;d been trying to build it internally for 6 months.&rdquo;
            </p>
            <p className="mt-4 text-sm text-white/60">
              {/* TODO: replace with real testimonial attribution */}
              — VP Sales, mid-market SaaS
            </p>
          </div>
        </SectionShell>

        <Faq />
      </main>
    </>
  );
}
