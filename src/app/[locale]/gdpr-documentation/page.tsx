import { createCampaignRoute } from "@/lib/campaigns/page-factory";

const route = createCampaignRoute("gdpr-documentation");
export const generateMetadata = route.generateMetadata;
export default route.Page;
