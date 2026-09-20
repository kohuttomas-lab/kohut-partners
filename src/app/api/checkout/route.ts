import type Stripe from "stripe";
import { getStripe } from "@/lib/stripe";
import { getCartCatalog } from "@/lib/content";

// Catalog prices are FINAL consumer prices with 23 % Slovak VAT already
// included — charge exactly what the shop displays. The inclusive manual tax
// rate below breaks the included VAT out on checkout, invoices and credit
// notes (SK-only sales at a flat 23 %; cheaper than Stripe Tax's per-txn fee).
const grossCents = (gross: number) => Math.round(gross * 100);

// "DPH 23 % (SR)" — VAT 23 %, inclusive, created 25. 8. 2026 in the Dashboard.
const SK_VAT_RATE = "txr_1U8S3N6RAtjEMzYbe2cm00ly";

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
    /** Objednávka z formulára (/e-shop/objednavka): predvyplní e-mail v Checkoute
        a pripojí meno + telefón do metadát platby, nech ju kancelária spáruje
        s opisom veci, ktorý prišiel e-mailom. */
    customer?: { email?: string; name?: string; phone?: string };
  };
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "Invalid body" }, { status: 400 });
  }

  const { mode = "payment", items, id, locale, returnUrl, customer } = body;
  const catalog = getCartCatalog();
  const isSk = locale !== "en";
  const origin = new URL(req.url).origin;
  const base =
    typeof returnUrl === "string" && returnUrl.startsWith("http") ? returnUrl : origin;
  // returnUrl môže niesť vlastný query (?balik=…) — parameter stripe pridáme za neho.
  const sep = base.includes("?") ? "&" : "?";
  const email =
    typeof customer?.email === "string" && /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(customer.email)
      ? customer.email
      : undefined;
  const customerMeta: Record<string, string> = {};
  if (typeof customer?.name === "string" && customer.name.trim())
    customerMeta.customer_name = customer.name.trim().slice(0, 200);
  if (typeof customer?.phone === "string" && customer.phone.trim())
    customerMeta.customer_phone = customer.phone.trim().slice(0, 50);

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
          tax_rates: [SK_VAT_RATE],
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
            tax_rates: [SK_VAT_RATE],
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

    // Payments charge immediately with a refund guarantee: the office reviews
    // every order (conflict check) and, when it cannot take the matter on,
    // refunds in full via the Stripe Dashboard. All payment methods enabled
    // on the account are available.
    const itemsMeta =
      sessionMode === "payment"
        ? lineItems
            .map((li) => `${li.price_data?.product_data?.name} x${li.quantity}`)
            .join("; ")
            .slice(0, 480)
        : (id ?? "");

    const session = await stripe.checkout.sessions.create({
      mode: sessionMode,
      line_items: lineItems,
      success_url: `${base}${sep}stripe=success`,
      cancel_url: `${base}${sep}stripe=cancel`,
      ...(email ? { customer_email: email } : {}),
      billing_address_collection: "auto",
      // Povinný súhlas s obchodnými podmienkami priamo v Stripe Checkoute.
      // Vyžaduje nastavenú adresu obchodných podmienok v Stripe:
      // Settings → Business → Public details → Terms of service.
      consent_collection: { terms_of_service: "required" },
      allow_promotion_codes: true,
      locale: isSk ? "sk" : "en",
      phone_number_collection: { enabled: true },
      metadata: { items: itemsMeta, ...customerMeta },
      ...(sessionMode === "payment"
        ? {
            // A numbered VAT invoice for every one-off order (subscriptions
            // invoice automatically). Stripe Invoicing fee ~0.4 % per invoice.
            invoice_creation: { enabled: true },
            payment_intent_data: {
              metadata: { items: itemsMeta, ...customerMeta },
              description: `kohut & partners — ${itemsMeta}`.slice(0, 500),
            },
            custom_text: {
              submit: {
                message: isSk
                  ? "Objednávku po zaplatení preveríme — spravidla do 1 pracovného dňa. Ak vec nemôžeme prevziať, platbu vám bezodkladne vrátime v plnej výške."
                  : "We review every order after payment — usually within 1 business day. If we cannot take the matter on, we promptly refund the payment in full.",
              },
            },
          }
        : {
            // Subscription cancellation terms, mirrored from the shop page and
            // the customer-portal config (cancel at period end, no proration).
            custom_text: {
              submit: {
                message: isSk
                  ? "Predplatné môžete kedykoľvek zrušiť — platí do konca zaplateného mesiaca a ďalšia platba sa už nestrhne; za začatý mesiac sa pomerná časť nevracia."
                  : "You can cancel the subscription at any time — it stays active until the end of the paid month and no further payment is taken; the started month is not prorated.",
              },
            },
          }),
    });

    return Response.json({ url: session.url });
  } catch (err) {
    console.error("[checkout] Stripe error:", err);
    return Response.json({ error: "Stripe error" }, { status: 500 });
  }
}
