import { SectionShell, SectionHeader } from "@/components/ui/section-shell";
import { Eyebrow } from "@/components/ui/eyebrow";

const STEPS = [
  {
    n: "01",
    title: "Discover",
    blurb: "We figure out what's slowing you down and how to measure success.",
    points: [
      "30-min assessment call",
      "Pick from proven automation menu",
      "Define owners and success metric",
    ],
  },
  {
    n: "02",
    title: "Build the solution",
    blurb:
      "We assemble and customize with components we've shipped dozens of times.",
    points: [
      "Connect to your stack",
      "Handle edge cases and alerts",
      "Ship a working draft in hours",
    ],
  },
  {
    n: "03",
    title: "Launch",
    blurb: "We turn it on, test it, and show your team how to use it.",
    points: ["Team training session", "Dashboards for visibility"],
  },
  {
    n: "04",
    title: "Monitor",
    blurb: "We watch it for 30 days and fix anything that needs fixing.",
    points: ["Prove the KPI before handoff"],
  },
];

export function Process() {
  return (
    <SectionShell id="process" className="py-24">
      <SectionHeader
        eyebrow={<Eyebrow>How it works</Eyebrow>}
        title={
          <>
            48 hours. 4 steps. <span className="text-[#a5b4fc]">Done.</span>
          </>
        }
        subtitle="Simple, fast, and scalable."
      />

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
        {STEPS.map((s) => (
          <div
            key={s.n}
            className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:border-[#6366f1]/40 hover:bg-white/[0.06]"
          >
            <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] font-display text-lg font-bold text-white shadow-[0_4px_15px_rgba(99,102,241,0.40)]">
              {s.n}
            </div>
            <h3 className="mb-2 font-display text-xl font-bold text-white">
              {s.title}
            </h3>
            <p className="mb-5 text-sm text-white/60">{s.blurb}</p>
            <ul className="mt-auto space-y-2 text-sm text-white/70">
              {s.points.map((p) => (
                <li key={p} className="flex items-start gap-2">
                  <span
                    aria-hidden
                    className="mt-[7px] inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[#a5b4fc]"
                  />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
