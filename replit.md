# Foo Bar Site

## Overview
A simple Vite + TypeScript frontend application with a counter example. This project was imported from GitHub and configured to run in the Replit environment.

## Project Structure
- **Frontend**: Vite + TypeScript
- **Port**: 5000
- **Build Tool**: Vite (using rolldown-vite variant)

## Key Files
- `vite.config.ts` - Vite configuration with Replit-specific settings
- `src/main.ts` - Main application entry point
- `src/counter.ts` - Counter functionality
- `index.html` - HTML entry point

## Development
- Run `npm run dev` to start the development server
- The app runs on port 5000 with host 0.0.0.0
- Configured with HMR over WSS for Replit's proxy environment

## Deployment
- Build command: `npm run build`
- Preview/Run command: `npm run preview`
- Deployment target: Autoscale (stateless frontend)

## Recent Changes (October 13, 2025)
- Installed Node.js 20 and npm dependencies
- Created vite.config.ts with Replit-specific proxy configuration
- Configured allowed hosts for Replit domain
- Set up workflow to run development server on port 5000
- Configured deployment for production builds
