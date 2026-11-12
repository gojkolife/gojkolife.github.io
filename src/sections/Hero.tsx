import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import SplitText from '../components/SplitText';
import { src, srcSet, type Photo } from '../photos';

export default function Hero({ photo }: { photo: Photo }) {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.matchMedia().add('(prefers-reduced-motion: no-preference)', () => {
        // Slow "settle" of the photo on load, then gentle parallax while scrolling away
        gsap.fromTo('.hero-img', { scale: 1.18 }, { scale: 1.04, duration: 2.6, ease: 'power3.out' });
        gsap.to('.hero-media', {
          yPercent: 18,
          ease: 'none',
          scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom top', scrub: true }
        });
        gsap.from('.hero-meta > *', { opacity: 0, y: 12, duration: 1, stagger: 0.12, delay: 1, ease: 'power2.out' });
      });
    },
    { scope: root }
  );

  return (
    <section className="hero" ref={root}>
      <div className="hero-media">
        <img className="hero-img" src={src(photo.id, 2000)} srcSet={srcSet(photo.id)} sizes="100vw" alt={photo.alt} fetchPriority="high" />
      </div>
      <div className="hero-shade" aria-hidden="true" />
      <div className="hero-content">
        <SplitText
          tag="h1"
          text="Feel the moment."
          className="hero-title"
          splitType="chars"
          effect="rise"
          mask
          delay={45}
          duration={1.3}
          trigger="load"
          textAlign="left"
        />
        <div className="hero-meta">
          <p className="label">Travel &amp; landscape photography</p>
          <p className="label">Colour · Detail · Story</p>
        </div>
      </div>
      <span className="scroll-cue label" aria-hidden="true">Scroll</span>
    </section>
  );
}
