# should work

## MINI concept site

An unofficial two-page design concept for the MINI brand. No build step, no
dependencies, no external requests — open `index.html` directly in a browser.

| File | Purpose |
|---|---|
| `index.html` | Home: hero, current range, electric, heritage, configurator CTA |
| `models.html` | Current models: six model cards plus a full range table |
| `styles.css` | Shared styles for both pages |
| `scenes.js` | The background scenes — eight hand-built SVG illustrations |
| `site.js` | Scene injection, optional video overlay, header state, scroll reveals |
| `VIDEO-PROMPTS.md` | Optional Higgsfield prompts for layering real footage over a scene |

### Backgrounds

Every background is an original flat-vector SVG illustration built in
`scenes.js` — a sunset coastal road, a wet city at night, and one scene per
model (mountain switchback, city daylight, coastline, plaza, forest track,
circuit). They're drawn inline, so nothing depends on a CDN, a generated asset,
or a network request.

Real driving footage is optional on top. The `SCENES` object in `site.js` maps
each scene key to a video URL:

```js
const SCENES = { hero: 'https://…/hero.mp4', electric: null, … };
```

A URL layers a clip over that scene; `null` leaves the illustration alone. Clips
lazy-load as they near the viewport, and a failed or autoplay-blocked video
falls back to its scene rather than showing an empty box. All keys are currently
`null` — see `VIDEO-PROMPTS.md` to generate them.

### Using real photography

`site.js` also exposes a `PHOTOS` object with the same keys. A path or URL there
shows a real photo instead of the illustration, layered above the SVG and below
any video:

```js
const PHOTOS = { hero: 'img/cooper-coast.jpg', cooper3: null, … };
```

A photo that fails to load removes itself and the illustration shows through, so
a wrong path degrades quietly.

Only use images you have the right to use — licensed stock, or Creative Commons
and public-domain files with the attribution their licence requires (add it to
the footer credit line). Manufacturer press and marketing photography is
copyrighted and is not automatically reusable, even for a mockup.

### Browser support

Tested in Chromium. Written to work in Safari specifically: `-webkit-`
prefixed `backdrop-filter`, `vh` fallbacks ahead of every `svh` value, and
`transform: translateX()` rather than the newer standalone `translate`
property. `playsinline` and `muted` are set before `src` so iOS Safari will
autoplay any clip that gets wired in.

### Current models

`models.html` lists the range as six nameplates across three body styles —
Cooper 3-Door, Cooper 5-Door, Convertible, Aceman, Countryman, and the John
Cooper Works treatment — with a seventeen-row table covering every petrol and
electric variant.

The table gives body style, powertrain, drive and seating. It deliberately omits
power, range and acceleration figures: those vary by market and model year, so
they should be quoted from current official data rather than from a concept
mockup. Verify the variant list too before any real use.

### Verified

Both pages render in Chromium at 1440px and 390px with no horizontal overflow
and no console errors; all eight scenes inject correctly.

### Trademark note

This is a design exercise, not a MINI or BMW AG product, and is not affiliated
with or endorsed by either. Brand and model names are referenced nominatively
for demonstration only, and both pages carry a footer disclaimer. The
illustrations are original and depict no actual vehicle; video prompts are
written to avoid rendering any badge or wordmark. This shouldn't be deployed to
a public domain as though it were an official MINI site.
