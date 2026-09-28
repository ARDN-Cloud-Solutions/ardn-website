"""Generate the walkthrough voiceover with Kokoro (Apache-2.0, runs locally).

One WAV per scene line (vo-00.wav ... vo-09.wav) plus vo-durations.json,
which render.mjs reads to time each scene to its narration.

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

# Keep in sync with voiceover-script.md and SCENES in render.mjs.
LINES = [
    "If you run more than one club, this is for you.",
    "This is Clubhouse three-sixty. Every club in your portfolio, side by side. "
    "And the same view narrows itself to each regional VP and GM.",
    "It starts on the club's own website. A prospect picks a plan, adds the family, "
    "signs, and pays, in six steps, without a phone call.",
    "Every enquiry lands in a shared pool for your membership directors. "
    "If nobody claims it, it escalates. Nothing slips through.",
    "Contracts are signed inside the platform, against the exact version they read. "
    "And no money moves until they do.",
    "Benefits are real numbers, not bullet points. Rounds, guest passes, discounts, "
    "tracked across every club they can play.",
    "Book a tee time, and the allowance comes down on its own. "
    "Rate grids, booking windows, and carts, all in one sheet.",
    "Then you see what every round is worth. Utilization, average ticket, "
    "and revenue per available tee time.",
    "And your members get one app, in their club's brand. "
    "Their card, their benefits, their bills, their tee times.",
    "More clubs. Not more systems. Book a thirty-minute walkthrough.",
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
