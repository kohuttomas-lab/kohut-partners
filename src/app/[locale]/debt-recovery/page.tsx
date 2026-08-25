import { createCampaignRoute } from "@/lib/campaigns/page-factory";

const route = createCampaignRoute("debt-recovery");
export const generateMetadata = route.generateMetadata;
export default route.Page;
