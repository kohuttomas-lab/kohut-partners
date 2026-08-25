import { createCampaignRoute } from "@/lib/campaigns/page-factory";

const route = createCampaignRoute("share-transfer");
export const generateMetadata = route.generateMetadata;
export default route.Page;
