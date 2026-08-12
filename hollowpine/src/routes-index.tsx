import { createFileRoute } from "@tanstack/react-router";

import { ScrollScrub } from "@/components/scroll-scrub/scroll-scrub";
import { scrollScrubScenes, scrollScrubTheme } from "@/scroll-scrub-scenes";

export const Route = createFileRoute("/")({
  head: () => ({
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400..800&family=Inter+Tight:wght@400;500;600&display=swap",
      },
    ],
  }),
  component: Index,
});

const LEVELS = [
  {
    id: "level-canopy",
    tag: "48 ft",
    title: "The canopy deck",
    body: "A plank platform pinned to the highest safe branch. Coffee at the railing, the whole valley underneath.",
    img: "/assets/world/scene-01-poster.png",
  },
  {
    id: "level-bridge",
    tag: "40 ft",
    title: "The rope bridge",
    body: "The crossing to the sleeping branch. Cedar slats, marine rope, hand-splice at every anchor.",
    img: "/assets/world/scene-02-poster.png",
  },
  {
    id: "level-cabin",
    tag: "26 ft",
    title: "The cabin",
    body: "One warm room around the trunk. Wood stove, a bunk for four, and a window that frames the descent.",
    img: "/assets/world/scene-03-poster.png",
  },
  {
    id: "level-floor",
    tag: "0 ft",
    title: "The forest floor",
    body: "Where the ladder finally lands. Fire pit, a bench, and the trailhead back out through the firs.",
    img: "/assets/world/scene-05-poster.png",
  },
];

function Leaf() {
  return (
    <svg
      aria-hidden="true"
      className="th-leaf"
      fill="none"
      height="22"
      viewBox="0 0 24 24"
      width="22"
    >
      <path
        d="M12 21C5 21 3 14 3 9c0-3 1-6 1-6s5 1 8 4c2.4 2.4 3 5.6 3 8 0 0 3-2 4-6 0 0 2 6-2 9-1.6 1.2-3 3-5 3Z"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path d="M12 21V10" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
    </svg>
  );
}

function Index() {
  return (
    <div className="th">
      <header className="th-topbar">
        <a className="th-brand" href="#top">
          <Leaf />
          <span>Hollowpine</span>
        </a>
      </header>

      <main id="top">
        <ScrollScrub scenes={scrollScrubScenes} theme={scrollScrubTheme} />

        <section aria-labelledby="manifesto-h" className="th-manifesto">
          <p className="th-eyebrow">One tree, five floors</p>
          <h2 className="th-display th-manifesto-h" id="manifesto-h">
            Forty-eight feet of handbuilt timber, from the canopy deck to the moss.
          </h2>
          <p className="th-lead">
            Hollowpine is a single treehouse you climb through, not around. Every
            level is a room, and the only way from one to the next is down.
          </p>
        </section>

        <section aria-label="Levels of the treehouse" className="th-levels">
          {LEVELS.map((level, index) => (
            <article className="th-level" key={level.id}>
              <span className="th-level-index">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="th-level-media">
                <img
                  alt={level.title}
                  className="th-level-img"
                  loading="lazy"
                  src={level.img}
                />
                <span className="th-level-tag">{level.tag}</span>
              </div>
              <div className="th-level-copy">
                <h3 className="th-display th-level-h">{level.title}</h3>
                <p>{level.body}</p>
              </div>
            </article>
          ))}
        </section>

        <section aria-labelledby="visit-h" className="th-visit" id="visit">
          <div className="th-visit-inner">
            <p className="th-eyebrow">Stay the night up there</p>
            <h2 className="th-display th-visit-h" id="visit-h">
              Plan a visit to Hollowpine.
            </h2>
            <p className="th-lead">
              Two nights minimum, four guests, one very tall ladder. Booked by
              season, opening the first frost of autumn.
            </p>
            <a className="th-cta th-cta--solid" href="mailto:stay@hollowpine.example">
              Plan a visit
            </a>
          </div>
        </section>
      </main>

      <footer className="th-footer">
        <div className="th-brand th-brand--footer">
          <Leaf />
          <span>Hollowpine</span>
        </div>
        <p className="th-foot-note">
          A treehouse in the coastal firs. Built 2019, still settling.
        </p>
        <a className="th-cta th-cta--ghost" href="#visit">
          Plan a visit
        </a>
      </footer>
    </div>
  );
}
