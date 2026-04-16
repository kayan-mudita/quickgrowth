import { SectionShell, SectionHeader } from "@/components/ui/section-shell";
import { Eyebrow } from "@/components/ui/eyebrow";

const TESTIMONIALS = [
  {
    name: "Alex Chen",
    initials: "AC",
    role: "CEO at TechFlow Solutions",
    quote:
      "We were paying a VA $3K/month to enter lead data. QuickGrowth automated it in 48 hours. Now that VA handles customer calls instead.",
    stars: 5,
  },
  {
    name: "Sarah M.",
    initials: "SM",
    role: "Operations Manager at NexaCorp",
    quote:
      "Our ops team spent 15 hours/week triaging tickets. Now it's done automatically before they clock in. Saved us a full headcount.",
    stars: 5,
  },
  {
    name: "David Reynolds",
    initials: "DR",
    role: "Head of Sales at GrowthPeak",
    quote:
      "Our reps were researching prospects for 3+ hours daily. QuickGrowth cut that to zero. They're on twice as many calls now.",
    stars: 5,
  },
  {
    name: "Priya Patel",
    initials: "PP",
    role: "Customer Success Lead at SupportHive",
    quote:
      "Customer support is now seamless. Our response time improved drastically, and satisfaction levels are at an all-time high.",
    stars: 5,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5 text-[#f59e0b]" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-4 w-4"
          aria-hidden
        >
          <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.9l-5.2 2.7 1-5.8L1.5 7.7l5.9-.9z" />
        </svg>
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <SectionShell id="testimonials" className="py-24">
      <SectionHeader
        eyebrow={<Eyebrow>Testimonials</Eyebrow>}
        title="Why businesses love our AI automation."
      />

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {TESTIMONIALS.map((t) => (
          <figure
            key={t.name}
            className="flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.02] p-6"
          >
            <div>
              <Stars count={t.stars} />
              <blockquote className="mt-4 text-base leading-relaxed text-white/80">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
            </div>
            <figcaption className="mt-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] font-display text-sm font-bold text-white">
                {t.initials}
              </div>
              <div>
                <div className="font-display text-sm font-bold text-white">
                  {t.name}
                </div>
                <div className="text-xs text-white/60">{t.role}</div>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </SectionShell>
  );
}
