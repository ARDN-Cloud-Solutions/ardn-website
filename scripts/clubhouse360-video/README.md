# Clubhouse360 walkthrough video

Builds `public/videos/clubhouse360-walkthrough.mp4` (1920x1080, ~68s, silent,
captioned) from the golf page screenshots in `public/images/golf/`.

```bash
node scripts/clubhouse360-video/render.mjs public/videos/clubhouse360-walkthrough.mp4
```

Needs Playwright with Chrome and `ffmpeg` on the PATH. Scene copy lives in the
`SCENES` array in `render.mjs`; `scene.html` is the frame template. To add a
narrated voiceover later, mux an audio track onto the MP4 and drop the
`muted` attribute in `WalkthroughVideo.tsx`.

The executive brief PDF is built the same way from
`scripts/clubhouse360-brief/brief.html` (`node scripts/clubhouse360-brief/render.mjs`).
Regenerate both after copy changes so they never contradict the page.
