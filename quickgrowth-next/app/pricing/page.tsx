import type { Metadata } from "next";
import { Nav } from "@/components/sections/nav";
import { Pricing } from "@/components/sections/pricing";
import { Guarantee } from "@/components/sections/guarantee";
import { Faq } from "@/components/sections/faq";
import { FinalCta } from "@/components/sections/final-cta";
import { MobileStickyCta } from "@/components/sections/mobile-sticky-cta";
import { Eyebrow } from "@/components/ui/eyebrow";

export const metadata: Metadata = {
  title: "Pricing — QuickGrowth",
  description:
    "Three ways to work with QuickGrowth: fixed-scope sprints, outcome-based deals, or ongoing retainers.",
};

export default function PricingPage() {
  return (
    <>
      <Nav />
      <main className="flex flex-col">
        <section className="relative w-full overflow-hidden px-6 pb-8 pt-32 sm:pt-36">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[#6366f1]/15 blur-[100px]" />
          </div>
          <div className="relative z-10 mx-auto w-full max-w-3xl space-y-6 text-center">
            <Eyebrow>Pricing</Eyebrow>
            <h1 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
              Pay for outcomes,{" "}
              <span className="bg-gradient-to-br from-white to-[#a5b4fc] bg-clip-text text-transparent">
                not for hours
              </span>
              .
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-white/70">
              Three engagement models. Same 48-hour build guarantee. Pick the
              one that matches your risk tolerance.
            </p>
          </div>
        </section>

        <Pricing />
        <Guarantee />
        <Faq />
        <FinalCta />
      </main>
      <MobileStickyCta />
    </>
  );
}
