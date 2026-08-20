#!/bin/bash
# ============================================================
#  DailyViet — Import Audio from HyperTTS/Anki
# ============================================================
#  Double-click this file (in Finder) to run it — no terminal
#  typing required. It will:
#    1. Ask you to pick the .apkg file you exported from Anki
#    2. Pull the mp3s out with the filenames the app expects
#    3. Duplicate any files that are needed under more than
#       one filename (handled automatically by apply_audio_copies.py)
#
#  If macOS blocks it the first time with a security warning,
#  right-click (or Control-click) the file and choose "Open"
#  instead of double-clicking — you only need to do that once.
# ============================================================

# Always run from the folder this file lives in, so it finds
# extract_audio_from_anki.py / apply_audio_copies.py / phrases_missing_audio.csv
# no matter where it's double-clicked from.
cd "$(dirname "$0")"

# Prefer python3; fall back to python if that's what's on this Mac.
PY="python3"
command -v python3 >/dev/null 2>&1 || PY="python"

echo "============================================"
echo " DailyViet Audio Import"
echo "============================================"
echo ""

# Ask for the .apkg file with a normal macOS "Open" dialog — no typing needed.
APKG=$(osascript <<'EOF' 2>/dev/null
tell application "Finder" to activate
POSIX path of (choose file with prompt "Select your HyperTTS export (.apkg file)")
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
echo "Step 1 of 2 — extracting audio from the Anki export..."
echo "--------------------------------------------"
"$PY" extract_audio_from_anki.py "$APKG"
STEP1_STATUS=$?

echo ""
echo "Step 2 of 2 — copying audio to every filename it's needed under..."
echo "--------------------------------------------"
"$PY" apply_audio_copies.py
STEP2_STATUS=$?

echo ""
echo "============================================"
if [ $STEP1_STATUS -eq 0 ] && [ $STEP2_STATUS -eq 0 ]; then
    echo " Done! Check the 'audio' folder — new mp3s are in there."
else
    echo " Finished, but something above reported an error — scroll up to check."
fi
echo "============================================"
echo ""
read -p "Press Enter to close this window..."
