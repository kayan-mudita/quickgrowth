import type { Metadata } from "next";
import { Nav } from "@/components/sections/nav";
import { Testimonials } from "@/components/sections/testimonials";
import { FinalCta } from "@/components/sections/final-cta";
import { MobileStickyCta } from "@/components/sections/mobile-sticky-cta";
import { SectionShell } from "@/components/ui/section-shell";
import { Eyebrow } from "@/components/ui/eyebrow";

export const metadata: Metadata = {
  title: "Who We Serve — QuickGrowth",
  description:
    "QuickGrowth builds AI sales automation for B2B revenue teams that need pipeline now, not next quarter.",
};

const PERSONAS = [
  {
    id: "founders",
    label: "Founder-led sales",
    headline: "You’re still the #1 seller — and it’s capping growth.",
    body: "We automate the top of your funnel so you stop doing data entry at 11pm and start closing the deals only you can close.",
    fit: [
      "Series A to Series B",
      "Founder is still running demos",
      "No RevOps hire yet",
    ],
  },
  {
    id: "revops",
    label: "RevOps teams",
    headline: "Your CRM is a graveyard of half-built workflows.",
    body: "We ship the automations your ops backlog has been promising for 6 months — scoped, built, and monitored in days.",
    fit: [
      "50–500 person GTM orgs",
      "HubSpot, Salesforce, or Attio stack",
      "Ops team stretched across too many tools",
    ],
  },
  {
    id: "agencies",
    label: "Agencies + consultancies",
    headline: "Client delivery is eating your margin.",
    body: "We build the automation layer your clients think you already have — white-label or co-branded, shipped on your timeline.",
    fit: [
      "Growth, demand-gen, or RevOps agencies",
      "5–50 person teams",
      "Billing hourly but wanting productized delivery",
    ],
  },
];

function Check() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 20 20"
      fill="none"
      className="mt-0.5 h-4 w-4 shrink-0 text-[#a5b4fc]"
    >
      <path
        d="M4 10.5L8 14.5L16 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function WhoWeServePage() {
  return (
    <>
      <Nav />
      <main className="flex flex-col">
        <section className="relative w-full overflow-hidden px-6 pb-16 pt-32 sm:pt-36">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[#6366f1]/15 blur-[100px]" />
          </div>
          <div className="relative z-10 mx-auto w-full max-w-3xl space-y-6 text-center">
            <Eyebrow>Who we serve</Eyebrow>
            <h1 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
              Built for teams that{" "}
              <span className="bg-gradient-to-br from-white to-[#a5b4fc] bg-clip-text text-transparent">
                need pipeline now
              </span>
              .
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-white/70">
              We&rsquo;re not for everyone — and we&rsquo;re honest about it.
              Here&rsquo;s who gets the most value from working with QuickGrowth.
            </p>
          </div>
        </section>

        <SectionShell>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {PERSONAS.map((p) => (
              <div
                key={p.id}
                id={p.id}
                className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition-all duration-300 hover:border-white/20"
              >
                <span className="font-mono text-xs uppercase tracking-[0.15em] text-[#a5b4fc]">
                  {p.label}
                </span>
                <h3 className="mt-4 font-display text-2xl font-bold leading-tight text-white">
                  {p.headline}
                </h3>
                <p className="mt-3 text-sm text-white/70">{p.body}</p>
                <div className="mt-6 border-t border-white/10 pt-5">
                  <p className="mb-3 font-mono text-xs uppercase tracking-[0.15em] text-white/50">
                    Best fit
                  </p>
                  <ul className="space-y-2 text-sm text-white/80">
                    {p.fit.map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <Check />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </SectionShell>

        <SectionShell className="py-16">
          <div className="mx-auto max-w-3xl rounded-2xl border border-white/10 bg-white/[0.03] p-8 text-center">
            <h3 className="font-display text-2xl font-bold text-white">
              Not a fit?
            </h3>
            <p className="mt-3 text-white/70">
              We&rsquo;ll tell you on the consult. If we can&rsquo;t move your
              number, we&rsquo;ll point you to someone who can — no pitch, no
              follow-up sequence.
            </p>
          </div>
        </SectionShell>

        <Testimonials />
        <FinalCta />
      </main>
      <MobileStickyCta />
    </>
  );
}
