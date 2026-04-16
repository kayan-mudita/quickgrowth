import type { Metadata } from "next";
import { Nav } from "@/components/sections/nav";
import { Process } from "@/components/sections/process";
import { Milestones } from "@/components/sections/milestones";
import { Guarantee } from "@/components/sections/guarantee";
import { FinalCta } from "@/components/sections/final-cta";
import { MobileStickyCta } from "@/components/sections/mobile-sticky-cta";
import { SectionShell } from "@/components/ui/section-shell";
import { Eyebrow } from "@/components/ui/eyebrow";

export const metadata: Metadata = {
  title: "How It Works — QuickGrowth",
  description:
    "See how QuickGrowth ships AI sales automation in days, not months — scoped, built, and monitored.",
};

export default function HowItWorksPage() {
  return (
    <>
      <Nav />
      <main className="flex flex-col">
        <section className="relative w-full overflow-hidden px-6 pb-16 pt-32 sm:pt-36">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[#6366f1]/15 blur-[100px]" />
          </div>
          <div className="relative z-10 mx-auto w-full max-w-3xl space-y-6 text-center">
            <Eyebrow>How it works</Eyebrow>
            <h1 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
              Scoped, shipped, and{" "}
              <span className="bg-gradient-to-br from-white to-[#a5b4fc] bg-clip-text text-transparent">
                monitored in days
              </span>
              .
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-white/70">
              No six-month discovery phase. No surprise invoices. Here&rsquo;s
              exactly what happens from consult to first shipped automation.
            </p>
          </div>
        </section>

        <Process />

        <SectionShell>
          <div className="mx-auto max-w-3xl space-y-6 text-center">
            <Eyebrow>What you get</Eyebrow>
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
              Every engagement ships with the same three things.
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
            {[
              {
                title: "A working automation",
                body: "Live in your stack, running against real data, not a demo environment.",
              },
              {
                title: "Training + handoff",
                body: "Your team can maintain, tune, and extend the flow without calling us back.",
              },
              {
                title: "30-day monitoring",
                body: "We watch it run, fix edge cases, and tune thresholds before we hand the keys over.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition-all duration-300 hover:border-white/20"
              >
                <h3 className="font-display text-xl font-bold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-white/70">{item.body}</p>
              </div>
            ))}
          </div>
        </SectionShell>

        <Milestones />
        <Guarantee />
        <FinalCta />
      </main>
      <MobileStickyCta />
    </>
  );
}
