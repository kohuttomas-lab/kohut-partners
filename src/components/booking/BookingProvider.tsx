"use client";

import {
  createContext,
  useCallback,
  useContext,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { useLocale } from "next-intl";
import { getCalApi } from "@calcom/embed-react";
import { CALCOM_ENABLED, CALCOM_NAMESPACE, calLinkForLocale } from "@/lib/booking";
import { trackLead } from "@/lib/analytics";
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
  const locale = useLocale();
  const [state, setState] = useState<{ open: boolean; area: string }>({
    open: false,
    area: "",
  });
  const calInited = useRef(false);

  const open = useCallback((area?: string) => {
    if (CALCOM_ENABLED) {
      // Real availability synced with the firm's calendar (Cal.com modal).
      void getCalApi({ namespace: CALCOM_NAMESPACE }).then((cal) => {
        if (!calInited.current) {
          cal("ui", {
            theme: "light",
            hideEventTypeDetails: false,
            layout: "month_view",
            cssVarsPerTheme: {
              light: { "cal-brand": "#1F2A51" },
              dark: { "cal-brand": "#1F2A51" },
            },
          });
          // Conversion: fires only if analytics is loaded (consent given).
          cal("on", {
            action: "bookingSuccessful",
            callback: () => trackLead("booking"),
          });
          calInited.current = true;
        }
        cal("modal", {
          calLink: calLinkForLocale(locale),
          config: { layout: "month_view" },
        });
      });
      return;
    }
    setState({ open: true, area: typeof area === "string" ? area : "" });
  }, [locale]);

  const close = useCallback(() => setState({ open: false, area: "" }), []);

  return (
    <BookingContext.Provider value={{ open }}>
      {children}
      {!CALCOM_ENABLED && (
        <BookingModal open={state.open} presetArea={state.area} onClose={close} />
      )}
    </BookingContext.Provider>
  );
}
