import { createCampaignRoute } from "@/lib/campaigns/page-factory";

const route = createCampaignRoute("company-formation");
export const generateMetadata = route.generateMetadata;
export default route.Page;
