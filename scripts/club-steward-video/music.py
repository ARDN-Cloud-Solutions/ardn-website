"""Original music bed + UI sound effects for the Club Steward motion video.

Everything is synthesised here, so there is no third-party licence to track.
128 BPM pop-house in A minor (Am-F-C-G): riser into a drop at the first
scene change, full groove underneath the narration (ducked in the final
mix), final hit on the end card.

    python music.py timeline.json out_dir
timeline.json (written by motion.mjs): {"total": s, "drop": s, "end": s,
"pops": [s, ...], "whooshes": [s, ...]}
Writes music.wav and sfx.wav (44.1 kHz stereo float).
"""
import json
import sys
from pathlib import Path

import numpy as np
import soundfile as sf
from scipy import signal

SR = 44100
BPM = 128
BEAT = 60 / BPM
BAR = 4 * BEAT
rng = np.random.default_rng(360)

# Am - F - C - G, one chord per bar (MIDI notes)
CHORDS = [[57, 60, 64], [53, 57, 60], [55, 60, 64], [55, 59, 62]]
ROOTS = [33, 29, 36, 31]


def hz(m):
    return 440.0 * 2 ** ((m - 69) / 12)


def t_axis(sec):
    return np.arange(int(sec * SR)) / SR


def lp(x, fc, order=2):
    return signal.sosfilt(signal.butter(order, fc, "low", fs=SR, output="sos"), x, axis=0)


def hp(x, fc, order=2):
    return signal.sosfilt(signal.butter(order, fc, "high", fs=SR, output="sos"), x, axis=0)


def bp(x, lo, hi, order=2):
    return signal.sosfilt(signal.butter(order, [lo, hi], "band", fs=SR, output="sos"), x, axis=0)


def place(buf, clip, at, gain=1.0, pan=0.0):
    """Mix a mono clip into the stereo buffer at time `at` with equal-power pan."""
    i = int(at * SR)
    if i >= len(buf):
        return
    clip = clip[: len(buf) - i]
    l, r = np.cos((pan + 1) * np.pi / 4), np.sin((pan + 1) * np.pi / 4)
    buf[i : i + len(clip), 0] += clip * gain * l
    buf[i : i + len(clip), 1] += clip * gain * r


def saw(f, t):
    return signal.sawtooth(2 * np.pi * f * t)


# ---------------- instruments ----------------

def kick():
    t = t_axis(0.45)
    f = 46 + 120 * np.exp(-t / 0.035)
    ph = 2 * np.pi * np.cumsum(f) / SR
    body = np.sin(ph) * np.exp(-t / 0.26)
    click = hp(rng.standard_normal(len(t)), 2000) * np.exp(-t / 0.004) * 0.3
    return np.tanh(1.6 * (body + click)) * 0.95


def clap():
    t = t_axis(0.35)
    n = bp(rng.standard_normal(len(t)), 900, 3200)
    env = np.zeros_like(t)
    for d in (0.0, 0.011, 0.022):
        env += np.where(t >= d, np.exp(-(t - d) / 0.012), 0) * 0.6
    env += np.where(t >= 0.03, np.exp(-(t - 0.03) / 0.14), 0)
    return n * env * 0.55


def hat(open_=False):
    t = t_axis(0.25 if open_ else 0.06)
    n = hp(rng.standard_normal(len(t)), 7500, 4)
    return n * np.exp(-t / (0.09 if open_ else 0.018)) * (0.28 if open_ else 0.22)


def bass_note(m, dur):
    t = t_axis(dur)
    f = hz(m)
    x = 0.6 * saw(f, t) + 0.4 * np.sign(np.sin(2 * np.pi * f * t))
    env = np.minimum(1, t / 0.004) * np.exp(-t / 0.16)
    return lp(x * env, 700, 4) * 0.8 + np.sin(2 * np.pi * f * t) * env * 0.35


def pluck(m, dur=0.3):
    t = t_axis(dur)
    f = hz(m)
    x = saw(f, t) + 0.5 * saw(f * 1.005, t)
    env = np.minimum(1, t / 0.002) * np.exp(-t / 0.11)
    cut = 900 + 4200 * np.exp(-t / 0.05)
    # time-varying lowpass approximated by blending two static filters
    bright, dark = lp(x, 5200), lp(x, 900)
    w = (cut - 900) / 4200
    return (bright * w + dark * (1 - w)) * env * 0.22


def pad_chord(notes, dur):
    t = t_axis(dur)
    x = np.zeros_like(t)
    for m in notes + [notes[0] - 12]:
        for d in (-0.12, -0.05, 0, 0.05, 0.12):
            x += saw(hz(m + d), t + rng.uniform(0, 0.01))
    env = np.minimum(1, t / 0.12) * np.minimum(1, (dur - t) / 0.2).clip(0, 1)
    return lp(x / 18, 2400, 2) * env


def riser(dur):
    t = t_axis(dur)
    n = rng.standard_normal(len(t))
    out = np.zeros_like(t)
    seg = int(0.05 * SR)
    for i in range(0, len(t), seg):
        frac = i / len(t)
        lo = 300 + 5000 * frac ** 2
        chunk = bp(n[i : i + seg + 256], lo, lo * 2.2)[: min(seg, len(t) - i)]
        out[i : i + len(chunk)] = chunk
    return out * (t / dur) ** 2 * 0.5


def impact():
    t = t_axis(2.5)
    boom = np.sin(2 * np.pi * (38 + 60 * np.exp(-t / 0.08)) * t) * np.exp(-t / 0.5)
    crash = hp(rng.standard_normal(len(t)), 4000) * np.exp(-t / 0.9) * 0.25
    return (boom * 0.9 + crash)


def reverb(x, secs=2.2, wet=0.25):
    t = t_axis(secs)
    ir = rng.standard_normal((len(t), 2)) * np.exp(-t / 0.55)[:, None]
    ir = lp(ir, 6000)
    ir /= np.sqrt((ir ** 2).sum(axis=0))
    y = np.stack([signal.fftconvolve(x[:, c], ir[:, c])[: len(x)] for c in range(2)], axis=1)
    return x * (1 - wet) + y * wet


def pingpong(x, delay, fb=0.38, mix=0.3):
    d = int(delay * SR)
    y = x.copy()
    for k in range(1, 6):
        g = fb ** k * mix
        side = (k % 2)  # alternate channels
        y[d * k :, side] += x[: len(x) - d * k, 0] * g
    return y


# ---------------- arrangement ----------------

def build(total, drop, end):
    n = int((total + 2.5) * SR)
    drums = np.zeros((n, 2))
    bass = np.zeros((n, 2))
    pads = np.zeros((n, 2))
    arps = np.zeros((n, 2))
    fx = np.zeros((n, 2))

    k, c, hc, ho = kick(), clap(), hat(), hat(True)
    # align the grid so a bar starts exactly at the drop
    grid0 = drop - BAR * np.ceil(drop / BAR)
    bar_t = grid0
    bar_i = 0
    while bar_t < total + BAR:
        chord = CHORDS[bar_i % 4]
        root = ROOTS[bar_i % 4]
        groove = drop <= bar_t < end
        intro = bar_t < drop
        if bar_t + BAR > 0:
            pads_gain = 0.55 if groove else 0.8
            place(pads, pad_chord(chord, BAR + 0.25), max(bar_t, 0), pads_gain)
        for b in range(4):
            bt = bar_t + b * BEAT
            if bt < 0 or bt > total:
                continue
            if groove:
                place(drums, k, bt, 1.0)
                if b in (1, 3):
                    place(drums, c, bt, 0.9, 0.05)
                place(drums, ho, bt + BEAT / 2, 0.55, 0.25)
                place(bass, bass_note(root + 12 * (b == 3), BEAT / 2), bt + BEAT / 2, 0.9)
                for s in range(4):
                    place(drums, hc, bt + s * BEAT / 4, 0.35 if s % 2 else 0.18, -0.3)
            # 16th-note arp, filtered quieter in the intro
            for s in range(4):
                idx = (b * 4 + s) % 4
                m = chord[[0, 1, 2, 1][idx]] + 12 + (12 if s == 3 else 0)
                place(arps, pluck(m), bt + s * BEAT / 4, 0.45 if intro else 0.8, 0.35 if s % 2 else -0.35)
        bar_t += BAR
        bar_i += 1

    # sidechain pump on pads and bass from the kick grid
    pump = np.ones(n)
    t = np.arange(n) / SR
    beats = np.arange(max(drop, 0), end, BEAT)
    for bt in beats:
        i = int(bt * SR)
        seg = np.arange(min(int(0.3 * SR), n - i)) / SR
        pump[i : i + len(seg)] = np.minimum(pump[i : i + len(seg)], 1 - 0.65 * np.exp(-seg / 0.09))
    pads *= pump[:, None]
    bass *= (0.4 + 0.6 * pump)[:, None]

    # riser into the drop, impact on the drop and on the end card
    r = riser(min(drop, 3.8))
    place(fx, r, drop - len(r) / SR, 0.9)
    place(fx, impact(), drop, 0.8)
    place(fx, impact(), end, 0.9)
    # after `end`: one sustained final chord
    place(pads, pad_chord(CHORDS[0], 3.0), end, 0.9)

    intro_mask = np.where(t < drop, 0.35 + 0.65 * (t / max(drop, 0.01)) ** 2, 1.0)
    arps = lp(arps, 3000) * intro_mask[:, None]  # softer, rising in the intro
    arps = pingpong(arps, BEAT * 0.75)

    # Kick and bass sit a little back so it isn't boomy on laptop speakers.
    mix = drums * 0.78 + bass * 0.55 + reverb(pads, wet=0.35) * 0.55 + reverb(arps, wet=0.3) * 0.62 + fx * 0.6
    mix = hp(mix, 28)
    # fade out the tail
    fade_start = int((total - 0.2) * SR)
    fade = np.ones(n)
    fade[fade_start:] = np.linspace(1, 0, n - fade_start) ** 2
    mix *= fade[:, None]
    mix = np.tanh(1.3 * mix) / np.tanh(1.3)
    mix /= np.abs(mix).max() + 1e-9
    return mix[: int(total * SR)] * 0.89


def sfx(total, pops, whooshes):
    n = int(total * SR)
    buf = np.zeros((n, 2))
    t = t_axis(0.12)
    blip = np.sin(2 * np.pi * (1500 + 900 * (t / 0.12)) * t) * np.exp(-t / 0.035)
    blip += hp(rng.standard_normal(len(t)), 5000) * np.exp(-t / 0.006) * 0.2
    for i, p in enumerate(pops):
        place(buf, blip, p, 0.35, 0.3 if i % 2 else -0.3)
    tw = t_axis(0.55)
    w = bp(rng.standard_normal(len(tw)), 400, 4000) * np.sin(np.pi * tw / 0.55) ** 2
    for x in whooshes:
        place(buf, w, x - 0.25, 0.3)
    return buf


def main():
    tl = json.loads(Path(sys.argv[1]).read_text())
    out = Path(sys.argv[2])
    out.mkdir(parents=True, exist_ok=True)
    sf.write(out / "music.wav", build(tl["total"], tl["drop"], tl["end"]).astype(np.float32), SR)
    sf.write(out / "sfx.wav", sfx(tl["total"], tl["pops"], tl["whooshes"]).astype(np.float32), SR)
    print("music", tl["total"], "s")


if __name__ == "__main__":
    main()
