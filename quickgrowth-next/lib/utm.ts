export const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
] as const;

export type UtmKey = (typeof UTM_KEYS)[number];
export type UtmParams = Record<UtmKey, string>;

export function getUtmParams(): UtmParams {
  if (typeof window === "undefined") {
    return UTM_KEYS.reduce((acc, k) => ({ ...acc, [k]: "" }), {} as UtmParams);
  }
  const params = new URLSearchParams(window.location.search);
  return UTM_KEYS.reduce(
    (acc, k) => ({ ...acc, [k]: params.get(k) ?? "" }),
    {} as UtmParams,
  );
}
