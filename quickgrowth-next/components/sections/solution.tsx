import Image from "next/image";
import { SectionShell, SectionHeader } from "@/components/ui/section-shell";
import { Eyebrow } from "@/components/ui/eyebrow";

const SOLUTIONS = [
  {
    title: "Sales automation lead flow",
    blurb: "Leads flow from source to booked.",
    svg: "/support-sales.svg",
    tag: "Sales",
  },
  {
    title: "Support tickets auto-routed to the right queues",
    blurb: "Tickets triaged and routed before coffee.",
    svg: "/support-routing.svg",
    tag: "Support",
  },
  {
    title: "Sales growth pipeline",
    blurb: "Momentum builds through each stage.",
    svg: "/support-growth.svg",
    tag: "Growth",
  },
  {
    title: "Data automation cleanup flow",
    blurb: "Messy data in, clean systems out.",
    svg: "/support-data.svg",
    tag: "Data",
  },
];

export function Solution() {
  return (
    <SectionShell id="solution" className="py-24">
      <SectionHeader
        eyebrow={<Eyebrow>What we build</Eyebrow>}
        title="AI solutions that take your business out of the stone age."
        subtitle="We build automation that saves hours, cuts costs, and increases output."
      />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {SOLUTIONS.map((s) => (
          <div
            key={s.title}
            className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:border-[#6366f1]/40 hover:bg-white/[0.06]"
          >
            <div className="mb-4 flex items-center justify-between">
              <span className="inline-flex rounded-full border border-[#6366f1]/30 bg-[#6366f1]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-[#a5b4fc]">
                {s.tag}
              </span>
            </div>
            <div className="relative mb-5 aspect-[16/9] w-full overflow-hidden rounded-xl bg-gradient-to-br from-white/[0.03] to-white/[0.01]">
              <Image
                src={s.svg}
                alt={s.title}
                fill
                className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <h3 className="mb-2 font-display text-xl font-bold text-white">
              {s.title}
            </h3>
            <p className="text-sm text-white/60">{s.blurb}</p>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
