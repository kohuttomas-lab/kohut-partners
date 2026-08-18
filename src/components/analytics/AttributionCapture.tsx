"use client";

import { useEffect } from "react";
import { captureLanding } from "@/lib/attribution";

/**
 * Odloží si vstupnú stránku hneď pri prvom načítaní — viac v lib/attribution.
 * Musí byť v layoute, teda na každej stránke: reklama často smeruje na stránku
 * bez formulára (mestské a kampaňové rozcestníky) a na /kontakt sa návštevník
 * preklikne až klientsky, keď už UTM ani gclid v adrese nie sú.
 *
 * Nerenderuje nič a nič neukladá do prehliadača, takže nesúvisí so súhlasom
 * s cookies — rovnako ako zvyšok atribúcie.
 */
export function AttributionCapture() {
  useEffect(() => {
    captureLanding();
  }, []);

  return null;
}
