# Clubhouse360 walkthrough video

Builds `public/videos/clubhouse360-walkthrough.mp4` (1920x1080, 1:23,
captioned, with a voiceover) from the golf page screenshots in
`public/images/golf/`.

```bash
# 1. Voiceover: one WAV per line + vo-durations.json (setup in voiceover.py)
/tmp/c360tts/bin/python scripts/clubhouse360-video/voiceover.py /tmp/c360-vo
# 2. Video: scenes timed to the narration, audio mixed to -16 LUFS
node scripts/clubhouse360-video/render.mjs public/videos/clubhouse360-walkthrough.mp4 /tmp/c360-vo
```

Omit the voDir argument for a silent cut with fixed scene lengths. Line text
lives in `voiceover.py` (`LINES`); keep it in step with the captions in
`render.mjs` (`SCENES`) and with `voiceover-script.md`. To swap in a human
recording, drop `vo-00.wav` … `vo-09.wav` into the voDir, write matching
durations to `vo-durations.json`, and rerun step 2.

Needs Playwright with Chrome and `ffmpeg` on the PATH. Scene copy lives in the
`SCENES` array in `render.mjs`; `scene.html` is the frame template. Update the length
shown on the hero button in `WalkthroughVideo.tsx` if the runtime changes.

The executive brief PDF is built the same way from
`scripts/clubhouse360-brief/brief.html` (`node scripts/clubhouse360-brief/render.mjs`).
Regenerate both after copy changes so they never contradict the page.
