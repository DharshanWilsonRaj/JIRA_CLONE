# Repository Agent Guide

## Purpose
This repo contains a JIRA clone with:
- `client/` (React + Vite + TypeScript)
- `server/` (Node.js + Express + TypeScript + MongoDB)

Agents must follow this guide plus any scoped guide in `.agents/client/AGENTS.md` or `.agents/server/AGENTS.md`.

## Global Rules
1. Do not edit unrelated files.
2. Prefer small, focused changes.
3. Keep naming clear and consistent.
4. Avoid breaking API contracts without updating both sides.
5. Add or update tests for behavior changes.
6. Never commit secrets or real credentials.
