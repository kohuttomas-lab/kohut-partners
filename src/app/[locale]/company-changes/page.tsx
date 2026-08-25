import { createCampaignRoute } from "@/lib/campaigns/page-factory";

const route = createCampaignRoute("company-changes");
export const generateMetadata = route.generateMetadata;
export default route.Page;
