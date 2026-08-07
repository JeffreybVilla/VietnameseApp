import json
import os
import time
import requests

API_KEY = "BjSGLVdomwZnR88pz1kFAkAUvVRzSI8f"
VOICE = "linhsan"

def generate_southern_audio():
    os.makedirs("audio", exist_ok=True)

    with open("phrases.json", "r", encoding="utf-8") as f:
        phrases = json.load(f)

    headers = {
        "api_key": API_KEY,
        "voice": VOICE,
        "speed": "0"
    }

    print(f"Starting Southern Vietnamese audio generation for {len(phrases)} phrases...\n")

    for index, item in enumerate(phrases, 1):
        phrase_id = item["id"]
        text = item["text"]
        output_file = f"audio/{phrase_id}.mp3"

        if os.path.exists(output_file) and os.path.getsize(output_file) > 0:
            print(f"[{index}/{len(phrases)}] Skipping {phrase_id} (already exists)")
            continue

        success = False
        attempts = 0

        while not success and attempts < 5:
            attempts += 1
            print(f"[{index}/{len(phrases)}] Generating {phrase_id}: '{text}'...")

            try:
                response = requests.post(
                    "https://api.fpt.ai/hmi/tts/v5",
                    data=text.encode("utf-8"),
                    headers=headers
                )
                res_json = response.json()

                if res_json.get("error") == 0 and "async" in res_json:
                    audio_url = res_json["async"]
                    time.sleep(3)
                    
                    audio_res = requests.get(audio_url)
                    if audio_res.status_code == 200:
                        with open(output_file, "wb") as audio_out:
                            audio_out.write(audio_res.content)
                        print(f" Saved -> {output_file}")
                        success = True
                        # Safe pause between requests to respect free tier rate limit
                        time.sleep(12)
                    else:
                        print(" Audio pending on server, waiting 5s...")
                        time.sleep(5)
                elif "rate limit" in str(res_json.get("message", "")).lower():
                    print(" Rate limit active. Pausing for 35s to clear API window...")
                    time.sleep(35)
                else:
                    print(f" Error: {res_json.get('message')}")
                    time.sleep(10)

            except Exception as e:
                print(f" Connection issue: {e}. Waiting 10s...")
                time.sleep(10)

if __name__ == "__main__":
    generate_southern_audio()
