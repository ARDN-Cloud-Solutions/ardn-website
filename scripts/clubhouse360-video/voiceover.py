"""Generate the walkthrough voiceover with Kokoro (Apache-2.0, runs locally).

One WAV per scene line (vo-00.wav ... vo-09.wav) plus vo-durations.json,
which motion.mjs reads to time each scene to its narration.

Setup (Python 3.10-3.12; keep the venv on a short path, espeak-ng
truncates long data paths):
    uv venv --python 3.11 /tmp/c360tts
    VIRTUAL_ENV=/tmp/c360tts uv pip install kokoro soundfile \
      "en_core_web_sm @ https://github.com/explosion/spacy-models/releases/download/en_core_web_sm-3.8.0/en_core_web_sm-3.8.0-py3-none-any.whl"
Run:
    /tmp/c360tts/bin/python scripts/clubhouse360-video/voiceover.py <out_dir>
"""
import json
import sys
from pathlib import Path

import numpy as np
import soundfile as sf
from kokoro import KPipeline

VOICE = "af_heart"  # chosen by the owner, 2026-09-28
SPEED = 0.95
SR = 24000

# One line per scene of the motion cut (motion.mjs SCENES). Benefit-led,
# every claim from the product kit; no prices, savings or customer claims.
LINES = [
    "Running more than one club? Meet Clubhouse three-sixty.",
    "Six systems that never talk to each other, replaced by one platform and one member record.",
    "See every club side by side. And every regional VP and GM sees exactly their slice.",
    "Prospects join online in six steps. Signed, paid, and active, without a phone call.",
    "Every enquiry gets claimed or escalated, and guest rounds turn into leads.",
    "Contracts are e-signed in the platform, and no money moves until they are.",
    "Dues run on autopay, with automatic retries that never charge twice.",
    "Benefits follow members to every club, and each tee time draws down their allowance.",
    "Know what every round is worth, right down to revenue per available tee time.",
    "The pro shop sells online, and orders are waiting on the cart at tee time.",
    "Every table is isolated per club, with over four hundred permissions you control.",
    "And members get one app, in their own club's brand.",
    "More clubs. Not more systems. Book a walkthrough, and ask us about pricing.",
]


def main(out: Path) -> None:
    out.mkdir(parents=True, exist_ok=True)
    pipe = KPipeline(lang_code="a", repo_id="hexgrad/Kokoro-82M")
    durations = []
    for i, line in enumerate(LINES):
        audio = np.concatenate([a for _, _, a in pipe(line, voice=VOICE, speed=SPEED)])
        # Trim leading/trailing near-silence so timing is exact.
        idx = np.where(np.abs(audio) > 0.01)[0]
        audio = audio[max(idx[0] - 240, 0): idx[-1] + 2400]
        sf.write(out / f"vo-{i:02d}.wav", audio, SR)
        durations.append(round(len(audio) / SR, 3))
        print(f"vo-{i:02d}  {durations[-1]:5.2f}s  {line[:48]}")
    (out / "vo-durations.json").write_text(json.dumps(durations))
    # Display text for captions: spelled the way it reads on screen, not
    # the way it's written for pronunciation.
    captions = [
        l.replace("Clubhouse three-sixty", "Clubhouse360").replace("thirty-minute", "30-minute")
        for l in LINES
    ]
    (out / "vo-lines.json").write_text(json.dumps(captions))


if __name__ == "__main__":
    main(Path(sys.argv[1]))
