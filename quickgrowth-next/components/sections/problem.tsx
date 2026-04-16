import { SectionShell } from "@/components/ui/section-shell";
import { Eyebrow } from "@/components/ui/eyebrow";

const PROBLEMS = [
  {
    tag: "Consultants",
    title: "You get a deck and a bill.",
    note: "6 months. No working automation.",
  },
  {
    tag: "In-house hire",
    title: "$150K salary. They build the wrong thing.",
    note: "By the time they ramp, the use case has changed.",
  },
  {
    tag: "DIY with tools",
    title: "Which tool? Which task first?",
    note: "Stack bloat. No ownership. Nothing ships.",
  },
  {
    tag: "Wait and see",
    title: "Does it even work? Team keeps doing manual work.",
    note: "Competitors are already shipping.",
  },
];

export function Problem() {
  return (
    <SectionShell id="problem" className="py-24">
      <div className="mb-14 space-y-4 text-center">
        <Eyebrow>The options today</Eyebrow>
        <h2 className="font-display text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
          You&rsquo;ve been thinking about AI for months.
        </h2>
        <p className="mx-auto max-w-xl text-lg text-white/70">But every option is broken:</p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {PROBLEMS.map((p) => (
          <div
            key={p.title}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur transition-all duration-300 hover:border-white/20 hover:bg-white/[0.05]"
          >
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-red-400/30 bg-red-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-red-300">
              {p.tag}
            </div>
            <h3 className="mb-2 font-display text-xl font-bold text-white">
              {p.title}
            </h3>
            <p className="text-sm text-white/60">{p.note}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 space-y-2 text-center">
        <p className="text-lg text-white/70">
          Meanwhile, your team does the same manual tasks 40 hours per week.
        </p>
        <p className="bg-gradient-to-br from-white to-[#a5b4fc] bg-clip-text font-display text-2xl font-bold text-transparent sm:text-3xl">
          There&rsquo;s a better way.
        </p>
      </div>
    </SectionShell>
  );
}
