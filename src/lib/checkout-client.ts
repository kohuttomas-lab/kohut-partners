// Client helper that asks the server to create a Stripe Checkout session.
// Returns { configured: false } when Stripe keys are absent so callers can
// fall back to the simulated flow.

export interface CheckoutPayload {
  mode: "payment" | "subscription";
  items?: { id: string; qty: number }[];
  id?: string;
  locale: string;
  returnUrl: string;
}

export type CheckoutResult =
  | { url: string }
  | { configured: false }
  | { error: string };

export async function startCheckout(payload: CheckoutPayload): Promise<CheckoutResult> {
  try {
    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (res.status === 503) return { configured: false };
    const data = (await res.json()) as CheckoutResult;
    return data;
  } catch {
    return { error: "network" };
  }
}
