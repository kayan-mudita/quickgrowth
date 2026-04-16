import Image from "next/image";
import { SectionShell, SectionHeader } from "@/components/ui/section-shell";
import { Eyebrow } from "@/components/ui/eyebrow";

const MILESTONES = [
  { number: "400+", label: "Projects shipped" },
  { number: "14–20", label: "Sprints per month" },
  { number: "48 hrs", label: "Average build time" },
  { number: "5–10×", label: "Typical first-year ROI" },
];

const LOGOS = [
  { src: "/logos/bridgestone.svg", alt: "Bridgestone" },
  { src: "/logos/cisco.svg", alt: "Cisco" },
  { src: "/logos/forbes.svg", alt: "Forbes" },
  { src: "/logos/nrg.svg", alt: "NRG" },
  { src: "/logos/samsung.svg", alt: "Samsung" },
  { src: "/logos/swiss-re.svg", alt: "Swiss Re" },
];

export function Milestones() {
  return (
    <SectionShell id="milestones" className="py-24">
      <SectionHeader
        eyebrow={<Eyebrow>Why businesses love QuickGrowth</Eyebrow>}
        title="Proof, not promises."
      />

      <div className="mb-14 grid grid-cols-2 gap-4 md:grid-cols-4">
        {MILESTONES.map((m) => (
          <div
            key={m.label}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center"
          >
            <div className="bg-gradient-to-br from-white to-[#a5b4fc] bg-clip-text font-display text-3xl font-bold text-transparent sm:text-4xl">
              {m.number}
            </div>
            <div className="mt-2 text-sm text-white/60">{m.label}</div>
          </div>
        ))}
      </div>

      <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.15em] text-white/40">
        Trusted by teams at
      </p>
      <div className="grid grid-cols-2 items-center gap-8 opacity-60 sm:grid-cols-3 md:grid-cols-6">
        {LOGOS.map((l) => (
          <div
            key={l.alt}
            className="relative flex h-10 items-center justify-center"
          >
            <Image
              src={l.src}
              alt={l.alt}
              width={120}
              height={40}
              className="h-8 w-auto object-contain brightness-0 invert"
            />
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
