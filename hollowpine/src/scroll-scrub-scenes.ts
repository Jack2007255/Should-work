import type {
  ScrollScrubScene,
  ScrollScrubTheme,
} from "@/components/scroll-scrub/scroll-scrub";

/** Brand tokens for the journey layer. */
export const scrollScrubTheme: ScrollScrubTheme = {
  accent: "#e8734d",
  background: "#0e1512",
  ink: "#f3efe4",
  muted: "#b3bfb1",
};

/**
 * Single continuous descent, sliced into five seam-locked legs cut from ONE
 * rendered take, so every seam is two adjacent frames of the same film and the
 * scrub never jumps. Each poster is the exact first frame of the clip beside it.
 */
export const scrollScrubScenes: ScrollScrubScene[] = [
  {
    id: "canopy",
    label: "Canopy",
    kicker: "48 feet up",
    title: "It starts in the leaves",
    body: "The climb begins at the lookout deck, where the platform meets the light and the whole forest opens out below your boots.",
    tags: ["Lookout deck", "Sunrise hours"],
    align: "left",
    clip: "/assets/world/scene-01.mp4",
    mobileClip: "/assets/world/scene-01-mobile.mp4",
    poster: "/assets/world/scene-01-poster.png",
    mobilePoster: "/assets/world/scene-01-mobile-poster.png",
  },
  {
    id: "bridge",
    label: "Bridge",
    kicker: "Between the limbs",
    title: "Cross to the far branch",
    body: "A rope suspension bridge strung between two great limbs. It sways a little as you go. That part is on purpose.",
    tags: ["Rope and cedar", "Sways gently"],
    align: "right",
    clip: "/assets/world/scene-02.mp4",
    mobileClip: "/assets/world/scene-02-mobile.mp4",
    poster: "/assets/world/scene-02-poster.png",
    mobilePoster: "/assets/world/scene-02-mobile-poster.png",
  },
  {
    id: "cabin",
    label: "Cabin",
    kicker: "The warm room",
    title: "A window, a lantern",
    body: "Halfway down, the cabin glows. One room, a wood stove, and a bunk built straight into the branch that holds it up.",
    tags: ["Sleeps four", "Wood stove"],
    align: "left",
    linger: 0.35,
    clip: "/assets/world/scene-03.mp4",
    mobileClip: "/assets/world/scene-03-mobile.mp4",
    poster: "/assets/world/scene-03-poster.png",
    mobilePoster: "/assets/world/scene-03-mobile-poster.png",
  },
  {
    id: "understory",
    label: "Understory",
    kicker: "Into the green",
    title: "Down through the ferns",
    body: "The light turns cool and the air turns damp as the ladder drops into the fern understory, quiet enough to hear the trunk creak.",
    tags: ["Shade garden", "Birdsong"],
    align: "right",
    clip: "/assets/world/scene-04.mp4",
    mobileClip: "/assets/world/scene-04-mobile.mp4",
    poster: "/assets/world/scene-04-poster.png",
    mobilePoster: "/assets/world/scene-04-mobile-poster.png",
  },
  {
    id: "floor",
    label: "Ground",
    kicker: "Boots on moss",
    title: "You made it down",
    body: "The last rung rests in deep moss. Catch your breath, then decide whether the night is worth the climb back up.",
    tags: ["Trailhead", "Fire pit"],
    align: "left",
    clip: "/assets/world/scene-05.mp4",
    mobileClip: "/assets/world/scene-05-mobile.mp4",
    poster: "/assets/world/scene-05-poster.png",
    mobilePoster: "/assets/world/scene-05-mobile-poster.png",
  },
];
