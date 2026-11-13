import { useSmoothScroll } from './hooks/useSmoothScroll';
import { photos } from './photos';
import Hero from './sections/Hero';
import Intro from './sections/Intro';
import Chapter from './sections/Chapter';
import DetailZoom from './sections/DetailZoom';
import Gallery from './sections/Gallery';
import About from './sections/About';
import Footer from './sections/Footer';

export default function App() {
  useSmoothScroll();
  const byId = (id: string) => photos.find((p) => p.id === id)!;
  const [north, deadvlei, lagoon, crocodile, person] = ['north', 'deadvlei', 'lagoon', 'crocodile', 'lombok-weaver'].map(byId);

  return (
    <>
      <header className="site-header">
        <a href="#top" className="wordmark">Gojkolife</a>
        <nav aria-label="Main">
          <a href="#stories">Stories</a>
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      <main id="top">
        <Hero photo={north} />
        <Intro />
        <section id="stories" aria-label="Stories">
          <Chapter photo={deadvlei} index={1} layout="split" reverse />
          <Chapter photo={lagoon} index={2} layout="full" />
          {/* The one zoom moment on the site */}
          <DetailZoom photo={crocodile} index={3} focus={{ x: 47.8, y: 48.8 }} zoom={2.2} hint="Into the eye" />
          <Chapter photo={person} index={4} layout="split" />
        </section>
        <Gallery photos={photos} />
        <About />
      </main>
      <Footer />
    </>
  );
}
