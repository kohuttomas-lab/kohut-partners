"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { getCartCatalog } from "@/lib/content";
import { startCheckout } from "@/lib/checkout-client";
import { CartBar } from "./CartBar";
import { CartDrawer } from "./CartDrawer";
import { CheckoutModal } from "./CheckoutModal";

type CartItems = Record<string, number>; // id -> quantity

interface CartContextValue {
  items: CartItems;
  count: number;
  addItem: (id: string) => void;
  removeItem: (id: string) => void;
  increment: (id: string) => void;
  decrement: (id: string) => void;
  clear: () => void;
  isInCart: (id: string) => boolean;
  cartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  checkoutOpen: boolean;
  openCheckout: () => void;
  closeCheckout: () => void;
  /** Stripe checkout when configured, simulated modal otherwise. */
  startPayment: (locale: string) => Promise<void>;
}

const CartContext = createContext<CartContextValue | null>(null);

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within <CartProvider>");
  return ctx;
}

const STORAGE_KEY = "kp_cart";

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItems>({});
  const [hydrated, setHydrated] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  // Load persisted cart after mount (avoids SSR/localStorage mismatch).
  // Also handle the Stripe Checkout return: clear the cart on ?stripe=success.
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const stripeStatus = params.get("stripe");
    if (stripeStatus) {
      params.delete("stripe");
      const qs = params.toString();
      window.history.replaceState({}, "", window.location.pathname + (qs ? `?${qs}` : ""));
    }
    if (stripeStatus === "success") {
      setItems({});
      try {
        localStorage.removeItem(STORAGE_KEY);
      } catch {
        /* ignore */
      }
      setHydrated(true);
      return;
    }
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setItems(JSON.parse(raw));
    } catch {
      /* ignore malformed storage */
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      /* ignore quota / private mode */
    }
  }, [items, hydrated]);

  const addItem = useCallback((id: string) => {
    const catalog = getCartCatalog();
    const entry = catalog[id];
    if (!entry) return;
    setItems((prev) => {
      // Subscriptions are a single line; everything else increments.
      const qty = entry.type === "sub" ? 1 : (prev[id] ?? 0) + 1;
      return { ...prev, [id]: qty };
    });
  }, []);

  const removeItem = useCallback((id: string) => {
    setItems((prev) => {
      const next = { ...prev };
      delete next[id];
      return next;
    });
  }, []);

  const increment = useCallback((id: string) => {
    const entry = getCartCatalog()[id];
    if (!entry || entry.type === "sub") return; // subscriptions stay at qty 1
    setItems((prev) => (prev[id] ? { ...prev, [id]: prev[id] + 1 } : prev));
  }, []);

  const decrement = useCallback((id: string) => {
    setItems((prev) => {
      const qty = prev[id];
      if (!qty) return prev;
      if (qty <= 1) {
        const next = { ...prev };
        delete next[id];
        return next;
      }
      return { ...prev, [id]: qty - 1 };
    });
  }, []);

  const clear = useCallback(() => setItems({}), []);
  const openCart = useCallback(() => setCartOpen(true), []);
  const closeCart = useCallback(() => setCartOpen(false), []);
  const openCheckout = useCallback(() => {
    setCartOpen(false);
    setCheckoutOpen(true);
  }, []);
  const closeCheckout = useCallback(() => setCheckoutOpen(false), []);

  const startPayment = useCallback(
    async (locale: string) => {
      const res = await startCheckout({
        mode: "payment",
        items: Object.entries(items).map(([id, qty]) => ({ id, qty })),
        locale,
        returnUrl: window.location.href.split("?")[0],
      });
      if ("url" in res && res.url) {
        window.location.href = res.url;
        return;
      }
      // Stripe not configured (or errored) → simulated checkout.
      openCheckout();
    },
    [items, openCheckout]
  );

  const count = useMemo(
    () => Object.values(items).reduce((sum, q) => sum + q, 0),
    [items]
  );

  const value = useMemo<CartContextValue>(
    () => ({
      items,
      count,
      addItem,
      removeItem,
      increment,
      decrement,
      clear,
      isInCart: (id: string) => !!items[id],
      cartOpen,
      openCart,
      closeCart,
      checkoutOpen,
      openCheckout,
      closeCheckout,
      startPayment,
    }),
    [
      items,
      count,
      addItem,
      removeItem,
      increment,
      decrement,
      clear,
      cartOpen,
      openCart,
      closeCart,
      checkoutOpen,
      openCheckout,
      closeCheckout,
      startPayment,
    ]
  );

  return (
    <CartContext.Provider value={value}>
      {children}
      <CartBar />
      <CartDrawer />
      <CheckoutModal />
    </CartContext.Provider>
  );
}
