// Prices are always shown in Slovak format regardless of UI language
// (handoff §7): space as the thousands separator, the € sign after the amount,
// e.g. "1 190 €". `toLocaleString('sk-SK')` yields the non-breaking-space grouping.
export function formatEur(amount: number): string {
  return `${amount.toLocaleString("sk-SK")} €`;
}

export const VAT_RATE = 0.2;

export function withVat(net: number): number {
  return Math.round(net * VAT_RATE);
}
