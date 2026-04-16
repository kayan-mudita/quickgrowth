import { CtaInline } from "@/components/cta-inline";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center px-6 py-24">
        <div className="w-full max-w-2xl space-y-8 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#6366f1]/30 bg-[#6366f1]/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.05em] text-[#a5b4fc]">
            Phase 1 scaffold
          </span>
          <h1 className="bg-gradient-to-br from-white to-[#a5b4fc] bg-clip-text font-display text-5xl font-bold leading-[1.1] text-transparent sm:text-6xl">
            QuickGrowth
          </h1>
          <p className="mx-auto max-w-lg text-lg text-white/70">
            Sales AI automation for modern B2B teams. Next.js + Tailwind + shadcn/ui
            foundation is live. Section ports coming in Phase 2.
          </p>
          <div className="mx-auto max-w-xl">
            <CtaInline source="home:hero" />
          </div>
        </div>
      </main>
    </>
  );
}
