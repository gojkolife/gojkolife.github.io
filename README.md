# Gojkolife — Photography

Travel and landscape photography website. Built with Vite + React, GSAP (scroll animations),
Lenis (smooth scrolling) and SplitText from React Bits.

## Add photos
1. Put exported JPEGs in `originals/`
2. Run `npm run photos` (makes web sizes, removes GPS and camera data)
3. Add an entry with title, place and story in `src/photos.ts`

## Run locally
    npm install
    npm run dev

Every push to `main` publishes the site automatically via GitHub Pages.
