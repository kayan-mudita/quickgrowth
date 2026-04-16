"use client";

import { useRef, useState } from "react";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { submitWaitlist } from "@/lib/netlify";
import { getUtmParams } from "@/lib/utm";
import { trackLead } from "@/lib/analytics";

interface WaitlistModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  initialEmail: string;
  source: string;
  onSuccess?: () => void;
}

export function WaitlistModal({
  open,
  onOpenChange,
  initialEmail,
  source,
  onSuccess,
}: WaitlistModalProps) {
  const [email, setEmail] = useState(initialEmail);
  const [submitting, setSubmitting] = useState(false);
  const submittedRef = useRef(false);

  /**
   * Partial-submit-on-close: if the user captured an email but bails on the
   * full form, we still send the email alone to Netlify. This preserves a
   * deliberate conversion mechanic from the live site.
   */
  const handleOpenChange = async (next: boolean) => {
    if (!next && !submittedRef.current && email.trim()) {
      const ok = await submitWaitlist({ email, ...getUtmParams() });
      if (ok) {
        trackLead(`${source}:partial`);
        toast.success("You're on the list!");
      }
    }
    onOpenChange(next);
  };

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
      submittedRef.current = true;
      trackLead(`${source}:full`);
      onSuccess?.();
      window.location.href = "/thank-you";
    } else {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl">
            Request a Free Consult
          </DialogTitle>
          <DialogDescription>
            One more step — tell us a bit about yourself.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="hidden" name="form-name" value="waitlist" />
          <input type="hidden" name="bot-field" />

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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
            {submitting ? "Submitting…" : "Request a Free Consult"}
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
