"""
extract_audio_from_anki.py
----------------------------
Takes an Anki deck package (.apkg) you've exported after generating audio
with HyperTTS, and pulls the mp3s out with the filenames this app expects
(lesson_l1_0.mp3, pack_p21_2.mp3, chat_travel_1_t2_you0.mp3, etc.) instead
of Anki's internal content-hash names.

HOW TO GET HERE (do this in Anki first):

    1. Import phrases_for_anki.csv into a new note type with three fields:
       ID, Text, English (or just ID + Text — English is optional).
       File > Import... in Anki, map the CSV columns to those fields,
       put it all in a fresh deck (e.g. "XinChao TTS").

    2. Install HyperTTS if you haven't: Tools > Add-ons > Get Add-ons >
       code 111623432. Restart Anki.

    3. Subscribe to HyperTTS Pro (from within the HyperTTS menu, or at
       vocab.ai) — this unlocks their bundled FPT.AI Vietnamese voices,
       no separate FPT.AI account needed.

    4. Tools > HyperTTS > Services Configuration: enable the FPT.AI
       service (the Pro-bundled one, not "FptAiClassic").

    5. Tools > HyperTTS > choose your "XinChao TTS" note type, set
       Source field = Text, Target field = a new "Audio" field, pick
       a Southern Vietnamese voice (Linh San / Minh Quang / Lan Nhi —
       whichever you like best), preview a few, then run batch generate
       for the whole deck/note type. This can take a while for 407 cards.

    6. File > Export > "Anki Deck Package (*.apkg)", choose the
       "XinChao TTS" deck, make sure "Support older Anki versions" is
       OFF and media is included (it is by default), save it somewhere
       findable — e.g. xinchao_audio.apkg.

THEN RUN THIS SCRIPT:

    python extract_audio_from_anki.py xinchao_audio.apkg

    It creates an "audio" folder with correctly-named mp3s. Move that
    folder next to xinchao.html and you're done — every speaker button
    in the app will use these instead of falling back to browser TTS.

NOTES:
    - This only reads the .apkg (a zip file) — no Anki installation
      needed to run this script, just Python's standard library.
    - If your ID/Text field names or order differ from the CSV import,
      edit ID_FIELD_INDEX / TEXT_FIELD_INDEX / AUDIO_FIELD_INDEX below
      to match your note type's actual field order (Anki stores fields
      in note-type-definition order, not necessarily import order —
      check Tools > Manage Note Types > [your type] > Fields if unsure).
"""

import json
import os
import re
import sqlite3
import sys
import tempfile
import zipfile

OUTPUT_DIR = "audio"

# Field order within each note's stored record. Adjust if your note type's
# field order differs (0-indexed, in the order shown under Manage Note Types).
ID_FIELD_INDEX = 0
AUDIO_FIELD_INDEX = None  # set to an int if you know it; None = auto-detect via [sound:...] tag


def find_sound_filename(field_text):
    m = re.search(r"\[sound:([^\]]+)\]", field_text or "")
    return m.group(1) if m else None


def main():
    if len(sys.argv) < 2:
        sys.exit("Usage: python extract_audio_from_anki.py your_export.apkg")
    apkg_path = sys.argv[1]
    if not os.path.exists(apkg_path):
        sys.exit(f"Can't find {apkg_path}")

    os.makedirs(OUTPUT_DIR, exist_ok=True)

    with tempfile.TemporaryDirectory() as tmp:
        with zipfile.ZipFile(apkg_path) as z:
            z.extractall(tmp)

        media_map_path = os.path.join(tmp, "media")
        with open(media_map_path, encoding="utf-8") as f:
            media_map = json.load(f)  # {"0": "actualfilename.mp3", ...}
        filename_to_index = {v: k for k, v in media_map.items()}

        db_path = os.path.join(tmp, "collection.anki21")
        if not os.path.exists(db_path):
            db_path = os.path.join(tmp, "collection.anki2")
        conn = sqlite3.connect(db_path)
        cur = conn.cursor()
        cur.execute("SELECT flds FROM notes")
        rows = cur.fetchall()

        written, skipped = 0, 0
        for (flds,) in rows:
            fields = flds.split("\x1f")
            card_id = fields[ID_FIELD_INDEX].strip()
            if not card_id:
                skipped += 1
                continue

            sound_file = None
            if AUDIO_FIELD_INDEX is not None and AUDIO_FIELD_INDEX < len(fields):
                sound_file = find_sound_filename(fields[AUDIO_FIELD_INDEX])
            if not sound_file:
                for f in fields:
                    sound_file = find_sound_filename(f)
                    if sound_file:
                        break
            if not sound_file:
                print(f"  no audio found for {card_id}")
                skipped += 1
                continue

            idx = filename_to_index.get(sound_file)
            if idx is None:
                print(f"  media file missing from package for {card_id}: {sound_file}")
                skipped += 1
                continue

            src = os.path.join(tmp, idx)
            dst = os.path.join(OUTPUT_DIR, f"{card_id}.mp3")
            with open(src, "rb") as fsrc, open(dst, "wb") as fdst:
                fdst.write(fsrc.read())
            written += 1

        print(f"\nDone. Wrote {written} files to ./{OUTPUT_DIR}/  ({skipped} skipped)")
        print("Move that folder next to xinchao.html and you're set.")


if __name__ == "__main__":
    main()
