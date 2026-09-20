import { createCampaignRoute } from "@/lib/campaigns/page-factory";

const route = createCampaignRoute("debt-relief-repayment-plan");
export const generateMetadata = route.generateMetadata;
export default route.Page;
