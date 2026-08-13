import { defineMcp } from "@lovable.dev/mcp-js";
import listServicesTool from "./tools/list-services";
import listToursTool from "./tools/list-tours";
import listDestinationsTool from "./tools/list-destinations";
import getContactInfoTool from "./tools/get-contact-info";

export default defineMcp({
  name: "dsc-italy-tours",
  title: "DSC Italy Tours",
  version: "0.1.0",
  instructions:
    "Public tools for DSC Italy Tours, a private transfer and tour company in Italy. Use `list_services` for the service catalog, `list_tours` for private tour options, `list_destinations` for cities served, and `get_contact_info` for phone, WhatsApp and email.",
  tools: [listServicesTool, listToursTool, listDestinationsTool, getContactInfoTool],
});
