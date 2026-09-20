import { createCampaignRoute } from "@/lib/campaigns/page-factory";

const route = createCampaignRoute("rejected-warranty-claim");
export const generateMetadata = route.generateMetadata;
export default route.Page;
