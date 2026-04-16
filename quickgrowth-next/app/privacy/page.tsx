import type { Metadata } from "next";
import { Nav } from "@/components/sections/nav";
import { SectionShell } from "@/components/ui/section-shell";

export const metadata: Metadata = {
  title: "Privacy Policy — QuickGrowth",
  description: "How QuickGrowth collects, uses, and protects your data.",
  robots: { index: true, follow: true },
};

const LAST_UPDATED = "April 16, 2026";

export default function PrivacyPage() {
  return (
    <>
      <Nav />
      <main className="flex flex-col pt-24">
        <SectionShell>
          <div className="mx-auto max-w-3xl space-y-8 text-white/80">
            <div className="space-y-3">
              <h1 className="font-display text-4xl font-bold text-white sm:text-5xl">
                Privacy Policy
              </h1>
              <p className="text-sm text-white/50">
                Last updated: {LAST_UPDATED}
              </p>
            </div>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-bold text-white">
                1. Information we collect
              </h2>
              <p>
                {/* TODO: confirm with legal — placeholder covers typical B2B waitlist data */}
                We collect information you provide directly when you request a
                consult or join our waitlist, including your name, work email,
                company name, and any other details you choose to share. We also
                collect technical data automatically such as IP address, browser
                type, and pages viewed.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-bold text-white">
                2. How we use your information
              </h2>
              <p>
                We use your information to schedule consults, deliver services,
                respond to inquiries, send relevant product updates, and improve
                the QuickGrowth experience. We do not sell your personal data.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-bold text-white">
                3. Analytics and advertising
              </h2>
              <p>
                We use analytics and advertising pixels from Google, Meta,
                LinkedIn, Reddit, and Microsoft Clarity to measure campaign
                performance and understand site usage. You can opt out of
                interest-based advertising through each provider&rsquo;s
                opt-out tools.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-bold text-white">
                4. Data retention
              </h2>
              <p>
                We retain your information for as long as your account is active
                or as needed to provide services, comply with legal obligations,
                resolve disputes, and enforce agreements.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-bold text-white">
                5. Your rights
              </h2>
              <p>
                Depending on your jurisdiction, you may have the right to
                access, correct, delete, or port your personal data. To exercise
                these rights, contact us at{" "}
                <a
                  href="mailto:privacy@quickgrowth.ai"
                  className="text-[#a5b4fc] underline-offset-4 hover:underline"
                >
                  privacy@quickgrowth.ai
                </a>
                .
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-2xl font-bold text-white">
                6. Contact
              </h2>
              <p>
                Questions about this policy? Email{" "}
                <a
                  href="mailto:privacy@quickgrowth.ai"
                  className="text-[#a5b4fc] underline-offset-4 hover:underline"
                >
                  privacy@quickgrowth.ai
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
