import { createCampaignRoute } from "@/lib/campaigns/page-factory";

const route = createCampaignRoute("property-transfer");
export const generateMetadata = route.generateMetadata;
export default route.Page;
