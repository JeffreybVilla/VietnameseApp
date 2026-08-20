#!/bin/bash
# ============================================================
#  DailyViet — Fix Mismatched Audio (Days 1-28)
# ============================================================
#  One-time correction. Double-click this in Finder — no
#  terminal typing required. It will:
#    1. Ask you to pick the .apkg you exported after running
#       phrases_AUDIO_FIX.csv through HyperTTS
#    2. Pull those mp3s out with the right filenames
#    3. Overwrite every old mismatched file this bug touched
#       (128 lesson "card" files, their dialogue copies, and
#       their new-mode phrase-deck copies)
#
#  Use generate_audio.command for regular/future audio batches —
#  this one is just for this specific fix.
# ============================================================

cd "$(dirname "$0")"

PY="python3"
command -v python3 >/dev/null 2>&1 || PY="python"

echo "============================================"
echo " DailyViet Audio FIX (Days 1-28 mismatch)"
echo "============================================"
echo ""

APKG=$(osascript <<'EOF' 2>/dev/null
tell application "Finder" to activate
POSIX path of (choose file with prompt "Select your HyperTTS export for the FIX batch (.apkg)")
EOF
)

if [ -z "$APKG" ]; then
    echo "No file was selected. Trying to find the newest .apkg in this folder instead..."
    APKG=$(ls -t *.apkg 2>/dev/null | head -n 1)
    if [ -z "$APKG" ]; then
        echo ""
        echo "Couldn't find any .apkg file here either. Export one from Anki first, then run this again."
        echo ""
        read -p "Press Enter to close this window..."
        exit 1
    fi
    echo "Using: $APKG"
fi

echo ""
echo "Selected file: $APKG"
echo ""
echo "Step 1 of 2 — extracting the corrected audio..."
echo "--------------------------------------------"
"$PY" extract_audio_from_anki.py "$APKG"
STEP1_STATUS=$?

echo ""
echo "Step 2 of 2 — overwriting every mismatched file..."
echo "--------------------------------------------"
"$PY" apply_audio_fix.py
STEP2_STATUS=$?

echo ""
echo "============================================"
if [ $STEP1_STATUS -eq 0 ] && [ $STEP2_STATUS -eq 0 ]; then
    echo " Done! Days 1-28 audio should now match the app."
else
    echo " Finished, but something above reported an error — scroll up to check."
fi
echo "============================================"
echo ""
read -p "Press Enter to close this window..."
