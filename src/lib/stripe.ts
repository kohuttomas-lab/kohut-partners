import Stripe from "stripe";

// Server-only Stripe client. Returns null when STRIPE_SECRET_KEY is unset,
// so the app can gracefully fall back to the simulated flow until keys exist.
let cached: Stripe | null = null;

export function getStripe(): Stripe | null {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) return null;
  if (!cached) {
    cached = new Stripe(key, { apiVersion: "2026-05-27.dahlia" });
  }
  return cached;
}
