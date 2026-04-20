#!/usr/bin/env bash
# Create the Pinho Law "Support Agent" on Anthropic's Managed Agents platform.
#
# This script costs money + creates persistent resources on YOUR Anthropic
# account (the one ANTHROPIC_API_KEY resolves to). It is NOT run automatically
# by the build — execute it by hand after reviewing.
#
# Prereqs:
#   1. Install the CLI:   brew install anthropics/tap/ant
#   2. Set the API key:   export ANTHROPIC_API_KEY="sk-ant-..."
#
# What it creates:
#   - An agent named "Support Agent" using claude-sonnet-4-6
#   - A cloud environment named "env" with unrestricted networking
#
# Spec source: scripts/support-agent.config.json (JSON config in this dir)

set -euo pipefail

if ! command -v ant >/dev/null 2>&1; then
  echo "error: the 'ant' CLI is not installed." >&2
  echo "install: brew install anthropics/tap/ant" >&2
  exit 1
fi

if [[ -z "${ANTHROPIC_API_KEY:-}" ]]; then
  echo "error: ANTHROPIC_API_KEY is not set." >&2
  echo "export it in your shell, then re-run: export ANTHROPIC_API_KEY=sk-ant-..." >&2
  exit 1
fi

echo "==> Creating managed agent 'Support Agent'…"
ant beta:agents create \
  --name 'Support Agent' \
  --description 'Docs-powered support agent that answers questions from llms.txt and escalates unanswered ones via email (Resend)' \
  --model '{"id": "claude-sonnet-4-6"}' \
  --system 'You are Support Agent, a docs-powered support agent that answers questions from llms.txt and escalates unanswered ones via email (resend)' \
  --tool '{type: agent_toolset_20260401}'

echo
echo "==> Creating cloud environment 'env' (unrestricted networking)…"
ant beta:environments create \
  --name 'env' \
  --config '{type: cloud, networking: {type: unrestricted}}'

echo
echo "Done. Capture the agent_id and environment_id from the output above,"
echo "then start a session with:  ant beta:sessions start --agent <agent_id> --environment <environment_id>"
