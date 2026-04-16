import { CtaInline } from "@/components/cta-inline";
import { Eyebrow } from "@/components/ui/eyebrow";
import { GradientOrbs } from "@/components/effects/gradient-orbs";

const STATS = [
  { value: "48", suffix: "hrs", label: "to build and ship a working automation" },
  { value: "400+", label: "automations deployed across SaaS, e-comm, agencies, pro services" },
  { value: "5–10×", label: "typical ROI in year one with outcome-backed sprints" },
];

export function Hero() {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden px-6 pt-28">
      <GradientOrbs />

      <div className="relative z-10 mx-auto w-full max-w-4xl space-y-8 text-center">
        <Eyebrow>
          <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-[#a5b4fc]" />
          AI automation · 48-hour sprints
        </Eyebrow>

        <h1 className="font-display text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="bg-gradient-to-br from-white to-[#a5b4fc] bg-clip-text text-transparent">
            AI-Automate the Most Painful
          </span>
          <br />
          <span className="bg-gradient-to-br from-white to-[#a5b4fc] bg-clip-text text-transparent">
            Bottlenecks in Your Business
          </span>
        </h1>

        <p className="mx-auto max-w-2xl text-lg text-white/70 sm:text-xl">
          We future-proof your business in 48 hours with AI automation most
          companies won&rsquo;t touch for 2 years.
        </p>

        <div className="mx-auto max-w-xl pt-2">
          <CtaInline source="hero" />
        </div>

        <div className="grid grid-cols-1 gap-6 pt-12 sm:grid-cols-3">
          {STATS.map((s) => (
            <div key={s.label} className="space-y-1 text-center">
              <div className="font-display text-3xl font-bold text-white sm:text-4xl">
                {s.value}
                {s.suffix ? (
                  <span className="ml-1 text-xl text-white/60">{s.suffix}</span>
                ) : null}
              </div>
              <div className="mx-auto max-w-[220px] text-sm text-white/60">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
