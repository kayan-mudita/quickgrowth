/* Centralized pixel events. Call from CTA handlers so all pixels fire in one place. */
type DataLayerWindow = Window &
  typeof globalThis & {
    dataLayer?: unknown[];
    fbq?: (...args: unknown[]) => void;
    rdt?: (...args: unknown[]) => void;
    lintrk?: (action: string, payload: { conversion_id: number }) => void;
  };

export function trackLead(source: string) {
  if (typeof window === "undefined") return;
  const w = window as DataLayerWindow;
  w.dataLayer = w.dataLayer ?? [];
  w.dataLayer.push({ event: "lead_submit", source });
  w.fbq?.("track", "Lead");
  w.rdt?.("track", "Lead");
}

export function trackCtaClick(location: string) {
  if (typeof window === "undefined") return;
  const w = window as DataLayerWindow;
  w.dataLayer = w.dataLayer ?? [];
  w.dataLayer.push({ event: "cta_click", location });
}
