import { createCampaignRoute } from "@/lib/campaigns/page-factory";

const route = createCampaignRoute("trade-licence");
export const generateMetadata = route.generateMetadata;
export default route.Page;
