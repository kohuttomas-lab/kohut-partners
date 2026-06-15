"use client";

import type { ReactNode } from "react";
import { Button, type ButtonSize, type ButtonVariant } from "@/components/ui/Button";
import { useBooking } from "./BookingProvider";

// Client trigger for the booking modal — usable inside server-rendered pages.
export function BookingButton({
  area,
  variant = "accent",
  size = "md",
  block = false,
  leftIcon,
  rightIcon,
  children,
}: {
  area?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  block?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  children: ReactNode;
}) {
  const { open } = useBooking();
  return (
    <Button
      variant={variant}
      size={size}
      block={block}
      leftIcon={leftIcon}
      rightIcon={rightIcon}
      onClick={() => open(area)}
    >
      {children}
    </Button>
  );
}
