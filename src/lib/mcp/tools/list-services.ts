import { defineTool } from "@lovable.dev/mcp-js";
import { SERVICES } from "../data";

export default defineTool({
  name: "list_services",
  title: "List services",
  description: "List the services offered by DSC Italy Tours (transfers, city tours, day trips, cruise port pickups, custom itineraries).",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(SERVICES, null, 2) }],
    structuredContent: { services: SERVICES },
  }),
});
