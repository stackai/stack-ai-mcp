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

1. First, ensure you have the following environment variables set:
   - `STACK_AI_ORG_ID`: Your Stack AI organization ID
   - `STACK_AI_PROJECT_ID`: Your Stack AI project ID 
   - `STACK_API_KEY`: Your Stack AI API key

# Installing

To use the Stack AI MCP Server in Claude Desktop application, you have to install this Github project in your computer and include the absolute path of the main.ts code.

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

This will install all required dependencies and compile the TypeScript code.

