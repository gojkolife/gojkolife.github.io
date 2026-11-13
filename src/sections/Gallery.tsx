import { useRef, useState } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { src, type Category, type Photo } from '../photos';
import Lightbox from '../components/Lightbox';

const CATEGORIES: Category[] = ['Places', 'People', 'Animals', 'Stays'];

/** One horizontal, swipeable row per category. Tap a photo to open it full screen. */
export default function Gallery({ photos }: { photos: Photo[] }) {
  const root = useRef<HTMLElement>(null);
  const [open, setOpen] = useState<{ list: Photo[]; index: number } | null>(null);

  useGSAP(
    () => {
      gsap.matchMedia().add('(prefers-reduced-motion: no-preference)', () => {
        gsap.utils.toArray<HTMLElement>('.gallery-row').forEach((row) => {
          gsap.from(row.querySelectorAll('.gallery-item'), {
            opacity: 0,
            x: 60,
            stagger: 0.08,
            duration: 1.1,
            ease: 'power3.out',
            scrollTrigger: { trigger: row, start: 'top 85%' }
          });
        });
      });
    },
    { scope: root }
  );

  return (
    <section className="gallery" id="work" ref={root}>
      <div className="gallery-head">
        <h2>Selected work</h2>
        <p className="label">Swipe each row · tap to open</p>
      </div>
      {CATEGORIES.map((cat) => {
        const list = photos.filter((p) => p.category === cat);
        if (!list.length) return null;
        return <Row key={cat} title={cat} list={list} onOpen={(index) => setOpen({ list, index })} />;
      })}
      {open && <Lightbox list={open.list} start={open.index} onClose={() => setOpen(null)} />}
    </section>
  );
}

function Row({ title, list, onOpen }: { title: string; list: Photo[]; onOpen: (index: number) => void }) {
  const track = useRef<HTMLDivElement>(null);
  const page = (dir: 1 | -1) => {
    const el = track.current;
    if (el) el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: 'smooth' });
  };

  return (
    <div className="gallery-row">
      <div className="gallery-row-head">
        <h3>
          {title} <span className="label">{String(list.length).padStart(2, '0')}</span>
        </h3>
        <div className="gallery-arrows">
          <button type="button" onClick={() => page(-1)} aria-label={`Previous ${title} photos`}>←</button>
          <button type="button" onClick={() => page(1)} aria-label={`More ${title} photos`}>→</button>
        </div>
      </div>
      {/* data-lenis-prevent-horizontal: let sideways trackpad swipes scroll the row, not the page */}
      <div className="gallery-track" ref={track} data-lenis-prevent-horizontal>
        {list.map((p, i) => (
          <figure className="gallery-item" key={p.id}>
            <button type="button" className="gallery-img" style={{ aspectRatio: p.ratio }} onClick={() => onOpen(i)} aria-label={`Open “${p.title}” full screen`}>
              <img src={src(p.id, 1000)} alt={p.alt} loading="lazy" draggable={false} />
            </button>
            <figcaption>
              <span>{p.title}</span>
              {p.place && <span className="label">{p.place}</span>}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
