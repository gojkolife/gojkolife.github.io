import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { src, srcSet, where, type Photo } from '../photos';

interface Props {
  photo: Photo;
  index: number;
  layout: 'full' | 'split';
  /** put the text on the left */
  reverse?: boolean;
}

export default function Chapter({ photo, index, layout, reverse = false }: Props) {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.matchMedia().add('(prefers-reduced-motion: no-preference)', () => {
        // The frame opens up from a small window to the full photo as it scrolls in
        gsap.fromTo(
          '.chapter-frame',
          { clipPath: layout === 'full' ? 'inset(14% 18% 14% 18%)' : 'inset(10% 10% 10% 10%)' },
          {
            clipPath: 'inset(0% 0% 0% 0%)',
            ease: 'none',
            scrollTrigger: { trigger: root.current, start: 'top 85%', end: 'top 15%', scrub: true }
          }
        );
        gsap.from('.chapter-text > *', {
          opacity: 0,
          y: 24,
          stagger: 0.1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: { trigger: '.chapter-text', start: 'top 85%' }
        });
      });
    },
    { scope: root }
  );

  return (
    <article className={`chapter chapter--${layout}${reverse ? ' chapter--reverse' : ''}`} ref={root}>
      <figure className="chapter-frame" style={{ aspectRatio: layout === 'split' ? photo.ratio : undefined }}>
        <img src={src(photo.id, 2000)} srcSet={srcSet(photo.id)} sizes={layout === 'full' ? '100vw' : '(min-width: 900px) 58vw, 100vw'} alt={photo.alt} loading="lazy" />
      </figure>
      <div className="chapter-text">
        <p className="label">{String(index).padStart(2, '0')} — {where(photo)}</p>
        <h2>{photo.title}</h2>
        {photo.story && <p className="chapter-story">{photo.story}</p>}
      </div>
    </article>
  );
}
