# Hollowpine

A scroll-driven website: as you scroll, you descend through a treehouse, from the
canopy deck down to the forest floor.

**Live:** https://treehouse-descent.higgsfield.app

Built on the Higgsfield `scroll-scrub` website template (React 19 + TanStack
Start, server-rendered, deployed as a single Cloudflare Worker). The visitor's
scroll scrubs a generated film frame by frame; the chapter copy is ordinary
server-rendered HTML reading over it.

## How the descent works

One continuous ~15s vertical crane descent was generated as a single take, then
sliced into five legs. Because every seam is two adjacent frames of the same
film, the scrub never jumps between chapters. Each leg ships a desktop encode, a
720p mobile encode, and posters taken from the encoded clips themselves.

- `src/scroll-scrub-scenes.ts` — the five chapters and brand tokens
- `src/routes-index.tsx` — the page composed around `<ScrollScrub />`
- `src/styles-site-layer.css` — the site's own token and component layer
- `design-brief.md` — palette, type, journey and section plan

Source of record for these files is the deployed site's own repository; this
directory is the committed copy of the work.
