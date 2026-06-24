#!/usr/bin/env bash
# Сборка PDF-альбома макетов: cover + toc + 17 экранов
# Требует: Google Chrome, pdfunite (poppler), запущенный python-сервер на :8765

set -euo pipefail

CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
BASE="http://127.0.0.1:8765"
OUT_DIR="$(cd "$(dirname "$0")" && pwd)"
PARTS_DIR="${OUT_DIR}/parts"
FINAL="${OUT_DIR}/Особое_семейное_положение_макеты.pdf"

mkdir -p "${PARTS_DIR}"
rm -f "${PARTS_DIR}"/*.pdf
rm -f "${FINAL}"

print_url() {
  local url="$1"
  local out="$2"
  local data_dir
  data_dir=$(mktemp -d /tmp/chrome-pdf.XXXXXX)
  rm -f "${out}"

  "${CHROME}" \
    --headless \
    --disable-gpu \
    --no-sandbox \
    --hide-scrollbars \
    --no-pdf-header-footer \
    --no-default-browser-check \
    --no-first-run \
    --disable-extensions \
    --disable-background-networking \
    --disable-component-update \
    --disable-default-apps \
    --disable-sync \
    --virtual-time-budget=6000 \
    --run-all-compositor-stages-before-draw \
    --user-data-dir="${data_dir}" \
    --print-to-pdf="${out}" \
    "${url}" >/dev/null 2>&1 &
  local chrome_pid=$!

  # ждём появления непустого PDF + время на стабилизацию JS-партиалов
  local waited=0
  while [ ! -s "${out}" ] && [ "${waited}" -lt 30 ]; do
    sleep 0.5
    waited=$((waited + 1))
  done
  sleep 1.5

  kill -9 "${chrome_pid}" 2>/dev/null || true
  wait "${chrome_pid}" 2>/dev/null || true
  rm -rf "${data_dir}"

  if [ ! -s "${out}" ]; then
    echo "  ! не удалось сгенерировать ${out}"
    return 1
  fi
}

echo "→ обложка"
print_url "${BASE}/pdf/_cover.html" "${PARTS_DIR}/00-cover.pdf"

echo "→ содержание"
print_url "${BASE}/pdf/_toc.html" "${PARTS_DIR}/01-toc.pdf"

PAGES=(
  "01-landing.html"
  "02-login.html"
  "03-register.html"
  "04-onboarding.html"
  "05-home.html"
  "06-chat.html"
  "07-documents-upload.html"
  "08-documents-result.html"
  "09-recommendations.html"
  "10-recommendation-detail.html"
  "11-places.html"
  "12-place-detail.html"
  "13-profile.html"
  "15-settings.html"
  "16-admin-dashboard.html"
  "17-admin-knowledge.html"
  "18-admin-stats.html"
)

i=2
for p in "${PAGES[@]}"; do
  num=$(printf "%02d" "${i}")
  echo "→ ${p}"
  print_url "${BASE}/${p}" "${PARTS_DIR}/${num}-${p%.html}.pdf"
  i=$((i + 1))
done

echo "→ объединение..."
pdfunite "${PARTS_DIR}"/*.pdf "${FINAL}"

echo "✓ готово: ${FINAL}"
ls -lh "${FINAL}"
