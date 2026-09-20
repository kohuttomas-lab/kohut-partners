import type { IntlLocale } from "@/i18n/routing";
import type { IntlContent } from "./types";
import { pl } from "./pl";
import { hu } from "./hu";
import { de } from "./de";
import { ru } from "./ru";

export type { IntlContent } from "./types";

export const INTL_CONTENT: Record<IntlLocale, IntlContent> = { pl, hu, de, ru };
