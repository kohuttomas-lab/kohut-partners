import type { CampaignData } from "./types";
import { insuranceClaim } from "./insurance-claim";
import { employmentTermination } from "./employment-termination";
import { accidentCompensation } from "./accident-compensation";
import { consumerCredit } from "./consumer-credit";
import { enforcementDefense } from "./enforcement-defense";
import { stateLiability } from "./state-liability";
import { companyFormation } from "./company-formation";
import { companyLiquidation } from "./company-liquidation";
import { shareTransfer } from "./share-transfer";
import { companyChanges } from "./company-changes";
import { trademarkRegistration } from "./trademark-registration";
import { tradeLicence } from "./trade-licence";
import { gdprDocumentation } from "./gdpr-documentation";
import { eshopDocuments } from "./eshop-documents";
import { preActionLetter } from "./pre-action-letter";
import { debtRecovery } from "./debt-recovery";
import { lastWill } from "./last-will";
import { propertyTransfer } from "./property-transfer";
import { personalBankruptcy } from "./personal-bankruptcy";
import { debtReliefBankruptcy } from "./debt-relief-bankruptcy";
import { debtReliefRepaymentPlan } from "./debt-relief-repayment-plan";
import { paymentOrderObjection } from "./payment-order-objection";
import { criminalDefense } from "./criminal-defense";
import { drinkDriving } from "./drink-driving";
import { rejectedWarrantyClaim } from "./rejected-warranty-claim";
import { tradeLicenceAdvice } from "./trade-licence-advice";
import { legalConsultation } from "./legal-consultation";
import { paymentOrder } from "./payment-order";

export type { CampaignData } from "./types";

/** Všetky kampaňové stránky, v poradí pre vzájomné prelinkovanie. */
export const CAMPAIGNS: CampaignData[] = [
  insuranceClaim,
  employmentTermination,
  accidentCompensation,
  consumerCredit,
  enforcementDefense,
  stateLiability,
  // Druhá vlna situačných stránok (návrh č. 74 marketingového modulu, 9/2026).
  debtReliefBankruptcy,
  debtReliefRepaymentPlan,
  paymentOrderObjection,
  criminalDefense,
  drinkDriving,
  rejectedWarrantyClaim,
  tradeLicenceAdvice,
  legalConsultation,
  // Produktové stránky katalógu (group: "produkt") — poradie = poradie
  // prelinkovania aj priority v kampani C (marketing/google-ads-tematicke-stranky.md).
  companyFormation,
  companyLiquidation,
  companyChanges,
  shareTransfer,
  trademarkRegistration,
  tradeLicence,
  gdprDocumentation,
  eshopDocuments,
  preActionLetter,
  debtRecovery,
  lastWill,
  propertyTransfer,
  personalBankruptcy,
  paymentOrder,
];

export function getCampaign(id: string): CampaignData | undefined {
  return CAMPAIGNS.find((c) => c.id === id);
}

/** Krátke názvy pre blok „Ďalšie témy“ v pätičke kampaňových stránok. */
export const CAMPAIGN_SHORT_NAMES: Record<string, string> = {
  "insurance-claim": "Zamietnuté poistné plnenie",
  "employment-termination": "Neplatná výpoveď",
  "accident-compensation": "Odškodnenie po nehode",
  "consumer-credit": "Bezúročný úver",
  "enforcement-defense": "Obrana proti exekúcii",
  "state-liability": "Náhrada škody od štátu",
  "company-formation": "Založenie s.r.o.",
  "company-liquidation": "Likvidácia s.r.o.",
  "company-changes": "Zmeny v s.r.o. a konateľ",
  "share-transfer": "Prevod obchodného podielu",
  "trademark-registration": "Ochranná známka",
  "trade-licence": "Založenie živnosti",
  "gdpr-documentation": "GDPR dokumentácia",
  "eshop-documents": "Dokumenty pre e-shop",
  "pre-action-letter": "Predžalobná výzva",
  "debt-recovery": "Vymáhanie pohľadávok",
  "last-will": "Závet a vydedenie",
  "property-transfer": "Prevod nehnuteľnosti",
  "personal-bankruptcy": "Osobný bankrot",
  "debt-relief-bankruptcy": "Oddlženie konkurzom",
  "debt-relief-repayment-plan": "Oddlženie splátkovým kalendárom",
  "payment-order-objection": "Odpor proti platobnému rozkazu",
  "criminal-defense": "Obhajoba v trestnom konaní",
  "drink-driving": "Alkohol za volantom",
  "rejected-warranty-claim": "Neuznaná reklamácia",
  "trade-licence-advice": "Živnosť alebo s.r.o.",
  "legal-consultation": "Právna konzultácia",
  "payment-order": "Platobný rozkaz",
};
