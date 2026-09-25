#!/bin/bash
# CV'yi cv.html'den tek sayfalık PDF'e çevirir.
# Kullanım:  cd cv && ./olustur.sh
set -e
KOK="$(cd "$(dirname "$0")/.." && pwd)"
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"

cd "$KOK"
python3 -m http.server 8799 >/dev/null 2>&1 &
SUNUCU=$!
trap 'kill $SUNUCU 2>/dev/null' EXIT
sleep 1.5

"$CHROME" --headless --disable-gpu --no-pdf-header-footer \
  --virtual-time-budget=9000 \
  --print-to-pdf="$KOK/assets/Sultan-Uyar-CV.pdf" \
  "http://127.0.0.1:8799/cv/cv.html" 2>/dev/null

echo "Hazır: assets/Sultan-Uyar-CV.pdf"
