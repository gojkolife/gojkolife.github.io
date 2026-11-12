import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

const TEXT =
  'I photograph the places that stay with me — the colour of the water, the silence of an empty road, the people who share the moment. Every frame is a small story. Take your time.';

export default function Intro() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.matchMedia().add('(prefers-reduced-motion: no-preference)', () => {
        // Words light up one by one as you read down the page
        gsap.fromTo(
          '.intro-word',
          { opacity: 0.16 },
          {
            opacity: 1,
            stagger: 0.05,
            ease: 'none',
            scrollTrigger: { trigger: '.intro-text', start: 'top 80%', end: 'bottom 45%', scrub: true }
          }
        );
      });
    },
    { scope: root }
  );

  return (
    <section className="intro" ref={root}>
      <p className="label">( About the work )</p>
      <p className="intro-text">
        {TEXT.split(' ').map((word, i) => (
          <span className="intro-word" key={i}>
            {word}{' '}
          </span>
        ))}
      </p>
    </section>
  );
}
