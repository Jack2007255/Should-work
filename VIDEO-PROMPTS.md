# Background video prompts

Six looping background clips for `index.html`. Each maps to a key in the
`SCENES` object at the bottom of that file — generate, then paste the URL
against the matching key and it loads automatically.

## Shared settings

| Setting | Value | Why |
|---|---|---|
| Model | `seedance_2_0` | Best motion coherence for vehicles |
| Aspect | `16:9` for `hero` / `electric`, `4:3` for the four cards | Matches the CSS containers |
| Duration | `5s` | These loop; longer just costs more |
| Resolution | `720p` | Background video sits under a scrim — 1080p is wasted detail |
| Mode | `fast` | Roughly half the credits of `std` |
| `generate_audio` | `false` | Backgrounds are muted by browsers anyway |

Estimated total: **~120–140 credits** for all six at 720p/fast, versus ~270 at
1080p/std.

## A note on the cars

These prompts describe the car by silhouette and styling cues rather than by
name. Two reasons: image models render badges and grille text as garbled
nonsense, and a clip that carries a legible trademark is a problem if the page
ever goes public. What you get is unmistakably Mini-shaped without claiming to
be a specific model.

If you need genuine vehicles, licensed stock footage is the right route and
these clips become the placeholder layer.

---

### `hero` — coastal road

```
Low tracking shot alongside a small classic-styled British hatchback with a
contrasting white roof and round headlights, driving at speed along a winding
coastal clifftop road. Late afternoon sun low over the sea, warm golden light
raking across the bodywork, ocean glittering beyond the guardrail. Camera
travels parallel to the car at wheel height, smooth stabilised motion, slight
heat shimmer off the tarmac. Cinematic automotive commercial, shallow depth of
field, no visible badges or lettering.
```

### `electric` — city at night

```
Smooth tracking shot of a small modern electric hatchback with a contrasting
roof gliding through wet city streets at night. Neon shopfront signs and traffic
lights reflecting in the rain-slicked asphalt and across the car's glossy paint,
long streaks of bokeh from passing lights. Camera glides alongside then slowly
falls behind. Cool blue and magenta colour palette, cinematic automotive night
photography, no visible badges or lettering.
```

### `cooper` — mountain switchback

```
A small classic-styled hatchback with a contrasting white roof carves through a
tight mountain switchback, body leaning slightly into the corner, tyres gripping
warm dry tarmac. Alpine pine slopes and hazy peaks behind. Mid-distance tracking
shot from the outside of the bend, sunlight flaring through the trees.
Cinematic, crisp, no visible badges or lettering.
```

### `countryman` — gravel forest track

```
A compact crossover with a contrasting roof and roof rails drives along a
gravel forest track, fine dust kicking up behind the rear wheels, dappled
sunlight falling through tall trees. Low rear-quarter tracking shot, natural
green and amber palette, gentle camera sway. Cinematic outdoor adventure
footage, no visible badges or lettering.
```

### `aceman` — bright plaza

```
A small modern electric crossover with a contrasting roof glides slowly across a
bright open modern plaza of pale stone and glass architecture. Clean midday
light, crisp shadows, minimal surroundings, a few blurred pedestrians in the far
background. Slow smooth dolly move following the car from a front three-quarter
angle. Bright airy minimal aesthetic, no visible badges or lettering.
```

### `jcw` — circuit

```
A small hot hatch with a contrasting roof and rear roof spoiler attacks a
race circuit corner, inside front wheel riding up over the red-and-white kerb,
body pitched under hard cornering load. Tyre smoke wisps, sunlit asphalt,
blurred pit barriers behind. Tight tracking shot from the outside of the corner,
fast shutter, motorsport broadcast energy, no visible badges or lettering.
```

---

## Wiring the results in

```js
const SCENES = {
  hero:       'https://…/hero.mp4',
  electric:   'https://…/electric.mp4',
  cooper:     'https://…/cooper.mp4',
  countryman: 'https://…/countryman.mp4',
  aceman:     'https://…/aceman.mp4',
  jcw:        'https://…/jcw.mp4'
};
```

Keys left as `null` keep the gradient fallback, so the page is presentable at
any stage of completion — you can ship the hero clip alone and fill in the
cards later.
