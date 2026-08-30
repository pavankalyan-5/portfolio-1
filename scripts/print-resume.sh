#!/usr/bin/env bash
# Print /resume to public/pavan-kalyan-resume.pdf using headless Chrome.
#
#   npm run resume
#
# Starts a production server on a spare port, prints the page, shuts down.
set -euo pipefail

cd "$(dirname "$0")/.."

CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
PORT="${PORT:-3131}"
OUT="public/pavan-kalyan-resume.pdf"

if [ ! -x "$CHROME" ]; then
  echo "Google Chrome not found at: $CHROME" >&2
  echo "Open http://localhost:3000/resume and print to PDF manually instead." >&2
  exit 1
fi

[ -d .next ] || npm run build

npx next start -p "$PORT" >/dev/null 2>&1 &
SERVER=$!
trap 'kill "$SERVER" 2>/dev/null || true' EXIT

for _ in $(seq 1 40); do
  if curl -sf -o /dev/null "http://localhost:$PORT/resume"; then break; fi
  sleep 0.5
done

"$CHROME" \
  --headless \
  --disable-gpu \
  --no-pdf-header-footer \
  --print-to-pdf="$OUT" \
  "http://localhost:$PORT/resume" 2>/dev/null

echo "wrote $OUT ($(du -h "$OUT" | cut -f1))"
