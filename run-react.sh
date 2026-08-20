#!/usr/bin/env bash
set -euo pipefail

APP_DIR="${1:-.}"
PORT="${2:-2418}"

cd "$APP_DIR"

if [ ! -d node_modules ]; then
  npm install
fi

# Vite React app
if [ -f vite.config.js ] || [ -f vite.config.ts ]; then
  BROWSER=none npm run dev -- --host --port "$PORT"

# Create React App / normal npm start
else
  BROWSER=none PORT="$PORT" npm start
fi
