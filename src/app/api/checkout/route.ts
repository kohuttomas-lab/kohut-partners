import type Stripe from "stripe";
import { getStripe } from "@/lib/stripe";
import { getCartCatalog } from "@/lib/content";

// Charge VAT-inclusive (handoff shows prices incl. 20% DPH). For production-grade
// VAT breakdown on invoices, switch to Stripe Tax (automatic_tax) + tax behavior.
const grossCents = (net: number) => Math.round(net * 1.2 * 100);

export async function POST(req: Request) {
  const stripe = getStripe();
  if (!stripe) {
    // No keys yet → tell the client to use the simulated fallback.
    return Response.json({ configured: false }, { status: 503 });
  }

  let body: {
    mode?: "payment" | "subscription";
    items?: { id: string; qty: number }[];
    id?: string;
    locale?: string;
    returnUrl?: string;
  };
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "Invalid body" }, { status: 400 });
  }

  const { mode = "payment", items, id, locale, returnUrl } = body;
  const catalog = getCartCatalog();
  const isSk = locale !== "en";
  const origin = new URL(req.url).origin;
  const base =
    typeof returnUrl === "string" && returnUrl.startsWith("http") ? returnUrl : origin;

  try {
    let lineItems: Stripe.Checkout.SessionCreateParams.LineItem[];
    let sessionMode: "payment" | "subscription";

    if (mode === "subscription") {
      const entry = id ? catalog[id] : undefined;
      if (!entry || entry.type !== "sub") {
        return Response.json({ error: "Unknown plan" }, { status: 400 });
      }
      sessionMode = "subscription";
      lineItems = [
        {
          quantity: 1,
          price_data: {
            currency: "eur",
            unit_amount: grossCents(entry.price),
            recurring: { interval: "month" },
            product_data: { name: isSk ? entry.nameSk : entry.nameEn },
          },
        },
      ];
    } else {
      sessionMode = "payment";
      const list = Array.isArray(items) ? items : [];
      lineItems = list.flatMap(({ id, qty }) => {
        const entry = catalog[id];
        // Subscriptions can't share a payment-mode session — skip if present.
        if (!entry || entry.type === "sub") return [];
        const quantity = Math.max(1, Math.min(99, Number(qty) || 1));
        return [
          {
            quantity,
            price_data: {
              currency: "eur",
              unit_amount: grossCents(entry.price),
              product_data: { name: isSk ? entry.nameSk : entry.nameEn },
            },
          } satisfies Stripe.Checkout.SessionCreateParams.LineItem,
        ];
      });
      if (lineItems.length === 0) {
        return Response.json({ error: "Empty cart" }, { status: 400 });
      }
    }

    const session = await stripe.checkout.sessions.create({
      mode: sessionMode,
      line_items: lineItems,
      success_url: `${base}?stripe=success`,
      cancel_url: `${base}?stripe=cancel`,
      billing_address_collection: "auto",
      allow_promotion_codes: true,
      locale: isSk ? "sk" : "en",
    });

    return Response.json({ url: session.url });
  } catch (err) {
    console.error("[checkout] Stripe error:", err);
    return Response.json({ error: "Stripe error" }, { status: 500 });
  }
}
