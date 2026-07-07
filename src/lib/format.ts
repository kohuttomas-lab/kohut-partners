// Prices are always shown in Slovak format regardless of UI language
// (handoff §7): space as the thousands separator, the € sign after the amount,
// e.g. "1 190 €". `toLocaleString('sk-SK')` yields the non-breaking-space grouping.
export function formatEur(amount: number): string {
  return `${amount.toLocaleString("sk-SK")} €`;
}

// Standard Slovak VAT rate — 23 % since 1 Jan 2025.
export const VAT_RATE = 0.23;

export function withVat(net: number): number {
  return Math.round(net * VAT_RATE);
}
