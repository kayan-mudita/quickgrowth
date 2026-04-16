import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Thanks — QuickGrowth",
  robots: { index: false, follow: false },
};

export default function ThankYou() {
  return (
    <>
      {/* Conversion pixel events — fire once the thank-you page loads */}
      <Script id="ty-conversions" strategy="afterInteractive">
        {`
          if (window.fbq) window.fbq('track', 'Lead');
          if (window.rdt) window.rdt('track', 'Lead');
          if (window.lintrk) window.lintrk('track', { conversion_id: 22395756 });
          if (window.dataLayer) window.dataLayer.push({ event: 'lead_confirmed' });
        `}
      </Script>
      <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <div className="max-w-xl space-y-6">
          <h1 className="bg-gradient-to-br from-white to-[#a5b4fc] bg-clip-text font-display text-4xl font-bold text-transparent sm:text-5xl">
            You&rsquo;re on the list
          </h1>
          <p className="text-lg text-white/70">
            We&rsquo;ll be in touch within one business day to schedule your free
            consult.
          </p>
        </div>
      </main>
    </>
  );
}
