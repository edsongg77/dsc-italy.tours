import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { TOURS } from "../data";

export default defineTool({
  name: "list_tours",
  title: "List tours",
  description: "List the private tours offered, optionally filtered by a search term matching the title, places or description.",
  inputSchema: {
    query: z.string().trim().min(1).optional().describe("Optional search term, e.g. 'Roma' or 'Toscana'."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ query }) => {
    const q = query?.toLowerCase();
    const tours = q
      ? TOURS.filter((t) => `${t.title} ${t.places} ${t.description}`.toLowerCase().includes(q))
      : TOURS;
    return {
      content: [{ type: "text", text: JSON.stringify(tours, null, 2) }],
      structuredContent: { tours },
    };
  },
});
