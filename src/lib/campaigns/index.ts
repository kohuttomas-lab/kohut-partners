import type { CampaignData } from "./types";
import { insuranceClaim } from "./insurance-claim";
import { employmentTermination } from "./employment-termination";
import { accidentCompensation } from "./accident-compensation";
import { consumerCredit } from "./consumer-credit";
import { enforcementDefense } from "./enforcement-defense";
import { stateLiability } from "./state-liability";

export type { CampaignData } from "./types";

/** Všetky kampaňové stránky, v poradí pre vzájomné prelinkovanie. */
export const CAMPAIGNS: CampaignData[] = [
  insuranceClaim,
  employmentTermination,
  accidentCompensation,
  consumerCredit,
  enforcementDefense,
  stateLiability,
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
};
