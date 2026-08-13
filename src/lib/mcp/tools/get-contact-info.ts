import { defineTool } from "@lovable.dev/mcp-js";
import { COMPANY } from "../data";

export default defineTool({
  name: "get_contact_info",
  title: "Get contact info",
  description: "Get public contact details and company info for DSC Italy Tours (phone, WhatsApp, email, website, languages).",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(COMPANY, null, 2) }],
    structuredContent: { company: COMPANY },
  }),
});
