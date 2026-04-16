"use client";

import Link from "next/link";
import { trackCtaClick } from "@/lib/analytics";

export function Nav() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#0a0a0a]/80 px-6 py-5 backdrop-blur-md md:px-12">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6">
        <Link
          href="/"
          className="font-display text-xl font-bold tracking-tight text-white"
        >
          QuickGrowth
        </Link>
        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="/how-it-works"
            className="font-display text-sm text-white/70 transition-colors hover:text-white"
          >
            How it works
          </Link>
          <Link
            href="/who-we-serve"
            className="font-display text-sm text-white/70 transition-colors hover:text-white"
          >
            Who we serve
          </Link>
          <Link
            href="/pricing"
            className="font-display text-sm text-white/70 transition-colors hover:text-white"
          >
            Pricing
          </Link>
        </div>
        <Link
          href="/waitlist"
          onClick={() => trackCtaClick("nav")}
          className="inline-flex h-10 items-center whitespace-nowrap rounded-xl bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] px-5 font-display text-sm font-bold text-white shadow-[0_4px_15px_rgba(99,102,241,0.40)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(99,102,241,0.60)] active:scale-[0.97]"
        >
          Request a Free Consult
        </Link>
      </div>
    </nav>
  );
}
