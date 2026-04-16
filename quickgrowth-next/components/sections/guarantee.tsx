import { SectionShell } from "@/components/ui/section-shell";
import { Eyebrow } from "@/components/ui/eyebrow";

export function Guarantee() {
  return (
    <SectionShell id="guarantee" className="py-24">
      <div className="relative overflow-hidden rounded-3xl border border-[#6366f1]/30 bg-gradient-to-br from-[#6366f1]/10 via-[#8b5cf6]/5 to-transparent p-10 md:p-14">
        <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-[#6366f1]/20 blur-[80px]" />
        <div className="pointer-events-none absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-[#8b5cf6]/20 blur-[80px]" />

        <div className="relative z-10 mx-auto max-w-3xl space-y-6 text-center">
          <Eyebrow>Guaranteed results or your money back</Eyebrow>
          <h2 className="font-display text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
            Don&rsquo;t pay unless we add value.
          </h2>
          <p className="text-lg text-white/80">
            Your KPI. 48 hours to build. 30 days to prove it.
          </p>
          <p className="bg-gradient-to-br from-white to-[#a5b4fc] bg-clip-text font-display text-2xl font-bold text-transparent sm:text-3xl">
            Don&rsquo;t hit it? Don&rsquo;t pay.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-3 text-sm text-white/70 md:grid-cols-2">
            <p className="rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3">
              This is the AI frontier. You&rsquo;re early. We&rsquo;ve never had to refund.
            </p>
            <p className="rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3">
              You wouldn&rsquo;t fax a document in 2025. Your competitors stopped doing this manually months ago.
            </p>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
