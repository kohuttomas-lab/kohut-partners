// Prices are always shown in Slovak format regardless of UI language
// (handoff §7): space as the thousands separator, the € sign after the amount,
// e.g. "1 190 €". `toLocaleString('sk-SK')` yields the non-breaking-space grouping.
export function formatEur(amount: number): string {
  return `${amount.toLocaleString("sk-SK")} €`;
}

// Standard Slovak VAT rate — 23 % since 1 Jan 2025. Catalog prices are FINAL
// consumer prices (VAT included), as required for B2C price display; VAT is
// only broken out of the gross amount for the cart summary and tax documents.
export const VAT_RATE = 0.23;

export function vatPortion(gross: number): number {
  return Math.round((gross - gross / (1 + VAT_RATE)) * 100) / 100;
}
