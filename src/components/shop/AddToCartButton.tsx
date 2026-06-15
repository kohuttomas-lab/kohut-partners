"use client";

import { useLocale, useTranslations } from "next-intl";
import { Button } from "@/components/ui/Button";
import { Check, ShoppingBag, Download } from "@/components/icons";
import { startCheckout } from "@/lib/checkout-client";
import { useCart } from "./CartProvider";

/** Toggle-style add-to-cart button for packages and templates. */
export function AddToCartButton({
  id,
  idleIcon,
  idleLabelKey,
}: {
  id: string;
  idleIcon: "bag" | "download";
  idleLabelKey: "addToCart" | "tplBuy";
}) {
  const t = useTranslations("shop");
  const { addItem, isInCart } = useCart();
  const inCart = isInCart(id);
  const IdleIcon = idleIcon === "bag" ? ShoppingBag : Download;

  return (
    <Button
      variant={inCart ? "secondary" : "primary"}
      size="sm"
      leftIcon={inCart ? <Check size={16} /> : <IdleIcon size={16} />}
      onClick={() => addItem(id)}
    >
      {inCart ? t("inCart") : t(idleLabelKey)}
    </Button>
  );
}

/** Subscription CTA — starts a dedicated Stripe subscription checkout
    (separate from the one-off cart). Falls back to add-to-cart without keys. */
export function SubscribeButton({ id, popular }: { id: string; popular: boolean }) {
  const t = useTranslations("shop");
  const locale = useLocale();
  const { addItem } = useCart();

  const onClick = async () => {
    const res = await startCheckout({
      mode: "subscription",
      id,
      locale,
      returnUrl: window.location.href.split("?")[0],
    });
    if ("url" in res && res.url) {
      window.location.href = res.url;
      return;
    }
    addItem(id);
  };

  return (
    <Button variant={popular ? "accent" : "secondary"} size="lg" block onClick={onClick}>
      {t("subsChoose")}
    </Button>
  );
}
