import { Nav } from "@/components/sections/nav";
import { Hero } from "@/components/sections/hero";
import { Problem } from "@/components/sections/problem";
import { Solution } from "@/components/sections/solution";
import { Process } from "@/components/sections/process";
import { Milestones } from "@/components/sections/milestones";
import { Testimonials } from "@/components/sections/testimonials";
import { Pricing } from "@/components/sections/pricing";
import { Guarantee } from "@/components/sections/guarantee";
import { Faq } from "@/components/sections/faq";
import { FinalCta } from "@/components/sections/final-cta";
import { MobileStickyCta } from "@/components/sections/mobile-sticky-cta";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex flex-col">
        <Hero />
        <Problem />
        <Solution />
        <Process />
        <Milestones />
        <Testimonials />
        <Pricing />
        <Guarantee />
        <Faq />
        <FinalCta />
      </main>
      <MobileStickyCta />
    </>
  );
}
