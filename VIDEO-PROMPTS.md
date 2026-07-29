# Optional video overlays

The site's backgrounds are the hand-built SVG scenes in `scenes.js` — it is
complete without any video. These prompts are for optionally layering real
driving footage **on top of** a scene.

Each key below matches a `data-scene` value in the HTML and a key in the
`SCENES` object at the top of `site.js`. Paste a URL against a key and that
scene gains a clip; leave it `null` and the SVG stands alone.

## Shared settings

| Setting | Value | Why |
|---|---|---|
| Model | `seedance_2_0` | Best motion coherence for vehicles |
| Aspect | `16:9` for `hero` / `electric`, `4:3` for the six cards | Matches the containers |
| Duration | `5s` | These loop; longer just costs more |
| Resolution | `720p` | Footage sits under a scrim — 1080p detail is wasted |
| Mode | `fast` | Roughly half the credits of `std` |
| `generate_audio` | `false` | Backgrounds are muted by browsers anyway |

Estimated total: **~160–190 credits** for all eight at 720p/fast, versus ~360
at 1080p/std. Generating just `hero` is ~20 and gets most of the effect.

## A note on the cars

These prompts describe the car by silhouette and styling cues rather than by
name. Image models render badges and grille text as garbled nonsense, and a clip
carrying a legible trademark is a problem if the page ever goes public. What you
get is unmistakably Mini-shaped without claiming to be a specific model.

If you need genuine vehicles, licensed stock footage is the right route — and
the SVG scenes remain a working fallback either way.

---

### `hero` — sunset coastal road

```
Low tracking shot alongside a small classic-styled British hatchback with a
contrasting white roof and round headlights, driving at speed along a winding
coastal clifftop road. Late afternoon sun low over the sea, warm golden light
raking across the bodywork, ocean glittering beyond the guardrail. Camera
travels parallel to the car at wheel height, smooth stabilised motion, slight
heat shimmer off the tarmac. Cinematic automotive commercial, shallow depth of
field, no visible badges or lettering.
```

### `electric` — wet city at night

```
Smooth tracking shot of a small modern electric hatchback with a contrasting
roof gliding through wet city streets at night. Neon shopfront signs and traffic
lights reflecting in the rain-slicked asphalt and across the car's glossy paint,
long streaks of bokeh from passing lights. Camera glides alongside then slowly
falls behind. Cool blue and magenta palette, cinematic automotive night
photography, no visible badges or lettering.
```

### `cooper3` — mountain switchback

```
A small classic-styled hatchback with a contrasting white roof carves through a
tight mountain switchback, body leaning slightly into the corner, tyres gripping
warm dry tarmac. Alpine pine slopes and hazy peaks behind. Mid-distance tracking
shot from the outside of the bend, sunlight flaring through the trees.
Cinematic, crisp, no visible badges or lettering.
```

### `cooper5` — city daylight

```
A small five-door hatchback with a contrasting white roof moves through bright
midday city streets, pale glass office buildings on both sides, clean crisp
shadows. Steady side-on tracking shot at door height, mild traffic in the far
background. Bright, airy, documentary-real, no visible badges or lettering.
```

### `convertible` — coastline, roof down

```
A small convertible with the fabric roof folded down drives along an open
coastal road, turquoise sea and pale sand beyond a low wall. Bright late-morning
sun, wind moving the occupants' hair, sparkling water. Slightly elevated
tracking shot from the seaward side. Warm, holiday-bright, no visible badges or
lettering.
```

### `aceman` — bright plaza

```
A small modern electric crossover with a contrasting roof glides slowly across a
bright open plaza of pale stone and glass architecture. Clean midday light,
crisp shadows, minimal surroundings, a few blurred pedestrians far behind. Slow
smooth dolly following the car from a front three-quarter angle. Bright airy
minimal aesthetic, no visible badges or lettering.
```

### `countryman` — gravel forest track

```
A compact crossover with a contrasting roof and roof rails drives along a gravel
forest track, fine dust kicking up behind the rear wheels, dappled sunlight
falling through tall trees. Low rear-quarter tracking shot, natural green and
amber palette, gentle camera sway. Cinematic outdoor adventure footage, no
visible badges or lettering.
```

### `jcw` — circuit

```
A small hot hatch with a contrasting roof and rear roof spoiler attacks a race
circuit corner, inside front wheel riding up over the red-and-white kerb, body
pitched under hard cornering load. Tyre smoke wisps, sunlit asphalt, blurred pit
barriers behind. Tight tracking shot from the outside of the corner, fast
shutter, motorsport broadcast energy, no visible badges or lettering.
```

---

## Wiring the results in

In `site.js`:

```js
const SCENES = {
  hero:        'https://…/hero.mp4',
  electric:    null,           // keeps the SVG scene
  cooper3:     'https://…/cooper3.mp4',
  cooper5:     null,
  convertible: null,
  aceman:      null,
  countryman:  null,
  jcw:         null
};
```

Clips only start loading as their container nears the viewport, and a video that
fails to load or is blocked from autoplaying leaves its SVG scene visible — so a
broken URL degrades quietly rather than showing an empty box.
