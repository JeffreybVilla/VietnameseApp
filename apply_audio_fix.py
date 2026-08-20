"""
apply_audio_fix.py
--------------------
One-time correction pass. Run this AFTER extract_audio_from_anki.py has
pulled the newly-generated audio from your phrases_AUDIO_FIX.csv export into
the ./audio folder.

Background: an earlier round of Anki/HyperTTS audio (from way back, before
the 62-lesson curriculum was finalized) is still sitting in your audio folder
under the old lesson_lN_i.mp3 flashcard filenames — but the actual lesson
content for Days 1-28 has since been rewritten, so those old recordings say
completely different sentences than what's in the app now (e.g. the old
lesson_l5_0.mp3 says "Cho tôi một bát phở" / "I'd like a bowl of phở", but
Day 5 is now "Excuse Me and Sorry" and should say "Cho tôi đi qua nhé." /
"Let me pass, please."). Because those old files technically existed, the
last audio-generation pass treated them as already-done and copied that
wrong audio into the newer lesson_lN_dI.mp3 (dialogue) and nphrase_lN_I.mp3
(new-mode phrase deck) filenames too.

This script — unlike apply_audio_copies.py — ALWAYS overwrites the
destination file, because every destination here is a KNOWN-WRONG file from
that mixup, not an untouched one.

USAGE:
    python extract_audio_from_anki.py your_fix_export.apkg
    python apply_audio_fix.py
"""
import json
import os
import shutil
import sys

HERE = os.path.dirname(os.path.abspath(__file__))


def main():
    base = sys.argv[1] if len(sys.argv) > 1 else "."
    audio_dir = os.path.join(base, "audio")
    pairs_path = os.path.join(HERE, "audio_fix_copy_pairs.json")

    if not os.path.isdir(audio_dir):
        sys.exit(f"Can't find an 'audio' folder at {audio_dir} — run extract_audio_from_anki.py first.")
    if not os.path.exists(pairs_path):
        sys.exit(f"Can't find audio_fix_copy_pairs.json next to this script ({pairs_path}).")

    with open(pairs_path, encoding="utf-8") as f:
        pairs = json.load(f)

    copied, missing_source = 0, 0
    missing_list = []

    for pair in pairs:
        src = os.path.join(audio_dir, pair["from"] + ".mp3")
        dst = os.path.join(audio_dir, pair["to"] + ".mp3")

        if not os.path.exists(src) or os.path.getsize(src) == 0:
            missing_source += 1
            missing_list.append(pair["from"])
            continue

        shutil.copyfile(src, dst)  # always overwrite — dst is a known-wrong file
        copied += 1

    print(f"Fixed (overwrote) {copied} files.")
    print(f"Missing source (couldn't fix — check your HyperTTS export covered these): {missing_source}")
    if missing_list:
        print("\nThese weren't found — make sure your fix export included them:")
        for m in sorted(set(missing_list))[:30]:
            print(" -", m)


if __name__ == "__main__":
    main()
