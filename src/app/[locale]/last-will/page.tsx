import { createCampaignRoute } from "@/lib/campaigns/page-factory";

const route = createCampaignRoute("last-will");
export const generateMetadata = route.generateMetadata;
export default route.Page;
