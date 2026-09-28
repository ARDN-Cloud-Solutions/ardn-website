# Club Steward walkthrough: voiceover script

Female voice, warm and unhurried, like a club GM showing a peer around, not
an announcer. About 150 words per minute, with a breath between scenes.

The published voiceover is Kokoro's `af_heart` voice (Apache-2.0, generated
locally by `voiceover.py`), chosen by the owner on 2026-09-28. Scene
lengths are fitted to each line automatically, so the times below are a
guide for a human re-record, not hard limits. The current cut runs 1:13; the live line list is `LINES` in voiceover.py.

Delivery notes: say "Club Steward". Keep "tee sheet" and "tee time"
light, not stressed. Smile slightly on the last line.

| # | Scene (on screen) | Start–end (s) | Line |
|---|---|---|---|
| 0 | Title card | 0.0–4.6 | If you run more than one club, this is for you. |
| 1 | Corporate dashboard | 4.2–12.2 | This is Club Steward. Every club in your portfolio, side by side. And the same view narrows itself to each regional VP and GM. |
| 2 | Online join | 11.4–19.4 | It starts on the club's own website. A prospect picks a plan, adds the family, signs and pays in six steps, without a phone call. |
| 3 | Sales pipeline | 18.6–26.6 | Every enquiry lands in a shared pool for your membership directors. If nobody claims it, it escalates. Nothing slips through. |
| 4 | Contracts | 25.8–33.8 | Contracts are signed inside the platform, against the exact version they read. And no money moves until they do. |
| 5 | Member benefits | 33.0–41.0 | Benefits are real numbers, not bullet points. Rounds, guest passes, discounts, tracked across every club they can play. |
| 6 | Tee sheet | 40.2–48.2 | Book a tee time, and the allowance comes down on its own. Rate grids, booking windows and carts, all in one sheet. |
| 7 | Golf performance | 47.4–55.4 | Then you see what every round is worth. Utilization, average ticket, and revenue per available tee time. |
| 8 | Member app | 54.6–62.6 | And your members get one app, in their club's brand. Their card, their benefits, their bills, their tee times. |
| 9 | End card | 61.8–67.8 | More clubs. Not more systems. Book a thirty-minute walkthrough. |

Word count: about 165. If a take runs long, drop "And" at the start of
lines 1 and 8 before cutting anything else.

## Delivering the recording

One WAV or MP3 per line (`vo-00.wav` … `vo-09.wav`), or one continuous
take with a clean second of silence between lines. Room-tone-free, peaks
around -3 dB. `motion.mjs` places each line at its scene's start time.
