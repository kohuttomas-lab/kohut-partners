import type { CampaignPathname } from "@/lib/campaigns/types";

/**
 * Balík e-shopu → jeho produktová stránka (argument, postup, cena, FAQ).
 * Karta v e-shope na ňu odkazuje; balíky bez stránky odkaz nemajú.
 * Produktové stránky sú len po slovensky — v EN e-shope sa odkaz nezobrazí.
 */
export const PACKAGE_PAGES: Partial<Record<string, CampaignPathname>> = {
  "ob-sro": "/company-formation",
  "ob-zivnost": "/trade-licence",
  "nh-kupna": "/property-transfer",
  "sp-vyzva": "/pre-action-letter",
  "sp-zaloba": "/debt-recovery",
  "it-gdpr": "/gdpr-documentation",
  "it-eshop": "/eshop-documents",
};
