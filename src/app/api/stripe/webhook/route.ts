import { getStripe } from "@/lib/stripe";

// Stripe webhook receiver. Verifies the signature against the raw body and
// handles fulfilment events. Local dev:
//   stripe listen --forward-to localhost:3200/api/stripe/webhook
export async function POST(req: Request) {
  const stripe = getStripe();
  const whSecret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!stripe || !whSecret) {
    return new Response("Stripe not configured", { status: 503 });
  }

  const sig = req.headers.get("stripe-signature");
  if (!sig) return new Response("Missing signature", { status: 400 });

  const raw = await req.text();
  let event;
  try {
    event = await stripe.webhooks.constructEventAsync(raw, sig, whSecret);
  } catch (err) {
    console.error("[webhook] signature verification failed:", err);
    return new Response("Invalid signature", { status: 400 });
  }

  switch (event.type) {
    case "checkout.session.completed": {
      const session = event.data.object;
      // Model 2 (card reservation): payment-mode sessions complete with the
      // PaymentIntent in `requires_capture` — the office captures or cancels
      // it in the Stripe Dashboard after the conflict check (holds auto-expire
      // after ~7 days). Order alerting runs via Stripe Dashboard e-mail
      // notifications; template download fulfilment is intentionally absent
      // (templates are not for sale yet — see TEMPLATES_FOR_SALE in flags).
      console.log(
        "[webhook] checkout.session.completed",
        session.id,
        session.mode,
        session.metadata?.items ?? "",
        session.customer_details?.email ?? ""
      );
      break;
    }
    default:
      break;
  }

  return new Response(null, { status: 200 });
}
