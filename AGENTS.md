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

## Workflow
1. Read only relevant files for the task.
2. Propose file-level plan before large edits.
3. Implement with minimal surface area.
4. Run checks for changed area.
5. Summarize: what changed, why, and how to verify.

## Done Criteria
A task is done only when:
- Code compiles.
- Lint passes for touched area.
- Tests pass for touched area (or new tests added where needed).
- Documentation/comments updated if behavior changed.

## Commands (default)
- Install: `npm install`
- Dev (both): `npm run dev`
- Build: `npm run build`
- Test: `npm run test`
- Lint: `npm run lint`
