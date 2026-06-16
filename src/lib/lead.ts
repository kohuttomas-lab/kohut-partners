// Lead delivery via Web3Forms (https://web3forms.com) — no backend/DNS needed.
// The access key is public by design (Web3Forms handles spam protection), so it
// lives in NEXT_PUBLIC_WEB3FORMS_KEY. Without a key, submitLead reports
// `configured: false` and callers fall back to the simulated "sent" state.

const ENDPOINT = "https://api.web3forms.com/submit";

export interface LeadResult {
  ok: boolean;
  configured: boolean;
}

export async function submitLead(
  fields: Record<string, string>,
  subject: string
): Promise<LeadResult> {
  const key = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
  if (!key) return { ok: false, configured: false };

  // Drop empty values so the notification e-mail stays clean.
  const payload: Record<string, string> = {};
  for (const [k, v] of Object.entries(fields)) {
    if (v && v.trim()) payload[k] = v.trim();
  }

  try {
    const res = await fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        access_key: key,
        subject,
        from_name: "kohút & partners — web",
        ...payload,
      }),
    });
    const data = (await res.json()) as { success?: boolean };
    return { ok: !!data.success, configured: true };
  } catch {
    return { ok: false, configured: true };
  }
}
