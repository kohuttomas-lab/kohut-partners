import { createCampaignRoute } from "@/lib/campaigns/page-factory";

const route = createCampaignRoute("accident-compensation");
export const generateMetadata = route.generateMetadata;
export default route.Page;
