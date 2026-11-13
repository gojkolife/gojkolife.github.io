# Gojkolife photography site

Personal travel photography portfolio of Gojko, live at https://gojkolife.github.io.
Vite + React + TypeScript, GSAP + ScrollTrigger for scroll animation, Lenis for smooth scrolling,
SplitText from React Bits for the hero headline.

- Photos: JPEGs go in `originals/`, run `npm run photos` (resizes to WebP, strips GPS/metadata,
  writes `src/photo-sizes.json`), then add an entry in `src/photos.ts` (id = file name).
- Sections live in `src/sections/`, styles in `src/styles.css`.
- Every push to `main` deploys automatically via `.github/workflows/deploy.yml` (Pages source: GitHub Actions).
- Open feedback and the plan for the next round: `docs/next-round.md`. Start there.
- Gojko prefers honest, direct feedback on photos and design, in English.
