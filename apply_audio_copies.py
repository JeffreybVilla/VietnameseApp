"""
apply_audio_copies.py
----------------------
Run this AFTER extract_audio_from_anki.py has already populated the ./audio
folder from your HyperTTS export.

Why this exists: several audio IDs the app needs share the exact same
Vietnamese sentence under two different filenames — e.g. a lesson's dialogue
line "lesson_l23_d1" and its matching flashcard "lesson_l23_1" are the same
spoken text, just referenced by two different features (the lesson detail
screen vs. the SRS/flashcard study screen). Rather than generating (and
paying for) the same sentence twice in HyperTTS, phrases_lessons_topics_audio.csv
only asked for ONE recording per unique sentence. This script duplicates that
one mp3 to every filename the app expects, using audio_copy_pairs.json
(written alongside this script) as the map of "from -> to".

It also covers a fully free case: lessons 1-10 already had their flashcard
("cards") audio generated in an earlier round. Since their dialogue lines are
literally the same sentences, those pre-existing mp3s get copied straight
over to the new lesson_lN_dI.mp3 names too — zero new TTS needed for those.

USAGE:
    python apply_audio_copies.py
    (run it from the same folder as your ./audio directory, or pass the path)

    python apply_audio_copies.py /path/to/VietnameseApp
"""
import json
import os
import shutil
import sys

HERE = os.path.dirname(os.path.abspath(__file__))


def main():
    base = sys.argv[1] if len(sys.argv) > 1 else "."
    audio_dir = os.path.join(base, "audio")
    pairs_path = os.path.join(HERE, "audio_copy_pairs.json")

    if not os.path.isdir(audio_dir):
        sys.exit(f"Can't find an 'audio' folder at {audio_dir} — run extract_audio_from_anki.py first, "
                  f"or pass the folder containing it as an argument.")
    if not os.path.exists(pairs_path):
        sys.exit(f"Can't find audio_copy_pairs.json next to this script ({pairs_path}).")

    with open(pairs_path, encoding="utf-8") as f:
        pairs = json.load(f)

    copied, missing_source, already_there = 0, 0, 0
    missing_list = []

    for pair in pairs:
        src = os.path.join(audio_dir, pair["from"] + ".mp3")
        dst = os.path.join(audio_dir, pair["to"] + ".mp3")

        if os.path.exists(dst) and os.path.getsize(dst) > 0:
            already_there += 1
            continue
        if not os.path.exists(src) or os.path.getsize(src) == 0:
            missing_source += 1
            missing_list.append(pair["from"])
            continue

        shutil.copyfile(src, dst)
        copied += 1

    print(f"Copied {copied} files.")
    print(f"Already present (skipped): {already_there}")
    print(f"Missing source (couldn't copy): {missing_source}")
    if missing_list:
        print("\nThese source files were never found — check your HyperTTS export covered them:")
        for m in missing_list[:30]:
            print(" -", m)
        if len(missing_list) > 30:
            print(f"   ...and {len(missing_list) - 30} more")


if __name__ == "__main__":
    main()
