import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";
import { isIntlLocale, routing } from "./routing";

type Messages = Record<string, unknown>;

/** Hlboké zlúčenie: preklad prekrýva angličtinu; polia sa berú celé z prekladu. */
function mergeMessages(base: Messages, over: Messages): Messages {
  const out: Messages = { ...base };
  for (const [key, value] of Object.entries(over)) {
    const b = base[key];
    out[key] =
      value && typeof value === "object" && !Array.isArray(value) &&
      b && typeof b === "object" && !Array.isArray(b)
        ? mergeMessages(b as Messages, value as Messages)
        : value;
  }
  return out;
}

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  const own = (await import(`../../messages/${locale}.json`)).default as Messages;
  // PL/HU/DE/RU neprekladajú menné priestory stránok, ktoré v nich neexistujú
  // (e-shop, blog…). Spoločné komponenty ich však môžu čítať, preto pod
  // preklad podkladáme angličtinu — chýbajúci kľúč tak nikdy nezhodí render.
  const messages = isIntlLocale(locale)
    ? mergeMessages((await import("../../messages/en.json")).default as Messages, own)
    : own;

  return { locale, messages };
});
