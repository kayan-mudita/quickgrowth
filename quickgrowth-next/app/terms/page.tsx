import type { Metadata } from "next";
import { Nav } from "@/components/sections/nav";
import { SectionShell } from "@/components/ui/section-shell";

export const metadata: Metadata = {
  title: "Terms of Service — QuickGrowth",
  description: "The terms governing your use of QuickGrowth.",
  robots: { index: true, follow: true },
};

const LAST_UPDATED = "April 16, 2026";

export default function TermsPage() {
  return (
    <>
      <Nav />
      <main className="flex flex-col pt-24">
        <SectionShell>
          <div className="mx-auto max-w-3xl space-y-8 text-white/80">
            <div className="space-y-3">
              <h1 className="font-display text-4xl font-bold text-white sm:text-5xl">
                Terms of Service
              </h1>
              <p className="text-sm text-white/50">
                Last updated: {LAST_UPDATED}
              </p>
            </div>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-bold text-white">
                1. Agreement to terms
              </h2>
              <p>
                {/* TODO: replace placeholder with reviewed legal copy */}
                By accessing quickgrowth.ai or requesting a consult, you agree
                to be bound by these Terms. If you do not agree, do not use the
                site or services.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-bold text-white">
                2. Services
              </h2>
              <p>
                QuickGrowth provides AI-powered sales automation consulting and
                implementation services. Specific scope, deliverables, and fees
                are defined in a separate Statement of Work (SOW) or order form
                executed between QuickGrowth and the client.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-bold text-white">
                3. Intellectual property
              </h2>
              <p>
                All content, branding, and proprietary methodology on this site
                remain the property of QuickGrowth unless otherwise noted.
                Clients retain ownership of their own data and any work product
                explicitly assigned to them in an SOW.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-bold text-white">
                4. Disclaimers
              </h2>
              <p>
                The site and any free consultation are provided &ldquo;as
                is&rdquo; without warranties of any kind. QuickGrowth does not
                guarantee specific business outcomes unless explicitly
                documented in a signed outcome-based agreement.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-bold text-white">
                5. Limitation of liability
              </h2>
              <p>
                To the maximum extent permitted by law, QuickGrowth shall not be
                liable for any indirect, incidental, special, or consequential
                damages arising from use of the site or services.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-bold text-white">
                6. Contact
              </h2>
              <p>
                Questions about these Terms? Email{" "}
                <a
                  href="mailto:legal@quickgrowth.ai"
                  className="text-[#a5b4fc] underline-offset-4 hover:underline"
                >
                  legal@quickgrowth.ai
                </a>
                .
              </p>
            </section>
          </div>
        </SectionShell>
      </main>
    </>
  );
}
