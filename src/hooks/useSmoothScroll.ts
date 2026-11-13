import { useEffect } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

let current: Lenis | null = null;
/** Pause / resume page scrolling, e.g. while a full-screen photo is open. */
export const pageScroll = {
  stop: () => current?.stop(),
  start: () => current?.start()
};

/** Lenis smooth scrolling, driven by GSAP's clock so ScrollTrigger stays in sync. */
export function useSmoothScroll() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const lenis = new Lenis({ lerp: 0.09, anchors: true });
    current = lenis;
    lenis.on('scroll', ScrollTrigger.update);
    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);
    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
      current = null;
    };
  }, []);
}
