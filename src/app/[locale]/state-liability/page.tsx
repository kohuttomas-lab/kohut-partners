import { createCampaignRoute } from "@/lib/campaigns/page-factory";

const route = createCampaignRoute("state-liability");
export const generateMetadata = route.generateMetadata;
export default route.Page;
