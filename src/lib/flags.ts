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

// Košík a Stripe Checkout na stránke e-shopu sú VYPNUTÉ (od 14. 9. 2026):
// za tri týždne po spustení neprišla cez košík ani jedna platba, zatiaľ čo
// formuláre bez platby vopred leady prinášali. Objednávka teraz ide cez
// formulár (/e-shop/objednavka) a odkaz na platbu posiela kancelária až po
// preverení veci. Kód košíka ostáva pre prípadné neskoršie použitie.
export const CART_ENABLED = false;
