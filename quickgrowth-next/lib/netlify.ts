export const NETLIFY_FORM_NAME = "waitlist";

export async function submitWaitlist(
  data: Record<string, string>,
): Promise<boolean> {
  const body = new URLSearchParams();
  body.append("form-name", NETLIFY_FORM_NAME);
  for (const [k, v] of Object.entries(data)) body.append(k, v);

  try {
    const res = await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: body.toString(),
    });
    return res.ok;
  } catch {
    return false;
  }
}
