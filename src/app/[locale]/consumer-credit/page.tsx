import { createCampaignRoute } from "@/lib/campaigns/page-factory";

const route = createCampaignRoute("consumer-credit");
export const generateMetadata = route.generateMetadata;
export default route.Page;
