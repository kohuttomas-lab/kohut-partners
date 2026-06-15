"use client";

import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/Button";
import { Check, ShoppingBag, Download } from "@/components/icons";
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

/** Subscription CTA — always adds a single-line subscription. */
export function SubscribeButton({ id, popular }: { id: string; popular: boolean }) {
  const t = useTranslations("shop");
  const { addItem } = useCart();
  return (
    <Button
      variant={popular ? "accent" : "secondary"}
      size="lg"
      block
      onClick={() => addItem(id)}
    >
      {t("subsChoose")}
    </Button>
  );
}
