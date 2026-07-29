/* ==========================================================================
   Shared behaviour: scene injection, optional video overlay, header state,
   scroll reveals. Depends on SCENE_SVG from scenes.js.
   ========================================================================== */

/* ---------------------------------------------------------------------------
   PHOTOS — real vehicle photography, if you have it.

   Put a path or URL against a key and that scene shows the photo instead of the
   illustration. Only use images you have the right to use: licensed stock, or
   Creative Commons / public-domain files with the attribution their licence
   requires (add it to the footer credit line). Manufacturer press and
   marketing images are copyrighted and are not automatically reusable.

   A photo that 404s or is blocked hides itself and the SVG scene shows through,
   so a wrong path degrades quietly.
--------------------------------------------------------------------------- */
const PHOTOS = {
  hero:        null,
  electric:    null,
  cooper3:     null,
  cooper5:     null,
  convertible: null,
  aceman:      null,
  countryman:  null,
  jcw:         null
};

/* Optional generated clips. Each key matches a data-scene value; a URL here
   layers a video over that scene's SVG. Left null, the SVG stands alone —
   which is the current state, so the site is complete either way. */
const SCENES = {
  hero:        null,
  electric:    null,
  cooper3:     null,
  cooper5:     null,
  convertible: null,
  aceman:      null,
  countryman:  null,
  jcw:         null
};

document.querySelectorAll('[data-scene]').forEach(el => {
  const key = el.dataset.scene;
  const host = el.querySelector('.stage__media') || el.querySelector('.card__art');
  if (!host) return;

  /* 1. paint the SVG scene — this is the always-present background */
  const svg = (typeof SCENE_SVG !== 'undefined') && SCENE_SVG[key];
  if (svg) host.insertAdjacentHTML('afterbegin', svg);

  /* 2. layer a photo over it if one has been supplied */
  const photo = PHOTOS[key];
  if (photo) {
    const img = document.createElement('img');
    img.alt = '';                     // decorative; the scene carries no meaning
    img.loading = 'lazy';
    img.decoding = 'async';
    img.addEventListener('load', () => img.classList.add('is-ready'), { once: true });
    img.addEventListener('error', () => img.remove(), { once: true });
    img.src = photo;
    host.appendChild(img);
  }

  /* 3. layer a clip on top of that if one has been wired in */
  const src = SCENES[key];
  if (!src) return;

  const video = document.createElement('video');
  video.muted = true; video.loop = true; video.playsInline = true;
  video.preload = 'none';
  video.addEventListener('loadeddata', () => video.classList.add('is-ready'), { once: true });
  video.src = src;
  host.appendChild(video);

  new IntersectionObserver((entries, obs) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      video.play().catch(() => {});   // autoplay refusal is fine; the SVG shows
      obs.unobserve(e.target);
    });
  }, { rootMargin: '200px' }).observe(el);
});

/* header: transparent over a dark hero, solid once past it */
const bar = document.querySelector('header');
const hero = document.querySelector('.hero');
if (bar && hero) {
  new IntersectionObserver(
    ([e]) => bar.classList.toggle('is-stuck', !e.isIntersecting),
    { rootMargin: '-70px 0px 0px 0px', threshold: 0 }
  ).observe(hero);
} else if (bar) {
  bar.classList.add('is-solid');   // interior pages have no dark hero
}

/* scroll reveals */
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
  });
}, { threshold: 0.15 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));
