# Server Agent Guide

## Scope
Applies to files under `server/`.

## Stack
- Node.js
- Express
- TypeScript
- MongoDB (Mongoose)
- JWT auth (access + refresh)

## Backend Conventions
1. Use module pattern: controller, service, routes.
2. Keep controllers thin; business logic in services.
3. Validate request input before service logic.
4. Use centralized error middleware.
5. Keep responses consistent.
