import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { src, type Photo } from '../photos';

export default function Gallery({ photos }: { photos: Photo[] }) {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.matchMedia().add('(prefers-reduced-motion: no-preference)', () => {
        gsap.utils.toArray<HTMLElement>('.gallery-item').forEach((item) => {
          gsap.from(item, { opacity: 0, y: 60, duration: 1.2, ease: 'power3.out', scrollTrigger: { trigger: item, start: 'top 90%' } });
        });
      });
    },
    { scope: root }
  );

  return (
    <section className="gallery" id="work" ref={root}>
      <div className="gallery-head">
        <h2>Selected work</h2>
        <p className="label">{String(photos.length).padStart(2, '0')} photographs</p>
      </div>
      <div className="gallery-grid">
        {photos.map((p) => (
          <figure className="gallery-item" key={p.id}>
            <div className="gallery-img" style={{ aspectRatio: p.ratio }}>
              <img src={src(p.id, 1000)} alt={p.alt} loading="lazy" />
            </div>
            <figcaption>
              <span>{p.title}</span>
              <span className="label">{p.place}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
