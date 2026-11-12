import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { src, srcSet, where, type Photo } from '../photos';

interface Props {
  photo: Photo;
  index: number;
  /** The detail to zoom into, in % of the image (x from left, y from top) */
  focus: { x: number; y: number };
  /** how far to zoom in (keep under ~3 so the photo stays sharp) */
  zoom?: number;
  /** small text shown before the zoom starts */
  hint?: string;
}

/** Pins the photo while you scroll and slowly zooms into one small detail. */
export default function DetailZoom({ photo, index, focus, zoom = 3.2, hint = 'Look closer' }: Props) {
  const root = useRef<HTMLElement>(null);
  const num = String(index).padStart(2, '0');

  useGSAP(
    () => {
      gsap.matchMedia().add('(prefers-reduced-motion: no-preference)', () => {
        const tl = gsap.timeline({
          scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom bottom', scrub: 0.6 }
        });
        tl.from('.zoom-intro', { opacity: 0, y: 20, duration: 0.15 }, 0)
          .to('.zoom-intro', { opacity: 0, y: -20, duration: 0.12 }, 0.3)
          .to('.zoom-img', { scale: zoom, duration: 0.6, ease: 'power2.inOut' }, 0.25)
          .from('.zoom-ring', { opacity: 0, scale: 1.6, duration: 0.15 }, 0.7)
          .from('.zoom-caption > *', { opacity: 0, y: 20, stagger: 0.04, duration: 0.15 }, 0.75);
      });
    },
    { scope: root }
  );

  return (
    <section className="zoom" ref={root} aria-label={photo.title}>
      <div className="zoom-sticky">
        <img
          className="zoom-img"
          src={src(photo.id, 2000)}
          srcSet={srcSet(photo.id)}
          sizes="100vw"
          alt={photo.alt}
          loading="lazy"
          style={{ transformOrigin: `${focus.x}% ${focus.y}%`, objectPosition: `${focus.x}% ${focus.y}%` }}
        />
        <span className="zoom-ring" aria-hidden="true" style={{ left: `${focus.x}%`, top: `${focus.y}%` }} />
        <p className="zoom-intro label">{num} — {hint}</p>
        <div className="zoom-caption">
          <p className="label">{num} — {where(photo)}</p>
          <h2>{photo.title}</h2>
          {photo.story && <p className="chapter-story">{photo.story}</p>}
        </div>
      </div>
    </section>
  );
}
