"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { submitWaitlist } from "@/lib/netlify";
import { getUtmParams } from "@/lib/utm";
import { trackLead } from "@/lib/analytics";

interface WaitlistFormProps {
  source: string;
  buttonLabel?: string;
}

export function WaitlistForm({
  source,
  buttonLabel = "Request a Free Consult",
}: WaitlistFormProps) {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data: Record<string, string> = {};
    formData.forEach((v, k) => {
      data[k] = String(v);
    });
    Object.assign(data, getUtmParams());

    const ok = await submitWaitlist(data);
    setSubmitting(false);

    if (ok) {
      trackLead(`${source}:full`);
      window.location.href = "/thank-you";
    } else {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md sm:p-8"
      data-source={source}
    >
      <input type="hidden" name="form-name" value="waitlist" />
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="source" value={source} />

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="first-name">First name</Label>
          <Input
            id="first-name"
            name="first-name"
            required
            autoComplete="given-name"
            placeholder="Jane"
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="last-name">Last name</Label>
          <Input
            id="last-name"
            name="last-name"
            required
            autoComplete="family-name"
            placeholder="Smith"
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="email">Work email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="you@company.com"
        />
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="company">Company</Label>
        <Input
          id="company"
          name="company"
          required
          autoComplete="organization"
          placeholder="Acme Inc."
        />
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="w-full rounded-xl bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] px-6 py-3.5 font-display text-base font-bold text-white shadow-[0_4px_15px_rgba(99,102,241,0.40)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(99,102,241,0.60)] active:scale-[0.97] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {submitting ? "Submitting…" : buttonLabel}
      </button>

      <p className="text-center text-xs text-white/50">
        No spam. No pitch decks. One reply within one business day.
      </p>
    </form>
  );
}
