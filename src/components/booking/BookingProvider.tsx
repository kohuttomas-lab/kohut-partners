"use client";

import {
  createContext,
  useCallback,
  useContext,
  useState,
  type ReactNode,
} from "react";
import { BookingModal } from "./BookingModal";

interface BookingContextValue {
  /** Open the booking modal, optionally pre-selecting a practice area id. */
  open: (area?: string) => void;
}

const BookingContext = createContext<BookingContextValue | null>(null);

export function useBooking(): BookingContextValue {
  const ctx = useContext(BookingContext);
  if (!ctx) throw new Error("useBooking must be used within <BookingProvider>");
  return ctx;
}

export function BookingProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<{ open: boolean; area: string }>({
    open: false,
    area: "",
  });

  const open = useCallback((area?: string) => {
    setState({ open: true, area: typeof area === "string" ? area : "" });
  }, []);

  const close = useCallback(() => setState({ open: false, area: "" }), []);

  return (
    <BookingContext.Provider value={{ open }}>
      {children}
      <BookingModal open={state.open} presetArea={state.area} onClose={close} />
    </BookingContext.Provider>
  );
}
