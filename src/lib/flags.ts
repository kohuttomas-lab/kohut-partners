// Feature flags.
//
// The legal e-shop ships DISABLED for the initial launch (products not ready).
// All e-shop code stays in the repo; enable it later by setting
// NEXT_PUBLIC_ESHOP_ENABLED=true (e.g. in Vercel env) — no code changes needed.
export const ESHOP_ENABLED = process.env.NEXT_PUBLIC_ESHOP_ENABLED === "true";
