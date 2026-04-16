import Link from "next/link";

const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#0a0a0a] px-6 py-12 md:px-12">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
        <div className="space-y-2">
          <Link
            href="/"
            className="font-display text-lg font-bold tracking-tight text-white"
          >
            QuickGrowth
          </Link>
          <p className="text-xs text-white/50">
            Sales AI automation for modern B2B teams.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
          <Link
            href="/how-it-works"
            className="text-white/60 transition-colors hover:text-white"
          >
            How it works
          </Link>
          <Link
            href="/who-we-serve"
            className="text-white/60 transition-colors hover:text-white"
          >
            Who we serve
          </Link>
          <Link
            href="/pricing"
            className="text-white/60 transition-colors hover:text-white"
          >
            Pricing
          </Link>
          <Link
            href="/privacy"
            className="text-white/60 transition-colors hover:text-white"
          >
            Privacy
          </Link>
          <Link
            href="/terms"
            className="text-white/60 transition-colors hover:text-white"
          >
            Terms
          </Link>
        </div>

        <p className="text-xs text-white/40">
          © {CURRENT_YEAR} QuickGrowth. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
