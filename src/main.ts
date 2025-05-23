import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { 
  ListToolsRequestSchema,
  CallToolRequestSchema
} from "@modelcontextprotocol/sdk/types.js";

const server = new Server({
    name: "Stack AI Workflow Server",
    version: "1.0.0",
    description: "A simple MCP server to run Stack AI workflows",
}, {
    capabilities: {
        tools: {},
    },
});

server.setRequestHandler(ListToolsRequestSchema, async () => {
    return {
        tools: [{
            name: "run_workflow",
            description: "Run a workflow to perform a task and answer with the result",
            inputSchema: {
                type: "object",
                properties: {
                    input: {
                        type: "string",
                        description: "The input for the workflow"
                    },
                    user_id: {
                        type: "string",
                        description: "The user ID for the workflow"
                    }
                },
                required: ["input", "user_id"]
            }
        }]
    };
});

server.setRequestHandler(CallToolRequestSchema, async (request) => {
    if (request.params.name === "run_workflow") {
        const { input, user_id } = request.params.arguments as { input: string; user_id: string };
        
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
                text: JSON.stringify(result, null, 2),
            }],
        };
    } else {
        throw new Error(`Unknown tool: ${request.params.name}`);
    }
});

const transport = new StdioServerTransport();

const main = async () => {
    await server.connect(transport);
    console.error("Stack AI MCP Server running on stdio");
}

main().catch(console.error);