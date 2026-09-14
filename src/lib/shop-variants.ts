import type { Locale } from "@/i18n/routing";

/**
 * Stupne a doplnky balíkov (schválené Tomášom 14. 9. 2026 v dokumente
 * Texty-na-schvalenie.md). Každý stupeň aj doplnok je samostatná položka
 * katalógu pre Stripe Checkout (getCartCatalog v content.ts ich registruje).
 * Cena balíka na karte = cena prvého stupňa s jeho označením — nikdy „od".
 */
export interface VariantOption {
  id: string;
  price: number;
  sk: string;
  en: string;
  /** Krátke označenie na kartu v e-shope (ak sa plný popis nezmestí). */
  short?: Record<Locale, string>;
}

export interface VariantAddon {
  /** Pevná cena, alebo `perOption` = 100 % ceny zvoleného stupňa (id = `${option.id}-${id}`). */
  id: string;
  price?: number;
  perOption?: boolean;
  sk: string;
  en: string;
}

export interface PackageVariants {
  /** Označenie výberu („Rozsah zmluvy", „Výška pohľadávky"). */
  label: Record<Locale, string>;
  options: VariantOption[];
  addons?: VariantAddon[];
  /** Poznámka pod výberom (čo je mimo stupňov). */
  note?: Record<Locale, string>;
}

export const PACKAGE_VARIANTS: Record<string, PackageVariants> = {
  "ob-revizia": {
    label: { sk: "Rozsah zmluvy", en: "Contract length" },
    options: [
      { id: "ob-revizia-2", price: 79, sk: "do 2 normostrán", en: "up to 2 standard pages" },
      { id: "ob-revizia-5", price: 139, sk: "3 – 5 normostrán", en: "3 – 5 standard pages" },
      { id: "ob-revizia-8", price: 199, sk: "6 – 8 normostrán", en: "6 – 8 standard pages" },
    ],
    addons: [
      {
        id: "express",
        perOption: true,
        sk: "Expresne do 48 hodín (+100 % ceny)",
        en: "Express within 48 hours (+100 % of the price)",
      },
      {
        id: "ob-revizia-redline",
        price: 59,
        sk: "Zapracovanie zmien priamo do textu zmluvy (+59 €)",
        en: "Changes worked directly into the contract text (+EUR 59)",
      },
    ],
    note: {
      sk: "Zmluvy nad 8 normostrán a zmluvy v cudzom jazyku — individuálna ponuka do 1 pracovného dňa.",
      en: "Contracts over 8 standard pages or in a foreign language — individual quote within 1 business day.",
    },
  },

  "sp-vyzva": {
    label: { sk: "Variant", en: "Variant" },
    options: [
      {
        id: "sp-vyzva-standard",
        price: 89,
        sk: "Standard — do 3 pracovných dní, doporučene aj e-mailom, 15-min hovor",
        en: "Standard — within 3 business days, registered mail and e-mail, 15-min call",
        short: { sk: "Standard, do 3 pracovných dní", en: "Standard, within 3 business days" },
      },
      {
        id: "sp-vyzva-premium",
        price: 149,
        sk: "Premium — do 48 hodín, odosiela advokát na hlavičkovom papieri, 30-min hovor a písomné odporúčanie ďalšieho postupu",
        en: "Premium — within 48 hours, sent by the attorney on letterhead, 30-min call and written recommendation of next steps",
        short: { sk: "Premium, do 48 hodín", en: "Premium, within 48 hours" },
      },
    ],
    addons: [
      {
        id: "sp-vyzva-opakovana",
        price: 49,
        sk: "Opakovaná výzva, ak dlžník nezareaguje (+49 €)",
        en: "Repeat demand if the debtor does not respond (+EUR 49)",
      },
    ],
  },

  "sp-zaloba": {
    label: { sk: "Výška pohľadávky", en: "Claim amount" },
    options: [
      { id: "sp-zaloba-do3000", price: 290, sk: "do 3 000 €", en: "up to EUR 3,000" },
      { id: "sp-zaloba-nad3000", price: 490, sk: "nad 3 000 €", en: "over EUR 3,000" },
    ],
  },
};

export function getVariants(packageId: string): PackageVariants | undefined {
  return PACKAGE_VARIANTS[packageId];
}

/** Id položky doplnku pre zvolený stupeň (pri `perOption` závisí od stupňa). */
export function addonItemId(addon: VariantAddon, option: VariantOption): string {
  return addon.perOption ? `${option.id}-${addon.id}` : addon.id;
}

export function addonPrice(addon: VariantAddon, option: VariantOption): number {
  return addon.perOption ? option.price : (addon.price ?? 0);
}

/** Všetky položky katalógu (stupne + doplnky) pre Stripe. */
export function variantCatalogEntries(
  packageId: string,
  names: { sk: string; en: string }
): { id: string; price: number; nameSk: string; nameEn: string }[] {
  const v = PACKAGE_VARIANTS[packageId];
  if (!v) return [];
  const out: { id: string; price: number; nameSk: string; nameEn: string }[] = [];
  for (const o of v.options) {
    out.push({ id: o.id, price: o.price, nameSk: `${names.sk} — ${o.sk}`, nameEn: `${names.en} — ${o.en}` });
    for (const a of v.addons ?? []) {
      if (a.perOption) {
        out.push({
          id: addonItemId(a, o),
          price: addonPrice(a, o),
          nameSk: `${names.sk} — ${a.sk} (${o.sk})`,
          nameEn: `${names.en} — ${a.en} (${o.en})`,
        });
      }
    }
  }
  for (const a of v.addons ?? []) {
    if (!a.perOption) {
      out.push({ id: a.id, price: a.price ?? 0, nameSk: `${names.sk} — ${a.sk}`, nameEn: `${names.en} — ${a.en}` });
    }
  }
  return out;
}
