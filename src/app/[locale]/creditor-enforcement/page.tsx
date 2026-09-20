import { createTopicRoute } from "@/lib/topics/page-factory";

const route = createTopicRoute("xen");
export const generateMetadata = route.generateMetadata;
export default route.Page;
