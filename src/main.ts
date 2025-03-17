import { McpServer } from "@modelcontextprotocol/sdk/server/mcp";
import { z } from "zod";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";

const server = new McpServer({
    name: "Stack AI Workflow Server",
    version: "1.0.0",
    description: "A simple MCP server to run Stack AI workflows",
    port: 3000,
    host: "localhost",
});

server.tool("run_workflow", "Run a workflow to perform a task and answer with the result", {
    input: z.string(),
    user_id: z.string(),
}, async ({input, user_id}) => {
    const response = await fetch(`https://api.stack-ai.com/inference/v0/run/${process.env.STACK_AI_ORG_ID}/${process.env.STACK_AI_PROJECT_ID}`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${process.env.STACK_API_KEY}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "in-0": input,
            "user_id": user_id
        })
    });

    const result = await response.json();

    return {
        content: [{
            type: "text",
            text: JSON.stringify(result),
        }],
    }
});

const transport = new StdioServerTransport();

const main = async () => {
    await server.connect(transport);
}

main();