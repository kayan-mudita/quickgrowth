import { CtaInline } from "@/components/cta-inline";
import { Eyebrow } from "@/components/ui/eyebrow";

export function FinalCta() {
  return (
    <section
      id="final-cta"
      className="relative w-full overflow-hidden px-6 pb-32 pt-24 sm:pb-24"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[#6366f1]/15 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-3xl space-y-8 text-center">
        <Eyebrow>One last step</Eyebrow>
        <h2 className="font-display text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
          Let AI do the work so you can{" "}
          <span className="bg-gradient-to-br from-white to-[#a5b4fc] bg-clip-text text-transparent">
            scale faster
          </span>
          .
        </h2>
        <p className="mx-auto max-w-xl text-lg text-white/70">
          Stop losing deals to slow ops — get your free automation plan.
        </p>

        <div className="mx-auto max-w-xl pt-2">
          <CtaInline source="final-cta" />
        </div>
      </div>
    </section>
  );
}
