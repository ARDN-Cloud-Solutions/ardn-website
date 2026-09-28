"""Generate the walkthrough voiceover with Kokoro (Apache-2.0, runs locally).

One WAV per scene line (vo-00.wav ... vo-09.wav) plus vo-durations.json,
which motion.mjs reads to time each scene to its narration.

Setup (Python 3.10-3.12; keep the venv on a short path, espeak-ng
truncates long data paths):
    uv venv --python 3.11 /tmp/cs-tts
    VIRTUAL_ENV=/tmp/cs-tts uv pip install kokoro soundfile \
      "en_core_web_sm @ https://github.com/explosion/spacy-models/releases/download/en_core_web_sm-3.8.0/en_core_web_sm-3.8.0-py3-none-any.whl"
Run:
    /tmp/cs-tts/bin/python scripts/club-steward-video/voiceover.py <out_dir>
"""
import json
import sys
from pathlib import Path

import numpy as np
import soundfile as sf
from kokoro import KPipeline

VOICE = "af_heart"  # chosen by the owner, 2026-09-28 (upbeat take)
SPEED = 1.08  # brighter, more energetic read
SR = 24000
rng = np.random.default_rng(19)


def breath(dur=0.32, level=0.02):
    """A soft inhale between sentences: band-limited noise with a quick swell."""
    from scipy import signal
    n = int(dur * SR)
    x = signal.sosfilt(signal.butter(2, [350, 2800], "band", fs=SR, output="sos"), rng.standard_normal(n))
    t = np.linspace(0, 1, n)
    return x / (np.abs(x).max() + 1e-9) * np.sin(np.pi * t) ** 1.6 * (0.6 + 0.4 * t) * level


def trim(a):
    idx = np.where(np.abs(a) > 0.01)[0]
    return a[max(idx[0] - 240, 0): idx[-1] + 1400]


def speak(pipe, line):
    """Render sentence by sentence and rejoin with varied pauses and breaths,
    so the read has natural rhythm instead of one continuous stream."""
    import re
    parts = [p for p in re.split(r"(?<=[.?!])\s+", line.strip()) if p]
    out = []
    for k, sentence in enumerate(parts):
        clip = trim(np.concatenate([a for _, _, a in pipe(sentence, voice=VOICE, speed=SPEED)]))
        if k:
            out.append(np.zeros(int(rng.uniform(0.24, 0.4) * SR)))
            if len(sentence) > 28 and rng.random() < 0.7:
                out.append(breath())
                out.append(np.zeros(int(0.04 * SR)))
        out.append(clip)
    return np.concatenate(out)

# One line per scene of the motion cut (motion.mjs SCENES). Benefit-led,
# every claim from the product kit; no prices, savings or customer claims.
LINES = [
    "Running more than one club? Meet Club Steward.",
    "Six systems that never talk to each other, replaced by one platform and one member record.",
    "See every club side by side. And every regional VP and GM sees exactly their slice.",
    "Prospects join online in six steps. Signed, paid, and active, without a phone call.",
    "Every inquiry gets claimed or escalated, and guest rounds turn into leads.",
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
        audio = speak(pipe, line)
        sf.write(out / f"vo-{i:02d}.wav", audio, SR)
        durations.append(round(len(audio) / SR, 3))
        print(f"vo-{i:02d}  {durations[-1]:5.2f}s  {line[:48]}")
    (out / "vo-durations.json").write_text(json.dumps(durations))
    # Display text for captions: spelled the way it reads on screen, not
    # the way it's written for pronunciation.
    captions = [
        l.replace("thirty-minute", "30-minute")
        for l in LINES
    ]
    (out / "vo-lines.json").write_text(json.dumps(captions))


if __name__ == "__main__":
    main(Path(sys.argv[1]))
