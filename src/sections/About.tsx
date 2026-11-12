import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { aboutPhoto, src, srcSet } from '../photos';

export default function About() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.matchMedia().add('(prefers-reduced-motion: no-preference)', () => {
        gsap.fromTo(
          '.about-photo img',
          { scale: 1.2 },
          { scale: 1, ease: 'none', scrollTrigger: { trigger: root.current, start: 'top bottom', end: 'bottom top', scrub: true } }
        );
        gsap.from('.about-text > *', {
          opacity: 0,
          y: 24,
          stagger: 0.1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: { trigger: '.about-text', start: 'top 80%' }
        });
      });
    },
    { scope: root }
  );

  return (
    <section className="about" id="about" ref={root}>
      <figure className="about-photo">
        <img src={src(aboutPhoto.id, 2000)} srcSet={srcSet(aboutPhoto.id)} sizes="(min-width: 900px) 40vw, 100vw" alt={aboutPhoto.alt} loading="lazy" />
      </figure>
      <div className="about-text">
        <p className="label">( Behind the camera )</p>
        <h2>Hi, I’m Gojko.</h2>
        <p>
          I travel whenever I can, and the camera comes with me. Not to collect places, but to hold on to how they felt: the cold on
          an empty Alaskan road, the heat in Deadvlei, a stranger’s look that lasts a second.
        </p>
        <p>
          I’m drawn to colour, to small details most people walk past, and to animals that look straight back. Gojkolife is where
          those moments end up.
        </p>
      </div>
    </section>
  );
}
