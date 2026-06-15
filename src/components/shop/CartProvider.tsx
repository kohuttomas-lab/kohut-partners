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
import { CartBar } from "./CartBar";
import { CheckoutModal } from "./CheckoutModal";

type CartItems = Record<string, number>; // id -> quantity

interface CartContextValue {
  items: CartItems;
  count: number;
  addItem: (id: string) => void;
  clear: () => void;
  isInCart: (id: string) => boolean;
  checkoutOpen: boolean;
  openCheckout: () => void;
  closeCheckout: () => void;
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
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  // Load persisted cart after mount (avoids SSR/localStorage mismatch).
  useEffect(() => {
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

  const clear = useCallback(() => setItems({}), []);
  const openCheckout = useCallback(() => setCheckoutOpen(true), []);
  const closeCheckout = useCallback(() => setCheckoutOpen(false), []);

  const count = useMemo(
    () => Object.values(items).reduce((sum, q) => sum + q, 0),
    [items]
  );

  const value = useMemo<CartContextValue>(
    () => ({
      items,
      count,
      addItem,
      clear,
      isInCart: (id: string) => !!items[id],
      checkoutOpen,
      openCheckout,
      closeCheckout,
    }),
    [items, count, addItem, clear, checkoutOpen, openCheckout, closeCheckout]
  );

  return (
    <CartContext.Provider value={value}>
      {children}
      <CartBar />
      <CheckoutModal />
    </CartContext.Provider>
  );
}
