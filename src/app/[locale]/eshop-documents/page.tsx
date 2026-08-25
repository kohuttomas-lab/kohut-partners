import { createCampaignRoute } from "@/lib/campaigns/page-factory";

const route = createCampaignRoute("eshop-documents");
export const generateMetadata = route.generateMetadata;
export default route.Page;
