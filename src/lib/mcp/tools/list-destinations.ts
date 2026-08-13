import { defineTool } from "@lovable.dev/mcp-js";
import { DESTINATIONS } from "../data";

export default defineTool({
  name: "list_destinations",
  title: "List destinations",
  description: "List the Italian destinations served by DSC Italy Tours.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: DESTINATIONS.join(", ") }],
    structuredContent: { destinations: DESTINATIONS },
  }),
});
