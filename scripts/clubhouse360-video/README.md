# Clubhouse360 walkthrough video

Builds `public/videos/clubhouse360-walkthrough.mp4` (1920x1080, 1:17): kinetic
headlines, real product screens, pop-up stat cards that count up, a
voiceover, an original music bed and UI sound effects, plus a matching
`.vtt` captions file.

```bash
# 1. Voiceover: one WAV per scene line (setup notes in voiceover.py)
/tmp/c360tts/bin/python scripts/clubhouse360-video/voiceover.py /tmp/c360-vo
# 2. Motion render + music + mix (PYTHON = the same venv, for music.py)
PYTHON=/tmp/c360tts/bin/python node scripts/clubhouse360-video/motion.mjs \
  public/videos/clubhouse360-walkthrough.mp4 /tmp/c360-vo
```

Preview stills without a full render: `PREVIEW="3,12,40" node motion.mjs …`
writes PNGs at those timestamps next to the output path.

Needs Playwright with Chrome and `ffmpeg`. Where things live:
- `voiceover.py` `LINES`: the narration, one line per scene.
- `motion.mjs` `SCENES`: headline, screenshot and stat cards per scene. Every
  figure must come from the product kit; no prices, savings or customer
  results.
- `music.py`: the synthesised track (124 BPM, A minor) and sound effects.
  Music level and ducking are in the mix step at the end of `motion.mjs`
  (`volume=0.4`, `sidechaincompress`).

After a re-render, update `RUNTIME` in
`src/app/golf-club-management-software/WalkthroughVideo.tsx`, the
VideoObject `duration`/`transcript` in that folder's `page.tsx`, and the
video entry in `src/app/sitemap.ts`.

The executive brief PDF is built from `scripts/clubhouse360-brief/brief.html`
(`node scripts/clubhouse360-brief/render.mjs`). Regenerate both after copy
changes so they never contradict the page.
