// Feature flags.
//
// The legal e-shop is LIVE (model 2 — card reservation via Stripe manual
// capture). Kill switch: set NEXT_PUBLIC_ESHOP_ENABLED=false in Vercel env
// to hide the whole shop again without a code change.
export const ESHOP_ENABLED = process.env.NEXT_PUBLIC_ESHOP_ENABLED !== "false";

// Document templates stay OFF until (a) every template passes attorney review
// and (b) download fulfilment exists (webhook only logs today — nothing is
// delivered after payment). Flip to true only when both are done.
export const TEMPLATES_FOR_SALE = false;
