import { useEffect, useRef, useState } from 'react';
import { src, srcSet, where, type Photo } from '../photos';
import { pageScroll } from '../hooks/useSmoothScroll';

interface Props {
  list: Photo[];
  start: number;
  onClose: () => void;
}

/** Full-screen photo viewer: swipe, arrow keys or buttons to move, Esc to close. */
export default function Lightbox({ list, start, onClose }: Props) {
  const [i, setI] = useState(start);
  const dialog = useRef<HTMLDivElement>(null);
  const touchX = useRef<number | null>(null);
  const p = list[i];
  const go = (d: number) => setI((n) => (n + d + list.length) % list.length);

  useEffect(() => {
    const back = document.activeElement as HTMLElement | null;
    pageScroll.stop();
    document.documentElement.style.overflow = 'hidden';
    dialog.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') go(1);
      if (e.key === 'ArrowLeft') go(-1);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.documentElement.style.overflow = '';
      pageScroll.start();
      back?.focus({ preventScroll: true });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={p.title}
      tabIndex={-1}
      ref={dialog}
      data-lenis-prevent
      onClick={(e) => e.target === e.currentTarget && onClose()}
      onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
        touchX.current = null;
      }}
    >
      <img key={p.id} className="lightbox-img" src={src(p.id, 2000)} srcSet={srcSet(p.id)} sizes="100vw" alt={p.alt} />
      <div className="lightbox-bar">
        <div>
          <p className="lightbox-title">{p.title}</p>
          {where(p) && <p className="label">{where(p)}</p>}
        </div>
        <p className="label">
          {String(i + 1).padStart(2, '0')} / {String(list.length).padStart(2, '0')}
        </p>
      </div>
      <button type="button" className="lightbox-close label" onClick={onClose}>Close ✕</button>
      {list.length > 1 && (
        <>
          <button type="button" className="lightbox-nav lightbox-prev" onClick={() => go(-1)} aria-label="Previous photo">←</button>
          <button type="button" className="lightbox-nav lightbox-next" onClick={() => go(1)} aria-label="Next photo">→</button>
        </>
      )}
    </div>
  );
}
