import { createCampaignRoute } from "@/lib/campaigns/page-factory";

const route = createCampaignRoute("payment-order-objection");
export const generateMetadata = route.generateMetadata;
export default route.Page;
