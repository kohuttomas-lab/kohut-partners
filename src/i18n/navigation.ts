import { createNavigation } from "next-intl/navigation";
import { routing } from "./routing";

// Locale-aware navigation helpers. Always use these instead of next/link
// so that localized pathnames (/sluzby vs /services) resolve correctly.
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
