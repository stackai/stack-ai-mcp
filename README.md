![Stack AI Cover](https://github.com/stackai/stack-ai-mcp/blob/main/resources/cover.png)

<div align="center"><strong>Stack AI MCP Server</strong></div>
<div align="center">A powerful MCP server for building and deploying AI applications.<br />Connect your enterprise data sources and enhance your AI capabilities.</div>
<br />
<div align="center">
<a href="https://stack-ai.com">Website</a> 
<span> · </span>
<a href="https://github.com/stackai/stack-ai-mcp">GitHub</a> 
<span> · </span>
<a href="https://discord.gg/sSbwawtNsV">Discord</a>
</div>

# Stack AI MCP Server

A Model Context Protocol (MCP) server that connects to Stack AI workflows, allowing you to run your Stack AI workflows directly through MCP-compatible clients.

## Features

- Run Stack AI workflows through MCP
- Pass user inputs to your workflows
- Receive workflow results as structured responses

## Setup

### Prerequisites

You'll need the following Stack AI credentials:
- `STACK_AI_ORG_ID`: Your Stack AI organization ID
- `STACK_AI_PROJECT_ID`: Your Stack AI project ID 
- `STACK_API_KEY`: Your Stack AI API key

### Installation

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/stackai/stack-ai-mcp.git
   ```

2. Navigate to the project directory:
   ```bash
   cd stack-ai-mcp
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

### Claude Desktop Configuration

To use the Stack AI MCP Server with Claude Desktop, add the following to your `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "stack-ai-workflow": {
      "command": "node",
      "args": ["/absolute/path/to/stack-ai-mcp/src/main.ts"],
      "env": {
        "STACK_AI_ORG_ID": "your_org_id_here",
        "STACK_AI_PROJECT_ID": "your_project_id_here", 
        "STACK_API_KEY": "your_api_key_here"
      }
    }
  }
}
```

Replace `/absolute/path/to/stack-ai-mcp/src/main.ts` with the actual absolute path to your cloned repository, and replace the environment variable values with your actual Stack AI credentials.

### Testing Locally

To test the MCP server locally:

```bash
npm run dev
```

This will start the server and you should see: "Stack AI MCP Server running on stdio"

