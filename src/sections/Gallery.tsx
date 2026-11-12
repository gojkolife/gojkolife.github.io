import { useRef, useState } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { src, type Category, type Photo } from '../photos';

const FILTERS: ('All' | Category)[] = ['All', 'Places', 'People', 'Animals'];

export default function Gallery({ photos }: { photos: Photo[] }) {
  const root = useRef<HTMLElement>(null);
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>('All');
  const shown = filter === 'All' ? photos : photos.filter((p) => p.category === filter);
  const count = (f: (typeof FILTERS)[number]) => (f === 'All' ? photos.length : photos.filter((p) => p.category === f).length);

  useGSAP(
    () => {
      gsap.matchMedia().add('(prefers-reduced-motion: no-preference)', () => {
        gsap.utils.toArray<HTMLElement>('.gallery-item').forEach((item) => {
          gsap.from(item, { opacity: 0, y: 60, duration: 1.2, ease: 'power3.out', scrollTrigger: { trigger: item, start: 'top 90%' } });
        });
      });
    },
    { scope: root, dependencies: [filter], revertOnUpdate: true }
  );

  return (
    <section className="gallery" id="work" ref={root}>
      <div className="gallery-head">
        <h2>Selected work</h2>
        <div className="gallery-filters" role="group" aria-label="Filter photos">
          {FILTERS.map((f) => (
            <button key={f} type="button" className="label" aria-pressed={filter === f} onClick={() => setFilter(f)}>
              {f} <span>{String(count(f)).padStart(2, '0')}</span>
            </button>
          ))}
        </div>
      </div>
      <div className="gallery-grid">
        {shown.map((p) => (
          <figure className="gallery-item" key={p.id}>
            <div className="gallery-img" style={{ aspectRatio: p.ratio }}>
              <img src={src(p.id, 1000)} alt={p.alt} loading="lazy" />
            </div>
            <figcaption>
              <span>{p.title}</span>
              {p.place && <span className="label">{p.place}</span>}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
