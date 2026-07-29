# should work

## MINI concept site

An unofficial single-page design concept for the MINI car brand, built around
full-bleed driving video backgrounds.

- **`index.html`** — the whole site. Self-contained; no build step, no
  dependencies. Open it directly in a browser.
- **`VIDEO-PROMPTS.md`** — the six Higgsfield prompts for the background clips,
  plus settings and expected credit cost.

### Wiring in the video

The `SCENES` object at the bottom of `index.html` maps six scene keys to video
URLs. Every key starts as `null`, which leaves a styled gradient plate in place,
so the page looks finished at any stage:

```js
const SCENES = {
  hero: 'https://…/hero.mp4',   // fills the full-screen hero
  electric: null,               // still shows the fallback plate
  …
};
```

Clips only begin loading as they approach the viewport, so adding all six
doesn't hurt first paint.

### Status

Layout, copy, and video wiring are complete and verified in Chromium at 1440px
and 390px. The six background clips have **not** been generated — the Higgsfield
MCP server was disconnected during the build. Prompts are ready to run in
`VIDEO-PROMPTS.md`.

### Trademark note

This is a design exercise, not a MINI or BMW AG product, and is not affiliated
with or endorsed by either. Brand and model names are referenced nominatively
for demonstration only, and the footer carries a disclaimer to that effect. The
background clips are specified to avoid rendering any badge or wordmark. This
shouldn't be deployed to a public domain as though it were an official MINI
site.
