import { NETLIFY_FORM_NAME } from "@/lib/netlify";
import { UTM_KEYS } from "@/lib/utm";

/**
 * Hidden form so Netlify's build-time parser discovers the form.
 * Real submissions happen via fetch() from the modal. Do not remove — losing
 * this breaks Netlify form detection entirely.
 */
export function NetlifyFormDetect() {
  return (
    <form
      name={NETLIFY_FORM_NAME}
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      hidden
    >
      <input name="bot-field" />
      <input name="first-name" type="text" />
      <input name="last-name" type="text" />
      <input name="email" type="email" />
      <input name="company" type="text" />
      {UTM_KEYS.map((k) => (
        <input key={k} name={k} type="hidden" />
      ))}
    </form>
  );
}
