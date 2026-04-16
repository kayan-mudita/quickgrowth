import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionShell, SectionHeader } from "@/components/ui/section-shell";
import { Eyebrow } from "@/components/ui/eyebrow";

const FAQS = [
  {
    q: "How can you do in 48 hours what consultants need 6 months for?",
    a: "We use proven playbooks. It's assembling tested parts, not inventing from scratch. We focus on the 80% that drives impact.",
  },
  {
    q: "What if our situation is unique?",
    a: "We see patterns. If you're truly unique, we'll tell you on the 30-min call and point you to the right path.",
  },
  {
    q: "What happens after 48 hours?",
    a: "The automation is live. We monitor for 30 days and train your team. Most clients book another sprint once they see the ROI.",
  },
  {
    q: "Why should we trust you?",
    a: "400+ projects. 14-20 sprints/month. 5-10x ROI typical. Never had to refund.",
  },
];

export function Faq() {
  return (
    <SectionShell id="faq" className="py-24">
      <SectionHeader
        eyebrow={<Eyebrow>FAQ</Eyebrow>}
        title="Frequently asked questions"
      />

      <Accordion
        type="single"
        collapsible
        className="mx-auto max-w-3xl divide-y divide-white/10 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]"
      >
        {FAQS.map((f, i) => (
          <AccordionItem key={f.q} value={`item-${i}`} className="border-0 px-6">
            <AccordionTrigger className="py-5 text-left font-display text-base font-semibold text-white hover:no-underline sm:text-lg">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="pb-5 text-base text-white/70">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </SectionShell>
  );
}
