import { createCampaignRoute } from "@/lib/campaigns/page-factory";

const route = createCampaignRoute("trademark-registration");
export const generateMetadata = route.generateMetadata;
export default route.Page;
