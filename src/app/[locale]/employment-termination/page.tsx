import { createCampaignRoute } from "@/lib/campaigns/page-factory";

const route = createCampaignRoute("employment-termination");
export const generateMetadata = route.generateMetadata;
export default route.Page;
